import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { MeshData, MaterialData, ProjectStructure, GeometryData } from '@/app/types/glb-convertor';

// Language configuration for code generation
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
      
      // Generate mesh component (now simpler)
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
from three import BufferGeometry, BufferAttribute

# ${meshName} geometry definition
# This can be easily modified without affecting component code
${meshName}Geometry = (lambda: 
    ${isLargeGeometry ? 
      `# Large geometry detected - using optimized approach
      # For extremely large models, consider using binary data files
      def create_geometry_chunk(data, item_size):
          chunk_size = 50000
          chunks = []
          for i in range(0, len(data), chunk_size):
              chunk = data[i:i + chunk_size]
              chunks.append(np.array(chunk, dtype=np.float32))
          return np.concatenate(chunks)
      
      # Position data
      position_chunks = create_geometry_chunk(${JSON.stringify(positions)}, 3)
      positions = np.array(position_chunks, dtype=np.float32)
      geometry = BufferGeometry()
      geometry.set_attribute('position', BufferAttribute(positions, 3))
      ${normals ? `# Normal data
      normal_chunks = create_geometry_chunk(${JSON.stringify(normals)}, 3)
      normals = np.array(normal_chunks, dtype=np.float32)
      geometry.set_attribute('normal', BufferAttribute(normals, 3))` : ''}
      ${uvs ? `# UV data
      uv_chunks = create_geometry_chunk(${JSON.stringify(uvs)}, 2)
      uvs = np.array(uv_chunks, dtype=np.float32)
      geometry.set_attribute('uv', BufferAttribute(uvs, 2))` : ''}
      ${indices ? `# Index data
      index_chunks = create_geometry_chunk(${JSON.stringify(indices)}, 1)
      indices = np.array(index_chunks, dtype=np.uint16)
      geometry.set_index(BufferAttribute(indices, 1))` : ''}
      geometry.compute_vertex_normals()
      return geometry` :
      `# Position data
      positions = np.array(${JSON.stringify(positions)}, dtype=np.float32)
      geometry = BufferGeometry()
      geometry.set_attribute('position', BufferAttribute(positions, 3))
      ${normals ? `# Normal data
      normals = np.array(${JSON.stringify(normals)}, dtype=np.float32)
      geometry.set_attribute('normal', BufferAttribute(normals, 3))` : ''}
      ${uvs ? `# UV data
      uvs = np.array(${JSON.stringify(uvs)}, dtype=np.float32)
      geometry.set_attribute('uv', BufferAttribute(uvs, 2))` : ''}
      ${indices ? `# Index data
      indices = np.array(${JSON.stringify(indices)}, dtype=np.uint16)
      geometry.set_index(BufferAttribute(indices, 1))` : ''}
      geometry.compute_vertex_normals()
      return geometry`}
)();
`;
    case 'java':
      return `import three.BufferGeometry;
import three.BufferAttribute;

/**
 * ${meshName} geometry definition
 * This can be easily modified without affecting component code
 */
public class ${meshName}Geometry {
    public static BufferGeometry create() {
        BufferGeometry geometry = new BufferGeometry();
        ${isLargeGeometry ? 
          `// Large geometry detected - using optimized approach
          // For extremely large models, consider using binary data files
          float[] positions = createGeometryChunk(${JSON.stringify(positions)}, 3);
          geometry.setAttribute("position", new BufferAttribute(positions, 3));
          ${normals ? `float[] normals = createGeometryChunk(${JSON.stringify(normals)}, 3);
          geometry.setAttribute("normal", new BufferAttribute(normals, 3));` : ''}
          ${uvs ? `float[] uvs = createGeometryChunk(${JSON.stringify(uvs)}, 2);
          geometry.setAttribute("uv", new BufferAttribute(uvs, 2));` : ''}
          ${indices ? `short[] indices = createGeometryChunk(${JSON.stringify(indices)}, 1);
          geometry.setIndex(new BufferAttribute(indices, 1));` : ''}
          geometry.computeVertexNormals();
          return geometry;` :
          `float[] positions = ${JSON.stringify(positions)};
          geometry.setAttribute("position", new BufferAttribute(positions, 3));
          ${normals ? `float[] normals = ${JSON.stringify(normals)};
          geometry.setAttribute("normal", new BufferAttribute(normals, 3));` : ''}
          ${uvs ? `float[] uvs = ${JSON.stringify(uvs)};
          geometry.setAttribute("uv", new BufferAttribute(uvs, 2));` : ''}
          ${indices ? `short[] indices = ${JSON.stringify(indices)};
          geometry.setIndex(new BufferAttribute(indices, 1));` : ''}
          geometry.computeVertexNormals();
          return geometry;`}
    }
    
