"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { Download, Upload, Eye, Code, Loader2, AlertCircle } from 'lucide-react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GroupProps } from '@react-three/fiber';

// Component to display the GLB model in the preview
function ModelPreview({ url, displayMode, autoRotate }: { 
  url: string; 
  displayMode: string; 
  autoRotate: boolean 
}) {
  const gltf = useLoader(GLTFLoader, url);
  const meshRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });
  
  // Apply material overrides based on display mode
  React.useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          const originalMaterial = child.material;
          switch (displayMode) {
            case 'wireframe':
              if (Array.isArray(originalMaterial)) {
                child.material = originalMaterial.map(mat => {
                  const newMat = mat.clone();
                  newMat.wireframe = true;
                  newMat.transparent = true;
                  newMat.opacity = 0.8;
                  return newMat;
                });
              } else {
                const newMat = originalMaterial.clone();
                newMat.wireframe = true;
                newMat.transparent = true;
                newMat.opacity = 0.8;
                child.material = newMat;
              }
              break;
            case 'points':
              child.material = new THREE.PointsMaterial({
                color: 0x00ff00,
                size: 0.01,
                sizeAttenuation: true
              });
              break;
            case 'normals':
              child.material = new THREE.MeshNormalMaterial();
              break;
            case 'depth':
              child.material = new THREE.MeshDepthMaterial();
              break;
            case 'solid':
              child.material = new THREE.MeshStandardMaterial({
                color: 0x888888,
                metalness: 0.1,
                roughness: 0.8
              });
              break;
            default:
              // Keep original materials for 'original' mode
              break;
          }
        }
      });
    }
  }, [gltf.scene, displayMode]);
  
  return (
    <primitive 
      ref={meshRef} 
      object={gltf.scene} 
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
    />
  );
}

// Helper function to generate material code
function generateMaterialCode(key: string, material: THREE.Material) {
  let materialType = 'MeshStandardMaterial';
  let properties: string[] = [];
  
  // Determine material type
  if (material instanceof THREE.MeshBasicMaterial) materialType = 'MeshBasicMaterial';
  else if (material instanceof THREE.MeshPhongMaterial) materialType = 'MeshPhongMaterial';
  else if (material instanceof THREE.MeshLambertMaterial) materialType = 'MeshLambertMaterial';
  else if (material instanceof THREE.MeshNormalMaterial) materialType = 'MeshNormalMaterial';
  else if (material instanceof THREE.MeshDepthMaterial) materialType = 'MeshDepthMaterial';
  else if (material instanceof THREE.MeshMatcapMaterial) materialType = 'MeshMatcapMaterial';
  else if (material instanceof THREE.MeshToonMaterial) materialType = 'MeshToonMaterial';
  else if (material instanceof THREE.MeshPhysicalMaterial) materialType = 'MeshPhysicalMaterial';
  else if (material instanceof THREE.MeshStandardMaterial) materialType = 'MeshStandardMaterial';
  else if (material instanceof THREE.ShaderMaterial) materialType = 'ShaderMaterial';
  
  // Extract properties
  properties.push(`color: new THREE.Color(${material.color.r}, ${material.color.g}, ${material.color.b})`);
  
  if ('roughness' in material) properties.push(`roughness: ${(material as any).roughness}`);
  if ('metalness' in material) properties.push(`metalness: ${(material as any).metalness}`);
  if ('opacity' in material) properties.push(`opacity: ${(material as any).opacity}`);
  if ('transparent' in material) properties.push(`transparent: ${(material as any).transparent}`);
  if ('emissive' in material) {
    const emissive = (material as any).emissive;
    properties.push(`emissive: new THREE.Color(${emissive.r}, ${emissive.g}, ${emissive.b})`);
  }
  if ('emissiveIntensity' in material) properties.push(`emissiveIntensity: ${(material as any).emissiveIntensity}`);
  if ('shininess' in material) properties.push(`shininess: ${(material as any).shininess}`);
  if ('wireframe' in material) properties.push(`wireframe: ${(material as any).wireframe}`);
  
  return `map.set('${key}', new THREE.${materialType}({
    ${properties.join(',\n    ')}
  }));`;
}

// Helper function to generate geometry code
function generateGeometryCode(mesh: any) {
  const attributes = [
    `// Position data
    const positions = new Float32Array(${JSON.stringify(mesh.geometry.positions)});
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));`
  ];
  
  if (mesh.geometry.normals) {
    attributes.push(`// Normal data
    const normals = new Float32Array(${JSON.stringify(mesh.geometry.normals)});
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));`);
  }
  
  if (mesh.geometry.uvs) {
    attributes.push(`// UV data
    const uvs = new Float32Array(${JSON.stringify(mesh.geometry.uvs)});
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));`);
  }
  
  let indexCode = '';
  if (mesh.geometry.indices) {
    indexCode = `// Index data
    const indices = new Uint16Array(${JSON.stringify(mesh.geometry.indices)});
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));`;
  }
  
  return `map.set('${mesh.name}', (() => {
    const geometry = new THREE.BufferGeometry();
    ${attributes.join('\n    ')}
    ${indexCode}
    return geometry;
  })());`;
}

