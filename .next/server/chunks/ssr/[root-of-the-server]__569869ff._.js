module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
        array: (items)=>`new List<object> { ${items.join(', ')} }`,
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
        stringLiteral: (value)=>`"${value.replace(/"/g, '\\"')}"`
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
        stringLiteral: (value)=>`"${value.replace(/"/g, '\\"')}"`
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
        typeDeclaration: (name)=>`case class ${name}(`,
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
/**
 * Formats array data for different languages with proper chunking for large datasets
 */ function formatArrayData(data, languageId, chunkSize = 1000) {
    const lang = LANGUAGES[languageId];
    if (data.length <= chunkSize) {
        return lang.array(data.map(String));
    }
    // Handle large arrays with chunking
    switch(languageId){
        case 'typescript':
        case 'javascript':
            return `new Float32Array([${data.join(', ')}])`;
        case 'python':
            return `np.array([${data.join(', ')}], dtype=np.float32)`;
        case 'java':
            return `new float[]{${data.join('f, ')}f}`;
        case 'csharp':
            return `new float[]{${data.join('f, ')}f}`;
        case 'cpp':
            return `{${data.join('f, ')}f}`;
        case 'go':
            return `[]float32{${data.join(', ')}}`;
        case 'rust':
            return `vec![${data.join(', ')}]`;
        case 'swift':
            return `[${data.join(', ')}]`;
        default:
            return lang.array(data.map(String));
    }
}
function generateProjectStructure(gltf, componentName, displayMode = 'original', languageId = 'typescript') {
    const lang = LANGUAGES[languageId];
    const meshes = [];
    const materials = [];
    const geometries = [];
    let totalVertices = 0;
    let totalTriangles = 0;
    gltf.scene.traverse((object)=>{
        if (object.isMesh) {
            const mesh = object;
            const geometry = mesh.geometry;
            totalVertices += geometry.attributes.position.count;
            if (geometry.index) {
                totalTriangles += geometry.index.count / 3;
            } else {
                totalTriangles += geometry.attributes.position.count / 3;
            }
            const meshName = mesh.name || `Mesh_${meshes.length}`;
            const safeMeshName = sanitizeName(meshName);
            const capitalizedMeshName = capitalize(safeMeshName);
            const geometryFile = generateGeometryFile(capitalizedMeshName, geometry, languageId);
            geometries.push({
                name: capitalizedMeshName,
                content: geometryFile,
                originalName: meshName
            });
            const meshComponent = generateMeshComponent(capitalizedMeshName, geometry, displayMode, languageId);
            meshes.push({
                name: capitalizedMeshName,
                content: meshComponent,
                originalName: meshName
            });
            const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
            const materialName = material.name || `Material_${materials.length}`;
            const safeMaterialName = sanitizeName(materialName);
            const capitalizedMaterialName = capitalize(safeMaterialName);
            // Extract geometry attributes
            const hasNormals = !!geometry.attributes.normal;
            const hasUvs = !!geometry.attributes.uv;
            if (!materials.some((m)=>m.name === capitalizedMaterialName)) {
                const materialComponent = generateMaterialComponent(capitalizedMaterialName, material, displayMode, languageId, hasNormals, hasUvs);
                materials.push({
                    name: capitalizedMaterialName,
                    content: materialComponent,
                    originalName: materialName
                });
            }
        }
    });
    const capitalizedComponentName = capitalize(componentName);
    const indexContent = generateIndexComponent(capitalizedComponentName, meshes, materials, displayMode, languageId);
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
    const positions = Array.from(geometry.attributes.position.array);
    const normals = geometry.attributes.normal ? Array.from(geometry.attributes.normal.array) : null;
    const uvs = geometry.attributes.uv ? Array.from(geometry.attributes.uv.array) : null;
    const indices = geometry.index ? Array.from(geometry.index.array) : null;
    const isLargeGeometry = positions.length > 100000;
    switch(languageId){
        case 'typescript':
        case 'javascript':
            return `import * as THREE from 'three';

// ${meshName} geometry definition
export const ${meshName}Geometry = (() => {
  const geometry = new THREE.BufferGeometry();
  
  ${isLargeGeometry ? `// Large geometry - using chunked approach
  const createGeometryChunk = (data: number[], itemSize: number) => {
    const chunkSize = 50000;
    const chunks: Float32Array[] = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      chunks.push(new Float32Array(chunk));
    }
    return chunks;
  };
  
  const positionChunks = createGeometryChunk(${JSON.stringify(positions)}, 3);
  const positions = new Float32Array(positionChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  ${normals ? `const normalChunks = createGeometryChunk(${JSON.stringify(normals)}, 3);
  const normals = new Float32Array(normalChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ''}
  
  ${uvs ? `const uvChunks = createGeometryChunk(${JSON.stringify(uvs)}, 2);
  const uvs = new Float32Array(uvChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ''}
  
  ${indices ? `const indexChunks = createGeometryChunk(${JSON.stringify(indices)}, 1);
  const indices = new Uint16Array(indexChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ''}` : `// Position data
  const positions = ${formatArrayData(positions, languageId)};
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  ${normals ? `// Normal data
  const normals = ${formatArrayData(normals, languageId)};
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ''}
  
  ${uvs ? `// UV data
  const uvs = ${formatArrayData(uvs, languageId)};
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
from typing import Optional

class ${meshName}Geometry:
    """${meshName} geometry definition for ModernGL"""
    
    def __init__(self):
        # Position data
        self.positions = ${formatArrayData(positions, languageId)}
        ${normals ? `# Normal data
        self.normals = ${formatArrayData(normals, languageId)}` : 'self.normals = None'}
        ${uvs ? `# UV data
        self.uvs = ${formatArrayData(uvs, languageId)}` : 'self.uvs = None'}
        ${indices ? `# Index data
        self.indices = np.array([${indices.join(', ')}], dtype=np.uint32)` : 'self.indices = None'}
    
    def create_vao(self, ctx: moderngl.Context, program: moderngl.Program) -> moderngl.VertexArray:
        """Create vertex array object for rendering"""
        vbo_positions = ctx.buffer(self.positions.tobytes())
        
        vao_content = [(vbo_positions, '3f', 'in_position')]
        
        ${normals ? `if self.normals is not None:
            vbo_normals = ctx.buffer(self.normals.tobytes())
            vao_content.append((vbo_normals, '3f', 'in_normal'))` : ''}
        
        ${uvs ? `if self.uvs is not None:
            vbo_uvs = ctx.buffer(self.uvs.tobytes())
            vao_content.append((vbo_uvs, '2f', 'in_uv'))` : ''}
        
        ${indices ? `if self.indices is not None:
            ibo = ctx.buffer(self.indices.tobytes())
            return ctx.vertex_array(program, vao_content, index_buffer=ibo)
        else:
            return ctx.vertex_array(program, vao_content)` : 'return ctx.vertex_array(program, vao_content)'}
`;
        case 'java':
            return `import java.nio.FloatBuffer;
import java.nio.IntBuffer;
import org.lwjgl.BufferUtils;
import static org.lwjgl.opengl.GL30.*;

/**
 * ${meshName} geometry definition for LWJGL OpenGL
 */
public class ${meshName}Geometry {
    private int vao;
    private int vbo;
    ${indices ? 'private int ebo;' : ''}
    private int vertexCount;
    
    public ${meshName}Geometry() {
        setupBuffers();
    }
    
    private void setupBuffers() {
        // Position data
        float[] positions = ${formatArrayData(positions, languageId)};
        ${normals ? `float[] normals = ${formatArrayData(normals || [], languageId)};` : ''}
        ${uvs ? `float[] uvs = ${formatArrayData(uvs || [], languageId)};` : ''}
        ${indices ? `int[] indices = {${indices.join(', ')}};` : ''}
        
        vao = glGenVertexArrays();
        vbo = glGenBuffers();
        ${indices ? 'ebo = glGenBuffers();' : ''}
        
        glBindVertexArray(vao);
        
        // Position buffer
        glBindBuffer(GL_ARRAY_BUFFER, vbo);
        FloatBuffer positionBuffer = BufferUtils.createFloatBuffer(positions.length);
        positionBuffer.put(positions).flip();
        glBufferData(GL_ARRAY_BUFFER, positionBuffer, GL_STATIC_DRAW);
        glVertexAttribPointer(0, 3, GL_FLOAT, false, 3 * Float.BYTES, 0);
        glEnableVertexAttribArray(0);
        
        ${normals ? `// Normal buffer
        FloatBuffer normalBuffer = BufferUtils.createFloatBuffer(normals.length);
        normalBuffer.put(normals).flip();
        glBufferData(GL_ARRAY_BUFFER, normalBuffer, GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * Float.BYTES, 0);
        glEnableVertexAttribArray(1);` : ''}
        
        ${uvs ? `// UV buffer
        FloatBuffer uvBuffer = BufferUtils.createFloatBuffer(uvs.length);
        uvBuffer.put(uvs).flip();
        glBufferData(GL_ARRAY_BUFFER, uvBuffer, GL_STATIC_DRAW);
        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * Float.BYTES, 0);
        glEnableVertexAttribArray(2);` : ''}
        
        ${indices ? `// Element buffer
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
        IntBuffer indexBuffer = BufferUtils.createIntBuffer(indices.length);
        indexBuffer.put(indices).flip();
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indexBuffer, GL_STATIC_DRAW);
        vertexCount = indices.length;` : `vertexCount = positions.length / 3;`}
        
        glBindVertexArray(0);
    }
    
    public void render() {
        glBindVertexArray(vao);
        ${indices ? 'glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0);' : 'glDrawArrays(GL_TRIANGLES, 0, vertexCount);'}
        glBindVertexArray(0);
    }
    
    public void cleanup() {
        glDeleteVertexArrays(vao);
        glDeleteBuffers(vbo);
        ${indices ? 'glDeleteBuffers(ebo);' : ''}
    }
}
`;
        case 'csharp':
            return `using System;
using OpenTK.Graphics.OpenGL4;
using OpenTK.Mathematics;

/// <summary>
/// ${meshName} geometry definition for OpenTK
/// </summary>
public class ${meshName}Geometry : IDisposable
{
    private int _vao;
    private int _vbo;
    ${indices ? 'private int _ebo;' : ''}
    private int _vertexCount;
    
    public ${meshName}Geometry()
    {
        SetupBuffers();
    }
    
    private void SetupBuffers()
    {
        // Position data
        float[] positions = ${formatArrayData(positions, languageId)};
        ${normals ? `float[] normals = ${formatArrayData(normals || [], languageId)};` : ''}
        ${uvs ? `float[] uvs = ${formatArrayData(uvs || [], languageId)};` : ''}
        ${indices ? `uint[] indices = {${indices.join(', ')}};` : ''}
        
        _vao = GL.GenVertexArray();
        _vbo = GL.GenBuffer();
        ${indices ? '_ebo = GL.GenBuffer();' : ''}
        
        GL.BindVertexArray(_vao);
        
        // Position buffer
        GL.BindBuffer(BufferTarget.ArrayBuffer, _vbo);
        GL.BufferData(BufferTarget.ArrayBuffer, positions.Length * sizeof(float), positions, BufferUsageHint.StaticDraw);
        GL.VertexAttribPointer(0, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);
        GL.EnableVertexAttribArray(0);
        
        ${normals ? `// Normal buffer
        GL.BufferData(BufferTarget.ArrayBuffer, normals.Length * sizeof(float), normals, BufferUsageHint.StaticDraw);
        GL.VertexAttribPointer(1, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);
        GL.EnableVertexAttribArray(1);` : ''}
        
        ${uvs ? `// UV buffer
        GL.BufferData(BufferTarget.ArrayBuffer, uvs.Length * sizeof(float), uvs, BufferUsageHint.StaticDraw);
        GL.VertexAttribPointer(2, 2, VertexAttribPointerType.Float, false, 2 * sizeof(float), 0);
        GL.EnableVertexAttribArray(2);` : ''}
        
        ${indices ? `// Element buffer
        GL.BindBuffer(BufferTarget.ElementArrayBuffer, _ebo);
        GL.BufferData(BufferTarget.ElementArrayBuffer, indices.Length * sizeof(uint), indices, BufferUsageHint.StaticDraw);
        _vertexCount = indices.Length;` : `_vertexCount = positions.Length / 3;`}
        
        GL.BindVertexArray(0);
    }
    
    public void Render()
    {
        GL.BindVertexArray(_vao);
        ${indices ? 'GL.DrawElements(PrimitiveType.Triangles, _vertexCount, DrawElementsType.UnsignedInt, 0);' : 'GL.DrawArrays(PrimitiveType.Triangles, 0, _vertexCount);'}
        GL.BindVertexArray(0);
    }
    
    public void Dispose()
    {
        GL.DeleteVertexArray(_vao);
        GL.DeleteBuffer(_vbo);
        ${indices ? 'GL.DeleteBuffer(_ebo);' : ''}
    }
}
`;
        case 'cpp':
            return `#pragma once
#include <vector>
#include <GL/glew.h>
#include <glm/glm.hpp>

/**
 * ${meshName} geometry definition for OpenGL with GLM
 */
class ${meshName}Geometry {
private:
    GLuint VAO, VBO${indices ? ', EBO' : ''};
    ${indices ? 'int indexCount;' : 'int vertexCount;'}
    
public:
    ${meshName}Geometry() {
        setupBuffers();
    }
    
    ~${meshName}Geometry() {
        cleanup();
    }
    
private:
    void setupBuffers() {
        // Position data
        std::vector<float> positions = ${formatArrayData(positions, languageId)};
        ${normals ? `std::vector<float> normals = ${formatArrayData(normals || [], languageId)};` : ''}
        ${uvs ? `std::vector<float> uvs = ${formatArrayData(uvs || [], languageId)};` : ''}
        ${indices ? `std::vector<unsigned int> indices = {${indices.join(', ')}};` : ''}
        
        glGenVertexArrays(1, &VAO);
        glGenBuffers(1, &VBO);
        ${indices ? 'glGenBuffers(1, &EBO);' : ''}
        
        glBindVertexArray(VAO);
        
        // Position buffer
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, positions.size() * sizeof(float), positions.data(), GL_STATIC_DRAW);
        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(0);
        
        ${normals ? `// Normal buffer
        glBufferData(GL_ARRAY_BUFFER, normals.size() * sizeof(float), normals.data(), GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(1);` : ''}
        
        ${uvs ? `// UV buffer
        glBufferData(GL_ARRAY_BUFFER, uvs.size() * sizeof(float), uvs.data(), GL_STATIC_DRAW);
        glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(2);` : ''}
        
        ${indices ? `// Element buffer
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), indices.data(), GL_STATIC_DRAW);
        indexCount = indices.size();` : `vertexCount = positions.size() / 3;`}
        
        glBindVertexArray(0);
    }
    
public:
    void render() {
        glBindVertexArray(VAO);
        ${indices ? 'glDrawElements(GL_TRIANGLES, indexCount, GL_UNSIGNED_INT, 0);' : 'glDrawArrays(GL_TRIANGLES, 0, vertexCount);'}
        glBindVertexArray(0);
    }
    
    void cleanup() {
        glDeleteVertexArrays(1, &VAO);
        glDeleteBuffers(1, &VBO);
        ${indices ? 'glDeleteBuffers(1, &EBO);' : ''}
    }
};
`;
        case 'go':
            return `package geometry

import (
    "github.com/go-gl/gl/v4.1-core/gl"
    "github.com/go-gl/mathgl/mgl32"
)

// ${meshName}Geometry represents the geometry data for ${meshName}
type ${meshName}Geometry struct {
    vao uint32
    vbo uint32
    ${indices ? 'ebo uint32' : ''}
    ${indices ? 'indexCount int32' : 'vertexCount int32'}
}

// New${meshName}Geometry creates a new ${meshName} geometry
func New${meshName}Geometry() *${meshName}Geometry {
    geom := &${meshName}Geometry{}
    geom.setupBuffers()
    return geom
}

func (g *${meshName}Geometry) setupBuffers() {
    // Position data
    positions := ${formatArrayData(positions, languageId)}
    ${normals ? `normals := ${formatArrayData(normals || [], languageId)}` : ''}
    ${uvs ? `uvs := ${formatArrayData(uvs || [], languageId)}` : ''}
    ${indices ? `indices := []uint32{${indices.join(', ')}}` : ''}
    
    gl.GenVertexArrays(1, &g.vao)
    gl.GenBuffers(1, &g.vbo)
    ${indices ? 'gl.GenBuffers(1, &g.ebo)' : ''}
    
    gl.BindVertexArray(g.vao)
    
    // Position buffer
    gl.BindBuffer(gl.ARRAY_BUFFER, g.vbo)
    gl.BufferData(gl.ARRAY_BUFFER, len(positions)*4, gl.Ptr(positions), gl.STATIC_DRAW)
    gl.VertexAttribPointer(0, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(0)
    
    ${normals ? `// Normal buffer
    gl.BufferData(gl.ARRAY_BUFFER, len(normals)*4, gl.Ptr(normals), gl.STATIC_DRAW)
    gl.VertexAttribPointer(1, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(1)` : ''}
    
    ${uvs ? `// UV buffer
    gl.BufferData(gl.ARRAY_BUFFER, len(uvs)*4, gl.Ptr(uvs), gl.STATIC_DRAW)
    gl.VertexAttribPointer(2, 2, gl.FLOAT, false, 2*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(2)` : ''}
    
    ${indices ? `// Element buffer
    gl.BindBuffer(gl.ELEMENT_ARRAY_BUFFER, g.ebo)
    gl.BufferData(gl.ELEMENT_ARRAY_BUFFER, len(indices)*4, gl.Ptr(indices), gl.STATIC_DRAW)
    g.indexCount = int32(len(indices))` : `g.vertexCount = int32(len(positions) / 3)`}
    
    gl.BindVertexArray(0)
}

// Render renders the geometry
func (g *${meshName}Geometry) Render() {
    gl.BindVertexArray(g.vao)
    ${indices ? 'gl.DrawElements(gl.TRIANGLES, g.indexCount, gl.UNSIGNED_INT, gl.PtrOffset(0))' : 'gl.DrawArrays(gl.TRIANGLES, 0, g.vertexCount)'}
    gl.BindVertexArray(0)
}

// Cleanup cleans up OpenGL resources
func (g *${meshName}Geometry) Cleanup() {
    gl.DeleteVertexArrays(1, &g.vao)
    gl.DeleteBuffers(1, &g.vbo)
    ${indices ? 'gl.DeleteBuffers(1, &g.ebo)' : ''}
}
`;
        case 'rust':
            return `use wgpu::util::DeviceExt;

/// ${meshName} geometry definition for wgpu
pub struct ${meshName}Geometry {
    vertex_buffer: wgpu::Buffer,
    ${indices ? 'index_buffer: wgpu::Buffer,' : ''}
    ${indices ? 'num_indices: u32,' : 'num_vertices: u32,'}
}

impl ${meshName}Geometry {
    pub fn new(device: &wgpu::Device) -> Self {
        // Position data
        let positions: Vec<f32> = vec![${positions.join(', ')}];
        ${normals ? `let normals: Vec<f32> = vec![${(normals || []).join(', ')}];` : ''}
        ${uvs ? `let uvs: Vec<f32> = vec![${(uvs || []).join(', ')}];` : ''}
        ${indices ? `let indices: Vec<u16> = vec![${indices.join(', ')}];` : ''}
        
        // Create vertex data
        let mut vertex_data = Vec::new();
        for i in (0..positions.len()).step_by(3) {
            vertex_data.extend_from_slice(&positions[i..i+3]);
            ${normals ? `if i < normals.len() - 2 {
                vertex_data.extend_from_slice(&normals[i..i+3]);
            }` : ''}
            ${uvs ? `let uv_index = (i / 3) * 2;
            if uv_index < uvs.len() - 1 {
                vertex_data.extend_from_slice(&uvs[uv_index..uv_index+2]);
            }` : ''}
        }
        
        let vertex_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("${meshName} Vertex Buffer"),
            contents: bytemuck::cast_slice(&vertex_data),
            usage: wgpu::BufferUsages::VERTEX,
        });
        
        ${indices ? `let index_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("${meshName} Index Buffer"),
            contents: bytemuck::cast_slice(&indices),
            usage: wgpu::BufferUsages::INDEX,
        });
        
        Self {
            vertex_buffer,
            index_buffer,
            num_indices: indices.len() as u32,
        }` : `Self {
            vertex_buffer,
            num_vertices: (positions.len() / 3) as u32,
        }`}
    }
    
    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
        render_pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));
        ${indices ? `render_pass.set_index_buffer(self.index_buffer.slice(..), wgpu::IndexFormat::Uint16);
        render_pass.draw_indexed(0..self.num_indices, 0, 0..1);` : 'render_pass.draw(0..self.num_vertices, 0..1);'}
    }
}
`;
        case 'swift':
            return `import Metal
import simd

/// ${meshName} geometry definition for Metal
class ${meshName}Geometry {
    private var vertexBuffer: MTLBuffer?
    ${indices ? 'private var indexBuffer: MTLBuffer?' : ''}
    ${indices ? 'private var indexCount: Int' : 'private var vertexCount: Int'}
    
    init(device: MTLDevice) {
        // Position data
        let positions: [Float] = [${positions.join(', ')}]
        ${normals ? `let normals: [Float] = [${(normals || []).join(', ')}]` : ''}
        ${uvs ? `let uvs: [Float] = [${(uvs || []).join(', ')}]` : ''}
        ${indices ? `let indices: [UInt16] = [${indices.join(', ')}]` : ''}
        
        // Create vertex data
        var vertexData: [Float] = []
        for i in stride(from: 0, to: positions.count, by: 3) {
            vertexData.append(contentsOf: [positions[i], positions[i+1], positions[i+2]])
            ${normals ? `if i < normals.count - 2 {
                vertexData.append(contentsOf: [normals[i], normals[i+1], normals[i+2]])
            }` : ''}
            ${uvs ? `let uvIndex = (i / 3) * 2
            if uvIndex < uvs.count - 1 {
                vertexData.append(contentsOf: [uvs[uvIndex], uvs[uvIndex+1]])
            }` : ''}
        }
        
        vertexBuffer = device.makeBuffer(
            bytes: vertexData,
            length: vertexData.count * MemoryLayout<Float>.size,
            options: []
        )
        
        ${indices ? `indexBuffer = device.makeBuffer(
            bytes: indices,
            length: indices.count * MemoryLayout<UInt16>.size,
            options: []
        )
        indexCount = indices.count` : `vertexCount = positions.count / 3`}
    }
    
    func render(renderEncoder: MTLRenderCommandEncoder) {
        guard let vertexBuffer = vertexBuffer else { return }
        
        renderEncoder.setVertexBuffer(vertexBuffer, offset: 0, index: 0)
        
        ${indices ? `guard let indexBuffer = indexBuffer else { return }
        renderEncoder.drawIndexedPrimitives(
            type: .triangle,
            indexCount: indexCount,
            indexType: .uint16,
            indexBuffer: indexBuffer,
            indexBufferOffset: 0
        )` : `renderEncoder.drawPrimitives(
            type: .triangle,
            vertexStart: 0,
            vertexCount: vertexCount
        )`}
    }
}
`;
        default:
            // Fallback to TypeScript for unsupported languages
            return generateGeometryFile(meshName, geometry, 'typescript');
    }
}
/**
 * Generates a mesh component that imports geometry from a separate file
 * Component name starts with capital letter as required by React
 */ function generateMeshComponent(meshName, _geometry, displayMode, languageId) {
    switch(languageId){
        case 'typescript':
        case 'javascript':
            return `import React from 'react';
import { ${meshName}Geometry } from '../geometries/${meshName}Geometry';

interface ${meshName}Props {
  [key: string]: any;
}

/**
 * ${meshName} component
 * Simple wrapper that uses pre-defined geometry
 * Easy to modify without touching geometry data
 */
export default function ${meshName}(props: ${meshName}Props) {
  return <mesh geometry={${meshName}Geometry} {...props} />;
}
`;
        case 'python':
            return `"""${meshName} mesh component for ModernGL"""
import moderngl
from .${meshName}Geometry import ${meshName}Geometry

class ${meshName}:
    """${meshName} mesh for ModernGL rendering"""
    
    def __init__(self, ctx: moderngl.Context, material=None):
        self.ctx = ctx
        self.material = material
        self.geometry = ${meshName}Geometry()
        self.vao = None
        
    def setup_vao(self, program: moderngl.Program):
        """Setup vertex array object with the given shader program"""
        self.vao = self.geometry.create_vao(self.ctx, program)
    
    def render(self, projection_matrix, view_matrix):
        """Render the mesh"""
        if self.vao and self.material:
            self.material.use()
            # Set matrices if available
            if hasattr(self.material, 'set_matrix'):
                self.material.set_matrix('projection', projection_matrix)
                self.material.set_matrix('view', view_matrix)
            self.vao.render(moderngl.TRIANGLES)
`;
        case 'java':
            return `/**
 * ${meshName} mesh component for LWJGL OpenGL
 */
public class ${meshName} {
    private ${meshName}Geometry geometry;
    private Material material;
    
    public ${meshName}(Material material) {
        this.geometry = new ${meshName}Geometry();
        this.material = material;
    }
    
    public void render() {
        if (material != null) {
            material.use();
        }
        geometry.render();
    }
    
    public void cleanup() {
        geometry.cleanup();
    }
    
    public ${meshName}Geometry getGeometry() {
        return geometry;
    }
    
    public void setMaterial(Material material) {
        this.material = material;
    }
}
`;
        case 'csharp':
            return `using OpenTK.Graphics.OpenGL4;

/// <summary>
/// ${meshName} mesh component for OpenTK
/// </summary>
public class ${meshName} : System.IDisposable
{
    private ${meshName}Geometry _geometry;
    private Material _material;
    
    public ${meshName}(Material material = null)
    {
        _geometry = new ${meshName}Geometry();
        _material = material;
    }
    
    public void Render()
    {
        _material?.Use();
        _geometry.Render();
    }
    
    public void Dispose()
    {
        _geometry?.Dispose();
    }
    
    public ${meshName}Geometry Geometry => _geometry;
    
    public Material Material
    {
        get => _material;
        set => _material = value;
    }
}
`;
        default:
            // Fallback to TypeScript for unsupported languages
            return generateMeshComponent(meshName, _geometry, displayMode, 'typescript');
    }
}
/**
 * Generates a material component based on display mode
 * Component name starts with capital letter as required by React
 */ function generateMaterialComponent(materialName, material, displayMode, languageId, hasNormals = false, hasUvs = false) {
    let materialType = 'MeshStandardMaterial';
    const properties = [];
    // Determine material type
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) materialType = 'MeshBasicMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]) materialType = 'MeshPhongMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshLambertMaterial"]) materialType = 'MeshLambertMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]) materialType = 'MeshNormalMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]) materialType = 'MeshDepthMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshMatcapMaterial"]) materialType = 'MeshMatcapMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshToonMaterial"]) materialType = 'MeshToonMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]) materialType = 'MeshPhysicalMaterial';
    // Configure properties based on display mode
    switch(displayMode){
        case 'wireframe':
            properties.push('wireframe: true', 'transparent: true', 'opacity: 0.8');
            break;
        case 'solid':
            properties.push('color: 0x888888', 'metalness: 0.1', 'roughness: 0.8');
            break;
        case 'normals':
            materialType = 'MeshNormalMaterial';
            break;
        case 'depth':
            materialType = 'MeshDepthMaterial';
            break;
        case 'points':
            materialType = 'PointsMaterial';
            properties.push('color: 0x00ff00', 'size: 0.01', 'sizeAttenuation: true');
            break;
        default:
            properties.push(`color: new THREE.Color(${material.color.r}, ${material.color.g}, ${material.color.b})`);
            if ('roughness' in material) properties.push(`roughness: ${material.roughness}`);
            if ('metalness' in material) properties.push(`metalness: ${material.metalness}`);
            if ('opacity' in material) properties.push(`opacity: ${material.opacity}`);
            if ('transparent' in material) properties.push(`transparent: ${material.transparent}`);
            break;
    }
    switch(languageId){
        case 'typescript':
        case 'javascript':
            return `import * as THREE from 'three';

/**
 * ${materialName} material component
 */
export default function ${materialName}(): THREE.Material {
  return new THREE.${materialType}({
    ${properties.join(',\n    ')}
  });
}
`;
        case 'python':
            return `"""${materialName} material for ModernGL"""
import moderngl
import numpy as np

class ${materialName}:
    """${materialName} material for ModernGL"""
    
    def __init__(self, ctx: moderngl.Context):
        self.ctx = ctx
        self.program = self._create_shader_program()
        
    def _create_shader_program(self) -> moderngl.Program:
        vertex_shader = '''
        #version 330 core
        in vec3 in_position;
        ${hasNormals ? 'in vec3 in_normal;' : ''}
        ${hasUvs ? 'in vec2 in_uv;' : ''}
        
        uniform mat4 projection;
        uniform mat4 view;
        uniform mat4 model;
        
        out vec3 v_position;
        ${hasNormals ? 'out vec3 v_normal;' : ''}
        ${hasUvs ? 'out vec2 v_uv;' : ''}
        
        void main() {
            v_position = in_position;
            ${hasNormals ? 'v_normal = in_normal;' : ''}
            ${hasUvs ? 'v_uv = in_uv;' : ''}
            gl_Position = projection * view * model * vec4(in_position, 1.0);
        }
        '''
        
        fragment_shader = '''
        #version 330 core
        in vec3 v_position;
        ${hasNormals ? 'in vec3 v_normal;' : ''}
        ${hasUvs ? 'in vec2 v_uv;' : ''}
        
        out vec4 fragColor;
        
        void main() {
            ${displayMode === 'wireframe' ? 'fragColor = vec4(0.0, 0.0, 0.0, 0.8);' : displayMode === 'normals' ? 'fragColor = vec4(normalize(v_normal) * 0.5 + 0.5, 1.0);' : displayMode === 'points' ? 'fragColor = vec4(0.0, 1.0, 0.0, 1.0);' : 'fragColor = vec4(0.5, 0.5, 0.5, 1.0);'}
        }
        '''
        
        return self.ctx.program(vertex_shader=vertex_shader, fragment_shader=fragment_shader)
    
    def use(self):
        """Activate this material for rendering"""
        self.program.use()
        
    def set_matrix(self, name: str, matrix: np.ndarray):
        """Set a matrix uniform"""
        if name in self.program:
            self.program[name].write(matrix.astype(np.float32).tobytes())
`;
        default:
            // Fallback to TypeScript for unsupported languages
            return generateMaterialComponent(materialName, material, displayMode, 'typescript', hasNormals, hasUvs);
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

interface ${componentName}Props extends GroupProps {
  [key: string]: any;
}

/**
 * ${componentName} component
 * Main component that assembles all mesh and material parts
 */
export default function ${componentName}(props: ${componentName}Props) {
  const ref = useRef<THREE.Group>(null);
  
  return (
    <group ref={ref} {...props}>
${meshElements}
    </group>
  );
}
`;
        case 'python':
            return `"""${componentName} main component for ModernGL"""
import moderngl
import numpy as np
from typing import List, Optional
${meshes.map((mesh)=>`from .meshes.${mesh.name} import ${mesh.name}`).join('\n')}
${materials.map((material)=>`from .materials.${material.name} import ${material.name}`).join('\n')}

class ${componentName}:
    """${componentName} component for ModernGL"""
    
    def __init__(self, ctx: moderngl.Context):
        self.ctx = ctx
        self.meshes: List = []
        self._setup_meshes()
        
    def _setup_meshes(self):
        """Initialize all meshes with their materials"""
        ${meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return `# Create ${mesh.name}
        ${mesh.name.toLowerCase()}_material = ${material.name}(self.ctx)
        ${mesh.name.toLowerCase()}_mesh = ${mesh.name}(self.ctx, ${mesh.name.toLowerCase()}_material)
        self.meshes.append(${mesh.name.toLowerCase()}_mesh)`;
            }).join('\n        ')}
    
    def render(self, projection_matrix: np.ndarray, view_matrix: np.ndarray, model_matrix: Optional[np.ndarray] = None):
        """Render all meshes"""
        if model_matrix is None:
            model_matrix = np.eye(4, dtype=np.float32)
            
        for mesh in self.meshes:
            mesh.render(projection_matrix, view_matrix)
