import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { MeshData, MaterialData, ProjectStructure, GeometryData } from '@/app/types/glb-convertor';

/**
 * Capitalizes the first letter of a string
 * Required for React components which must start with uppercase letters
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generates a complete project structure from a GLTF model
 * Now with separate geometry files for better component management
 */
export function generateProjectStructure(
  gltf: GLTF, 
  componentName: string,
  displayMode: string = 'original'
): ProjectStructure {
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
      const geometryFile = generateGeometryFile(capitalizedMeshName, geometry);
      geometries.push({
        name: capitalizedMeshName,
        content: geometryFile,
        originalName: meshName
      });
      
      // Generate mesh component (now simpler)
      const meshComponent = generateMeshComponent(capitalizedMeshName, geometry, displayMode);
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
        const materialComponent = generateMaterialComponent(capitalizedMaterialName, material, displayMode);
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
  const indexContent = generateIndexComponent(capitalizedComponentName, meshes, materials, displayMode);
  
  // Generate the example page
  const examplePageContent = generateExamplePage(capitalizedComponentName);
  
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
function generateGeometryFile(meshName: string, geometry: THREE.BufferGeometry): string {
  // Extract geometry data
  const positions = Array.from(geometry.attributes.position.array);
  const normals = geometry.attributes.normal ? Array.from(geometry.attributes.normal.array) : null;
  const uvs = geometry.attributes.uv ? Array.from(geometry.attributes.uv.array) : null;
  const indices = geometry.index ? Array.from(geometry.index.array) : null;
  
  // Check if geometry is too large for direct embedding
  const isLargeGeometry = positions.length > 100000;
  
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
}

/**
 * Generates a mesh component that imports geometry from a separate file
 * Much simpler than before - just references the geometry
 * Component name starts with capital letter as required by React
 */
function generateMeshComponent(meshName: string, _geometry: THREE.BufferGeometry, displayMode: string): string {
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

/**
 * Generates a material component based on display mode
 * Component name starts with capital letter as required by React
 */
function generateMaterialComponent(materialName: string, material: THREE.Material, displayMode: string): string {
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
  
  // Generate the component code
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

/**
 * Generates the main index component that assembles all parts
 * Component name starts with capital letter as required by React
 */
function generateIndexComponent(
  componentName: string,
  meshes: MeshData[],
  materials: MaterialData[],
  displayMode: string
): string {
  // Generate imports
  const meshImports = meshes.map(mesh => 
    `import ${mesh.name} from './meshes/${mesh.name}';`
  ).join('\n');
  
  const materialImports = materials.map(material => 
    `import ${material.name} from './materials/${material.name}';`
  ).join('\n');
  
  // Generate JSX structure
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
}

/**
 * Generates a complete example page showing how to use the component
 * Component name starts with capital letter as required by React
 */
function generateExamplePage(componentName: string): string {
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

/**
 * Sanitizes names to be valid JavaScript identifiers
 */
function sanitizeName(name: string): string {
  // Replace invalid characters with underscores
  let safeName = name.replace(/[^a-zA-Z0-9_]/g, '_');
  // Ensure it starts with a letter
  if (!/^[a-zA-Z_]/.test(safeName)) {
    safeName = '_' + safeName;
  }
  // Handle reserved keywords
  const reservedKeywords = ['default', 'function', 'class', 'export', 'import', 'let', 'const', 'var'];
  if (reservedKeywords.includes(safeName.toLowerCase())) {
    safeName = '_' + safeName;
  }
  return safeName;
}