// Function to generate transpiled component (embeds all geometry data)
function generateTranspiledComponent(fileName: string, componentName: string, gltfData: any) {
  if (!gltfData) return '// Error: GLTF data not available for transpilation';
  
  const { scene } = gltfData;
  const meshes: any[] = [];
  const uniqueMaterials = new Map<string, THREE.Material>();
  
  // Extract all meshes from the scene
  scene.traverse((object: THREE.Object3D) => {
    if (object.isMesh) {
      // Process geometry
      const geometry = object.geometry;
      const positionArray = geometry.attributes.position.array;
      
      // Get or create material key
      const materialKey = Array.isArray(object.material) 
        ? object.material.map((m: THREE.Material) => m.uuid).join('|') 
        : object.material.uuid;
      
      // Store unique materials
      if (!uniqueMaterials.has(materialKey)) {
        uniqueMaterials.set(materialKey, object.material);
      }
      
      meshes.push({
        name: object.name || `mesh_${meshes.length}`,
        geometry: {
          positions: Array.from(positionArray),
          normals: geometry.attributes.normal ? Array.from(geometry.attributes.normal.array) : null,
          uvs: geometry.attributes.uv ? Array.from(geometry.attributes.uv.array) : null,
          indices: geometry.index ? Array.from(geometry.index.array) : null
        },
        materialKey
      });
    }
  });
  
  // Generate material code
  const materialsCode = Array.from(uniqueMaterials.entries()).map(([key, material]) => {
    return generateMaterialCode(key, material);
  }).join(',\n');
  
  // Generate geometry code
  const geometriesCode = meshes.map(mesh => {
    return generateGeometryCode(mesh);
  }).join(',\n');
  
  // Generate JSX structure
  const jsxStructure = meshes.map(mesh => 
    `      <mesh geometry={geometries.get('${mesh.name}')} material={materials.get('${mesh.materialKey}')} />`
  ).join('\n');
  
  return `import React, { useMemo } from 'react';
import * as THREE from 'three';
import { GroupProps } from '@react-three/fiber';

// Generated with gltfjsx-like transpilation
export default function ${componentName}(props: GroupProps) {
  // Create materials
  const materials = useMemo(() => {
    const map = new Map();
    ${materialsCode}
    return map;
  }, []);
  
  // Create geometries
  const geometries = useMemo(() => {
    const map = new Map();
    ${geometriesCode}
    return map;
  }, []);
  
  return (
    <group {...props} dispose={null}>
${jsxStructure}
    </group>
  );
}`;
}

// Function to generate R3F component code
function generateR3FComponent(fileName: string, componentName: string, options = {}) {
  const { wireframe, displayMode, autoRotate } = options;
  let materialOverride = '';
  let rotationCode = '';
  if (wireframe || displayMode === 'wireframe') {
    materialOverride = `
  // Apply wireframe material override
  React.useEffect(() => {
    if (nodes.Scene) {
      nodes.Scene.traverse((child) => {
        if (child.isMesh) {
          if (Array.isArray(child.material)) {
            child.material = child.material.map(mat => ({
              ...mat,
              wireframe: true,
              transparent: true,
              opacity: 0.8
            }));
          } else {
            child.material = {
              ...child.material,
              wireframe: true,
              transparent: true,
              opacity: 0.8
            }
          }
        }
      })
    }
  }, [nodes])`;
  }
  if (displayMode === 'normals') {
    materialOverride = `
  // Apply normal material override
  React.useEffect(() => {
    if (nodes.Scene) {
      nodes.Scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshNormalMaterial()
        }
      })
    }
  }, [nodes])`;
  }
  if (displayMode === 'solid') {
    materialOverride = `
  // Apply solid material override
  React.useEffect(() => {
    if (nodes.Scene) {
      nodes.Scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x888888,
            metalness: 0.1,
            roughness: 0.8
          })
        }
      })
    }
  }, [nodes])`;
  }
  if (autoRotate) {
    rotationCode = `
  const meshRef = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
    }
  })`;
  }
  
  const imports = `import React, { useRef${materialOverride || rotationCode ? ', useEffect' : ''}${rotationCode ? ', useFrame' : ''} } from 'react'
import { useGLTF${rotationCode ? ', useFrame' : ''} } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'${materialOverride.includes('THREE.') ? `
import * as THREE from 'three'` : ''}`;
  
  return `${imports}
export default function ${componentName}(props: GroupProps) {
  const { nodes, materials } = useGLTF('/${fileName}')${rotationCode}${materialOverride}
  return (
    <group {...props} dispose={null}${autoRotate ? ' ref={meshRef}' : ''}>
      <primitive object={nodes.Scene || nodes[Object.keys(nodes)[0]]} />
    </group>
  )
}
useGLTF.preload('/${fileName}')`;
}