`;
        case 'java':
            return `/**
 * ${componentName} main component for LWJGL OpenGL
 */
${meshes.map((mesh)=>`import meshes.${mesh.name};`).join('\n')}
${materials.map((material)=>`import materials.${material.name};`).join('\n')}

public class ${componentName} {
    ${meshes.map((mesh, i)=>`private ${mesh.name} ${mesh.name.toLowerCase()};`).join('\n    ')}
    
    public ${componentName}() {
        setupMeshes();
    }
    
    private void setupMeshes() {
        ${meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return `${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name}());`;
            }).join('\n        ')}
    }
    
    public void render() {
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()}.render();`).join('\n        ')}
    }
    
    public void cleanup() {
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()}.cleanup();`).join('\n        ')}
    }
}
`;
        case 'csharp':
            return `using System;
using System.Collections.Generic;
${meshes.map((mesh)=>`using Meshes;`).join('\n')}
${materials.map((material)=>`using Materials;`).join('\n')}

/// <summary>
/// ${componentName} main component for OpenTK
/// </summary>
public class ${componentName} : IDisposable
{
    ${meshes.map((mesh, i)=>`private ${mesh.name} _${mesh.name.toLowerCase()};`).join('\n    ')}
    
    public ${componentName}()
    {
        SetupMeshes();
    }
    
