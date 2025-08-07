import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { MeshData, MaterialData, ProjectStructure, GeometryData } from '@/app/types/glb-convertor';

// Language configuration for code generation with proper 2025 library support
const LANGUAGES = {
  typescript: {
    extension: 'tsx',
    geometryExtension: 'ts',
    comment: '//',
    string: '"',
    function: 'function',
    class: 'class',
    import: 'import',
    export: 'export',
    typeDeclaration: (name: string) => `type ${name} = {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `${key}: ${value},`,
    array: (items: string[]) => `[${items.join(', ')}]`,
    stringLiteral: (value: string) => `"${value}"`
  },
  javascript: {
    extension: 'jsx',
    geometryExtension: 'js',
    comment: '//',
    string: '"',
    function: 'function',
    class: 'class',
    import: 'import',
    export: 'export',
    typeDeclaration: () => '',
    typeEnd: '',
    objectProperty: (key: string, value: string) => `${key}: ${value},`,
    array: (items: string[]) => `[${items.join(', ')}]`,
    stringLiteral: (value: string) => `"${value}"`
  },
  python: {
    extension: 'py',
    geometryExtension: 'py',
    comment: '#',
    string: "'",
    function: 'def',
    class: 'class',
    import: 'import',
    export: '',
    typeDeclaration: () => '',
    typeEnd: '',
    objectProperty: (key: string, value: string) => `    ${key} = ${value}`,
    array: (items: string[]) => `[${items.join(', ')}]`,
    stringLiteral: (value: string) => `"${value}"`
  },
  java: {
    extension: 'java',
    geometryExtension: 'java',
    comment: '//',
    string: '"',
    function: '',
    class: 'class',
    import: 'import',
    export: '',
    typeDeclaration: (name: string) => `public class ${name} {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `    public ${value} ${key};`,
    array: (items: string[]) => `new ArrayList<>() {{ ${items.map(item => `add(${item})`).join('; ')}; }}`,
    stringLiteral: (value: string) => `"${value}"`
  },
  csharp: {
    extension: 'cs',
    geometryExtension: 'cs',
    comment: '//',
    string: '"',
    function: '',
    class: 'class',
    import: 'using',
    export: '',
    typeDeclaration: (name: string) => `public class ${name} {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `    public ${value} ${key} { get; set; }`,
    array: (items: string[]) => `new List<${items[0]?.split(' ')[0] || 'object'}> { ${items.join(', ')} }`,
    stringLiteral: (value: string) => `"${value}"`
  },
  cpp: {
    extension: 'cpp',
    geometryExtension: 'h',
    comment: '//',
    string: '"',
    function: '',
    class: 'class',
    import: '#include',
    export: '',
    typeDeclaration: (name: string) => `class ${name} { public:`,
    typeEnd: '};',
    objectProperty: (key: string, value: string) => `    ${value} ${key};`,
    array: (items: string[]) => `{${items.join(', ')}}`,
    stringLiteral: (value: string) => `"${value}"`
  },
  go: {
    extension: 'go',
    geometryExtension: 'go',
    comment: '//',
    string: '"',
    function: 'func',
    class: 'type',
    import: 'import',
    export: '',
    typeDeclaration: (name: string) => `type ${name} struct {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `    ${key} ${value} \`json:"${key.toLowerCase()}"\``,
    array: (items: string[]) => `[]interface{}{${items.join(', ')}}`,
    stringLiteral: (value: string) => `"` + value.replace(/"/g, '\\"') + `"`
  },
  rust: {
    extension: 'rs',
    geometryExtension: 'rs',
    comment: '//',
    string: '"',
    function: 'fn',
    class: 'struct',
    import: 'use',
    export: '',
    typeDeclaration: (name: string) => `pub struct ${name} {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `    pub ${key}: ${value},`,
    array: (items: string[]) => `vec![${items.join(', ')}]`,
    stringLiteral: (value: string) => `"` + value.replace(/"/g, '\\"') + `"`
  },
  swift: {
    extension: 'swift',
    geometryExtension: 'swift',
    comment: '//',
    string: '"',
    function: 'func',
    class: 'class',
    import: 'import',
    export: '',
    typeDeclaration: (name: string) => `class ${name} {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `    var ${key}: ${value}`,
    array: (items: string[]) => `[${items.join(', ')}]`,
    stringLiteral: (value: string) => `"${value}"`
  },
  kotlin: {
    extension: 'kt',
    geometryExtension: 'kt',
    comment: '//',
    string: '"',
    function: 'fun',
    class: 'class',
    import: 'import',
    export: '',
    typeDeclaration: (name: string) => `class ${name} {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `    var ${key}: ${value}? = null`,
    array: (items: string[]) => `listOf(${items.join(', ')})`,
    stringLiteral: (value: string) => `"${value}"`
  },
  ruby: {
    extension: 'rb',
    geometryExtension: 'rb',
    comment: '#',
    string: '"',
    function: 'def',
    class: 'class',
    import: 'require',
    export: '',
    typeDeclaration: (name: string) => `class ${name}`,
    typeEnd: 'end',
    objectProperty: (key: string, value: string) => `  attr_accessor :${key}`,
    array: (items: string[]) => `[${items.join(', ')}]`,
    stringLiteral: (value: string) => `"${value}"`
  },
  php: {
    extension: 'php',
    geometryExtension: 'php',
    comment: '//',
    string: '"',
    function: 'function',
    class: 'class',
    import: 'use',
    export: '',
    typeDeclaration: (name: string) => `class ${name} {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `    private $${key};`,
    array: (items: string[]) => `array(${items.join(', ')})`,
    stringLiteral: (value: string) => `"${value}"`
  },
  scala: {
    extension: 'scala',
    geometryExtension: 'scala',
    comment: '//',
    string: '"',
    function: 'def',
    class: 'class',
    import: 'import',
    export: '',
    typeDeclaration: (name: string) => `case class ${name} (`,
    typeEnd: ')',
    objectProperty: (key: string, value: string) => `${key}: ${value},`,
    array: (items: string[]) => `Seq(${items.join(', ')})`,
    stringLiteral: (value: string) => `"${value}"`
  },
  dart: {
    extension: 'dart',
    geometryExtension: 'dart',
    comment: '//',
    string: '"',
    function: 'void',
    class: 'class',
    import: 'import',
    export: '',
    typeDeclaration: (name: string) => `class ${name} {`,
    typeEnd: '}',
    objectProperty: (key: string, value: string) => `  ${value} ${key};`,
    array: (items: string[]) => `[${items.join(', ')}]`,
    stringLiteral: (value: string) => `"${value}"`
  },
  r: {
    extension: 'R',
    geometryExtension: 'R',
    comment: '#',
    string: '"',
    function: 'function',
    class: 'setClass',
    import: 'library',
    export: '',
    typeDeclaration: (name: string) => `setClass("${name}", slots = list(`,
    typeEnd: '))',
    objectProperty: (key: string, value: string) => `"${key}" = "${value}",`,
    array: (items: string[]) => `c(${items.join(', ')})`,
    stringLiteral: (value: string) => `"${value}"`
  }
} as const;
type LanguageId = keyof typeof LANGUAGES;

/**
 * Capitalizes the first letter of a string
 * Required for React components which must start with uppercase letters
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Sanitizes names to be valid identifiers
 */
function sanitizeName(name: string): string {
  // Replace invalid characters with underscores
  let safeName = name.replace(/[^a-zA-Z0-9_]/g, '_');
  // Ensure it starts with a letter
  if (!/^[a-zA-Z_]/.test(safeName)) {
    safeName = '_' + safeName;
  }
  // Handle reserved keywords
  const reservedKeywords = ['default', 'function', 'class', 'export', 'import', 'let', 'const', 'var', 'continue', 'break', 'case'];
  if (reservedKeywords.includes(safeName.toLowerCase())) {
    safeName = '_' + safeName;
  }
  return safeName;
}

/**
 * Generates a complete project structure from a GLTF model
 * Now with separate geometry files for better component management
 */
export function generateProjectStructure(
  gltf: GLTF, 
  componentName: string,
  displayMode: string = 'original',
  languageId: LanguageId = 'typescript'
): ProjectStructure {
  const lang = LANGUAGES[languageId];
  const meshes: MeshData[] = [];
  const materials: MaterialData[] = [];
  const geometries: GeometryData[] = []; // New array for geometry files
  let totalVertices = 0;
  let totalTriangles = 0;
  // Process the scene to extract meshes and materials
  gltf.scene.traverse((object) => {
    if (object.isMesh) {
      const mesh = object as THREE.Mesh;
      const geometry = mesh.geometry;
      // Count vertices and triangles
      totalVertices += geometry.attributes.position.count;
      if (geometry.index) {
        totalTriangles += geometry.index.count / 3;
      } else {
        totalTriangles += geometry.attributes.position.count / 3;
      }
      // Generate mesh name
      const meshName = mesh.name || `Mesh_${meshes.length}`;
      const safeMeshName = sanitizeName(meshName);
      const capitalizedMeshName = capitalize(safeMeshName);
      // Generate geometry file
      const geometryFile = generateGeometryFile(capitalizedMeshName, geometry, languageId);
      geometries.push({
        name: capitalizedMeshName,
        content: geometryFile,
        originalName: meshName
      });
      // Generate mesh component
      const meshComponent = generateMeshComponent(capitalizedMeshName, geometry, displayMode, languageId);
      meshes.push({
        name: capitalizedMeshName,
        content: meshComponent,
        originalName: meshName
      });
      // Process materials
      const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
      const materialName = material.name || `Material_${materials.length}`;
      const safeMaterialName = sanitizeName(materialName);
      const capitalizedMaterialName = capitalize(safeMaterialName);
      // Only add unique materials
      if (!materials.some(m => m.name === capitalizedMaterialName)) {
        const materialComponent = generateMaterialComponent(capitalizedMaterialName, material, displayMode, languageId);
        materials.push({
          name: capitalizedMaterialName,
          content: materialComponent,
          originalName: materialName
        });
      }
    }
  });
  // Capitalize the component name for the main component
  const capitalizedComponentName = capitalize(componentName);
  // Generate the main index component
  const indexContent = generateIndexComponent(capitalizedComponentName, meshes, materials, displayMode, languageId);
  // Generate the example page
  const examplePageContent = generateExamplePage(capitalizedComponentName, languageId);
  return {
    componentName: capitalizedComponentName,
    indexContent,
    examplePageContent,
    meshes,
    geometries, // Include geometries in the structure
    materials,
    totalVertices,
    totalTriangles
  };
}

/**
 * Generates a separate geometry file for Three.js
 * Creates a reusable geometry object that can be imported by components
 */
function generateGeometryFile(meshName: string, geometry: THREE.BufferGeometry, languageId: LanguageId): string {
  const lang = LANGUAGES[languageId];
  // Extract geometry data
  const positions = Array.from(geometry.attributes.position.array);
  const normals = geometry.attributes.normal ? Array.from(geometry.attributes.normal.array) : null;
  const uvs = geometry.attributes.uv ? Array.from(geometry.attributes.uv.array) : null;
  const indices = geometry.index ? Array.from(geometry.index.array) : null;
  // Check if geometry is too large for direct embedding
  const isLargeGeometry = positions.length > 100000;
  
  switch (languageId) {
    case 'typescript':
    case 'javascript':
      return `import * as THREE from 'three';
// ${meshName} geometry definition
// This can be easily modified without affecting component code
export const ${meshName}Geometry = (() => {
  const geometry = new THREE.BufferGeometry();
  ${isLargeGeometry ? 
    `// Large geometry detected - using optimized approach
    // For extremely large models, consider using binary data files
    const createGeometryChunk = (data, itemSize) => {
      const chunkSize = 50000;
      const chunks = [];
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        chunks.push(new Float32Array(chunk));
      }
      return chunks;
    };
    // Position data
    const positionChunks = createGeometryChunk(${JSON.stringify(positions)}, 3);
    const positions = new Float32Array(positionChunks.reduce((acc, chunk) => [...acc, ...chunk], []));
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    ${normals ? `// Normal data
    const normalChunks = createGeometryChunk(${JSON.stringify(normals)}, 3);
    const normals = new Float32Array(normalChunks.reduce((acc, chunk) => [...acc, ...chunk], []));
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ''}
    ${uvs ? `// UV data
    const uvChunks = createGeometryChunk(${JSON.stringify(uvs)}, 2);
    const uvs = new Float32Array(uvChunks.reduce((acc, chunk) => [...acc, ...chunk], []));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ''}
    ${indices ? `// Index data
    const indexChunks = createGeometryChunk(${JSON.stringify(indices)}, 1);
    const indices = new Uint16Array(indexChunks.reduce((acc, chunk) => [...acc, ...chunk], []));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ''}` :
    `// Position data
    const positions = new Float32Array(${JSON.stringify(positions)});
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    ${normals ? `// Normal data
    const normals = new Float32Array(${JSON.stringify(normals)});
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ''}
    ${uvs ? `// UV data
    const uvs = new Float32Array(${JSON.stringify(uvs)});
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ''}
    ${indices ? `// Index data
    const indices = new Uint16Array(${JSON.stringify(indices)});
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ''}`
  }
  geometry.computeVertexNormals();
  return geometry;
})();
`;

    case 'python':
      return `import numpy as np
import moderngl
from pyglet import window

class ${meshName}Geometry:
    """${meshName} geometry definition for ModernGL"""
    
    @staticmethod
    def create(ctx: moderngl.Context):
        # Position data
        ${isLargeGeometry ? 
          `# Large geometry detected - using chunked approach
          positions = np.array(${JSON.stringify(positions)}, dtype='f4')
          vbo_positions = ctx.buffer(reserve=positions.nbytes)
          vbo_positions.write(positions.tobytes())
          
          ${normals ? `# Normal data
          normals = np.array(${JSON.stringify(normals)}, dtype='f4')
          vbo_normals = ctx.buffer(reserve=normals.nbytes)
          vbo_normals.write(normals.tobytes())` : ''}
          
          ${uvs ? `# UV data
          uvs = np.array(${JSON.stringify(uvs)}, dtype='f4')
          vbo_uvs = ctx.buffer(reserve=uvs.nbytes)
          vbo_uvs.write(uvs.tobytes())` : ''}
          
          ${indices ? `# Index data
          indices = np.array(${JSON.stringify(indices)}, dtype='i4')
          ibo = ctx.buffer(reserve=indices.nbytes)
          ibo.write(indices.tobytes())` : ''}` :
          `positions = np.array(${JSON.stringify(positions)}, dtype='f4')
          vbo_positions = ctx.buffer(positions)
          
          ${normals ? `# Normal data
          normals = np.array(${JSON.stringify(normals)}, dtype='f4')
          vbo_normals = ctx.buffer(normals)` : ''}
          
          ${uvs ? `# UV data
          uvs = np.array(${JSON.stringify(uvs)}, dtype='f4')
          vbo_uvs = ctx.buffer(uvs)` : ''}
          
          ${indices ? `# Index data
          indices = np.array(${JSON.stringify(indices)}, dtype='i4')
          ibo = ctx.buffer(indices)` : ''}`
        }
        
        # Create vertex array
        ${indices ? 
          `vao = ctx.vertex_array(
              prog,
              [
                  (vbo_positions, '3f', 'in_position'),
                  ${normals ? `(vbo_normals, '3f', 'in_normal'),` : ''}
                  ${uvs ? `(vbo_uvs, '2f', 'in_uv'),` : ''}
              ],
              index_buffer=ibo
          )` :
          `vao = ctx.vertex_array(
              prog,
              [
                  (vbo_positions, '3f', 'in_position'),
                  ${normals ? `(vbo_normals, '3f', 'in_normal'),` : ''}
                  ${uvs ? `(vbo_uvs, '2f', 'in_uv'),` : ''}
              ]
          )`
        }
        
        return vao
`;

    case 'java':
      return `import com.jme3.scene.Mesh;
import com.jme3.scene.VertexBuffer;
import com.jme3.math.Vector3f;
import com.jme3.math.Vector2f;
import com.jme3.buffer.BufferUtils;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;

/**
 * ${meshName} geometry definition for jMonkeyEngine 2025
 */
public class ${meshName}Geometry {
    public static Mesh create() {
        Mesh mesh = new Mesh();
        
        // Position data
        float[] positions = ${JSON.stringify(positions)};
        mesh.setBuffer(VertexBuffer.Type.Position, 3, BufferUtils.createFloatBuffer(positions));
        
        ${normals ? `// Normal data
        float[] normals = ${JSON.stringify(normals)};
        mesh.setBuffer(VertexBuffer.Type.Normal, 3, BufferUtils.createFloatBuffer(normals));` : ''}
        
        ${uvs ? `// UV data
        float[] uvs = ${JSON.stringify(uvs)};
        mesh.setBuffer(VertexBuffer.Type.TexCoord, 2, BufferUtils.createFloatBuffer(uvs));` : ''}
        
        ${indices ? `// Index data
        int[] indices = ${JSON.stringify(indices)};
        mesh.setBuffer(VertexBuffer.Type.Index, 3, BufferUtils.createIntBuffer(indices));` : ''}
        
        mesh.updateBound();
        return mesh;
    }
}
`;

    case 'csharp':
      return `using UnityEngine;
using System.Collections.Generic;

/**
 * ${meshName} geometry definition for Unity 2025
 */
public static class ${meshName}Geometry
{
    public static Mesh Create()
    {
        Mesh mesh = new Mesh();
        
        // Position data
        List<Vector3> vertices = new List<Vector3>();
        ${JSON.stringify(positions).match(/-?\\d+\\.\\d+/g)?.map((_, i, arr) => 
          i % 3 === 0 ? `vertices.Add(new Vector3(${arr[i]}, ${arr[i+1]}, ${arr[i+2]}));` : ''
        ).filter(Boolean).join('\n        ') || ''}
        
        mesh.SetVertices(vertices);
        
        ${normals ? `// Normal data
        List<Vector3> normals = new List<Vector3>();
        ${JSON.stringify(normals).match(/-?\\d+\\.\\d+/g)?.map((_, i, arr) => 
          i % 3 === 0 ? `normals.Add(new Vector3(${arr[i]}, ${arr[i+1]}, ${arr[i+2]}));` : ''
        ).filter(Boolean).join('\n        ') || ''}
        mesh.SetNormals(normals);` : ''}
        
        ${uvs ? `// UV data
        List<Vector2> uv = new List<Vector2>();
        ${JSON.stringify(uvs).match(/-?\\d+\\.\\d+/g)?.map((_, i, arr) => 
          i % 2 === 0 ? `uv.Add(new Vector2(${arr[i]}, ${arr[i+1]}));` : ''
        ).filter(Boolean).join('\n        ') || ''}
        mesh.SetUVs(0, uv);` : ''}
        
        ${indices ? `// Index data
        List<int> triangles = new List<int>();
        ${JSON.stringify(indices).match(/\\d+/g)?.map(index => 
          `triangles.Add(${index});`
        ).join('\n        ') || ''}
        mesh.SetTriangles(triangles, 0);` : ''}
        
        return mesh;
    }
}
`;

    case 'cpp':
      return `#pragma once
#include <vector>
#include <glm/glm.hpp>

/**
 * ${meshName} geometry definition for OpenGL with GLM
 */
struct ${meshName}Geometry {
    std::vector<glm::vec3> vertices;
    ${normals ? `std::vector<glm::vec3> normals;` : ''}
    ${uvs ? `std::vector<glm::vec2> uvs;` : ''}
    ${indices ? `std::vector<unsigned int> indices;` : ''}
    
    ${meshName}Geometry() {
        // Position data
        float positions[] = {${positions.join(', ')}};
        for (int i = 0; i < sizeof(positions) / sizeof(float); i += 3) {
            vertices.push_back(glm::vec3(positions[i], positions[i+1], positions[i+2]));
        }
        
        ${normals ? `// Normal data
        float normals_data[] = {${(normals || []).join(', ')}};
        for (int i = 0; i < sizeof(normals_data) / sizeof(float); i += 3) {
            this->normals.push_back(glm::vec3(normals_data[i], normals_data[i+1], normals_data[i+2]));
        }` : ''}
        
        ${uvs ? `// UV data
        float uvs_data[] = {${(uvs || []).join(', ')}};
        for (int i = 0; i < sizeof(uvs_data) / sizeof(float); i += 2) {
            this->uvs.push_back(glm::vec2(uvs_data[i], uvs_data[i+1]));
        }` : ''}
        
        ${indices ? `// Index data
        unsigned int indices_data[] = {${(indices || []).join(', ')}};
        for (int i = 0; i < sizeof(indices_data) / sizeof(unsigned int); i++) {
            this->indices.push_back(indices_data[i]);
        }` : ''}
    }
    
    void setupBuffers(unsigned int& VAO, unsigned int& VBO, ${indices ? 'unsigned int& EBO' : ''}) {
        glGenVertexArrays(1, &VAO);
        glGenBuffers(1, &VBO);
        ${indices ? 'glGenBuffers(1, &EBO);' : ''}
        
        glBindVertexArray(VAO);
        
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, vertices.size() * sizeof(glm::vec3), &vertices[0], GL_STATIC_DRAW);
        
        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(0);
        
        ${normals ? `// Setup normals
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, normals.size() * sizeof(glm::vec3), &normals[0], GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(1);` : ''}
        
        ${uvs ? `// Setup UVs
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, uvs.size() * sizeof(glm::vec2), &uvs[0], GL_STATIC_DRAW);
        glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(2);` : ''}
        
        ${indices ? `// Setup element buffer
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), &indices[0], GL_STATIC_DRAW);` : ''}
        
        glBindVertexArray(0);
    }
};`;

    case 'go':
      return `package geometry

import (
    "github.com/go-gl/mathgl/mgl32"
)

/**
 * ${meshName} geometry definition for Go-GL
 */
type ${meshName}Geometry struct {
    Vertices []mgl32.Vec3
    ${normals ? `Normals []mgl32.Vec3` : ''}
    ${uvs ? `UVs []mgl32.Vec2` : ''}
    ${indices ? `Indices []uint32` : ''}
}

func New${meshName}Geometry() *${meshName}Geometry {
    geom := &${meshName}Geometry{
        Vertices: make([]mgl32.Vec3, ${positions.length / 3}),
        ${normals ? `Normals: make([]mgl32.Vec3, ${normals.length / 3}),` : ''}
        ${uvs ? `UVs: make([]mgl32.Vec2, ${uvs.length / 2}),` : ''}
        ${indices ? `Indices: make([]uint32, ${indices.length}),` : ''}
    }
    
    // Position data
    positions := []float32{${positions.join(', ')}}
    for i := 0; i < len(positions); i += 3 {
        geom.Vertices[i/3] = mgl32.Vec3{positions[i], positions[i+1], positions[i+2]}
    }
    
    ${normals ? `// Normal data
    normals := []float32{${(normals || []).join(', ')}}
    for i := 0; i < len(normals); i += 3 {
        geom.Normals[i/3] = mgl32.Vec3{normals[i], normals[i+1], normals[i+2]}
    }` : ''}
    
    ${uvs ? `// UV data
    uvs := []float32{${(uvs || []).join(', ')}}
    for i := 0; i < len(uvs); i += 2 {
        geom.UVs[i/2] = mgl32.Vec2{uvs[i], uvs[i+1]}
    }` : ''}
    
    ${indices ? `// Index data
    indices := []uint32{${(indices || []).join(', ')}}
    for i, idx := range indices {
        geom.Indices[i] = idx
    }` : ''}
    
    return geom
}

func (g *${meshName}Geometry) SetupBuffers() (uint32, uint32${indices ? ', uint32' : ''}) {
    var vao, vbo ${indices ? ', ebo' : ''} uint32
    
    gl.GenVertexArrays(1, &vao)
    gl.GenBuffers(1, &vbo)
    ${indices ? 'gl.GenBuffers(1, &ebo)' : ''}
    
    gl.BindVertexArray(vao)
    gl.BindBuffer(gl.ARRAY_BUFFER, vbo)
    
    // Convert vertices to float slice
    vertices := make([]float32, len(g.Vertices)*3)
    for i, v := range g.Vertices {
        vertices[i*3] = v.X()
        vertices[i*3+1] = v.Y()
        vertices[i*3+2] = v.Z()
    }
    
    gl.BufferData(gl.ARRAY_BUFFER, len(vertices)*4, gl.Ptr(vertices), gl.STATIC_DRAW)
    
    // Position attribute
    gl.VertexAttribPointer(0, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(0)
    
    ${normals ? `// Normal attribute
    normals := make([]float32, len(g.Normals)*3)
    for i, n := range g.Normals {
        normals[i*3] = n.X()
        normals[i*3+1] = n.Y()
        normals[i*3+2] = n.Z()
    }
    
    gl.BufferData(gl.ARRAY_BUFFER, len(normals)*4, gl.Ptr(normals), gl.STATIC_DRAW)
    gl.VertexAttribPointer(1, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(1)` : ''}
    
    ${uvs ? `// UV attribute
    uvs := make([]float32, len(g.UVs)*2)
    for i, uv := range g.UVs {
        uvs[i*2] = uv.X()
        uvs[i*2+1] = uv.Y()
    }
    
    gl.BufferData(gl.ARRAY_BUFFER, len(uvs)*4, gl.Ptr(uvs), gl.STATIC_DRAW)
    gl.VertexAttribPointer(2, 2, gl.FLOAT, false, 2*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(2)` : ''}
    
    ${indices ? `// Element buffer
    gl.BindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo)
    gl.BufferData(gl.ELEMENT_ARRAY_BUFFER, len(g.Indices)*4, gl.Ptr(g.Indices), gl.STATIC_DRAW)` : ''}
    
    gl.BindVertexArray(0)
    return vao, vbo${indices ? ', ebo' : ''}
}`;

    case 'rust':
      return `use glam::{Vec3, Vec2};
use std::rc::Rc;
use std::cell::RefCell;

/**
 * ${meshName} geometry definition for Rust using wgpu
 */
pub struct ${meshName}Geometry {
    pub vertices: Vec<Vec3>,
    ${normals ? `pub normals: Vec<Vec3>,` : ''}
    ${uvs ? `pub uvs: Vec<Vec2>,` : ''}
    ${indices ? `pub indices: Vec<u32>,` : ''}
}

impl ${meshName}Geometry {
    pub fn new() -> Self {
        // Position data
        let positions = [
            ${Array.from({ length: positions.length / 3 }, (_, i) => 
              `Vec3::new(${positions[i*3]}, ${positions[i*3+1]}, ${positions[i*3+2]})`
            ).join(',\n            ')}
        ];
        
        ${normals ? `// Normal data
        let normals = [
            ${Array.from({ length: normals.length / 3 }, (_, i) => 
              `Vec3::new(${normals[i*3]}, ${normals[i*3+1]}, ${normals[i*3+2]})`
            ).join(',\n            ')}
        ];` : ''}
        
        ${uvs ? `// UV data
        let uvs = [
            ${Array.from({ length: uvs.length / 2 }, (_, i) => 
              `Vec2::new(${uvs[i*2]}, ${uvs[i*2+1]})`
            ).join(',\n            ')}
        ];` : ''}
        
        ${indices ? `// Index data
        let indices = vec![
            ${indices.join(',\n            ')}
        ];` : ''}
        
        Self {
            vertices: positions.to_vec(),
            ${normals ? `normals: normals.to_vec(),` : ''}
            ${uvs ? `uvs: uvs.to_vec(),` : ''}
            ${indices ? `indices,` : ''}
        }
    }
    
    pub fn create_vertex_buffer(&self, device: &wgpu::Device) -> wgpu::Buffer {
        let vertex_data = self.vertices
            .iter()
            .flat_map(|v| v.to_array())
            .collect::<Vec<_>>();
            
        device.create_buffer_init(
            &wgpu::util::BufferInitDescriptor {
                label: Some("${meshName} Vertex Buffer"),
                contents: bytemuck::cast_slice(&vertex_data),
                usage: wgpu::BufferUsages::VERTEX,
            }
        )
    }
    
    ${indices ? `pub fn create_index_buffer(&self, device: &wgpu::Device) -> wgpu::Buffer {
        device.create_buffer_init(
            &wgpu::util::BufferInitDescriptor {
                label: Some("${meshName} Index Buffer"),
                contents: bytemuck::cast_slice(&self.indices),
                usage: wgpu::BufferUsages::INDEX,
            }
        )
    }` : ''}
}`;

    case 'swift':
      return `import Metal
import simd

/**
 * ${meshName} geometry definition for Metal
 */
struct ${meshName}Geometry {
    var vertices: [SIMD3<Float>]
    ${normals ? `var normals: [SIMD3<Float>]` : ''}
    ${uvs ? `var uvs: [SIMD2<Float>]` : ''}
    ${indices ? `var indices: [UInt16]` : ''}
    
    init() {
        // Position data
        let positions: [Float] = [${positions.join(', ')}]
        self.vertices = []
        for i in stride(from: 0, to: positions.count, by: 3) {
            vertices.append(SIMD3<Float>(positions[i], positions[i+1], positions[i+2]))
        }
        
        ${normals ? `// Normal data
        let normalsData: [Float] = [${(normals || []).join(', ')}]
        self.normals = []
        for i in stride(from: 0, to: normalsData.count, by: 3) {
            normals.append(SIMD3<Float>(normalsData[i], normalsData[i+1], normalsData[i+2]))
        }` : ''}
        
        ${uvs ? `// UV data
        let uvsData: [Float] = [${(uvs || []).join(', ')}]
        self.uvs = []
        for i in stride(from: 0, to: uvsData.count, by: 2) {
            uvs.append(SIMD2<Float>(uvsData[i], uvsData[i+1]))
        }` : ''}
        
        ${indices ? `// Index data
        self.indices = [${(indices || []).join(', ')}]` : ''}
    }
    
    func setupBuffers(device: MTLDevice) -> (
        vertexBuffer: MTLBuffer,
        ${normals ? 'normalBuffer: MTLBuffer,' : ''}
        ${uvs ? 'uvBuffer: MTLBuffer,' : ''}
        ${indices ? 'indexBuffer: MTLBuffer?' : 'indexBuffer: nil'}
    ) {
        let vertexData = vertices.flatMap { [$0.x, $0.y, $0.z] }
        let vertexBuffer = device.makeBuffer(
            bytes: vertexData, 
            length: MemoryLayout<Float>.size * vertexData.count,
            options: []
        )!
        
        ${normals ? `let normalData = normals.flatMap { [$0.x, $0.y, $0.z] }
        let normalBuffer = device.makeBuffer(
            bytes: normalData, 
            length: MemoryLayout<Float>.size * normalData.count,
            options: []
        )!` : ''}
        
        ${uvs ? `let uvData = uvs.flatMap { [$0.x, $0.y] }
        let uvBuffer = device.makeBuffer(
            bytes: uvData, 
            length: MemoryLayout<Float>.size * uvData.count,
            options: []
        )!` : ''}
        
        ${indices ? `let indexBuffer = device.makeBuffer(
            bytes: indices, 
            length: MemoryLayout<UInt16>.size * indices.count,
            options: []
        )` : ''}
        
        return (
            vertexBuffer: vertexBuffer,
            ${normals ? 'normalBuffer: normalBuffer,' : ''}
            ${uvs ? 'uvBuffer: uvBuffer,' : ''}
            ${indices ? 'indexBuffer: indexBuffer' : 'indexBuffer: nil'}
        )
    }
}`;

    default:
      // Fallback to TypeScript for unsupported languages
      return `import * as THREE from 'three';
// ${meshName} geometry definition
// This can be easily modified without affecting component code
export const ${meshName}Geometry = (() => {
  const geometry = new THREE.BufferGeometry();
  // Position data
  const positions = new Float32Array(${JSON.stringify(positions)});
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  ${normals ? `// Normal data
  const normals = new Float32Array(${JSON.stringify(normals)});
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ''}
  ${uvs ? `// UV data
  const uvs = new Float32Array(${JSON.stringify(uvs)});
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ''}
  ${indices ? `// Index data
  const indices = new Uint16Array(${JSON.stringify(indices)});
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ''}
  geometry.computeVertexNormals();
  return geometry;
})();
`;
  }
}

/**
 * Generates a mesh component that imports geometry from a separate file
 * Component name starts with capital letter as required by React
 */
function generateMeshComponent(meshName: string, _geometry: THREE.BufferGeometry, displayMode: string, languageId: LanguageId): string {
  const lang = LANGUAGES[languageId];
  
  switch (languageId) {
    case 'typescript':
    case 'javascript':
      return `import React from 'react';
import { ${meshName}Geometry } from '../geometries/${meshName}Geometry';
/**
 * ${meshName} component
 * Simple wrapper that uses pre-defined geometry
 * Easy to modify without touching geometry data
 */
export default function ${meshName}(props: any) {
  return <mesh geometry={${meshName}Geometry} {...props} />;
}`;

    case 'python':
      return `# Note: This is a PyGame/ModernGL implementation
import moderngl
from pyglet import window

class ${meshName}:
    """${meshName} mesh for ModernGL rendering"""
    
    def __init__(self, ctx: moderngl.Context, material=None):
        self.ctx = ctx
        self.material = material
        self.vao = ${meshName}Geometry.create(ctx)
        
    def render(self, projection, view):
        # Bind material if available
        if self.material:
            self.material.use()
            self.material['projection'].write(projection)
            self.material['view'].write(view)
        
        # Render the mesh
        self.vao.render(moderngl.TRIANGLES)
`;

    case 'java':
      return `import com.jme3.scene.Geometry;
import com.jme3.material.Material;

/**
 * ${meshName} mesh for jMonkeyEngine
 */
public class ${meshName} {
    private Geometry geometry;
    
    public ${meshName}(com.jme3.asset.AssetManager assetManager, Material material) {
        this.geometry = new Geometry("${meshName}", ${meshName}Geometry.create());
        this.geometry.setMaterial(material);
    }
    
    public Geometry getGeometry() {
        return geometry;
    }
}
`;

    case 'csharp':
      return `using UnityEngine;

/**
 * ${meshName} mesh for Unity
 */
public class ${meshName} : MonoBehaviour
{
    [SerializeField] private Material material;
    
    void Start()
    {
        MeshFilter meshFilter = gameObject.AddComponent<MeshFilter>();
        meshFilter.mesh = ${meshName}Geometry.Create();
        
        MeshRenderer renderer = gameObject.AddComponent<MeshRenderer>();
        renderer.material = material;
    }
}
`;

    default:
      // Fallback to TypeScript for unsupported languages
      return `import React from 'react';
import { ${meshName}Geometry } from '../geometries/${meshName}Geometry';
/**
 * ${meshName} component
 * Simple wrapper that uses pre-defined geometry
 * Easy to modify without touching geometry data
 */
export default function ${meshName}(props) {
  return <mesh geometry={${meshName}Geometry} {...props} />;
}`;
  }
}

/**
 * Generates a material component based on display mode
 * Component name starts with capital letter as required by React
 */
function generateMaterialComponent(materialName: string, material: THREE.Material, displayMode: string, languageId: LanguageId): string {
  const lang = LANGUAGES[languageId];
  // Base material properties
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
  
  // Extract properties based on display mode
  switch (displayMode) {
    case 'wireframe':
      properties.push('wireframe: true');
      properties.push('transparent: true');
      properties.push('opacity: 0.8');
      break;
    case 'solid':
      properties.push('color: 0x888888');
      properties.push('metalness: 0.1');
      properties.push('roughness: 0.8');
      break;
    case 'normals':
      materialType = 'MeshNormalMaterial';
      break;
    case 'depth':
      materialType = 'MeshDepthMaterial';
      break;
    case 'points':
      materialType = 'PointsMaterial';
      properties.push('color: 0x00ff00');
      properties.push('size: 0.01');
      properties.push('sizeAttenuation: true');
      break;
    default:
      // Original material properties
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
      break;
  }
  
  switch (languageId) {
    case 'typescript':
    case 'javascript':
      return `import * as THREE from 'three';
/**
 * ${materialName} material
 * Reusable material definition
 */
export default function ${materialName}() {
  return new THREE.${materialType}({
    ${properties.join(',\n    ')}
  });
}`;

    case 'python':
      return `# Note: This is a ModernGL implementation
import moderngl

class ${materialName}:
    """${materialName} material for ModernGL"""
    
    def __init__(self, ctx: moderngl.Context):
        self.ctx = ctx
        self.prog = ctx.program(
            vertex_shader='''
                #version 330
                
                in vec3 in_position;
                ${normals ? 'in vec3 in_normal;' : ''}
                ${uvs ? 'in vec2 in_uv;' : ''}
                
                uniform mat4 projection;
                uniform mat4 view;
                
                out vec3 v_position;
                ${normals ? 'out vec3 v_normal;' : ''}
                ${uvs ? 'out vec2 v_uv;' : ''}
                
                void main() {
                    v_position = in_position;
                    ${normals ? 'v_normal = in_normal;' : ''}
                    ${uvs ? 'v_uv = in_uv;' : ''}
                    gl_Position = projection * view * vec4(in_position, 1.0);
                }
            ''',
            fragment_shader='''
                #version 330
                
                in vec3 v_position;
                ${normals ? 'in vec3 v_normal;' : ''}
                ${uvs ? 'in vec2 v_uv;' : ''}
                
                out vec4 f_color;
                
                void main() {
                    ${displayMode === 'wireframe' ? 
                      'f_color = vec4(0.0, 0.0, 0.0, 0.2);' :
                      displayMode === 'normals' ?
                      'f_color = vec4(normalize(v_normal) * 0.5 + 0.5, 1.0);' :
                      displayMode === 'points' ?
                      'f_color = vec4(0.0, 1.0, 0.0, 1.0);' :
                      'f_color = vec4(0.5, 0.5, 0.5, 1.0);'}
                }
            '''
        )
        self.projection = self.prog['projection']
        self.view = self.prog['view']
    
    def use(self):
        self.prog.use()
`;

    case 'java':
      return `import com.jme3.material.Material;
import com.jme3.asset.AssetManager;

/**
 * ${materialName} material for jMonkeyEngine
 */
public class ${materialName} {
    private Material material;
    
    public ${materialName}(AssetManager assetManager) {
        material = new Material(assetManager, "Common/MatDefs/Light/Lighting.j3md");
        ${displayMode === 'wireframe' ? 
          'material.setBoolean("Wireframe", true);' :
          displayMode === 'normals' ?
          'material = new Material(assetManager, "Common/MatDefs/Misc/Normal.frag.glsl");' :
          displayMode === 'points' ?
          'material = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");' :
          `// Standard material properties
          material.setColor("Diffuse", new ColorRGBA(0.5f, 0.5f, 0.5f, 1.0f));
          material.setColor("Specular", new ColorRGBA(0.2f, 0.2f, 0.2f, 1.0f));
          material.setFloat("Shininess", 64.0f);`}
    }
    
    public Material getMaterial() {
        return material;
    }
}
`;

    case 'csharp':
      return `using UnityEngine;

/**
 * ${materialName} material for Unity
 */
public class ${materialName} : MonoBehaviour
{
    private Material material;
    
    void Start()
    {
        material = new Material(Shader.Find("Universal Render Pipeline/Lit"));
        
        ${displayMode === 'wireframe' ? 
          `material.SetInt("_Wireframe", 1);
          material.SetColor("_Color", new Color(0f, 0f, 0f, 0.2f));` :
          displayMode === 'normals' ?
          `material = new Material(Shader.Find("Universal Render Pipeline/Normal"));
          material.SetColor("_Color", Color.white);` :
          displayMode === 'points' ?
          `material = new Material(Shader.Find("Particles/Standard Unlit"));
          material.SetColor("_BaseColor", Color.green);` :
          `// Standard material properties
          material.SetColor("_BaseColor", new Color(0.5f, 0.5f, 0.5f, 1.0f));
          material.SetFloat("_Metallic", 0.1f);
          material.SetFloat("_Smoothness", 0.8f);`}
    }
    
    public Material GetMaterial()
    {
        return material;
    }
}
`;

    default:
      // Fallback to TypeScript for unsupported languages
      return `import * as THREE from 'three';
/**
 * ${materialName} material
 * Reusable material definition
 */
export default function ${materialName}() {
  return new THREE.${materialType}({
    ${properties.join(',\n    ')}
  });
}`;
  }
}

/**
 * Generates the main index component that assembles all parts
 * Component name starts with capital letter as required by React
 */
function generateIndexComponent(
  componentName: string,
  meshes: MeshData[],
  materials: MaterialData[],
  displayMode: string,
  languageId: LanguageId
): string {
  const lang = LANGUAGES[languageId];
  
  switch (languageId) {
    case 'typescript':
    case 'javascript':
      // Generate imports
      const meshImports = meshes.map(mesh => 
        `import ${mesh.name} from './meshes/${mesh.name}';`
      ).join('\n');
      const materialImports = materials.map(material => 
        `import ${material.name} from './materials/${material.name}';`
      ).join('\n');
      
      const meshElements = meshes.map((mesh, i) => {
        const material = materials[i % materials.length];
        return `      <${mesh.name} material={${material.name}()} />`;
      }).join('\n');
      
      return `import React, { useRef } from 'react';
import type { GroupProps } from '@react-three/fiber';
${meshImports}
${materialImports}
/**
 * ${componentName} component
 * Main component that assembles all mesh and material parts
 */
export default function ${componentName}(props: GroupProps) {
  const ref = useRef();
  return (
    <group ref={ref} {...props}>
${meshElements}
    </group>
  );
}`;

    case 'python':
      return `# Note: This is a ModernGL/Pyglet implementation
import pyglet
import moderngl
import numpy as np
from pyglet.window import key

${meshes.map(mesh => `from .meshes.${mesh.name} import ${mesh.name}`).join('\n')}
${materials.map(material => `from .materials.${material.name} import ${material.name}`).join('\n')}

class ${componentName}:
    """${componentName} component for ModernGL"""
    
    def __init__(self, ctx: moderngl.Context):
        self.ctx = ctx
        self.meshes = [
            ${meshes.map((mesh, i) => {
              const material = materials[i % materials.length];
              return `${mesh.name}(ctx, ${material.name}(ctx))`;
            }).join(',\n            ')}
        ]
        self.projection = None
        self.view = None
        
    def set_matrices(self, projection, view):
        self.projection = projection
        self.view = view
        
    def render(self):
        for mesh in self.meshes:
            mesh.render(self.projection, self.view)
`;

    case 'java':
      return `import com.jme3.app.SimpleApplication;
import com.jme3.scene.Node;
import com.jme3.asset.AssetManager;
import com.jme3.material.Material;

/**
 * ${componentName} component for jMonkeyEngine
 */
public class ${componentName} extends Node {
    public ${componentName}(AssetManager assetManager) {
        super("${componentName}");
        
        // Create materials
        ${materials.map((material, i) => 
          `Material material${i} = new ${material.name}(assetManager).getMaterial();`
        ).join('\n        ')}
        
        // Create meshes
        ${meshes.map((mesh, i) => 
          `this.attachChild(new ${mesh.name}(assetManager, material${i % materials.length}));`
        ).join('\n        ')}
    }
}
`;

    case 'csharp':
      return `using UnityEngine;
using System.Collections.Generic;

/**
 * ${componentName} component for Unity
 */
public class ${componentName} : MonoBehaviour
{
    private List<GameObject> meshes = new List<GameObject>();
    
    void Start()
    {
        // Create materials
        ${materials.map((material, i) => 
          `var material${i} = new ${material.name}().GetMaterial();`
        ).join('\n        ')}
        
        // Create meshes
        ${meshes.map((mesh, i) => 
          `var ${mesh.name.ToLower()}Obj = new GameObject("${mesh.name}");
          ${mesh.name.ToLower()}Obj.transform.parent = transform;
          var ${mesh.name}Component = ${mesh.name.ToLower()}Obj.AddComponent<${mesh.name}>();
          meshes.Add(${mesh.name.ToLower()}Obj);`
        ).join('\n        ')}
    }
}
`;

    default:
      // Fallback to TypeScript for unsupported languages
      return `import React, { useRef } from 'react';
import type { GroupProps } from '@react-three/fiber';
// Mesh imports
${meshes.map(mesh => `import ${mesh.name} from './meshes/${mesh.name}';`).join('\n')}
// Material imports
${materials.map(material => `import ${material.name} from './materials/${material.name}';`).join('\n')}

/**
 * ${componentName} component
 * Main component that assembles all mesh and material parts
 */
export default function ${componentName}(props: GroupProps) {
  const ref = useRef();
  return (
    <group ref={ref} {...props}>
      ${meshes.map((mesh, i) => {
        const material = materials[i % materials.length];
        return `<${mesh.name} material={${material.name}()} />`;
      }).join('\n      ')}
    </group>
  );
}`;
  }
}

/**
 * Generates a complete example page showing how to use the component
 * Component name starts with capital letter as required by React
 */
function generateExamplePage(componentName: string, languageId: LanguageId): string {
  const lang = LANGUAGES[languageId];
  
  switch (languageId) {
    case 'typescript':
    case 'javascript':
      return `import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ${componentName} from '@/components/${componentName}';
/**
 * Example page demonstrating how to use the ${componentName} component
 */
export default function ${componentName}Page() {
  return (
    <div className="w-full h-screen">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ 
          powerPreference: "high-performance",
          antialias: true,
          alpha: true
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <${componentName} />
        <OrbitControls 
          enableZoom 
          enablePan 
          enableRotate 
          minDistance={0.1}
          maxDistance={100}
        />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}`;

    case 'python':
      return `# Note: This is a ModernGL/Pyglet implementation
import pyglet
import moderngl
import numpy as np
from pyglet.window import key
from pyrr import Matrix44
from .${componentName} import ${componentName}

class ${componentName}Page:
    """Example page for ModernGL implementation"""
    
    def __init__(self, width=800, height=600):
        self.window = pyglet.window.Window(width, height, caption='${componentName} Viewer')
        self.ctx = self.window.ctx
        
        # Create perspective projection
        self.projection = Matrix44.perspective_projection(50, width/height, 0.1, 1000)
        
        # Create view matrix
        self.view = Matrix44.look_at(
            [0, 0, 5],  # Camera position
            [0, 0, 0],  # Look at point
            [0, 1, 0],  # Up vector
        )
        
        # Create the 3D component
        self.scene = ${componentName}(self.ctx)
        self.scene.set_matrices(self.projection, self.view)
        
        # Set up event handlers
        self.window.event(self.on_draw)
        self.window.event(self.on_resize)
        self.window.event(self.on_key_press)
        
        # Animation state
        self.rotation = 0
        
    def on_draw(self):
        self.window.clear()
        self.ctx.enable(moderngl.DEPTH_TEST)
        
        # Update rotation
        self.rotation += 0.5
        
        # Render the scene
        self.scene.render()
        
    def on_resize(self, width, height):
        self.projection = Matrix44.perspective_projection(50, width/height, 0.1, 1000)
        self.scene.set_matrices(self.projection, self.view)
        
    def on_key_press(self, symbol, modifiers):
        if symbol == key.ESCAPE:
            pyglet.app.exit()
            
    def run(self):
        pyglet.app.run()
`;

    case 'java':
      return `import com.jme3.app.SimpleApplication;
import com.jme3.light.AmbientLight;
import com.jme3.light.DirectionalLight;
import com.jme3.math.ColorRGBA;
import com.jme3.math.Vector3f;
import com.jme3.scene.Node;
import com.jme3.scene.Spatial;
import com.jme3.system.AppSettings;

/**
 * Example application demonstrating how to use the ${componentName} component
 */
public class ${componentName}App extends SimpleApplication {
    public static void main(String[] args) {
        ${componentName}App app = new ${componentName}App();
        AppSettings settings = new AppSettings(true);
        settings.setTitle("${componentName} Viewer");
        settings.setResolution(800, 600);
        app.setSettings(settings);
        app.start();
    }

    @Override
    public void simpleInitApp() {
        // Create the scene
        Node scene = new ${componentName}(assetManager);
        rootNode.attachChild(scene);
        
        // Add lighting
        AmbientLight ambient = new AmbientLight();
        ambient.setColor(ColorRGBA.Gray);
        rootNode.addLight(ambient);
        
        DirectionalLight sun = new DirectionalLight();
        sun.setDirection(new Vector3f(1, 1, 1).normalizeLocal());
        sun.setColor(ColorRGBA.White);
        rootNode.addLight(sun);
        
        // Set up camera
        cam.setLocation(new Vector3f(0, 0, 5));
        cam.lookAt(Vector3f.ZERO, Vector3f.UNIT_Y);
    }
}
`;

    case 'csharp':
      return `using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

/**
 * Example scene demonstrating how to use the ${componentName} component
 */
public class ${componentName}Example : MonoBehaviour
{
    [SerializeField] private ${componentName} model;
    [SerializeField] private float rotationSpeed = 30f;
    
    private void Start()
    {
        // Ensure we have a model reference
        if (model == null)
        {
            model = FindObjectOfType<${componentName}>();
        }
        
        // Create lighting
        CreateLighting();
    }
    
    private void CreateLighting()
    {
        // Create main directional light
        var lightObj = new GameObject("Main Light");
        var light = lightObj.AddComponent<Light>();
        light.type = LightType.Directional;
        light.color = Color.white;
        light.intensity = 1f;
        lightObj.transform.rotation = Quaternion.Euler(50, -30, 0);
        
        // Create ambient light
        RenderSettings.ambientLight = new Color(0.5f, 0.5f, 0.5f);
        RenderSettings.ambientIntensity = 0.8f;
    }
    
    private void Update()
    {
        // Rotate the model
        if (model != null)
        {
            model.transform.Rotate(Vector3.up, rotationSpeed * Time.deltaTime);
        }
    }
}
`;

    default:
      // Fallback to TypeScript for unsupported languages
      return `import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ${componentName} from '@/components/${componentName}';
/**
 * Example page demonstrating how to use the ${componentName} component
 */
export default function ${componentName}Page() {
  return (
    <div className="w-full h-screen">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ 
          powerPreference: "high-performance",
          antialias: true,
          alpha: true
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <${componentName} />
        <OrbitControls 
          enableZoom 
          enablePan 
          enableRotate 
          minDistance={0.1}
          maxDistance={100}
        />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}`;
  }
}