    ${isLargeGeometry ? 
      `private static float[] createGeometryChunk(float[] data, int itemSize) {
        int chunkSize = 50000;
        List<Float> chunks = new ArrayList<>();
        for (int i = 0; i < data.length; i += chunkSize) {
            int end = Math.min(i + chunkSize, data.length);
            for (int j = i; j < end; j++) {
                chunks.add(data[j]);
            }
        }
        float[] result = new float[chunks.size()];
        for (int i = 0; i < chunks.size(); i++) {
            result[i] = chunks.get(i);
        }
        return result;
    }` : ''}
}
`;
    case 'csharp':
      return `using ThreeJs;
using System.Collections.Generic;
using System.Linq;

/**
 * ${meshName} geometry definition
 * This can be easily modified without affecting component code
 */
public class ${meshName}Geometry
{
    public static BufferGeometry Create()
    {
        var geometry = new BufferGeometry();
        ${isLargeGeometry ? 
          `// Large geometry detected - using optimized approach
          // For extremely large models, consider using binary data files
          var positions = CreateGeometryChunk(${JSON.stringify(positions)}, 3);
          geometry.SetAttribute("position", new BufferAttribute(positions, 3));
          ${normals ? `var normals = CreateGeometryChunk(${JSON.stringify(normals)}, 3);
          geometry.SetAttribute("normal", new BufferAttribute(normals, 3));` : ''}
          ${uvs ? `var uvs = CreateGeometryChunk(${JSON.stringify(uvs)}, 2);
          geometry.SetAttribute("uv", new BufferAttribute(uvs, 2));` : ''}
          ${indices ? `var indices = CreateGeometryChunk(${JSON.stringify(indices)}, 1);
          geometry.SetIndex(new BufferAttribute(indices, 1));` : ''}
          geometry.ComputeVertexNormals();
          return geometry;` :
          `var positions = new float[] { ${JSON.stringify(positions).slice(1, -1)} };
          geometry.SetAttribute("position", new BufferAttribute(positions, 3));
          ${normals ? `var normals = new float[] { ${JSON.stringify(normals).slice(1, -1)} };
          geometry.SetAttribute("normal", new BufferAttribute(normals, 3));` : ''}
          ${uvs ? `var uvs = new float[] { ${JSON.stringify(uvs).slice(1, -1)} };
          geometry.SetAttribute("uv", new BufferAttribute(uvs, 2));` : ''}
          ${indices ? `var indices = new ushort[] { ${JSON.stringify(indices).slice(1, -1)} };
          geometry.SetIndex(new BufferAttribute(indices, 1));` : ''}
          geometry.ComputeVertexNormals();
          return geometry;`}
    }
    
    ${isLargeGeometry ? 
      `private static float[] CreateGeometryChunk(float[] data, int itemSize)
      {
          int chunkSize = 50000;
          var chunks = new List<float>();
          for (int i = 0; i < data.Length; i += chunkSize)
          {
              int end = Math.Min(i + chunkSize, data.Length);
              chunks.AddRange(data.Skip(i).Take(end - i));
          }
          return chunks.ToArray();
      }` : ''}
}
`;
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
 * Much simpler than before - just references the geometry
 * Component name starts with capital letter as required by React
 */
function generateMeshComponent(meshName: string, _geometry: THREE.BufferGeometry, displayMode: string, languageId: LanguageId): string {
  const lang = LANGUAGES[languageId];
  
  switch (languageId) {
    case 'typescript':
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
    case 'javascript':
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
    case 'python':
      return `from react import createElement
from .geometries.${meshName}Geometry import ${meshName}Geometry

def ${meshName.toLowerCase()}(props):
    """${meshName} component
    Simple wrapper that uses pre-defined geometry
    Easy to modify without touching geometry data
    """
    return createElement('mesh', {**props, 'geometry': ${meshName}Geometry})`;
    case 'java':
      return `import react.Component;