    private void SetupMeshes()
    {
        ${meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return `_${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name}());`;
            }).join('\n        ')}
    }
    
    public void Render()
    {
        ${meshes.map((mesh)=>`_${mesh.name.toLowerCase()}.Render();`).join('\n        ')}
    }
    
    public void Dispose()
    {
        ${meshes.map((mesh)=>`_${mesh.name.toLowerCase()}?.Dispose();`).join('\n        ')}
    }
}
`;
        case 'cpp':
            return `#pragma once
#include <vector>
#include <memory>
${meshes.map((mesh)=>`#include "meshes/${mesh.name}.h"`).join('\n')}
${materials.map((material)=>`#include "materials/${material.name}.h"`).join('\n')}

/**
 * ${componentName} main component for OpenGL
 */
class ${componentName} {
private:
    ${meshes.map((mesh, i)=>`std::unique_ptr<${mesh.name}> ${mesh.name.toLowerCase()};`).join('\n    ')}
    
public:
    ${componentName}() {
        setupMeshes();
    }
    
    ~${componentName}() {
        cleanup();
    }
    
private:
    void setupMeshes() {
        ${meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return `${mesh.name.toLowerCase()} = std::make_unique<${mesh.name}>(std::make_unique<${material.name}>());`;
            }).join('\n        ')}
    }
    
