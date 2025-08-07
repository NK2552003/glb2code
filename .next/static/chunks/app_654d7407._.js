(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/lib/glb-converter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateProjectStructure": ()=>generateProjectStructure
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
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
        typeDeclaration: (name)=>"type ".concat(name, " = {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"".concat(key, ": ").concat(value, ","),
        array: (items)=>"[".concat(items.join(', '), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: ()=>'',
        typeEnd: '',
        objectProperty: (key, value)=>"".concat(key, ": ").concat(value, ","),
        array: (items)=>"[".concat(items.join(', '), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: ()=>'',
        typeEnd: '',
        objectProperty: (key, value)=>"    ".concat(key, " = ").concat(value),
        array: (items)=>"[".concat(items.join(', '), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"public class ".concat(name, " {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"    public ".concat(value, " ").concat(key, ";"),
        array: (items)=>"new ArrayList<>() {{ ".concat(items.map((item)=>"add(".concat(item, ")")).join('; '), "; }}"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"public class ".concat(name, " {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"    public ".concat(value, " ").concat(key, " { get; set; }"),
        array: (items)=>{
            var _items_;
            return "new List<".concat(((_items_ = items[0]) === null || _items_ === void 0 ? void 0 : _items_.split(' ')[0]) || 'object', "> { ").concat(items.join(', '), " }");
        },
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"class ".concat(name, " { public:"),
        typeEnd: '};',
        objectProperty: (key, value)=>"    ".concat(value, " ").concat(key, ";"),
        array: (items)=>"{".concat(items.join(', '), "}"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"type ".concat(name, " struct {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"    ".concat(key, " ").concat(value, ' `json:"').concat(key.toLowerCase(), '"`'),
        array: (items)=>"[]interface{}{".concat(items.join(', '), "}"),
        stringLiteral: (value)=>'"' + value.replace(/"/g, '\\"') + '"'
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
        typeDeclaration: (name)=>"pub struct ".concat(name, " {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"    pub ".concat(key, ": ").concat(value, ","),
        array: (items)=>"vec![".concat(items.join(', '), "]"),
        stringLiteral: (value)=>'"' + value.replace(/"/g, '\\"') + '"'
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
        typeDeclaration: (name)=>"class ".concat(name, " {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"    var ".concat(key, ": ").concat(value),
        array: (items)=>"[".concat(items.join(', '), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"class ".concat(name, " {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"    var ".concat(key, ": ").concat(value, "? = null"),
        array: (items)=>"listOf(".concat(items.join(', '), ")"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"class ".concat(name),
        typeEnd: 'end',
        objectProperty: (key, value)=>"  attr_accessor :".concat(key),
        array: (items)=>"[".concat(items.join(', '), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"class ".concat(name, " {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"    private $".concat(key, ";"),
        array: (items)=>"array(".concat(items.join(', '), ")"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"case class ".concat(name, " ("),
        typeEnd: ')',
        objectProperty: (key, value)=>"".concat(key, ": ").concat(value, ","),
        array: (items)=>"Seq(".concat(items.join(', '), ")"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>"class ".concat(name, " {"),
        typeEnd: '}',
        objectProperty: (key, value)=>"  ".concat(value, " ").concat(key, ";"),
        array: (items)=>"[".concat(items.join(', '), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
        typeDeclaration: (name)=>'setClass("'.concat(name, '", slots = list('),
        typeEnd: '))',
        objectProperty: (key, value)=>'"'.concat(key, '" = "').concat(value, '",'),
        array: (items)=>"c(".concat(items.join(', '), ")"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    }
};
/**
 * Capitalizes the first letter of a string
 * Required for React components which must start with uppercase letters
 */ function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function generateProjectStructure(gltf, componentName) {
    let displayMode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'original', languageId = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'typescript';
    const lang = LANGUAGES[languageId];
    const meshes = [];
    const materials = [];
    const geometries = []; // New array for geometry files
    let totalVertices = 0;
    let totalTriangles = 0;
    // Process the scene to extract meshes and materials
    gltf.scene.traverse((object)=>{
        if (object.isMesh) {
            const mesh = object;
            const geometry = mesh.geometry;
            // Count vertices and triangles
            totalVertices += geometry.attributes.position.count;
            if (geometry.index) {
                totalTriangles += geometry.index.count / 3;
            } else {
                totalTriangles += geometry.attributes.position.count / 3;
            }
            // Generate mesh name
            const meshName = mesh.name || "Mesh_".concat(meshes.length);
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
            const materialName = material.name || "Material_".concat(materials.length);
            const safeMaterialName = sanitizeName(materialName);
            const capitalizedMaterialName = capitalize(safeMaterialName);
            // Only add unique materials
            if (!materials.some((m)=>m.name === capitalizedMaterialName)) {
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
        geometries,
        materials,
        totalVertices,
        totalTriangles
    };
}
/**
 * Generates a separate geometry file for Three.js
 * Creates a reusable geometry object that can be imported by components
 */ function generateGeometryFile(meshName, geometry, languageId) {
    const lang = LANGUAGES[languageId];
    // Extract geometry data
    const positions = Array.from(geometry.attributes.position.array);
    const normals = geometry.attributes.normal ? Array.from(geometry.attributes.normal.array) : null;
    const uvs = geometry.attributes.uv ? Array.from(geometry.attributes.uv.array) : null;
    const indices = geometry.index ? Array.from(geometry.index.array) : null;
    // Check if geometry is too large for direct embedding
    const isLargeGeometry = positions.length > 100000;
    switch(languageId){
        case 'typescript':
        case 'javascript':
            return "import * as THREE from 'three';\n// ".concat(meshName, " geometry definition\n// This can be easily modified without affecting component code\nexport const ").concat(meshName, "Geometry = (() => {\n  const geometry = new THREE.BufferGeometry();\n  ").concat(isLargeGeometry ? "// Large geometry detected - using optimized approach\n    // For extremely large models, consider using binary data files\n    const createGeometryChunk = (data, itemSize) => {\n      const chunkSize = 50000;\n      const chunks = [];\n      for (let i = 0; i < data.length; i += chunkSize) {\n        const chunk = data.slice(i, i + chunkSize);\n        chunks.push(new Float32Array(chunk));\n      }\n      return chunks;\n    };\n    // Position data\n    const positionChunks = createGeometryChunk(".concat(JSON.stringify(positions), ", 3);\n    const positions = new Float32Array(positionChunks.reduce((acc, chunk) => [...acc, ...chunk], []));\n    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n    ").concat(normals ? "// Normal data\n    const normalChunks = createGeometryChunk(".concat(JSON.stringify(normals), ", 3);\n    const normals = new Float32Array(normalChunks.reduce((acc, chunk) => [...acc, ...chunk], []));\n    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));") : '', "\n    ").concat(uvs ? "// UV data\n    const uvChunks = createGeometryChunk(".concat(JSON.stringify(uvs), ", 2);\n    const uvs = new Float32Array(uvChunks.reduce((acc, chunk) => [...acc, ...chunk], []));\n    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));") : '', "\n    ").concat(indices ? "// Index data\n    const indexChunks = createGeometryChunk(".concat(JSON.stringify(indices), ", 1);\n    const indices = new Uint16Array(indexChunks.reduce((acc, chunk) => [...acc, ...chunk], []));\n    geometry.setIndex(new THREE.BufferAttribute(indices, 1));") : '') : "// Position data\n    const positions = new Float32Array(".concat(JSON.stringify(positions), ");\n    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n    ").concat(normals ? "// Normal data\n    const normals = new Float32Array(".concat(JSON.stringify(normals), ");\n    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));") : '', "\n    ").concat(uvs ? "// UV data\n    const uvs = new Float32Array(".concat(JSON.stringify(uvs), ");\n    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));") : '', "\n    ").concat(indices ? "// Index data\n    const indices = new Uint16Array(".concat(JSON.stringify(indices), ");\n    geometry.setIndex(new THREE.BufferAttribute(indices, 1));") : ''), "\n  geometry.computeVertexNormals();\n  return geometry;\n})();\n");
        case 'python':
            return "import numpy as np\nfrom three import BufferGeometry, BufferAttribute\n\n# ".concat(meshName, " geometry definition\n# This can be easily modified without affecting component code\n").concat(meshName, "Geometry = (lambda: \n    ").concat(isLargeGeometry ? "# Large geometry detected - using optimized approach\n      # For extremely large models, consider using binary data files\n      def create_geometry_chunk(data, item_size):\n          chunk_size = 50000\n          chunks = []\n          for i in range(0, len(data), chunk_size):\n              chunk = data[i:i + chunk_size]\n              chunks.append(np.array(chunk, dtype=np.float32))\n          return np.concatenate(chunks)\n      \n      # Position data\n      position_chunks = create_geometry_chunk(".concat(JSON.stringify(positions), ", 3)\n      positions = np.array(position_chunks, dtype=np.float32)\n      geometry = BufferGeometry()\n      geometry.set_attribute('position', BufferAttribute(positions, 3))\n      ").concat(normals ? "# Normal data\n      normal_chunks = create_geometry_chunk(".concat(JSON.stringify(normals), ", 3)\n      normals = np.array(normal_chunks, dtype=np.float32)\n      geometry.set_attribute('normal', BufferAttribute(normals, 3))") : '', "\n      ").concat(uvs ? "# UV data\n      uv_chunks = create_geometry_chunk(".concat(JSON.stringify(uvs), ", 2)\n      uvs = np.array(uv_chunks, dtype=np.float32)\n      geometry.set_attribute('uv', BufferAttribute(uvs, 2))") : '', "\n      ").concat(indices ? "# Index data\n      index_chunks = create_geometry_chunk(".concat(JSON.stringify(indices), ", 1)\n      indices = np.array(index_chunks, dtype=np.uint16)\n      geometry.set_index(BufferAttribute(indices, 1))") : '', "\n      geometry.compute_vertex_normals()\n      return geometry") : "# Position data\n      positions = np.array(".concat(JSON.stringify(positions), ", dtype=np.float32)\n      geometry = BufferGeometry()\n      geometry.set_attribute('position', BufferAttribute(positions, 3))\n      ").concat(normals ? "# Normal data\n      normals = np.array(".concat(JSON.stringify(normals), ", dtype=np.float32)\n      geometry.set_attribute('normal', BufferAttribute(normals, 3))") : '', "\n      ").concat(uvs ? "# UV data\n      uvs = np.array(".concat(JSON.stringify(uvs), ", dtype=np.float32)\n      geometry.set_attribute('uv', BufferAttribute(uvs, 2))") : '', "\n      ").concat(indices ? "# Index data\n      indices = np.array(".concat(JSON.stringify(indices), ", dtype=np.uint16)\n      geometry.set_index(BufferAttribute(indices, 1))") : '', "\n      geometry.compute_vertex_normals()\n      return geometry"), "\n)();\n");
        case 'java':
            return "import three.BufferGeometry;\nimport three.BufferAttribute;\n\n/**\n * ".concat(meshName, " geometry definition\n * This can be easily modified without affecting component code\n */\npublic class ").concat(meshName, "Geometry {\n    public static BufferGeometry create() {\n        BufferGeometry geometry = new BufferGeometry();\n        ").concat(isLargeGeometry ? "// Large geometry detected - using optimized approach\n          // For extremely large models, consider using binary data files\n          float[] positions = createGeometryChunk(".concat(JSON.stringify(positions), ', 3);\n          geometry.setAttribute("position", new BufferAttribute(positions, 3));\n          ').concat(normals ? "float[] normals = createGeometryChunk(".concat(JSON.stringify(normals), ', 3);\n          geometry.setAttribute("normal", new BufferAttribute(normals, 3));') : '', "\n          ").concat(uvs ? "float[] uvs = createGeometryChunk(".concat(JSON.stringify(uvs), ', 2);\n          geometry.setAttribute("uv", new BufferAttribute(uvs, 2));') : '', "\n          ").concat(indices ? "short[] indices = createGeometryChunk(".concat(JSON.stringify(indices), ", 1);\n          geometry.setIndex(new BufferAttribute(indices, 1));") : '', "\n          geometry.computeVertexNormals();\n          return geometry;") : "float[] positions = ".concat(JSON.stringify(positions), ';\n          geometry.setAttribute("position", new BufferAttribute(positions, 3));\n          ').concat(normals ? "float[] normals = ".concat(JSON.stringify(normals), ';\n          geometry.setAttribute("normal", new BufferAttribute(normals, 3));') : '', "\n          ").concat(uvs ? "float[] uvs = ".concat(JSON.stringify(uvs), ';\n          geometry.setAttribute("uv", new BufferAttribute(uvs, 2));') : '', "\n          ").concat(indices ? "short[] indices = ".concat(JSON.stringify(indices), ";\n          geometry.setIndex(new BufferAttribute(indices, 1));") : '', "\n          geometry.computeVertexNormals();\n          return geometry;"), "\n    }\n    \n    ").concat(isLargeGeometry ? "private static float[] createGeometryChunk(float[] data, int itemSize) {\n        int chunkSize = 50000;\n        List<Float> chunks = new ArrayList<>();\n        for (int i = 0; i < data.length; i += chunkSize) {\n            int end = Math.min(i + chunkSize, data.length);\n            for (int j = i; j < end; j++) {\n                chunks.add(data[j]);\n            }\n        }\n        float[] result = new float[chunks.size()];\n        for (int i = 0; i < chunks.size(); i++) {\n            result[i] = chunks.get(i);\n        }\n        return result;\n    }" : '', "\n}\n");
        case 'csharp':
            return "using ThreeJs;\nusing System.Collections.Generic;\nusing System.Linq;\n\n/**\n * ".concat(meshName, " geometry definition\n * This can be easily modified without affecting component code\n */\npublic class ").concat(meshName, "Geometry\n{\n    public static BufferGeometry Create()\n    {\n        var geometry = new BufferGeometry();\n        ").concat(isLargeGeometry ? "// Large geometry detected - using optimized approach\n          // For extremely large models, consider using binary data files\n          var positions = CreateGeometryChunk(".concat(JSON.stringify(positions), ', 3);\n          geometry.SetAttribute("position", new BufferAttribute(positions, 3));\n          ').concat(normals ? "var normals = CreateGeometryChunk(".concat(JSON.stringify(normals), ', 3);\n          geometry.SetAttribute("normal", new BufferAttribute(normals, 3));') : '', "\n          ").concat(uvs ? "var uvs = CreateGeometryChunk(".concat(JSON.stringify(uvs), ', 2);\n          geometry.SetAttribute("uv", new BufferAttribute(uvs, 2));') : '', "\n          ").concat(indices ? "var indices = CreateGeometryChunk(".concat(JSON.stringify(indices), ", 1);\n          geometry.SetIndex(new BufferAttribute(indices, 1));") : '', "\n          geometry.ComputeVertexNormals();\n          return geometry;") : "var positions = new float[] { ".concat(JSON.stringify(positions).slice(1, -1), ' };\n          geometry.SetAttribute("position", new BufferAttribute(positions, 3));\n          ').concat(normals ? "var normals = new float[] { ".concat(JSON.stringify(normals).slice(1, -1), ' };\n          geometry.SetAttribute("normal", new BufferAttribute(normals, 3));') : '', "\n          ").concat(uvs ? "var uvs = new float[] { ".concat(JSON.stringify(uvs).slice(1, -1), ' };\n          geometry.SetAttribute("uv", new BufferAttribute(uvs, 2));') : '', "\n          ").concat(indices ? "var indices = new ushort[] { ".concat(JSON.stringify(indices).slice(1, -1), " };\n          geometry.SetIndex(new BufferAttribute(indices, 1));") : '', "\n          geometry.ComputeVertexNormals();\n          return geometry;"), "\n    }\n    \n    ").concat(isLargeGeometry ? "private static float[] CreateGeometryChunk(float[] data, int itemSize)\n      {\n          int chunkSize = 50000;\n          var chunks = new List<float>();\n          for (int i = 0; i < data.Length; i += chunkSize)\n          {\n              int end = Math.Min(i + chunkSize, data.Length);\n              chunks.AddRange(data.Skip(i).Take(end - i));\n          }\n          return chunks.ToArray();\n      }" : '', "\n}\n");
        default:
            // Fallback to TypeScript for unsupported languages
            return "import * as THREE from 'three';\n// ".concat(meshName, " geometry definition\n// This can be easily modified without affecting component code\nexport const ").concat(meshName, "Geometry = (() => {\n  const geometry = new THREE.BufferGeometry();\n  // Position data\n  const positions = new Float32Array(").concat(JSON.stringify(positions), ");\n  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n  ").concat(normals ? "// Normal data\n  const normals = new Float32Array(".concat(JSON.stringify(normals), ");\n  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));") : '', "\n  ").concat(uvs ? "// UV data\n  const uvs = new Float32Array(".concat(JSON.stringify(uvs), ");\n  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));") : '', "\n  ").concat(indices ? "// Index data\n  const indices = new Uint16Array(".concat(JSON.stringify(indices), ");\n  geometry.setIndex(new THREE.BufferAttribute(indices, 1));") : '', "\n  geometry.computeVertexNormals();\n  return geometry;\n})();\n");
    }
}
/**
 * Generates a mesh component that imports geometry from a separate file
 * Much simpler than before - just references the geometry
 * Component name starts with capital letter as required by React
 */ function generateMeshComponent(meshName, _geometry, displayMode, languageId) {
    const lang = LANGUAGES[languageId];
    switch(languageId){
        case 'typescript':
            return "import React from 'react';\nimport { ".concat(meshName, "Geometry } from '../geometries/").concat(meshName, "Geometry';\n/**\n * ").concat(meshName, " component\n * Simple wrapper that uses pre-defined geometry\n * Easy to modify without touching geometry data\n */\nexport default function ").concat(meshName, "(props: any) {\n  return <mesh geometry={").concat(meshName, "Geometry} {...props} />;\n}");
        case 'javascript':
            return "import React from 'react';\nimport { ".concat(meshName, "Geometry } from '../geometries/").concat(meshName, "Geometry';\n/**\n * ").concat(meshName, " component\n * Simple wrapper that uses pre-defined geometry\n * Easy to modify without touching geometry data\n */\nexport default function ").concat(meshName, "(props) {\n  return <mesh geometry={").concat(meshName, "Geometry} {...props} />;\n}");
        case 'python':
            return "from react import createElement\nfrom .geometries.".concat(meshName, "Geometry import ").concat(meshName, "Geometry\n\ndef ").concat(meshName.toLowerCase(), '(props):\n    """').concat(meshName, " component\n    Simple wrapper that uses pre-defined geometry\n    Easy to modify without touching geometry data\n    \"\"\"\n    return createElement('mesh', {**props, 'geometry': ").concat(meshName, "Geometry})");
        case 'java':
            return "import react.Component;\nimport three.BufferGeometry;\nimport three.Mesh;\n\n/**\n * ".concat(meshName, " component\n * Simple wrapper that uses pre-defined geometry\n * Easy to modify without touching geometry data\n */\npublic class ").concat(meshName, " extends Component {\n    private BufferGeometry geometry;\n    \n    public ").concat(meshName, "(Object props) {\n        super(props);\n        this.geometry = ").concat(meshName, "Geometry.create();\n    }\n    \n    @Override\n    public Object render() {\n        return new Mesh(props, geometry);\n    }\n}");
        case 'csharp':
            return "using React;\nusing ThreeJs;\n\n/**\n * ".concat(meshName, " component\n * Simple wrapper that uses pre-defined geometry\n * Easy to modify without touching geometry data\n */\npublic class ").concat(meshName, "\n{\n    private BufferGeometry Geometry { get; }\n    \n    public ").concat(meshName, "(object props)\n    {\n        Geometry = ").concat(meshName, "Geometry.Create();\n    }\n    \n    public object Render(object props)\n    {\n        return new Mesh(props, Geometry);\n    }\n}");
        default:
            // Fallback to TypeScript for unsupported languages
            return "import React from 'react';\nimport { ".concat(meshName, "Geometry } from '../geometries/").concat(meshName, "Geometry';\n/**\n * ").concat(meshName, " component\n * Simple wrapper that uses pre-defined geometry\n * Easy to modify without touching geometry data\n */\nexport default function ").concat(meshName, "(props) {\n  return <mesh geometry={").concat(meshName, "Geometry} {...props} />;\n}");
    }
}
/**
 * Generates a material component based on display mode
 * Component name starts with capital letter as required by React
 */ function generateMaterialComponent(materialName, material, displayMode, languageId) {
    const lang = LANGUAGES[languageId];
    // Base material properties
    let materialType = 'MeshStandardMaterial';
    let properties = [];
    // Determine material type
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) materialType = 'MeshBasicMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]) materialType = 'MeshPhongMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshLambertMaterial"]) materialType = 'MeshLambertMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]) materialType = 'MeshNormalMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]) materialType = 'MeshDepthMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshMatcapMaterial"]) materialType = 'MeshMatcapMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshToonMaterial"]) materialType = 'MeshToonMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]) materialType = 'MeshPhysicalMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) materialType = 'MeshStandardMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]) materialType = 'ShaderMaterial';
    // Extract properties based on display mode
    switch(displayMode){
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
            properties.push("color: new THREE.Color(".concat(material.color.r, ", ").concat(material.color.g, ", ").concat(material.color.b, ")"));
            if ('roughness' in material) properties.push("roughness: ".concat(material.roughness));
            if ('metalness' in material) properties.push("metalness: ".concat(material.metalness));
            if ('opacity' in material) properties.push("opacity: ".concat(material.opacity));
            if ('transparent' in material) properties.push("transparent: ".concat(material.transparent));
            if ('emissive' in material) {
                const emissive = material.emissive;
                properties.push("emissive: new THREE.Color(".concat(emissive.r, ", ").concat(emissive.g, ", ").concat(emissive.b, ")"));
            }
            if ('emissiveIntensity' in material) properties.push("emissiveIntensity: ".concat(material.emissiveIntensity));
            if ('shininess' in material) properties.push("shininess: ".concat(material.shininess));
            break;
    }
    switch(languageId){
        case 'typescript':
            return "import * as THREE from 'three';\n/**\n * ".concat(materialName, " material\n * Reusable material definition\n */\nexport default function ").concat(materialName, "() {\n  return new THREE.").concat(materialType, "({\n    ").concat(properties.join(',\n    '), "\n  });\n}");
        case 'javascript':
            return "import * as THREE from 'three';\n/**\n * ".concat(materialName, " material\n * Reusable material definition\n */\nexport default function ").concat(materialName, "() {\n  return new THREE.").concat(materialType, "({\n    ").concat(properties.join(',\n    '), "\n  });\n}");
        case 'python':
            return "from three import ".concat(materialType, "\n\ndef ").concat(materialName.toLowerCase(), '():\n    """').concat(materialName, ' material\n    Reusable material definition\n    """\n    return ').concat(materialType, "(\n        ").concat(properties.map((prop)=>prop.replace(': ', '= ')).join(',\n        '), "\n    )");
        case 'java':
            return "import three.".concat(materialType, ";\n\n/**\n * ").concat(materialName, " material\n * Reusable material definition\n */\npublic class ").concat(materialName, " {\n    public static ").concat(materialType, " create() {\n        return new ").concat(materialType, "(\n            ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(': ');
                return "".concat(key, " = ").concat(value);
            }).join(',\n            '), "\n        );\n    }\n}");
        case 'csharp':
            return "using ThreeJs;\n\n/**\n * ".concat(materialName, " material\n * Reusable material definition\n */\npublic class ").concat(materialName, "\n{\n    public static ").concat(materialType, " Create()\n    {\n        return new ").concat(materialType, "\n        {\n            ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(': ');
                return key + " = " + value;
            }).join(',\n            '), "\n        };\n    }\n}");
        default:
            // Fallback to TypeScript for unsupported languages
            return "import * as THREE from 'three';\n/**\n * ".concat(materialName, " material\n * Reusable material definition\n */\nexport default function ").concat(materialName, "() {\n  return new THREE.").concat(materialType, "({\n    ").concat(properties.join(',\n    '), "\n  });\n}");
    }
}
/**
 * Generates the main index component that assembles all parts
 * Component name starts with capital letter as required by React
 */ function generateIndexComponent(componentName, meshes, materials, displayMode, languageId) {
    const lang = LANGUAGES[languageId];
    // Generate imports
    const meshImports = meshes.map((mesh)=>lang.import === 'import' ? "import ".concat(mesh.name, " from './meshes/").concat(mesh.name, "';") : lang.import === 'require' ? "const ".concat(mesh.name, " = require('./meshes/").concat(mesh.name, "');") : "".concat(lang.import, " '").concat(mesh.name, "' from './meshes/").concat(mesh.name, "';")).join('\n');
    const materialImports = materials.map((material)=>lang.import === 'import' ? "import ".concat(material.name, " from './materials/").concat(material.name, "';") : lang.import === 'require' ? "const ".concat(material.name, " = require('./materials/").concat(material.name, "');") : "".concat(lang.import, " '").concat(material.name, "' from './materials/").concat(material.name, "';")).join('\n');
    const meshElements = meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return lang.class === 'class' ? "      <".concat(mesh.name, " material={").concat(material.name, ".create()} />") : "      <".concat(mesh.name, " material={").concat(material.name, "()} />");
    }).join('\n');
    switch(languageId){
        case 'typescript':
            return "import React, { useRef } from 'react';\nimport type { GroupProps } from '@react-three/fiber';\n".concat(meshImports, "\n").concat(materialImports, "\n/**\n * ").concat(componentName, " component\n * Main component that assembles all mesh and material parts\n */\nexport default function ").concat(componentName, "(props: GroupProps) {\n  const ref = useRef();\n  return (\n    <group ref={ref} {...props}>\n").concat(meshElements, "\n    </group>\n  );\n}");
        case 'javascript':
            return "import React, { useRef } from 'react';\n".concat(meshImports, "\n").concat(materialImports, "\n/**\n * ").concat(componentName, " component\n * Main component that assembles all mesh and material parts\n */\nexport default function ").concat(componentName, "(props) {\n  const ref = useRef();\n  return (\n    <group ref={ref} {...props}>\n").concat(meshElements, "\n    </group>\n  );\n}");
        case 'python':
            return "from react import createElement, useRef\nfrom .meshes import ".concat(meshes.map((m)=>m.name).join(', '), "\nfrom .materials import ").concat(materials.map((m)=>m.name).join(', '), "\n\ndef ").concat(componentName.toLowerCase(), '(props):\n    """').concat(componentName, " component\n    Main component that assembles all mesh and material parts\n    \"\"\"\n    ref = useRef()\n    return createElement('group', {**props, 'ref': ref},\n        ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "createElement(".concat(mesh.name, ", {'material': ").concat(material.name, "()})");
            }).join(',\n        '), ")\n");
        case 'java':
            return "import react.Component;\nimport react.Ref;\nimport three.Group;\n\n/**\n * ".concat(componentName, " component\n * Main component that assembles all mesh and material parts\n */\npublic class ").concat(componentName, " extends Component {\n    private Ref ref;\n    \n    public ").concat(componentName, "(Object props) {\n        super(props);\n        this.ref = useRef();\n    }\n    \n    @Override\n    public Object render() {\n        return new Group(ref, props,\n            ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "new ".concat(mesh.name, "(new ").concat(material.name, "().create())");
            }).join(',\n            '), ");\n    }\n}");
        case 'csharp':
            return "using React;\nusing ThreeJs;\n\n/**\n * ".concat(componentName, " component\n * Main component that assembles all mesh and material parts\n */\npublic class ").concat(componentName, "\n{\n    private Ref Ref { get; }\n    \n    public ").concat(componentName, "(object props)\n    {\n        Ref = useRef();\n    }\n    \n    public object Render(object props)\n    {\n        return new Group(Ref, props,\n            ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "new ".concat(mesh.name, "(props, ").concat(material.name, ".Create())");
            }).join(",\n            "), ");\n    }\n}");
        default:
            // Fallback to TypeScript for unsupported languages
            return "import React, { useRef } from 'react';\nimport type { GroupProps } from '@react-three/fiber';\n".concat(meshImports, "\n").concat(materialImports, "\n/**\n * ").concat(componentName, " component\n * Main component that assembles all mesh and material parts\n */\nexport default function ").concat(componentName, "(props: GroupProps) {\n  const ref = useRef();\n  return (\n    <group ref={ref} {...props}>\n").concat(meshElements, "\n    </group>\n  );\n}");
    }
}
/**
 * Generates a complete example page showing how to use the component
 * Component name starts with capital letter as required by React
 */ function generateExamplePage(componentName, languageId) {
    const lang = LANGUAGES[languageId];
    switch(languageId){
        case 'typescript':
            return "import React from 'react';\nimport { Canvas } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\nimport ".concat(componentName, " from '@/components/").concat(componentName, "';\n/**\n * Example page demonstrating how to use the ").concat(componentName, " component\n */\nexport default function ").concat(componentName, 'Page() {\n  return (\n    <div className="w-full h-screen">\n      <Canvas \n        camera={{ position: [0, 0, 5], fov: 50 }}\n        gl={{ \n          powerPreference: "high-performance",\n          antialias: true,\n          alpha: true\n        }}\n      >\n        <ambientLight intensity={0.5} />\n        <pointLight position={[10, 10, 10]} />\n        <').concat(componentName, ' />\n        <OrbitControls \n          enableZoom \n          enablePan \n          enableRotate \n          minDistance={0.1}\n          maxDistance={100}\n        />\n        <Environment preset="studio" />\n      </Canvas>\n    </div>\n  );\n}');
        case 'javascript':
            return "import React from 'react';\nimport { Canvas } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\nimport ".concat(componentName, " from '@/components/").concat(componentName, "';\n/**\n * Example page demonstrating how to use the ").concat(componentName, " component\n */\nexport default function ").concat(componentName, 'Page() {\n  return (\n    <div className="w-full h-screen">\n      <Canvas \n        camera={{ position: [0, 0, 5], fov: 50 }}\n        gl={{ \n          powerPreference: "high-performance",\n          antialias: true,\n          alpha: true\n        }}\n      >\n        <ambientLight intensity={0.5} />\n        <pointLight position={[10, 10, 10]} />\n        <').concat(componentName, ' />\n        <OrbitControls \n          enableZoom \n          enablePan \n          enableRotate \n          minDistance={0.1}\n          maxDistance={100}\n        />\n        <Environment preset="studio" />\n      </Canvas>\n    </div>\n  );\n}');
        case 'python':
            return "from react import createElement\nfrom three import Canvas, ambientLight, pointLight, Environment\nfrom three.drei import OrbitControls\nfrom components.".concat(componentName.toLowerCase(), " import ").concat(componentName, "\n\ndef ").concat(componentName, 'Page(props):\n    """Example page demonstrating how to use the ').concat(componentName, " component\"\"\"\n    return createElement('div', {'className': 'w-full h-screen'},\n        createElement(Canvas, {\n            'camera': {'position': [0, 0, 5], 'fov': 50},\n            'gl': {\n                'powerPreference': \"high-performance\",\n                'antialias': True,\n                'alpha': True\n            }\n        },\n            ambientLight({'intensity': 0.5}),\n            pointLight({'position': [10, 10, 10]}),\n            ").concat(componentName, "(),\n            OrbitControls({\n                'enableZoom': True,\n                'enablePan': True,\n                'enableRotate': True,\n                'minDistance': 0.1,\n                'maxDistance': 100\n            }),\n            Environment({'preset': \"studio\"})\n        )\n    )");
        case 'java':
            return "import react.Component;\nimport three.Canvas;\nimport three.ambientLight;\nimport three.pointLight;\nimport three.Environment;\nimport drei.OrbitControls;\nimport components.".concat(componentName, ".").concat(componentName, ";\n\n/**\n * Example page demonstrating how to use the ").concat(componentName, " component\n */\npublic class ").concat(componentName, 'Page extends Component {\n    @Override\n    public Object render() {\n        return new div(\n            new Canvas(\n                new Canvas.Properties()\n                    .camera(new CameraProperties().position(new float[]{0, 0, 5}).fov(50))\n                    .gl(new GLProperties()\n                        .powerPreference("high-performance")\n                        .antialias(true)\n                        .alpha(true)),\n                new ambientLight(new LightProperties().intensity(0.5)),\n                new pointLight(new LightProperties().position(new float[]{10, 10, 10})),\n                new ').concat(componentName, '(),\n                new OrbitControls(new OrbitControls.Properties()\n                    .enableZoom(true)\n                    .enablePan(true)\n                    .enableRotate(true)\n                    .minDistance(0.1f)\n                    .maxDistance(100f)),\n                new Environment(new Environment.Properties().preset("studio"))\n            )\n        );\n    }\n}');
        case 'csharp':
            return "using React;\nusing ThreeJs;\nusing Drei;\n\n/**\n * Example page demonstrating how to use the ".concat(componentName, " component\n */\npublic class ").concat(componentName, 'Page\n{\n    public object Render()\n    {\n        return new div(new {\n            ClassName = "w-full h-screen"\n        },\n            new Canvas(new {\n                Camera = new {\n                    Position = new[] { 0f, 0f, 5f },\n                    Fov = 50f\n                },\n                Gl = new {\n                    PowerPreference = "high-performance",\n                    Antialias = true,\n                    Alpha = true\n                }\n            },\n                new ambientLight(new { Intensity = 0.5f }),\n                new pointLight(new { Position = new[] { 10f, 10f, 10f } }),\n                new ').concat(componentName, '(),\n                new OrbitControls(new {\n                    EnableZoom = true,\n                    EnablePan = true,\n                    EnableRotate = true,\n                    MinDistance = 0.1f,\n                    MaxDistance = 100f\n                }),\n                new Environment(new { Preset = "studio" })\n            )\n        );\n    }\n}');
        default:
            // Fallback to TypeScript for unsupported languages
            return "import React from 'react';\nimport { Canvas } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\nimport ".concat(componentName, " from '@/components/").concat(componentName, "';\n/**\n * Example page demonstrating how to use the ").concat(componentName, " component\n */\nexport default function ").concat(componentName, 'Page() {\n  return (\n    <div className="w-full h-screen">\n      <Canvas \n        camera={{ position: [0, 0, 5], fov: 50 }}\n        gl={{ \n          powerPreference: "high-performance",\n          antialias: true,\n          alpha: true\n        }}\n      >\n        <ambientLight intensity={0.5} />\n        <pointLight position={[10, 10, 10]} />\n        <').concat(componentName, ' />\n        <OrbitControls \n          enableZoom \n          enablePan \n          enableRotate \n          minDistance={0.1}\n          maxDistance={100}\n        />\n        <Environment preset="studio" />\n      </Canvas>\n    </div>\n  );\n}');
    }
}
/**
 * Sanitizes names to be valid JavaScript identifiers
 */ function sanitizeName(name) {
    // Replace invalid characters with underscores
    let safeName = name.replace(/[^a-zA-Z0-9_]/g, '_');
    // Ensure it starts with a letter
    if (!/^[a-zA-Z_]/.test(safeName)) {
        safeName = '_' + safeName;
    }
    // Handle reserved keywords
    const reservedKeywords = [
        'default',
        'function',
        'class',
        'export',
        'import',
        'let',
        'const',
        'var'
    ];
    if (reservedKeywords.includes(safeName.toLowerCase())) {
        safeName = '_' + safeName;
    }
    return safeName;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/glb-convertor/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>GLBConverter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/glb-converter.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// Language configuration for syntax highlighting and code generation
const LANGUAGES = [
    {
        id: 'typescript',
        name: 'TypeScript',
        extension: 'tsx',
        geometryExtension: 'ts',
        group: 'Web'
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        extension: 'jsx',
        geometryExtension: 'js',
        group: 'Web'
    },
    {
        id: 'python',
        name: 'Python',
        extension: 'py',
        geometryExtension: 'py',
        group: 'General'
    },
    {
        id: 'java',
        name: 'Java',
        extension: 'java',
        geometryExtension: 'java',
        group: 'General'
    },
    {
        id: 'csharp',
        name: 'C#',
        extension: 'cs',
        geometryExtension: 'cs',
        group: 'General'
    },
    {
        id: 'cpp',
        name: 'C++',
        extension: 'cpp',
        geometryExtension: 'h',
        group: 'Systems'
    },
    {
        id: 'go',
        name: 'Go',
        extension: 'go',
        geometryExtension: 'go',
        group: 'Systems'
    },
    {
        id: 'rust',
        name: 'Rust',
        extension: 'rs',
        geometryExtension: 'rs',
        group: 'Systems'
    },
    {
        id: 'swift',
        name: 'Swift',
        extension: 'swift',
        geometryExtension: 'swift',
        group: 'Mobile'
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        extension: 'kt',
        geometryExtension: 'kt',
        group: 'Mobile'
    },
    {
        id: 'ruby',
        name: 'Ruby',
        extension: 'rb',
        geometryExtension: 'rb',
        group: 'Web'
    },
    {
        id: 'php',
        name: 'PHP',
        extension: 'php',
        geometryExtension: 'php',
        group: 'Web'
    },
    {
        id: 'scala',
        name: 'Scala',
        extension: 'scala',
        geometryExtension: 'scala',
        group: 'General'
    },
    {
        id: 'dart',
        name: 'Dart',
        extension: 'dart',
        geometryExtension: 'dart',
        group: 'Mobile'
    },
    {
        id: 'r',
        name: 'R',
        extension: 'R',
        geometryExtension: 'R',
        group: 'Data Science'
    }
];
// VS Code-like editor component with syntax highlighting
function CodeEditor(param) {
    let { code, languageId } = param;
    const language = LANGUAGES.find((lang)=>lang.id === languageId);
    const lines = code.split('\n');
    const getSyntaxClass = (line, index)=>{
        if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
            return 'text-[#6A9955]'; // Comments
        }
        if (line.includes('import') || line.includes('from') || line.includes('require')) {
            return 'text-[#C586C0]'; // Imports
        }
        if (line.includes('function') || line.includes('def') || line.includes('class')) {
            return 'text-[#569CD6]'; // Keywords
        }
        if (line.includes('const') || line.includes('let') || line.includes('var') || line.includes('final') || line.includes('static') || line.includes('public')) {
            return 'text-[#9CDCFE]'; // Variables
        }
        if (line.includes('{') || line.includes('}') || line.includes('[') || line.includes(']') || line.includes('(') || line.includes(')')) {
            return 'text-[#D4D4D4]'; // Brackets
        }
        if (line.includes('=') || line.includes('+') || line.includes('-') || line.includes('*') || line.includes('/') || line.includes('%')) {
            return 'text-[#D4D4D4]'; // Operators
        }
        if (line.includes('"') || line.includes("'") || line.includes('`')) {
            return 'text-[#CE9178]'; // Strings
        }
        if (!isNaN(Number(line.trim())) || line.trim().match(/0x[0-9A-Fa-f]+/)) {
            return 'text-[#B5CEA8]'; // Numbers
        }
        return 'text-[#D4D4D4]'; // Default
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1E1E1E] rounded-lg overflow-hidden font-mono text-sm h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#3C3C3C] px-4 py-2 flex items-center justify-between border-b border-[#333333]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FF5F56]"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FFBD2E]"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#27C93F]"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#CCCCCC] text-xs flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: language === null || language === void 0 ? void 0 : language.name
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: [
                                    lines.length,
                                    " lines"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#858585] w-8 select-none flex-shrink-0 pr-4 text-right",
                            children: lines.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "select-none",
                                    children: i + 1
                                }, i, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "whitespace-pre ".concat(getSyntaxClass(line, i)),
                                    children: line
                                }, i, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = CodeEditor;
// Language selector component with grouping
function LanguageSelector(param) {
    let { selectedLanguage, onChange } = param;
    const groups = Array.from(new Set(LANGUAGES.map((lang)=>lang.group)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                    className: "w-4 h-4 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedLanguage,
                    onChange: (e)=>onChange(e.target.value),
                    className: "bg-slate-700 text-white px-3 py-1.5 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm appearance-none pr-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%239CA3AF%22><path d=%22M7 10l5 5 5-5z%22/></svg>')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem] cursor-pointer",
                    children: groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                            label: group,
                            children: LANGUAGES.filter((lang)=>lang.group === group).map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: lang.id,
                                    children: lang.name
                                }, lang.id, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this))
                        }, group, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/glb-convertor/page.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c1 = LanguageSelector;
function GLBConverter() {
    var _LANGUAGES_find, _projectStructure_geometries, _LANGUAGES_find1, _projectStructure_geometries1, _LANGUAGES_find2, _LANGUAGES_find3, _projectStructure_geometries2, _LANGUAGES_find4;
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelUrl, setModelUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [projectStructure, setProjectStructure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('upload');
    const [gltfData, setGltfData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Display options
    const [displayMode, setDisplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('original');
    const [autoRotate, setAutoRotate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAxes, setShowAxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [componentName, setComponentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Model');
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('typescript');
    const handleFileUpload = async (event)=>{
        var _event_target_files;
        const uploadedFile = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        if (uploadedFile && uploadedFile.name.endsWith('.glb')) {
            setFile(uploadedFile);
            setError('');
            setIsLoading(true);
            setProgress(0);
            try {
                // Create object URL for preview
                const url = URL.createObjectURL(uploadedFile);
                setModelUrl(url);
                // Load GLTF with progress tracking for large files
                await loadGLTFWithProgress(url, uploadedFile);
                // Generate component name from filename
                const name = uploadedFile.name.replace('.glb', '').replace(/[^a-zA-Z0-9]/g, '');
                const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                setComponentName(capitalizedName);
                setActiveTab('preview');
            } catch (err) {
                console.error("Error loading GLTF", err);
                setError('Error processing GLB file. The file may be too large or corrupted.');
            } finally{
                setIsLoading(false);
            }
        } else {
            setError('Please upload a valid .glb file');
        }
    };
    const loadGLTFWithProgress = async (url, file)=>{
        setIsProcessing(true);
        setProgress(0);
        return new Promise((resolve, reject)=>{
            try {
                // Set up DRACO decoder for compressed models (common in large GLBs)
                const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRACOLoader"]();
                dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
                // Track progress for large files
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.responseType = 'arraybuffer';
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        try {
                            // Process the GLB data
                            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
                            loader.setDRACOLoader(dracoLoader);
                            loader.parse(xhr.response, '', (gltf)=>{
                                // Store GLTF data for transpilation
                                setGltfData(gltf);
                                // Generate project structure
                                const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateProjectStructure"])(gltf, componentName, displayMode, selectedLanguage);
                                setProjectStructure(structure);
                                setIsProcessing(false);
                                resolve();
                            }, (error)=>{
                                console.error("Error parsing GLTF", error);
                                setIsProcessing(false);
                                reject(error);
                            });
                        } catch (parseError) {
                            console.error("Error parsing GLTF data", parseError);
                            setIsProcessing(false);
                            reject(parseError);
                        }
                    } else {
                        reject(new Error("Failed to load file: ".concat(xhr.statusText)));
                    }
                };
                xhr.onprogress = function(event) {
                    if (event.lengthComputable) {
                        const percentComplete = event.loaded / event.total * 100;
                        setProgress(percentComplete);
                    }
                };
                xhr.onerror = function() {
                    reject(new Error('Network error occurred while loading the file'));
                };
                xhr.send();
            } catch (err) {
                setIsProcessing(false);
                reject(err);
            }
        });
    };
    // Add this useEffect hook to regenerate code when language changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GLBConverter.useEffect": ()=>{
            if (gltfData && componentName && activeTab === 'code') {
                setIsProcessing(true);
                setProgress(0);
                try {
                    console.log("Regenerating project structure for ".concat(selectedLanguage, "..."));
                    // Generate project structure with current settings
                    const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateProjectStructure"])(gltfData, componentName, displayMode, selectedLanguage);
                    setProjectStructure(structure);
                    setProgress(100);
                    console.log("Project structure regenerated successfully");
                } catch (err) {
                    console.error("Error regenerating project structure", err);
                    setError('Failed to regenerate project structure for the selected language');
                } finally{
                    setIsProcessing(false);
                }
            }
        }
    }["GLBConverter.useEffect"], [
        selectedLanguage,
        gltfData,
        componentName,
        displayMode,
        activeTab
    ]);
    const downloadZip = function() {
        let includeExamplePage = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (!projectStructure) return;
        setIsProcessing(true);
        try {
            var // Add geometry files
            _projectStructure_geometries;
            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
            const lang = LANGUAGES.find((l)=>l.id === selectedLanguage);
            if (!lang) return;
            // Create folder structure
            const componentFolder = zip.folder("components/".concat(componentName));
            const meshesFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder('meshes');
            const geometriesFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder('geometries');
            const materialsFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder('materials');
            // Add index file
            componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.file("index.".concat(lang.extension), projectStructure.indexContent);
            (_projectStructure_geometries = projectStructure.geometries) === null || _projectStructure_geometries === void 0 ? void 0 : _projectStructure_geometries.forEach((geometry)=>{
                geometriesFolder === null || geometriesFolder === void 0 ? void 0 : geometriesFolder.file("".concat(geometry.name, "Geometry.").concat(lang.geometryExtension), geometry.content);
            });
            // Add mesh files
            projectStructure.meshes.forEach((mesh)=>{
                meshesFolder === null || meshesFolder === void 0 ? void 0 : meshesFolder.file("".concat(mesh.name, ".").concat(lang.extension), mesh.content);
            });
            // Add material files
            projectStructure.materials.forEach((material)=>{
                materialsFolder === null || materialsFolder === void 0 ? void 0 : materialsFolder.file("".concat(material.name, ".").concat(lang.extension), material.content);
            });
            // Add example page if requested
            if (includeExamplePage) {
                const appFolder = zip.folder('app');
                const modelPageFolder = appFolder === null || appFolder === void 0 ? void 0 : appFolder.folder("".concat(componentName.toLowerCase(), "-page"));
                modelPageFolder === null || modelPageFolder === void 0 ? void 0 : modelPageFolder.file("page.".concat(lang.extension), projectStructure.examplePageContent);
            }
            // Generate and download zip
            zip.generateAsync({
                type: 'blob'
            }).then((content)=>{
                const suffix = includeExamplePage ? '-with-example' : '';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(content, "".concat(componentName, "-").concat(selectedLanguage).concat(suffix, ".zip"));
            });
        } catch (err) {
            console.error("Error generating ZIP", err);
            setError('Failed to generate ZIP file. The model might be too large.');
        } finally{
            setIsProcessing(false);
        }
    };
    const downloadCurrentView = ()=>{
        if (!gltfData) return;
        setIsProcessing(true);
        try {
            var // Add geometry files
            _structure_geometries;
            // Generate project structure with current display mode
            const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateProjectStructure"])(gltfData, componentName, displayMode, selectedLanguage);
            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
            const lang = LANGUAGES.find((l)=>l.id === selectedLanguage);
            if (!lang) return;
            // Create folder structure
            const componentFolder = zip.folder("components/".concat(componentName, "-").concat(displayMode));
            const meshesFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder('meshes');
            const geometriesFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder('geometries');
            const materialsFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder('materials');
            // Add index file
            componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.file("index.".concat(lang.extension), structure.indexContent);
            (_structure_geometries = structure.geometries) === null || _structure_geometries === void 0 ? void 0 : _structure_geometries.forEach((geometry)=>{
                geometriesFolder === null || geometriesFolder === void 0 ? void 0 : geometriesFolder.file("".concat(geometry.name, "Geometry.").concat(lang.geometryExtension), geometry.content);
            });
            // Add mesh files
            structure.meshes.forEach((mesh)=>{
                meshesFolder === null || meshesFolder === void 0 ? void 0 : meshesFolder.file("".concat(mesh.name, ".").concat(lang.extension), mesh.content);
            });
            // Add material files
            structure.materials.forEach((material)=>{
                materialsFolder === null || materialsFolder === void 0 ? void 0 : materialsFolder.file("".concat(material.name, ".").concat(lang.extension), material.content);
            });
            // Add example page
            const appFolder = zip.folder('app');
            const modelPageFolder = appFolder === null || appFolder === void 0 ? void 0 : appFolder.folder("".concat(componentName.toLowerCase(), "-").concat(displayMode, "-page"));
            modelPageFolder === null || modelPageFolder === void 0 ? void 0 : modelPageFolder.file("page.".concat(lang.extension), structure.examplePageContent);
            // Generate and download zip
            zip.generateAsync({
                type: 'blob'
            }).then((content)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(content, "".concat(componentName, "-").concat(displayMode, "-").concat(selectedLanguage, ".zip"));
            });
        } catch (err) {
            console.error("Error generating ZIP for current view", err);
            setError("Failed to generate ZIP for ".concat(displayMode, " view. The model might be too large."));
        } finally{
            setIsProcessing(false);
        }
    };
    const downloadModel = ()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                    className: "w-10 h-10 text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this),
                                "GLB to Code Converter"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 394,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 max-w-3xl mx-auto text-lg",
                            children: "Convert your GLB 3D models into self-contained components in 15+ programming languages with separate geometry blocks for easier maintenance. Handles large files efficiently with progress tracking and memory optimization."
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 393,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-lg p-1 flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('upload'),
                                className: "px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ".concat(activeTab === 'upload' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this),
                                    "Upload"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('preview'),
                                disabled: !file,
                                className: "px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ".concat(activeTab === 'preview' && file ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this),
                                    "Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('code'),
                                disabled: !projectStructure,
                                className: "px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ".concat(activeTab === 'code' && projectStructure ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 15
                                    }, this),
                                    "Code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 449,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-200",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 450,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 448,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 447,
                    columnNumber: 11
                }, this),
                activeTab === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl p-8 border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-2 border-dashed border-slate-600 rounded-lg p-12 hover:border-purple-500 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-12 h-12 text-slate-400 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-white mb-2",
                                            children: "Upload your GLB model"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 mb-6",
                                            children: "Drop your .glb file here or click to browse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".glb",
                                            onChange: handleFileUpload,
                                            className: "hidden",
                                            id: "file-upload",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 468,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "file-upload",
                                            className: "bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors inline-block ".concat(isLoading ? 'opacity-50 cursor-not-allowed' : ''),
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "w-4 h-4 inline mr-2 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Processing..."
                                                ]
                                            }, void 0, true) : 'Choose File'
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this),
                            (isLoading || isProcessing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-sm",
                                                children: isProcessing ? 'Processing model...' : 'Loading file...'
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-sm",
                                                children: [
                                                    Math.round(progress),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-slate-700 rounded-full h-2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-purple-600 h-2.5 rounded-full transition-all duration-300",
                                            style: {
                                                width: "".concat(progress, "%")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs mt-2",
                                        children: progress < 100 ? "Loading large model. This may take a few moments..." : "Optimizing model data for transpilation..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 509,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 496,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 458,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 457,
                    columnNumber: 11
                }, this),
                activeTab === 'preview' && modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl p-6 border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-white",
                                        children: "3D Model Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-300 text-sm",
                                                        children: "Display Mode:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: displayMode,
                                                        onChange: (e)=>setDisplayMode(e.target.value),
                                                        className: "bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "original",
                                                                children: "Original"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "wireframe",
                                                                children: "Wireframe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "solid",
                                                                children: "Solid Color"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "normals",
                                                                children: "Normals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "depth",
                                                                children: "Depth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "points",
                                                                children: "Point Cloud"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 528,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: autoRotate,
                                                                onChange: (e)=>setAutoRotate(e.target.checked),
                                                                className: "rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Auto Rotate"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: showGrid,
                                                                onChange: (e)=>setShowGrid(e.target.checked),
                                                                className: "rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Grid"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: showAxes,
                                                                onChange: (e)=>setShowAxes(e.target.checked),
                                                                className: "rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Axes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 545,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: downloadCurrentView,
                                                disabled: isProcessing,
                                                className: "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ".concat(isProcessing ? 'opacity-50 cursor-not-allowed' : ''),
                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Processing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Download ",
                                                        displayMode,
                                                        " Version"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 526,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 524,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 rounded-lg p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-sm",
                                        children: [
                                            displayMode === 'original' && 'Showing the original model with its materials and textures.',
                                            displayMode === 'wireframe' && 'Displaying the model as a wireframe structure showing the mesh geometry.',
                                            displayMode === 'solid' && 'Rendering the model with a uniform solid color material.',
                                            displayMode === 'normals' && 'Visualizing surface normals with color-coded directions (RGB = XYZ).',
                                            displayMode === 'depth' && 'Showing depth information - closer surfaces appear lighter.',
                                            displayMode === 'points' && 'Displaying the model as a point cloud of vertices.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 598,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                style: {
                                    height: '500px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                                    camera: {
                                        position: [
                                            0,
                                            0,
                                            5
                                        ],
                                        fov: 50
                                    },
                                    gl: {
                                        powerPreference: "high-performance",
                                        antialias: true,
                                        alpha: true
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                            intensity: 0.5
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 620,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                                            position: [
                                                10,
                                                10,
                                                10
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                                            position: [
                                                -10,
                                                -10,
                                                -10
                                            ],
                                            intensity: 0.3
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 19
                                        }, this),
                                        modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Suspense, {
                                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                                                center: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white bg-black/50 p-2 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 inline mr-2 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 629,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        "Loading model..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 25
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 23
                                            }, void 0),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelPreview, {
                                                url: modelUrl,
                                                displayMode: displayMode,
                                                autoRotate: autoRotate
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 626,
                                            columnNumber: 21
                                        }, this),
                                        showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
                                            args: [
                                                10,
                                                10,
                                                '#444444',
                                                '#666666'
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 21
                                        }, this),
                                        showAxes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("axesHelper", {
                                            args: [
                                                2
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                                            enableZoom: true,
                                            enablePan: true,
                                            enableRotate: true,
                                            minDistance: 0.1,
                                            maxDistance: 100
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                                            preset: "studio"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 612,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 611,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm mt-4 text-center",
                                children: "Use mouse to rotate, zoom, and pan around the model. Try different display modes to analyze the model structure."
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 660,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 523,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 522,
                    columnNumber: 11
                }, this),
                isProcessing && activeTab === 'code' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 right-4 bg-slate-800 px-3 py-1 rounded text-sm text-purple-400",
                    children: "Regenerating code..."
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 667,
                    columnNumber: 3
                }, this),
                activeTab === 'code' && projectStructure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-slate-700 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-start md:items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold text-white",
                                                children: "Project Structure"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageSelector, {
                                                    selectedLanguage: selectedLanguage,
                                                    onChange: setSelectedLanguage
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row gap-4 w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>downloadZip(true),
                                                disabled: isProcessing,
                                                className: "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto ".concat(isProcessing ? 'opacity-50 cursor-not-allowed' : ''),
                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 698,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Processing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 703,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Download Full Project"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 689,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>downloadZip(false),
                                                disabled: isProcessing,
                                                className: "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto ".concat(isProcessing ? 'opacity-50 cursor-not-allowed' : ''),
                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Processing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Download Component"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 708,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: downloadModel,
                                                className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Download GLB"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 727,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 688,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 675,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-slate-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row items-start gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                            className: "w-5 h-5 mr-2 text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Project Structure"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 rounded-lg p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-400 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                        className: "w-4 h-4 mr-2 text-yellow-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 748,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "components"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 749,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 747,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pl-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                className: "w-4 h-4 mr-2 text-blue-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 753,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: componentName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 754,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 752,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pl-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                        className: "w-4 h-4 mr-2 text-green-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 758,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: [
                                                                                            "index.",
                                                                                            (_LANGUAGES_find = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.extension
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 759,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 757,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 762,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: "geometries"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 763,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 761,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pl-6",
                                                                                children: (_projectStructure_geometries = projectStructure.geometries) === null || _projectStructure_geometries === void 0 ? void 0 : _projectStructure_geometries.map((geometry, i)=>{
                                                                                    var _LANGUAGES_find;
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                                                className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 768,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    geometry.name,
                                                                                                    "Geometry.",
                                                                                                    (_LANGUAGES_find = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.geometryExtension
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 769,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 767,
                                                                                        columnNumber: 33
                                                                                    }, this);
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 765,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 774,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: "meshes"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 775,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 773,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pl-6",
                                                                                children: projectStructure.meshes.map((mesh, i)=>{
                                                                                    var _LANGUAGES_find;
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                                                className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 780,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    mesh.name,
                                                                                                    ".",
                                                                                                    (_LANGUAGES_find = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.extension
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 781,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 779,
                                                                                        columnNumber: 33
                                                                                    }, this);
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 777,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-orange-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 786,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: "materials"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 787,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 785,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pl-6",
                                                                                children: projectStructure.materials.map((material, i)=>{
                                                                                    var _LANGUAGES_find;
                                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                                                className: "w-4 h-4 mr-2 text-orange-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 792,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    material.name,
                                                                                                    ".",
                                                                                                    (_LANGUAGES_find = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.extension
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 793,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 791,
                                                                                        columnNumber: 33
                                                                                    }, this);
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 789,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 756,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 751,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                        className: "w-4 h-4 mr-2 text-purple-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 800,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "app"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 801,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 799,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pl-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                className: "w-4 h-4 mr-2 text-blue-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 805,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: [
                                                                                    componentName.toLowerCase(),
                                                                                    "-page"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 806,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 804,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pl-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                    className: "w-4 h-4 mr-2 text-green-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                    lineNumber: 810,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "page.",
                                                                                        (_LANGUAGES_find1 = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find1 === void 0 ? void 0 : _LANGUAGES_find1.extension
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                    lineNumber: 811,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                                            lineNumber: 809,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 808,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 746,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 740,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-5 h-5 mr-2 text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Model Statistics"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 rounded-lg p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-400 text-sm space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Meshes:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 827,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.meshes.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 828,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 826,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Geometry Files:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 831,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: ((_projectStructure_geometries1 = projectStructure.geometries) === null || _projectStructure_geometries1 === void 0 ? void 0 : _projectStructure_geometries1.length) || 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 832,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 830,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Materials:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 835,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.materials.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 836,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total Vertices:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 839,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.totalVertices.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 840,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 838,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total Triangles:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 843,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.totalTriangles.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 844,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 842,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "File Size:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 847,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: file ? (file.size / 1024 / 1024).toFixed(2) + ' MB' : 'N/A'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 848,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 846,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-2 border-t border-slate-700 mt-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Note: For extremely large models (>100MB), some meshes might be simplified \n                            during transpilation to prevent browser memory issues."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 851,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 850,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 819,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 739,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 738,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-5 h-5 mr-2 text-purple-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 21
                                                    }, this),
                                                    "index.",
                                                    (_LANGUAGES_find2 = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find2 === void 0 ? void 0 : _LANGUAGES_find2.extension,
                                                    " - Main Component"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 865,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                code: projectStructure.indexContent,
                                                languageId: selectedLanguage
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 869,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 864,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        className: "w-5 h-5 mr-2 text-cyan-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 877,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Example Page"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 876,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-2 bg-slate-800 border-b border-slate-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-purple-400 font-mono",
                                                            children: [
                                                                "app/",
                                                                componentName.toLowerCase(),
                                                                "-page/page.",
                                                                (_LANGUAGES_find3 = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find3 === void 0 ? void 0 : _LANGUAGES_find3.extension
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 881,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                        code: projectStructure.examplePageContent,
                                                        languageId: selectedLanguage
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 884,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 880,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 875,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        className: "w-5 h-5 mr-2 text-cyan-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 893,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Geometry Files"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 892,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    (_projectStructure_geometries2 = projectStructure.geometries) === null || _projectStructure_geometries2 === void 0 ? void 0 : _projectStructure_geometries2.slice(0, 3).map((geometry, i)=>{
                                                        var _LANGUAGES_find;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 rounded-lg overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 py-2 bg-slate-800 border-b border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cyan-400 font-mono",
                                                                        children: [
                                                                            geometry.name,
                                                                            "Geometry.",
                                                                            (_LANGUAGES_find = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.geometryExtension
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 900,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 899,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                                    code: geometry.content,
                                                                    languageId: selectedLanguage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 902,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 898,
                                                            columnNumber: 23
                                                        }, this);
                                                    }),
                                                    projectStructure.geometries && projectStructure.geometries.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-full text-center text-slate-400 text-sm py-4",
                                                        children: [
                                                            "... and ",
                                                            projectStructure.geometries.length - 3,
                                                            " more geometry files"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 896,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 891,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        className: "w-5 h-5 mr-2 text-cyan-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 918,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Mesh Components"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 917,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    projectStructure.meshes.slice(0, 3).map((mesh, i)=>{
                                                        var _LANGUAGES_find;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 rounded-lg overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 py-2 bg-slate-800 border-b border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cyan-400 font-mono",
                                                                        children: [
                                                                            mesh.name,
                                                                            ".",
                                                                            (_LANGUAGES_find = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.extension
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 925,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 924,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                                    code: mesh.content,
                                                                    languageId: selectedLanguage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 927,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 923,
                                                            columnNumber: 23
                                                        }, this);
                                                    }),
                                                    projectStructure.meshes.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-full text-center text-slate-400 text-sm py-4",
                                                        children: [
                                                            "... and ",
                                                            projectStructure.meshes.length - 3,
                                                            " more mesh components"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 916,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        className: "w-5 h-5 mr-2 text-orange-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Material Components"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 942,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    projectStructure.materials.slice(0, 3).map((material, i)=>{
                                                        var _LANGUAGES_find;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 rounded-lg overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 py-2 bg-slate-800 border-b border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-400 font-mono",
                                                                        children: [
                                                                            material.name,
                                                                            ".",
                                                                            (_LANGUAGES_find = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.extension
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 950,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 949,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                                    code: material.content,
                                                                    languageId: selectedLanguage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 952,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 948,
                                                            columnNumber: 23
                                                        }, this);
                                                    }),
                                                    projectStructure.materials.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-full text-center text-slate-400 text-sm py-4",
                                                        children: [
                                                            "... and ",
                                                            projectStructure.materials.length - 3,
                                                            " more material components"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 959,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 946,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 941,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 863,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-t border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-semibold text-white mb-3",
                                        children: "How to Use"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 968,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "1. Download the complete project with example page:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 973,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "bg-slate-900 rounded p-2 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-blue-400",
                                                            children: "<button onClick={() => downloadZip(true)}>Download Full Project</button>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 974,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 972,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm mb-2",
                                                    children: "2. Extract the zip file into your project root"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 979,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 978,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "3. The example page will be available at:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 982,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "bg-slate-900 rounded p-2 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-blue-400",
                                                            children: "app/".concat(componentName.toLowerCase(), "-page/page.").concat((_LANGUAGES_find4 = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find4 === void 0 ? void 0 : _LANGUAGES_find4.extension)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 984,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 983,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 981,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "4. Import and use the component elsewhere:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 988,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "bg-slate-900 rounded p-2 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-blue-400",
                                                            children: "import ".concat(componentName, " from '@/components/").concat(componentName, "'\n// ...\n<Canvas>\n  <").concat(componentName, " />\n</Canvas>")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 990,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 989,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 987,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "5. Customize individual parts:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 998,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "bg-slate-900 rounded p-2 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-blue-400",
                                                            children: "// Access specific parts\nimport { MeshName } from '@/components/".concat(componentName, "/meshes'\nimport { MeshNameGeometry } from '@/components/").concat(componentName, "/geometries'\nimport { MaterialName } from '@/components/").concat(componentName, "/materials'\n// Example: Change material of a specific mesh\nfunction CustomModel() {\n  return (\n    <").concat(componentName, ">\n      <mesh geometry={").concat(componentName, "Geometry} material={new MaterialName()} />\n    </").concat(componentName, ">\n  )\n}")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1000,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 999,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 997,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 border-t border-slate-700 mt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: [
                                                        "For extremely large models, the converter automatically applies optimizations:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1017,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Geometry data is separated into reusable blocks for better maintainability",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Geometry files are stored in a dedicated folder for easy access",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Mesh components are simplified to just import and use geometry",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1020,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Memory usage is optimized for large models through better data structure",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1021,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Example page is included for immediate use with proper Canvas setup"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1015,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 971,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 967,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 674,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 673,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/glb-convertor/page.tsx",
            lineNumber: 391,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 390,
        columnNumber: 5
    }, this);
}
_s(GLBConverter, "V2+TVAyJ7s+xB6EqOAR/CfCW1mI=");
_c2 = GLBConverter;
// Component to display the GLB model in the preview with memory optimization
function ModelPreview(param) {
    let { url, displayMode, autoRotate } = param;
    _s1();
    const [gltf, setGltf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load GLTF with memory optimization for large files
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelPreview.useEffect": ()=>{
            let isMounted = true;
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
            // Set up DRACO for compressed models
            const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRACOLoader"]();
            dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
            loader.setDRACOLoader(dracoLoader);
            // For large files, use a more memory-efficient approach
            fetch(url).then({
                "ModelPreview.useEffect": (response)=>response.arrayBuffer()
            }["ModelPreview.useEffect"]).then({
                "ModelPreview.useEffect": (data)=>{
                    if (!isMounted) return;
                    loader.parse(data, '', {
                        "ModelPreview.useEffect": (gltf)=>{
                            // For extremely large models, simplify geometries to prevent memory issues
                            if (gltf.scene) {
                                gltf.scene.traverse({
                                    "ModelPreview.useEffect": (object)=>{
                                        if (object.isMesh) {
                                            const mesh = object;
                                            const geometry = mesh.geometry;
                                            // Check if the geometry is extremely large
                                            const vertexCount = geometry.attributes.position.count;
                                            if (vertexCount > 1000000) {
                                                // For extremely large meshes, consider simplifying or warning
                                                console.warn("Mesh ".concat(mesh.name, " has ").concat(vertexCount, " vertices - this may cause performance issues"));
                                            }
                                        }
                                    }
                                }["ModelPreview.useEffect"]);
                            }
                            if (isMounted) {
                                setGltf(gltf);
                            }
                        }
                    }["ModelPreview.useEffect"], {
                        "ModelPreview.useEffect": (error)=>{
                            console.error("Error parsing GLTF", error);
                        }
                    }["ModelPreview.useEffect"]);
                }
            }["ModelPreview.useEffect"]).catch({
                "ModelPreview.useEffect": (error)=>{
                    console.error("Error loading GLB file", error);
                }
            }["ModelPreview.useEffect"]);
            return ({
                "ModelPreview.useEffect": ()=>{
                    isMounted = false;
                    // Clean up GLTF resources
                    if (gltf) {
                        gltf.scene.traverse({
                            "ModelPreview.useEffect": (object)=>{
                                if (object.isMesh) {
                                    const mesh = object;
                                    mesh.geometry.dispose();
                                    if (Array.isArray(mesh.material)) {
                                        mesh.material.forEach({
                                            "ModelPreview.useEffect": (material)=>material.dispose()
                                        }["ModelPreview.useEffect"]);
                                    } else {
                                        mesh.material.dispose();
                                    }
                                }
                            }
                        }["ModelPreview.useEffect"]);
                    }
                }
            })["ModelPreview.useEffect"];
        }
    }["ModelPreview.useEffect"], [
        url
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ModelPreview.useFrame": (state)=>{
            if (meshRef.current && autoRotate) {
                meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
            }
        }
    }["ModelPreview.useFrame"]);
    // Apply material overrides based on display mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelPreview.useEffect": ()=>{
            if (gltf && gltf.scene) {
                gltf.scene.traverse({
                    "ModelPreview.useEffect": (child)=>{
                        if (child.isMesh) {
                            const mesh = child;
                            const originalMaterial = mesh.material;
                            // Dispose of old materials to prevent memory leaks
                            if (Array.isArray(originalMaterial)) {
                                originalMaterial.forEach({
                                    "ModelPreview.useEffect": (material)=>material.dispose()
                                }["ModelPreview.useEffect"]);
                            } else if (originalMaterial && 'dispose' in originalMaterial) {
                                originalMaterial.dispose();
                            }
                            // Create new materials based on display mode
                            switch(displayMode){
                                case 'wireframe':
                                    if (Array.isArray(originalMaterial)) {
                                        mesh.material = originalMaterial.map({
                                            "ModelPreview.useEffect": (mat)=>{
                                                const newMat = mat.clone();
                                                newMat.wireframe = true;
                                                newMat.transparent = true;
                                                newMat.opacity = 0.8;
                                                return newMat;
                                            }
                                        }["ModelPreview.useEffect"]);
                                    } else {
                                        const newMat = originalMaterial.clone();
                                        newMat.wireframe = true;
                                        newMat.transparent = true;
                                        newMat.opacity = 0.8;
                                        mesh.material = newMat;
                                    }
                                    break;
                                case 'points':
                                    mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                                        color: 0x00ff00,
                                        size: 0.01,
                                        sizeAttenuation: true
                                    });
                                    break;
                                case 'normals':
                                    mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]();
                                    break;
                                case 'depth':
                                    mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]();
                                    break;
                                case 'solid':
                                    mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                        color: 0x888888,
                                        metalness: 0.1,
                                        roughness: 0.8
                                    });
                                    break;
                                default:
                                    // Keep original materials for 'original' mode
                                    mesh.material = originalMaterial;
                                    break;
                            }
                        }
                    }
                }["ModelPreview.useEffect"]);
            }
        }
    }["ModelPreview.useEffect"], [
        gltf,
        displayMode
    ]);
    if (!gltf) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
            center: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white bg-black/50 p-2 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-4 h-4 inline mr-2 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1183,
                        columnNumber: 11
                    }, this),
                    "Loading model..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 1182,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/glb-convertor/page.tsx",
            lineNumber: 1181,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        ref: meshRef,
        object: gltf.scene,
        scale: [
            1,
            1,
            1
        ],
        position: [
            0,
            0,
            0
        ]
    }, void 0, false, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 1191,
        columnNumber: 5
    }, this);
}
_s1(ModelPreview, "5T0y0OKdOy4BOwEO+2zjJKPtyj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = ModelPreview;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CodeEditor");
__turbopack_context__.k.register(_c1, "LanguageSelector");
__turbopack_context__.k.register(_c2, "GLBConverter");
__turbopack_context__.k.register(_c3, "ModelPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_654d7407._.js.map