import three.BufferGeometry;
import three.Mesh;

/**
 * ${meshName} component
 * Simple wrapper that uses pre-defined geometry
 * Easy to modify without touching geometry data
 */
public class ${meshName} extends Component {
    private BufferGeometry geometry;
    
    public ${meshName}(Object props) {
        super(props);
        this.geometry = ${meshName}Geometry.create();
    }
    
    @Override
    public Object render() {
        return new Mesh(props, geometry);
    }
}`;
    case 'csharp':
      return `using React;
using ThreeJs;

/**
 * ${meshName} component
 * Simple wrapper that uses pre-defined geometry
 * Easy to modify without touching geometry data
 */
public class ${meshName}
{
    private BufferGeometry Geometry { get; }
    
    public ${meshName}(object props)
    {
        Geometry = ${meshName}Geometry.Create();
    }
    
    public object Render(object props)
    {
        return new Mesh(props, Geometry);
    }
}`;
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
      return `from three import ${materialType}

def ${materialName.toLowerCase()}():
    """${materialName} material
    Reusable material definition
    """
    return ${materialType}(
        ${properties.map(prop => prop.replace(': ', '= ')).join(',\n        ')}
    )`;
    case 'java':
      return `import three.${materialType};

/**
 * ${materialName} material
 * Reusable material definition
 */
public class ${materialName} {
    public static ${materialType} create() {
        return new ${materialType}(
            ${properties.map(prop => {
              const [key, value] = prop.split(': ');
              return `${key} = ${value}`;
            }).join(',\n            ')}
        );
    }
}`;
    case 'csharp':
      return `using ThreeJs;

/**
 * ${materialName} material
 * Reusable material definition
 */
public class ${materialName}
{
    public static ${materialType} Create()
    {
        return new ${materialType}
        {
            ${properties.map(prop => {
              const [key, value] = prop.split(': ');
              return key + " = " + value;
            }).join(',\n            ')}
        };
    }
}`;
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
  
  // Generate imports
  const meshImports = meshes.map(mesh => 
    lang.import === 'import' ? 
      `import ${mesh.name} from './meshes/${mesh.name}';` :
      lang.import === 'require' ?
        `const ${mesh.name} = require('./meshes/${mesh.name}');` :
        `${lang.import} '${mesh.name}' from './meshes/${mesh.name}';`
  ).join('\n');
  
  const materialImports = materials.map(material => 
    lang.import === 'import' ? 
      `import ${material.name} from './materials/${material.name}';` :
      lang.import === 'require' ?
        `const ${material.name} = require('./materials/${material.name}');` :
        `${lang.import} '${material.name}' from './materials/${material.name}';`
  ).join('\n');
  
  const meshElements = meshes.map((mesh, i) => {
    const material = materials[i % materials.length];
    return lang.class === 'class' ?
      `      <${mesh.name} material={${material.name}.create()} />` :
      `      <${mesh.name} material={${material.name}()} />`;
  }).join('\n');
  
  switch (languageId) {
    case 'typescript':
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
    case 'javascript':
      return `import React, { useRef } from 'react';
${meshImports}
${materialImports}
/**
 * ${componentName} component
 * Main component that assembles all mesh and material parts
 */
export default function ${componentName}(props) {
  const ref = useRef();
  return (
    <group ref={ref} {...props}>
${meshElements}
    </group>
  );
}`;
    case 'python':
      return `from react import createElement, useRef
from .meshes import ${meshes.map(m => m.name).join(', ')}
from .materials import ${materials.map(m => m.name).join(', ')}

def ${componentName.toLowerCase()}(props):
    """${componentName} component
    Main component that assembles all mesh and material parts
    """
    ref = useRef()
    return createElement('group', {**props, 'ref': ref},
        ${meshes.map((mesh, i) => {
          const material = materials[i % materials.length];
          return `createElement(${mesh.name}, {'material': ${material.name}()})`;
        }).join(',\n        ')})
`;
    case 'java':
      return `import react.Component;
import react.Ref;
import three.Group;

/**
 * ${componentName} component
 * Main component that assembles all mesh and material parts
 */
public class ${componentName} extends Component {
    private Ref ref;
    