public:
    void render() {
        ${meshes.map((mesh)=>`if (${mesh.name.toLowerCase()}) ${mesh.name.toLowerCase()}->render();`).join('\n        ')}
    }
    
    void cleanup() {
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()}.reset();`).join('\n        ')}
    }
};
`;
        case 'go':
            return `package main

${meshes.map((mesh)=>`import "./meshes"`).join('\n')}
${materials.map((material)=>`import "./materials"`).join('\n')}

// ${componentName} represents the main 3D component
type ${componentName} struct {
    ${meshes.map((mesh, i)=>`${mesh.name.toLowerCase()} *meshes.${mesh.name}`).join('\n    ')}
}

// New${componentName} creates a new ${componentName} instance
func New${componentName}() *${componentName} {
    component := &${componentName}{}
    component.setupMeshes()
    return component
}

func (c *${componentName}) setupMeshes() {
    ${meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return `c.${mesh.name.toLowerCase()} = meshes.New${mesh.name}(materials.New${material.name}())`;
            }).join('\n    ')}
}

// Render renders all meshes in the component
func (c *${componentName}) Render() {
    ${meshes.map((mesh)=>`if c.${mesh.name.toLowerCase()} != nil {
        c.${mesh.name.toLowerCase()}.Render()
    }`).join('\n    ')}
}

// Cleanup cleans up all resources
func (c *${componentName}) Cleanup() {
    ${meshes.map((mesh)=>`if c.${mesh.name.toLowerCase()} != nil {
        c.${mesh.name.toLowerCase()}.Cleanup()
    }`).join('\n    ')}
}
`;
        case 'rust':
            return `${meshes.map((mesh)=>`use crate::meshes::${mesh.name.toLowerCase()}::${mesh.name};`).join('\n')}
${materials.map((material)=>`use crate::materials::${material.name.toLowerCase()}::${material.name};`).join('\n')}
use wgpu::Device;

/// ${componentName} main component for wgpu
pub struct ${componentName} {
    ${meshes.map((mesh, i)=>`${mesh.name.toLowerCase()}: ${mesh.name},`).join('\n    ')}
}

impl ${componentName} {
    pub fn new(device: &Device) -> Self {
        Self {
            ${meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return `${mesh.name.toLowerCase()}: ${mesh.name}::new(device, ${material.name}::new(device)),`;
            }).join('\n            ')}
        }
    }
    
    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
        ${meshes.map((mesh)=>`self.${mesh.name.toLowerCase()}.render(render_pass);`).join('\n        ')}
    }
}
`;
        case 'swift':
            return `import Metal
${meshes.map((mesh)=>`import Meshes`).join('\n')}
${materials.map((material)=>`import Materials`).join('\n')}

/// ${componentName} main component for Metal
class ${componentName} {
    ${meshes.map((mesh, i)=>`private let ${mesh.name.toLowerCase()}: ${mesh.name}`).join('\n    ')}
    
    init(device: MTLDevice) {
        ${meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return `${mesh.name.toLowerCase()} = ${mesh.name}(device: device, material: ${material.name}(device: device))`;
            }).join('\n        ')}
    }
    
    func render(renderEncoder: MTLRenderCommandEncoder) {
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()}.render(renderEncoder: renderEncoder)`).join('\n        ')}
    }
}
`;
        default:
            // Fallback to TypeScript for unsupported languages
            return generateIndexComponent(componentName, meshes, materials, displayMode, 'typescript');
    }
}
// Fix the generateExamplePage function around line 900 to ensure proper file extensions
function generateExamplePage(componentName, languageId) {
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
}
`;
        case 'python':
            return `"""Example application for ${componentName}"""
import pyglet
import moderngl
import numpy as np
from pyglet.window import key
from pyrr import Matrix44
from .${componentName} import ${componentName}

class ${componentName}App:
    """Example application for ModernGL implementation"""
    
    def __init__(self, width: int = 800, height: int = 600):
        self.window = pyglet.window.Window(width, height, caption='${componentName} Viewer')
        self.ctx = moderngl.create_context()
        
        # Create matrices
        self.projection = Matrix44.perspective_projection(50, width/height, 0.1, 1000)
        self.view = Matrix44.look_at([0, 0, 5], [0, 0, 0], [0, 1, 0])
        
        # Create the 3D component
        self.scene = ${componentName}(self.ctx)
        
        # Animation state
        self.rotation = 0
        
        # Set up event handlers
        self.window.event(self.on_draw)
        self.window.event(self.on_resize)
        self.window.event(self.on_key_press)
        
    def on_draw(self):
        """Handle window draw event"""
        self.window.clear()
        self.ctx.enable(moderngl.DEPTH_TEST)
        
        # Update rotation
        self.rotation += 0.5
        model = Matrix44.from_y_rotation(np.radians(self.rotation))
        
        # Render the scene
        self.scene.render(self.projection, self.view, model)
        
    def on_resize(self, width: int, height: int):
        """Handle window resize event"""
        self.projection = Matrix44.perspective_projection(50, width/height, 0.1, 1000)
        
    def on_key_press(self, symbol: int, modifiers: int):
        """Handle key press events"""
        if symbol == key.ESCAPE:
            pyglet.app.exit()
            
    def run(self):
        """Start the application"""
        pyglet.app.run()

if __name__ == '__main__':
    app = ${componentName}App()
    app.run()
`;
        case 'java':
            return `/**
 * Example application for ${componentName} using LWJGL
 */
import ${componentName};
import org.lwjgl.glfw.GLFW;
import org.lwjgl.opengl.GL;
import static org.lwjgl.opengl.GL11.*;

public class ${componentName}App {
    private long window;
    private ${componentName} model;
    
    public void run() {
        init();
        loop();
        cleanup();
    }
    
    private void init() {
        // Initialize GLFW
        if (!GLFW.glfwInit()) {
            throw new IllegalStateException("Unable to initialize GLFW");
        }
        
        // Create window
        window = GLFW.glfwCreateWindow(800, 600, "${componentName} Viewer", 0, 0);
        if (window == 0) {
            throw new RuntimeException("Failed to create the GLFW window");
        }
        
        GLFW.glfwMakeContextCurrent(window);
        GL.createCapabilities();
        
        // Initialize model
        model = new ${componentName}();
        
        // Enable depth testing
        glEnable(GL_DEPTH_TEST);
    }
    
    private void loop() {
        while (!GLFW.glfwWindowShouldClose(window)) {
            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
            
            // Render model
            model.render();
            
            GLFW.glfwSwapBuffers(window);
            GLFW.glfwPollEvents();
        }
    }
    
    private void cleanup() {
        model.cleanup();
        GLFW.glfwTerminate();
    }
    
    public static void main(String[] args) {
        new ${componentName}App().run();
    }
}
`;
        case 'csharp':
            return `using System;
using OpenTK.Graphics.OpenGL4;
using OpenTK.Windowing.Common;
using OpenTK.Windowing.Desktop;

/// <summary>
/// Example application for ${componentName} using OpenTK
/// </summary>
public class ${componentName}App : GameWindow
{
    private ${componentName} _model;
    
    public ${componentName}App() : base(GameWindowSettings.Default, 
        new NativeWindowSettings()
        {
            Size = new OpenTK.Mathematics.Vector2i(800, 600),
            Title = "${componentName} Viewer"
        })
    {
    }
    
    protected override void OnLoad()
    {
        base.OnLoad();
        
        GL.ClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        GL.Enable(EnableCap.DepthTest);
        
        _model = new ${componentName}();
    }
    
    protected override void OnRenderFrame(FrameEventArgs e)
    {
        base.OnRenderFrame(e);
        
        GL.Clear(ClearBufferMask.ColorBufferBit | ClearBufferMask.DepthBufferBit);
        
        _model.Render();
        
        SwapBuffers();
    }
    
    protected override void OnUnload()
    {
        _model?.Dispose();
        base.OnUnload();
    }
    
    public static void Main()
    {
        using var app = new ${componentName}App();
        app.Run();
    }
}
`;
        default:
            // Fallback to TypeScript for unsupported languages
            return generateExamplePage(componentName, 'typescript');
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
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
// Language-specific setup instructions and dependencies
const LANGUAGE_SETUP = {
    typescript: {
        packageManager: 'npm',
        dependencies: [
            'three',
            '@react-three/fiber',
            '@react-three/drei',
            'react',
            'react-dom',
            '@types/three'
        ],
        devDependencies: [
            'typescript',
            '@types/react',
            '@types/react-dom'
        ],
        installCommand: 'npm install three @react-three/fiber @react-three/drei react react-dom @types/three',
        devInstallCommand: 'npm install -D typescript @types/react @types/react-dom',
        setupSteps: [
            'Create a new Next.js project with TypeScript',
            'Install the required dependencies',
            'Extract the downloaded component files to your project',
            'Import and use the component in your pages'
        ],
        importExample: `import ${'{componentName}'} from '@/components/${'{componentName}'}';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

export default function ModelPage() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ '{' } position: [0, 0, 5], fov: 50 {'}'} >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <${'{componentName}'} />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}`,
        customizationExample: `// Access individual parts
import { MeshName } from '@/components/${'{componentName}'}/meshes/MeshName';
import { MeshNameGeometry } from '@/components/${'{componentName}'}/geometries/MeshNameGeometry';
import MaterialName from '@/components/${'{componentName}'}/materials/MaterialName';

function CustomModel() {
  return (
    <group>
      <mesh geometry={MeshNameGeometry} material={MaterialName()} />
    </group>
  );
}`
    },
    javascript: {
        packageManager: 'npm',
        dependencies: [
            'three',
            '@react-three/fiber',
            '@react-three/drei',
            'react',
            'react-dom'
        ],
        devDependencies: [],
        installCommand: 'npm install three @react-three/fiber @react-three/drei react react-dom',
        devInstallCommand: '',
        setupSteps: [
            'Create a new React project',
            'Install the required dependencies',
            'Extract the downloaded component files to your project',
            'Import and use the component in your pages'
        ],
        importExample: `import ${'{componentName}'} from './components/${'{componentName}'}';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

export default function ModelPage() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <${'{componentName}'} />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}`,
        customizationExample: `// Access individual parts
import { MeshName } from './components/${'{componentName}'}/meshes/MeshName';
import { MeshNameGeometry } from './components/${'{componentName}'}/geometries/MeshNameGeometry';
import MaterialName from './components/${'{componentName}'}/materials/MaterialName';

function CustomModel() {
  return (
    <group>
      <mesh geometry={MeshNameGeometry} material={MaterialName()} />
    </group>
  );
}`
    },
    python: {
        packageManager: 'pip',
        dependencies: [
            'moderngl',
            'pyglet',
            'numpy',
            'pyrr'
        ],
        devDependencies: [],
        installCommand: 'pip install moderngl pyglet numpy pyrr',
        devInstallCommand: '',
        setupSteps: [
            'Create a new Python project',
            'Install the required dependencies',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: `from ${'{componentName}'} import ${'{componentName}'}
import pyglet
import moderngl
from pyrr import Matrix44

class ModelApp:
    def __init__(self):
        self.window = pyglet.window.Window(800, 600, caption='${'{componentName}'} Viewer')
        self.ctx = moderngl.create_context()
        self.scene = ${'{componentName}'}(self.ctx)
        
    def run(self):
        pyglet.app.run()

if __name__ == '__main__':
    app = ModelApp()
    app.run()`,
        customizationExample: `# Access individual parts
from meshes.MeshName import MeshName
from geometries.MeshNameGeometry import MeshNameGeometry
from materials.MaterialName import MaterialName

class CustomModel:
    def __init__(self, ctx):
        self.geometry = MeshNameGeometry()
        self.material = MaterialName(ctx)
        self.mesh = MeshName(ctx, self.material)`
    },
    java: {
        packageManager: 'maven/gradle',
        dependencies: [
            'org.lwjgl:lwjgl:3.3.3',
            'org.lwjgl:lwjgl-opengl:3.3.3',
            'org.lwjgl:lwjgl-glfw:3.3.3'
        ],
        devDependencies: [],
        installCommand: `// Maven
<dependency>
    <groupId>org.lwjgl</groupId>
    <artifactId>lwjgl</artifactId>
    <version>3.3.3</version>
</dependency>

// Gradle
implementation 'org.lwjgl:lwjgl:3.3.3'
implementation 'org.lwjgl:lwjgl-opengl:3.3.3'`,
        devInstallCommand: '',
        setupSteps: [
            'Create a new Java project with Maven or Gradle',
            'Add LWJGL dependencies to your build file',
            'Extract the downloaded component files to your src folder',
            'Run the example application'
        ],
        importExample: `import ${'{componentName}'};

public class ModelApp {
    public static void main(String[] args) {
        // Initialize LWJGL and OpenGL context
        // Create and render the model
        ${'{componentName}'} model = new ${'{componentName}'}();
        model.render();
    }
}`,
        customizationExample: `// Access individual parts
import meshes.MeshName;
import geometries.MeshNameGeometry;
import materials.MaterialName;

public class CustomModel {
    private MeshNameGeometry geometry;
    private MaterialName material;
    
    public CustomModel() {
        this.geometry = new MeshNameGeometry();
        this.material = new MaterialName();
    }
}`
    },
    csharp: {
        packageManager: 'NuGet',
        dependencies: [
            'OpenTK',
            'OpenTK.Graphics',
            'OpenTK.Mathematics'
        ],
        devDependencies: [],
        installCommand: 'dotnet add package OpenTK --version 4.8.2',
        devInstallCommand: '',
        setupSteps: [
            'Create a new .NET project',
            'Install OpenTK via NuGet',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: `using ${'{componentName}'};
using OpenTK.Graphics.OpenGL4;
using OpenTK.Windowing.Desktop;

class Program
{
    static void Main()
    {
        var model = new ${'{componentName}'}();
        model.Render();
    }
}`,
        customizationExample: `// Access individual parts
using Meshes;
using Geometries;
using Materials;

public class CustomModel
{
    private MeshNameGeometry geometry;
    private MaterialName material;
    
    public CustomModel()
    {
        geometry = new MeshNameGeometry();
        material = new MaterialName();
    }
}`
    },
    cpp: {
        packageManager: 'vcpkg/conan',
        dependencies: [
            'glew',
            'glfw3',
            'glm'
        ],
        devDependencies: [],
        installCommand: `// vcpkg
vcpkg install glew glfw3 glm

// Or with CMake
find_package(glfw3 REQUIRED)
find_package(GLEW REQUIRED)
find_package(glm REQUIRED)`,
        devInstallCommand: '',
        setupSteps: [
            'Create a new C++ project with CMake',
            'Install OpenGL dependencies (GLEW, GLFW, GLM)',
            'Extract the downloaded component files to your project',
            'Compile and run the example application'
        ],
        importExample: `#include "${'{componentName}'}.h"
#include <GL/glew.h>
#include <GLFW/glfw3.h>

int main() {
    // Initialize GLFW and OpenGL
    glfwInit();
    GLFWwindow* window = glfwCreateWindow(800, 600, "${'{componentName}'} Viewer", NULL, NULL);
    glfwMakeContextCurrent(window);
    glewInit();
    
    ${'{componentName}'} model;
    
    while (!glfwWindowShouldClose(window)) {
        model.render();
        glfwSwapBuffers(window);
        glfwPollEvents();
    }
    
    return 0;
}`,
        customizationExample: `// Access individual parts
#include "meshes/MeshName.h"
#include "geometries/MeshNameGeometry.h"
#include "materials/MaterialName.h"

class CustomModel {
private:
    MeshNameGeometry geometry;
    MaterialName material;
    
public:
    CustomModel() : geometry(), material() {}
    void render() { /* custom rendering */ }
};`
    },
    go: {
        packageManager: 'go mod',
        dependencies: [
            'github.com/go-gl/gl/v4.1-core/gl',
            'github.com/go-gl/glfw/v3.3/glfw',
            'github.com/go-gl/mathgl/mgl32'
        ],
        devDependencies: [],
        installCommand: `go mod init your-project
go get github.com/go-gl/gl/v4.1-core/gl
go get github.com/go-gl/glfw/v3.3/glfw
go get github.com/go-gl/mathgl/mgl32`,
        devInstallCommand: '',
        setupSteps: [
            'Create a new Go module',
            'Install OpenGL dependencies',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: `package main

import (
    "./${'{componentName}'}"
    "github.com/go-gl/gl/v4.1-core/gl"
    "github.com/go-gl/glfw/v3.3/glfw"
)

func main() {
    // Initialize GLFW and OpenGL
    glfw.Init()
    defer glfw.Terminate()
    
    window, _ := glfw.CreateWindow(800, 600, "${'{componentName}'} Viewer", nil, nil)
    window.MakeContextCurrent()
    gl.Init()
    
    model := ${'{componentName}'}.New${'{componentName}'}()
    
    for !window.ShouldClose() {
        model.Render()
        window.SwapBuffers()
        glfw.PollEvents()
    }
}`,
        customizationExample: `// Access individual parts
import (
    "./meshes"
    "./geometries"
    "./materials"
)

type CustomModel struct {
    geometry *geometries.MeshNameGeometry
    material *materials.MaterialName
}

func NewCustomModel() *CustomModel {
    return &CustomModel{
        geometry: geometries.NewMeshNameGeometry(),
        material: materials.NewMaterialName(),
    }
}`
    },
    rust: {
        packageManager: 'cargo',
        dependencies: [
            'wgpu',
            'winit',
            'bytemuck',
            'glam'
        ],
        devDependencies: [],
        installCommand: `# Add to Cargo.toml
[dependencies]
wgpu = "0.18"
winit = "0.28"
bytemuck = "1.14"
glam = "0.24"`,
        devInstallCommand: '',
        setupSteps: [
            'Create a new Rust project with Cargo',
            'Add wgpu dependencies to Cargo.toml',
            'Extract the downloaded component files to your src folder',
            'Run the example application'
        ],
        importExample: `use ${'{componentName}'}::${'{componentName}'};
use wgpu::Device;
use winit::event_loop::EventLoop;

fn main() {
    let event_loop = EventLoop::new();
    // Initialize wgpu and create device
    let device = /* initialize device */;
    
    let model = ${'{componentName}'}::new(&device);
    
    event_loop.run(move |event, _, control_flow| {
        // Render model
        model.render(&mut render_pass);
    });
}`,
        customizationExample: `// Access individual parts
use meshes::MeshName;
use geometries::MeshNameGeometry;
use materials::MaterialName;

struct CustomModel {
    geometry: MeshNameGeometry,
    material: MaterialName,
}

impl CustomModel {
    fn new(device: &Device) -> Self {
        Self {
            geometry: MeshNameGeometry::new(device),
            material: MaterialName::new(device),
        }
    }
}`
    },
    swift: {
        packageManager: 'Swift Package Manager',
        dependencies: [
            'Metal',
            'MetalKit',
            'simd'
        ],
        devDependencies: [],
        installCommand: `// Add to Package.swift
dependencies: [
    .package(url: "https://github.com/apple/swift-numerics", from: "1.0.0")
]`,
        devInstallCommand: '',
        setupSteps: [
            'Create a new iOS/macOS project',
            'Import Metal and MetalKit frameworks',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: `import ${'{componentName}'}
import Metal
import MetalKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        guard let device = MTLCreateSystemDefaultDevice() else { return }
        let model = ${'{componentName}'}(device: device)
        
        // Setup Metal rendering
    }
}`,
        customizationExample: `// Access individual parts
import Meshes
import Geometries
import Materials

class CustomModel {
    private let geometry: MeshNameGeometry
    private let material: MaterialName
    
    init(device: MTLDevice) {
        geometry = MeshNameGeometry(device: device)
        material = MaterialName(device: device)
    }
}`
    },
    kotlin: {
        packageManager: 'Gradle',
        dependencies: [
            'org.lwjgl:lwjgl:3.3.3',
            'org.lwjgl:lwjgl-opengl:3.3.3'
        ],
        devDependencies: [],
        installCommand: `// build.gradle.kts
dependencies {
    implementation("org.lwjgl:lwjgl:3.3.3")
    implementation("org.lwjgl:lwjgl-opengl:3.3.3")
}`,
        devInstallCommand: '',
        setupSteps: [
            'Create a new Kotlin project with Gradle',
            'Add LWJGL dependencies',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: `import ${'{componentName}'}
import org.lwjgl.opengl.GL

fun main() {
    // Initialize LWJGL and OpenGL
    val model = ${'{componentName}'}()
    
    // Render loop
    model.render()
}`,
        customizationExample: `// Access individual parts
import meshes.MeshName
import geometries.MeshNameGeometry
import materials.MaterialName

class CustomModel {
    private val geometry = MeshNameGeometry()
    private val material = MaterialName()
    
    fun render() {
        // Custom rendering logic
    }
}`
    },
    ruby: {
        packageManager: 'gem',
        dependencies: [
            'opengl',
            'glfw',
            'matrix'
        ],
        devDependencies: [],
        installCommand: 'gem install opengl glfw matrix',
        devInstallCommand: '',
        setupSteps: [
            'Install Ruby and required gems',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: `require './${'{componentName}'}'
require 'opengl'
require 'glfw'

class ModelApp
  def initialize
    @model = ${'{componentName}'}::${'{componentName}'}.new
  end
  
  def run
    # Initialize OpenGL and render
    @model.render
  end
end

app = ModelApp.new
app.run`,
        customizationExample: `# Access individual parts
require './meshes/mesh_name'
require './geometries/mesh_name_geometry'
require './materials/material_name'

class CustomModel
  def initialize
    @geometry = MeshNameGeometry.new
    @material = MaterialName.new
  end
end`
    },
    php: {
        packageManager: 'composer',
        dependencies: [
            'php-opengl/opengl',
            'php-gl/math'
        ],
        devDependencies: [],
        installCommand: 'composer require php-opengl/opengl php-gl/math',
        devInstallCommand: '',
        setupSteps: [
            'Install PHP and Composer',
            'Install OpenGL PHP extensions',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: `<?php
require_once './${'{componentName}'}.php';
use OpenGL\\GL;

class ModelApp {
    private $model;
    
    public function __construct() {
        $this->model = new ${'{componentName}'}();
    }
    
    public function run() {
        $this->model->render();
    }
}

$app = new ModelApp();
$app->run();`,
        customizationExample: `<?php
// Access individual parts
require_once './meshes/MeshName.php';
require_once './geometries/MeshNameGeometry.php';
require_once './materials/MaterialName.php';

class CustomModel {
    private $geometry;
    private $material;
    
    public function __construct() {
        $this->geometry = new MeshNameGeometry();
        $this->material = new MaterialName();
    }
}`
    },
    scala: {
        packageManager: 'sbt',
        dependencies: [
            'org.lwjgl:lwjgl:3.3.3',
            'org.lwjgl:lwjgl-opengl:3.3.3'
        ],
        devDependencies: [],
        installCommand: `// build.sbt
libraryDependencies ++= Seq(
  "org.lwjgl" % "lwjgl" % "3.3.3",
  "org.lwjgl" % "lwjgl-opengl" % "3.3.3"
)`,
        devInstallCommand: '',
        setupSteps: [
            'Create a new Scala project with sbt',
            'Add LWJGL dependencies to build.sbt',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: `import ${'{componentName}'}._
import org.lwjgl.opengl.GL

object ModelApp extends App {
  // Initialize LWJGL and OpenGL
  val model = new ${'{componentName}'}()
  
  // Render loop
  model.render()
}`,
        customizationExample: `// Access individual parts
import meshes.MeshName
import geometries.MeshNameGeometry
import materials.MaterialName

class CustomModel {
  private val geometry = new MeshNameGeometry()
  private val material = new MaterialName()
  
  def render(): Unit = {
    // Custom rendering logic
  }
}`
    },
    dart: {
        packageManager: 'pub',
        dependencies: [
            'flutter',
            'vector_math',
            'flutter_gl'
        ],
        devDependencies: [],
        installCommand: `# pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  vector_math: ^2.1.4
  flutter_gl: ^0.0.1`,
        devInstallCommand: '',
        setupSteps: [
            'Create a new Flutter project',
            'Add dependencies to pubspec.yaml',
            'Extract the downloaded component files to your lib folder',
            'Run the example application'
        ],
        importExample: `import 'package:flutter/material.dart';
import './${'{componentName}'}.dart';

class ModelPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ${'{componentName}'}(),
    );
  }
}`,
        customizationExample: `// Access individual parts
import './meshes/mesh_name.dart';
import './geometries/mesh_name_geometry.dart';
import './materials/material_name.dart';

class CustomModel {
  final MeshNameGeometry geometry;
  final MaterialName material;
  
  CustomModel() : 
    geometry = MeshNameGeometry(),
    material = MaterialName();
}`
    },
    r: {
        packageManager: 'CRAN',
        dependencies: [
            'rgl',
            'geometry',
            'matrix'
        ],
        devDependencies: [],
        installCommand: 'install.packages(c("rgl", "geometry", "matrix"))',
        devInstallCommand: '',
        setupSteps: [
            'Install R and required packages',
            'Extract the downloaded component files to your project',
            'Source the example script'
        ],
        importExample: `library(rgl)
source("./${'{componentName}'}.R")

# Create and display the model
model <- ${'{componentName}'}$new()
model$render()`,
        customizationExample: `# Access individual parts
source("./meshes/MeshName.R")
source("./geometries/MeshNameGeometry.R")
source("./materials/MaterialName.R")

CustomModel <- setRefClass("CustomModel",
  fields = list(
    geometry = "MeshNameGeometry",
    material = "MaterialName"
  ),
  methods = list(
    initialize = function() {
      geometry <<- MeshNameGeometry$new()
      material <<- MaterialName$new()
    }
  )
)`
    }
};
// Copy to clipboard function
const copyToClipboard = (text)=>{
    navigator.clipboard.writeText(text).then(()=>{
        // You could add a toast notification here
        console.log('Copied to clipboard');
    });
};
// VS Code-like editor component with syntax highlighting
function CodeEditor({ code, languageId }) {
    const language = LANGUAGES.find((lang)=>lang.id === languageId);
    const lines = code.split('\n');
    const getSyntaxClass = (line)=>{
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
                                lineNumber: 816,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FFBD2E]"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 817,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#27C93F]"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 818,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 815,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#CCCCCC] text-xs flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: language?.name
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 821,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 822,
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
                                lineNumber: 823,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>copyToClipboard(code),
                                className: "ml-2 p-1 hover:bg-[#404040] rounded",
                                title: "Copy to clipboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 829,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 824,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 820,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 814,
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
                                    lineNumber: 837,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 835,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `whitespace-pre ${getSyntaxClass(line)}`,
                                    children: line
                                }, i, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 842,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 840,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 834,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 833,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 813,
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
                    lineNumber: 866,
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
                                    lineNumber: 875,
                                    columnNumber: 17
                                }, this))
                        }, group, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 873,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 867,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/glb-convertor/page.tsx",
            lineNumber: 865,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 864,
        columnNumber: 5
    }, this);
}
// How to Use section component
function HowToUseSection({ selectedLanguage, componentName }) {
    const setup = LANGUAGE_SETUP[selectedLanguage];
    const lang = LANGUAGES.find((l)=>l.id === selectedLanguage);
    const replaceComponentName = (text)=>{
        return text.replace(/\{componentName\}/g, componentName);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 border-t border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-semibold text-white mb-3 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                        className: "w-5 h-5 mr-2 text-purple-400"
                    }, void 0, false, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 905,
                        columnNumber: 9
                    }, this),
                    "How to Use (",
                    setup.packageManager,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 904,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "w-4 h-4 mr-2 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 913,
                                        columnNumber: 13
                                    }, this),
                                    "Dependencies"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 912,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm mb-2",
                                                children: "Install required dependencies:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 rounded p-3 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-green-400 text-sm",
                                                        children: setup.installCommand
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>copyToClipboard(setup.installCommand),
                                                        className: "absolute top-2 right-2 p-1 hover:bg-slate-700 rounded",
                                                        title: "Copy command",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-3 h-3 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 926,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 921,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 919,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 917,
                                        columnNumber: 13
                                    }, this),
                                    setup.devInstallCommand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm mb-2",
                                                children: "Install development dependencies:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 rounded p-3 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-blue-400 text-sm",
                                                        children: setup.devInstallCommand
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>copyToClipboard(setup.devInstallCommand),
                                                        className: "absolute top-2 right-2 p-1 hover:bg-slate-700 rounded",
                                                        title: "Copy command",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            className: "w-3 h-3 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 941,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 936,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 934,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 932,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium mb-1",
                                                children: "Required packages:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 948,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside space-y-1",
                                                children: setup.dependencies.map((dep, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: dep
                                                    }, i, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 951,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 949,
                                                columnNumber: 15
                                            }, this),
                                            setup.devDependencies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium mb-1 mt-2",
                                                        children: "Development packages:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-inside space-y-1",
                                                        children: setup.devDependencies.map((dep, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: dep
                                                            }, i, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 959,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 947,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 916,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 911,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Setup Steps"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 970,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "list-decimal list-inside space-y-2 text-slate-400 text-sm",
                                    children: setup.setupSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: step
                                        }, i, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 974,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 972,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 971,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 969,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Download & Extract"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 982,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm mb-2",
                                                    children: "1. Download the complete project:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 986,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800 rounded p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-blue-400 text-sm",
                                                        children: 'Click "Download Full Project" button above'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 988,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 987,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 985,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm mb-2",
                                                    children: "2. Extract to your project directory:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 992,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800 rounded p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-yellow-400 text-sm",
                                                        children: [
                                                            componentName,
                                                            "-",
                                                            selectedLanguage,
                                                            "-with-example.zip → your-project/"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 991,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm mb-2",
                                                    children: "3. File structure after extraction:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1000,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800 rounded p-3 text-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-300 font-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "📁 components/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1003,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-4",
                                                                children: [
                                                                    "📁 ",
                                                                    componentName,
                                                                    "/"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1004,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: [
                                                                    "📄 index.",
                                                                    lang?.extension
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1005,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: "📁 geometries/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1006,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: "📁 meshes/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1007,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: "📁 materials/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1008,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "📁 app/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1009,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-4",
                                                                children: [
                                                                    "📁 ",
                                                                    componentName.toLowerCase(),
                                                                    "-page/"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1010,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: [
                                                                    "📄 page.",
                                                                    lang?.extension
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1011,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 999,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 984,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 983,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 981,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Basic Usage"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1022,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-purple-400 font-mono text-sm",
                                                children: "Basic implementation example"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1025,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(replaceComponentName(setup.importExample)),
                                                className: "p-1 hover:bg-slate-700 rounded",
                                                title: "Copy example",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-3 h-3 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1033,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1024,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "text-sm overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-slate-300",
                                                children: replaceComponentName(setup.importExample)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1038,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1036,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1023,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1021,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Advanced Customization"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1048,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-orange-400 font-mono text-sm",
                                                children: "Access individual components"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1051,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(replaceComponentName(setup.customizationExample)),
                                                className: "p-1 hover:bg-slate-700 rounded",
                                                title: "Copy example",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-3 h-3 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1054,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1050,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "text-sm overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-slate-300",
                                                children: replaceComponentName(setup.customizationExample)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1064,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1063,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1062,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1049,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1047,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Important Notes"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1074,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-400 space-y-2",
                                    children: [
                                        selectedLanguage === 'typescript' || selectedLanguage === 'javascript' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This component is designed for React Three Fiber applications"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Make sure you have a Canvas component wrapping your 3D content"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1080,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry files are separated for better maintainability and reusability"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1081,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Each mesh component imports its geometry from the geometries folder"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1082,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'python' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses ModernGL for high-performance OpenGL rendering"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Make sure you have OpenGL drivers installed on your system"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1087,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is optimized for NumPy arrays"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1088,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Each component is a separate class for modularity"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'java' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses LWJGL for OpenGL bindings"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1093,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Make sure to include native libraries for your platform"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1094,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is stored in efficient buffer objects"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Memory management is handled automatically"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1096,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'csharp' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses OpenTK for OpenGL bindings"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1100,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Compatible with .NET Core and .NET Framework"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Implements IDisposable for proper resource cleanup"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1102,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is optimized for GPU buffers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1103,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'cpp' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses modern OpenGL with GLEW and GLFW"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Requires C++11 or later"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Uses RAII for automatic resource management"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is stored in efficient STL containers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1110,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'go' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses go-gl bindings for OpenGL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Requires CGO to be enabled"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Memory management is handled by Go's garbage collector"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is stored in slices for efficiency"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1117,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'rust' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses wgpu for cross-platform graphics"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1121,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Memory safety is guaranteed by Rust's ownership system"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is stored in efficient Vec containers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1123,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Compatible with WebAssembly for web deployment"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1124,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'swift' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses Metal for high-performance graphics"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1128,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Compatible with iOS, macOS, and tvOS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Automatic reference counting handles memory management"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is optimized for Metal buffers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1131,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry files are separated for better maintainability"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Each component is modular and can be used independently"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Memory optimization is applied for large models"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Follow the platform-specific best practices for your language"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1138,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-2 border-t border-slate-700 mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Performance Tips:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1142,
                                                    columnNumber: 17
                                                }, this),
                                                " For extremely large models (>100MB), consider:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1143,
                                                    columnNumber: 17
                                                }, this),
                                                "• Loading geometry data asynchronously",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1144,
                                                    columnNumber: 17
                                                }, this),
                                                "• Implementing level-of-detail (LOD) systems",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1145,
                                                    columnNumber: 17
                                                }, this),
                                                "• Using instancing for repeated geometry",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1146,
                                                    columnNumber: 17
                                                }, this),
                                                "• Applying mesh simplification for distant objects"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1076,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1075,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1073,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 909,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 903,
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(content, `${componentName}-${selectedLanguage}${suffix}.zip`);
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(content, `${componentName}-${displayMode}-${selectedLanguage}.zip`);
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
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Drag and drop handlers
    const handleDragEnter = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            const file = files[0];
            if (file.name.endsWith('.glb')) {
                setFile(file);
                setError('');
                setIsLoading(true);
                setProgress(0);
                // Process file immediately
                handleFileUpload({
                    target: {
                        files
                    }
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white text-slate-800 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "py-6 px-4 flex justify-between items-center border-b border-slate-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-slate-200 rounded-sm"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold",
                                children: "GLB to Code Converter"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1476,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-blue-500 hover:underline",
                                children: "Documentation"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1479,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-blue-500 hover:underline",
                                children: "Examples"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1480,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1478,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 1473,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: dropRef,
                        onDragEnter: handleDragEnter,
                        onDragOver: handleDragEnter,
                        onDragLeave: handleDragLeave,
                        onDrop: handleDrop,
                        className: `
            border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200
            ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300'}
            mb-8
          `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "w-10 h-10 mx-auto mb-4 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1499,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold mb-2",
                                children: "Drag 'n' drop your GLB file here"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1500,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mb-6",
                                children: [
                                    "or ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>document.getElementById('file-upload')?.click(),
                                        className: "text-blue-500 underline",
                                        children: "browse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1501,
                                        columnNumber: 49
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1501,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "file-upload",
                                type: "file",
                                accept: ".glb",
                                onChange: handleFileUpload,
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1503,
                                columnNumber: 11
                            }, this),
                            (isLoading || isProcessing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isProcessing ? 'Processing...' : 'Loading...'
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1515,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    Math.round(progress),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1516,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1514,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-slate-200 rounded-full h-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-500 h-2 rounded-full transition-all duration-300",
                                            style: {
                                                width: `${progress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1519,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1518,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1513,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1487,
                        columnNumber: 9
                    }, this),
                    modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md overflow-hidden",
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
                                style: {
                                    height: '500px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                        intensity: 0.5
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1541,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                                        position: [
                                            10,
                                            10,
                                            10
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1542,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Suspense, {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Html"], {
                                            center: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-500 bg-white/70 p-2 rounded",
                                                children: "Loading model..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1545,
                                                columnNumber: 21
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1544,
                                            columnNumber: 19
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelPreview, {
                                            url: modelUrl,
                                            displayMode: displayMode,
                                            autoRotate: autoRotate
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1550,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1543,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
                                        args: [
                                            10,
                                            10,
                                            '#cccccc',
                                            '#999999'
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1552,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("axesHelper", {
                                        args: [
                                            2
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1553,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
                                        enableZoom: true,
                                        enablePan: true,
                                        enableRotate: true,
                                        minDistance: 0.1,
                                        maxDistance: 100
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1554,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1532,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 1531,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1530,
                        columnNumber: 11
                    }, this),
                    projectStructure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 border-b border-slate-200 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold",
                                            children: "Code Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1571,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageSelector, {
                                            selectedLanguage: selectedLanguage,
                                            onChange: setSelectedLanguage
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1572,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1570,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                        code: projectStructure.indexContent,
                                        languageId: selectedLanguage
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1575,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1574,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 1569,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1568,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 1485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-6 px-4 border-t border-slate-200 mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 bg-slate-200 rounded-sm"
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1586,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "GLB to Code Converter"
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1587,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 1585,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-500",
                            children: [
                                "Made with ❤️ by ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-blue-500 hover:underline",
                                    children: "@NikkitaFTW"
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1590,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 1589,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 1584,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 1583,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 1471,
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
                        lineNumber: 1754,
                        columnNumber: 11
                    }, this),
                    "Loading model..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 1753,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/glb-convertor/page.tsx",
            lineNumber: 1752,
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
        lineNumber: 1762,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__569869ff._.js.map