function convertJsxToTsx(jsxCode: string, componentName: string) {
  // Add TypeScript imports
  let tsxCode = jsxCode.replace(
    `import React from 'react'`,
    `import React from 'react'
import { GroupProps } from '@react-three/fiber'`
  );
  // Add type annotations to the main component
  tsxCode = tsxCode.replace(
    `export default function ${componentName}(props) {`,
    `export default function ${componentName}(props: GroupProps) {`
  );
  // Add type for useGLTF hook
  tsxCode = tsxCode.replace(
    `const { nodes, materials } = useGLTF`,
    `const { nodes, materials }: any = useGLTF`
  );
  return tsxCode;
}

// Function to generate code in different languages
function generateCodeInLanguage(fileName: string, componentName: string, language: string, options = {}, gltfData: any = null) {
  const { wireframe, displayMode, autoRotate } = options;
  switch (language) {
    case 'transpiled-tsx':
      return generateTranspiledComponent(fileName, componentName, gltfData);
    case 'transpiled-jsx':
      return generateTranspiledComponent(fileName, componentName, gltfData)
        .replace(/: GroupProps|import { GroupProps } from '@react-three\/fiber'/g, '')
        .replace(/React, { useRef, useMemo }/g, 'React, { useRef, useMemo, useEffect }');
    case 'tsx':
      return generateR3FComponent(fileName, componentName, options);
    case 'jsx':
      return generateR3FComponent(fileName, componentName, options).replace(
        /: GroupProps|: any|import { GroupProps } from '@react-three\/fiber'|: THREE\.GroupProps/g, ''
      );
    case 'vanilla-js':
      return `// Vanilla JavaScript Three.js implementation
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
class ${componentName}Viewer {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.init();
    this.loadModel();
    ${autoRotate ? 'this.animate();' : ''}
  }
  init() {
    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      50, 
      this.canvas.clientWidth / this.canvas.clientHeight, 
      0.1, 
      1000
    );
    this.camera.position.set(0, 0, 5);
    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvas,
      antialias: true 
    });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);
    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    // Handle window resize
    window.addEventListener('resize', () => this.onWindowResize());
  }
  loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      '${fileName}',
      (gltf) => {
        this.model = gltf.scene;
        ${displayMode === 'wireframe' ? `
        // Apply wireframe material
        this.model.traverse((child) => {
          if (child.isMesh) {
            child.material.wireframe = true;
            child.material.transparent = true;
            child.material.opacity = 0.8;
          }
        });` : ''}
        ${displayMode === 'normals' ? `
        // Apply normal materials
        this.model.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshNormalMaterial();
          }
        });` : ''}
        this.scene.add(this.model);
        this.render();
      },
      (progress) => {
        console.log('Loading progress:', progress);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );
  }
  ${autoRotate ? `
  animate() {
    requestAnimationFrame(() => this.animate());
    if (this.model) {
      this.model.rotation.y += 0.01;
    }
    this.controls.update();
    this.render();
  }` : `
  render() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }`}
  onWindowResize() {
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }
}
// Usage:
// const canvas = document.getElementById('canvas');
// const viewer = new ${componentName}Viewer(canvas);
export default ${componentName}Viewer;`;
    case 'python':
      return `#!/usr/bin/env python3
"""
${componentName} 3D Model Viewer
Python implementation using Open3D and Trimesh
"""
import open3d as o3d
import trimesh
import numpy as np
import argparse
import sys
class ${componentName}Viewer:
    def __init__(self, model_path):
        self.model_path = model_path
        self.mesh = None
        self.wireframe = ${displayMode === 'wireframe' ? 'True' : 'False'}
        self.auto_rotate = ${autoRotate ? 'True' : 'False'}
    def load_model(self):
        """Load GLB/GLTF model using trimesh"""
        try:
            # Load using trimesh (supports GLB format)
            scene = trimesh.load(self.model_path)
            if isinstance(scene, trimesh.Scene):
                # Merge all geometries if it's a scene
                mesh = trimesh.util.concatenate([
                    trimesh.Trimesh(vertices=geometry.vertices, faces=geometry.faces)
                    for geometry in scene.geometry.values()
                    if hasattr(geometry, 'vertices')
                ])
            else:
                mesh = scene
            # Convert to Open3D mesh
            self.mesh = o3d.geometry.TriangleMesh()
            self.mesh.vertices = o3d.utility.Vector3dVector(mesh.vertices)
            self.mesh.triangles = o3d.utility.Vector3iVector(mesh.faces)
            # Compute normals
            self.mesh.compute_vertex_normals()
            print(f"Model loaded successfully: {len(mesh.vertices)} vertices, {len(mesh.faces)} faces")
            return True
        except Exception as e:
            print(f"Error loading model: {e}")
            return False
    def setup_visualization(self):
        """Setup Open3D visualization"""
        self.vis = o3d.visualization.Visualizer()
        self.vis.create_window(window_name=f"${componentName} Viewer", width=800, height=600)
        # Configure rendering options
        render_option = self.vis.get_render_option()
        render_option.show_coordinate_frame = True
        render_option.background_color = np.asarray([0.1, 0.1, 0.18])
        if self.wireframe:
            render_option.mesh_show_wireframe = True
            render_option.mesh_show_back_face = True
        # Add mesh to visualizer
        if self.mesh:
            ${displayMode === 'normals' ? `
            # Color by normals
            normals = np.asarray(self.mesh.vertex_normals)
            colors = (normals + 1.0) / 2.0  # Normalize to [0,1]
            self.mesh.vertex_colors = o3d.utility.Vector3dVector(colors)` : `
            # Set default color
            self.mesh.paint_uniform_color([0.7, 0.7, 0.7])`}
            self.vis.add_geometry(self.mesh)
    def run(self):
        """Run the visualization"""
        if not self.load_model():
            return
        self.setup_visualization()
        # Set camera position
        ctr = self.vis.get_view_control()
        ctr.set_zoom(0.8)
        print("Controls:")
        print("- Mouse: Rotate view")
        print("- Scroll: Zoom")
        print("- Ctrl+Mouse: Pan")
        print("- Press 'Q' or close window to exit")
        if self.auto_rotate:
            self._run_with_rotation()
        else:
            self.vis.run()
        self.vis.destroy_window()
    def _run_with_rotation(self):
        """Run with automatic rotation"""
        while True:
            # Rotate the mesh
            rotation_matrix = self.mesh.get_rotation_matrix_from_axis_angle([0, 0.02, 0])
            self.mesh.rotate(rotation_matrix, center=self.mesh.get_center())
            self.vis.update_geometry(self.mesh)
            self.vis.poll_events()
            self.vis.update_renderer()
            if not self.vis.poll_events():
                break
def main():
    parser = argparse.ArgumentParser(description='${componentName} 3D Model Viewer')
    parser.add_argument('model_path', nargs='?', default='${fileName}', 
                       help='Path to the GLB model file')
    args = parser.parse_args()
    viewer = ${componentName}Viewer(args.model_path)
    viewer.run()
if __name__ == "__main__":
    main()
# Required dependencies:
# pip install open3d trimesh numpy`;
    case 'cpp':
      return `// ${componentName} 3D Model Viewer - C++ OpenGL Implementation
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>
#include <assimp/Importer.hpp>
#include <assimp/scene.h>
#include <assimp/postprocess.h>
#include <iostream>
#include <vector>
#include <string>
class ${componentName}Viewer {
private:
    GLFWwindow* window;
    unsigned int VBO, VAO, EBO;
    unsigned int shaderProgram;
    std::vector<float> vertices;
    std::vector<unsigned int> indices;
    glm::mat4 model = glm::mat4(1.0f);
    glm::mat4 view = glm::mat4(1.0f);
    glm::mat4 projection = glm::mat4(1.0f);
    float rotationAngle = 0.0f;
    bool autoRotate = ${autoRotate ? 'true' : 'false'};
    bool wireframe = ${displayMode === 'wireframe' ? 'true' : 'false'};
public:
    ${componentName}Viewer() {}
    bool initialize() {
        // Initialize GLFW
        if (!glfwInit()) {
            std::cerr << "Failed to initialize GLFW" << std::endl;
            return false;
        }
        glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
        glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
        glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
        // Create window
        window = glfwCreateWindow(800, 600, "${componentName} Viewer", NULL, NULL);
        if (!window) {
            std::cerr << "Failed to create GLFW window" << std::endl;
            glfwTerminate();
            return false;
        }
        glfwMakeContextCurrent(window);
        glfwSetFramebufferSizeCallback(window, framebuffer_size_callback);
        // Initialize GLEW
        if (glewInit() != GLEW_OK) {
            std::cerr << "Failed to initialize GLEW" << std::endl;
            return false;
        }
        // Enable depth testing
        glEnable(GL_DEPTH_TEST);
        // Set viewport
        glViewport(0, 0, 800, 600);
        return true;
    }
    bool loadModel(const std::string& path) {
        Assimp::Importer importer;
        const aiScene* scene = importer.ReadFile(path, 
            aiProcess_Triangulate | 
            aiProcess_FlipUVs | 
            aiProcess_GenNormals);
        if (!scene || scene->mFlags & AI_SCENE_FLAGS_INCOMPLETE || !scene->mRootNode) {
            std::cerr << "ERROR::ASSIMP::" << importer.GetErrorString() << std::endl;
            return false;
        }
        processNode(scene->mRootNode, scene);
        setupBuffers();
        std::cout << "Model loaded: " << vertices.size()/6 << " vertices, " 
                 << indices.size()/3 << " triangles" << std::endl;
        return true;
    }
    void processNode(aiNode* node, const aiScene* scene) {
        // Process all the node's meshes
        for (unsigned int i = 0; i < node->mNumMeshes; i++) {
            aiMesh* mesh = scene->mMeshes[node->mMeshes[i]];
            processMesh(mesh, scene);
        }
        // Process all the node's children
        for (unsigned int i = 0; i < node->mNumChildren; i++) {
            processNode(node->mChildren[i], scene);
        }
    }
    void processMesh(aiMesh* mesh, const aiScene* scene) {
        unsigned int baseVertex = vertices.size() / 6;
        // Process vertices
        for (unsigned int i = 0; i < mesh->mNumVertices; i++) {
            // Positions
            vertices.push_back(mesh->mVertices[i].x);
            vertices.push_back(mesh->mVertices[i].y);
            vertices.push_back(mesh->mVertices[i].z);
            // Normals
            if (mesh->HasNormals()) {
                vertices.push_back(mesh->mNormals[i].x);
                vertices.push_back(mesh->mNormals[i].y);
                vertices.push_back(mesh->mNormals[i].z);
            } else {
                vertices.push_back(0.0f);
                vertices.push_back(1.0f);
                vertices.push_back(0.0f);
            }
        }
        // Process indices
        for (unsigned int i = 0; i < mesh->mNumFaces; i++) {
            aiFace face = mesh->mFaces[i];
            for (unsigned int j = 0; j < face.mNumIndices; j++) {
                indices.push_back(baseVertex + face.mIndices[j]);
            }
        }
    }
    void setupBuffers() {
        glGenVertexArrays(1, &VAO);
        glGenBuffers(1, &VBO);
        glGenBuffers(1, &EBO);
        glBindVertexArray(VAO);
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, vertices.size() * sizeof(float), vertices.data(), GL_STATIC_DRAW);
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), indices.data(), GL_STATIC_DRAW);
        // Position attribute
        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(0);
        // Normal attribute
        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));
        glEnableVertexAttribArray(1);
        glBindBuffer(GL_ARRAY_BUFFER, 0);
        glBindVertexArray(0);
    }
    void run() {
        setupShaders();
        // Set camera position
        view = glm::lookAt(glm::vec3(0.0f, 0.0f, 5.0f),
                          glm::vec3(0.0f, 0.0f, 0.0f),
                          glm::vec3(0.0f, 1.0f, 0.0f));
        projection = glm::perspective(glm::radians(50.0f), 800.0f / 600.0f, 0.1f, 100.0f);
        // Render loop
        while (!glfwWindowShouldClose(window)) {
            processInput();
            // Clear buffers
            glClearColor(0.1f, 0.1f, 0.18f, 1.0f);
            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
            // Set wireframe mode
            if (wireframe) {
                glPolygonMode(GL_FRONT_AND_BACK, GL_LINE);
            } else {
                glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
            }
            // Update model matrix
            if (autoRotate) {
                rotationAngle += 0.01f;
                model = glm::rotate(glm::mat4(1.0f), rotationAngle, glm::vec3(0.0f, 1.0f, 0.0f));
            }
            // Use shader program
            glUseProgram(shaderProgram);
            // Set uniforms
            unsigned int modelLoc = glGetUniformLocation(shaderProgram, "model");
            unsigned int viewLoc = glGetUniformLocation(shaderProgram, "view");
            unsigned int projLoc = glGetUniformLocation(shaderProgram, "projection");
            glUniformMatrix4fv(modelLoc, 1, GL_FALSE, glm::value_ptr(model));
            glUniformMatrix4fv(viewLoc, 1, GL_FALSE, glm::value_ptr(view));
            glUniformMatrix4fv(projLoc, 1, GL_FALSE, glm::value_ptr(projection));
            // Draw model
            glBindVertexArray(VAO);
            glDrawElements(GL_TRIANGLES, indices.size(), GL_UNSIGNED_INT, 0);
            glfwSwapBuffers(window);
            glfwPollEvents();
        }
    }
    void setupShaders() {
        const char* vertexShaderSource = R"(
            #version 330 core
            layout (location = 0) in vec3 aPos;
            layout (location = 1) in vec3 aNormal;
            out vec3 FragPos;
            out vec3 Normal;
            uniform mat4 model;
            uniform mat4 view;
            uniform mat4 projection;
            void main() {
                FragPos = vec3(model * vec4(aPos, 1.0));
                Normal = mat3(transpose(inverse(model))) * aNormal;
                gl_Position = projection * view * vec4(FragPos, 1.0);
            }
        )";
        const char* fragmentShaderSource = R"(
            #version 330 core
            out vec4 FragColor;
            in vec3 FragPos;
            in vec3 Normal;
            void main() {
                ${displayMode === 'normals' ? `
                vec3 norm = normalize(Normal);
                FragColor = vec4(abs(norm), 1.0);` : `
                vec3 lightColor = vec3(1.0, 1.0, 1.0);
                vec3 lightPos = vec3(5.0, 5.0, 5.0);
                vec3 objectColor = vec3(0.7, 0.7, 0.7);
                vec3 norm = normalize(Normal);
                vec3 lightDir = normalize(lightPos - FragPos);
                float diff = max(dot(norm, lightDir), 0.0);
                vec3 diffuse = diff * lightColor;
                vec3 ambient = 0.3 * lightColor;
                vec3 result = (ambient + diffuse) * objectColor;
                FragColor = vec4(result, 1.0);`}
            }
        )";
        // Compile and link shaders
        unsigned int vertexShader = glCreateShader(GL_VERTEX_SHADER);
        glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);
        glCompileShader(vertexShader);
        unsigned int fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
        glShaderSource(fragmentShader, 1, &fragmentShaderSource, NULL);
        glCompileShader(fragmentShader);
        shaderProgram = glCreateProgram();
        glAttachShader(shaderProgram, vertexShader);
        glAttachShader(shaderProgram, fragmentShader);
        glLinkProgram(shaderProgram);
        glDeleteShader(vertexShader);
        glDeleteShader(fragmentShader);
    }
    void processInput() {
        if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
            glfwSetWindowShouldClose(window, true);
        if (glfwGetKey(window, GLFW_KEY_W) == GLFW_PRESS)
            wireframe = !wireframe;
        if (glfwGetKey(window, GLFW_KEY_R) == GLFW_PRESS)
            autoRotate = !autoRotate;
    }
    static void framebuffer_size_callback(GLFWwindow* window, int width, int height) {
        glViewport(0, 0, width, height);
    }
    ~${componentName}Viewer() {
        glDeleteVertexArrays(1, &VAO);
        glDeleteBuffers(1, &VBO);
        glDeleteBuffers(1, &EBO);
        glDeleteProgram(shaderProgram);
        glfwTerminate();
    }
};
int main() {
    ${componentName}Viewer viewer;
    if (!viewer.initialize()) {
        return -1;
    }
    if (!viewer.loadModel("${fileName}")) {
        std::cerr << "Failed to load model: ${fileName}" << std::endl;
        return -1;
    }
    std::cout << "Controls:" << std::endl;
    std::cout << "W - Toggle wireframe" << std::endl;
    std::cout << "R - Toggle auto rotation" << std::endl;
    std::cout << "ESC - Exit" << std::endl;
    viewer.run();
    return 0;
}
// Build instructions:
// g++ -o ${componentName.toLowerCase()}_viewer main.cpp -lGL -lGLEW -lglfw -lassimp`;
    default:
      return generateR3FComponent(fileName, componentName, options);
  }
}

