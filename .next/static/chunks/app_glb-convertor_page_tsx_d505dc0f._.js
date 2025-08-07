(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/glb-converter'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
        importExample: "import {componentName} from '@/components/{componentName}';\nimport { Canvas } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\n\nexport default function ModelPage() {\n  return (\n    <div className=\"w-full h-screen\">\n      <Canvas camera={{ '{' } position: [0, 0, 5], fov: 50 {'}'} >\n        <ambientLight intensity={0.5} />\n        <pointLight position={[10, 10, 10]} />\n        <{componentName} />\n        <OrbitControls />\n        <Environment preset=\"studio\" />\n      </Canvas>\n    </div>\n  );\n}",
        customizationExample: "// Access individual parts\nimport { MeshName } from '@/components/{componentName}/meshes/MeshName';\nimport { MeshNameGeometry } from '@/components/{componentName}/geometries/MeshNameGeometry';\nimport MaterialName from '@/components/{componentName}/materials/MaterialName';\n\nfunction CustomModel() {\n  return (\n    <group>\n      <mesh geometry={MeshNameGeometry} material={MaterialName()} />\n    </group>\n  );\n}"
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
        importExample: "import {componentName} from './components/{componentName}';\nimport { Canvas } from '@react-three/fiber';\nimport { OrbitControls, Environment } from '@react-three/drei';\n\nexport default function ModelPage() {\n  return (\n    <div className=\"w-full h-screen\">\n      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>\n        <ambientLight intensity={0.5} />\n        <pointLight position={[10, 10, 10]} />\n        <{componentName} />\n        <OrbitControls />\n        <Environment preset=\"studio\" />\n      </Canvas>\n    </div>\n  );\n}",
        customizationExample: "// Access individual parts\nimport { MeshName } from './components/{componentName}/meshes/MeshName';\nimport { MeshNameGeometry } from './components/{componentName}/geometries/MeshNameGeometry';\nimport MaterialName from './components/{componentName}/materials/MaterialName';\n\nfunction CustomModel() {\n  return (\n    <group>\n      <mesh geometry={MeshNameGeometry} material={MaterialName()} />\n    </group>\n  );\n}"
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
        importExample: "from {componentName} import {componentName}\nimport pyglet\nimport moderngl\nfrom pyrr import Matrix44\n\nclass ModelApp:\n    def __init__(self):\n        self.window = pyglet.window.Window(800, 600, caption='{componentName} Viewer')\n        self.ctx = moderngl.create_context()\n        self.scene = {componentName}(self.ctx)\n        \n    def run(self):\n        pyglet.app.run()\n\nif __name__ == '__main__':\n    app = ModelApp()\n    app.run()",
        customizationExample: "# Access individual parts\nfrom meshes.MeshName import MeshName\nfrom geometries.MeshNameGeometry import MeshNameGeometry\nfrom materials.MaterialName import MaterialName\n\nclass CustomModel:\n    def __init__(self, ctx):\n        self.geometry = MeshNameGeometry()\n        self.material = MaterialName(ctx)\n        self.mesh = MeshName(ctx, self.material)"
    },
    java: {
        packageManager: 'maven/gradle',
        dependencies: [
            'org.lwjgl:lwjgl:3.3.3',
            'org.lwjgl:lwjgl-opengl:3.3.3',
            'org.lwjgl:lwjgl-glfw:3.3.3'
        ],
        devDependencies: [],
        installCommand: "// Maven\n<dependency>\n    <groupId>org.lwjgl</groupId>\n    <artifactId>lwjgl</artifactId>\n    <version>3.3.3</version>\n</dependency>\n\n// Gradle\nimplementation 'org.lwjgl:lwjgl:3.3.3'\nimplementation 'org.lwjgl:lwjgl-opengl:3.3.3'",
        devInstallCommand: '',
        setupSteps: [
            'Create a new Java project with Maven or Gradle',
            'Add LWJGL dependencies to your build file',
            'Extract the downloaded component files to your src folder',
            'Run the example application'
        ],
        importExample: "import {componentName};\n\npublic class ModelApp {\n    public static void main(String[] args) {\n        // Initialize LWJGL and OpenGL context\n        // Create and render the model\n        {componentName} model = new {componentName}();\n        model.render();\n    }\n}",
        customizationExample: "// Access individual parts\nimport meshes.MeshName;\nimport geometries.MeshNameGeometry;\nimport materials.MaterialName;\n\npublic class CustomModel {\n    private MeshNameGeometry geometry;\n    private MaterialName material;\n    \n    public CustomModel() {\n        this.geometry = new MeshNameGeometry();\n        this.material = new MaterialName();\n    }\n}"
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
        importExample: "using {componentName};\nusing OpenTK.Graphics.OpenGL4;\nusing OpenTK.Windowing.Desktop;\n\nclass Program\n{\n    static void Main()\n    {\n        var model = new {componentName}();\n        model.Render();\n    }\n}",
        customizationExample: "// Access individual parts\nusing Meshes;\nusing Geometries;\nusing Materials;\n\npublic class CustomModel\n{\n    private MeshNameGeometry geometry;\n    private MaterialName material;\n    \n    public CustomModel()\n    {\n        geometry = new MeshNameGeometry();\n        material = new MaterialName();\n    }\n}"
    },
    cpp: {
        packageManager: 'vcpkg/conan',
        dependencies: [
            'glew',
            'glfw3',
            'glm'
        ],
        devDependencies: [],
        installCommand: "// vcpkg\nvcpkg install glew glfw3 glm\n\n// Or with CMake\nfind_package(glfw3 REQUIRED)\nfind_package(GLEW REQUIRED)\nfind_package(glm REQUIRED)",
        devInstallCommand: '',
        setupSteps: [
            'Create a new C++ project with CMake',
            'Install OpenGL dependencies (GLEW, GLFW, GLM)',
            'Extract the downloaded component files to your project',
            'Compile and run the example application'
        ],
        importExample: '#include "{componentName}.h"\n#include <GL/glew.h>\n#include <GLFW/glfw3.h>\n\nint main() {\n    // Initialize GLFW and OpenGL\n    glfwInit();\n    GLFWwindow* window = glfwCreateWindow(800, 600, "{componentName} Viewer", NULL, NULL);\n    glfwMakeContextCurrent(window);\n    glewInit();\n    \n    {componentName} model;\n    \n    while (!glfwWindowShouldClose(window)) {\n        model.render();\n        glfwSwapBuffers(window);\n        glfwPollEvents();\n    }\n    \n    return 0;\n}',
        customizationExample: '// Access individual parts\n#include "meshes/MeshName.h"\n#include "geometries/MeshNameGeometry.h"\n#include "materials/MaterialName.h"\n\nclass CustomModel {\nprivate:\n    MeshNameGeometry geometry;\n    MaterialName material;\n    \npublic:\n    CustomModel() : geometry(), material() {}\n    void render() { /* custom rendering */ }\n};'
    },
    go: {
        packageManager: 'go mod',
        dependencies: [
            'github.com/go-gl/gl/v4.1-core/gl',
            'github.com/go-gl/glfw/v3.3/glfw',
            'github.com/go-gl/mathgl/mgl32'
        ],
        devDependencies: [],
        installCommand: "go mod init your-project\ngo get github.com/go-gl/gl/v4.1-core/gl\ngo get github.com/go-gl/glfw/v3.3/glfw\ngo get github.com/go-gl/mathgl/mgl32",
        devInstallCommand: '',
        setupSteps: [
            'Create a new Go module',
            'Install OpenGL dependencies',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: 'package main\n\nimport (\n    "./{componentName}"\n    "github.com/go-gl/gl/v4.1-core/gl"\n    "github.com/go-gl/glfw/v3.3/glfw"\n)\n\nfunc main() {\n    // Initialize GLFW and OpenGL\n    glfw.Init()\n    defer glfw.Terminate()\n    \n    window, _ := glfw.CreateWindow(800, 600, "{componentName} Viewer", nil, nil)\n    window.MakeContextCurrent()\n    gl.Init()\n    \n    model := {componentName}.New{componentName}()\n    \n    for !window.ShouldClose() {\n        model.Render()\n        window.SwapBuffers()\n        glfw.PollEvents()\n    }\n}',
        customizationExample: '// Access individual parts\nimport (\n    "./meshes"\n    "./geometries"\n    "./materials"\n)\n\ntype CustomModel struct {\n    geometry *geometries.MeshNameGeometry\n    material *materials.MaterialName\n}\n\nfunc NewCustomModel() *CustomModel {\n    return &CustomModel{\n        geometry: geometries.NewMeshNameGeometry(),\n        material: materials.NewMaterialName(),\n    }\n}'
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
        installCommand: '# Add to Cargo.toml\n[dependencies]\nwgpu = "0.18"\nwinit = "0.28"\nbytemuck = "1.14"\nglam = "0.24"',
        devInstallCommand: '',
        setupSteps: [
            'Create a new Rust project with Cargo',
            'Add wgpu dependencies to Cargo.toml',
            'Extract the downloaded component files to your src folder',
            'Run the example application'
        ],
        importExample: "use {componentName}::{componentName};\nuse wgpu::Device;\nuse winit::event_loop::EventLoop;\n\nfn main() {\n    let event_loop = EventLoop::new();\n    // Initialize wgpu and create device\n    let device = /* initialize device */;\n    \n    let model = {componentName}::new(&device);\n    \n    event_loop.run(move |event, _, control_flow| {\n        // Render model\n        model.render(&mut render_pass);\n    });\n}",
        customizationExample: "// Access individual parts\nuse meshes::MeshName;\nuse geometries::MeshNameGeometry;\nuse materials::MaterialName;\n\nstruct CustomModel {\n    geometry: MeshNameGeometry,\n    material: MaterialName,\n}\n\nimpl CustomModel {\n    fn new(device: &Device) -> Self {\n        Self {\n            geometry: MeshNameGeometry::new(device),\n            material: MaterialName::new(device),\n        }\n    }\n}"
    },
    swift: {
        packageManager: 'Swift Package Manager',
        dependencies: [
            'Metal',
            'MetalKit',
            'simd'
        ],
        devDependencies: [],
        installCommand: '// Add to Package.swift\ndependencies: [\n    .package(url: "https://github.com/apple/swift-numerics", from: "1.0.0")\n]',
        devInstallCommand: '',
        setupSteps: [
            'Create a new iOS/macOS project',
            'Import Metal and MetalKit frameworks',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: "import {componentName}\nimport Metal\nimport MetalKit\n\nclass ViewController: UIViewController {\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        \n        guard let device = MTLCreateSystemDefaultDevice() else { return }\n        let model = {componentName}(device: device)\n        \n        // Setup Metal rendering\n    }\n}",
        customizationExample: "// Access individual parts\nimport Meshes\nimport Geometries\nimport Materials\n\nclass CustomModel {\n    private let geometry: MeshNameGeometry\n    private let material: MaterialName\n    \n    init(device: MTLDevice) {\n        geometry = MeshNameGeometry(device: device)\n        material = MaterialName(device: device)\n    }\n}"
    },
    kotlin: {
        packageManager: 'Gradle',
        dependencies: [
            'org.lwjgl:lwjgl:3.3.3',
            'org.lwjgl:lwjgl-opengl:3.3.3'
        ],
        devDependencies: [],
        installCommand: '// build.gradle.kts\ndependencies {\n    implementation("org.lwjgl:lwjgl:3.3.3")\n    implementation("org.lwjgl:lwjgl-opengl:3.3.3")\n}',
        devInstallCommand: '',
        setupSteps: [
            'Create a new Kotlin project with Gradle',
            'Add LWJGL dependencies',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: "import {componentName}\nimport org.lwjgl.opengl.GL\n\nfun main() {\n    // Initialize LWJGL and OpenGL\n    val model = {componentName}()\n    \n    // Render loop\n    model.render()\n}",
        customizationExample: "// Access individual parts\nimport meshes.MeshName\nimport geometries.MeshNameGeometry\nimport materials.MaterialName\n\nclass CustomModel {\n    private val geometry = MeshNameGeometry()\n    private val material = MaterialName()\n    \n    fun render() {\n        // Custom rendering logic\n    }\n}"
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
        importExample: "require './{componentName}'\nrequire 'opengl'\nrequire 'glfw'\n\nclass ModelApp\n  def initialize\n    @model = {componentName}::{componentName}.new\n  end\n  \n  def run\n    # Initialize OpenGL and render\n    @model.render\n  end\nend\n\napp = ModelApp.new\napp.run",
        customizationExample: "# Access individual parts\nrequire './meshes/mesh_name'\nrequire './geometries/mesh_name_geometry'\nrequire './materials/material_name'\n\nclass CustomModel\n  def initialize\n    @geometry = MeshNameGeometry.new\n    @material = MaterialName.new\n  end\nend"
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
        importExample: "<?php\nrequire_once './{componentName}.php';\nuse OpenGL\\GL;\n\nclass ModelApp {\n    private $model;\n    \n    public function __construct() {\n        $this->model = new {componentName}();\n    }\n    \n    public function run() {\n        $this->model->render();\n    }\n}\n\n$app = new ModelApp();\n$app->run();",
        customizationExample: "<?php\n// Access individual parts\nrequire_once './meshes/MeshName.php';\nrequire_once './geometries/MeshNameGeometry.php';\nrequire_once './materials/MaterialName.php';\n\nclass CustomModel {\n    private $geometry;\n    private $material;\n    \n    public function __construct() {\n        $this->geometry = new MeshNameGeometry();\n        $this->material = new MaterialName();\n    }\n}"
    },
    scala: {
        packageManager: 'sbt',
        dependencies: [
            'org.lwjgl:lwjgl:3.3.3',
            'org.lwjgl:lwjgl-opengl:3.3.3'
        ],
        devDependencies: [],
        installCommand: '// build.sbt\nlibraryDependencies ++= Seq(\n  "org.lwjgl" % "lwjgl" % "3.3.3",\n  "org.lwjgl" % "lwjgl-opengl" % "3.3.3"\n)',
        devInstallCommand: '',
        setupSteps: [
            'Create a new Scala project with sbt',
            'Add LWJGL dependencies to build.sbt',
            'Extract the downloaded component files to your project',
            'Run the example application'
        ],
        importExample: "import {componentName}._\nimport org.lwjgl.opengl.GL\n\nobject ModelApp extends App {\n  // Initialize LWJGL and OpenGL\n  val model = new {componentName}()\n  \n  // Render loop\n  model.render()\n}",
        customizationExample: "// Access individual parts\nimport meshes.MeshName\nimport geometries.MeshNameGeometry\nimport materials.MaterialName\n\nclass CustomModel {\n  private val geometry = new MeshNameGeometry()\n  private val material = new MaterialName()\n  \n  def render(): Unit = {\n    // Custom rendering logic\n  }\n}"
    },
    dart: {
        packageManager: 'pub',
        dependencies: [
            'flutter',
            'vector_math',
            'flutter_gl'
        ],
        devDependencies: [],
        installCommand: "# pubspec.yaml\ndependencies:\n  flutter:\n    sdk: flutter\n  vector_math: ^2.1.4\n  flutter_gl: ^0.0.1",
        devInstallCommand: '',
        setupSteps: [
            'Create a new Flutter project',
            'Add dependencies to pubspec.yaml',
            'Extract the downloaded component files to your lib folder',
            'Run the example application'
        ],
        importExample: "import 'package:flutter/material.dart';\nimport './{componentName}.dart';\n\nclass ModelPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: {componentName}(),\n    );\n  }\n}",
        customizationExample: "// Access individual parts\nimport './meshes/mesh_name.dart';\nimport './geometries/mesh_name_geometry.dart';\nimport './materials/material_name.dart';\n\nclass CustomModel {\n  final MeshNameGeometry geometry;\n  final MaterialName material;\n  \n  CustomModel() : \n    geometry = MeshNameGeometry(),\n    material = MaterialName();\n}"
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
        importExample: 'library(rgl)\nsource("./{componentName}.R")\n\n# Create and display the model\nmodel <- {componentName}$new()\nmodel$render()',
        customizationExample: '# Access individual parts\nsource("./meshes/MeshName.R")\nsource("./geometries/MeshNameGeometry.R")\nsource("./materials/MaterialName.R")\n\nCustomModel <- setRefClass("CustomModel",\n  fields = list(\n    geometry = "MeshNameGeometry",\n    material = "MaterialName"\n  ),\n  methods = list(\n    initialize = function() {\n      geometry <<- MeshNameGeometry$new()\n      material <<- MaterialName$new()\n    }\n  )\n)'
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
function CodeEditor(param) {
    let { code, languageId } = param;
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
                                lineNumber: 816,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FFBD2E]"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 817,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#CCCCCC] text-xs flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: language === null || language === void 0 ? void 0 : language.name
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 821,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 822,
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
                                lineNumber: 823,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>copyToClipboard(code),
                                className: "ml-2 p-1 hover:bg-[#404040] rounded",
                                title: "Copy to clipboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
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
                                    lineNumber: 837,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 835,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "whitespace-pre ".concat(getSyntaxClass(line)),
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
                    lineNumber: 866,
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
_c1 = LanguageSelector;
// How to Use section component
function HowToUseSection(param) {
    let { selectedLanguage, componentName } = param;
    const setup = LANGUAGE_SETUP[selectedLanguage];
    const lang = LANGUAGES.find((l)=>l.id === selectedLanguage);
    const replaceComponentName = (text)=>{
        return text.replace(/\{componentName\}/g, componentName);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 border-t border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-semibold text-white mb-3 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm mb-2",
                                                children: "Install required dependencies:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 rounded p-3 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-green-400 text-sm",
                                                        children: setup.installCommand
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>copyToClipboard(setup.installCommand),
                                                        className: "absolute top-2 right-2 p-1 hover:bg-slate-700 rounded",
                                                        title: "Copy command",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
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
                                    setup.devInstallCommand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 text-sm mb-2",
                                                children: "Install development dependencies:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-800 rounded p-3 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-blue-400 text-sm",
                                                        children: setup.devInstallCommand
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>copyToClipboard(setup.devInstallCommand),
                                                        className: "absolute top-2 right-2 p-1 hover:bg-slate-700 rounded",
                                                        title: "Copy command",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium mb-1",
                                                children: "Required packages:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 948,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list-disc list-inside space-y-1",
                                                children: setup.dependencies.map((dep, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                                            setup.devDependencies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium mb-1 mt-2",
                                                        children: "Development packages:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-inside space-y-1",
                                                        children: setup.devDependencies.map((dep, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Setup Steps"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 970,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "list-decimal list-inside space-y-2 text-slate-400 text-sm",
                                    children: setup.setupSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Download & Extract"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 982,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm mb-2",
                                                    children: "1. Download the complete project:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 986,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800 rounded p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm mb-2",
                                                    children: "2. Extract to your project directory:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 992,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800 rounded p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm mb-2",
                                                    children: "3. File structure after extraction:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1000,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800 rounded p-3 text-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-300 font-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "📁 components/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1003,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: [
                                                                    "📄 index.",
                                                                    lang === null || lang === void 0 ? void 0 : lang.extension
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1005,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: "📁 geometries/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1006,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: "📁 meshes/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1007,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: "📁 materials/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1008,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "📁 app/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1009,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-8",
                                                                children: [
                                                                    "📄 page.",
                                                                    lang === null || lang === void 0 ? void 0 : lang.extension
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Basic Usage"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-purple-400 font-mono text-sm",
                                                children: "Basic implementation example"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1024,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(replaceComponentName(setup.importExample)),
                                                className: "p-1 hover:bg-slate-700 rounded",
                                                title: "Copy example",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-3 h-3 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1032,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1027,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "text-sm overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-slate-300",
                                                children: replaceComponentName(setup.importExample)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1037,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1035,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1022,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1020,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Advanced Customization"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1047,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-orange-400 font-mono text-sm",
                                                children: "Access individual components"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(replaceComponentName(setup.customizationExample)),
                                                className: "p-1 hover:bg-slate-700 rounded",
                                                title: "Copy example",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-3 h-3 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1058,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1053,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "text-sm overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-slate-300",
                                                children: replaceComponentName(setup.customizationExample)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1063,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1062,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1061,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1048,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1046,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-md font-semibold text-white mb-2",
                                children: "Important Notes"
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1073,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-400 space-y-2",
                                    children: [
                                        selectedLanguage === 'typescript' || selectedLanguage === 'javascript' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This component is designed for React Three Fiber applications"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1078,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Make sure you have a Canvas component wrapping your 3D content"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry files are separated for better maintainability and reusability"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1080,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Each mesh component imports its geometry from the geometries folder"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1081,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'python' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses ModernGL for high-performance OpenGL rendering"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1085,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Make sure you have OpenGL drivers installed on your system"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is optimized for NumPy arrays"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1087,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Each component is a separate class for modularity"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1088,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'java' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses LWJGL for OpenGL bindings"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1092,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Make sure to include native libraries for your platform"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1093,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is stored in efficient buffer objects"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1094,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Memory management is handled automatically"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'csharp' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses OpenTK for OpenGL bindings"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1099,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Compatible with .NET Core and .NET Framework"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1100,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Implements IDisposable for proper resource cleanup"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is optimized for GPU buffers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'cpp' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses modern OpenGL with GLEW and GLFW"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Requires C++11 or later"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Uses RAII for automatic resource management"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is stored in efficient STL containers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'go' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses go-gl bindings for OpenGL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Requires CGO to be enabled"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Memory management is handled by Go's garbage collector"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is stored in slices for efficiency"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1116,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'rust' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses wgpu for cross-platform graphics"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Memory safety is guaranteed by Rust's ownership system"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1121,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is stored in efficient Vec containers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Compatible with WebAssembly for web deployment"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1123,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : selectedLanguage === 'swift' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• This implementation uses Metal for high-performance graphics"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Compatible with iOS, macOS, and tvOS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1128,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Automatic reference counting handles memory management"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry data is optimized for Metal buffers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1130,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Geometry files are separated for better maintainability"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Each component is modular and can be used independently"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Memory optimization is applied for large models"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "• Follow the platform-specific best practices for your language"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pt-2 border-t border-slate-700 mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Performance Tips:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 17
                                                }, this),
                                                " For extremely large models (>100MB), consider:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1142,
                                                    columnNumber: 17
                                                }, this),
                                                "• Loading geometry data asynchronously",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1143,
                                                    columnNumber: 17
                                                }, this),
                                                "• Implementing level-of-detail (LOD) systems",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1144,
                                                    columnNumber: 17
                                                }, this),
                                                "• Using instancing for repeated geometry",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1145,
                                                    columnNumber: 17
                                                }, this),
                                                "• Applying mesh simplification for distant objects"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1075,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1074,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1072,
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
_c2 = HowToUseSection;
function GLBConverter() {
    var _LANGUAGES_find, _projectStructure_geometries, _LANGUAGES_find1, _projectStructure_geometries1, _LANGUAGES_find2, _LANGUAGES_find3, _projectStructure_geometries2;
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
                                const structure = generateProjectStructure(gltf, componentName, displayMode, selectedLanguage);
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
                    const structure = generateProjectStructure(gltfData, componentName, displayMode, selectedLanguage);
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(content, "".concat(componentName, "-").concat(selectedLanguage).concat(suffix, ".zip"));
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
            const structure = generateProjectStructure(gltfData, componentName, displayMode, selectedLanguage);
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
                                    lineNumber: 1441,
                                    columnNumber: 13
                                }, this),
                                "GLB to Code Converter"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 1440,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 max-w-3xl mx-auto text-lg",
                            children: "Convert your GLB 3D models into self-contained components in 15+ programming languages with separate geometry blocks for easier maintenance. Handles large files efficiently with progress tracking and memory optimization."
                        }, void 0, false, {
                            fileName: "[project]/app/glb-convertor/page.tsx",
                            lineNumber: 1444,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 1439,
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
                                        lineNumber: 1461,
                                        columnNumber: 15
                                    }, this),
                                    "Upload"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1453,
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
                                        lineNumber: 1473,
                                        columnNumber: 15
                                    }, this),
                                    "Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1464,
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
                                        lineNumber: 1485,
                                        columnNumber: 15
                                    }, this),
                                    "Code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1476,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1452,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 1451,
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
                                lineNumber: 1495,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-200",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1496,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1494,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 1493,
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
                                            lineNumber: 1507,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-white mb-2",
                                            children: "Upload your GLB model"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1508,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 mb-6",
                                            children: "Drop your .glb file here or click to browse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1511,
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
                                            lineNumber: 1514,
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
                                                        lineNumber: 1530,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Processing..."
                                                ]
                                            }, void 0, true) : 'Choose File'
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1522,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1506,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1505,
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
                                                lineNumber: 1544,
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
                                                lineNumber: 1547,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1543,
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
                                            lineNumber: 1550,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1549,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs mt-2",
                                        children: progress < 100 ? "Loading large model. This may take a few moments..." : "Optimizing model data for transpilation..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1555,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1542,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1504,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 1503,
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
                                        lineNumber: 1572,
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
                                                        lineNumber: 1576,
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
                                                                lineNumber: 1582,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "wireframe",
                                                                children: "Wireframe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1583,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "solid",
                                                                children: "Solid Color"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1584,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "normals",
                                                                children: "Normals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1585,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "depth",
                                                                children: "Depth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1586,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "points",
                                                                children: "Point Cloud"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1587,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1577,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1575,
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
                                                                lineNumber: 1594,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Auto Rotate"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1593,
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
                                                                lineNumber: 1603,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Grid"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1602,
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
                                                                lineNumber: 1612,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Axes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1611,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1592,
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
                                                            lineNumber: 1631,
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
                                                            lineNumber: 1636,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Download ",
                                                        displayMode,
                                                        " Version"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1622,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1573,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1571,
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
                                        lineNumber: 1647,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1646,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1645,
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
                                            lineNumber: 1667,
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
                                            lineNumber: 1668,
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
                                            lineNumber: 1669,
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
                                                            lineNumber: 1676,
                                                            columnNumber: 27
                                                        }, void 0),
                                                        "Loading model..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1675,
                                                    columnNumber: 25
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1674,
                                                columnNumber: 23
                                            }, void 0),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelPreview, {
                                                url: modelUrl,
                                                displayMode: displayMode,
                                                autoRotate: autoRotate
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1681,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1673,
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
                                            lineNumber: 1690,
                                            columnNumber: 21
                                        }, this),
                                        showAxes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("axesHelper", {
                                            args: [
                                                2
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1694,
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
                                            lineNumber: 1697,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                                            preset: "studio"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1704,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1659,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1658,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm mt-4 text-center",
                                children: "Use mouse to rotate, zoom, and pan around the model. Try different display modes to analyze the model structure."
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1708,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1570,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 1569,
                    columnNumber: 11
                }, this),
                isProcessing && activeTab === 'code' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 right-4 bg-slate-800 px-3 py-1 rounded text-sm text-purple-400",
                    children: "Regenerating code..."
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 1716,
                    columnNumber: 11
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
                                                lineNumber: 1727,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageSelector, {
                                                    selectedLanguage: selectedLanguage,
                                                    onChange: setSelectedLanguage
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1732,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1731,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1726,
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
                                                            lineNumber: 1749,
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
                                                            lineNumber: 1754,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Download Full Project"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1740,
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
                                                            lineNumber: 1769,
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
                                                            lineNumber: 1774,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Download Component"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1760,
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
                                                        lineNumber: 1784,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Download GLB"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1780,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1739,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1725,
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
                                                            lineNumber: 1795,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Project Structure"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1794,
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
                                                                        lineNumber: 1801,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "components"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1802,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1800,
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
                                                                                lineNumber: 1806,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium",
                                                                                children: componentName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 1807,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1805,
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
                                                                                        lineNumber: 1811,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: [
                                                                                            "index.",
                                                                                            (_LANGUAGES_find = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find === void 0 ? void 0 : _LANGUAGES_find.extension
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1812,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 1810,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1816,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: "geometries"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1817,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 1815,
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
                                                                                                lineNumber: 1822,
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
                                                                                                lineNumber: 1823,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1821,
                                                                                        columnNumber: 33
                                                                                    }, this);
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 1819,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1829,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: "meshes"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1830,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 1828,
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
                                                                                                lineNumber: 1835,
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
                                                                                                lineNumber: 1836,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1834,
                                                                                        columnNumber: 33
                                                                                    }, this);
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 1832,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center mt-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                                        className: "w-4 h-4 mr-2 text-orange-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1842,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-medium",
                                                                                        children: "materials"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1843,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 1841,
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
                                                                                                lineNumber: 1848,
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
                                                                                                lineNumber: 1849,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                        lineNumber: 1847,
                                                                                        columnNumber: 33
                                                                                    }, this);
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 1845,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1809,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1804,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                        className: "w-4 h-4 mr-2 text-purple-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1857,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "app"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1858,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1856,
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
                                                                                lineNumber: 1862,
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
                                                                                lineNumber: 1863,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1861,
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
                                                                                    lineNumber: 1867,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "page.",
                                                                                        (_LANGUAGES_find1 = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find1 === void 0 ? void 0 : _LANGUAGES_find1.extension
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                    lineNumber: 1868,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                                            lineNumber: 1866,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1865,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1860,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1799,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1798,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1793,
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
                                                            lineNumber: 1878,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Model Statistics"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1877,
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
                                                                        lineNumber: 1884,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.meshes.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1885,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1883,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Geometry Files:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1888,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: ((_projectStructure_geometries1 = projectStructure.geometries) === null || _projectStructure_geometries1 === void 0 ? void 0 : _projectStructure_geometries1.length) || 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1889,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1887,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Materials:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1892,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.materials.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1893,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1891,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total Vertices:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1896,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.totalVertices.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1897,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1895,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total Triangles:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1900,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: projectStructure.totalTriangles.toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1901,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1899,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "File Size:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1904,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: file ? (file.size / 1024 / 1024).toFixed(2) + ' MB' : 'N/A'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 1905,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1903,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "pt-2 border-t border-slate-700 mt-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Note: For extremely large models (>100MB), some meshes might be simplified\n                             during transpilation to prevent browser memory issues."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 1908,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 1907,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1882,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                    lineNumber: 1881,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 1876,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                    lineNumber: 1792,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1791,
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
                                                        lineNumber: 1923,
                                                        columnNumber: 21
                                                    }, this),
                                                    "index.",
                                                    (_LANGUAGES_find2 = LANGUAGES.find((l)=>l.id === selectedLanguage)) === null || _LANGUAGES_find2 === void 0 ? void 0 : _LANGUAGES_find2.extension,
                                                    " - Main Component"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1922,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                code: projectStructure.indexContent,
                                                languageId: selectedLanguage
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1926,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1921,
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
                                                        lineNumber: 1931,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Example Page"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1930,
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
                                                            lineNumber: 1936,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1935,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                        code: projectStructure.examplePageContent,
                                                        languageId: selectedLanguage
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 1940,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1934,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1929,
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
                                                        lineNumber: 1946,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Geometry Files"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1945,
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
                                                                        lineNumber: 1953,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 1952,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                                    code: geometry.content,
                                                                    languageId: selectedLanguage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 1957,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1951,
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
                                                        lineNumber: 1961,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1949,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1944,
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
                                                        lineNumber: 1970,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Mesh Components"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1969,
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
                                                                        lineNumber: 1977,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 1976,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                                    code: mesh.content,
                                                                    languageId: selectedLanguage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 1981,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1975,
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
                                                        lineNumber: 1985,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1973,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1968,
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
                                                        lineNumber: 1994,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Material Components"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1993,
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
                                                                        lineNumber: 2001,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 2000,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeEditor, {
                                                                    code: material.content,
                                                                    languageId: selectedLanguage
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 2005,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 1999,
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
                                                        lineNumber: 2009,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 1997,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                        lineNumber: 1992,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 1920,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HowToUseSection, {
                                selectedLanguage: selectedLanguage,
                                componentName: componentName
                            }, void 0, false, {
                                fileName: "[project]/app/glb-convertor/page.tsx",
                                lineNumber: 2018,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/glb-convertor/page.tsx",
                        lineNumber: 1724,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/glb-convertor/page.tsx",
                    lineNumber: 1723,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/glb-convertor/page.tsx",
            lineNumber: 1437,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/glb-convertor/page.tsx",
        lineNumber: 1436,
        columnNumber: 5
    }, this);
}
_s(GLBConverter, "V2+TVAyJ7s+xB6EqOAR/CfCW1mI=");
_c3 = GLBConverter;
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
                        lineNumber: 2186,
                        columnNumber: 11
                    }, this),
                    "Loading model..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/glb-convertor/page.tsx",
                lineNumber: 2185,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/glb-convertor/page.tsx",
            lineNumber: 2184,
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
        lineNumber: 2194,
        columnNumber: 5
    }, this);
}
_s1(ModelPreview, "5T0y0OKdOy4BOwEO+2zjJKPtyj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = ModelPreview;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CodeEditor");
__turbopack_context__.k.register(_c1, "LanguageSelector");
__turbopack_context__.k.register(_c2, "HowToUseSection");
__turbopack_context__.k.register(_c3, "GLBConverter");
__turbopack_context__.k.register(_c4, "ModelPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_glb-convertor_page_tsx_d505dc0f._.js.map