module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/module [external] (module, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[project]/app/lib/glb-converter.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "generateProjectStructure": ()=>generateProjectStructure
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
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
        typeDeclaration: (name)=>`type ${name} = {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`${key}: ${value},`,
        array: (items)=>`[${items.join(', ')}]`,
        stringLiteral: (value)=>`"${value}"`
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
        objectProperty: (key, value)=>`${key}: ${value},`,
        array: (items)=>`[${items.join(', ')}]`,
        stringLiteral: (value)=>`"${value}"`
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
        objectProperty: (key, value)=>`    ${key} = ${value}`,
        array: (items)=>`[${items.join(', ')}]`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`public class ${name} {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`    public ${value} ${key};`,
        array: (items)=>`new ArrayList<>() {{ ${items.map((item)=>`add(${item})`).join('; ')}; }}`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`public class ${name} {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`    public ${value} ${key} { get; set; }`,
        array: (items)=>`new List<${items[0]?.split(' ')[0] || 'object'}> { ${items.join(', ')} }`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`class ${name} { public:`,
        typeEnd: '};',
        objectProperty: (key, value)=>`    ${value} ${key};`,
        array: (items)=>`{${items.join(', ')}}`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`type ${name} struct {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`    ${key} ${value} \`json:"${key.toLowerCase()}"\``,
        array: (items)=>`[]interface{}{${items.join(', ')}}`,
        stringLiteral: (value)=>`"` + value.replace(/"/g, '\\"') + `"`
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
        typeDeclaration: (name)=>`pub struct ${name} {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`    pub ${key}: ${value},`,
        array: (items)=>`vec![${items.join(', ')}]`,
        stringLiteral: (value)=>`"` + value.replace(/"/g, '\\"') + `"`
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
        typeDeclaration: (name)=>`class ${name} {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`    var ${key}: ${value}`,
        array: (items)=>`[${items.join(', ')}]`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`class ${name} {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`    var ${key}: ${value}? = null`,
        array: (items)=>`listOf(${items.join(', ')})`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`class ${name}`,
        typeEnd: 'end',
        objectProperty: (key, value)=>`  attr_accessor :${key}`,
        array: (items)=>`[${items.join(', ')}]`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`class ${name} {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`    private $${key};`,
        array: (items)=>`array(${items.join(', ')})`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`case class ${name} (`,
        typeEnd: ')',
        objectProperty: (key, value)=>`${key}: ${value},`,
        array: (items)=>`Seq(${items.join(', ')})`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`class ${name} {`,
        typeEnd: '}',
        objectProperty: (key, value)=>`  ${value} ${key};`,
        array: (items)=>`[${items.join(', ')}]`,
        stringLiteral: (value)=>`"${value}"`
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
        typeDeclaration: (name)=>`setClass("${name}", slots = list(`,
        typeEnd: '))',
        objectProperty: (key, value)=>`"${key}" = "${value}",`,
        array: (items)=>`c(${items.join(', ')})`,
        stringLiteral: (value)=>`"${value}"`
    }
};
/**
 * Capitalizes the first letter of a string
 * Required for React components which must start with uppercase letters
 */ function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Sanitizes names to be valid identifiers
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
        'var',
        'continue',
        'break',
        'case'
    ];
    if (reservedKeywords.includes(safeName.toLowerCase())) {
        safeName = '_' + safeName;
    }
    return safeName;
}
function generateProjectStructure(gltf, componentName, displayMode = 'original', languageId = 'typescript') {
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
    const normals1 = geometry.attributes.normal ? Array.from(geometry.attributes.normal.array) : null;
    const uvs1 = geometry.attributes.uv ? Array.from(geometry.attributes.uv.array) : null;
    const indices = geometry.index ? Array.from(geometry.index.array) : null;
    // Check if geometry is too large for direct embedding
    const isLargeGeometry = positions.length > 100000;
    switch(languageId){
        case 'typescript':
        case 'javascript':
            return `import * as THREE from 'three';
// ${meshName} geometry definition
// This can be easily modified without affecting component code
export const ${meshName}Geometry = (() => {
  const geometry = new THREE.BufferGeometry();
  ${isLargeGeometry ? `// Large geometry detected - using optimized approach
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
    ${normals1 ? `// Normal data
    const normalChunks = createGeometryChunk(${JSON.stringify(normals1)}, 3);
    const normals = new Float32Array(normalChunks.reduce((acc, chunk) => [...acc, ...chunk], []));
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ''}
    ${uvs1 ? `// UV data
    const uvChunks = createGeometryChunk(${JSON.stringify(uvs1)}, 2);
    const uvs = new Float32Array(uvChunks.reduce((acc, chunk) => [...acc, ...chunk], []));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ''}
    ${indices ? `// Index data
    const indexChunks = createGeometryChunk(${JSON.stringify(indices)}, 1);
    const indices = new Uint16Array(indexChunks.reduce((acc, chunk) => [...acc, ...chunk], []));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ''}` : `// Position data
    const positions = new Float32Array(${JSON.stringify(positions)});
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    ${normals1 ? `// Normal data
    const normals = new Float32Array(${JSON.stringify(normals1)});
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ''}
    ${uvs1 ? `// UV data
    const uvs = new Float32Array(${JSON.stringify(uvs1)});
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ''}
    ${indices ? `// Index data
    const indices = new Uint16Array(${JSON.stringify(indices)});
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ''}`}
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
        ${isLargeGeometry ? `# Large geometry detected - using chunked approach
          positions = np.array(${JSON.stringify(positions)}, dtype='f4')
          vbo_positions = ctx.buffer(reserve=positions.nbytes)
          vbo_positions.write(positions.tobytes())
          
          ${normals1 ? `# Normal data
          normals = np.array(${JSON.stringify(normals1)}, dtype='f4')
          vbo_normals = ctx.buffer(reserve=normals.nbytes)
          vbo_normals.write(normals.tobytes())` : ''}
          
          ${uvs1 ? `# UV data
          uvs = np.array(${JSON.stringify(uvs1)}, dtype='f4')
          vbo_uvs = ctx.buffer(reserve=uvs.nbytes)
          vbo_uvs.write(uvs.tobytes())` : ''}
          
          ${indices ? `# Index data
          indices = np.array(${JSON.stringify(indices)}, dtype='i4')
          ibo = ctx.buffer(reserve=indices.nbytes)
          ibo.write(indices.tobytes())` : ''}` : `positions = np.array(${JSON.stringify(positions)}, dtype='f4')
          vbo_positions = ctx.buffer(positions)
          
          ${normals1 ? `# Normal data
          normals = np.array(${JSON.stringify(normals1)}, dtype='f4')
          vbo_normals = ctx.buffer(normals)` : ''}
          
          ${uvs1 ? `# UV data
          uvs = np.array(${JSON.stringify(uvs1)}, dtype='f4')
          vbo_uvs = ctx.buffer(uvs)` : ''}
          
          ${indices ? `# Index data
          indices = np.array(${JSON.stringify(indices)}, dtype='i4')
          ibo = ctx.buffer(indices)` : ''}`}
        
        # Create vertex array
        ${indices ? `vao = ctx.vertex_array(
              prog,
              [
                  (vbo_positions, '3f', 'in_position'),
                  ${normals1 ? `(vbo_normals, '3f', 'in_normal'),` : ''}
                  ${uvs1 ? `(vbo_uvs, '2f', 'in_uv'),` : ''}
              ],
              index_buffer=ibo
          )` : `vao = ctx.vertex_array(
              prog,
              [
                  (vbo_positions, '3f', 'in_position'),
                  ${normals1 ? `(vbo_normals, '3f', 'in_normal'),` : ''}
                  ${uvs1 ? `(vbo_uvs, '2f', 'in_uv'),` : ''}
              ]
          )`}
        
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
        
        ${normals1 ? `// Normal data
        float[] normals = ${JSON.stringify(normals1)};
        mesh.setBuffer(VertexBuffer.Type.Normal, 3, BufferUtils.createFloatBuffer(normals));` : ''}
        
        ${uvs1 ? `// UV data
        float[] uvs = ${JSON.stringify(uvs1)};
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
        ${JSON.stringify(positions).match(/-?\\d+\\.\\d+/g)?.map((_, i, arr)=>i % 3 === 0 ? `vertices.Add(new Vector3(${arr[i]}, ${arr[i + 1]}, ${arr[i + 2]}));` : '').filter(Boolean).join('\n        ') || ''}
        
        mesh.SetVertices(vertices);
        
        ${normals1 ? `// Normal data
        List<Vector3> normals = new List<Vector3>();
        ${JSON.stringify(normals1).match(/-?\\d+\\.\\d+/g)?.map((_, i, arr)=>i % 3 === 0 ? `normals.Add(new Vector3(${arr[i]}, ${arr[i + 1]}, ${arr[i + 2]}));` : '').filter(Boolean).join('\n        ') || ''}
        mesh.SetNormals(normals);` : ''}
        
        ${uvs1 ? `// UV data
        List<Vector2> uv = new List<Vector2>();
        ${JSON.stringify(uvs1).match(/-?\\d+\\.\\d+/g)?.map((_, i, arr)=>i % 2 === 0 ? `uv.Add(new Vector2(${arr[i]}, ${arr[i + 1]}));` : '').filter(Boolean).join('\n        ') || ''}
        mesh.SetUVs(0, uv);` : ''}
        
        ${indices ? `// Index data
        List<int> triangles = new List<int>();
        ${JSON.stringify(indices).match(/\\d+/g)?.map((index)=>`triangles.Add(${index});`).join('\n        ') || ''}
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
    ${normals1 ? `std::vector<glm::vec3> normals;` : ''}
    ${uvs1 ? `std::vector<glm::vec2> uvs;` : ''}
    ${indices ? `std::vector<unsigned int> indices;` : ''}
    
    ${meshName}Geometry() {
        // Position data
        float positions[] = {${positions.join(', ')}};
        for (int i = 0; i < sizeof(positions) / sizeof(float); i += 3) {
            vertices.push_back(glm::vec3(positions[i], positions[i+1], positions[i+2]));
        }
        
        ${normals1 ? `// Normal data
        float normals_data[] = {${(normals1 || []).join(', ')}};
        for (int i = 0; i < sizeof(normals_data) / sizeof(float); i += 3) {
            this->normals.push_back(glm::vec3(normals_data[i], normals_data[i+1], normals_data[i+2]));
        }` : ''}
        
        ${uvs1 ? `// UV data
        float uvs_data[] = {${(uvs1 || []).join(', ')}};
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
        
        ${normals1 ? `// Setup normals
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, normals.size() * sizeof(glm::vec3), &normals[0], GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(1);` : ''}
        
        ${uvs1 ? `// Setup UVs
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
    ${normals1 ? `Normals []mgl32.Vec3` : ''}
    ${uvs1 ? `UVs []mgl32.Vec2` : ''}
    ${indices ? `Indices []uint32` : ''}
}

func New${meshName}Geometry() *${meshName}Geometry {
    geom := &${meshName}Geometry{
        Vertices: make([]mgl32.Vec3, ${positions.length / 3}),
        ${normals1 ? `Normals: make([]mgl32.Vec3, ${normals1.length / 3}),` : ''}
        ${uvs1 ? `UVs: make([]mgl32.Vec2, ${uvs1.length / 2}),` : ''}
        ${indices ? `Indices: make([]uint32, ${indices.length}),` : ''}
    }
    
    // Position data
    positions := []float32{${positions.join(', ')}}
    for i := 0; i < len(positions); i += 3 {
        geom.Vertices[i/3] = mgl32.Vec3{positions[i], positions[i+1], positions[i+2]}
    }
    
    ${normals1 ? `// Normal data
    normals := []float32{${(normals1 || []).join(', ')}}
    for i := 0; i < len(normals); i += 3 {
        geom.Normals[i/3] = mgl32.Vec3{normals[i], normals[i+1], normals[i+2]}
    }` : ''}
    
    ${uvs1 ? `// UV data
    uvs := []float32{${(uvs1 || []).join(', ')}}
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
    
    ${normals1 ? `// Normal attribute
    normals := make([]float32, len(g.Normals)*3)
    for i, n := range g.Normals {
        normals[i*3] = n.X()
        normals[i*3+1] = n.Y()
        normals[i*3+2] = n.Z()
    }
    
    gl.BufferData(gl.ARRAY_BUFFER, len(normals)*4, gl.Ptr(normals), gl.STATIC_DRAW)
    gl.VertexAttribPointer(1, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(1)` : ''}
    
    ${uvs1 ? `// UV attribute
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
    ${normals1 ? `pub normals: Vec<Vec3>,` : ''}
    ${uvs1 ? `pub uvs: Vec<Vec2>,` : ''}
    ${indices ? `pub indices: Vec<u32>,` : ''}
}

impl ${meshName}Geometry {
    pub fn new() -> Self {
        // Position data
        let positions = [
            ${Array.from({
                length: positions.length / 3
            }, (_, i)=>`Vec3::new(${positions[i * 3]}, ${positions[i * 3 + 1]}, ${positions[i * 3 + 2]})`).join(',\n            ')}
        ];
        
        ${normals1 ? `// Normal data
        let normals = [
            ${Array.from({
                length: normals1.length / 3
            }, (_, i)=>`Vec3::new(${normals1[i * 3]}, ${normals1[i * 3 + 1]}, ${normals1[i * 3 + 2]})`).join(',\n            ')}
        ];` : ''}
        
        ${uvs1 ? `// UV data
        let uvs = [
            ${Array.from({
                length: uvs1.length / 2
            }, (_, i)=>`Vec2::new(${uvs1[i * 2]}, ${uvs1[i * 2 + 1]})`).join(',\n            ')}
        ];` : ''}
        
        ${indices ? `// Index data
        let indices = vec![
            ${indices.join(',\n            ')}
        ];` : ''}
        
        Self {
            vertices: positions.to_vec(),
            ${normals1 ? `normals: normals.to_vec(),` : ''}
            ${uvs1 ? `uvs: uvs.to_vec(),` : ''}
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
    ${normals1 ? `var normals: [SIMD3<Float>]` : ''}
    ${uvs1 ? `var uvs: [SIMD2<Float>]` : ''}
    ${indices ? `var indices: [UInt16]` : ''}
    
    init() {
        // Position data
        let positions: [Float] = [${positions.join(', ')}]
        self.vertices = []
        for i in stride(from: 0, to: positions.count, by: 3) {
            vertices.append(SIMD3<Float>(positions[i], positions[i+1], positions[i+2]))
        }
        
        ${normals1 ? `// Normal data
        let normalsData: [Float] = [${(normals1 || []).join(', ')}]
        self.normals = []
        for i in stride(from: 0, to: normalsData.count, by: 3) {
            normals.append(SIMD3<Float>(normalsData[i], normalsData[i+1], normalsData[i+2]))
        }` : ''}
        
        ${uvs1 ? `// UV data
        let uvsData: [Float] = [${(uvs1 || []).join(', ')}]
        self.uvs = []
        for i in stride(from: 0, to: uvsData.count, by: 2) {
            uvs.append(SIMD2<Float>(uvsData[i], uvsData[i+1]))
        }` : ''}
        
        ${indices ? `// Index data
        self.indices = [${(indices || []).join(', ')}]` : ''}
    }
    
    func setupBuffers(device: MTLDevice) -> (
        vertexBuffer: MTLBuffer,
        ${normals1 ? 'normalBuffer: MTLBuffer,' : ''}
        ${uvs1 ? 'uvBuffer: MTLBuffer,' : ''}
        ${indices ? 'indexBuffer: MTLBuffer?' : 'indexBuffer: nil'}
    ) {
        let vertexData = vertices.flatMap { [$0.x, $0.y, $0.z] }
        let vertexBuffer = device.makeBuffer(
            bytes: vertexData, 
            length: MemoryLayout<Float>.size * vertexData.count,
            options: []
        )!
        
        ${normals1 ? `let normalData = normals.flatMap { [$0.x, $0.y, $0.z] }
        let normalBuffer = device.makeBuffer(
            bytes: normalData, 
            length: MemoryLayout<Float>.size * normalData.count,
            options: []
        )!` : ''}
        
        ${uvs1 ? `let uvData = uvs.flatMap { [$0.x, $0.y] }
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
            ${normals1 ? 'normalBuffer: normalBuffer,' : ''}
            ${uvs1 ? 'uvBuffer: uvBuffer,' : ''}
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
  ${normals1 ? `// Normal data
  const normals = new Float32Array(${JSON.stringify(normals1)});
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ''}
  ${uvs1 ? `// UV data
  const uvs = new Float32Array(${JSON.stringify(uvs1)});
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
 */ function generateMeshComponent(meshName, _geometry, displayMode, languageId) {
    const lang = LANGUAGES[languageId];
    switch(languageId){
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
 */ function generateMaterialComponent(materialName, material, displayMode, languageId) {
    const lang = LANGUAGES[languageId];
    // Base material properties
    let materialType = 'MeshStandardMaterial';
    let properties = [];
    // Determine material type
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) materialType = 'MeshBasicMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]) materialType = 'MeshPhongMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshLambertMaterial"]) materialType = 'MeshLambertMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]) materialType = 'MeshNormalMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]) materialType = 'MeshDepthMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshMatcapMaterial"]) materialType = 'MeshMatcapMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshToonMaterial"]) materialType = 'MeshToonMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]) materialType = 'MeshPhysicalMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) materialType = 'MeshStandardMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]) materialType = 'ShaderMaterial';
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
            properties.push(`color: new THREE.Color(${material.color.r}, ${material.color.g}, ${material.color.b})`);
            if ('roughness' in material) properties.push(`roughness: ${material.roughness}`);
            if ('metalness' in material) properties.push(`metalness: ${material.metalness}`);
            if ('opacity' in material) properties.push(`opacity: ${material.opacity}`);
            if ('transparent' in material) properties.push(`transparent: ${material.transparent}`);
            if ('emissive' in material) {
                const emissive = material.emissive;
                properties.push(`emissive: new THREE.Color(${emissive.r}, ${emissive.g}, ${emissive.b})`);
            }
            if ('emissiveIntensity' in material) properties.push(`emissiveIntensity: ${material.emissiveIntensity}`);
            if ('shininess' in material) properties.push(`shininess: ${material.shininess}`);
            break;
    }
    switch(languageId){
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
                    ${displayMode === 'wireframe' ? 'f_color = vec4(0.0, 0.0, 0.0, 0.2);' : displayMode === 'normals' ? 'f_color = vec4(normalize(v_normal) * 0.5 + 0.5, 1.0);' : displayMode === 'points' ? 'f_color = vec4(0.0, 1.0, 0.0, 1.0);' : 'f_color = vec4(0.5, 0.5, 0.5, 1.0);'}
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
        ${displayMode === 'wireframe' ? 'material.setBoolean("Wireframe", true);' : displayMode === 'normals' ? 'material = new Material(assetManager, "Common/MatDefs/Misc/Normal.frag.glsl");' : displayMode === 'points' ? 'material = new Material(assetManager, "Common/MatDefs/Misc/Unshaded.j3md");' : `// Standard material properties
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
        
        ${displayMode === 'wireframe' ? `material.SetInt("_Wireframe", 1);
          material.SetColor("_Color", new Color(0f, 0f, 0f, 0.2f));` : displayMode === 'normals' ? `material = new Material(Shader.Find("Universal Render Pipeline/Normal"));
          material.SetColor("_Color", Color.white);` : displayMode === 'points' ? `material = new Material(Shader.Find("Particles/Standard Unlit"));
          material.SetColor("_BaseColor", Color.green);` : `// Standard material properties
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
 */ function generateIndexComponent(componentName, meshes, materials, displayMode, languageId) {
    const lang = LANGUAGES[languageId];
    switch(languageId){
        case 'typescript':
        case 'javascript':
            // Generate imports
            const meshImports = meshes.map((mesh)=>`import ${mesh.name} from './meshes/${mesh.name}';`).join('\n');
            const materialImports = materials.map((material)=>`import ${material.name} from './materials/${material.name}';`).join('\n');
            const meshElements = meshes.map((mesh, i)=>{
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

${meshes.map((mesh)=>`from .meshes.${mesh.name} import ${mesh.name}`).join('\n')}
${materials.map((material)=>`from .materials.${material.name} import ${material.name}`).join('\n')}

class ${componentName}:
    """${componentName} component for ModernGL"""
    
    def __init__(self, ctx: moderngl.Context):
        self.ctx = ctx
        self.meshes = [
            ${meshes.map((mesh, i)=>{
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
        ${materials.map((material, i)=>`Material material${i} = new ${material.name}(assetManager).getMaterial();`).join('\n        ')}
        
        // Create meshes
        ${meshes.map((mesh, i)=>`this.attachChild(new ${mesh.name}(assetManager, material${i % materials.length}));`).join('\n        ')}
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
        ${materials.map((material, i)=>`var material${i} = new ${material.name}().GetMaterial();`).join('\n        ')}
        
        // Create meshes
        ${meshes.map((mesh, i)=>`var ${mesh.name.ToLower()}Obj = new GameObject("${mesh.name}");
          ${mesh.name.ToLower()}Obj.transform.parent = transform;
          var ${mesh.name}Component = ${mesh.name.ToLower()}Obj.AddComponent<${mesh.name}>();
          meshes.Add(${mesh.name.ToLower()}Obj);`).join('\n        ')}
    }
}
`;
        default:
            // Fallback to TypeScript for unsupported languages
            return `import React, { useRef } from 'react';
import type { GroupProps } from '@react-three/fiber';
// Mesh imports
${meshes.map((mesh)=>`import ${mesh.name} from './meshes/${mesh.name}';`).join('\n')}
// Material imports
${materials.map((material)=>`import ${material.name} from './materials/${material.name}';`).join('\n')}

/**
 * ${componentName} component
 * Main component that assembles all mesh and material parts
 */
export default function ${componentName}(props: GroupProps) {
  const ref = useRef();
  return (
    <group ref={ref} {...props}>
      ${meshes.map((mesh, i)=>{
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
 */ function generateExamplePage(componentName, languageId) {
    const lang = LANGUAGES[languageId];
    switch(languageId){
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
}),
"[project]/app/glb-convertor/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>GLBConverter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/glb-converter.ts [app-ssr] (ecmascript)");
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
function CodeEditor({ code, languageId }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1E1E1E] rounded-lg overflow-hidden font-mono text-sm h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#3C3C3C] px-4 py-2 flex items-center justify-between border-b border-[#333333]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FF5F56]"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FFBD2E]"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#CCCCCC] text-xs flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: language?.name
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#858585] w-8 select-none flex-shrink-0 pr-4 text-right",
                            children: lines.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `whitespace-pre ${getSyntaxClass(line, i)}`,
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
// Language selector component with grouping
function LanguageSelector({ selectedLanguage, onChange }) {
    const groups = Array.from(new Set(LANGUAGES.map((lang)=>lang.group)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                    className: "w-4 h-4 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedLanguage,
                    onChange: (e)=>onChange(e.target.value),
                    className: "bg-slate-700 text-white px-3 py-1.5 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm appearance-none pr-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%239CA3AF%22><path d=%22M7 10l5 5 5-5z%22/></svg>')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem] cursor-pointer",
                    children: groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                            label: group,
                            children: LANGUAGES.filter((lang)=>lang.group === group).map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
function GLBConverter() {
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelUrl, setModelUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [projectStructure, setProjectStructure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('upload');
    const [gltfData, setGltfData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Display options
    const [displayMode, setDisplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('original');
    const [autoRotate, setAutoRotate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAxes, setShowAxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [componentName, setComponentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Model');
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('typescript');
    const handleFileUpload = async (event)=>{
        const uploadedFile = event.target.files?.[0];
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
                const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRACOLoader"]();
                dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
                // Track progress for large files
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.responseType = 'arraybuffer';
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        try {
                            // Process the GLB data
                            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
                            loader.setDRACOLoader(dracoLoader);
                            loader.parse(xhr.response, '', (gltf)=>{
                                // Store GLTF data for transpilation
                                setGltfData(gltf);
                                // Generate project structure
                                const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateProjectStructure"])(gltf, componentName, displayMode, selectedLanguage);
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
                        reject(new Error(`Failed to load file: ${xhr.statusText}`));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gltfData && componentName && activeTab === 'code') {
            setIsProcessing(true);
            setProgress(0);
            try {
                console.log(`Regenerating project structure for ${selectedLanguage}...`);
                // Generate project structure with current settings
                const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateProjectStructure"])(gltfData, componentName, displayMode, selectedLanguage);
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
    }, [
        selectedLanguage,
        gltfData,
        componentName,
        displayMode,
        activeTab
    ]);
    const downloadZip = (includeExamplePage = false)=>{
        if (!projectStructure) return;
        setIsProcessing(true);
        try {
            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
            const lang = LANGUAGES.find((l)=>l.id === selectedLanguage);
            if (!lang) return;
            // Create folder structure
            const componentFolder = zip.folder(`components/${componentName}`);
            const meshesFolder = componentFolder?.folder('meshes');
            const geometriesFolder = componentFolder?.folder('geometries');
            const materialsFolder = componentFolder?.folder('materials');
            // Add index file
            componentFolder?.file(`index.${lang.extension}`, projectStructure.indexContent);
            // Add geometry files
            projectStructure.geometries?.forEach((geometry)=>{
                geometriesFolder?.file(`${geometry.name}Geometry.${lang.geometryExtension}`, geometry.content);
            });
            // Add mesh files
            projectStructure.meshes.forEach((mesh)=>{
                meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
            });
            // Add material files
            projectStructure.materials.forEach((material)=>{
                materialsFolder?.file(`${material.name}.${lang.extension}`, material.content);
            });
            // Add example page if requested
            if (includeExamplePage) {
                const appFolder = zip.folder('app');
                const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-page`);
                modelPageFolder?.file(`page.${lang.extension}`, projectStructure.examplePageContent);
            }
            // Generate and download zip
            zip.generateAsync({
                type: 'blob'
            }).then((content)=>{
                const suffix = includeExamplePage ? '-with-example' : '';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(content, `${componentName}-${selectedLanguage}${suffix}.zip`);
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
            // Generate project structure with current display mode
            const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateProjectStructure"])(gltfData, componentName, displayMode, selectedLanguage);
            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
            const lang = LANGUAGES.find((l)=>l.id === selectedLanguage);
            if (!lang) return;
            // Create folder structure
            const componentFolder = zip.folder(`components/${componentName}-${displayMode}`);
            const meshesFolder = componentFolder?.folder('meshes');
            const geometriesFolder = componentFolder?.folder('geometries');
            const materialsFolder = componentFolder?.folder('materials');
            // Add index file
            componentFolder?.file(`index.${lang.extension}`, structure.indexContent);
            // Add geometry files
            structure.geometries?.forEach((geometry)=>{
                geometriesFolder?.file(`${geometry.name}Geometry.${lang.geometryExtension}`, geometry.content);
            });
            // Add mesh files
            structure.meshes.forEach((mesh)=>{
                meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
            });
            // Add material files
            structure.materials.forEach((material)=>{
                materialsFolder?.file(`${material.name}.${lang.extension}`, material.content);
            });
            // Add example page
            const appFolder = zip.folder('app');
            const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-${displayMode}-page`);
            modelPageFolder?.file(`page.${lang.extension}`, structure.examplePageContent);
            // Generate and download zip
            zip.generateAsync({
                type: 'blob'
            }).then((content)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(content, `${componentName}-${displayMode}-${selectedLanguage}.zip`);
            });
        } catch (err) {
            console.error("Error generating ZIP for current view", err);
            setError(`Failed to generate ZIP for ${displayMode} view. The model might be too large.`);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-lg p-1 flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('upload'),
                                className: `px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${activeTab === 'upload' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('preview'),
                                disabled: !file,
                                className: `px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${activeTab === 'preview' && file ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('code'),
                                disabled: !projectStructure,
                                className: `px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${activeTab === 'code' && projectStructure ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
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
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 449,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                activeTab === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl p-8 border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-2 border-dashed border-slate-600 rounded-lg p-12 hover:border-purple-500 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-12 h-12 text-slate-400 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-white mb-2",
                                            children: "Upload your GLB model"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 mb-6",
                                            children: "Drop your .glb file here or click to browse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "file-upload",
                                            className: `bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors inline-block ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`,
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                            (isLoading || isProcessing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 text-sm",
                                                children: isProcessing ? 'Processing model...' : 'Loading file...'
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-slate-700 rounded-full h-2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-purple-600 h-2.5 rounded-full transition-all duration-300",
                                            style: {
                                                width: `${progress}%`
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                activeTab === 'preview' && modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl p-6 border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-white",
                                        children: "3D Model Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-300 text-sm",
                                                        children: "Display Mode:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: displayMode,
                                                        onChange: (e)=>setDisplayMode(e.target.value),
                                                        className: "bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "original",
                                                                children: "Original"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "wireframe",
                                                                children: "Wireframe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "solid",
                                                                children: "Solid Color"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "normals",
                                                                children: "Normals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "depth",
                                                                children: "Depth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: downloadCurrentView,
                                                disabled: isProcessing,
                                                className: `bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Processing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 rounded-lg p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                style: {
                                    height: '500px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                            intensity: 0.5
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 620,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
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
                                        modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Suspense, {
                                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                                                center: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white bg-black/50 p-2 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelPreview, {
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
                                        showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
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
                                        showAxes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("axesHelper", {
                                            args: [
                                                2
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                isProcessing && activeTab === 'code' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 right-4 bg-slate-800 px-3 py-1 rounded text-sm text-purple-400",
                    children: "Regenerating code..."
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 667,
                    columnNumber: 3
                }, this),
                activeTab === 'code' && projectStructure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-slate-700 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-start md:items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold text-white",
                                                children: "Project Structure"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageSelector, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row gap-4 w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>downloadZip(true),
                                                disabled: isProcessing,
                                                className: `bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 698,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Processing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>downloadZip(false),
                                                disabled: isProcessing,
                                                className: `bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Processing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: downloadModel,
                                                className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-slate-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row items-start gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 rounded-lg p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-400 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                        className: "w-4 h-4 mr-2 text-yellow-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 748,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pl-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                className: "w-4 h-4 mr-2 text-blue-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 753,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pl-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                        className: "w-4 h-4 mr-2 text-green-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 758,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: [
                                                                                            "index.",
                                                                                            LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 762,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pl-6",
                                                                                children: projectStructure.geometries?.map((geometry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                                                className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 768,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    geometry.name,
                                                                                                    "Geometry.",
                                                                                                    LANGUAGES.find((l)=>l.id === selectedLanguage)?.geometryExtension
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
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 765,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 774,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pl-6",
                                                                                children: projectStructure.meshes.map((mesh, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                                                className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 780,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    mesh.name,
                                                                                                    ".",
                                                                                                    LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension
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
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 777,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-orange-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 786,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "pl-6",
                                                                                children: projectStructure.materials.map((material, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                                                className: "w-4 h-4 mr-2 text-orange-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                                lineNumber: 792,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: [
                                                                                                    material.name,
                                                                                                    ".",
                                                                                                    LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension
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
                                                                                    }, this))
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                        className: "w-4 h-4 mr-2 text-purple-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 800,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pl-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                className: "w-4 h-4 mr-2 text-blue-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 805,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pl-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                    className: "w-4 h-4 mr-2 text-green-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                    lineNumber: 810,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "page.",
                                                                                        LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 rounded-lg p-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-400 text-sm space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Meshes:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 827,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Geometry Files:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 831,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.geometries?.length || 0
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Materials:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 835,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total Vertices:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 839,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total Triangles:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 843,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "File Size:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 847,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-2 border-t border-slate-700 mt-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: `Note: For extremely large models (>100MB), some meshes might be simplified 
                            during transpilation to prevent browser memory issues.`
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-5 h-5 mr-2 text-purple-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 21
                                                    }, this),
                                                    "index.",
                                                    LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension,
                                                    " - Main Component"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 865,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-2 bg-slate-800 border-b border-slate-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-purple-400 font-mono",
                                                            children: [
                                                                "app/",
                                                                componentName.toLowerCase(),
                                                                "-page/page.",
                                                                LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    projectStructure.geometries?.slice(0, 3).map((geometry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 rounded-lg overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 py-2 bg-slate-800 border-b border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cyan-400 font-mono",
                                                                        children: [
                                                                            geometry.name,
                                                                            "Geometry.",
                                                                            LANGUAGES.find((l)=>l.id === selectedLanguage)?.geometryExtension
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
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
                                                        }, this)),
                                                    projectStructure.geometries && projectStructure.geometries.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    projectStructure.meshes.slice(0, 3).map((mesh, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 rounded-lg overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 py-2 bg-slate-800 border-b border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-cyan-400 font-mono",
                                                                        children: [
                                                                            mesh.name,
                                                                            ".",
                                                                            LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
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
                                                        }, this)),
                                                    projectStructure.meshes.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-semibold text-white mb-3 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    projectStructure.materials.slice(0, 3).map((material, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 rounded-lg overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-4 py-2 bg-slate-800 border-b border-slate-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-orange-400 font-mono",
                                                                        children: [
                                                                            material.name,
                                                                            ".",
                                                                            LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
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
                                                        }, this)),
                                                    projectStructure.materials.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-t border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-semibold text-white mb-3",
                                        children: "How to Use"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 968,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "1. Download the complete project with example page:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 973,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "bg-slate-900 rounded p-2 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-blue-400",
                                                            children: `<button onClick={() => downloadZip(true)}>Download Full Project</button>`
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "3. The example page will be available at:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 982,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "bg-slate-900 rounded p-2 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-blue-400",
                                                            children: `app/${componentName.toLowerCase()}-page/page.${LANGUAGES.find((l)=>l.id === selectedLanguage)?.extension}`
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "4. Import and use the component elsewhere:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 988,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "bg-slate-900 rounded p-2 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-blue-400",
                                                            children: `import ${componentName} from '@/components/${componentName}'
// ...
<Canvas>
  <${componentName} />
</Canvas>`
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "5. Customize individual parts:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 998,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "bg-slate-900 rounded p-2 text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-blue-400",
                                                            children: `// Access specific parts
import { MeshName } from '@/components/${componentName}/meshes'
import { MeshNameGeometry } from '@/components/${componentName}/geometries'
import { MaterialName } from '@/components/${componentName}/materials'
// Example: Change material of a specific mesh
function CustomModel() {
  return (
    <${componentName}>
      <mesh geometry={${componentName}Geometry} material={new MaterialName()} />
    </${componentName}>
  )
}`
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 border-t border-slate-700 mt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: [
                                                        "For extremely large models, the converter automatically applies optimizations:",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1017,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Geometry data is separated into reusable blocks for better maintainability",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Geometry files are stored in a dedicated folder for easy access",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Mesh components are simplified to just import and use geometry",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1020,
                                                            columnNumber: 23
                                                        }, this),
                                                        "- Memory usage is optimized for large models through better data structure",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
// Component to display the GLB model in the preview with memory optimization
function ModelPreview({ url, displayMode, autoRotate }) {
    const [gltf, setGltf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load GLTF with memory optimization for large files
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        // Set up DRACO for compressed models
        const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRACOLoader"]();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        loader.setDRACOLoader(dracoLoader);
        // For large files, use a more memory-efficient approach
        fetch(url).then((response)=>response.arrayBuffer()).then((data)=>{
            if (!isMounted) return;
            loader.parse(data, '', (gltf)=>{
                // For extremely large models, simplify geometries to prevent memory issues
                if (gltf.scene) {
                    gltf.scene.traverse((object)=>{
                        if (object.isMesh) {
                            const mesh = object;
                            const geometry = mesh.geometry;
                            // Check if the geometry is extremely large
                            const vertexCount = geometry.attributes.position.count;
                            if (vertexCount > 1000000) {
                                // For extremely large meshes, consider simplifying or warning
                                console.warn(`Mesh ${mesh.name} has ${vertexCount} vertices - this may cause performance issues`);
                            }
                        }
                    });
                }
                if (isMounted) {
                    setGltf(gltf);
                }
            }, (error)=>{
                console.error("Error parsing GLTF", error);
            });
        }).catch((error)=>{
            console.error("Error loading GLB file", error);
        });
        return ()=>{
            isMounted = false;
            // Clean up GLTF resources
            if (gltf) {
                gltf.scene.traverse((object)=>{
                    if (object.isMesh) {
                        const mesh = object;
                        mesh.geometry.dispose();
                        if (Array.isArray(mesh.material)) {
                            mesh.material.forEach((material)=>material.dispose());
                        } else {
                            mesh.material.dispose();
                        }
                    }
                });
            }
        };
    }, [
        url
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])((state)=>{
        if (meshRef.current && autoRotate) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
        }
    });
    // Apply material overrides based on display mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gltf && gltf.scene) {
            gltf.scene.traverse((child)=>{
                if (child.isMesh) {
                    const mesh = child;
                    const originalMaterial = mesh.material;
                    // Dispose of old materials to prevent memory leaks
                    if (Array.isArray(originalMaterial)) {
                        originalMaterial.forEach((material)=>material.dispose());
                    } else if (originalMaterial && 'dispose' in originalMaterial) {
                        originalMaterial.dispose();
                    }
                    // Create new materials based on display mode
                    switch(displayMode){
                        case 'wireframe':
                            if (Array.isArray(originalMaterial)) {
                                mesh.material = originalMaterial.map((mat)=>{
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
                                mesh.material = newMat;
                            }
                            break;
                        case 'points':
                            mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                                color: 0x00ff00,
                                size: 0.01,
                                sizeAttenuation: true
                            });
                            break;
                        case 'normals':
                            mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]();
                            break;
                        case 'depth':
                            mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]();
                            break;
                        case 'solid':
                            mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
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
            });
        }
    }, [
        gltf,
        displayMode
    ]);
    if (!gltf) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
            center: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white bg-black/50 p-2 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
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
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7debd99e._.js.map