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
// Language configuration for code generation with proper 2025 library support
const LANGUAGES = {
    typescript: {
        extension: "tsx",
        geometryExtension: "ts",
        comment: "//",
        string: '"',
        function: "function",
        class: "class",
        import: "import",
        export: "export",
        typeDeclaration: (name)=>"type ".concat(name, " = {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"".concat(key, ": ").concat(value, ","),
        array: (items)=>"[".concat(items.join(", "), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    javascript: {
        extension: "jsx",
        geometryExtension: "js",
        comment: "//",
        string: '"',
        function: "function",
        class: "class",
        import: "import",
        export: "export",
        typeDeclaration: ()=>"",
        typeEnd: "",
        objectProperty: (key, value)=>"".concat(key, ": ").concat(value, ","),
        array: (items)=>"[".concat(items.join(", "), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    python: {
        extension: "py",
        geometryExtension: "py",
        comment: "#",
        string: "'",
        function: "def",
        class: "class",
        import: "import",
        export: "",
        typeDeclaration: ()=>"",
        typeEnd: "",
        objectProperty: (key, value)=>"    ".concat(key, " = ").concat(value),
        array: (items)=>"[".concat(items.join(", "), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    java: {
        extension: "java",
        geometryExtension: "java",
        comment: "//",
        string: '"',
        function: "",
        class: "class",
        import: "import",
        export: "",
        typeDeclaration: (name)=>"public class ".concat(name, " {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"    public ".concat(value, " ").concat(key, ";"),
        array: (items)=>"new ArrayList<>() {{ ".concat(items.map((item)=>"add(".concat(item, ")")).join("; "), "; }}"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    csharp: {
        extension: "cs",
        geometryExtension: "cs",
        comment: "//",
        string: '"',
        function: "",
        class: "class",
        import: "using",
        export: "",
        typeDeclaration: (name)=>"public class ".concat(name, " {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"    public ".concat(value, " ").concat(key, " { get; set; }"),
        array: (items)=>"new List<object> { ".concat(items.join(", "), " }"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    cpp: {
        extension: "cpp",
        geometryExtension: "h",
        comment: "//",
        string: '"',
        function: "",
        class: "class",
        import: "#include",
        export: "",
        typeDeclaration: (name)=>"class ".concat(name, " { public:"),
        typeEnd: "};",
        objectProperty: (key, value)=>"    ".concat(value, " ").concat(key, ";"),
        array: (items)=>"{".concat(items.join(", "), "}"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    go: {
        extension: "go",
        geometryExtension: "go",
        comment: "//",
        string: '"',
        function: "func",
        class: "type",
        import: "import",
        export: "",
        typeDeclaration: (name)=>"type ".concat(name, " struct {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"    ".concat(key, " ").concat(value, ' `json:"').concat(key.toLowerCase(), '"`'),
        array: (items)=>"[]interface{}{".concat(items.join(", "), "}"),
        stringLiteral: (value)=>'"'.concat(value.replace(/"/g, '\\"'), '"')
    },
    rust: {
        extension: "rs",
        geometryExtension: "rs",
        comment: "//",
        string: '"',
        function: "fn",
        class: "struct",
        import: "use",
        export: "",
        typeDeclaration: (name)=>"pub struct ".concat(name, " {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"    pub ".concat(key, ": ").concat(value, ","),
        array: (items)=>"vec![".concat(items.join(", "), "]"),
        stringLiteral: (value)=>'"'.concat(value.replace(/"/g, '\\"'), '"')
    },
    swift: {
        extension: "swift",
        geometryExtension: "swift",
        comment: "//",
        string: '"',
        function: "func",
        class: "class",
        import: "import",
        export: "",
        typeDeclaration: (name)=>"class ".concat(name, " {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"    var ".concat(key, ": ").concat(value),
        array: (items)=>"[".concat(items.join(", "), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    kotlin: {
        extension: "kt",
        geometryExtension: "kt",
        comment: "//",
        string: '"',
        function: "fun",
        class: "class",
        import: "import",
        export: "",
        typeDeclaration: (name)=>"class ".concat(name, " {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"    var ".concat(key, ": ").concat(value, "? = null"),
        array: (items)=>"listOf(".concat(items.join(", "), ")"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    ruby: {
        extension: "rb",
        geometryExtension: "rb",
        comment: "#",
        string: '"',
        function: "def",
        class: "class",
        import: "require",
        export: "",
        typeDeclaration: (name)=>"class ".concat(name),
        typeEnd: "end",
        objectProperty: (key, value)=>"  attr_accessor :".concat(key),
        array: (items)=>"[".concat(items.join(", "), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    php: {
        extension: "php",
        geometryExtension: "php",
        comment: "//",
        string: '"',
        function: "function",
        class: "class",
        import: "use",
        export: "",
        typeDeclaration: (name)=>"class ".concat(name, " {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"    private $".concat(key, ";"),
        array: (items)=>"array(".concat(items.join(", "), ")"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    scala: {
        extension: "scala",
        geometryExtension: "scala",
        comment: "//",
        string: '"',
        function: "def",
        class: "class",
        import: "import",
        export: "",
        typeDeclaration: (name)=>"case class ".concat(name, "("),
        typeEnd: ")",
        objectProperty: (key, value)=>"".concat(key, ": ").concat(value, ","),
        array: (items)=>"Seq(".concat(items.join(", "), ")"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    dart: {
        extension: "dart",
        geometryExtension: "dart",
        comment: "//",
        string: '"',
        function: "void",
        class: "class",
        import: "import",
        export: "",
        typeDeclaration: (name)=>"class ".concat(name, " {"),
        typeEnd: "}",
        objectProperty: (key, value)=>"  ".concat(value, " ").concat(key, ";"),
        array: (items)=>"[".concat(items.join(", "), "]"),
        stringLiteral: (value)=>'"'.concat(value, '"')
    },
    r: {
        extension: "R",
        geometryExtension: "R",
        comment: "#",
        string: '"',
        function: "function",
        class: "setClass",
        import: "library",
        export: "",
        typeDeclaration: (name)=>'setClass("'.concat(name, '", slots = list('),
        typeEnd: "))",
        objectProperty: (key, value)=>'"'.concat(key, '" = "').concat(value, '",'),
        array: (items)=>"c(".concat(items.join(", "), ")"),
        stringLiteral: (value)=>'"'.concat(value, '"')
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
    let safeName = name.replace(/[^a-zA-Z0-9_]/g, "_");
    // Ensure it starts with a letter
    if (!/^[a-zA-Z_]/.test(safeName)) {
        safeName = "_" + safeName;
    }
    // Handle reserved keywords
    const reservedKeywords = [
        "default",
        "function",
        "class",
        "export",
        "import",
        "let",
        "const",
        "var",
        "continue",
        "break",
        "case"
    ];
    if (reservedKeywords.includes(safeName.toLowerCase())) {
        safeName = "_" + safeName;
    }
    return safeName;
}
/**
 * Formats array data for different languages with proper chunking for large datasets
 */ function formatArrayData(data, languageId) {
    let chunkSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1000;
    const lang = LANGUAGES[languageId];
    if (data.length <= chunkSize) {
        return lang.array(data.map(String));
    }
    // Handle large arrays with chunking
    switch(languageId){
        case "typescript":
        case "javascript":
            return "new Float32Array([".concat(data.join(", "), "])");
        case "python":
            return "np.array([".concat(data.join(", "), "], dtype=np.float32)");
        case "java":
            return "new float[]{".concat(data.join("f, "), "f}");
        case "csharp":
            return "new float[]{".concat(data.join("f, "), "f}");
        case "cpp":
            return "{".concat(data.join("f, "), "f}");
        case "go":
            return "[]float32{".concat(data.join(", "), "}");
        case "rust":
            return "vec![".concat(data.join(", "), "]");
        case "swift":
            return "[".concat(data.join(", "), "]");
        default:
            return lang.array(data.map(String));
    }
}
function generateProjectStructure(gltf, componentName) {
    let displayMode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "original", languageId = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "typescript";
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
            const meshName = mesh.name || "Mesh_".concat(meshes.length);
            const safeMeshName = sanitizeName(meshName);
            const meshComponentName = getLanguageSpecificName(safeMeshName, languageId);
            const geometryFile = generateGeometryFile(meshComponentName, geometry, languageId);
            geometries.push({
                name: meshComponentName,
                content: geometryFile,
                originalName: meshName
            });
            const meshComponent = generateMeshComponent(meshComponentName, geometry, displayMode, languageId);
            meshes.push({
                name: meshComponentName,
                content: meshComponent,
                originalName: meshName
            });
            const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
            const materialName = material.name || "Material_".concat(materials.length);
            const safeMaterialName = sanitizeName(materialName);
            const materialComponentName = getLanguageSpecificName(safeMaterialName, languageId);
            // Extract geometry attributes
            const hasNormals = !!geometry.attributes.normal;
            const hasUvs = !!geometry.attributes.uv;
            // Only add the material if it doesn't already exist
            if (!materials.some((m)=>m.name === materialComponentName)) {
                const materialComponent = generateMaterialComponent(materialComponentName, material, displayMode, languageId, hasNormals, hasUvs);
                materials.push({
                    name: materialComponentName,
                    content: materialComponent,
                    originalName: materialName
                });
            }
        }
    });
    const componentComponentName = getLanguageSpecificName(sanitizeName(componentName), languageId);
    const indexContent = generateIndexComponent(componentComponentName, meshes, materials, displayMode, languageId);
    const examplePageContent = generateExamplePage(componentComponentName, languageId);
    return {
        componentName: componentComponentName,
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
        case "typescript":
            return "import * as THREE from 'three';\n\n// ".concat(meshName, " geometry definition\nexport const ").concat(meshName, "Geometry = (() => {\n  const geometry = new THREE.BufferGeometry();\n  \n  ").concat(isLargeGeometry ? "// Large geometry - using chunked approach\n  const createGeometryChunk = (data: number[], itemSize: number) => {\n    const chunkSize = 50000;\n    const chunks: Float32Array[] = [];\n    for (let i = 0; i < data.length; i += chunkSize) {\n      const chunk = data.slice(i, i + chunkSize);\n      chunks.push(new Float32Array(chunk));\n    }\n    return chunks;\n  };\n  \n  const positionChunks = createGeometryChunk(".concat(JSON.stringify(positions), ", 3);\n  const positions = new Float32Array(positionChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));\n  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n  \n  ").concat(normals ? "const normalChunks = createGeometryChunk(".concat(JSON.stringify(normals), ", 3);\n  const normals = new Float32Array(normalChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));\n  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));") : "", "\n  \n  ").concat(uvs ? "const uvChunks = createGeometryChunk(".concat(JSON.stringify(uvs), ", 2);\n  const uvs = new Float32Array(uvChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));\n  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));") : "", "\n  \n  ").concat(indices ? "const indexChunks = createGeometryChunk(".concat(JSON.stringify(indices), ", 1);\n  const indices = new Uint16Array(indexChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));\n  geometry.setIndex(new THREE.BufferAttribute(indices, 1));") : "") : "// Position data\n  const positions = ".concat(formatArrayData(positions, languageId), ";\n  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n  \n  ").concat(normals ? "// Normal data\n  const normals = ".concat(formatArrayData(normals, languageId), ";\n  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));") : "", "\n  \n  ").concat(uvs ? "// UV data\n  const uvs = ".concat(formatArrayData(uvs, languageId), ";\n  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));") : "", "\n  \n  ").concat(indices ? "// Index data\n  const indices = new Uint16Array(".concat(JSON.stringify(indices), ");\n  geometry.setIndex(new THREE.BufferAttribute(indices, 1));") : ""), "\n\n  geometry.computeVertexNormals();\n  return geometry;\n})();\n");
        case "javascript":
            return "import * as THREE from 'three';\n    // ".concat(meshName, " geometry definition\n    export const ").concat(meshName, "Geometry = (() => {\n      const geometry = new THREE.BufferGeometry();\n      // Position data\n      const positions = ").concat(formatArrayData(positions, languageId), ";\n      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n      ").concat(normals ? "// Normal data\n      const normals = ".concat(formatArrayData(normals, languageId), ";\n      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));") : "", "\n      ").concat(uvs ? "// UV data\n      const uvs = ".concat(formatArrayData(uvs, languageId), ";\n      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));") : "", "\n      ").concat(indices ? "// Index data\n      const indices = new Uint16Array(".concat(JSON.stringify(indices), ");\n      geometry.setIndex(new THREE.BufferAttribute(indices, 1));") : "", "\n      geometry.computeVertexNormals();\n      return geometry;\n    })();\n    ");
        case "python":
            return "import numpy as np\nimport moderngl\nfrom typing import Optional\n\nclass ".concat(meshName, 'Geometry:\n    """').concat(meshName, ' geometry definition for ModernGL"""\n    \n    def __init__(self):\n        # Position data\n        self.positions = ').concat(formatArrayData(positions, languageId), "\n        ").concat(normals ? "# Normal data\n        self.normals = ".concat(formatArrayData(normals, languageId)) : "self.normals = None", "\n        ").concat(uvs ? "# UV data\n        self.uvs = ".concat(formatArrayData(uvs, languageId)) : "self.uvs = None", "\n        ").concat(indices ? "# Index data\n        self.indices = np.array([".concat(indices.join(", "), "], dtype=np.uint32)") : "self.indices = None", '\n    \n    def create_vao(self, ctx: moderngl.Context, program: moderngl.Program) -> moderngl.VertexArray:\n        """Create vertex array object for rendering"""\n        vbo_positions = ctx.buffer(self.positions.tobytes())\n        \n        vao_content = [(vbo_positions, \'3f\', \'in_position\')]\n        \n        ').concat(normals ? "if self.normals is not None:\n            vbo_normals = ctx.buffer(self.normals.tobytes())\n            vao_content.append((vbo_normals, '3f', 'in_normal'))" : "", "\n        \n        ").concat(uvs ? "if self.uvs is not None:\n            vbo_uvs = ctx.buffer(self.uvs.tobytes())\n            vao_content.append((vbo_uvs, '2f', 'in_uv'))" : "", "\n        \n        ").concat(indices ? "if self.indices is not None:\n            ibo = ctx.buffer(self.indices.tobytes())\n            return ctx.vertex_array(program, vao_content, index_buffer=ibo)\n        else:\n            return ctx.vertex_array(program, vao_content)" : "return ctx.vertex_array(program, vao_content)", "\n");
        case "java":
            return "import java.nio.FloatBuffer;\nimport java.nio.IntBuffer;\nimport org.lwjgl.BufferUtils;\nimport static org.lwjgl.opengl.GL30.*;\n\n/**\n * ".concat(meshName, " geometry definition for LWJGL OpenGL\n */\npublic class ").concat(meshName, "Geometry {\n    private int vao;\n    private int vbo;\n    ").concat(indices ? "private int ebo;" : "", "\n    private int vertexCount;\n    \n    public ").concat(meshName, "Geometry() {\n        setupBuffers();\n    }\n    \n    private void setupBuffers() {\n        // Position data\n        float[] positions = ").concat(formatArrayData(positions, languageId), ";\n        ").concat(normals ? "float[] normals = ".concat(formatArrayData(normals || [], languageId), ";") : "", "\n        ").concat(uvs ? "float[] uvs = ".concat(formatArrayData(uvs || [], languageId), ";") : "", "\n        ").concat(indices ? "int[] indices = {".concat(indices.join(", "), "};") : "", "\n        \n        vao = glGenVertexArrays();\n        vbo = glGenBuffers();\n        ").concat(indices ? "ebo = glGenBuffers();" : "", "\n        \n        glBindVertexArray(vao);\n        \n        // Position buffer\n        glBindBuffer(GL_ARRAY_BUFFER, vbo);\n        FloatBuffer positionBuffer = BufferUtils.createFloatBuffer(positions.length);\n        positionBuffer.put(positions).flip();\n        glBufferData(GL_ARRAY_BUFFER, positionBuffer, GL_STATIC_DRAW);\n        glVertexAttribPointer(0, 3, GL_FLOAT, false, 3 * Float.BYTES, 0);\n        glEnableVertexAttribArray(0);\n        \n        ").concat(normals ? "// Normal buffer\n        FloatBuffer normalBuffer = BufferUtils.createFloatBuffer(normals.length);\n        normalBuffer.put(normals).flip();\n        glBufferData(GL_ARRAY_BUFFER, normalBuffer, GL_STATIC_DRAW);\n        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * Float.BYTES, 0);\n        glEnableVertexAttribArray(1);" : "", "\n        \n        ").concat(uvs ? "// UV buffer\n        FloatBuffer uvBuffer = BufferUtils.createFloatBuffer(uvs.length);\n        uvBuffer.put(uvs).flip();\n        glBufferData(GL_ARRAY_BUFFER, uvBuffer, GL_STATIC_DRAW);\n        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * Float.BYTES, 0);\n        glEnableVertexAttribArray(2);" : "", "\n        \n        ").concat(indices ? "// Element buffer\n        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);\n        IntBuffer indexBuffer = BufferUtils.createIntBuffer(indices.length);\n        indexBuffer.put(indices).flip();\n        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indexBuffer, GL_STATIC_DRAW);\n        vertexCount = indices.length;" : "vertexCount = positions.length / 3;", "\n        \n        glBindVertexArray(0);\n    }\n    \n    public void render() {\n        glBindVertexArray(vao);\n        ").concat(indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0);" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);", "\n        glBindVertexArray(0);\n    }\n    \n    public void cleanup() {\n        glDeleteVertexArrays(vao);\n        glDeleteBuffers(vbo);\n        ").concat(indices ? "glDeleteBuffers(ebo);" : "", "\n    }\n}\n");
        case "csharp":
            return "using System;\nusing OpenTK.Graphics.OpenGL4;\nusing OpenTK.Mathematics;\n\n/// <summary>\n/// ".concat(meshName, " geometry definition for OpenTK\n/// </summary>\npublic class ").concat(meshName, "Geometry : IDisposable\n{\n    private int _vao;\n    private int _vbo;\n    ").concat(indices ? "private int _ebo;" : "", "\n    private int _vertexCount;\n    \n    public ").concat(meshName, "Geometry()\n    {\n        SetupBuffers();\n    }\n    \n    private void SetupBuffers()\n    {\n        // Position data\n        float[] positions = ").concat(formatArrayData(positions, languageId), ";\n        ").concat(normals ? "float[] normals = ".concat(formatArrayData(normals || [], languageId), ";") : "", "\n        ").concat(uvs ? "float[] uvs = ".concat(formatArrayData(uvs || [], languageId), ";") : "", "\n        ").concat(indices ? "uint[] indices = {".concat(indices.join(", "), "};") : "", "\n        \n        _vao = GL.GenVertexArray();\n        _vbo = GL.GenBuffer();\n        ").concat(indices ? "_ebo = GL.GenBuffer();" : "", "\n        \n        GL.BindVertexArray(_vao);\n        \n        // Position buffer\n        GL.BindBuffer(BufferTarget.ArrayBuffer, _vbo);\n        GL.BufferData(BufferTarget.ArrayBuffer, positions.Length * sizeof(float), positions, BufferUsageHint.StaticDraw);\n        GL.VertexAttribPointer(0, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);\n        GL.EnableVertexAttribArray(0);\n        \n        ").concat(normals ? "// Normal buffer\n        GL.BufferData(BufferTarget.ArrayBuffer, normals.Length * sizeof(float), normals, BufferUsageHint.StaticDraw);\n        GL.VertexAttribPointer(1, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);\n        GL.EnableVertexAttribArray(1);" : "", "\n        \n        ").concat(uvs ? "// UV buffer\n        GL.BufferData(BufferTarget.ArrayBuffer, uvs.Length * sizeof(float), uvs, BufferUsageHint.StaticDraw);\n        GL.VertexAttribPointer(2, 2, VertexAttribPointerType.Float, false, 2 * sizeof(float), 0);\n        GL.EnableVertexAttribArray(2);" : "", "\n        \n        ").concat(indices ? "// Element buffer\n        GL.BindBuffer(BufferTarget.ElementArrayBuffer, _ebo);\n        GL.BufferData(BufferTarget.ElementArrayBuffer, indices.Length * sizeof(uint), indices, BufferUsageHint.StaticDraw);\n        _vertexCount = indices.Length;" : "_vertexCount = positions.Length / 3;", "\n        \n        GL.BindVertexArray(0);\n    }\n    \n    public void Render()\n    {\n        GL.BindVertexArray(_vao);\n        ").concat(indices ? "GL.DrawElements(PrimitiveType.Triangles, _vertexCount, DrawElementsType.UnsignedInt, 0);" : "GL.DrawArrays(PrimitiveType.Triangles, 0, _vertexCount);", "\n        GL.BindVertexArray(0);\n    }\n    \n    public void Dispose()\n    {\n        GL.DeleteVertexArray(_vao);\n        GL.DeleteBuffer(_vbo);\n        ").concat(indices ? "GL.DeleteBuffer(_ebo);" : "", "\n    }\n}\n");
        case "cpp":
            return "#pragma once\n#include <vector>\n#include <GL/glew.h>\n#include <glm/glm.hpp>\n\n/**\n * ".concat(meshName, " geometry definition for OpenGL with GLM\n */\nclass ").concat(meshName, "Geometry {\nprivate:\n    GLuint VAO, VBO").concat(indices ? ", EBO" : "", ";\n    ").concat(indices ? "int indexCount;" : "int vertexCount;", "\n    \npublic:\n    ").concat(meshName, "Geometry() {\n        setupBuffers();\n    }\n    \n    ~").concat(meshName, "Geometry() {\n        cleanup();\n    }\n    \nprivate:\n    void setupBuffers() {\n        // Position data\n        std::vector<float> positions = ").concat(formatArrayData(positions, languageId), ";\n        ").concat(normals ? "std::vector<float> normals = ".concat(formatArrayData(normals || [], languageId), ";") : "", "\n        ").concat(uvs ? "std::vector<float> uvs = ".concat(formatArrayData(uvs || [], languageId), ";") : "", "\n        ").concat(indices ? "std::vector<unsigned int> indices = {".concat(indices.join(", "), "};") : "", "\n        \n        glGenVertexArrays(1, &VAO);\n        glGenBuffers(1, &VBO);\n        ").concat(indices ? "glGenBuffers(1, &EBO);" : "", "\n        \n        glBindVertexArray(VAO);\n        \n        // Position buffer\n        glBindBuffer(GL_ARRAY_BUFFER, VBO);\n        glBufferData(GL_ARRAY_BUFFER, positions.size() * sizeof(float), positions.data(), GL_STATIC_DRAW);\n        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);\n        glEnableVertexAttribArray(0);\n        \n        ").concat(normals ? "// Normal buffer\n        glBufferData(GL_ARRAY_BUFFER, normals.size() * sizeof(float), normals.data(), GL_STATIC_DRAW);\n        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);\n        glEnableVertexAttribArray(1);" : "", "\n        \n        ").concat(uvs ? "// UV buffer\n        glBufferData(GL_ARRAY_BUFFER, uvs.size() * sizeof(float), uvs.data(), GL_STATIC_DRAW);\n        glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);\n        glEnableVertexAttribArray(2);" : "", "\n        \n        ").concat(indices ? "// Element buffer\n        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);\n        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), indices.data(), GL_STATIC_DRAW);\n        indexCount = indices.size();" : "vertexCount = positions.size() / 3;", "\n        \n        glBindVertexArray(0);\n    }\n    \npublic:\n    void render() {\n        glBindVertexArray(VAO);\n        ").concat(indices ? "glDrawElements(GL_TRIANGLES, indexCount, GL_UNSIGNED_INT, 0);" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);", "\n        glBindVertexArray(0);\n    }\n    \n    void cleanup() {\n        glDeleteVertexArrays(1, &VAO);\n        glDeleteBuffers(1, &VBO);\n        ").concat(indices ? "glDeleteBuffers(1, &EBO);" : "", "\n    }\n};\n");
        case "go":
            return 'package geometry\n\nimport (\n    "github.com/go-gl/gl/v4.1-core/gl"\n    "github.com/go-gl/mathgl/mgl32"\n)\n\n// '.concat(meshName, "Geometry represents the geometry data for ").concat(meshName, "\ntype ").concat(meshName, "Geometry struct {\n    vao uint32\n    vbo uint32\n    ").concat(indices ? "ebo uint32" : "", "\n    ").concat(indices ? "indexCount int32" : "vertexCount int32", "\n}\n\n// New").concat(meshName, "Geometry creates a new ").concat(meshName, " geometry\nfunc New").concat(meshName, "Geometry() *").concat(meshName, "Geometry {\n    geom := &").concat(meshName, "Geometry{}\n    geom.setupBuffers()\n    return geom\n}\n\nfunc (g *").concat(meshName, "Geometry) setupBuffers() {\n    // Position data\n    positions := ").concat(formatArrayData(positions, languageId), "\n    ").concat(normals ? "normals := ".concat(formatArrayData(normals || [], languageId)) : "", "\n    ").concat(uvs ? "uvs := ".concat(formatArrayData(uvs || [], languageId)) : "", "\n    ").concat(indices ? "indices := []uint32{".concat(indices.join(", "), "}") : "", "\n    \n    gl.GenVertexArrays(1, &g.vao)\n    gl.GenBuffers(1, &g.vbo)\n    ").concat(indices ? "gl.GenBuffers(1, &g.ebo)" : "", "\n    \n    gl.BindVertexArray(g.vao)\n    \n    // Position buffer\n    gl.BindBuffer(gl.ARRAY_BUFFER, g.vbo)\n    gl.BufferData(gl.ARRAY_BUFFER, len(positions)*4, gl.Ptr(positions), gl.STATIC_DRAW)\n    gl.VertexAttribPointer(0, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))\n    gl.EnableVertexAttribArray(0)\n    \n    ").concat(normals ? "// Normal buffer\n    gl.BufferData(gl.ARRAY_BUFFER, len(normals)*4, gl.Ptr(normals), gl.STATIC_DRAW)\n    gl.VertexAttribPointer(1, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))\n    gl.EnableVertexAttribArray(1)" : "", "\n    \n    ").concat(uvs ? "// UV buffer\n    gl.BufferData(gl.ARRAY_BUFFER, len(uvs)*4, gl.Ptr(uvs), gl.STATIC_DRAW)\n    gl.VertexAttribPointer(2, 2, gl.FLOAT, false, 2*4, gl.PtrOffset(0))\n    gl.EnableVertexAttribArray(2)" : "", "\n    \n    ").concat(indices ? "// Element buffer\n    gl.BindBuffer(gl.ELEMENT_ARRAY_BUFFER, g.ebo)\n    gl.BufferData(gl.ELEMENT_ARRAY_BUFFER, len(indices)*4, gl.Ptr(indices), gl.STATIC_DRAW)\n    g.indexCount = int32(len(indices))" : "g.vertexCount = int32(len(positions) / 3)", "\n    \n    gl.BindVertexArray(0)\n}\n\n// Render renders the geometry\nfunc (g *").concat(meshName, "Geometry) Render() {\n    gl.BindVertexArray(g.vao)\n    ").concat(indices ? "gl.DrawElements(gl.TRIANGLES, g.indexCount, gl.UNSIGNED_INT, gl.PtrOffset(0))" : "gl.DrawArrays(gl.TRIANGLES, 0, g.vertexCount)", "\n    gl.BindVertexArray(0)\n}\n\n// Cleanup cleans up OpenGL resources\nfunc (g *").concat(meshName, "Geometry) Cleanup() {\n    gl.DeleteVertexArrays(1, &g.vao)\n    gl.DeleteBuffers(1, &g.vbo)\n    ").concat(indices ? "gl.DeleteBuffers(1, &g.ebo)" : "", "\n}\n");
        case "rust":
            return "use wgpu::util::DeviceExt;\n\n/// ".concat(meshName, " geometry definition for wgpu\npub struct ").concat(meshName, "Geometry {\n    vertex_buffer: wgpu::Buffer,\n    ").concat(indices ? "index_buffer: wgpu::Buffer," : "", "\n    ").concat(indices ? "num_indices: u32," : "num_vertices: u32,", "\n}\n\nimpl ").concat(meshName, "Geometry {\n    pub fn new(device: &wgpu::Device) -> Self {\n        // Position data\n        let positions: Vec<f32> = vec![").concat(positions.join(", "), "];\n        ").concat(normals ? "let normals: Vec<f32> = vec![".concat((normals || []).join(", "), "];") : "", "\n        ").concat(uvs ? "let uvs: Vec<f32> = vec![".concat((uvs || []).join(", "), "];") : "", "\n        ").concat(indices ? "let indices: Vec<u16> = vec![".concat(indices.join(", "), "];") : "", "\n        \n        // Create vertex data\n        let mut vertex_data = Vec::new();\n        for i in (0..positions.len()).step_by(3) {\n            vertex_data.extend_from_slice(&positions[i..i+3]);\n            ").concat(normals ? "if i < normals.len() - 2 {\n                vertex_data.extend_from_slice(&normals[i..i+3]);\n            }" : "", "\n            ").concat(uvs ? "let uv_index = (i / 3) * 2;\n            if uv_index < uvs.len() - 1 {\n                vertex_data.extend_from_slice(&uvs[uv_index..uv_index+2]);\n            }" : "", '\n        }\n        \n        let vertex_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {\n            label: Some("').concat(meshName, ' Vertex Buffer"),\n            contents: bytemuck::cast_slice(&vertex_data),\n            usage: wgpu::BufferUsages::VERTEX,\n        });\n        \n        ').concat(indices ? 'let index_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {\n            label: Some("'.concat(meshName, ' Index Buffer"),\n            contents: bytemuck::cast_slice(&indices),\n            usage: wgpu::BufferUsages::INDEX,\n        });\n        \n        Self {\n            vertex_buffer,\n            index_buffer,\n            num_indices: indices.len() as u32,\n        }') : "Self {\n            vertex_buffer,\n            num_vertices: (positions.len() / 3) as u32,\n        }", "\n    }\n    \n    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {\n        render_pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));\n        ").concat(indices ? "render_pass.set_index_buffer(self.index_buffer.slice(..), wgpu::IndexFormat::Uint16);\n        render_pass.draw_indexed(0..self.num_indices, 0, 0..1);" : "render_pass.draw(0..self.num_vertices, 0..1);", "\n    }\n}\n");
        case "swift":
            return "import Metal\nimport simd\n\n/// ".concat(meshName, " geometry definition for Metal\nclass ").concat(meshName, "Geometry {\n    private var vertexBuffer: MTLBuffer?\n    ").concat(indices ? "private var indexBuffer: MTLBuffer?" : "", "\n    ").concat(indices ? "private var indexCount: Int" : "private var vertexCount: Int", "\n    \n    init(device: MTLDevice) {\n        // Position data\n        let positions: [Float] = [").concat(positions.join(", "), "]\n        ").concat(normals ? "let normals: [Float] = [".concat((normals || []).join(", "), "]") : "", "\n        ").concat(uvs ? "let uvs: [Float] = [".concat((uvs || []).join(", "), "]") : "", "\n        ").concat(indices ? "let indices: [UInt16] = [".concat(indices.join(", "), "]") : "", "\n        \n        // Create vertex data\n        var vertexData: [Float] = []\n        for i in stride(from: 0, to: positions.count, by: 3) {\n            vertexData.append(contentsOf: [positions[i], positions[i+1], positions[i+2]])\n            ").concat(normals ? "if i < normals.count - 2 {\n                vertexData.append(contentsOf: [normals[i], normals[i+1], normals[i+2]])\n            }" : "", "\n            ").concat(uvs ? "let uvIndex = (i / 3) * 2\n            if uvIndex < uvs.count - 1 {\n                vertexData.append(contentsOf: [uvs[uvIndex], uvs[uvIndex+1]])\n            }" : "", "\n        }\n        \n        vertexBuffer = device.makeBuffer(\n            bytes: vertexData,\n            length: vertexData.count * MemoryLayout<Float>.size,\n            options: []\n        )\n        \n        ").concat(indices ? "indexBuffer = device.makeBuffer(\n            bytes: indices,\n            length: indices.count * MemoryLayout<UInt16>.size,\n            options: []\n        )\n        indexCount = indices.count" : "vertexCount = positions.count / 3", "\n    }\n    \n    func render(renderEncoder: MTLRenderCommandEncoder) {\n        guard let vertexBuffer = vertexBuffer else { return }\n        \n        renderEncoder.setVertexBuffer(vertexBuffer, offset: 0, index: 0)\n        \n        ").concat(indices ? "guard let indexBuffer = indexBuffer else { return }\n        renderEncoder.drawIndexedPrimitives(\n            type: .triangle,\n            indexCount: indexCount,\n            indexType: .uint16,\n            indexBuffer: indexBuffer,\n            indexBufferOffset: 0\n        )" : "renderEncoder.drawPrimitives(\n            type: .triangle,\n            vertexStart: 0,\n            vertexCount: vertexCount\n        )", "\n    }\n}\n");
        case "php":
            return "<?php\n    /**\n     * ".concat(meshName, " geometry definition for PHP-GLFW\n     */\n    class ").concat(meshName, "Geometry {\n        private $vao;\n        private $vbo;\n        ").concat(indices ? "private $ebo;" : "", "\n        private $vertexCount;\n        public function __construct() {\n            $this->setupBuffers();\n        }\n        private function setupBuffers() {\n            // Position data\n            $positions = ").concat(formatArrayData(positions, languageId), ";\n            ").concat(normals ? "$normals = ".concat(formatArrayData(normals || [], languageId), ";") : "", "\n            ").concat(uvs ? "$uvs = ".concat(formatArrayData(uvs || [], languageId), ";") : "", "\n            ").concat(indices ? "$indices = array(".concat(indices.join(", "), ");") : "", "\n            \n            $this->vao = glfwCreateVertexArray();\n            $this->vbo = glfwCreateBuffer();\n            ").concat(indices ? "$this->ebo = glfwCreateBuffer();" : "", "\n            \n            glfwBindVertexArray($this->vao);\n            // Position buffer\n            glfwBindBuffer(GLFW_ARRAY_BUFFER, $this->vbo);\n            glfwBufferData(GLFW_ARRAY_BUFFER, count($positions) * 4, $positions, GLFW_STATIC_DRAW);\n            glfwVertexAttribPointer(0, 3, GLFW_FLOAT, false, 3 * 4, 0);\n            glfwEnableVertexAttribArray(0);\n            ").concat(normals ? "// Normal buffer\n            glfwBufferData(GLFW_ARRAY_BUFFER, count($normals) * 4, $normals, GLFW_STATIC_DRAW);\n            glfwVertexAttribPointer(1, 3, GLFW_FLOAT, false, 3 * 4, 0);\n            glfwEnableVertexAttribArray(1);" : "", "\n            ").concat(uvs ? "// UV buffer\n            glfwBufferData(GLFW_ARRAY_BUFFER, count($uvs) * 4, $uvs, GLFW_STATIC_DRAW);\n            glfwVertexAttribPointer(2, 2, GLFW_FLOAT, false, 2 * 4, 0);\n            glfwEnableVertexAttribArray(2);" : "", "\n            ").concat(indices ? "// Element buffer\n            glfwBindBuffer(GLFW_ELEMENT_ARRAY_BUFFER, $this->ebo);\n            glfwBufferData(GLFW_ELEMENT_ARRAY_BUFFER, count($indices) * 4, $indices, GLFW_STATIC_DRAW);\n            $this->vertexCount = count($indices);" : "$this->vertexCount = count($positions) / 3;", "\n            glfwBindVertexArray(0);\n        }\n        public function render() {\n            glfwBindVertexArray($this->vao);\n            ").concat(indices ? "glfwDrawElements(GLFW_TRIANGLES, $this->vertexCount, GLFW_UNSIGNED_INT, 0);" : "glfwDrawArrays(GLFW_TRIANGLES, 0, $this->vertexCount);", "\n            glfwBindVertexArray(0);\n        }\n    }\n    ");
        case "ruby":
            return "# ".concat(meshName, " geometry definition for Ruby OpenGL\n    class ").concat(meshName, "Geometry\n      def initialize\n        setup_buffers\n      end\n\n      private\n\n      def setup_buffers\n        # Position data\n        positions = ").concat(formatArrayData(positions, languageId), "\n        ").concat(normals ? "normals = ".concat(formatArrayData(normals || [], languageId)) : "", "\n        ").concat(uvs ? "uvs = ".concat(formatArrayData(uvs || [], languageId)) : "", "\n        ").concat(indices ? "indices = [".concat(indices.join(", "), "]") : "", "\n\n        @vao = glGenVertexArrays(1)[0]\n        @vbo = glGenBuffers(1)[0]\n        ").concat(indices ? "@ebo = glGenBuffers(1)[0]" : "", "\n\n        glBindVertexArray(@vao)\n\n        # Position buffer\n        glBindBuffer(GL::ARRAY_BUFFER, @vbo)\n        glBufferData(GL::ARRAY_BUFFER, positions.pack('F*'), GL::STATIC_DRAW)\n        glVertexAttribPointer(0, 3, GL::FLOAT, false, 3 * 4, 0)\n        glEnableVertexAttribArray(0)\n\n        ").concat(normals ? "# Normal buffer\n        glBufferData(GL::ARRAY_BUFFER, normals.pack('F*'), GL::STATIC_DRAW)\n        glVertexAttribPointer(1, 3, GL::FLOAT, false, 3 * 4, 0)\n        glEnableVertexAttribArray(1)" : "", "\n\n        ").concat(uvs ? "# UV buffer\n        glBufferData(GL::ARRAY_BUFFER, uvs.pack('F*'), GL::STATIC_DRAW)\n        glVertexAttribPointer(2, 2, GL::FLOAT, false, 2 * 4, 0)\n        glEnableVertexAttribArray(2)" : "", "\n\n        ").concat(indices ? "# Element buffer\n        glBindBuffer(GL::ELEMENT_ARRAY_BUFFER, @ebo)\n        glBufferData(GL::ELEMENT_ARRAY_BUFFER, indices.pack('I*'), GL::STATIC_DRAW)\n        @vertex_count = indices.length" : "@vertex_count = positions.length / 3", "\n\n        glBindVertexArray(0)\n      end\n\n      public\n\n      def render\n        glBindVertexArray(@vao)\n        ").concat(indices ? "glDrawElements(GL::TRIANGLES, @vertex_count, GL::UNSIGNED_INT, nil)" : "glDrawArrays(GL::TRIANGLES, 0, @vertex_count)", "\n        glBindVertexArray(0)\n      end\n    end\n    ");
        case "scala":
            return "import org.lwjgl.opengl.GL30._\n    import org.lwjgl.system.MemoryUtil._\n    /**\n     * ".concat(meshName, " geometry definition for LWJGL in Scala\n     */\n    class ").concat(meshName, "Geometry {\n      private var vao: Int = _\n      private var vbo: Int = _\n      ").concat(indices ? "private var ebo: Int = _" : "", "\n      private var vertexCount: Int = _\n      \n      setupBuffers()\n      \n      private def setupBuffers(): Unit = {\n        // Position data\n        val positions = ").concat(formatArrayData(positions, languageId), "\n        ").concat(normals ? "val normals = ".concat(formatArrayData(normals || [], languageId)) : "", "\n        ").concat(uvs ? "val uvs = ".concat(formatArrayData(uvs || [], languageId)) : "", "\n        ").concat(indices ? "val indices = Array(".concat(indices.join(", "), ")") : "", "\n        \n        vao = glGenVertexArrays()\n        vbo = glGenBuffers()\n        ").concat(indices ? "ebo = glGenBuffers()" : "", "\n        \n        glBindVertexArray(vao)\n        // Position buffer\n        glBindBuffer(GL_ARRAY_BUFFER, vbo)\n        glBufferData(GL_ARRAY_BUFFER, positions, GL_STATIC_DRAW)\n        glVertexAttribPointer(0, 3, GL_FLOAT, false, 3 * 4, 0)\n        glEnableVertexAttribArray(0)\n        ").concat(normals ? "// Normal buffer\n        glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)\n        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0)\n        glEnableVertexAttribArray(1)" : "", "\n        ").concat(uvs ? "// UV buffer\n        glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)\n        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0)\n        glEnableVertexAttribArray(2)" : "", "\n        ").concat(indices ? "// Element buffer\n        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)\n        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)\n        vertexCount = indices.length" : "vertexCount = positions.length / 3", "\n        glBindVertexArray(0)\n      }\n      \n      def render(): Unit = {\n        glBindVertexArray(vao)\n        ").concat(indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0L)" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)", "\n        glBindVertexArray(0)\n      }\n    }\n    ");
        case "kotlin":
            return "import org.lwjgl.opengl.GL30.*\n    import org.lwjgl.system.MemoryUtil.*\n    /**\n     * ".concat(meshName, " geometry definition for LWJGL in Kotlin\n     */\n    class ").concat(meshName, "Geometry {\n        private var vao: Int = 0\n        private var vbo: Int = 0\n        ").concat(indices ? "private var ebo: Int = 0" : "", "\n        private var vertexCount: Int = 0\n\n        init {\n            setupBuffers()\n        }\n\n        private fun setupBuffers() {\n            // Position data\n            val positions = ").concat(formatArrayData(positions, languageId), "\n            ").concat(normals ? "val normals = ".concat(formatArrayData(normals || [], languageId)) : "", "\n            ").concat(uvs ? "val uvs = ".concat(formatArrayData(uvs || [], languageId)) : "", "\n            ").concat(indices ? "val indices = intArrayOf(".concat(indices.join(", "), ")") : "", "\n\n            vao = glGenVertexArrays()\n            vbo = glGenBuffers()\n            ").concat(indices ? "ebo = glGenBuffers()" : "", "\n\n            glBindVertexArray(vao)\n            // Position buffer\n            glBindBuffer(GL_ARRAY_BUFFER, vbo)\n            glBufferData(GL_ARRAY_BUFFER, positions, GL_STATIC_DRAW)\n            glVertexAttribPointer(0, 3, GL_FLOAT, false, 3 * 4, 0)\n            glEnableVertexAttribArray(0)\n            ").concat(normals ? "// Normal buffer\n            glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)\n            glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0)\n            glEnableVertexAttribArray(1)" : "", "\n            ").concat(uvs ? "// UV buffer\n            glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)\n            glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0)\n            glEnableVertexAttribArray(2)" : "", "\n            ").concat(indices ? "// Element buffer\n            glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)\n            glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)\n            vertexCount = indices.size" : "vertexCount = positions.size / 3", "\n            glBindVertexArray(0)\n        }\n\n        fun render() {\n            glBindVertexArray(vao)\n            ").concat(indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0L)" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)", "\n            glBindVertexArray(0)\n        }\n    }\n    ");
        case "dart":
            return "import 'dart:ffi';\n    import 'package:ffi/ffi.dart';\n    import 'package:opengl/opengl.dart';\n    /**\n     * ".concat(meshName, " geometry definition for OpenGL in Dart\n     */\n    class ").concat(meshName, "Geometry {\n      int vao = 0;\n      int vbo = 0;\n      ").concat(indices ? "int ebo = 0;" : "", "\n      int vertexCount = 0;\n\n      ").concat(meshName, "Geometry() {\n        setupBuffers();\n      }\n\n      void setupBuffers() {\n        // Position data\n        final positions = ").concat(formatArrayData(positions, languageId), ";\n        ").concat(normals ? "final normals = ".concat(formatArrayData(normals || [], languageId), ";") : "", "\n        ").concat(uvs ? "final uvs = ".concat(formatArrayData(uvs || [], languageId), ";") : "", "\n        ").concat(indices ? "final indices = [".concat(indices.join(", "), "];") : "", "\n\n        vao = glGenVertexArrays();\n        vbo = glGenBuffers();\n        ").concat(indices ? "ebo = glGenBuffers();" : "", "\n\n        glBindVertexArray(vao);\n        // Position buffer\n        glBindBuffer(GL_ARRAY_BUFFER, vbo);\n        glBufferData(GL_ARRAY_BUFFER, positions, GL_STATIC_DRAW);\n        glVertexAttribPointer(0, 3, GL_FLOAT, false, 3 * 4, 0);\n        glEnableVertexAttribArray(0);\n        ").concat(normals ? "// Normal buffer\n        glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW);\n        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0);\n        glEnableVertexAttribArray(1);" : "", "\n        ").concat(uvs ? "// UV buffer\n        glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW);\n        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0);\n        glEnableVertexAttribArray(2);" : "", "\n        ").concat(indices ? "// Element buffer\n        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);\n        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW);\n        vertexCount = indices.length;" : "vertexCount = positions.length ~/ 3;", "\n        glBindVertexArray(0);\n      }\n\n      void render() {\n        glBindVertexArray(vao);\n        ").concat(indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0);" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);", "\n        glBindVertexArray(0);\n      }\n    }\n    ");
        case "r":
            return "#' ".concat(meshName, " geometry definition for R OpenGL\n    #' @export\n    ").concat(meshName, "Geometry <- function() {\n      # Position data\n      positions <- ").concat(formatArrayData(positions, languageId), "\n      ").concat(normals ? "normals <- ".concat(formatArrayData(normals || [], languageId)) : "", "\n      ").concat(uvs ? "uvs <- ".concat(formatArrayData(uvs || [], languageId)) : "", "\n      ").concat(indices ? "indices <- c(".concat(indices.join(", "), ")") : "", "\n      \n      # Create buffers\n      vao <- glCreateVertexArrays(1)\n      vbo <- glCreateBuffers(1)\n      ").concat(indices ? "ebo <- glCreateBuffers(1)" : "", "\n      \n      glBindVertexArray(vao)\n      # Position buffer\n      glBindBuffer(GL_ARRAY_BUFFER, vbo)\n      glBufferData(GL_ARRAY_BUFFER, positions, GL_STATIC_DRAW)\n      glVertexAttribPointer(0, 3, GL_FLOAT, FALSE, 3 * 4, 0)\n      glEnableVertexAttribArray(0)\n      ").concat(normals ? "# Normal buffer\n      glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)\n      glVertexAttribPointer(1, 3, GL_FLOAT, FALSE, 3 * 4, 0)\n      glEnableVertexAttribArray(1)" : "", "\n      ").concat(uvs ? "# UV buffer\n      glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)\n      glVertexAttribPointer(2, 2, GL_FLOAT, FALSE, 2 * 4, 0)\n      glEnableVertexAttribArray(2)" : "", "\n      ").concat(indices ? "# Element buffer\n      glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)\n      glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)\n      vertexCount <- length(indices)" : "vertexCount <- length(positions) / 3", "\n      glBindVertexArray(0)\n      \n      # Return geometry object\n      list(\n        vao = vao,\n        render = function() {\n          glBindVertexArray(vao)\n          ").concat(indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0)" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)", "\n          glBindVertexArray(0)\n        }\n      )\n    }\n    ");
        default:
            // Fallback to TypeScript for unsupported languages
            return generateGeometryFile(meshName, geometry, "typescript");
    }
}
/**
 * Generates a mesh component that imports geometry from a separate file
 * Component name starts with capital letter as required by React
 */ function generateMeshComponent(meshName, _geometry, displayMode, languageId) {
    switch(languageId){
        case "typescript":
            return "import React from 'react';\nimport { ".concat(meshName, "Geometry } from '../geometries/").concat(meshName, "Geometry';\n\ninterface ").concat(meshName, "Props {\n  [key: string]: any;\n}\n\n/**\n * ").concat(meshName, " component\n * Simple wrapper that uses pre-defined geometry\n * Easy to modify without touching geometry data\n */\nexport default function ").concat(meshName, "(props: ").concat(meshName, "Props) {\n  return <mesh geometry={").concat(meshName, "Geometry} {...props} />;\n}\n");
        case "javascript":
            return "import React from 'react';\n    import { ".concat(meshName, "Geometry } from '../geometries/").concat(meshName, "Geometry';\n    /**\n     * ").concat(meshName, " component\n     */\n    export default function ").concat(meshName, "(props) {\n      return <mesh geometry={").concat(meshName, "Geometry} {...props} />;\n    }\n    ");
        case "python":
            return '"""'.concat(meshName, ' mesh component for ModernGL"""\nimport moderngl\nfrom .').concat(meshName, "Geometry import ").concat(meshName, "Geometry\n\nclass ").concat(meshName, ':\n    """').concat(meshName, ' mesh for ModernGL rendering"""\n    \n    def __init__(self, ctx: moderngl.Context, material=None):\n        self.ctx = ctx\n        self.material = material\n        self.geometry = ').concat(meshName, 'Geometry()\n        self.vao = None\n        \n    def setup_vao(self, program: moderngl.Program):\n        """Setup vertex array object with the given shader program"""\n        self.vao = self.geometry.create_vao(self.ctx, program)\n    \n    def render(self, projection_matrix, view_matrix):\n        """Render the mesh"""\n        if self.vao and self.material:\n            self.material.use()\n            # Set matrices if available\n            if hasattr(self.material, \'set_matrix\'):\n                self.material.set_matrix(\'projection\', projection_matrix)\n                self.material.set_matrix(\'view\', view_matrix)\n            self.vao.render(moderngl.TRIANGLES)\n');
        case "java":
            return "/**\n * ".concat(meshName, " mesh component for LWJGL OpenGL\n */\npublic class ").concat(meshName, " {\n    private ").concat(meshName, "Geometry geometry;\n    private Material material;\n    \n    public ").concat(meshName, "(Material material) {\n        this.geometry = new ").concat(meshName, "Geometry();\n        this.material = material;\n    }\n    \n    public void render() {\n        if (material != null) {\n            material.use();\n        }\n        geometry.render();\n    }\n    \n    public void cleanup() {\n        geometry.cleanup();\n    }\n    \n    public ").concat(meshName, "Geometry getGeometry() {\n        return geometry;\n    }\n    \n    public void setMaterial(Material material) {\n        this.material = material;\n    }\n}\n");
        case "cpp":
            return '#pragma once\n    #include "geometry/'.concat(meshName, 'Geometry.h"\n\n    /**\n     * ').concat(meshName, " mesh component for OpenGL with geometry\n     */\n    class ").concat(meshName, " {\n    private:\n        ").concat(meshName, "Geometry geometry;\n        Material* material;\n    public:\n        explicit ").concat(meshName, "(Material* mat = nullptr) : geometry(), material(mat) {}\n        \n        void render() {\n            if (material) {\n                material->use();\n            }\n            geometry.render();\n        }\n        \n        ").concat(meshName, "Geometry& getGeometry() {\n            return geometry;\n        }\n        \n        void setMaterial(Material* mat) {\n            material = mat;\n        }\n    };\n    ");
        case "csharp":
            return "using OpenTK.Graphics.OpenGL4;\n\n/// <summary>\n/// ".concat(meshName, " mesh component for OpenTK\n/// </summary>\npublic class ").concat(meshName, " : System.IDisposable\n{\n    private ").concat(meshName, "Geometry _geometry;\n    private Material _material;\n    \n    public ").concat(meshName, "(Material material = null)\n    {\n        _geometry = new ").concat(meshName, "Geometry();\n        _material = material;\n    }\n    \n    public void Render()\n    {\n        _material?.Use();\n        _geometry.Render();\n    }\n    \n    public void Dispose()\n    {\n        _geometry?.Dispose();\n    }\n    \n    public ").concat(meshName, "Geometry Geometry => _geometry;\n    \n    public Material Material\n    {\n        get => _material;\n        set => _material = value;\n    }\n}\n");
        case "php":
            return "<?php\n    /**\n     * ".concat(meshName, " mesh component for PHP-GLFW\n     */\n    class ").concat(meshName, " {\n        private $geometry;\n        private $material;\n        public function __construct($material = null) {\n            $this->geometry = new ").concat(meshName, "Geometry();\n            $this->material = $material;\n        }\n        public function render() {\n            if ($this->material) {\n                $this->material->use();\n            }\n            $this->geometry->render();\n        }\n    }\n    ");
        case "ruby":
            return "# ".concat(meshName, " mesh component for Ruby OpenGL\n    class ").concat(meshName, "\n      def initialize(material = nil)\n        @geometry = ").concat(meshName, "Geometry.new\n        @material = material\n      end\n      def render\n        @material.use if @material\n        @geometry.render\n      end\n    end\n    ");
        case "scala":
            return "/**\n    * ".concat(meshName, " mesh component for LWJGL in Scala\n    */\n    class ").concat(meshName, "(material: Material = null) {\n      private val geometry = new ").concat(meshName, "Geometry()\n      \n      def render(): Unit = {\n        if (material != null) material.use()\n        geometry.render()\n      }\n    }\n    ");
        case "kotlin":
            return "/**\n    * ".concat(meshName, " mesh component for LWJGL in Kotlin\n    */\n    class ").concat(meshName, "(private var material: Material? = null) {\n        private val geometry = ").concat(meshName, "Geometry()\n\n        fun render() {\n            material?.use()\n            geometry.render()\n        }\n    }\n    ");
        case "dart":
            return "/**\n    * ".concat(meshName, " mesh component for OpenGL in Dart\n    */\n    class ").concat(meshName, " {\n      final ").concat(meshName, "Geometry geometry;\n      Material? material;\n\n      ").concat(meshName, "({this.material}) : geometry = ").concat(meshName, "Geometry();\n\n      void render() {\n        material?.use();\n        geometry.render();\n      }\n    }\n    ");
        case "r":
            return "#' ".concat(meshName, " mesh component for R OpenGL\n    #' @export\n    ").concat(meshName, " <- function(material = NULL) {\n      geometry <- ").concat(meshName, "Geometry()\n      \n      list(\n        geometry = geometry,\n        material = material,\n        render = function() {\n          if (!is.null(material)) {\n            do.call(material$use, list())\n          }\n          do.call(geometry$render, list())\n        }\n      )\n    }\n    ");
        case "go":
            return 'package meshes\n\nimport (\n    "github.com/go-gl/gl/v4.1-core/gl"\n    "yourproject/geometry"\n)\n\n// '.concat(meshName, " represents a mesh with geometry only\ntype ").concat(meshName, " struct {\n    geometry *geometry.").concat(meshName, "Geometry\n}\n\n// New").concat(meshName, " creates a new mesh instance\nfunc New").concat(meshName, "() *").concat(meshName, " {\n    return &").concat(meshName, "{\n        geometry: geometry.New").concat(meshName, "Geometry(),\n    }\n}\n\n// Render renders the mesh\nfunc (m *").concat(meshName, ") Render() {\n    m.geometry.Render()\n}\n\n// Cleanup releases OpenGL resources\nfunc (m *").concat(meshName, ") Cleanup() {\n    m.geometry.Cleanup()\n}\n    ");
        case "swift":
            return "import Metal\n\n/// ".concat(meshName, " mesh component for Metal rendering\nclass ").concat(meshName, " {\n    private let geometry: ").concat(meshName, "Geometry\n    \n    init(device: MTLDevice) {\n        self.geometry = ").concat(meshName, "Geometry(device: device)\n    }\n    \n    func render(renderEncoder: MTLRenderCommandEncoder) {\n        geometry.render(renderEncoder: renderEncoder)\n    }\n}");
        case "rust":
            return "\n      use crate::geometry::".concat(meshName, "Geometry;\n      /// ").concat(meshName, " mesh component for wgpu\n      pub struct ").concat(meshName, " {\n          geometry: ").concat(meshName, "Geometry,\n      }\n\n      impl ").concat(meshName, " {\n          pub fn new(device: &wgpu::Device) -> Self {\n              Self {\n                  geometry: ").concat(meshName, "Geometry::new(device),\n              }\n          }\n          \n          pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {\n              self.geometry.render(render_pass);\n          }\n      }\n      ");
        default:
            // Fallback to TypeScript for unsupported languages
            return generateMeshComponent(meshName, _geometry, displayMode, "typescript");
    }
}
/**
 * Generates a material component based on display mode
 * Component name starts with capital letter as required by React
 */ function generateMaterialComponent(materialName, material, displayMode, languageId) {
    let hasNormals = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false, hasUvs = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
    let materialType = "MeshStandardMaterial";
    const properties = [];
    // Determine material type
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) materialType = "MeshBasicMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]) materialType = "MeshPhongMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshLambertMaterial"]) materialType = "MeshLambertMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]) materialType = "MeshNormalMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]) materialType = "MeshDepthMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshMatcapMaterial"]) materialType = "MeshMatcapMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshToonMaterial"]) materialType = "MeshToonMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]) materialType = "MeshPhysicalMaterial";
    // Configure properties based on display mode
    switch(displayMode){
        case "wireframe":
            properties.push("wireframe: true", "transparent: true", "opacity: 0.8");
            break;
        case "solid":
            properties.push("color: 0x888888", "metalness: 0.1", "roughness: 0.8");
            break;
        case "normals":
            materialType = "MeshNormalMaterial";
            break;
        case "depth":
            materialType = "MeshDepthMaterial";
            break;
        case "points":
            materialType = "PointsMaterial";
            properties.push("color: 0x00ff00", "size: 0.01", "sizeAttenuation: true");
            break;
        default:
            if ('color' in material && material.color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]) {
                const color = material.color;
                properties.push("color: new THREE.Color(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ")"));
            }
            if ("roughness" in material) properties.push("roughness: ".concat(material.roughness));
            if ("metalness" in material) properties.push("metalness: ".concat(material.metalness));
            if ("opacity" in material) properties.push("opacity: ".concat(material.opacity));
            if ("transparent" in material) properties.push("transparent: ".concat(material.transparent));
            break;
    }
    switch(languageId){
        case "typescript":
            return "import * as THREE from 'three';\n\n/**\n * ".concat(materialName, " material component\n */\nexport default function ").concat(materialName, "(): THREE.Material {\n  return new THREE.").concat(materialType, "({\n    ").concat(properties.join(",\n    "), "\n  });\n}\n");
        case "javascript":
            return "import * as THREE from 'three';\n    /**\n     * ".concat(materialName, " material component\n     */\n    export default function ").concat(materialName, "() {\n      return new THREE.").concat(materialType, "({\n        ").concat(properties.join(","), "\n      });\n    }\n    ");
        case "python":
            return '"""'.concat(materialName, ' material for ModernGL"""\nimport moderngl\nimport numpy as np\n\nclass ').concat(materialName, ':\n    """').concat(materialName, " material for ModernGL\"\"\"\n    \n    def __init__(self, ctx: moderngl.Context):\n        self.ctx = ctx\n        self.program = self._create_shader_program()\n        \n    def _create_shader_program(self) -> moderngl.Program:\n        vertex_shader = '''\n        #version 330 core\n        in vec3 in_position;\n        ").concat(hasNormals ? "in vec3 in_normal;" : "", "\n        ").concat(hasUvs ? "in vec2 in_uv;" : "", "\n        \n        uniform mat4 projection;\n        uniform mat4 view;\n        uniform mat4 model;\n        \n        out vec3 v_position;\n        ").concat(hasNormals ? "out vec3 v_normal;" : "", "\n        ").concat(hasUvs ? "out vec2 v_uv;" : "", "\n        \n        void main() {\n            v_position = in_position;\n            ").concat(hasNormals ? "v_normal = in_normal;" : "", "\n            ").concat(hasUvs ? "v_uv = in_uv;" : "", "\n            gl_Position = projection * view * model * vec4(in_position, 1.0);\n        }\n        '''\n        \n        fragment_shader = '''\n        #version 330 core\n        in vec3 v_position;\n        ").concat(hasNormals ? "in vec3 v_normal;" : "", "\n        ").concat(hasUvs ? "in vec2 v_uv;" : "", "\n        \n        out vec4 fragColor;\n        \n        void main() {\n            ").concat(displayMode === "wireframe" ? "fragColor = vec4(0.0, 0.0, 0.0, 0.8);" : displayMode === "normals" ? "fragColor = vec4(normalize(v_normal) * 0.5 + 0.5, 1.0);" : displayMode === "points" ? "fragColor = vec4(0.0, 1.0, 0.0, 1.0);" : "fragColor = vec4(0.5, 0.5, 0.5, 1.0);", '\n        }\n        \'\'\'\n        \n        return self.ctx.program(vertex_shader=vertex_shader, fragment_shader=fragment_shader)\n    \n    def use(self):\n        """Activate this material for rendering"""\n        self.program.use()\n        \n    def set_matrix(self, name: str, matrix: np.ndarray):\n        """Set a matrix uniform"""\n        if name in self.program:\n            self.program[name].write(matrix.astype(np.float32).tobytes())\n');
        case "php":
            return "<?php\n    /**\n     * ".concat(materialName, " material component for PHP-GLFW\n     */\n    class ").concat(materialName, " {\n        public function __construct() {\n            // Material setup\n        }\n        public function use() {\n            // Apply material properties\n            ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "glfw".concat(key.charAt(0).toUpperCase() + key.slice(1), "(").concat(value, ");");
            }).join("\n        "), "\n        }\n    }\n    ");
        case "ruby":
            return "# ".concat(materialName, " material component for Ruby OpenGL\n    class ").concat(materialName, "\n      def initialize\n        # Material setup\n      end\n      def use\n        # Apply material properties\n        ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "gl".concat(key.charAt(0).toUpperCase() + key.slice(1), "(").concat(value, ")");
            }).join("\n    "), "\n      end\n    end\n    ");
        case "scala":
            return "/**\n    * ".concat(materialName, " material component for LWJGL in Scala\n    */\n    class ").concat(materialName, " {\n      ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "private val ".concat(key, " = ").concat(value);
            }).join("\n  "), "\n      \n      def use(): Unit = {\n        // Apply material properties\n        ").concat(properties.map((prop)=>{
                const [key] = prop.split(": ");
                return "// Set ".concat(key, " property");
            }).join("\n    "), "\n      }\n    }\n    ");
        case "kotlin":
            return "/**\n    * ".concat(materialName, " material component for LWJGL in Kotlin\n    */\n    class ").concat(materialName, " {\n        ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "private val ".concat(key, " = ").concat(value);
            }).join("\n    "), "\n\n        fun use() {\n            // Apply material properties\n            ").concat(properties.map((prop)=>{
                const [key] = prop.split(": ");
                return "// Set ".concat(key, " property");
            }).join("\n        "), "\n        }\n    }\n    ");
        case "dart":
            return "/**\n    * ".concat(materialName, " material component for OpenGL in Dart\n    */\n    class ").concat(materialName, " implements Material {\n      ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "final $key = $value;";
            }).join("\n  "), "\n\n      @override\n      void use() {\n        // Apply material properties\n        ").concat(properties.map((prop)=>{
                const [key] = prop.split(": ");
                return "// Set $key property";
            }).join("\n    "), "\n      }\n    }\n    ");
        case "r":
            return "#' ".concat(materialName, " material component for R OpenGL\n    #' @export\n    ").concat(materialName, " <- function() {\n      list(\n        use = function() {\n          # Apply material properties\n          ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "# Set ".concat(key, " to ").concat(value);
            }).join("\n      "), "\n        }\n      )\n    }\n    ");
        case "cpp":
            return "#pragma once\n    #include <GL/glew.h>\n\n    /**\n     * ".concat(materialName, " material component for OpenGL\n     */\n    class ").concat(materialName, " {\n    private:\n        ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "float ".concat(key, ";");
            }).join("\n    "), "\n    public:\n        ").concat(materialName, "() {\n            ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "".concat(key, " = ").concat(value, ";");
            }).join("\n        "), "\n        }\n        \n        void use() {\n            // Apply material properties\n            ").concat(properties.map((prop)=>{
                const [key] = prop.split(": ");
                return "// Set ".concat(key, " property");
            }).join("\n        "), "\n        }\n    };\n    ");
        case "go":
            return 'package materials\n\n    import "github.com/go-gl/gl/v4.1-core/gl"\n\n    // '.concat(materialName, " represents a material with properties\n    type ").concat(materialName, " struct {\n        ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "".concat(capitalize(key), " float32");
            }).join("\n    "), "\n    }\n\n    // New").concat(materialName, " creates a new material instance\n    func New").concat(materialName, "() *").concat(materialName, " {\n        return &").concat(materialName, "{\n            ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "".concat(capitalize(key), ": ").concat(value, ",");
            }).join("\n        "), "\n        }\n    }\n\n    // Use activates the material for rendering\n    func (m *").concat(materialName, ") Use() {\n        // Apply material properties\n        ").concat(properties.map((prop)=>{
                const [key] = prop.split(": ");
                return "// Set ".concat(key, " property");
            }).join("\n    "), "\n    }\n    ");
        case "rust":
            return "/// ".concat(materialName, " material component for wgpu\n    pub struct ").concat(materialName, " {\n        ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "pub ".concat(key, ": f32,");
            }).join("\n    "), "\n    }\n\n    impl ").concat(materialName, " {\n        pub fn new() -> Self {\n            Self {\n                ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "".concat(key, ": ").concat(value, ",");
            }).join("\n            "), "\n            }\n        }\n        \n        pub fn bind<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {\n            // Apply material properties\n            ").concat(properties.map((prop)=>{
                const [key] = prop.split(": ");
                return "// Set ".concat(key, " property");
            }).join("\n        "), "\n        }\n    }\n    ");
        case "swift":
            return "import Metal\n\n    /// ".concat(materialName, " material component for Metal\n    class ").concat(materialName, " {\n        ").concat(properties.map((prop)=>{
                const [key, value] = prop.split(": ");
                return "private var ".concat(key, ": Float = ").concat(value);
            }).join("\n    "), "\n        \n        init() {\n            // Material initialization\n        }\n        \n        func use(renderEncoder: MTLRenderCommandEncoder) {\n            // Apply material properties\n            ").concat(properties.map((prop)=>{
                const [key] = prop.split(": ");
                return "// Set ".concat(key, " property");
            }).join("\n        "), "\n        }\n    }\n    ");
        default:
            // Fallback to TypeScript for unsupported languages
            return generateMaterialComponent(materialName, material, displayMode, "typescript", hasNormals, hasUvs);
    }
}
/**
 * Generates the main index component that assembles all parts
 * Component name starts with capital letter as required by React
 */ function generateIndexComponent(componentName, meshes, materials, displayMode, languageId) {
    const lang = LANGUAGES[languageId];
    switch(languageId){
        case "typescript":
            const meshImports = meshes.map((mesh)=>"import ".concat(mesh.name, " from './meshes/").concat(mesh.name, "';")).join("\n");
            const materialImports = materials.map((material)=>"import ".concat(material.name, " from './materials/").concat(material.name, "';")).join("\n");
            const meshElements = meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "      <".concat(mesh.name, " material={").concat(material.name, "()} />");
            }).join("\n");
            return "import React, { useRef } from 'react';\nimport type { GroupProps } from '@react-three/fiber';\n".concat(meshImports, "\n").concat(materialImports, "\n\ninterface ").concat(componentName, "Props extends GroupProps {\n  [key: string]: any;\n}\n\n/**\n * ").concat(componentName, " component\n * Main component that assembles all mesh and material parts\n */\nexport default function ").concat(componentName, "(props: ").concat(componentName, "Props) {\n  const ref = useRef<THREE.Group>(null);\n  \n  return (\n    <group ref={ref} {...props}>\n").concat(meshElements, "\n    </group>\n  );\n}\n");
        case "javascript":
            const meshImportsJS = meshes.map((mesh)=>"import ".concat(mesh.name, " from './meshes/").concat(mesh.name, "';")).join("\n");
            const materialImportsJS = materials.map((material)=>"import ".concat(material.name, " from './materials/").concat(material.name, "';")).join("\n");
            const meshElementsJS = meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "      <".concat(mesh.name, " material={").concat(material.name, "()} />");
            }).join("\n");
            return "import React, { useRef } from 'react';\n    import { Group } from '@react-three/fiber';\n    ".concat(meshImportsJS, "\n    ").concat(materialImportsJS, "\n    /**\n     * ").concat(componentName, " component\n     */\n    export default function ").concat(componentName, "(props) {\n      const ref = useRef(null);\n      return (\n        <group ref={ref} {...props}>\n    ").concat(meshElementsJS, "\n        </group>\n      );\n    }\n    ");
        case "python":
            return '"""'.concat(componentName, ' main component for ModernGL"""\nimport moderngl\nimport numpy as np\nfrom typing import List, Optional\n').concat(meshes.map((mesh)=>"from .meshes.".concat(mesh.name, " import ").concat(mesh.name)).join("\n"), "\n").concat(materials.map((material)=>"from .materials.".concat(material.name, " import ").concat(material.name)).join("\n"), "\n\nclass ").concat(componentName, ':\n    """').concat(componentName, ' component for ModernGL"""\n    \n    def __init__(self, ctx: moderngl.Context):\n        self.ctx = ctx\n        self.meshes: List = []\n        self._setup_meshes()\n        \n    def _setup_meshes(self):\n        """Initialize all meshes with their materials"""\n        ').concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "# Create ".concat(mesh.name, "\n        ").concat(mesh.name.toLowerCase(), "_material = ").concat(material.name, "(self.ctx)\n        ").concat(mesh.name.toLowerCase(), "_mesh = ").concat(mesh.name, "(self.ctx, ").concat(mesh.name.toLowerCase(), "_material)\n        self.meshes.append(").concat(mesh.name.toLowerCase(), "_mesh)");
            }).join("\n        "), '\n    \n    def render(self, projection_matrix: np.ndarray, view_matrix: np.ndarray, model_matrix: Optional[np.ndarray] = None):\n        """Render all meshes"""\n        if model_matrix is None:\n            model_matrix = np.eye(4, dtype=np.float32)\n            \n        for mesh in self.meshes:\n            mesh.render(projection_matrix, view_matrix)\n');
        case "java":
            return "/**\n * ".concat(componentName, " main component for LWJGL OpenGL\n */\n").concat(meshes.map((mesh)=>"import meshes.".concat(mesh.name, ";")).join("\n"), "\n").concat(materials.map((material)=>"import materials.".concat(material.name, ";")).join("\n"), "\n\npublic class ").concat(componentName, " {\n    ").concat(meshes.map((mesh, i)=>"private ".concat(mesh.name, " ").concat(mesh.name.toLowerCase(), ";")).join("\n    "), "\n    \n    public ").concat(componentName, "() {\n        setupMeshes();\n    }\n    \n    private void setupMeshes() {\n        ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "".concat(mesh.name.toLowerCase(), " = new ").concat(mesh.name, "(new ").concat(material.name, "());");
            }).join("\n        "), "\n    }\n    \n    public void render() {\n        ").concat(meshes.map((mesh)=>"".concat(mesh.name.toLowerCase(), ".render();")).join("\n        "), "\n    }\n    \n    public void cleanup() {\n        ").concat(meshes.map((mesh)=>"".concat(mesh.name.toLowerCase(), ".cleanup();")).join("\n        "), "\n    }\n}\n");
        case "csharp":
            return "using System;\nusing System.Collections.Generic;\n".concat(meshes.map((mesh)=>"using Meshes;").join("\n"), "\n").concat(materials.map((material)=>"using Materials;").join("\n"), "\n\n/// <summary>\n/// ").concat(componentName, " main component for OpenTK\n/// </summary>\npublic class ").concat(componentName, " : IDisposable\n{\n    ").concat(meshes.map((mesh, i)=>"private ".concat(mesh.name, " _").concat(mesh.name.toLowerCase(), ";")).join("\n    "), "\n    \n    public ").concat(componentName, "()\n    {\n        SetupMeshes();\n    }\n    \n    private void SetupMeshes()\n    {\n        ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "_".concat(mesh.name.toLowerCase(), " = new ").concat(mesh.name, "(new ").concat(material.name, "());");
            }).join("\n        "), "\n    }\n    \n    public void Render()\n    {\n        ").concat(meshes.map((mesh)=>"_".concat(mesh.name.toLowerCase(), ".Render();")).join("\n        "), "\n    }\n    \n    public void Dispose()\n    {\n        ").concat(meshes.map((mesh)=>"_".concat(mesh.name.toLowerCase(), "?.Dispose();")).join("\n        "), "\n    }\n}\n");
        case "cpp":
            return "#pragma once\n#include <vector>\n#include <memory>\n".concat(meshes.map((mesh)=>'#include "meshes/'.concat(mesh.name, '.h"')).join("\n"), "\n").concat(materials.map((material)=>'#include "materials/'.concat(material.name, '.h"')).join("\n"), "\n\n/**\n * ").concat(componentName, " main component for OpenGL\n */\nclass ").concat(componentName, " {\nprivate:\n    ").concat(meshes.map((mesh, i)=>"std::unique_ptr<".concat(mesh.name, "> ").concat(mesh.name.toLowerCase(), ";")).join("\n    "), "\n    \npublic:\n    ").concat(componentName, "() {\n        setupMeshes();\n    }\n    \n    ~").concat(componentName, "() {\n        cleanup();\n    }\n    \nprivate:\n    void setupMeshes() {\n        ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "".concat(mesh.name.toLowerCase(), " = std::make_unique<").concat(mesh.name, ">(std::make_unique<").concat(material.name, ">());");
            }).join("\n        "), "\n    }\n    \npublic:\n    void render() {\n        ").concat(meshes.map((mesh)=>"if (".concat(mesh.name.toLowerCase(), ") ").concat(mesh.name.toLowerCase(), "->render();")).join("\n        "), "\n    }\n    \n    void cleanup() {\n        ").concat(meshes.map((mesh)=>"".concat(mesh.name.toLowerCase(), ".reset();")).join("\n        "), "\n    }\n};\n");
        case "go":
            return "package main\n\n".concat(meshes.map((mesh)=>'import "./meshes"').join("\n"), "\n").concat(materials.map((material)=>'import "./materials"').join("\n"), "\n\n// ").concat(componentName, " represents the main 3D component\ntype ").concat(componentName, " struct {\n    ").concat(meshes.map((mesh, i)=>"".concat(mesh.name.toLowerCase(), " *meshes.").concat(mesh.name)).join("\n    "), "\n}\n\n// New").concat(componentName, " creates a new ").concat(componentName, " instance\nfunc New").concat(componentName, "() *").concat(componentName, " {\n    component := &").concat(componentName, "{}\n    component.setupMeshes()\n    return component\n}\n\nfunc (c *").concat(componentName, ") setupMeshes() {\n    ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "c.".concat(mesh.name.toLowerCase(), " = meshes.New").concat(mesh.name, "(materials.New").concat(material.name, "())");
            }).join("\n    "), "\n}\n\n// Render renders all meshes in the component\nfunc (c *").concat(componentName, ") Render() {\n    ").concat(meshes.map((mesh)=>"if c.".concat(mesh.name.toLowerCase(), " != nil {\n        c.").concat(mesh.name.toLowerCase(), ".Render()\n    }")).join("\n    "), "\n}\n\n// Cleanup cleans up all resources\nfunc (c *").concat(componentName, ") Cleanup() {\n    ").concat(meshes.map((mesh)=>"if c.".concat(mesh.name.toLowerCase(), " != nil {\n        c.").concat(mesh.name.toLowerCase(), ".Cleanup()\n    }")).join("\n    "), "\n}\n");
        case "rust":
            return "".concat(meshes.map((mesh)=>"use crate::meshes::".concat(mesh.name.toLowerCase(), "::").concat(mesh.name, ";")).join("\n"), "\n").concat(materials.map((material)=>"use crate::materials::".concat(material.name.toLowerCase(), "::").concat(material.name, ";")).join("\n"), "\nuse wgpu::Device;\n\n/// ").concat(componentName, " main component for wgpu\npub struct ").concat(componentName, " {\n    ").concat(meshes.map((mesh, i)=>"".concat(mesh.name.toLowerCase(), ": ").concat(mesh.name, ",")).join("\n    "), "\n}\n\nimpl ").concat(componentName, " {\n    pub fn new(device: &Device) -> Self {\n        Self {\n            ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "".concat(mesh.name.toLowerCase(), ": ").concat(mesh.name, "::new(device, ").concat(material.name, "::new(device)),");
            }).join("\n            "), "\n        }\n    }\n    \n    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {\n        ").concat(meshes.map((mesh)=>"self.".concat(mesh.name.toLowerCase(), ".render(render_pass);")).join("\n        "), "\n    }\n}\n");
        case "swift":
            return "import Metal\n".concat(meshes.map((mesh)=>"import Meshes").join("\n"), "\n").concat(materials.map((material)=>"import Materials").join("\n"), "\n\n/// ").concat(componentName, " main component for Metal\nclass ").concat(componentName, " {\n    ").concat(meshes.map((mesh, i)=>"private let ".concat(mesh.name.toLowerCase(), ": ").concat(mesh.name)).join("\n    "), "\n    \n    init(device: MTLDevice) {\n        ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "".concat(mesh.name.toLowerCase(), " = ").concat(mesh.name, "(device: device, material: ").concat(material.name, "(device: device))");
            }).join("\n        "), "\n    }\n    \n    func render(renderEncoder: MTLRenderCommandEncoder) {\n        ").concat(meshes.map((mesh)=>"".concat(mesh.name.toLowerCase(), ".render(renderEncoder: renderEncoder)")).join("\n        "), "\n    }\n}\n");
        case "php":
            return "<?php\n    /**\n     * ".concat(componentName, " main component for PHP-GLFW\n     */\n    class ").concat(componentName, " {\n        ").concat(meshes.map((mesh, i)=>"private $".concat(mesh.name.toLowerCase(), ";")).join("\n    "), "\n        public function __construct() {\n            $this->setupMeshes();\n        }\n        private function setupMeshes() {\n            ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "$this->".concat(mesh.name.toLowerCase(), " = new ").concat(mesh.name, "(new ").concat(material.name, "());");
            }).join("\n        "), "\n        }\n        public function render() {\n            ").concat(meshes.map((mesh)=>"$this->".concat(mesh.name.toLowerCase(), "->render();")).join("\n        "), "\n        }\n    }\n    ");
        case "ruby":
            return "# ".concat(componentName, " main component for Ruby OpenGL\n    class ").concat(componentName, "\n      ").concat(meshes.map((mesh, i)=>"attr_reader :".concat(mesh.name.toLowerCase())).join("\n  "), "\n      def initialize\n        setup_meshes\n      end\n      private\n      def setup_meshes\n        ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "@#{mesh.name.toLowerCase()} = #{mesh.name}.new(#{material.name}.new)";
            }).join("\n    "), "\n      end\n      public\n      def render\n        ").concat(meshes.map((mesh)=>"@#{mesh.name.toLowerCase()}.render").join("\n    "), "\n      end\n    end\n    ");
        case "scala":
            return "/**\n    * ".concat(componentName, " main component for LWJGL in Scala\n    */\n    class ").concat(componentName, " {\n      ").concat(meshes.map((mesh, i)=>"private val ".concat(mesh.name.toLowerCase(), " = new ").concat(mesh.name, "()")).join("\n  "), "\n      \n      def render(): Unit = {\n        ").concat(meshes.map((mesh)=>"${mesh.name.toLowerCase()}.render()").join("\n    "), "\n      }\n    }\n    ");
        case "kotlin":
            return "/**\n      * ".concat(componentName, " main component for LWJGL in Kotlin\n      */\n      class ").concat(componentName, " {\n          ").concat(meshes.map((mesh, i)=>"private val ".concat(mesh.name.toLowerCase(), " = ").concat(mesh.name, "()")).join("\n    "), "\n\n          fun render() {\n              ").concat(meshes.map((mesh)=>"${mesh.name.toLowerCase()}.render()").join("\n        "), "\n          }\n      }\n      ");
        case "dart":
            return "/**\n    * ".concat(componentName, " main component for OpenGL in Dart\n    */\n    class ").concat(componentName, " {\n      ").concat(meshes.map((mesh, i)=>"final ".concat(mesh.name, " ").concat(mesh.name.toLowerCase(), ";")).join("\n  "), "\n\n      ").concat(componentName, "() {\n        ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "${mesh.name.toLowerCase()} = ${mesh.name}(material: ${material.name}());";
            }).join("\n    "), "\n      }\n\n      void render() {\n        ").concat(meshes.map((mesh)=>"${mesh.name.toLowerCase()}.render();").join("\n    "), "\n      }\n    }\n    ");
        case "r":
            return "#' ".concat(componentName, " main component for R OpenGL\n    #' @export\n    ").concat(componentName, " <- function() {\n      # Create meshes\n      ").concat(meshes.map((mesh, i)=>{
                const material = materials[i % materials.length];
                return "".concat(mesh.name.toLowerCase(), " <- ").concat(mesh.name, "(material = ").concat(material.name, "())");
            }).join("\n  "), "\n      \n      # Return component\n      list(\n        ").concat(meshes.map((mesh)=>"".concat(mesh.name.toLowerCase(), " = ").concat(mesh.name.toLowerCase())).join(",\n    "), "\n        render = function() {\n          ").concat(meshes.map((mesh)=>"do.call(".concat(mesh.name.toLowerCase(), "$render, list())")).join("\n      "), "\n        }\n      )\n    }\n    ");
        default:
            // Fallback to TypeScript for unsupported languages
            return generateIndexComponent(componentName, meshes, materials, displayMode, "typescript");
    }
}
// Fix the generateExamplePage function around line 900 to ensure proper file extensions
function generateExamplePage(componentName, languageId) {
    const lang = LANGUAGES[languageId];
    switch(languageId){
        case "typescript":
            return "import React from 'react';\nimport { Canvas } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\nimport ".concat(componentName, " from '@/components/").concat(componentName, "';\n\n/**\n * Example page demonstrating how to use the ").concat(componentName, " component\n */\nexport default function ").concat(componentName, 'Page() {\n  return (\n    <div className="w-full h-screen">\n      <Canvas \n        camera={{ position: [0, 0, 5], fov: 50 }}\n        gl={{\n          powerPreference: "high-performance",\n          antialias: true,\n          alpha: true\n        }}\n      >\n        <ambientLight intensity={0.5} />\n        <pointLight position={[10, 10, 10]} />\n        <').concat(componentName, ' />\n        <OrbitControls \n          enableZoom\n          enablePan\n          enableRotate\n          minDistance={0.1}\n          maxDistance={100}\n        />\n        <Environment preset="studio" />\n      </Canvas>\n    </div>\n  );\n}\n');
        case "javascript":
            return "import React from 'react';\n    import { Canvas } from '@react-three/fiber';\n    import { OrbitControls, Environment } from '@react-three/drei';\n    import ".concat(componentName, " from '@/components/").concat(componentName, "';\n    /**\n     * Example page for ").concat(componentName, "\n     */\n    export default function ").concat(componentName, 'Page() {\n      return (\n        <div className="w-full h-screen">\n          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>\n            <ambientLight intensity={0.5} />\n            <pointLight position={[10, 10, 10]} />\n            <').concat(componentName, ' />\n            <OrbitControls enableZoom enablePan enableRotate />\n            <Environment preset="studio" />\n          </Canvas>\n        </div>\n      );\n    }\n    ');
        case "python":
            return '"""Example application for '.concat(componentName, '"""\nimport pyglet\nimport moderngl\nimport numpy as np\nfrom pyglet.window import key\nfrom pyrr import Matrix44\nfrom .').concat(componentName, " import ").concat(componentName, "\n\nclass ").concat(componentName, 'App:\n    """Example application for ModernGL implementation"""\n    \n    def __init__(self, width: int = 800, height: int = 600):\n        self.window = pyglet.window.Window(width, height, caption=\'').concat(componentName, " Viewer')\n        self.ctx = moderngl.create_context()\n        \n        # Create matrices\n        self.projection = Matrix44.perspective_projection(50, width/height, 0.1, 1000)\n        self.view = Matrix44.look_at([0, 0, 5], [0, 0, 0], [0, 1, 0])\n        \n        # Create the 3D component\n        self.scene = ").concat(componentName, '(self.ctx)\n        \n        # Animation state\n        self.rotation = 0\n        \n        # Set up event handlers\n        self.window.event(self.on_draw)\n        self.window.event(self.on_resize)\n        self.window.event(self.on_key_press)\n        \n    def on_draw(self):\n        """Handle window draw event"""\n        self.window.clear()\n        self.ctx.enable(moderngl.DEPTH_TEST)\n        \n        # Update rotation\n        self.rotation += 0.5\n        model = Matrix44.from_y_rotation(np.radians(self.rotation))\n        \n        # Render the scene\n        self.scene.render(self.projection, self.view, model)\n        \n    def on_resize(self, width: int, height: int):\n        """Handle window resize event"""\n        self.projection = Matrix44.perspective_projection(50, width/height, 0.1, 1000)\n        \n    def on_key_press(self, symbol: int, modifiers: int):\n        """Handle key press events"""\n        if symbol == key.ESCAPE:\n            pyglet.app.exit()\n            \n    def run(self):\n        """Start the application"""\n        pyglet.app.run()\n\nif __name__ == \'__main__\':\n    app = ').concat(componentName, "App()\n    app.run()\n");
        case "java":
            return "/**\n * Example application for ".concat(componentName, " using LWJGL\n */\nimport ").concat(componentName, ";\nimport org.lwjgl.glfw.GLFW;\nimport org.lwjgl.opengl.GL;\nimport static org.lwjgl.opengl.GL11.*;\n\npublic class ").concat(componentName, "App {\n    private long window;\n    private ").concat(componentName, ' model;\n    \n    public void run() {\n        init();\n        loop();\n        cleanup();\n    }\n    \n    private void init() {\n        // Initialize GLFW\n        if (!GLFW.glfwInit()) {\n            throw new IllegalStateException("Unable to initialize GLFW");\n        }\n        \n        // Create window\n        window = GLFW.glfwCreateWindow(800, 600, "').concat(componentName, ' Viewer", 0, 0);\n        if (window == 0) {\n            throw new RuntimeException("Failed to create the GLFW window");\n        }\n        \n        GLFW.glfwMakeContextCurrent(window);\n        GL.createCapabilities();\n        \n        // Initialize model\n        model = new ').concat(componentName, "();\n        \n        // Enable depth testing\n        glEnable(GL_DEPTH_TEST);\n    }\n    \n    private void loop() {\n        while (!GLFW.glfwWindowShouldClose(window)) {\n            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\n            \n            // Render model\n            model.render();\n            \n            GLFW.glfwSwapBuffers(window);\n            GLFW.glfwPollEvents();\n        }\n    }\n    \n    private void cleanup() {\n        model.cleanup();\n        GLFW.glfwTerminate();\n    }\n    \n    public static void main(String[] args) {\n        new ").concat(componentName, "App().run();\n    }\n}\n");
        case "csharp":
            return "using System;\nusing OpenTK.Graphics.OpenGL4;\nusing OpenTK.Windowing.Common;\nusing OpenTK.Windowing.Desktop;\n\n/// <summary>\n/// Example application for ".concat(componentName, " using OpenTK\n/// </summary>\npublic class ").concat(componentName, "App : GameWindow\n{\n    private ").concat(componentName, " _model;\n    \n    public ").concat(componentName, 'App() : base(GameWindowSettings.Default, \n        new NativeWindowSettings()\n        {\n            Size = new OpenTK.Mathematics.Vector2i(800, 600),\n            Title = "').concat(componentName, ' Viewer"\n        })\n    {\n    }\n    \n    protected override void OnLoad()\n    {\n        base.OnLoad();\n        \n        GL.ClearColor(0.2f, 0.3f, 0.3f, 1.0f);\n        GL.Enable(EnableCap.DepthTest);\n        \n        _model = new ').concat(componentName, "();\n    }\n    \n    protected override void OnRenderFrame(FrameEventArgs e)\n    {\n        base.OnRenderFrame(e);\n        \n        GL.Clear(ClearBufferMask.ColorBufferBit | ClearBufferMask.DepthBufferBit);\n        \n        _model.Render();\n        \n        SwapBuffers();\n    }\n    \n    protected override void OnUnload()\n    {\n        _model?.Dispose();\n        base.OnUnload();\n    }\n    \n    public static void Main()\n    {\n        using var app = new ").concat(componentName, "App();\n        app.Run();\n    }\n}\n");
        case "php":
            return "<?php\n    /**\n     * Example application for ".concat(componentName, " using PHP-GLFW\n     */\n    require_once 'vendor/autoload.php';\n    use GL\\GL;\n    use GL\\Window\\Window;\n    class ").concat(componentName, 'App {\n        private $window;\n        private $model;\n        public function __construct() {\n            $this->init();\n        }\n        private function init() {\n            $this->window = new Window(800, 600, "').concat(componentName, ' Viewer");\n            $this->window->setSwapInterval(1);\n            $this->model = new ').concat(componentName, "();\n        }\n        public function run() {\n            while (!$this->window->shouldClose()) {\n                GL::clear(GL::COLOR_BUFFER_BIT | GL::DEPTH_BUFFER_BIT);\n                // Render model\n                $this->model->render();\n                $this->window->swapBuffers();\n                $this->window->pollEvents();\n            }\n        }\n    }\n    if (php_sapi_name() === 'cli') {\n        $app = new ").concat(componentName, "App();\n        $app->run();\n    }\n    ");
        case "ruby":
            return "# Example application for ".concat(componentName, " using Ruby OpenGL\n    require 'opengl'\n    require 'glut'\n    include Gl, Glu, Glut\n    class ").concat(componentName, 'App\n      def initialize\n        glutInit\n        glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH)\n        glutInitWindowSize(800, 600)\n        glutCreateWindow("').concat(componentName, ' Viewer")\n        glEnable(GL_DEPTH_TEST)\n        @model = ').concat(componentName, ".new\n        glutDisplayFunc(method(:display))\n        glutIdleFunc(method(:idle))\n      end\n      def display\n        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)\n        @model.render\n        glutSwapBuffers\n      end\n      def idle\n        glutPostRedisplay\n      end\n      def run\n        glutMainLoop\n      end\n    end\n    if __FILE__ == $0\n      app = ").concat(componentName, "App.new\n      app.run\n    end\n    ");
        case "scala":
            return "import org.lwjgl.glfw.GLFWErrorCallback\n    import org.lwjgl.opengl.GL\n    /**\n     * Example application for ".concat(componentName, " using LWJGL in Scala\n     */\n    object ").concat(componentName, 'App {\n      def main(args: Array[String]): Unit = {\n        // Setup error callback\n        GLFWErrorCallback.createPrint(System.err).set()\n        \n        // Initialize GLFW\n        if (!glfwInit()) throw new IllegalStateException("Unable to initialize GLFW")\n        \n        // Create window\n        val window = glfwCreateWindow(800, 600, "').concat(componentName, ' Viewer", 0L, 0L)\n        if (window == 0) throw new RuntimeException("Failed to create GLFW window")\n        \n        glfwMakeContextCurrent(window)\n        GL.createCapabilities()\n        \n        // Enable depth testing\n        glEnable(GL_DEPTH_TEST)\n        \n        // Create model\n        val model = new ').concat(componentName, "()\n        \n        // Main loop\n        while (!glfwWindowShouldClose(window)) {\n          glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)\n          \n          // Render model\n          model.render()\n          \n          glfwSwapBuffers(window)\n          glfwPollEvents()\n        }\n        \n        // Cleanup\n        glfwTerminate()\n      }\n    }\n    ");
        case "kotlin":
            return "import org.lwjgl.glfw.GLFWErrorCallback\n    import org.lwjgl.opengl.GL\n    /**\n     * Example application for ".concat(componentName, " using LWJGL in Kotlin\n     */\n    object ").concat(componentName, 'App {\n        @JvmStatic\n        fun main(args: Array<String>) {\n            // Setup error callback\n            GLFWErrorCallback.createPrint(System.err).set()\n\n            // Initialize GLFW\n            if (!glfwInit()) throw IllegalStateException("Unable to initialize GLFW")\n\n            // Create window\n            val window = glfwCreateWindow(800, 600, "').concat(componentName, ' Viewer", 0, 0)\n            if (window == 0L) throw RuntimeException("Failed to create GLFW window")\n\n            glfwMakeContextCurrent(window)\n            GL.createCapabilities()\n\n            // Enable depth testing\n            glEnable(GL_DEPTH_TEST)\n\n            // Create model\n            val model = ').concat(componentName, "()\n\n            // Main loop\n            while (!glfwWindowShouldClose(window)) {\n                glClear(GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT)\n\n                // Render model\n                model.render()\n\n                glfwSwapBuffers(window)\n                glfwPollEvents()\n            }\n\n            // Cleanup\n            glfwTerminate()\n        }\n    }\n    ");
        case "dart":
            return "import 'package:flutter/material.dart';\n    import 'package:opengl/opengl.dart';\n    import 'package:flutter_gl/flutter_gl.dart';\n    /**\n     * Example application for ".concat(componentName, " using Flutter OpenGL\n     */\n    class ").concat(componentName, "Page extends StatefulWidget {\n      @override\n      _").concat(componentName, "PageState createState() => _").concat(componentName, "PageState();\n    }\n\n    class _").concat(componentName, "PageState extends State<").concat(componentName, "Page> {\n      late OpenGLRenderer _renderer;\n      late FlutterGlPlugin _glPlugin;\n      late ").concat(componentName, " _model;\n      double _rotation = 0.0;\n\n      @override\n      void initState() {\n        super.initState();\n        _glPlugin = FlutterGlPlugin();\n        _glPlugin.initialize().then((_) {\n          _renderer = OpenGLRenderer(_glPlugin);\n          _model = ").concat(componentName, "();\n          _startAnimation();\n        });\n      }\n\n      void _startAnimation() {\n        Future.delayed(Duration(milliseconds: 16), () {\n          if (mounted) {\n            _rotation += 0.01;\n            setState(() {});\n            _startAnimation();\n          }\n        });\n      }\n\n      @override\n      Widget build(BuildContext context) {\n        return Scaffold(\n          appBar: AppBar(title: Text('").concat(componentName, " Viewer')),\n          body: Builder(\n            builder: (context) => GestureDetector(\n              onPanUpdate: (details) => setState(() => _rotation += details.delta.dx * 0.01),\n              child: CustomPaint(\n                painter: _").concat(componentName, "Painter(_renderer, _model, _rotation),\n                size: Size.infinite,\n              ),\n            ),\n          ),\n        );\n      }\n\n      @override\n      void dispose() {\n        _glPlugin.dispose();\n        super.dispose();\n      }\n    }\n\n    class _").concat(componentName, "Painter extends CustomPainter {\n      final OpenGLRenderer renderer;\n      final ").concat(componentName, " model;\n      final double rotation;\n\n      _").concat(componentName, "Painter(this.renderer, this.model, this.rotation);\n\n      @override\n      void paint(Canvas canvas, Size size) {\n        renderer.render((gl) {\n          gl.clearColor(0.2, 0.3, 0.3, 1.0);\n          gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\n          gl.enable(GL_DEPTH_TEST);\n          \n          // Render model\n          model.render();\n        });\n      }\n\n      @override\n      bool shouldRepaint(_) => true;\n    }\n    ");
        case "r":
            return "#' Example application for ".concat(componentName, " using R OpenGL\n    #' @importFrom OpenGL gl\n    #' @importFrom magick image_read\n    library(OpenGL)\n    library(magick)\n\n    #' Initialize OpenGL context\n    initGL <- function(width = 800, height = 600) {\n      # Create window\n      glInit(\"R 3D Viewer\", width, height)\n      \n      # Setup viewport\n      glViewport(0, 0, width, height)\n      \n      # Enable depth testing\n      glEnable(GL_DEPTH_TEST)\n      \n      # Set clear color\n      glClearColor(0.2, 0.3, 0.3, 1.0)\n    }\n\n    #' Main rendering loop\n    renderLoop <- function(model, rotation = 0) {\n      # Clear buffers\n      glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)\n      \n      # Render model\n      do.call(model$render, list())\n      \n      # Swap buffers\n      glSwapBuffers()\n      \n      # Update rotation\n      rotation <- (rotation + 0.5) %% 360\n      \n      # Continue loop\n      Sys.sleep(0.016)\n      renderLoop(model, rotation)\n    }\n\n    #' Main application function\n    main <- function() {\n      # Initialize OpenGL\n      initGL()\n      \n      # Create model\n      model <- ").concat(componentName, "()\n      \n      # Start rendering loop\n      renderLoop(model)\n    }\n\n    # Run application if script is executed directly\n    if (sys.frames() == 0) {\n      main()\n    }\n    ");
        case "cpp":
            return '#include <GL/glew.h>\n    #include <GLFW/glfw3.h>\n    #include "components/'.concat(componentName, '.h"\n\n    /**\n     * Example application for ').concat(componentName, ' using OpenGL\n     */\n    int main() {\n        // Initialize GLFW\n        if (!glfwInit()) {\n            return -1;\n        }\n        \n        // Create window\n        GLFWwindow* window = glfwCreateWindow(800, 600, "').concat(componentName, ' Viewer", NULL, NULL);\n        if (!window) {\n            glfwTerminate();\n            return -1;\n        }\n        \n        glfwMakeContextCurrent(window);\n        glewInit();\n        \n        // Enable depth testing\n        glEnable(GL_DEPTH_TEST);\n        \n        // Create model\n        ').concat(componentName, " model;\n        \n        // Main loop\n        while (!glfwWindowShouldClose(window)) {\n            // Clear the screen\n            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\n            \n            // Set up perspective projection\n            // (In a real application, you would set up matrices here)\n            \n            // Render model\n            model.render();\n            \n            // Swap buffers and poll events\n            glfwSwapBuffers(window);\n            glfwPollEvents();\n        }\n        \n        // Cleanup\n        glfwTerminate();\n        return 0;\n    }\n    ");
        case "go":
            return 'package main\n\n    import (\n        "github.com/go-gl/gl/v4.1-core/gl"\n        "github.com/go-gl/glfw/v3.3/glfw"\n        "yourproject/components"\n        "runtime"\n    )\n\n    // initGlfw initializes GLFW and returns a Window\n    func initGlfw() *glfw.Window {\n        if err := glfw.Init(); err != nil {\n            panic(err)\n        }\n        glfw.WindowHint(glfw.Resizable, glfw.True)\n        glfw.WindowHint(glfw.ContextVersionMajor, 4)\n        glfw.WindowHint(glfw.ContextVersionMinor, 1)\n        glfw.WindowHint(glfw.OpenGLProfile, glfw.OpenGLCoreProfile)\n        glfw.WindowHint(glfw.OpenGLForwardCompatible, glfw.True)\n\n        window, err := glfw.CreateWindow(800, 600, "'.concat(componentName, ' Viewer", nil, nil)\n        if err != nil {\n            panic(err)\n        }\n        window.MakeContextCurrent()\n\n        return window\n    }\n\n    // initOpenGL initializes OpenGL\n    func initOpenGL() {\n        if err := gl.Init(); err != nil {\n            panic(err)\n        }\n        version := gl.GoStr(gl.GetString(gl.VERSION))\n        println("OpenGL version", version)\n        \n        gl.Enable(gl.DEPTH_TEST)\n        gl.DepthFunc(gl.LESS)\n        gl.ClearColor(0.2, 0.3, 0.3, 1.0)\n    }\n\n    func main() {\n        runtime.LockOSThread()\n        \n        window := initGlfw()\n        initOpenGL()\n        \n        // Create model\n        model := components.New').concat(componentName, "()\n        \n        // Main loop\n        for !window.ShouldClose() {\n            // Clear the screen\n            gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)\n            \n            // Render model\n            model.Render()\n            \n            // Maintenance\n            window.SwapBuffers()\n            glfw.PollEvents()\n        }\n        \n        // Cleanup\n        model.Cleanup()\n    }\n    ");
        case "rust":
            return "use wgpu::SurfaceConfiguration;\n    use winit::{\n        event::*,\n        event_loop::{EventLoop, ControlFlow},\n        window::WindowBuilder,\n    };\n    use ".concat(componentName, ";\n\n    /// Example application for ").concat(componentName, " using wgpu\n    struct State {\n        surface: wgpu::Surface,\n        device: wgpu::Device,\n        queue: wgpu::Queue,\n        config: SurfaceConfiguration,\n        size: winit::dpi::PhysicalSize<u32>,\n        model: ").concat(componentName, ",\n    }\n\n    impl State {\n        async fn new(window: &winit::window::Window) -> Self {\n            let size = window.inner_size();\n            \n            // The instance is a handle to our GPU\n            let instance = wgpu::Instance::new(wgpu::Backends::all());\n            let surface = unsafe { instance.create_surface(window) };\n            let adapter = instance.request_adapter(\n                &wgpu::RequestAdapterOptions {\n                    power_preference: wgpu::PowerPreference::HighPerformance,\n                    compatible_surface: Some(&surface),\n                    force_fallback_adapter: false,\n                },\n            ).await.unwrap();\n            \n            let (device, queue) = adapter.request_device(\n                &wgpu::DeviceDescriptor {\n                    features: wgpu::Features::empty(),\n                    limits: wgpu::Limits::default(),\n                    label: None,\n                },\n                None,\n            ).await.unwrap();\n            \n            let config = wgpu::SurfaceConfiguration {\n                usage: wgpu::TextureUsages::RENDER_ATTACHMENT,\n                format: surface.get_preferred_format(&adapter).unwrap(),\n                width: size.width,\n                height: size.height,\n                present_mode: wgpu::PresentMode::Fifo,\n            };\n            surface.configure(&device, &config);\n            \n            let model = ").concat(componentName, '::new(&device);\n            \n            Self {\n                surface,\n                device,\n                queue,\n                config,\n                size,\n                model,\n            }\n        }\n        \n        fn resize(&mut self, new_size: winit::dpi::PhysicalSize<u32>) {\n            if new_size.width > 0 && new_size.height > 0 {\n                self.size = new_size;\n                self.config.width = new_size.width;\n                self.config.height = new_size.height;\n                self.surface.configure(&self.device, &self.config);\n            }\n        }\n        \n        fn render(&mut self) -> Result<(), wgpu::SurfaceError> {\n            let output = self.surface.get_current_frame()?.output;\n            let view = output.texture.create_view(&wgpu::TextureViewDescriptor::default());\n            \n            let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor {\n                label: Some("').concat(componentName, ' Encoder"),\n            });\n            \n            {\n                let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {\n                    label: Some("').concat(componentName, ' Render Pass"),\n                    color_attachments: &[wgpu::RenderPassColorAttachment {\n                        view: &view,\n                        resolve_target: None,\n                        ops: wgpu::Operations {\n                            load: wgpu::LoadOp::Clear(wgpu::Color {\n                                r: 0.2,\n                                g: 0.3,\n                                b: 0.3,\n                                a: 1.0,\n                            }),\n                            store: true,\n                        },\n                    }],\n                    depth_stencil_attachment: None,\n                });\n                \n                self.model.render(&mut render_pass);\n            }\n            \n            self.queue.submit(std::iter::once(encoder.finish()));\n            Ok(())\n        }\n    }\n\n    pub async fn run() {\n        let event_loop = EventLoop::new();\n        let window = WindowBuilder::new()\n            .with_title("').concat(componentName, ' Viewer")\n            .build(&event_loop)\n            .unwrap();\n        \n        let mut state = State::new(&window).await;\n        \n        event_loop.run(move |event, _, control_flow| {\n            match event {\n                Event::WindowEvent {\n                    ref event,\n                    window_id,\n                } if window_id == window.id() => match event {\n                    WindowEvent::CloseRequested => *control_flow = ControlFlow::Exit,\n                    WindowEvent::Resized(physical_size) => {\n                        state.resize(*physical_size);\n                    }\n                    WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {\n                        state.resize(**new_inner_size);\n                    }\n                    _ => {}\n                },\n                Event::RedrawRequested(window_id) if window_id == window.id() => {\n                    if let Err(e) = state.render() {\n                        eprintln!("{:?}", e);\n                        *control_flow = ControlFlow::Exit;\n                        return;\n                    }\n                }\n                Event::MainEventsCleared => {\n                    window.request_redraw();\n                }\n                _ => {}\n            }\n        });\n    }\n\n    fn main() {\n        #[cfg(target_arch = "wasm32")]\n        {\n            std::panic::set_hook(Box::new(console_error_panic_hook::hook));\n            console_log::init().expect("Could not initialize logger");\n            wasm_bindgen_futures::spawn_local(run());\n        }\n        \n        #[cfg(not(target_arch = "wasm32"))]\n        {\n            pollster::block_on(run());\n        }\n    }\n    ');
        case "swift":
            return "import Metal\n    import MetalKit\n    import AppKit\n\n    /// View controller for ".concat(componentName, " example\n    class ").concat(componentName, "ViewController: NSViewController {\n        var renderer: ").concat(componentName, 'Renderer?\n        \n        override func viewDidLoad() {\n            super.viewDidLoad()\n            \n            guard let mtkView = view as? MTKView else {\n                print("View is not an MTKView")\n                return\n            }\n            \n            // Select the device to render with\n            guard let device = MTLCreateSystemDefaultDevice() else {\n                print("Metal is not supported on this device")\n                return\n            }\n            \n            mtkView.device = device\n            mtkView.clearColor = MTLClearColor(red: 0.2, green: 0.3, blue: 0.3, alpha: 1.0)\n            \n            // Create renderer\n            renderer = ').concat(componentName, "Renderer(mtkView: mtkView)\n            renderer?.loadAssets()\n        }\n        \n        override var acceptsFirstResponder: Bool {\n            return true\n        }\n    }\n\n    /// Renderer for ").concat(componentName, "\n    class ").concat(componentName, "Renderer: NSObject {\n        let commandQueue: MTLCommandQueue\n        let mtkView: MTKView\n        var model: ").concat(componentName, "?\n        \n        init(mtkView: MTKView) {\n            self.mtkView = mtkView\n            self.commandQueue = mtkView.device!.makeCommandQueue()!\n            \n            super.init()\n            \n            mtkView.delegate = self\n        }\n        \n        func loadAssets() {\n            // Create the 3D model\n            model = ").concat(componentName, "(device: mtkView.device!)\n        }\n    }\n\n    extension ").concat(componentName, 'Renderer: MTKViewDelegate {\n        func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {\n            // Handle resize if needed\n        }\n        \n        func draw(in view: MTKView) {\n            guard let drawable = view.currentDrawable,\n                  let renderPassDescriptor = view.currentRenderPassDescriptor else {\n                return\n            }\n            \n            let commandBuffer = commandQueue.makeCommandBuffer()\n            let renderEncoder = commandBuffer?.makeRenderCommandEncoder(descriptor: renderPassDescriptor)\n            \n            // Render the model\n            model?.render(renderEncoder: renderEncoder!)\n            \n            renderEncoder?.endEncoding()\n            commandBuffer?.present(drawable)\n            commandBuffer?.commit()\n        }\n    }\n\n    /// macOS application delegate\n    class AppDelegate: NSObject, NSApplicationDelegate {\n        func applicationDidFinishLaunching(_ notification: Notification) {\n            // Create window\n            let window = NSWindow(\n                contentRect: NSRect(x: 0, y: 0, width: 800, height: 600),\n                styleMask: [.titled, .closable, .miniaturizable, .resizable],\n                backing: .buffered,\n                defer: false\n            )\n            window.title = "').concat(componentName, ' Viewer"\n            window.center()\n            window.makeKeyAndOrderFront(nil)\n            \n            // Create Metal view\n            let metalView = MTKView(frame: window.contentView!.bounds)\n            window.contentView?.addSubview(metalView)\n            \n            // Create view controller\n            let viewController = ').concat(componentName, "ViewController()\n            window.contentViewController = viewController\n        }\n    }\n\n    // Entry point\n    let delegate = AppDelegate()\n    NSApplication.shared.delegate = delegate\n    _ = NSApplicationMain(CommandLine.argc, CommandLine.unsafeArgv)\n    ");
        default:
            // Fallback to TypeScript for unsupported languages
            return generateExamplePage(componentName, "typescript");
    }
}
function getLanguageSpecificName(name, languageId) {
    // First sanitize the name
    let safeName = name.replace(/[^a-zA-Z0-9_]/g, "_");
    // Ensure it starts with a letter
    if (!/^[a-zA-Z_]/.test(safeName)) {
        safeName = "_" + safeName;
    }
    // Handle reserved keywords
    const reservedKeywords = [
        "default",
        "function",
        "class",
        "export",
        "import",
        "let",
        "const",
        "var",
        "continue",
        "break",
        "case"
    ];
    if (reservedKeywords.includes(safeName.toLowerCase())) {
        safeName = "_" + safeName;
    }
    switch(languageId){
        case "go":
        case "java":
        case "csharp":
        case "scala":
        case "kotlin":
        case "ruby":
        case "cpp":
        case "rust":
        case "swift":
        case "dart":
            // Convert to PascalCase (MyMaterialName)
            return safeName.replace(/(^|_)(\w)/g, (_, _1, c)=>c.toUpperCase());
        case "typescript":
        case "javascript":
            // Convert to camelCase (myMaterialName)
            return safeName.charAt(0).toLowerCase() + safeName.slice(1).replace(/(_)(\w)/g, (_, _1, c)=>c.toUpperCase());
        case "python":
            // Convert to CamelCase (MyMaterialName)
            return safeName.replace(/(^|_)(\w)/g, (_, _1, c)=>c.toUpperCase());
        case "php":
            // For PHP, class names are typically CamelCase
            return safeName.replace(/(^|_)(\w)/g, (_, _1, c)=>c.toUpperCase());
        case "r":
            // For R, function names are typically snake_case
            return safeName.toLowerCase().replace(/[^a-z0-9]/g, "_");
        default:
            // For other languages, just capitalize the first letter
            return safeName.charAt(0).toUpperCase() + safeName.slice(1);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/uploadbutton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const UploadButton = (param)=>{
    let { label = 'Convert to GLB File', ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: " inline-flex items-center justify-center px-5 py-3 font-medium text-sm text-gray-100 border border-white/20 rounded-xl hover:bg-gray-700 hover:border-gray-600 focus:outline-none transition ",
        ...props,
        children: label
    }, void 0, false, {
        fileName: "[project]/app/components/uploadbutton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = UploadButton;
const __TURBOPACK__default__export__ = UploadButton;
var _c;
__turbopack_context__.k.register(_c, "UploadButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/types/constant.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LANGUAGES": ()=>LANGUAGES,
    "LANGUAGE_SETUP": ()=>LANGUAGE_SETUP
});
const LANGUAGES = [
    {
        id: "typescript",
        name: "TypeScript",
        extension: "tsx",
        geometryExtension: "ts",
        group: "Web"
    },
    {
        id: "javascript",
        name: "JavaScript",
        extension: "jsx",
        geometryExtension: "js",
        group: "Web"
    },
    {
        id: "python",
        name: "Python",
        extension: "py",
        geometryExtension: "py",
        group: "General"
    },
    {
        id: "java",
        name: "Java",
        extension: "java",
        geometryExtension: "java",
        group: "General"
    },
    {
        id: "csharp",
        name: "C#",
        extension: "cs",
        geometryExtension: "cs",
        group: "General"
    },
    {
        id: "cpp",
        name: "C++",
        extension: "cpp",
        geometryExtension: "h",
        group: "Systems"
    },
    {
        id: "go",
        name: "Go",
        extension: "go",
        geometryExtension: "go",
        group: "Systems"
    },
    {
        id: "rust",
        name: "Rust",
        extension: "rs",
        geometryExtension: "rs",
        group: "Systems"
    },
    {
        id: "swift",
        name: "Swift",
        extension: "swift",
        geometryExtension: "swift",
        group: "Mobile"
    },
    {
        id: "kotlin",
        name: "Kotlin",
        extension: "kt",
        geometryExtension: "kt",
        group: "Mobile"
    },
    {
        id: "ruby",
        name: "Ruby",
        extension: "rb",
        geometryExtension: "rb",
        group: "Web"
    },
    {
        id: "php",
        name: "PHP",
        extension: "php",
        geometryExtension: "php",
        group: "Web"
    },
    {
        id: "scala",
        name: "Scala",
        extension: "scala",
        geometryExtension: "scala",
        group: "General"
    },
    {
        id: "dart",
        name: "Dart",
        extension: "dart",
        geometryExtension: "dart",
        group: "Mobile"
    },
    {
        id: "r",
        name: "R",
        extension: "R",
        geometryExtension: "R",
        group: "Data Science"
    }
];
const LANGUAGE_SETUP = {
    typescript: {
        packageManager: "npm",
        dependencies: [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
            "react",
            "react-dom",
            "@types/three"
        ],
        devDependencies: [
            "typescript",
            "@types/react",
            "@types/react-dom"
        ],
        installCommand: "npm install three @react-three/fiber @react-three/drei react react-dom @types/three",
        devInstallCommand: "npm install -D typescript @types/react @types/react-dom",
        setupSteps: [
            "Create a new Next.js project with TypeScript",
            "Install the required dependencies",
            "Extract the downloaded component files to your project",
            "Import and use the component in your pages"
        ],
        importExample: "import {componentName} from '@/components/{componentName}';\nimport { Canvas } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\nexport default function ModelPage() {\n  return (\n    <div className=\"w-full h-screen\">\n      <Canvas camera={{ '{' } position: [0, 0, 5], fov: 50 {'}'} >\n        <ambientLight intensity={0.5} />\n        <pointLight position={[10, 10, 10]} />\n        <{componentName} />\n        <OrbitControls />\n        <Environment preset=\"studio\" />\n      </Canvas>\n    </div>\n  );\n}",
        customizationExample: "// Access individual parts\nimport { MeshName } from '@/components/{componentName}/meshes/MeshName';\nimport { MeshNameGeometry } from '@/components/{componentName}/geometries/MeshNameGeometry';\nimport MaterialName from '@/components/{componentName}/materials/MaterialName';\nfunction CustomModel() {\n  return (\n    <group>\n      <mesh geometry={MeshNameGeometry} material={MaterialName()} />\n    </group>\n  );\n}"
    },
    javascript: {
        packageManager: "npm",
        dependencies: [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
            "react",
            "react-dom"
        ],
        devDependencies: [],
        installCommand: "npm install three @react-three/fiber @react-three/drei react react-dom",
        devInstallCommand: "",
        setupSteps: [
            "Create a new React project",
            "Install the required dependencies",
            "Extract the downloaded component files to your project",
            "Import and use the component in your pages"
        ],
        importExample: "import {componentName} from './components/{componentName}';\nimport { Canvas } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\nexport default function ModelPage() {\n  return (\n    <div className=\"w-full h-screen\">\n      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>\n        <ambientLight intensity={0.5} />\n        <pointLight position={[10, 10, 10]} />\n        <{componentName} />\n        <OrbitControls />\n        <Environment preset=\"studio\" />\n      </Canvas>\n    </div>\n  );\n}",
        customizationExample: "// Access individual parts\nimport { MeshName } from './components/{componentName}/meshes/MeshName';\nimport { MeshNameGeometry } from './components/{componentName}/geometries/MeshNameGeometry';\nimport MaterialName from './components/{componentName}/materials/MaterialName';\nfunction CustomModel() {\n  return (\n    <group>\n      <mesh geometry={MeshNameGeometry} material={MaterialName()} />\n    </group>\n  );\n}"
    },
    python: {
        packageManager: "pip",
        dependencies: [
            "moderngl",
            "pyglet",
            "numpy",
            "pyrr"
        ],
        devDependencies: [],
        installCommand: "pip install moderngl pyglet numpy pyrr",
        devInstallCommand: "",
        setupSteps: [
            "Create a new Python project",
            "Install the required dependencies",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: "from {componentName} import {componentName}\nimport pyglet\nimport moderngl\nfrom pyrr import Matrix44\nclass ModelApp:\n    def __init__(self):\n        self.window = pyglet.window.Window(800, 600, caption='{componentName} Viewer')\n        self.ctx = moderngl.create_context()\n        self.scene = {componentName}(self.ctx)\n    def run(self):\n        pyglet.app.run()\nif __name__ == '__main__':\n    app = ModelApp()\n    app.run()",
        customizationExample: "# Access individual parts\nfrom meshes.MeshName import MeshName\nfrom geometries.MeshNameGeometry import MeshNameGeometry\nfrom materials.MaterialName import MaterialName\nclass CustomModel:\n    def __init__(self, ctx):\n        self.geometry = MeshNameGeometry()\n        self.material = MaterialName(ctx)\n        self.mesh = MeshName(ctx, self.material)"
    },
    java: {
        packageManager: "maven/gradle",
        dependencies: [
            "org.lwjgl:lwjgl:3.3.3",
            "org.lwjgl:lwjgl-opengl:3.3.3",
            "org.lwjgl:lwjgl-glfw:3.3.3"
        ],
        devDependencies: [],
        installCommand: "// Maven\n<dependency>\n    <groupId>org.lwjgl</groupId>\n    <artifactId>lwjgl</artifactId>\n    <version>3.3.3</version>\n</dependency>\n// Gradle\nimplementation 'org.lwjgl:lwjgl:3.3.3'\nimplementation 'org.lwjgl:lwjgl-opengl:3.3.3'",
        devInstallCommand: "",
        setupSteps: [
            "Create a new Java project with Maven or Gradle",
            "Add LWJGL dependencies to your build file",
            "Extract the downloaded component files to your src folder",
            "Run the example application"
        ],
        importExample: "import {componentName};\npublic class ModelApp {\n    public static void main(String[] args) {\n        // Initialize LWJGL and OpenGL context\n        // Create and render the model\n        {componentName} model = new {componentName}();\n        model.render();\n    }\n}",
        customizationExample: "// Access individual parts\nimport meshes.MeshName;\nimport geometries.MeshNameGeometry;\nimport materials.MaterialName;\npublic class CustomModel {\n    private MeshNameGeometry geometry;\n    private MaterialName material;\n    public CustomModel() {\n        this.geometry = new MeshNameGeometry();\n        this.material = new MaterialName();\n    }\n}"
    },
    csharp: {
        packageManager: "NuGet",
        dependencies: [
            "OpenTK",
            "OpenTK.Graphics",
            "OpenTK.Mathematics"
        ],
        devDependencies: [],
        installCommand: "dotnet add package OpenTK --version 4.8.2",
        devInstallCommand: "",
        setupSteps: [
            "Create a new .NET project",
            "Install OpenTK via NuGet",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: "using {componentName};\nusing OpenTK.Graphics.OpenGL4;\nusing OpenTK.Windowing.Desktop;\nclass Program\n{\n    static void Main()\n    {\n        var model = new {componentName}();\n        model.Render();\n    }\n}",
        customizationExample: "// Access individual parts\nusing Meshes;\nusing Geometries;\nusing Materials;\npublic class CustomModel\n{\n    private MeshNameGeometry geometry;\n    private MaterialName material;\n    public CustomModel()\n    {\n        geometry = new MeshNameGeometry();\n        material = new MaterialName();\n    }\n}"
    },
    cpp: {
        packageManager: "vcpkg/conan",
        dependencies: [
            "glew",
            "glfw3",
            "glm"
        ],
        devDependencies: [],
        installCommand: "// vcpkg\nvcpkg install glew glfw3 glm\n// Or with CMake\nfind_package(glfw3 REQUIRED)\nfind_package(GLEW REQUIRED)\nfind_package(glm REQUIRED)",
        devInstallCommand: "",
        setupSteps: [
            "Create a new C++ project with CMake",
            "Install OpenGL dependencies (GLEW, GLFW, GLM)",
            "Extract the downloaded component files to your project",
            "Compile and run the example application"
        ],
        importExample: '#include "{componentName}.h"\n#include <GL/glew.h>\n#include <GLFW/glfw3.h>\nint main() {\n    // Initialize GLFW and OpenGL\n    glfwInit();\n    GLFWwindow* window = glfwCreateWindow(800, 600, "{componentName} Viewer", NULL, NULL);\n    glfwMakeContextCurrent(window);\n    glewInit();\n    {componentName} model;\n    while (!glfwWindowShouldClose(window)) {\n        model.render();\n        glfwSwapBuffers(window);\n        glfwPollEvents();\n    }\n    return 0;\n}',
        customizationExample: '// Access individual parts\n#include "meshes/MeshName.h"\n#include "geometries/MeshNameGeometry.h"\n#include "materials/MaterialName.h"\nclass CustomModel {\nprivate:\n    MeshNameGeometry geometry;\n    MaterialName material;\npublic:\n    CustomModel() : geometry(), material() {}\n    void render() { /* custom rendering */ }\n};'
    },
    go: {
        packageManager: "go mod",
        dependencies: [
            "github.com/go-gl/gl/v4.1-core/gl",
            "github.com/go-gl/glfw/v3.3/glfw",
            "github.com/go-gl/mathgl/mgl32"
        ],
        devDependencies: [],
        installCommand: "go mod init your-project\ngo get github.com/go-gl/gl/v4.1-core/gl\ngo get github.com/go-gl/glfw/v3.3/glfw\ngo get github.com/go-gl/mathgl/mgl32",
        devInstallCommand: "",
        setupSteps: [
            "Create a new Go module",
            "Install OpenGL dependencies",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: 'package main\nimport (\n    "./{componentName}"\n    "github.com/go-gl/gl/v4.1-core/gl"\n    "github.com/go-gl/glfw/v3.3/glfw"\n)\nfunc main() {\n    // Initialize GLFW and OpenGL\n    glfw.Init()\n    defer glfw.Terminate()\n    window, _ := glfw.CreateWindow(800, 600, "{componentName} Viewer", nil, nil)\n    window.MakeContextCurrent()\n    gl.Init()\n    model := {componentName}.New{componentName}()\n    for !window.ShouldClose() {\n        model.Render()\n        window.SwapBuffers()\n        glfw.PollEvents()\n    }\n}',
        customizationExample: '// Access individual parts\nimport (\n    "./meshes"\n    "./geometries"\n    "./materials"\n)\ntype CustomModel struct {\n    geometry *geometries.MeshNameGeometry\n    material *materials.MaterialName\n}\nfunc NewCustomModel() *CustomModel {\n    return &CustomModel{\n        geometry: geometries.NewMeshNameGeometry(),\n        material: materials.NewMaterialName(),\n    }\n}'
    },
    rust: {
        packageManager: "cargo",
        dependencies: [
            "wgpu",
            "winit",
            "bytemuck",
            "glam"
        ],
        devDependencies: [],
        installCommand: '# Add to Cargo.toml\n[dependencies]\nwgpu = "0.18"\nwinit = "0.28"\nbytemuck = "1.14"\nglam = "0.24"',
        devInstallCommand: "",
        setupSteps: [
            "Create a new Rust project with Cargo",
            "Add wgpu dependencies to Cargo.toml",
            "Extract the downloaded component files to your src folder",
            "Run the example application"
        ],
        importExample: "use {componentName}::{componentName};\nuse wgpu::Device;\nuse winit::event_loop::EventLoop;\nfn main() {\n    let event_loop = EventLoop::new();\n    // Initialize wgpu and create device\n    let device = /* initialize device */;\n    let model = {componentName}::new(&device);\n    event_loop.run(move |event, _, control_flow| {\n        // Render model\n        model.render(&mut render_pass);\n    });\n}",
        customizationExample: "// Access individual parts\nuse meshes::MeshName;\nuse geometries::MeshNameGeometry;\nuse materials::MaterialName;\nstruct CustomModel {\n    geometry: MeshNameGeometry,\n    material: MaterialName,\n}\nimpl CustomModel {\n    fn new(device: &Device) -> Self {\n        Self {\n            geometry: MeshNameGeometry::new(device),\n            material: MaterialName::new(device),\n        }\n    }\n}"
    },
    swift: {
        packageManager: "Swift Package Manager",
        dependencies: [
            "Metal",
            "MetalKit",
            "simd"
        ],
        devDependencies: [],
        installCommand: '// Add to Package.swift\ndependencies: [\n    .package(url: "https://github.com/apple/swift-numerics", from: "1.0.0")\n]',
        devInstallCommand: "",
        setupSteps: [
            "Create a new iOS/macOS project",
            "Import Metal and MetalKit frameworks",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: "import {componentName}\nimport Metal\nimport MetalKit\nclass ViewController: UIViewController {\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        guard let device = MTLCreateSystemDefaultDevice() else { return }\n        let model = {componentName}(device: device)\n        // Setup Metal rendering\n    }\n}",
        customizationExample: "// Access individual parts\nimport Meshes\nimport Geometries\nimport Materials\nclass CustomModel {\n    private let geometry: MeshNameGeometry\n    private let material: MaterialName\n    init(device: MTLDevice) {\n        geometry = MeshNameGeometry(device: device)\n        material = MaterialName(device: device)\n    }\n}"
    },
    kotlin: {
        packageManager: "Gradle",
        dependencies: [
            "org.lwjgl:lwjgl:3.3.3",
            "org.lwjgl:lwjgl-opengl:3.3.3"
        ],
        devDependencies: [],
        installCommand: '// build.gradle.kts\ndependencies {\n    implementation("org.lwjgl:lwjgl:3.3.3")\n    implementation("org.lwjgl:lwjgl-opengl:3.3.3")\n}',
        devInstallCommand: "",
        setupSteps: [
            "Create a new Kotlin project with Gradle",
            "Add LWJGL dependencies",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: "import {componentName}\nimport org.lwjgl.opengl.GL\nfun main() {\n    // Initialize LWJGL and OpenGL\n    val model = {componentName}()\n    // Render loop\n    model.render()\n}",
        customizationExample: "// Access individual parts\nimport meshes.MeshName\nimport geometries.MeshNameGeometry\nimport materials.MaterialName\nclass CustomModel {\n    private val geometry = MeshNameGeometry()\n    private val material = MaterialName()\n    fun render() {\n        // Custom rendering logic\n    }\n}"
    },
    ruby: {
        packageManager: "gem",
        dependencies: [
            "opengl",
            "glfw",
            "matrix"
        ],
        devDependencies: [],
        installCommand: "gem install opengl glfw matrix",
        devInstallCommand: "",
        setupSteps: [
            "Install Ruby and required gems",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: "require './{componentName}'\nrequire 'opengl'\nrequire 'glfw'\nclass ModelApp\n  def initialize\n    @model = {componentName}::{componentName}.new\n  end\n  def run\n    # Initialize OpenGL and render\n    @model.render\n  end\nend\napp = ModelApp.new\napp.run",
        customizationExample: "# Access individual parts\nrequire './meshes/mesh_name'\nrequire './geometries/mesh_name_geometry'\nrequire './materials/material_name'\nclass CustomModel\n  def initialize\n    @geometry = MeshNameGeometry.new\n    @material = MaterialName.new\n  end\nend"
    },
    php: {
        packageManager: "composer",
        dependencies: [
            "php-opengl/opengl",
            "php-gl/math"
        ],
        devDependencies: [],
        installCommand: "composer require php-opengl/opengl php-gl/math",
        devInstallCommand: "",
        setupSteps: [
            "Install PHP and Composer",
            "Install OpenGL PHP extensions",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: "<?php\nrequire_once './{componentName}.php';\nuse OpenGL\\GL;\nclass ModelApp {\n    private $model;\n    public function __construct() {\n        $this->model = new {componentName}();\n    }\n    public function run() {\n        $this->model->render();\n    }\n}\n$app = new ModelApp();\n$app->run();",
        customizationExample: "<?php\n// Access individual parts\nrequire_once './meshes/MeshName.php';\nrequire_once './geometries/MeshNameGeometry.php';\nrequire_once './materials/MaterialName.php';\nclass CustomModel {\n    private $geometry;\n    private $material;\n    public function __construct() {\n        $this->geometry = new MeshNameGeometry();\n        $this->material = new MaterialName();\n    }\n}"
    },
    scala: {
        packageManager: "sbt",
        dependencies: [
            "org.lwjgl:lwjgl:3.3.3",
            "org.lwjgl:lwjgl-opengl:3.3.3"
        ],
        devDependencies: [],
        installCommand: '// build.sbt\nlibraryDependencies ++= Seq(\n  "org.lwjgl" % "lwjgl" % "3.3.3",\n  "org.lwjgl" % "lwjgl-opengl" % "3.3.3"\n)',
        devInstallCommand: "",
        setupSteps: [
            "Create a new Scala project with sbt",
            "Add LWJGL dependencies to build.sbt",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: "import {componentName}._\nimport org.lwjgl.opengl.GL\nobject ModelApp extends App {\n  // Initialize LWJGL and OpenGL\n  val model = new {componentName}()\n  // Render loop\n  model.render()\n}",
        customizationExample: "// Access individual parts\nimport meshes.MeshName\nimport geometries.MeshNameGeometry\nimport materials.MaterialName\nclass CustomModel {\n  private val geometry = new MeshNameGeometry()\n  private val material = new MaterialName()\n  def render(): Unit = {\n    // Custom rendering logic\n  }\n}"
    },
    dart: {
        packageManager: "pub",
        dependencies: [
            "flutter",
            "vector_math",
            "flutter_gl"
        ],
        devDependencies: [],
        installCommand: "# pubspec.yaml\ndependencies:\n  flutter:\n    sdk: flutter\n  vector_math: ^2.1.4\n  flutter_gl: ^0.0.1",
        devInstallCommand: "",
        setupSteps: [
            "Create a new Flutter project",
            "Add dependencies to pubspec.yaml",
            "Extract the downloaded component files to your lib folder",
            "Run the example application"
        ],
        importExample: "import 'package:flutter/material.dart';\nimport './{componentName}.dart';\nclass ModelPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: {componentName}(),\n    );\n  }\n}",
        customizationExample: "// Access individual parts\nimport './meshes/mesh_name.dart';\nimport './geometries/mesh_name_geometry.dart';\nimport './materials/material_name.dart';\nclass CustomModel {\n  final MeshNameGeometry geometry;\n  final MaterialName material;\n  CustomModel() : \n    geometry = MeshNameGeometry(),\n    material = MaterialName();\n}"
    },
    r: {
        packageManager: "CRAN",
        dependencies: [
            "rgl",
            "geometry",
            "matrix"
        ],
        devDependencies: [],
        installCommand: 'install.packages(c("rgl", "geometry", "matrix"))',
        devInstallCommand: "",
        setupSteps: [
            "Install R and required packages",
            "Extract the downloaded component files to your project",
            "Source the example script"
        ],
        importExample: 'library(rgl)\nsource("./{componentName}.R")\n# Create and display the model\nmodel <- {componentName}$new()\nmodel$render()',
        customizationExample: '# Access individual parts\nsource("./meshes/MeshName.R")\nsource("./geometries/MeshNameGeometry.R")\nsource("./materials/MaterialName.R")\nCustomModel <- setRefClass("CustomModel",\n  fields = list(\n    geometry = "MeshNameGeometry",\n    material = "MaterialName"\n  ),\n  methods = list(\n    initialize = function() {\n      geometry <<- MeshNameGeometry$new()\n      material <<- MaterialName$new()\n    }\n  )\n)'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/code-editor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CodeEditor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/constant.ts [app-client] (ecmascript)");
;
;
;
function CodeEditor(param) {
    let { code, languageId } = param;
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text).then(()=>{
            console.log("Copied to clipboard");
        });
    };
    const language = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGES"].find((lang)=>lang.id === languageId);
    const lines = code.split("\n");
    const getSyntaxClass = (line)=>{
        if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
            return "text-[#6A9955]"; // Comments
        }
        if (line.includes("import") || line.includes("from") || line.includes("require")) {
            return "text-[#C586C0]"; // Imports
        }
        if (line.includes("function") || line.includes("def") || line.includes("class")) {
            return "text-[#569CD6]"; // Keywords
        }
        if (line.includes("const") || line.includes("let") || line.includes("var") || line.includes("final") || line.includes("static") || line.includes("public")) {
            return "text-[#9CDCFE]"; // Variables
        }
        if (line.includes("{") || line.includes("}") || line.includes("[") || line.includes("]") || line.includes("(") || line.includes(")")) {
            return "text-[#D4D4D4]"; // Brackets
        }
        if (line.includes("=") || line.includes("+") || line.includes("-") || line.includes("*") || line.includes("/") || line.includes("%")) {
            return "text-[#D4D4D4]"; // Operators
        }
        if (line.includes('"') || line.includes("'") || line.includes("`")) {
            return "text-[#CE9178]"; // Strings
        }
        if (!isNaN(Number(line.trim())) || line.trim().match(/0x[0-9A-Fa-f]+/)) {
            return "text-[#B5CEA8]"; // Numbers
        }
        return "text-[#D4D4D4]"; // Default
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1E1E1E] rounded-lg overflow-hidden font-mono text-sm h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-[#333333]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FF5F56]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/code-editor.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FFBD2E]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/code-editor.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#27C93F]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/code-editor.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/code-editor.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#CCCCCC] text-xs flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: language === null || language === void 0 ? void 0 : language.name
                            }, void 0, false, {
                                fileName: "[project]/app/components/code-editor.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: "●"
                            }, void 0, false, {
                                fileName: "[project]/app/components/code-editor.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: [
                                    lines.length,
                                    " lines"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/code-editor.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>copyToClipboard(code),
                                className: "ml-2 p-1 hover:bg-[#404040] rounded",
                                title: "Copy to clipboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/code-editor.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/code-editor.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/code-editor.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/code-editor.tsx",
                lineNumber: 79,
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
                                    fileName: "[project]/app/components/code-editor.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/code-editor.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "whitespace-pre ".concat(getSyntaxClass(line)),
                                    children: line
                                }, i, false, {
                                    fileName: "[project]/app/components/code-editor.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/code-editor.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/code-editor.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/code-editor.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/code-editor.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c = CodeEditor;
var _c;
__turbopack_context__.k.register(_c, "CodeEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/language-selector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LanguageSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/constant.ts [app-client] (ecmascript)");
;
;
;
function LanguageSelector(param) {
    let { selectedLanguage, onChange } = param;
    const groups = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGES"].map((lang)=>lang.group)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                    className: "w-4 h-4 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/app/components/language-selector.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedLanguage,
                    onChange: (e)=>onChange(e.target.value),
                    className: "bg-[#252526] text-white px-3 py-1.5 rounded border border-[#3c3c3c] focus:border-purple-500 outline-none text-sm appearance-none pr-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%239CA3AF%22><path d=%22M7 10l5 5 5-5z%22/></svg>')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem] cursor-pointer",
                    children: groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                            label: group,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGES"].filter((lang)=>lang.group === group).map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: lang.id,
                                    children: lang.name
                                }, lang.id, false, {
                                    fileName: "[project]/app/components/language-selector.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this))
                        }, group, false, {
                            fileName: "[project]/app/components/language-selector.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/language-selector.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/language-selector.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/language-selector.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/file-tree.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FileTree
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/constant.ts [app-client] (ecmascript)");
;
;
;
function FileTree(param) {
    let { projectStructure, selectedLanguage, onSelectFile, expandedFolders, toggleFolder, activeFile } = param;
    var _projectStructure_geometries;
    if (!projectStructure) return null;
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGES"].find((l)=>l.id === selectedLanguage);
    if (!lang) return null;
    const getIcon = (fileName)=>{
        if (fileName.includes("Geometry")) return "text-cyan-400";
        if (fileName.includes("index")) return "text-green-400";
        if (fileName.includes("meshes")) return "text-cyan-400";
        if (fileName.includes("geometries")) return "text-cyan-400";
        if (fileName.includes("materials")) return "text-orange-400";
        if (fileName.includes("page")) return "text-purple-400";
        return "text-white";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                onClick: ()=>toggleFolder("components"),
                children: [
                    expandedFolders.components ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                        className: "w-4 h-4 mr-2 text-yellow-400"
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#C5C5C5]",
                        children: "components"
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/file-tree.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            expandedFolders.components && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                        onClick: ()=>toggleFolder("componentName"),
                        children: [
                            expandedFolders.componentName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                className: "w-4 h-4 mr-2 text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#C5C5C5]",
                                children: "Model"
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    expandedFolders.componentName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ".concat(activeFile === "index" ? "bg-[#2A2D2E]" : ""),
                                onClick: ()=>onSelectFile("index", projectStructure.indexContent),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "w-4 h-4 mr-2 ".concat(getIcon("index"))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C5C5C5]",
                                        children: [
                                            "index.",
                                            lang.extension
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                                onClick: ()=>toggleFolder("geometries"),
                                children: [
                                    expandedFolders.geometries ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C5C5C5]",
                                        children: "geometries"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            expandedFolders.geometries && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4",
                                children: (_projectStructure_geometries = projectStructure.geometries) === null || _projectStructure_geometries === void 0 ? void 0 : _projectStructure_geometries.map((geometry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ".concat(activeFile === "geometry-".concat(i) ? "bg-[#2A2D2E]" : ""),
                                        onClick: ()=>onSelectFile("geometry-".concat(i), geometry.content),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                className: "w-4 h-4 mr-2 ".concat(getIcon(geometry.name))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/file-tree.tsx",
                                                lineNumber: 104,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#C5C5C5]",
                                                children: [
                                                    geometry.name,
                                                    "Geometry.",
                                                    lang.geometryExtension
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/file-tree.tsx",
                                                lineNumber: 105,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                                onClick: ()=>toggleFolder("meshes"),
                                children: [
                                    expandedFolders.meshes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C5C5C5]",
                                        children: "meshes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            expandedFolders.meshes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4",
                                children: projectStructure.meshes.map((mesh, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ".concat(activeFile === "mesh-".concat(i) ? "bg-[#2A2D2E]" : ""),
                                        onClick: ()=>onSelectFile("mesh-".concat(i), mesh.content),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                className: "w-4 h-4 mr-2 ".concat(getIcon(mesh.name))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/file-tree.tsx",
                                                lineNumber: 136,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#C5C5C5]",
                                                children: [
                                                    mesh.name,
                                                    ".",
                                                    lang.extension
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/file-tree.tsx",
                                                lineNumber: 137,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 129,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                                onClick: ()=>toggleFolder("materials"),
                                children: [
                                    expandedFolders.materials ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-4 h-4 mr-2 text-orange-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C5C5C5]",
                                        children: "materials"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this),
                            expandedFolders.materials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4",
                                children: projectStructure.materials.map((material, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ".concat(activeFile === "material-".concat(i) ? "bg-[#2A2D2E]" : ""),
                                        onClick: ()=>onSelectFile("material-".concat(i), material.content),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                className: "w-4 h-4 mr-2 ".concat(getIcon(material.name))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/file-tree.tsx",
                                                lineNumber: 170,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#C5C5C5]",
                                                children: [
                                                    material.name,
                                                    ".",
                                                    lang.extension
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/file-tree.tsx",
                                                lineNumber: 173,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/components/file-tree.tsx",
                                        lineNumber: 161,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/file-tree.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                onClick: ()=>toggleFolder("app"),
                children: [
                    expandedFolders.app ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                        className: "w-4 h-4 mr-2 text-purple-400"
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#C5C5C5]",
                        children: "app"
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/file-tree.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            expandedFolders.app && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                        onClick: ()=>toggleFolder("modelPage"),
                        children: [
                            expandedFolders.modelPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                className: "w-4 h-4 mr-2 text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#C5C5C5]",
                                children: "model-page"
                            }, void 0, false, {
                                fileName: "[project]/app/components/file-tree.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    expandedFolders.modelPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ".concat(activeFile === "examplePage" ? "bg-[#2A2D2E]" : ""),
                            onClick: ()=>onSelectFile("examplePage", projectStructure.examplePageContent),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "w-4 h-4 mr-2 ".concat(getIcon("page"))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/file-tree.tsx",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#C5C5C5]",
                                    children: [
                                        "page.",
                                        lang.extension
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/file-tree.tsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/file-tree.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/file-tree.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/file-tree.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/file-tree.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = FileTree;
var _c;
__turbopack_context__.k.register(_c, "FileTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/lib/functions/isMesh.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "isMesh": ()=>isMesh
});
function isMesh(object) {
    return "isMesh" in object && object.isMesh === true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/model-preview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ModelPreview
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$functions$2f$isMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/functions/isMesh.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function ModelPreview(param) {
    let { url, displayMode, autoRotate } = param;
    _s();
    const [gltf, setGltf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load GLTF with memory optimization for large files
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelPreview.useEffect": ()=>{
            let isMounted = true;
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
            // Set up DRACO for compressed models
            const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRACOLoader"]();
            dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
            loader.setDRACOLoader(dracoLoader);
            // For large files, use a more memory-efficient approach
            fetch(url).then({
                "ModelPreview.useEffect": (response)=>response.arrayBuffer()
            }["ModelPreview.useEffect"]).then({
                "ModelPreview.useEffect": (data)=>{
                    if (!isMounted) return;
                    loader.parse(data, "", {
                        "ModelPreview.useEffect": (gltf)=>{
                            // For extremely large models, simplify geometries to prevent memory issues
                            if (gltf.scene) {
                                gltf.scene.traverse({
                                    "ModelPreview.useEffect": (object)=>{
                                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$functions$2f$isMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMesh"])(object)) {
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
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$functions$2f$isMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMesh"])(object)) {
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
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$functions$2f$isMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMesh"])(child)) {
                            const mesh = child;
                            const originalMaterial = mesh.material;
                            // Dispose of old materials to prevent memory leaks
                            if (Array.isArray(originalMaterial)) {
                                originalMaterial.forEach({
                                    "ModelPreview.useEffect": (material)=>material.dispose()
                                }["ModelPreview.useEffect"]);
                            } else if (originalMaterial && "dispose" in originalMaterial) {
                                originalMaterial.dispose();
                            }
                            // Create new materials based on display mode
                            switch(displayMode){
                                case "wireframe":
                                    {
                                        // Clone original material(s) and enable wireframe if supported
                                        if (Array.isArray(originalMaterial)) {
                                            mesh.material = originalMaterial.map({
                                                "ModelPreview.useEffect": (mat)=>{
                                                    const newMat = mat.clone();
                                                    // Only set wireframe if the material type supports it
                                                    if ("wireframe" in newMat) {
                                                        newMat.wireframe = true;
                                                    }
                                                    newMat.transparent = true;
                                                    newMat.opacity = 0.8;
                                                    return newMat;
                                                }
                                            }["ModelPreview.useEffect"]);
                                        } else {
                                            const newMat = originalMaterial.clone();
                                            if ("wireframe" in newMat) {
                                                newMat.wireframe = true;
                                            }
                                            newMat.transparent = true;
                                            newMat.opacity = 0.8;
                                            mesh.material = newMat;
                                        }
                                        break;
                                    }
                                case "points":
                                    mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                                        color: 0x00ff00,
                                        size: 0.01,
                                        sizeAttenuation: true
                                    });
                                    break;
                                case "normals":
                                    mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]();
                                    break;
                                case "depth":
                                    mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]();
                                    break;
                                case "solid":
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
                        fileName: "[project]/app/components/model-preview.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    "Loading model..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/model-preview.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/model-preview.tsx",
            lineNumber: 165,
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
        fileName: "[project]/app/components/model-preview.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s(ModelPreview, "5T0y0OKdOy4BOwEO+2zjJKPtyj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ModelPreview;
var _c;
__turbopack_context__.k.register(_c, "ModelPreview");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$glb$2d$converter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/glb-converter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$uploadbutton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/uploadbutton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/constant.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$code$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/code-editor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/language-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/file-tree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$model$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/model-preview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
function GLBConverter() {
    var _LANGUAGES_find, _projectStructure_geometries;
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelUrl, setModelUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectStructure, setProjectStructure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("upload");
    const [gltfData, setGltfData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Display options
    const [displayMode, setDisplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("original");
    const [autoRotate, setAutoRotate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAxes, setShowAxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [componentName, setComponentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Model");
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("typescript");
    const [expandedFolders, setExpandedFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        components: true,
        componentName: true,
        geometries: false,
        meshes: true,
        materials: false,
        app: true,
        modelPage: true
    });
    const [activeFile, setActiveFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("index");
    const [currentFileContent, setCurrentFileContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GLBConverter.useEffect": ()=>{
            if (projectStructure) {
                setCurrentFileContent(projectStructure.indexContent);
            }
        }
    }["GLBConverter.useEffect"], [
        projectStructure
    ]);
    const toggleFolder = (folder)=>{
        setExpandedFolders((prev)=>({
                ...prev,
                [folder]: !prev[folder]
            }));
    };
    const handleFileSelect = (path, content)=>{
        setActiveFile(path);
        setCurrentFileContent(content);
    };
    const handleFileUpload = async (event)=>{
        var _event_target_files;
        const uploadedFile = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        if (uploadedFile && uploadedFile.name.endsWith(".glb")) {
            setFile(uploadedFile);
            setError("");
            setIsLoading(true);
            setProgress(0);
            try {
                // Create object URL for preview
                const url = URL.createObjectURL(uploadedFile);
                setModelUrl(url);
                // Load GLTF with progress tracking for large files
                await loadGLTFWithProgress(url, uploadedFile);
                // Generate component name from filename
                const name = uploadedFile.name.replace(".glb", "").replace(/[^a-zA-Z0-9]/g, "");
                const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                setComponentName(capitalizedName);
                setActiveTab("preview");
            } catch (err) {
                console.error("Error loading GLTF", err);
                setError("Error processing GLB file. The file may be too large or corrupted.");
            } finally{
                setIsLoading(false);
            }
        } else {
            setError("Please upload a valid .glb file");
        }
    };
    const loadGLTFWithProgress = async (url, file)=>{
        setIsProcessing(true);
        setProgress(0);
        return new Promise((resolve, reject)=>{
            try {
                // Set up DRACO decoder for compressed models (common in large GLBs)
                const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRACOLoader"]();
                dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
                // Track progress for large files
                const xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.responseType = "arraybuffer";
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        try {
                            // Process the GLB data
                            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
                            loader.setDRACOLoader(dracoLoader);
                            loader.parse(xhr.response, "", (gltf)=>{
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
                    reject(new Error("Network error occurred while loading the file"));
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
            if (gltfData && componentName && activeTab === "code") {
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
                    setError("Failed to regenerate project structure for the selected language");
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
            const lang = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGES"].find((l)=>l.id === selectedLanguage);
            if (!lang) return;
            // Create folder structure
            const componentFolder = zip.folder("components/".concat(componentName));
            const meshesFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder("meshes");
            const geometriesFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder("geometries");
            const materialsFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder("materials");
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
                const appFolder = zip.folder("app");
                const modelPageFolder = appFolder === null || appFolder === void 0 ? void 0 : appFolder.folder("".concat(componentName.toLowerCase(), "-page"));
                modelPageFolder === null || modelPageFolder === void 0 ? void 0 : modelPageFolder.file("page.".concat(lang.extension), projectStructure.examplePageContent);
            }
            // Generate and download zip
            zip.generateAsync({
                type: "blob"
            }).then((content)=>{
                const suffix = includeExamplePage ? "-with-example" : "";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(content, "".concat(componentName, "-").concat(selectedLanguage).concat(suffix, ".zip"));
            });
        } catch (err) {
            console.error("Error generating ZIP", err);
            setError("Failed to generate ZIP file. The model might be too large.");
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
            const lang = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGES"].find((l)=>l.id === selectedLanguage);
            if (!lang) return;
            // Create folder structure
            const componentFolder = zip.folder("components/".concat(componentName, "-").concat(displayMode));
            const meshesFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder("meshes");
            const geometriesFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder("geometries");
            const materialsFolder = componentFolder === null || componentFolder === void 0 ? void 0 : componentFolder.folder("materials");
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
            const appFolder = zip.folder("app");
            const modelPageFolder = appFolder === null || appFolder === void 0 ? void 0 : appFolder.folder("".concat(componentName.toLowerCase(), "-").concat(displayMode, "-page"));
            modelPageFolder === null || modelPageFolder === void 0 ? void 0 : modelPageFolder.file("page.".concat(lang.extension), structure.examplePageContent);
            // Generate and download zip
            zip.generateAsync({
                type: "blob"
            }).then((content)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(content, "".concat(componentName, "-").concat(displayMode, "-").concat(selectedLanguage, ".zip"));
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
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#1E1E1E] text-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[calc(100vh-2rem)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 bg-[#252526] border-r border-[#3c3c3c] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-b border-[#3c3c3c]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-medium text-[#CCCCCC] flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-4 h-4 mr-2 text-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this),
                                    "EXPLORER"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        activeTab === "code" && projectStructure ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$file$2d$tree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                projectStructure: projectStructure,
                                selectedLanguage: selectedLanguage,
                                onSelectFile: handleFileSelect,
                                expandedFolders: expandedFolders,
                                toggleFolder: toggleFolder,
                                activeFile: activeFile
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#858585] text-sm",
                                children: activeTab === "upload" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Upload a GLB file to get started."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Supported file: .glb"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-yellow-400",
                                            children: "If you have a different 3D model format (like .obj, .fbx, .stl), please convert it to <strong>.glb</strong> before uploading."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$uploadbutton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onClick: ()=>window.open("https://imagetostl.com/convert/file/obj/to/glb")
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 389,
                                    columnNumber: 19
                                }, this) : activeTab === "preview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Preview your 3D model with different display modes."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Use the controls to rotate, zoom, and pan."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Select a file from the project structure to view its code."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Use the language selector to switch between programming languages."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 387,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-t border-[#3c3c3c]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-[#858585]",
                                children: activeTab === "code" && projectStructure ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                            className: "w-4 h-4 mr-2 text-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "overflow-hidden whitespace-nowrap text-ellipsis",
                                            children: componentName
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#858585]",
                                    children: "No project loaded"
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#2D2D2D] border-b border-[#3c3c3c] h-10 flex items-center px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("upload"),
                                        className: "text-sm flex items-center gap-1 px-2 py-1 rounded ".concat(activeTab === "upload" ? "bg-[#3C3C3C] text-[#FFFFFF]" : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF]"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, this),
                                            "Upload"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("preview"),
                                        disabled: !file,
                                        className: "text-sm flex items-center gap-1 px-2 py-1 rounded ".concat(activeTab === "preview" && file ? "bg-[#3C3C3C] text-[#FFFFFF]" : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF] disabled:opacity-50"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, this),
                                            "Preview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("code"),
                                        disabled: !projectStructure,
                                        className: "text-sm flex items-center gap-1 px-2 py-1 rounded ".concat(activeTab === "code" && projectStructure ? "bg-[#3C3C3C] text-[#FFFFFF]" : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF] disabled:opacity-50"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 476,
                                                columnNumber: 17
                                            }, this),
                                            "Code"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4",
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#6A0000] border border-[#FF5252] rounded p-3 mb-4 max-w-2xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-4 h-4 text-[#FF5252] mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 488,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#FF5252] text-sm",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this),
                                activeTab === "upload" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-2xl mx-auto mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#252526] rounded p-8 border border-[#3c3c3c]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-2 border-dashed rounded p-12 transition-colors ".concat(isDragging ? "border-purple-500 bg-purple-500/10" : "border-[#3c3c3c] hover:border-purple-500"),
                                                    onDragOver: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setIsDragging(true);
                                                    },
                                                    onDragLeave: ()=>setIsDragging(false),
                                                    onDrop: (e)=>{
                                                        var _e_dataTransfer_files;
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setIsDragging(false);
                                                        const droppedFile = (_e_dataTransfer_files = e.dataTransfer.files) === null || _e_dataTransfer_files === void 0 ? void 0 : _e_dataTransfer_files[0];
                                                        if (droppedFile && droppedFile.name.endsWith(".glb")) {
                                                            const fakeEvent = {
                                                                target: {
                                                                    files: [
                                                                        droppedFile
                                                                    ]
                                                                }
                                                            };
                                                            handleFileUpload(fakeEvent);
                                                        } else {
                                                            setError("Please drop a valid .glb file");
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "w-12 h-12 text-[#858585] mx-auto mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-[#CCCCCC] mb-2",
                                                            children: "Upload your GLB model"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#858585] mb-6",
                                                            children: "Drop your .glb file here or click to browse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 23
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
                                                            lineNumber: 533,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "file-upload",
                                                            className: "bg-[#0E639C] hover:bg-[#107FC9] text-white px-4 py-2 rounded cursor-pointer transition-colors inline-block ".concat(isLoading ? "opacity-50 cursor-not-allowed" : ""),
                                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "w-4 h-4 inline mr-2 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 549,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Processing..."
                                                                ]
                                                            }, void 0, true) : "Choose File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 19
                                            }, this),
                                            (isLoading || isProcessing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#CCCCCC] text-sm",
                                                                children: isProcessing ? "Processing model..." : "Loading file..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#CCCCCC] text-sm",
                                                                children: [
                                                                    Math.round(progress),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 567,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-[#3c3c3c] rounded h-1.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#0E70C0] h-1.5 rounded transition-all duration-300",
                                                            style: {
                                                                width: "".concat(progress, "%")
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#858585] text-xs mt-2",
                                                        children: progress < 100 ? "Loading large model. This may take a few moments..." : "Optimizing model data for transpilation..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 560,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this),
                                activeTab === "preview" && modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-6xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#252526] rounded p-6 border border-[#3c3c3c]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium text-[#CCCCCC]",
                                                        children: "3D Model Preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[#CCCCCC] text-sm",
                                                                        children: "Display Mode:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 599,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: displayMode,
                                                                        onChange: (e)=>setDisplayMode(e.target.value),
                                                                        className: "bg-[#3C3C3C] text-[#CCCCCC] px-2 py-1 rounded border border-[#3c3c3c] focus:border-purple-500 outline-none text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "original",
                                                                                children: "Original"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 609,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "wireframe",
                                                                                children: "Wireframe"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 610,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "solid",
                                                                                children: "Solid Color"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 611,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "normals",
                                                                                children: "Normals"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 612,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "depth",
                                                                                children: "Depth"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 613,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "points",
                                                                                children: "Point Cloud"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 614,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 602,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 598,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2 text-[#CCCCCC] text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: autoRotate,
                                                                                onChange: (e)=>setAutoRotate(e.target.checked),
                                                                                className: "rounded border-[#3c3c3c] bg-[#3C3C3C] text-[#0E70C0] focus:ring-[#0E70C0]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 620,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Auto Rotate"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 619,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2 text-[#CCCCCC] text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: showGrid,
                                                                                onChange: (e)=>setShowGrid(e.target.checked),
                                                                                className: "rounded border-[#3c3c3c] bg-[#3C3C3C] text-[#0E70C0] focus:ring-[#0E70C0]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 629,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Grid"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 628,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2 text-[#CCCCCC] text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: showAxes,
                                                                                onChange: (e)=>setShowAxes(e.target.checked),
                                                                                className: "rounded border-[#3c3c3c] bg-[#3C3C3C] text-[#0E70C0] focus:ring-[#0E70C0]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 638,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Axes"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: downloadCurrentView,
                                                                disabled: isProcessing,
                                                                className: "bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ".concat(isProcessing ? "opacity-50 cursor-not-allowed" : ""),
                                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                            className: "w-4 h-4 animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                                            lineNumber: 656,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Processing..."
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                                            lineNumber: 661,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Download ",
                                                                        displayMode,
                                                                        " Version"
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 596,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 592,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#2D2D2D] rounded p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#858585] text-sm",
                                                        children: [
                                                            displayMode === "original" && "Showing the original model with its materials and textures.",
                                                            displayMode === "wireframe" && "Displaying the model as a wireframe structure showing the mesh geometry.",
                                                            displayMode === "solid" && "Rendering the model with a uniform solid color material.",
                                                            displayMode === "normals" && "Visualizing surface normals with color-coded directions (RGB = XYZ).",
                                                            displayMode === "depth" && "Showing depth information - closer surfaces appear lighter.",
                                                            displayMode === "points" && "Displaying the model as a point cloud of vertices."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 669,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#1E1E1E] rounded overflow-hidden",
                                                style: {
                                                    height: "500px"
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
                                                            lineNumber: 699,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                                                            position: [
                                                                10,
                                                                10,
                                                                10
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 23
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
                                                            lineNumber: 701,
                                                            columnNumber: 23
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
                                                                            lineNumber: 708,
                                                                            columnNumber: 33
                                                                        }, void 0),
                                                                        "Loading model..."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 707,
                                                                    columnNumber: 31
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 706,
                                                                columnNumber: 29
                                                            }, void 0),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$model$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                url: modelUrl,
                                                                displayMode: displayMode,
                                                                autoRotate: autoRotate
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 714,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 25
                                                        }, this),
                                                        showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
                                                            args: [
                                                                10,
                                                                10,
                                                                "#444444",
                                                                "#666666"
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 25
                                                        }, this),
                                                        showAxes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("axesHelper", {
                                                            args: [
                                                                2
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 724,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                                                            enableZoom: true,
                                                            enablePan: true,
                                                            enableRotate: true,
                                                            minDistance: 0.1,
                                                            maxDistance: 100
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 725,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                                                            preset: "city"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 687,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#858585] text-sm mt-4 text-center",
                                                children: "Use mouse to rotate, zoom, and pan around the model. Try different display modes to analyze the model structure."
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 735,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 591,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this),
                                activeTab === "code" && projectStructure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-[#CCCCCC]",
                                                            children: activeFile ? (activeFile === "index" ? "index" : activeFile === "examplePage" ? "page" : activeFile.includes("geometry") ? "Geometry" : activeFile.includes("mesh") ? "Mesh" : "Material") + ".".concat(((_LANGUAGES_find = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$constant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGES"].find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.extension) || "ts") : "Code Editor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                selectedLanguage: selectedLanguage,
                                                                onChange: setSelectedLanguage
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 766,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>downloadZip(true),
                                                            disabled: isProcessing,
                                                            className: "bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ".concat(isProcessing ? "opacity-50 cursor-not-allowed" : ""),
                                                            children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "w-4 h-4 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 782,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Processing..."
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 787,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Download Full Project"
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 773,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>downloadZip(false),
                                                            disabled: isProcessing,
                                                            className: "bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ".concat(isProcessing ? "opacity-50 cursor-not-allowed" : ""),
                                                            children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "w-4 h-4 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 801,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Processing..."
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 806,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Download Component"
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: downloadModel,
                                                            className: "bg-[#237A57] hover:bg-[#2B9348] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 815,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Download GLB"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 811,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 746,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$code$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                code: currentFileContent,
                                                languageId: selectedLanguage
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 822,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 821,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 border-t border-[#3c3c3c] pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-[#CCCCCC] flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                                    className: "w-4 h-4 mr-2 text-purple-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 832,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Model Statistics"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 831,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex space-x-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[#858585]",
                                                                children: [
                                                                    file ? (file.size / 1024 / 1024).toFixed(2) + " MB" : "N/A",
                                                                    " ",
                                                                    "• ",
                                                                    projectStructure.meshes.length,
                                                                    " meshes"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 835,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-6 gap-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Meshes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 847,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[#CCCCCC]",
                                                                    children: projectStructure.meshes.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 848,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 846,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Geometry Files"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 853,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[#CCCCCC]",
                                                                    children: ((_projectStructure_geometries = projectStructure.geometries) === null || _projectStructure_geometries === void 0 ? void 0 : _projectStructure_geometries.length) || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 854,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 852,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Materials"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 859,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[#CCCCCC]",
                                                                    children: projectStructure.materials.length
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 860,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 858,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Total Vertices"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[#CCCCCC]",
                                                                    children: projectStructure.totalVertices.toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 864,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Total Triangles"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[#CCCCCC]",
                                                                    children: projectStructure.totalTriangles.toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 872,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 870,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "File Size"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 877,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[#CCCCCC]",
                                                                    children: file ? (file.size / 1024 / 1024).toFixed(2) + " MB" : "N/A"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 878,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 876,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 829,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 745,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#2D2D2D] border-t border-[#3c3c3c] h-8 flex items-center px-4 text-xs text-[#858585]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "UTF-8"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "LF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 894,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: activeTab === "code" && projectStructure ? projectStructure.meshes.length + " meshes" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 895,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 892,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-auto flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedLanguage.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 902,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Line ",
                                                activeFile ? "1" : "",
                                                ", Column ",
                                                activeFile ? "1" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 903,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 901,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 891,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 440,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/glb-convertor/page.tsx",
            lineNumber: 364,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 363,
        columnNumber: 5
    }, this);
}
_s(GLBConverter, "UM9/q1rnC9SD860nNTVy8J6EV3s=");
_c = GLBConverter;
var _c;
__turbopack_context__.k.register(_c, "GLBConverter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_98329d24._.js.map