    public ${componentName}(Object props) {
        super(props);
        this.ref = useRef();
    }
    
    @Override
    public Object render() {
        return new Group(ref, props,
            ${meshes.map((mesh, i) => {
              const material = materials[i % materials.length];
              return `new ${mesh.name}(new ${material.name}().create())`;
            }).join(',\n            ')});
    }
}`;
    case 'csharp':
      return `using React;
using ThreeJs;

/**
 * ${componentName} component
 * Main component that assembles all mesh and material parts
 */
public class ${componentName}
{
    private Ref Ref { get; }
    
    public ${componentName}(object props)
    {
        Ref = useRef();
    }
    
    public object Render(object props)
    {
        return new Group(Ref, props,
            ${meshes.map((mesh, i) => {
              const material = materials[i % materials.length];
              return `new ${mesh.name}(props, ${material.name}.Create())`;
            }).join(",\n            ")});
    }
}`;
    default:
      // Fallback to TypeScript for unsupported languages
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
}

/**
 * Generates a complete example page showing how to use the component
 * Component name starts with capital letter as required by React
 */
function generateExamplePage(componentName: string, languageId: LanguageId): string {
  const lang = LANGUAGES[languageId];
  
  switch (languageId) {
    case 'typescript':
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
      return `from react import createElement
from three import Canvas, ambientLight, pointLight, Environment
from three.drei import OrbitControls
from components.${componentName.toLowerCase()} import ${componentName}

def ${componentName}Page(props):
    """Example page demonstrating how to use the ${componentName} component"""
    return createElement('div', {'className': 'w-full h-screen'},
        createElement(Canvas, {
            'camera': {'position': [0, 0, 5], 'fov': 50},
            'gl': {
                'powerPreference': "high-performance",
                'antialias': True,
                'alpha': True
            }
        },
            ambientLight({'intensity': 0.5}),
            pointLight({'position': [10, 10, 10]}),
            ${componentName}(),
            OrbitControls({
                'enableZoom': True,
                'enablePan': True,
                'enableRotate': True,
                'minDistance': 0.1,
                'maxDistance': 100
            }),
            Environment({'preset': "studio"})
        )
    )`;
    case 'java':
      return `import react.Component;
import three.Canvas;
import three.ambientLight;
import three.pointLight;
import three.Environment;
import drei.OrbitControls;
import components.${componentName}.${componentName};

/**
 * Example page demonstrating how to use the ${componentName} component
 */
public class ${componentName}Page extends Component {
    @Override
    public Object render() {
        return new div(
            new Canvas(
                new Canvas.Properties()
                    .camera(new CameraProperties().position(new float[]{0, 0, 5}).fov(50))
                    .gl(new GLProperties()
                        .powerPreference("high-performance")
                        .antialias(true)
                        .alpha(true)),
                new ambientLight(new LightProperties().intensity(0.5)),
                new pointLight(new LightProperties().position(new float[]{10, 10, 10})),
                new ${componentName}(),
                new OrbitControls(new OrbitControls.Properties()
                    .enableZoom(true)
                    .enablePan(true)
                    .enableRotate(true)
                    .minDistance(0.1f)
                    .maxDistance(100f)),
                new Environment(new Environment.Properties().preset("studio"))
            )
        );
    }
}`;
    case 'csharp':
      return `using React;
using ThreeJs;
using Drei;

/**
 * Example page demonstrating how to use the ${componentName} component
 */
public class ${componentName}Page
{
    public object Render()
    {
        return new div(new {
            ClassName = "w-full h-screen"
        },
            new Canvas(new {
                Camera = new {
                    Position = new[] { 0f, 0f, 5f },
                    Fov = 50f
                },
                Gl = new {
                    PowerPreference = "high-performance",
                    Antialias = true,
                    Alpha = true
                }
            },
                new ambientLight(new { Intensity = 0.5f }),
                new pointLight(new { Position = new[] { 10f, 10f, 10f } }),
                new ${componentName}(),
                new OrbitControls(new {
                    EnableZoom = true,
                    EnablePan = true,
                    EnableRotate = true,
                    MinDistance = 0.1f,
                    MaxDistance = 100f
                }),
                new Environment(new { Preset = "studio" })
            )
        );
    }
}`;
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