export default function GLBConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [modelUrl, setModelUrl] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [componentName, setComponentName] = useState('Model');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'upload' | 'preview' | 'code'>('upload');
  const [gltfData, setGltfData] = useState<any>(null);
  
  // Display options
  const [displayMode, setDisplayMode] = useState('original');
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [showAxes, setShowAxes] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('transpiled-tsx');
  
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.name.endsWith('.glb')) {
      setFile(uploadedFile);
      setError('');
      // Create object URL for preview
      const url = URL.createObjectURL(uploadedFile);
      setModelUrl(url);
      
      try {
        // Load and store GLTF data for transpilation
        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync(url);
        setGltfData(gltf);
      } catch (err) {
        console.error("Error loading GLTF data:", err);
        setError('Error processing GLB file for transpilation');
      }
      
      // Generate component name from filename
      const name = uploadedFile.name.replace('.glb', '').replace(/[^a-zA-Z0-9]/g, '');
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      setComponentName(capitalizedName);
      setActiveTab('preview');
    } else {
      setError('Please upload a valid .glb file');
    }
  };
  
  // Regenerate code when display options change
  const regenerateCode = () => {
    if (file) {
      const options = {
        wireframe: displayMode === 'wireframe',
        displayMode,
        autoRotate
      };
      const code = generateCodeInLanguage(file.name, componentName, selectedLanguage, options, gltfData);
      setGeneratedCode(code);
    }
  };
  
  useEffect(() => {
    if (file) {
      regenerateCode();
    }
  }, [file, displayMode, autoRotate, componentName, selectedLanguage, gltfData]);
  
  const downloadModel = () => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const downloadCode = () => {
    if (!generatedCode) return;
    const extension = 
      selectedLanguage === 'transpiled-tsx' || selectedLanguage === 'tsx' ? 'tsx' :
      selectedLanguage === 'transpiled-jsx' || selectedLanguage === 'jsx' ? 'jsx' :
      selectedLanguage === 'vanilla-js' ? 'js' :
      selectedLanguage === 'python' ? 'py' : 'cpp';
    
    const blob = new Blob([generatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${componentName}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            GLB to React Three Fiber Converter
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Convert your GLB 3D models into self-contained React Three Fiber components.
            Upload your model, preview it, and download the generated code with all geometry data embedded.
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'upload'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Upload className="w-4 h-4 inline mr-2" />
              Upload
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              disabled={!file}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'preview' && file
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              disabled={!generatedCode}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'code' && generatedCode
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              <Code className="w-4 h-4 inline mr-2" />
              Code
            </button>
          </div>
        </div>
        
        {/* Error Display */}
        {error && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-200">{error}</span>
            </div>
          </div>
        )}
        
        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="text-center">
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 hover:border-purple-500 transition-colors">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Upload your GLB model
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Drop your .glb file here or click to browse
                  </p>
                  <input
                    type="file"
                    accept=".glb"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors inline-block"
                  >
                    Choose File
                  </label>
                </div>
              </div>
              {file && (
                <div className="mt-6 p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{file.name}</p>
                      <p className="text-slate-400 text-sm">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={componentName}
                        onChange={(e) => setComponentName(e.target.value)}
                        className="bg-slate-600 text-white px-3 py-1 rounded border border-slate-500 focus:border-purple-500 outline-none"
                        placeholder="Component name"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Preview Tab */}
        {activeTab === 'preview' && modelUrl && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">3D Model Preview</h3>
                <div className="flex items-center gap-4">
                  {/* Display Mode Controls */}
                  <div className="flex items-center gap-2">
                    <label className="text-slate-300 text-sm">Display Mode:</label>
                    <select
                      value={displayMode}
                      onChange={(e) => setDisplayMode(e.target.value)}
                      className="bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm"
                    >
                      <option value="original">Original</option>
                      <option value="wireframe">Wireframe</option>
                      <option value="solid">Solid Color</option>
                      <option value="normals">Normals</option>
                      <option value="depth">Depth</option>
                      <option value="points">Point Cloud</option>
                    </select>
                  </div>
                  
                  {/* Toggle Controls */}
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={autoRotate}
                        onChange={(e) => setAutoRotate(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Auto Rotate
                    </label>
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={showGrid}
                        onChange={(e) => setShowGrid(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Grid
                    </label>
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={showAxes}
                        onChange={(e) => setShowAxes(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Axes
                    </label>
                  </div>
                  
                  <button
                    onClick={downloadModel}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download GLB
                  </button>
                </div>
              </div>
              
              {/* Display Mode Description */}
              <div className="mb-4">
                <div className="bg-slate-900 rounded-lg p-3">
                  <p className="text-slate-400 text-sm">
                    {displayMode === 'original' && 'Showing the original model with its materials and textures.'}
                    {displayMode === 'wireframe' && 'Displaying the model as a wireframe structure showing the mesh geometry.'}
                    {displayMode === 'solid' && 'Rendering the model with a uniform solid color material.'}
                    {displayMode === 'normals' && 'Visualizing surface normals with color-coded directions (RGB = XYZ).'}
                    {displayMode === 'depth' && 'Showing depth information - closer surfaces appear lighter.'}
                    {displayMode === 'points' && 'Displaying the model as a point cloud of vertices.'}
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-900 rounded-lg overflow-hidden" style={{ height: '500px' }}>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <pointLight position={[-10, -10, -10]} intensity={0.3} />
                  <React.Suspense fallback={null}>
                    <ModelPreview url={modelUrl} displayMode={displayMode} autoRotate={autoRotate} />
                  </React.Suspense>
                  {showGrid && (
                    <gridHelper args={[10, 10, '#444444', '#666666']} />
                  )}
                  {showAxes && (
                    <axesHelper args={[2]} />
                  )}
                  <OrbitControls enableZoom enablePan enableRotate />
                  <Environment preset="studio" />
                </Canvas>
              </div>
              
              <p className="text-slate-400 text-sm mt-4 text-center">
                Use mouse to rotate, zoom, and pan around the model. Try different display modes to analyze the model structure.
              </p>
            </div>
          </div>
        )}
        
        {/* Code Tab */}
        {activeTab === 'code' && generatedCode && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex justify-between items-center p-6 border-b border-slate-700">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    Generated Code
                  </h3>
                  
                  {/* Language Selection */}
                  <div className="flex items-center gap-2">
                    <label className="text-slate-300 text-sm">Language:</label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm"
                    >
                      <option value="transpiled-tsx">Transpiled TypeScript (TSX)</option>
                      <option value="transpiled-jsx">Transpiled JavaScript (JSX)</option>
                      <option value="tsx">TypeScript React (TSX)</option>
                      <option value="jsx">JavaScript React (JSX)</option>
                      <option value="vanilla-js">Vanilla JavaScript</option>
                      <option value="python">Python (Open3D)</option>
                      <option value="cpp">C++ (OpenGL)</option>
                    </select>
                  </div>
                </div>
                
                <button
                  onClick={downloadCode}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download {selectedLanguage.toUpperCase()}
                </button>
              </div>
              
              {/* Language Info Banner */}
              <div className="p-4 bg-slate-900 border-b border-slate-700">
                <div className="text-sm text-slate-400">
                  {selectedLanguage === 'transpiled-tsx' && (
                    <span>✨ <strong>Transpiled TypeScript:</strong> Self-contained component with all geometry data embedded (no external GLB needed)</span>
                  )}
                  {selectedLanguage === 'transpiled-jsx' && (
                    <span>✨ <strong>Transpiled JavaScript:</strong> Self-contained component with all geometry data embedded (no external GLB needed)</span>
                  )}
                  {selectedLanguage === 'tsx' && (
                    <span>⚡ <strong>TypeScript React:</strong> Uses external GLB file (requires file in public folder)</span>
                  )}
                  {selectedLanguage === 'jsx' && (
                    <span>⚡ <strong>JavaScript React:</strong> Uses external GLB file (requires file in public folder)</span>
                  )}
                  {selectedLanguage === 'vanilla-js' && (
                    <span>✨ <strong>Vanilla JavaScript:</strong> Pure Three.js implementation - works in any web environment</span>
                  )}
                  {selectedLanguage === 'python' && (
                    <span>🐍 <strong>Python:</strong> Cross-platform 3D viewer using Open3D and Trimesh libraries</span>
                  )}
                  {selectedLanguage === 'cpp' && (
                    <span>⚙️ <strong>C++:</strong> High-performance OpenGL renderer with GLFW and Assimp</span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto text-sm max-h-96 overflow-y-auto">
                  <code className="text-slate-300 whitespace-pre-wrap">{generatedCode}</code>
                </pre>
              </div>
              
              <div className="p-6 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-3">
                  {selectedLanguage.startsWith('transpiled-') ? 'Transpiled Component Instructions' :
                   selectedLanguage === 'tsx' || selectedLanguage === 'jsx' ? 'Installation Instructions' :
                   selectedLanguage === 'vanilla-js' ? 'Usage Instructions' :
                   selectedLanguage === 'python' ? 'Python Setup' :
                   'Build Instructions'}
                </h4>
                <div className="space-y-3">
                  {(selectedLanguage === 'transpiled-tsx' || selectedLanguage === 'transpiled-jsx') && (
                    <>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">1. Copy the generated code to a new file:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-blue-400">{`import ${componentName} from './${componentName}'`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">2. Use the component directly (no external GLB needed):</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-blue-400">{`<Canvas>
  <${componentName} />
</Canvas>`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">3. All geometry data is embedded in the component</p>
                      </div>
                    </>
                  )}
                  {(selectedLanguage === 'tsx' || selectedLanguage === 'jsx') && (
                    <>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">1. Install required dependencies:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-green-400">npm install three @react-three/fiber @react-three/drei</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">2. Place your GLB file in the public folder</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">3. Import and use the component:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-blue-400">{`import ${componentName} from './${componentName}'`}</code>
                        </pre>
                      </div>
                    </>
                  )}
                  {selectedLanguage === 'vanilla-js' && (
                    <>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">1. Include Three.js in your HTML:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-green-400">{`<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">2. Create a canvas element:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-blue-400">{`<canvas id="canvas" width="800" height="600"></canvas>`}</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">3. Initialize the viewer:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-blue-400">{`const canvas = document.getElementById('canvas');
const viewer = new ${componentName}Viewer(canvas);`}</code>
                        </pre>
                      </div>
                    </>
                  )}
                  {selectedLanguage === 'python' && (
                    <>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">1. Install required dependencies:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-green-400">pip install open3d trimesh numpy</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">2. Run the viewer:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-blue-400">python {componentName.toLowerCase()}_viewer.py [model_path]</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">3. Controls:</p>
                        <ul className="text-slate-400 text-sm ml-4 space-y-1">
                          <li>• Mouse: Rotate view</li>
                          <li>• Scroll: Zoom in/out</li>
                          <li>• Ctrl+Mouse: Pan view</li>
                          <li>• Q: Quit application</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {selectedLanguage === 'cpp' && (
                    <>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">1. Install dependencies (Ubuntu/Debian):</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-green-400">sudo apt install libglew-dev libglfw3-dev libassimp-dev libglm-dev</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">2. Compile:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-blue-400">g++ -o viewer main.cpp -lGL -lGLEW -lglfw -lassimp</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">3. Run:</p>
                        <pre className="bg-slate-900 rounded p-2 text-sm">
                          <code className="text-blue-400">./viewer</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm mb-2">4. Controls:</p>
                        <ul className="text-slate-400 text-sm ml-4 space-y-1">
                          <li>• W: Toggle wireframe</li>
                          <li>• R: Toggle auto rotation</li>
                          <li>• ESC: Exit application</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {(displayMode !== 'original' || autoRotate) && (
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Applied Options:</p>
                      <ul className="text-slate-400 text-sm ml-4 space-y-1">
                        {displayMode !== 'original' && <li>• Display Mode: {displayMode}</li>}
                        {autoRotate && <li>• Auto Rotation: Enabled</li>}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}