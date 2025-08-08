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
"[project]/components/uploadbutton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const UploadButton = ({ label = 'Convert to GLB File', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: " inline-flex items-center justify-center px-5 py-3 font-medium text-sm text-gray-100 border border-white/20 rounded-xl hover:bg-gray-700 hover:border-gray-600 focus:outline-none transition ",
        ...props,
        children: label
    }, void 0, false, {
        fileName: "[project]/components/uploadbutton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = UploadButton;
}),
"[project]/types/constant.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
        importExample: `import ${"{componentName}"} from '@/components/${"{componentName}"}';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
export default function ModelPage() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ '{' } position: [0, 0, 5], fov: 50 {'}'} >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <${"{componentName}"} />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}`,
        customizationExample: `// Access individual parts
import { MeshName } from '@/components/${"{componentName}"}/meshes/MeshName';
import { MeshNameGeometry } from '@/components/${"{componentName}"}/geometries/MeshNameGeometry';
import MaterialName from '@/components/${"{componentName}"}/materials/MaterialName';
function CustomModel() {
  return (
    <group>
      <mesh geometry={MeshNameGeometry} material={MaterialName()} />
    </group>
  );
}`
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
        importExample: `import ${"{componentName}"} from './components/${"{componentName}"}';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
export default function ModelPage() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <${"{componentName}"} />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}`,
        customizationExample: `// Access individual parts
import { MeshName } from './components/${"{componentName}"}/meshes/MeshName';
import { MeshNameGeometry } from './components/${"{componentName}"}/geometries/MeshNameGeometry';
import MaterialName from './components/${"{componentName}"}/materials/MaterialName';
function CustomModel() {
  return (
    <group>
      <mesh geometry={MeshNameGeometry} material={MaterialName()} />
    </group>
  );
}`
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
        importExample: `from ${"{componentName}"} import ${"{componentName}"}
import pyglet
import moderngl
from pyrr import Matrix44
class ModelApp:
    def __init__(self):
        self.window = pyglet.window.Window(800, 600, caption='${"{componentName}"} Viewer')
        self.ctx = moderngl.create_context()
        self.scene = ${"{componentName}"}(self.ctx)
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
        packageManager: "maven/gradle",
        dependencies: [
            "org.lwjgl:lwjgl:3.3.3",
            "org.lwjgl:lwjgl-opengl:3.3.3",
            "org.lwjgl:lwjgl-glfw:3.3.3"
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
        devInstallCommand: "",
        setupSteps: [
            "Create a new Java project with Maven or Gradle",
            "Add LWJGL dependencies to your build file",
            "Extract the downloaded component files to your src folder",
            "Run the example application"
        ],
        importExample: `import ${"{componentName}"};
public class ModelApp {
    public static void main(String[] args) {
        // Initialize LWJGL and OpenGL context
        // Create and render the model
        ${"{componentName}"} model = new ${"{componentName}"}();
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
        importExample: `using ${"{componentName}"};
using OpenTK.Graphics.OpenGL4;
using OpenTK.Windowing.Desktop;
class Program
{
    static void Main()
    {
        var model = new ${"{componentName}"}();
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
        packageManager: "vcpkg/conan",
        dependencies: [
            "glew",
            "glfw3",
            "glm"
        ],
        devDependencies: [],
        installCommand: `// vcpkg
vcpkg install glew glfw3 glm
// Or with CMake
find_package(glfw3 REQUIRED)
find_package(GLEW REQUIRED)
find_package(glm REQUIRED)`,
        devInstallCommand: "",
        setupSteps: [
            "Create a new C++ project with CMake",
            "Install OpenGL dependencies (GLEW, GLFW, GLM)",
            "Extract the downloaded component files to your project",
            "Compile and run the example application"
        ],
        importExample: `#include "${"{componentName}"}.h"
#include <GL/glew.h>
#include <GLFW/glfw3.h>
int main() {
    // Initialize GLFW and OpenGL
    glfwInit();
    GLFWwindow* window = glfwCreateWindow(800, 600, "${"{componentName}"} Viewer", NULL, NULL);
    glfwMakeContextCurrent(window);
    glewInit();
    ${"{componentName}"} model;
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
        packageManager: "go mod",
        dependencies: [
            "github.com/go-gl/gl/v4.1-core/gl",
            "github.com/go-gl/glfw/v3.3/glfw",
            "github.com/go-gl/mathgl/mgl32"
        ],
        devDependencies: [],
        installCommand: `go mod init your-project
go get github.com/go-gl/gl/v4.1-core/gl
go get github.com/go-gl/glfw/v3.3/glfw
go get github.com/go-gl/mathgl/mgl32`,
        devInstallCommand: "",
        setupSteps: [
            "Create a new Go module",
            "Install OpenGL dependencies",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: `package main
import (
    "./${"{componentName}"}"
    "github.com/go-gl/gl/v4.1-core/gl"
    "github.com/go-gl/glfw/v3.3/glfw"
)
func main() {
    // Initialize GLFW and OpenGL
    glfw.Init()
    defer glfw.Terminate()
    window, _ := glfw.CreateWindow(800, 600, "${"{componentName}"} Viewer", nil, nil)
    window.MakeContextCurrent()
    gl.Init()
    model := ${"{componentName}"}.New${"{componentName}"}()
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
        packageManager: "cargo",
        dependencies: [
            "wgpu",
            "winit",
            "bytemuck",
            "glam"
        ],
        devDependencies: [],
        installCommand: `# Add to Cargo.toml
[dependencies]
wgpu = "0.18"
winit = "0.28"
bytemuck = "1.14"
glam = "0.24"`,
        devInstallCommand: "",
        setupSteps: [
            "Create a new Rust project with Cargo",
            "Add wgpu dependencies to Cargo.toml",
            "Extract the downloaded component files to your src folder",
            "Run the example application"
        ],
        importExample: `use ${"{componentName}"}::${"{componentName}"};
use wgpu::Device;
use winit::event_loop::EventLoop;
fn main() {
    let event_loop = EventLoop::new();
    // Initialize wgpu and create device
    let device = /* initialize device */;
    let model = ${"{componentName}"}::new(&device);
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
        packageManager: "Swift Package Manager",
        dependencies: [
            "Metal",
            "MetalKit",
            "simd"
        ],
        devDependencies: [],
        installCommand: `// Add to Package.swift
dependencies: [
    .package(url: "https://github.com/apple/swift-numerics", from: "1.0.0")
]`,
        devInstallCommand: "",
        setupSteps: [
            "Create a new iOS/macOS project",
            "Import Metal and MetalKit frameworks",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: `import ${"{componentName}"}
import Metal
import MetalKit
class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        guard let device = MTLCreateSystemDefaultDevice() else { return }
        let model = ${"{componentName}"}(device: device)
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
        packageManager: "Gradle",
        dependencies: [
            "org.lwjgl:lwjgl:3.3.3",
            "org.lwjgl:lwjgl-opengl:3.3.3"
        ],
        devDependencies: [],
        installCommand: `// build.gradle.kts
dependencies {
    implementation("org.lwjgl:lwjgl:3.3.3")
    implementation("org.lwjgl:lwjgl-opengl:3.3.3")
}`,
        devInstallCommand: "",
        setupSteps: [
            "Create a new Kotlin project with Gradle",
            "Add LWJGL dependencies",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: `import ${"{componentName}"}
import org.lwjgl.opengl.GL
fun main() {
    // Initialize LWJGL and OpenGL
    val model = ${"{componentName}"}()
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
        importExample: `require './${"{componentName}"}'
require 'opengl'
require 'glfw'
class ModelApp
  def initialize
    @model = ${"{componentName}"}::${"{componentName}"}.new
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
        importExample: `<?php
require_once './${"{componentName}"}.php';
use OpenGL\\GL;
class ModelApp {
    private $model;
    public function __construct() {
        $this->model = new ${"{componentName}"}();
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
        packageManager: "sbt",
        dependencies: [
            "org.lwjgl:lwjgl:3.3.3",
            "org.lwjgl:lwjgl-opengl:3.3.3"
        ],
        devDependencies: [],
        installCommand: `// build.sbt
libraryDependencies ++= Seq(
  "org.lwjgl" % "lwjgl" % "3.3.3",
  "org.lwjgl" % "lwjgl-opengl" % "3.3.3"
)`,
        devInstallCommand: "",
        setupSteps: [
            "Create a new Scala project with sbt",
            "Add LWJGL dependencies to build.sbt",
            "Extract the downloaded component files to your project",
            "Run the example application"
        ],
        importExample: `import ${"{componentName}"}._
import org.lwjgl.opengl.GL
object ModelApp extends App {
  // Initialize LWJGL and OpenGL
  val model = new ${"{componentName}"}()
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
        packageManager: "pub",
        dependencies: [
            "flutter",
            "vector_math",
            "flutter_gl"
        ],
        devDependencies: [],
        installCommand: `# pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  vector_math: ^2.1.4
  flutter_gl: ^0.0.1`,
        devInstallCommand: "",
        setupSteps: [
            "Create a new Flutter project",
            "Add dependencies to pubspec.yaml",
            "Extract the downloaded component files to your lib folder",
            "Run the example application"
        ],
        importExample: `import 'package:flutter/material.dart';
import './${"{componentName}"}.dart';
class ModelPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ${"{componentName}"}(),
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
        importExample: `library(rgl)
source("./${"{componentName}"}.R")
# Create and display the model
model <- ${"{componentName}"}$new()
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
}),
"[project]/components/code-editor.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CodeEditor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/constant.ts [app-ssr] (ecmascript)");
;
;
;
function CodeEditor({ code, languageId }) {
    const copyToClipboard = (text)=>{
        navigator.clipboard.writeText(text).then(()=>{
            console.log("Copied to clipboard");
        });
    };
    const language = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"].find((lang)=>lang.id === languageId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1E1E1E] rounded-lg overflow-hidden font-mono text-sm h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-[#333333]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FF5F56]"
                            }, void 0, false, {
                                fileName: "[project]/components/code-editor.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#FFBD2E]"
                            }, void 0, false, {
                                fileName: "[project]/components/code-editor.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 rounded-full bg-[#27C93F]"
                            }, void 0, false, {
                                fileName: "[project]/components/code-editor.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/code-editor.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#CCCCCC] text-xs flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: language?.name
                            }, void 0, false, {
                                fileName: "[project]/components/code-editor.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: "●"
                            }, void 0, false, {
                                fileName: "[project]/components/code-editor.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#858585]",
                                children: [
                                    lines.length,
                                    " lines"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/code-editor.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>copyToClipboard(code),
                                className: "ml-2 p-1 hover:bg-[#404040] rounded",
                                title: "Copy to clipboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/code-editor.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/code-editor.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/code-editor.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/code-editor.tsx",
                lineNumber: 79,
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
                                    fileName: "[project]/components/code-editor.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/code-editor.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `whitespace-pre ${getSyntaxClass(line)}`,
                                    children: line
                                }, i, false, {
                                    fileName: "[project]/components/code-editor.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/code-editor.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/code-editor.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/code-editor.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/code-editor.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/language-selector.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LanguageSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/constant.ts [app-ssr] (ecmascript)");
;
;
;
function LanguageSelector({ selectedLanguage, onChange }) {
    const groups = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"].map((lang)=>lang.group)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                    className: "w-4 h-4 text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/components/language-selector.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedLanguage,
                    onChange: (e)=>onChange(e.target.value),
                    className: "bg-[#252526] text-white px-3 py-1.5 rounded border border-[#3c3c3c] focus:border-purple-500 outline-none text-sm appearance-none pr-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%239CA3AF%22><path d=%22M7 10l5 5 5-5z%22/></svg>')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem] cursor-pointer",
                    children: groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                            label: group,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"].filter((lang)=>lang.group === group).map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: lang.id,
                                    children: lang.name
                                }, lang.id, false, {
                                    fileName: "[project]/components/language-selector.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this))
                        }, group, false, {
                            fileName: "[project]/components/language-selector.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/language-selector.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/language-selector.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/language-selector.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/file-tree.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>FileTree
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/constant.ts [app-ssr] (ecmascript)");
;
;
;
function FileTree({ projectStructure, selectedLanguage, onSelectFile, expandedFolders, toggleFolder, activeFile }) {
    if (!projectStructure) return null;
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"].find((l)=>l.id === selectedLanguage);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                onClick: ()=>toggleFolder("components"),
                children: [
                    expandedFolders.components ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                        className: "w-4 h-4 mr-2 text-yellow-400"
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#C5C5C5]",
                        children: "components"
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/file-tree.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            expandedFolders.components && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                        onClick: ()=>toggleFolder("componentName"),
                        children: [
                            expandedFolders.componentName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                className: "w-4 h-4 mr-2 text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#C5C5C5]",
                                children: "Model"
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    expandedFolders.componentName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${activeFile === "index" ? "bg-[#2A2D2E]" : ""}`,
                                onClick: ()=>onSelectFile("index", projectStructure.indexContent),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: `w-4 h-4 mr-2 ${getIcon("index")}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C5C5C5]",
                                        children: [
                                            "index.",
                                            lang.extension
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                                onClick: ()=>toggleFolder("geometries"),
                                children: [
                                    expandedFolders.geometries ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C5C5C5]",
                                        children: "geometries"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            expandedFolders.geometries && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4",
                                children: projectStructure.geometries?.map((geometry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${activeFile === `geometry-${i}` ? "bg-[#2A2D2E]" : ""}`,
                                        onClick: ()=>onSelectFile(`geometry-${i}`, geometry.content),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                className: `w-4 h-4 mr-2 ${getIcon(geometry.name)}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/file-tree.tsx",
                                                lineNumber: 104,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#C5C5C5]",
                                                children: [
                                                    geometry.name,
                                                    "Geometry.",
                                                    lang.geometryExtension
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/file-tree.tsx",
                                                lineNumber: 105,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                                onClick: ()=>toggleFolder("meshes"),
                                children: [
                                    expandedFolders.meshes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-4 h-4 mr-2 text-cyan-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C5C5C5]",
                                        children: "meshes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            expandedFolders.meshes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4",
                                children: projectStructure.meshes.map((mesh, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${activeFile === `mesh-${i}` ? "bg-[#2A2D2E]" : ""}`,
                                        onClick: ()=>onSelectFile(`mesh-${i}`, mesh.content),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                className: `w-4 h-4 mr-2 ${getIcon(mesh.name)}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/file-tree.tsx",
                                                lineNumber: 136,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#C5C5C5]",
                                                children: [
                                                    mesh.name,
                                                    ".",
                                                    lang.extension
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/file-tree.tsx",
                                                lineNumber: 137,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 129,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                                onClick: ()=>toggleFolder("materials"),
                                children: [
                                    expandedFolders.materials ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-4 h-4 mr-2 text-orange-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#C5C5C5]",
                                        children: "materials"
                                    }, void 0, false, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this),
                            expandedFolders.materials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4",
                                children: projectStructure.materials.map((material, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${activeFile === `material-${i}` ? "bg-[#2A2D2E]" : ""}`,
                                        onClick: ()=>onSelectFile(`material-${i}`, material.content),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                className: `w-4 h-4 mr-2 ${getIcon(material.name)}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/file-tree.tsx",
                                                lineNumber: 170,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#C5C5C5]",
                                                children: [
                                                    material.name,
                                                    ".",
                                                    lang.extension
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/file-tree.tsx",
                                                lineNumber: 173,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/file-tree.tsx",
                                        lineNumber: 161,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/file-tree.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                onClick: ()=>toggleFolder("app"),
                children: [
                    expandedFolders.app ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                        className: "w-4 h-4 mr-2 text-purple-400"
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#C5C5C5]",
                        children: "app"
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/file-tree.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            expandedFolders.app && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded",
                        onClick: ()=>toggleFolder("modelPage"),
                        children: [
                            expandedFolders.modelPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3 h-3 mr-1 text-[#C5C5C5]"
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                className: "w-4 h-4 mr-2 text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#C5C5C5]",
                                children: "model-page"
                            }, void 0, false, {
                                fileName: "[project]/components/file-tree.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    expandedFolders.modelPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${activeFile === "examplePage" ? "bg-[#2A2D2E]" : ""}`,
                            onClick: ()=>onSelectFile("examplePage", projectStructure.examplePageContent),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: `w-4 h-4 mr-2 ${getIcon("page")}`
                                }, void 0, false, {
                                    fileName: "[project]/components/file-tree.tsx",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#C5C5C5]",
                                    children: [
                                        "page.",
                                        lang.extension
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/file-tree.tsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/file-tree.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/file-tree.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/file-tree.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/file-tree.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/functions/isMesh.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isMesh": ()=>isMesh
});
function isMesh(object) {
    return "isMesh" in object && object.isMesh === true;
}
}),
"[project]/components/model-preview.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ModelPreview
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$isMesh$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/isMesh.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function ModelPreview({ url, displayMode, autoRotate }) {
    const [gltf, setGltf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load GLTF with memory optimization for large files
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        // Set up DRACO for compressed models
        const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRACOLoader"]();
        dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
        loader.setDRACOLoader(dracoLoader);
        // For large files, use a more memory-efficient approach
        fetch(url).then((response)=>response.arrayBuffer()).then((data)=>{
            if (!isMounted) return;
            loader.parse(data, "", (gltf)=>{
                // For extremely large models, simplify geometries to prevent memory issues
                if (gltf.scene) {
                    gltf.scene.traverse((object)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$isMesh$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMesh"])(object)) {
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
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$isMesh$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMesh"])(object)) {
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
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$isMesh$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMesh"])(child)) {
                    const mesh = child;
                    const originalMaterial = mesh.material;
                    // Dispose of old materials to prevent memory leaks
                    if (Array.isArray(originalMaterial)) {
                        originalMaterial.forEach((material)=>material.dispose());
                    } else if (originalMaterial && "dispose" in originalMaterial) {
                        originalMaterial.dispose();
                    }
                    // Create new materials based on display mode
                    switch(displayMode){
                        case "wireframe":
                            {
                                // Clone original material(s) and enable wireframe if supported
                                if (Array.isArray(originalMaterial)) {
                                    mesh.material = originalMaterial.map((mat)=>{
                                        const newMat = mat.clone();
                                        // Only set wireframe if the material type supports it
                                        if ("wireframe" in newMat) {
                                            newMat.wireframe = true;
                                        }
                                        newMat.transparent = true;
                                        newMat.opacity = 0.8;
                                        return newMat;
                                    });
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
                            mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                                color: 0x00ff00,
                                size: 0.01,
                                sizeAttenuation: true
                            });
                            break;
                        case "normals":
                            mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]();
                            break;
                        case "depth":
                            mesh.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]();
                            break;
                        case "solid":
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
                        fileName: "[project]/components/model-preview.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    "Loading model..."
                ]
            }, void 0, true, {
                fileName: "[project]/components/model-preview.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/model-preview.tsx",
            lineNumber: 165,
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
        fileName: "[project]/components/model-preview.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
}),
"[project]/templates/example/cpp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CPPExample": ()=>CPPExample
});
function CPPExample(componentName) {
    return `#include <GL/glew.h>
    #include <GLFW/glfw3.h>
    #include "components/${componentName}.h"

    /**
     * Example application for ${componentName} using OpenGL
     */
    int main() {
        // Initialize GLFW
        if (!glfwInit()) {
            return -1;
        }
        
        // Create window
        GLFWwindow* window = glfwCreateWindow(800, 600, "${componentName} Viewer", NULL, NULL);
        if (!window) {
            glfwTerminate();
            return -1;
        }
        
        glfwMakeContextCurrent(window);
        glewInit();
        
        // Enable depth testing
        glEnable(GL_DEPTH_TEST);
        
        // Create model
        ${componentName} model;
        
        // Main loop
        while (!glfwWindowShouldClose(window)) {
            // Clear the screen
            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
            
            // Set up perspective projection
            // (In a real application, you would set up matrices here)
            
            // Render model
            model.render();
            
            // Swap buffers and poll events
            glfwSwapBuffers(window);
            glfwPollEvents();
        }
        
        // Cleanup
        glfwTerminate();
        return 0;
    }
    `;
}
}),
"[project]/templates/example/csharp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CSharpExample": ()=>CSharpExample
});
function CSharpExample(componentName) {
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
}
}),
"[project]/templates/example/dart.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DartExample": ()=>DartExample
});
function DartExample(componentName) {
    return `import 'package:flutter/material.dart';
    import 'package:opengl/opengl.dart';
    import 'package:flutter_gl/flutter_gl.dart';
    /**
     * Example application for ${componentName} using Flutter OpenGL
     */
    class ${componentName}Page extends StatefulWidget {
      @override
      _${componentName}PageState createState() => _${componentName}PageState();
    }

    class _${componentName}PageState extends State<${componentName}Page> {
      late OpenGLRenderer _renderer;
      late FlutterGlPlugin _glPlugin;
      late ${componentName} _model;
      double _rotation = 0.0;

      @override
      void initState() {
        super.initState();
        _glPlugin = FlutterGlPlugin();
        _glPlugin.initialize().then((_) {
          _renderer = OpenGLRenderer(_glPlugin);
          _model = ${componentName}();
          _startAnimation();
        });
      }

      void _startAnimation() {
        Future.delayed(Duration(milliseconds: 16), () {
          if (mounted) {
            _rotation += 0.01;
            setState(() {});
            _startAnimation();
          }
        });
      }

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(title: Text('${componentName} Viewer')),
          body: Builder(
            builder: (context) => GestureDetector(
              onPanUpdate: (details) => setState(() => _rotation += details.delta.dx * 0.01),
              child: CustomPaint(
                painter: _${componentName}Painter(_renderer, _model, _rotation),
                size: Size.infinite,
              ),
            ),
          ),
        );
      }

      @override
      void dispose() {
        _glPlugin.dispose();
        super.dispose();
      }
    }

    class _${componentName}Painter extends CustomPainter {
      final OpenGLRenderer renderer;
      final ${componentName} model;
      final double rotation;

      _${componentName}Painter(this.renderer, this.model, this.rotation);

      @override
      void paint(Canvas canvas, Size size) {
        renderer.render((gl) {
          gl.clearColor(0.2, 0.3, 0.3, 1.0);
          gl.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
          gl.enable(GL_DEPTH_TEST);
          
          // Render model
          model.render();
        });
      }

      @override
      bool shouldRepaint(_) => true;
    }
    `;
}
}),
"[project]/templates/example/go.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GoExample": ()=>GoExample
});
function GoExample(componentName) {
    return `package main

    import (
        "github.com/go-gl/gl/v4.1-core/gl"
        "github.com/go-gl/glfw/v3.3/glfw"
        "yourproject/components"
        "runtime"
    )

    // initGlfw initializes GLFW and returns a Window
    func initGlfw() *glfw.Window {
        if err := glfw.Init(); err != nil {
            panic(err)
        }
        glfw.WindowHint(glfw.Resizable, glfw.True)
        glfw.WindowHint(glfw.ContextVersionMajor, 4)
        glfw.WindowHint(glfw.ContextVersionMinor, 1)
        glfw.WindowHint(glfw.OpenGLProfile, glfw.OpenGLCoreProfile)
        glfw.WindowHint(glfw.OpenGLForwardCompatible, glfw.True)

        window, err := glfw.CreateWindow(800, 600, "${componentName} Viewer", nil, nil)
        if err != nil {
            panic(err)
        }
        window.MakeContextCurrent()

        return window
    }

    // initOpenGL initializes OpenGL
    func initOpenGL() {
        if err := gl.Init(); err != nil {
            panic(err)
        }
        version := gl.GoStr(gl.GetString(gl.VERSION))
        println("OpenGL version", version)
        
        gl.Enable(gl.DEPTH_TEST)
        gl.DepthFunc(gl.LESS)
        gl.ClearColor(0.2, 0.3, 0.3, 1.0)
    }

    func main() {
        runtime.LockOSThread()
        
        window := initGlfw()
        initOpenGL()
        
        // Create model
        model := components.New${componentName}()
        
        // Main loop
        for !window.ShouldClose() {
            // Clear the screen
            gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
            
            // Render model
            model.Render()
            
            // Maintenance
            window.SwapBuffers()
            glfw.PollEvents()
        }
        
        // Cleanup
        model.Cleanup()
    }
    `;
}
}),
"[project]/templates/example/java.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavaExample": ()=>JavaExample
});
function JavaExample(componentName) {
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
}
}),
"[project]/templates/example/javascript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavascriptExample": ()=>JavascriptExample
});
function JavascriptExample(componentName) {
    return `import React from 'react';
    import { Canvas } from '@react-three/fiber';
    import { OrbitControls, Environment } from '@react-three/drei';
    import ${componentName} from '@/components/${componentName}';
    /**
     * Example page for ${componentName}
     */
    export default function ${componentName}Page() {
      return (
        <div className="w-full h-screen">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <${componentName} />
            <OrbitControls enableZoom enablePan enableRotate />
            <Environment preset="studio" />
          </Canvas>
        </div>
      );
    }
    `;
}
}),
"[project]/templates/example/kotlin.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "KotlinExample": ()=>KotlinExample
});
function KotlinExample(componentName) {
    return `import org.lwjgl.glfw.GLFWErrorCallback
    import org.lwjgl.opengl.GL
    /**
     * Example application for ${componentName} using LWJGL in Kotlin
     */
    object ${componentName}App {
        @JvmStatic
        fun main(args: Array<String>) {
            // Setup error callback
            GLFWErrorCallback.createPrint(System.err).set()

            // Initialize GLFW
            if (!glfwInit()) throw IllegalStateException("Unable to initialize GLFW")

            // Create window
            val window = glfwCreateWindow(800, 600, "${componentName} Viewer", 0, 0)
            if (window == 0L) throw RuntimeException("Failed to create GLFW window")

            glfwMakeContextCurrent(window)
            GL.createCapabilities()

            // Enable depth testing
            glEnable(GL_DEPTH_TEST)

            // Create model
            val model = ${componentName}()

            // Main loop
            while (!glfwWindowShouldClose(window)) {
                glClear(GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT)

                // Render model
                model.render()

                glfwSwapBuffers(window)
                glfwPollEvents()
            }

            // Cleanup
            glfwTerminate()
        }
    }
    `;
}
}),
"[project]/templates/example/php.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PHPExample": ()=>PHPExample
});
function PHPExample(componentName) {
    return `<?php
    /**
     * Example application for ${componentName} using PHP-GLFW
     */
    require_once 'vendor/autoload.php';
    use GL\\GL;
    use GL\\Window\\Window;
    class ${componentName}App {
        private $window;
        private $model;
        public function __construct() {
            $this->init();
        }
        private function init() {
            $this->window = new Window(800, 600, "${componentName} Viewer");
            $this->window->setSwapInterval(1);
            $this->model = new ${componentName}();
        }
        public function run() {
            while (!$this->window->shouldClose()) {
                GL::clear(GL::COLOR_BUFFER_BIT | GL::DEPTH_BUFFER_BIT);
                // Render model
                $this->model->render();
                $this->window->swapBuffers();
                $this->window->pollEvents();
            }
        }
    }
    if (php_sapi_name() === 'cli') {
        $app = new ${componentName}App();
        $app->run();
    }
    `;
}
}),
"[project]/templates/example/python.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PythonExample": ()=>PythonExample
});
function PythonExample(componentName) {
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
}
}),
"[project]/templates/example/r.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RExample": ()=>RExample
});
function RExample(componentName) {
    return `#' Example application for ${componentName} using R OpenGL
    #' @importFrom OpenGL gl
    #' @importFrom magick image_read
    library(OpenGL)
    library(magick)

    #' Initialize OpenGL context
    initGL <- function(width = 800, height = 600) {
      # Create window
      glInit("R 3D Viewer", width, height)
      
      # Setup viewport
      glViewport(0, 0, width, height)
      
      # Enable depth testing
      glEnable(GL_DEPTH_TEST)
      
      # Set clear color
      glClearColor(0.2, 0.3, 0.3, 1.0)
    }

    #' Main rendering loop
    renderLoop <- function(model, rotation = 0) {
      # Clear buffers
      glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
      
      # Render model
      do.call(model$render, list())
      
      # Swap buffers
      glSwapBuffers()
      
      # Update rotation
      rotation <- (rotation + 0.5) %% 360
      
      # Continue loop
      Sys.sleep(0.016)
      renderLoop(model, rotation)
    }

    #' Main application function
    main <- function() {
      # Initialize OpenGL
      initGL()
      
      # Create model
      model <- ${componentName}()
      
      # Start rendering loop
      renderLoop(model)
    }

    # Run application if script is executed directly
    if (sys.frames() == 0) {
      main()
    }
    `;
}
}),
"[project]/templates/example/ruby.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RubyExample": ()=>RubyExample
});
function RubyExample(componentName) {
    return `# Example application for ${componentName} using Ruby OpenGL
    require 'opengl'
    require 'glut'
    include Gl, Glu, Glut
    class ${componentName}App
      def initialize
        glutInit
        glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH)
        glutInitWindowSize(800, 600)
        glutCreateWindow("${componentName} Viewer")
        glEnable(GL_DEPTH_TEST)
        @model = ${componentName}.new
        glutDisplayFunc(method(:display))
        glutIdleFunc(method(:idle))
      end
      def display
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
        @model.render
        glutSwapBuffers
      end
      def idle
        glutPostRedisplay
      end
      def run
        glutMainLoop
      end
    end
    if __FILE__ == $0
      app = ${componentName}App.new
      app.run
    end
    `;
}
}),
"[project]/templates/example/rust.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RustExample": ()=>RustExample
});
function RustExample(componentName) {
    return `use wgpu::SurfaceConfiguration;
    use winit::{
        event::*,
        event_loop::{EventLoop, ControlFlow},
        window::WindowBuilder,
    };
    use ${componentName};

    /// Example application for ${componentName} using wgpu
    struct State {
        surface: wgpu::Surface,
        device: wgpu::Device,
        queue: wgpu::Queue,
        config: SurfaceConfiguration,
        size: winit::dpi::PhysicalSize<u32>,
        model: ${componentName},
    }

    impl State {
        async fn new(window: &winit::window::Window) -> Self {
            let size = window.inner_size();
            
            // The instance is a handle to our GPU
            let instance = wgpu::Instance::new(wgpu::Backends::all());
            let surface = unsafe { instance.create_surface(window) };
            let adapter = instance.request_adapter(
                &wgpu::RequestAdapterOptions {
                    power_preference: wgpu::PowerPreference::HighPerformance,
                    compatible_surface: Some(&surface),
                    force_fallback_adapter: false,
                },
            ).await.unwrap();
            
            let (device, queue) = adapter.request_device(
                &wgpu::DeviceDescriptor {
                    features: wgpu::Features::empty(),
                    limits: wgpu::Limits::default(),
                    label: None,
                },
                None,
            ).await.unwrap();
            
            let config = wgpu::SurfaceConfiguration {
                usage: wgpu::TextureUsages::RENDER_ATTACHMENT,
                format: surface.get_preferred_format(&adapter).unwrap(),
                width: size.width,
                height: size.height,
                present_mode: wgpu::PresentMode::Fifo,
            };
            surface.configure(&device, &config);
            
            let model = ${componentName}::new(&device);
            
            Self {
                surface,
                device,
                queue,
                config,
                size,
                model,
            }
        }
        
        fn resize(&mut self, new_size: winit::dpi::PhysicalSize<u32>) {
            if new_size.width > 0 && new_size.height > 0 {
                self.size = new_size;
                self.config.width = new_size.width;
                self.config.height = new_size.height;
                self.surface.configure(&self.device, &self.config);
            }
        }
        
        fn render(&mut self) -> Result<(), wgpu::SurfaceError> {
            let output = self.surface.get_current_frame()?.output;
            let view = output.texture.create_view(&wgpu::TextureViewDescriptor::default());
            
            let mut encoder = self.device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
                label: Some("${componentName} Encoder"),
            });
            
            {
                let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
                    label: Some("${componentName} Render Pass"),
                    color_attachments: &[wgpu::RenderPassColorAttachment {
                        view: &view,
                        resolve_target: None,
                        ops: wgpu::Operations {
                            load: wgpu::LoadOp::Clear(wgpu::Color {
                                r: 0.2,
                                g: 0.3,
                                b: 0.3,
                                a: 1.0,
                            }),
                            store: true,
                        },
                    }],
                    depth_stencil_attachment: None,
                });
                
                self.model.render(&mut render_pass);
            }
            
            self.queue.submit(std::iter::once(encoder.finish()));
            Ok(())
        }
    }

    pub async fn run() {
        let event_loop = EventLoop::new();
        let window = WindowBuilder::new()
            .with_title("${componentName} Viewer")
            .build(&event_loop)
            .unwrap();
        
        let mut state = State::new(&window).await;
        
        event_loop.run(move |event, _, control_flow| {
            match event {
                Event::WindowEvent {
                    ref event,
                    window_id,
                } if window_id == window.id() => match event {
                    WindowEvent::CloseRequested => *control_flow = ControlFlow::Exit,
                    WindowEvent::Resized(physical_size) => {
                        state.resize(*physical_size);
                    }
                    WindowEvent::ScaleFactorChanged { new_inner_size, .. } => {
                        state.resize(**new_inner_size);
                    }
                    _ => {}
                },
                Event::RedrawRequested(window_id) if window_id == window.id() => {
                    if let Err(e) = state.render() {
                        eprintln!("{:?}", e);
                        *control_flow = ControlFlow::Exit;
                        return;
                    }
                }
                Event::MainEventsCleared => {
                    window.request_redraw();
                }
                _ => {}
            }
        });
    }

    fn main() {
        #[cfg(target_arch = "wasm32")]
        {
            std::panic::set_hook(Box::new(console_error_panic_hook::hook));
            console_log::init().expect("Could not initialize logger");
            wasm_bindgen_futures::spawn_local(run());
        }
        
        #[cfg(not(target_arch = "wasm32"))]
        {
            pollster::block_on(run());
        }
    }
    `;
}
}),
"[project]/templates/example/scala.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ScalaExample": ()=>ScalaExample
});
function ScalaExample(componentName) {
    return `import org.lwjgl.glfw.GLFWErrorCallback
    import org.lwjgl.opengl.GL
    /**
     * Example application for ${componentName} using LWJGL in Scala
     */
    object ${componentName}App {
      def main(args: Array[String]): Unit = {
        // Setup error callback
        GLFWErrorCallback.createPrint(System.err).set()
        
        // Initialize GLFW
        if (!glfwInit()) throw new IllegalStateException("Unable to initialize GLFW")
        
        // Create window
        val window = glfwCreateWindow(800, 600, "${componentName} Viewer", 0L, 0L)
        if (window == 0) throw new RuntimeException("Failed to create GLFW window")
        
        glfwMakeContextCurrent(window)
        GL.createCapabilities()
        
        // Enable depth testing
        glEnable(GL_DEPTH_TEST)
        
        // Create model
        val model = new ${componentName}()
        
        // Main loop
        while (!glfwWindowShouldClose(window)) {
          glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
          
          // Render model
          model.render()
          
          glfwSwapBuffers(window)
          glfwPollEvents()
        }
        
        // Cleanup
        glfwTerminate()
      }
    }
    `;
}
}),
"[project]/templates/example/swift.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SwiftExample": ()=>SwiftExample
});
function SwiftExample(componentName) {
    return `import Metal
    import MetalKit
    import AppKit

    /// View controller for ${componentName} example
    class ${componentName}ViewController: NSViewController {
        var renderer: ${componentName}Renderer?
        
        override func viewDidLoad() {
            super.viewDidLoad()
            
            guard let mtkView = view as? MTKView else {
                print("View is not an MTKView")
                return
            }
            
            // Select the device to render with
            guard let device = MTLCreateSystemDefaultDevice() else {
                print("Metal is not supported on this device")
                return
            }
            
            mtkView.device = device
            mtkView.clearColor = MTLClearColor(red: 0.2, green: 0.3, blue: 0.3, alpha: 1.0)
            
            // Create renderer
            renderer = ${componentName}Renderer(mtkView: mtkView)
            renderer?.loadAssets()
        }
        
        override var acceptsFirstResponder: Bool {
            return true
        }
    }

    /// Renderer for ${componentName}
    class ${componentName}Renderer: NSObject {
        let commandQueue: MTLCommandQueue
        let mtkView: MTKView
        var model: ${componentName}?
        
        init(mtkView: MTKView) {
            self.mtkView = mtkView
            self.commandQueue = mtkView.device!.makeCommandQueue()!
            
            super.init()
            
            mtkView.delegate = self
        }
        
        func loadAssets() {
            // Create the 3D model
            model = ${componentName}(device: mtkView.device!)
        }
    }

    extension ${componentName}Renderer: MTKViewDelegate {
        func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {
            // Handle resize if needed
        }
        
        func draw(in view: MTKView) {
            guard let drawable = view.currentDrawable,
                  let renderPassDescriptor = view.currentRenderPassDescriptor else {
                return
            }
            
            let commandBuffer = commandQueue.makeCommandBuffer()
            let renderEncoder = commandBuffer?.makeRenderCommandEncoder(descriptor: renderPassDescriptor)
            
            // Render the model
            model?.render(renderEncoder: renderEncoder!)
            
            renderEncoder?.endEncoding()
            commandBuffer?.present(drawable)
            commandBuffer?.commit()
        }
    }

    /// macOS application delegate
    class AppDelegate: NSObject, NSApplicationDelegate {
        func applicationDidFinishLaunching(_ notification: Notification) {
            // Create window
            let window = NSWindow(
                contentRect: NSRect(x: 0, y: 0, width: 800, height: 600),
                styleMask: [.titled, .closable, .miniaturizable, .resizable],
                backing: .buffered,
                defer: false
            )
            window.title = "${componentName} Viewer"
            window.center()
            window.makeKeyAndOrderFront(nil)
            
            // Create Metal view
            let metalView = MTKView(frame: window.contentView!.bounds)
            window.contentView?.addSubview(metalView)
            
            // Create view controller
            let viewController = ${componentName}ViewController()
            window.contentViewController = viewController
        }
    }

    // Entry point
    let delegate = AppDelegate()
    NSApplication.shared.delegate = delegate
    _ = NSApplicationMain(CommandLine.argc, CommandLine.unsafeArgv)
    `;
}
}),
"[project]/templates/example/typescript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TypescriptExample": ()=>TypescriptExample
});
function TypescriptExample(componentName) {
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
}
}),
"[project]/lib/generator/generateExamplePage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>generateExamplePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/cpp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/csharp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/dart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/go.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/java.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/javascript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/kotlin.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/php.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/python.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/r.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/ruby.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/rust.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/scala.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/swift.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/example/typescript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/constant.ts [app-ssr] (ecmascript)");
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
;
function generateExamplePage(componentName, languageId) {
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][languageId];
    switch(languageId){
        case "typescript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypescriptExample"])(componentName);
        case "javascript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavascriptExample"])(componentName);
        case "python":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PythonExample"])(componentName);
        case "java":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavaExample"])(componentName);
        case "csharp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSharpExample"])(componentName);
        case "php":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHPExample"])(componentName);
        case "ruby":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RubyExample"])(componentName);
        case "scala":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScalaExample"])(componentName);
        case "kotlin":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KotlinExample"])(componentName);
        case "dart":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DartExample"])(componentName);
        case "r":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RExample"])(componentName);
        case "cpp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CPPExample"])(componentName);
        case "go":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoExample"])(componentName);
        case "rust":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RustExample"])(componentName);
        case "swift":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$example$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiftExample"])(componentName);
        default:
            // Fallback to TypeScript for unsupported languages
            return generateExamplePage(componentName, "typescript");
    }
}
}),
"[project]/lib/functions/getLanguageSpacificName.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getLanguageSpecificName": ()=>getLanguageSpecificName
});
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
}),
"[project]/lib/functions/sanitizeName.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "sanitizeName": ()=>sanitizeName
});
function sanitizeName(name) {
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
}),
"[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatArrayData": ()=>formatArrayData
});
function formatArrayData(data, languageId, chunkSize = 1000) {
    if (data.length <= chunkSize) {
        // Use language-specific array syntax only if needed
        switch(languageId){
            case "typescript":
            case "javascript":
                return `[${data.join(", ")}]`;
            case "python":
                return `[${data.join(", ")}]`;
            case "java":
            case "csharp":
                return `new float[]{${data.join("f, ")}f}`;
            case "cpp":
                return `{${data.join("f, ")}f}`;
            case "go":
                return `[]float32{${data.join(", ")}}`;
            case "rust":
                return `vec![${data.join(", ")}]`;
            case "swift":
                return `[${data.join(", ")}]`;
            default:
                return `[${data.join(", ")}]`;
        }
    }
    // Large arrays: use appropriate memory-efficient syntax
    switch(languageId){
        case "typescript":
        case "javascript":
            return `new Float32Array([${data.join(", ")}])`;
        case "python":
            return `np.array([${data.join(", ")}], dtype=np.float32)`;
        case "java":
        case "csharp":
            return `new float[]{${data.join("f, ")}f}`;
        case "cpp":
            return `{${data.join("f, ")}f}`;
        case "go":
            return `[]float32{${data.join(", ")}}`;
        case "rust":
            return `vec![${data.join(", ")}]`;
        case "swift":
            return `[${data.join(", ")}]`;
        default:
            return `[${data.join(", ")}]`;
    }
}
}),
"[project]/templates/geometry/typescript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TypescriptGeometry": ()=>TypescriptGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function TypescriptGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
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
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ""}
      
      ${uvs ? `const uvChunks = createGeometryChunk(${JSON.stringify(uvs)}, 2);
      const uvs = new Float32Array(uvChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ""}
      
      ${indices ? `const indexChunks = createGeometryChunk(${JSON.stringify(indices)}, 1);
      const indices = new Uint16Array(indexChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ""}` : `// Position data
      const positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)};
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      ${normals ? `// Normal data
      const normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals, languageId)};
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ""}
      
      ${uvs ? `// UV data
      const uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs, languageId)};
      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ""}
      
      ${indices ? `// Index data
      const indices = new Uint16Array(${JSON.stringify(indices)});
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ""}`}
    
      geometry.computeVertexNormals();
      return geometry;
    })();
    `;
}
}),
"[project]/templates/geometry/javascript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavascriptGeometry": ()=>JavascriptGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function JavascriptGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `import * as THREE from 'three';
        // ${meshName} geometry definition
        export const ${meshName}Geometry = (() => {
          const geometry = new THREE.BufferGeometry();
          // Position data
          const positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)};
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          ${normals ? `// Normal data
          const normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals, languageId)};
          geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));` : ""}
          ${uvs ? `// UV data
          const uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs, languageId)};
          geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));` : ""}
          ${indices ? `// Index data
          const indices = new Uint16Array(${JSON.stringify(indices)});
          geometry.setIndex(new THREE.BufferAttribute(indices, 1));` : ""}
          geometry.computeVertexNormals();
          return geometry;
        })();
        `;
}
}),
"[project]/templates/geometry/python.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PythonGeometry": ()=>PythonGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function PythonGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `import numpy as np
    import moderngl
    from typing import Optional
    
    class ${meshName}Geometry:
        """${meshName} geometry definition for ModernGL"""
        
        def __init__(self):
            # Position data
            self.positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)}
            ${normals ? `# Normal data
            self.normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals, languageId)}` : "self.normals = None"}
            ${uvs ? `# UV data
            self.uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs, languageId)}` : "self.uvs = None"}
            ${indices ? `# Index data
            self.indices = np.array([${indices.join(", ")}], dtype=np.uint32)` : "self.indices = None"}
        
        def create_vao(self, ctx: moderngl.Context, program: moderngl.Program) -> moderngl.VertexArray:
            """Create vertex array object for rendering"""
            vbo_positions = ctx.buffer(self.positions.tobytes())
            
            vao_content = [(vbo_positions, '3f', 'in_position')]
            
            ${normals ? `if self.normals is not None:
                vbo_normals = ctx.buffer(self.normals.tobytes())
                vao_content.append((vbo_normals, '3f', 'in_normal'))` : ""}
            
            ${uvs ? `if self.uvs is not None:
                vbo_uvs = ctx.buffer(self.uvs.tobytes())
                vao_content.append((vbo_uvs, '2f', 'in_uv'))` : ""}
            
            ${indices ? `if self.indices is not None:
                ibo = ctx.buffer(self.indices.tobytes())
                return ctx.vertex_array(program, vao_content, index_buffer=ibo)
            else:
                return ctx.vertex_array(program, vao_content)` : "return ctx.vertex_array(program, vao_content)"}
    `;
}
}),
"[project]/templates/geometry/java.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavaGeometry": ()=>JavaGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function JavaGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
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
        ${indices ? "private int ebo;" : ""}
        private int vertexCount;
        
        public ${meshName}Geometry() {
            setupBuffers();
        }
        
        private void setupBuffers() {
            // Position data
            float[] positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)};
            ${normals ? `float[] normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)};` : ""}
            ${uvs ? `float[] uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)};` : ""}
            ${indices ? `int[] indices = {${indices.join(", ")}};` : ""}
            
            vao = glGenVertexArrays();
            vbo = glGenBuffers();
            ${indices ? "ebo = glGenBuffers();" : ""}
            
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
            glEnableVertexAttribArray(1);` : ""}
            
            ${uvs ? `// UV buffer
            FloatBuffer uvBuffer = BufferUtils.createFloatBuffer(uvs.length);
            uvBuffer.put(uvs).flip();
            glBufferData(GL_ARRAY_BUFFER, uvBuffer, GL_STATIC_DRAW);
            glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * Float.BYTES, 0);
            glEnableVertexAttribArray(2);` : ""}
            
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
            ${indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0);" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);"}
            glBindVertexArray(0);
        }
        
        public void cleanup() {
            glDeleteVertexArrays(vao);
            glDeleteBuffers(vbo);
            ${indices ? "glDeleteBuffers(ebo);" : ""}
        }
    }
    `;
}
}),
"[project]/templates/geometry/csharp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CSharpGeometry": ()=>CSharpGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function CSharpGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
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
        ${indices ? "private int _ebo;" : ""}
        private int _vertexCount;
        
        public ${meshName}Geometry()
        {
            SetupBuffers();
        }
        
        private void SetupBuffers()
        {
            // Position data
            float[] positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)};
            ${normals ? `float[] normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)};` : ""}
            ${uvs ? `float[] uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)};` : ""}
            ${indices ? `uint[] indices = {${indices.join(", ")}};` : ""}
            
            _vao = GL.GenVertexArray();
            _vbo = GL.GenBuffer();
            ${indices ? "_ebo = GL.GenBuffer();" : ""}
            
            GL.BindVertexArray(_vao);
            
            // Position buffer
            GL.BindBuffer(BufferTarget.ArrayBuffer, _vbo);
            GL.BufferData(BufferTarget.ArrayBuffer, positions.Length * sizeof(float), positions, BufferUsageHint.StaticDraw);
            GL.VertexAttribPointer(0, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);
            GL.EnableVertexAttribArray(0);
            
            ${normals ? `// Normal buffer
            GL.BufferData(BufferTarget.ArrayBuffer, normals.Length * sizeof(float), normals, BufferUsageHint.StaticDraw);
            GL.VertexAttribPointer(1, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);
            GL.EnableVertexAttribArray(1);` : ""}
            
            ${uvs ? `// UV buffer
            GL.BufferData(BufferTarget.ArrayBuffer, uvs.Length * sizeof(float), uvs, BufferUsageHint.StaticDraw);
            GL.VertexAttribPointer(2, 2, VertexAttribPointerType.Float, false, 2 * sizeof(float), 0);
            GL.EnableVertexAttribArray(2);` : ""}
            
            ${indices ? `// Element buffer
            GL.BindBuffer(BufferTarget.ElementArrayBuffer, _ebo);
            GL.BufferData(BufferTarget.ElementArrayBuffer, indices.Length * sizeof(uint), indices, BufferUsageHint.StaticDraw);
            _vertexCount = indices.Length;` : `_vertexCount = positions.Length / 3;`}
            
            GL.BindVertexArray(0);
        }
        
        public void Render()
        {
            GL.BindVertexArray(_vao);
            ${indices ? "GL.DrawElements(PrimitiveType.Triangles, _vertexCount, DrawElementsType.UnsignedInt, 0);" : "GL.DrawArrays(PrimitiveType.Triangles, 0, _vertexCount);"}
            GL.BindVertexArray(0);
        }
        
        public void Dispose()
        {
            GL.DeleteVertexArray(_vao);
            GL.DeleteBuffer(_vbo);
            ${indices ? "GL.DeleteBuffer(_ebo);" : ""}
        }
    }
    `;
}
}),
"[project]/templates/geometry/cpp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CPPGeometry": ()=>CPPGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function CPPGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `#pragma once
    #include <vector>
    #include <GL/glew.h>
    #include <glm/glm.hpp>
    
    /**
     * ${meshName} geometry definition for OpenGL with GLM
     */
    class ${meshName}Geometry {
    private:
        GLuint VAO, VBO${indices ? ", EBO" : ""};
        ${indices ? "int indexCount;" : "int vertexCount;"}
        
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
            std::vector<float> positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)};
            ${normals ? `std::vector<float> normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)};` : ""}
            ${uvs ? `std::vector<float> uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)};` : ""}
            ${indices ? `std::vector<unsigned int> indices = {${indices.join(", ")}};` : ""}
            
            glGenVertexArrays(1, &VAO);
            glGenBuffers(1, &VBO);
            ${indices ? "glGenBuffers(1, &EBO);" : ""}
            
            glBindVertexArray(VAO);
            
            // Position buffer
            glBindBuffer(GL_ARRAY_BUFFER, VBO);
            glBufferData(GL_ARRAY_BUFFER, positions.size() * sizeof(float), positions.data(), GL_STATIC_DRAW);
            glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
            glEnableVertexAttribArray(0);
            
            ${normals ? `// Normal buffer
            glBufferData(GL_ARRAY_BUFFER, normals.size() * sizeof(float), normals.data(), GL_STATIC_DRAW);
            glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
            glEnableVertexAttribArray(1);` : ""}
            
            ${uvs ? `// UV buffer
            glBufferData(GL_ARRAY_BUFFER, uvs.size() * sizeof(float), uvs.data(), GL_STATIC_DRAW);
            glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);
            glEnableVertexAttribArray(2);` : ""}
            
            ${indices ? `// Element buffer
            glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
            glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), indices.data(), GL_STATIC_DRAW);
            indexCount = indices.size();` : `vertexCount = positions.size() / 3;`}
            
            glBindVertexArray(0);
        }
        
    public:
        void render() {
            glBindVertexArray(VAO);
            ${indices ? "glDrawElements(GL_TRIANGLES, indexCount, GL_UNSIGNED_INT, 0);" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);"}
            glBindVertexArray(0);
        }
        
        void cleanup() {
            glDeleteVertexArrays(1, &VAO);
            glDeleteBuffers(1, &VBO);
            ${indices ? "glDeleteBuffers(1, &EBO);" : ""}
        }
    };
    `;
}
}),
"[project]/templates/geometry/go.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GoGeometry": ()=>GoGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function GoGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `package geometry

import (
    "github.com/go-gl/gl/v4.1-core/gl"
    "github.com/go-gl/mathgl/mgl32"
)

// ${meshName}Geometry represents the geometry data for ${meshName}
type ${meshName}Geometry struct {
    vao uint32
    vbo uint32
    ${indices ? "ebo uint32" : ""}
    ${indices ? "indexCount int32" : "vertexCount int32"}
}

// New${meshName}Geometry creates a new ${meshName} geometry
func New${meshName}Geometry() *${meshName}Geometry {
    geom := &${meshName}Geometry{}
    geom.setupBuffers()
    return geom
}

func (g *${meshName}Geometry) setupBuffers() {
    // Position data
    positions := ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)}
    ${normals ? `normals := ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)}` : ""}
    ${uvs ? `uvs := ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)}` : ""}
    ${indices ? `indices := []uint32{${indices.join(", ")}}` : ""}
    
    gl.GenVertexArrays(1, &g.vao)
    gl.GenBuffers(1, &g.vbo)
    ${indices ? "gl.GenBuffers(1, &g.ebo)" : ""}
    
    gl.BindVertexArray(g.vao)
    
    // Position buffer
    gl.BindBuffer(gl.ARRAY_BUFFER, g.vbo)
    gl.BufferData(gl.ARRAY_BUFFER, len(positions)*4, gl.Ptr(positions), gl.STATIC_DRAW)
    gl.VertexAttribPointer(0, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(0)
    
    ${normals ? `// Normal buffer
    gl.BufferData(gl.ARRAY_BUFFER, len(normals)*4, gl.Ptr(normals), gl.STATIC_DRAW)
    gl.VertexAttribPointer(1, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(1)` : ""}
    
    ${uvs ? `// UV buffer
    gl.BufferData(gl.ARRAY_BUFFER, len(uvs)*4, gl.Ptr(uvs), gl.STATIC_DRAW)
    gl.VertexAttribPointer(2, 2, gl.FLOAT, false, 2*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(2)` : ""}
    
    ${indices ? `// Element buffer
    gl.BindBuffer(gl.ELEMENT_ARRAY_BUFFER, g.ebo)
    gl.BufferData(gl.ELEMENT_ARRAY_BUFFER, len(indices)*4, gl.Ptr(indices), gl.STATIC_DRAW)
    g.indexCount = int32(len(indices))` : `g.vertexCount = int32(len(positions) / 3)`}
    
    gl.BindVertexArray(0)
}

// Render renders the geometry
func (g *${meshName}Geometry) Render() {
    gl.BindVertexArray(g.vao)
    ${indices ? "gl.DrawElements(gl.TRIANGLES, g.indexCount, gl.UNSIGNED_INT, gl.PtrOffset(0))" : "gl.DrawArrays(gl.TRIANGLES, 0, g.vertexCount)"}
    gl.BindVertexArray(0)
}

// Cleanup cleans up OpenGL resources
func (g *${meshName}Geometry) Cleanup() {
    gl.DeleteVertexArrays(1, &g.vao)
    gl.DeleteBuffers(1, &g.vbo)
    ${indices ? "gl.DeleteBuffers(1, &g.ebo)" : ""}
}
`;
}
}),
"[project]/templates/geometry/rust.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RustGeometry": ()=>RustGeometry
});
function RustGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `use wgpu::util::DeviceExt;

/// ${meshName} geometry definition for wgpu
pub struct ${meshName}Geometry {
    vertex_buffer: wgpu::Buffer,
    ${indices ? "index_buffer: wgpu::Buffer," : ""}
    ${indices ? "num_indices: u32," : "num_vertices: u32,"}
}

impl ${meshName}Geometry {
    pub fn new(device: &wgpu::Device) -> Self {
        // Position data
        let positions: Vec<f32> = vec![${positions.join(", ")}];
        ${normals ? `let normals: Vec<f32> = vec![${(normals || []).join(", ")}];` : ""}
        ${uvs ? `let uvs: Vec<f32> = vec![${(uvs || []).join(", ")}];` : ""}
        ${indices ? `let indices: Vec<u16> = vec![${indices.join(", ")}];` : ""}
        
        // Create vertex data
        let mut vertex_data = Vec::new();
        for i in (0..positions.len()).step_by(3) {
            vertex_data.extend_from_slice(&positions[i..i+3]);
            ${normals ? `if i < normals.len() - 2 {
                vertex_data.extend_from_slice(&normals[i..i+3]);
            }` : ""}
            ${uvs ? `let uv_index = (i / 3) * 2;
            if uv_index < uvs.len() - 1 {
                vertex_data.extend_from_slice(&uvs[uv_index..uv_index+2]);
            }` : ""}
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
        render_pass.draw_indexed(0..self.num_indices, 0, 0..1);` : "render_pass.draw(0..self.num_vertices, 0..1);"}
    }
}
`;
}
}),
"[project]/templates/geometry/swift.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SwiftGeometry": ()=>SwiftGeometry
});
function SwiftGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `import Metal
    import simd
    
    /// ${meshName} geometry definition for Metal
    class ${meshName}Geometry {
        private var vertexBuffer: MTLBuffer?
        ${indices ? "private var indexBuffer: MTLBuffer?" : ""}
        ${indices ? "private var indexCount: Int" : "private var vertexCount: Int"}
        
        init(device: MTLDevice) {
            // Position data
            let positions: [Float] = [${positions.join(", ")}]
            ${normals ? `let normals: [Float] = [${(normals || []).join(", ")}]` : ""}
            ${uvs ? `let uvs: [Float] = [${(uvs || []).join(", ")}]` : ""}
            ${indices ? `let indices: [UInt16] = [${indices.join(", ")}]` : ""}
            
            // Create vertex data
            var vertexData: [Float] = []
            for i in stride(from: 0, to: positions.count, by: 3) {
                vertexData.append(contentsOf: [positions[i], positions[i+1], positions[i+2]])
                ${normals ? `if i < normals.count - 2 {
                    vertexData.append(contentsOf: [normals[i], normals[i+1], normals[i+2]])
                }` : ""}
                ${uvs ? `let uvIndex = (i / 3) * 2
                if uvIndex < uvs.count - 1 {
                    vertexData.append(contentsOf: [uvs[uvIndex], uvs[uvIndex+1]])
                }` : ""}
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
}
}),
"[project]/templates/geometry/php.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PHPGeometry": ()=>PHPGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function PHPGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `<?php
    /**
     * ${meshName} geometry definition for PHP-GLFW
     */
    class ${meshName}Geometry {
        private $vao;
        private $vbo;
        ${indices ? "private $ebo;" : ""}
        private $vertexCount;
        public function __construct() {
            $this->setupBuffers();
        }
        private function setupBuffers() {
            // Position data
            $positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)};
            ${normals ? `$normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)};` : ""}
            ${uvs ? `$uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)};` : ""}
            ${indices ? `$indices = array(${indices.join(", ")});` : ""}
            
            $this->vao = glfwCreateVertexArray();
            $this->vbo = glfwCreateBuffer();
            ${indices ? "$this->ebo = glfwCreateBuffer();" : ""}
            
            glfwBindVertexArray($this->vao);
            // Position buffer
            glfwBindBuffer(GLFW_ARRAY_BUFFER, $this->vbo);
            glfwBufferData(GLFW_ARRAY_BUFFER, count($positions) * 4, $positions, GLFW_STATIC_DRAW);
            glfwVertexAttribPointer(0, 3, GLFW_FLOAT, false, 3 * 4, 0);
            glfwEnableVertexAttribArray(0);
            ${normals ? `// Normal buffer
            glfwBufferData(GLFW_ARRAY_BUFFER, count($normals) * 4, $normals, GLFW_STATIC_DRAW);
            glfwVertexAttribPointer(1, 3, GLFW_FLOAT, false, 3 * 4, 0);
            glfwEnableVertexAttribArray(1);` : ""}
            ${uvs ? `// UV buffer
            glfwBufferData(GLFW_ARRAY_BUFFER, count($uvs) * 4, $uvs, GLFW_STATIC_DRAW);
            glfwVertexAttribPointer(2, 2, GLFW_FLOAT, false, 2 * 4, 0);
            glfwEnableVertexAttribArray(2);` : ""}
            ${indices ? `// Element buffer
            glfwBindBuffer(GLFW_ELEMENT_ARRAY_BUFFER, $this->ebo);
            glfwBufferData(GLFW_ELEMENT_ARRAY_BUFFER, count($indices) * 4, $indices, GLFW_STATIC_DRAW);
            $this->vertexCount = count($indices);` : `$this->vertexCount = count($positions) / 3;`}
            glfwBindVertexArray(0);
        }
        public function render() {
            glfwBindVertexArray($this->vao);
            ${indices ? "glfwDrawElements(GLFW_TRIANGLES, $this->vertexCount, GLFW_UNSIGNED_INT, 0);" : "glfwDrawArrays(GLFW_TRIANGLES, 0, $this->vertexCount);"}
            glfwBindVertexArray(0);
        }
    }
    `;
}
}),
"[project]/templates/geometry/ruby.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RubyGeometry": ()=>RubyGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function RubyGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `# ${meshName} geometry definition for Ruby OpenGL
        class ${meshName}Geometry
          def initialize
            setup_buffers
          end
    
          private
    
          def setup_buffers
            # Position data
            positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)}
            ${normals ? `normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)}` : ""}
            ${uvs ? `uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)}` : ""}
            ${indices ? `indices = [${indices.join(", ")}]` : ""}
    
            @vao = glGenVertexArrays(1)[0]
            @vbo = glGenBuffers(1)[0]
            ${indices ? "@ebo = glGenBuffers(1)[0]" : ""}
    
            glBindVertexArray(@vao)
    
            # Position buffer
            glBindBuffer(GL::ARRAY_BUFFER, @vbo)
            glBufferData(GL::ARRAY_BUFFER, positions.pack('F*'), GL::STATIC_DRAW)
            glVertexAttribPointer(0, 3, GL::FLOAT, false, 3 * 4, 0)
            glEnableVertexAttribArray(0)
    
            ${normals ? `# Normal buffer
            glBufferData(GL::ARRAY_BUFFER, normals.pack('F*'), GL::STATIC_DRAW)
            glVertexAttribPointer(1, 3, GL::FLOAT, false, 3 * 4, 0)
            glEnableVertexAttribArray(1)` : ""}
    
            ${uvs ? `# UV buffer
            glBufferData(GL::ARRAY_BUFFER, uvs.pack('F*'), GL::STATIC_DRAW)
            glVertexAttribPointer(2, 2, GL::FLOAT, false, 2 * 4, 0)
            glEnableVertexAttribArray(2)` : ""}
    
            ${indices ? `# Element buffer
            glBindBuffer(GL::ELEMENT_ARRAY_BUFFER, @ebo)
            glBufferData(GL::ELEMENT_ARRAY_BUFFER, indices.pack('I*'), GL::STATIC_DRAW)
            @vertex_count = indices.length` : "@vertex_count = positions.length / 3"}
    
            glBindVertexArray(0)
          end
    
          public
    
          def render
            glBindVertexArray(@vao)
            ${indices ? "glDrawElements(GL::TRIANGLES, @vertex_count, GL::UNSIGNED_INT, nil)" : "glDrawArrays(GL::TRIANGLES, 0, @vertex_count)"}
            glBindVertexArray(0)
          end
        end
        `;
}
}),
"[project]/templates/geometry/scala.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ScalaGeometry": ()=>ScalaGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function ScalaGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `import org.lwjgl.opengl.GL30._
        import org.lwjgl.system.MemoryUtil._
        /**
         * ${meshName} geometry definition for LWJGL in Scala
         */
        class ${meshName}Geometry {
          private var vao: Int = _
          private var vbo: Int = _
          ${indices ? "private var ebo: Int = _" : ""}
          private var vertexCount: Int = _
          
          setupBuffers()
          
          private def setupBuffers(): Unit = {
            // Position data
            val positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)}
            ${normals ? `val normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)}` : ""}
            ${uvs ? `val uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)}` : ""}
            ${indices ? `val indices = Array(${indices.join(", ")})` : ""}
            
            vao = glGenVertexArrays()
            vbo = glGenBuffers()
            ${indices ? "ebo = glGenBuffers()" : ""}
            
            glBindVertexArray(vao)
            // Position buffer
            glBindBuffer(GL_ARRAY_BUFFER, vbo)
            glBufferData(GL_ARRAY_BUFFER, positions, GL_STATIC_DRAW)
            glVertexAttribPointer(0, 3, GL_FLOAT, false, 3 * 4, 0)
            glEnableVertexAttribArray(0)
            ${normals ? `// Normal buffer
            glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)
            glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0)
            glEnableVertexAttribArray(1)` : ""}
            ${uvs ? `// UV buffer
            glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)
            glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0)
            glEnableVertexAttribArray(2)` : ""}
            ${indices ? `// Element buffer
            glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)
            glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)
            vertexCount = indices.length` : "vertexCount = positions.length / 3"}
            glBindVertexArray(0)
          }
          
          def render(): Unit = {
            glBindVertexArray(vao)
            ${indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0L)" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)"}
            glBindVertexArray(0)
          }
        }
        `;
}
}),
"[project]/templates/geometry/kotlin.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "KotlinGeometry": ()=>KotlinGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function KotlinGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `import org.lwjgl.opengl.GL30.*
        import org.lwjgl.system.MemoryUtil.*
        /**
         * ${meshName} geometry definition for LWJGL in Kotlin
         */
        class ${meshName}Geometry {
            private var vao: Int = 0
            private var vbo: Int = 0
            ${indices ? "private var ebo: Int = 0" : ""}
            private var vertexCount: Int = 0
    
            init {
                setupBuffers()
            }
    
            private fun setupBuffers() {
                // Position data
                val positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)}
                ${normals ? `val normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)}` : ""}
                ${uvs ? `val uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)}` : ""}
                ${indices ? `val indices = intArrayOf(${indices.join(", ")})` : ""}
    
                vao = glGenVertexArrays()
                vbo = glGenBuffers()
                ${indices ? "ebo = glGenBuffers()" : ""}
    
                glBindVertexArray(vao)
                // Position buffer
                glBindBuffer(GL_ARRAY_BUFFER, vbo)
                glBufferData(GL_ARRAY_BUFFER, positions, GL_STATIC_DRAW)
                glVertexAttribPointer(0, 3, GL_FLOAT, false, 3 * 4, 0)
                glEnableVertexAttribArray(0)
                ${normals ? `// Normal buffer
                glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)
                glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0)
                glEnableVertexAttribArray(1)` : ""}
                ${uvs ? `// UV buffer
                glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)
                glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0)
                glEnableVertexAttribArray(2)` : ""}
                ${indices ? `// Element buffer
                glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)
                glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)
                vertexCount = indices.size` : "vertexCount = positions.size / 3"}
                glBindVertexArray(0)
            }
    
            fun render() {
                glBindVertexArray(vao)
                ${indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0L)" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)"}
                glBindVertexArray(0)
            }
        }
        `;
}
}),
"[project]/templates/geometry/dart.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DartGeometry": ()=>DartGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function DartGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `import 'dart:ffi';
    import 'package:ffi/ffi.dart';
    import 'package:opengl/opengl.dart';
    /**
     * ${meshName} geometry definition for OpenGL in Dart
     */
    class ${meshName}Geometry {
      int vao = 0;
      int vbo = 0;
      ${indices ? "int ebo = 0;" : ""}
      int vertexCount = 0;

      ${meshName}Geometry() {
        setupBuffers();
      }

      void setupBuffers() {
        // Position data
        final positions = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)};
        ${normals ? `final normals = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)};` : ""}
        ${uvs ? `final uvs = ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)};` : ""}
        ${indices ? `final indices = [${indices.join(", ")}];` : ""}

        vao = glGenVertexArrays();
        vbo = glGenBuffers();
        ${indices ? "ebo = glGenBuffers();" : ""}

        glBindVertexArray(vao);
        // Position buffer
        glBindBuffer(GL_ARRAY_BUFFER, vbo);
        glBufferData(GL_ARRAY_BUFFER, positions, GL_STATIC_DRAW);
        glVertexAttribPointer(0, 3, GL_FLOAT, false, 3 * 4, 0);
        glEnableVertexAttribArray(0);
        ${normals ? `// Normal buffer
        glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0);
        glEnableVertexAttribArray(1);` : ""}
        ${uvs ? `// UV buffer
        glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW);
        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0);
        glEnableVertexAttribArray(2);` : ""}
        ${indices ? `// Element buffer
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW);
        vertexCount = indices.length;` : "vertexCount = positions.length ~/ 3;"}
        glBindVertexArray(0);
      }

      void render() {
        glBindVertexArray(vao);
        ${indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0);" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);"}
        glBindVertexArray(0);
      }
    }
    `;
}
}),
"[project]/templates/geometry/r.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RGeometry": ()=>RGeometry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/formatArrayData.ts [app-ssr] (ecmascript)");
;
function RGeometry(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId) {
    return `#' ${meshName} geometry definition for R OpenGL
    #' @export
    ${meshName}Geometry <- function() {
      # Position data
      positions <- ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(positions, languageId)}
      ${normals ? `normals <- ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(normals || [], languageId)}` : ""}
      ${uvs ? `uvs <- ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$formatArrayData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArrayData"])(uvs || [], languageId)}` : ""}
      ${indices ? `indices <- c(${indices.join(", ")})` : ""}
      
      # Create buffers
      vao <- glCreateVertexArrays(1)
      vbo <- glCreateBuffers(1)
      ${indices ? "ebo <- glCreateBuffers(1)" : ""}
      
      glBindVertexArray(vao)
      # Position buffer
      glBindBuffer(GL_ARRAY_BUFFER, vbo)
      glBufferData(GL_ARRAY_BUFFER, positions, GL_STATIC_DRAW)
      glVertexAttribPointer(0, 3, GL_FLOAT, FALSE, 3 * 4, 0)
      glEnableVertexAttribArray(0)
      ${normals ? `# Normal buffer
      glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)
      glVertexAttribPointer(1, 3, GL_FLOAT, FALSE, 3 * 4, 0)
      glEnableVertexAttribArray(1)` : ""}
      ${uvs ? `# UV buffer
      glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)
      glVertexAttribPointer(2, 2, GL_FLOAT, FALSE, 2 * 4, 0)
      glEnableVertexAttribArray(2)` : ""}
      ${indices ? `# Element buffer
      glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)
      glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)
      vertexCount <- length(indices)` : "vertexCount <- length(positions) / 3"}
      glBindVertexArray(0)
      
      # Return geometry object
      list(
        vao = vao,
        render = function() {
          glBindVertexArray(vao)
          ${indices ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0)" : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)"}
          glBindVertexArray(0)
        }
      )
    }
    `;
}
}),
"[project]/lib/generator/generateGeometryFile.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>generateGeometryFile
});
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/typescript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/javascript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/python.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/java.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/csharp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/cpp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/go.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/rust.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/swift.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/php.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/ruby.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/scala.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/kotlin.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/dart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/geometry/r.ts [app-ssr] (ecmascript)");
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
function generateGeometryFile(meshName, geometry, languageId) {
    const positions = Array.from(geometry.attributes.position.array);
    const normals = geometry.attributes.normal ? Array.from(geometry.attributes.normal.array) : null;
    const uvs = geometry.attributes.uv ? Array.from(geometry.attributes.uv.array) : null;
    const indices = geometry.index ? Array.from(geometry.index.array) : null;
    const isLargeGeometry = positions.length > 100000;
    switch(languageId){
        case "typescript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypescriptGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "javascript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavascriptGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "python":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PythonGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "java":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavaGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "csharp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSharpGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "cpp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CPPGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "go":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "rust":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RustGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "swift":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiftGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "php":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHPGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "ruby":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RubyGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "scala":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScalaGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "kotlin":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KotlinGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "dart":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DartGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        case "r":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$geometry$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RGeometry"])(meshName, isLargeGeometry, normals, uvs, indices, positions, languageId);
        default:
            return generateGeometryFile(meshName, geometry, "typescript");
    }
}
}),
"[project]/templates/index/cpp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CPPIndex": ()=>CPPIndex
});
function CPPIndex(meshes, materials, componentName) {
    return `#pragma once
#include <vector>
#include <memory>
${meshes.map((mesh)=>`#include "meshes/${mesh.name}.h"`).join("\n")}
${materials.map((material)=>`#include "materials/${material.name}.h"`).join("\n")}

/**
 * ${componentName} main component for OpenGL
 */
class ${componentName} {
private:
    ${meshes.map((mesh, i)=>`std::unique_ptr<${mesh.name}> ${mesh.name.toLowerCase()};`).join("\n    ")}
    
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
    }).join("\n        ")}
    }
    
public:
    void render() {
        ${meshes.map((mesh)=>`if (${mesh.name.toLowerCase()}) ${mesh.name.toLowerCase()}->render();`).join("\n        ")}
    }
    
    void cleanup() {
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()}.reset();`).join("\n        ")}
    }
};
`;
}
}),
"[project]/templates/index/csharp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CSharpIndex": ()=>CSharpIndex
});
function CSharpIndex(meshes, materials, componentName) {
    return `using System;
using System.Collections.Generic;
${meshes.map((mesh)=>`using Meshes;`).join("\n")}
${materials.map((material)=>`using Materials;`).join("\n")}

/// <summary>
/// ${componentName} main component for OpenTK
/// </summary>
public class ${componentName} : IDisposable
{
    ${meshes.map((mesh, i)=>`private ${mesh.name} _${mesh.name.toLowerCase()};`).join("\n    ")}
    
    public ${componentName}()
    {
        SetupMeshes();
    }
    
    private void SetupMeshes()
    {
        ${meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return `_${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name}());`;
    }).join("\n        ")}
    }
    
    public void Render()
    {
        ${meshes.map((mesh)=>`_${mesh.name.toLowerCase()}.Render();`).join("\n        ")}
    }
    
    public void Dispose()
    {
        ${meshes.map((mesh)=>`_${mesh.name.toLowerCase()}?.Dispose();`).join("\n        ")}
    }
}
`;
}
}),
"[project]/templates/index/dart.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DartIndex": ()=>DartIndex
});
function DartIndex(componentName, meshes, materials) {
    return `/**
    * ${componentName} main component for OpenGL in Dart
    */
    class ${componentName} {
      ${meshes.map((mesh, i)=>`final ${mesh.name} ${mesh.name.toLowerCase()};`).join("\n  ")}

      ${componentName}() {
        ${meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return `${mesh.name.toLowerCase()} = ${mesh.name}(material: ${material.name}());`;
    }).join("\n    ")}
      }

      void render() {
        ${meshes.map((mesh)=>"${mesh.name.toLowerCase()}.render();").join("\n    ")}
      }
    }
    `;
}
}),
"[project]/templates/index/go.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GoIndex": ()=>GoIndex
});
function GoIndex(meshes, materials, componentName) {
    return `package main

${meshes.map((mesh)=>`import "./meshes"`).join("\n")}
${materials.map((material)=>`import "./materials"`).join("\n")}

// ${componentName} represents the main 3D component
type ${componentName} struct {
    ${meshes.map((mesh, i)=>`${mesh.name.toLowerCase()} *meshes.${mesh.name}`).join("\n    ")}
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
    }).join("\n    ")}
}

// Render renders all meshes in the component
func (c *${componentName}) Render() {
    ${meshes.map((mesh)=>`if c.${mesh.name.toLowerCase()} != nil {
        c.${mesh.name.toLowerCase()}.Render()
    }`).join("\n    ")}
}

// Cleanup cleans up all resources
func (c *${componentName}) Cleanup() {
    ${meshes.map((mesh)=>`if c.${mesh.name.toLowerCase()} != nil {
        c.${mesh.name.toLowerCase()}.Cleanup()
    }`).join("\n    ")}
}
`;
}
}),
"[project]/templates/index/java.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavaIndex": ()=>JavaIndex
});
function JavaIndex(componentName, meshes, materials) {
    return `/**
 * ${componentName} main component for LWJGL OpenGL
 */
${meshes.map((mesh)=>`import meshes.${mesh.name};`).join("\n")}
${materials.map((material)=>`import materials.${material.name};`).join("\n")}

public class ${componentName} {
    ${meshes.map((mesh, i)=>`private ${mesh.name} ${mesh.name.toLowerCase()};`).join("\n    ")}
    
    public ${componentName}() {
        setupMeshes();
    }
    
    private void setupMeshes() {
        ${meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return `${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name}());`;
    }).join("\n        ")}
    }
    
    public void render() {
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()}.render();`).join("\n        ")}
    }
    
    public void cleanup() {
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()}.cleanup();`).join("\n        ")}
    }
}
`;
}
}),
"[project]/templates/index/javascript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavascriptIndex": ()=>JavascriptIndex
});
function JavascriptIndex(meshes, materials, componentName) {
    {
        const meshImportsJS = meshes.map((mesh)=>`import ${mesh.name} from './meshes/${mesh.name}';`).join("\n");
        const materialImportsJS = materials.map((material)=>`import ${material.name} from './materials/${material.name}';`).join("\n");
        const meshElementsJS = meshes.map((mesh, i)=>{
            const material = materials[i % materials.length];
            return `      <${mesh.name} material={${material.name}()} />`;
        }).join("\n");
        return `import React, { useRef } from 'react';
    import { Group } from '@react-three/fiber';
    ${meshImportsJS}
    ${materialImportsJS}
    /**
     * ${componentName} component
     */
    export default function ${componentName}(props) {
      const ref = useRef(null);
      return (
        <group ref={ref} {...props}>
    ${meshElementsJS}
        </group>
      );
    }
    `;
    }
}
}),
"[project]/templates/index/kotlin.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "KotlinIndex": ()=>KotlinIndex
});
function KotlinIndex(componentName, meshes) {
    return `/**
      * ${componentName} main component for LWJGL in Kotlin
      */
      class ${componentName} {
          ${meshes.map((mesh, i)=>`private val ${mesh.name.toLowerCase()} = ${mesh.name}()`).join("\n    ")}

          fun render() {
              ${meshes.map((mesh)=>"${mesh.name.toLowerCase()}.render()").join("\n        ")}
          }
      }
      `;
}
}),
"[project]/templates/index/php.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PHPIndex": ()=>PHPIndex
});
function PHPIndex(componentName, meshes, materials) {
    return `<?php
    /**
     * ${componentName} main component for PHP-GLFW
     */
    class ${componentName} {
        ${meshes.map((mesh, i)=>`private $${mesh.name.toLowerCase()};`).join("\n    ")}
        public function __construct() {
            $this->setupMeshes();
        }
        private function setupMeshes() {
            ${meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return `$this->${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name}());`;
    }).join("\n        ")}
        }
        public function render() {
            ${meshes.map((mesh)=>`$this->${mesh.name.toLowerCase()}->render();`).join("\n        ")}
        }
    }
    `;
}
}),
"[project]/templates/index/python.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PythonIndex": ()=>PythonIndex
});
function PythonIndex(componentName, meshes, materials) {
    return `"""${componentName} main component for ModernGL"""
import moderngl
import numpy as np
from typing import List, Optional
${meshes.map((mesh)=>`from .meshes.${mesh.name} import ${mesh.name}`).join("\n")}
${materials.map((material)=>`from .materials.${material.name} import ${material.name}`).join("\n")}

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
    }).join("\n        ")}
    
    def render(self, projection_matrix: np.ndarray, view_matrix: np.ndarray, model_matrix: Optional[np.ndarray] = None):
        """Render all meshes"""
        if model_matrix is None:
            model_matrix = np.eye(4, dtype=np.float32)
            
        for mesh in self.meshes:
            mesh.render(projection_matrix, view_matrix)
`;
}
}),
"[project]/templates/index/r.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RIndex": ()=>RIndex
});
function RIndex(componentName, meshes, materials) {
    return `#' ${componentName} main component for R OpenGL
    #' @export
    ${componentName} <- function() {
      # Create meshes
      ${meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return `${mesh.name.toLowerCase()} <- ${mesh.name}(material = ${material.name}())`;
    }).join("\n  ")}
      
      # Return component
      list(
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()} = ${mesh.name.toLowerCase()}`).join(",\n    ")}
        render = function() {
          ${meshes.map((mesh)=>`do.call(${mesh.name.toLowerCase()}$render, list())`).join("\n      ")}
        }
      )
    }
    `;
}
}),
"[project]/templates/index/ruby.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RubyIndex": ()=>RubyIndex
});
function RubyIndex(componentName, meshes, materials) {
    return `# ${componentName} main component for Ruby OpenGL
    class ${componentName}
      ${meshes.map((mesh, i)=>`attr_reader :${mesh.name.toLowerCase()}`).join("\n  ")}
      def initialize
        setup_meshes
      end
      private
      def setup_meshes
        ${meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return "@#{mesh.name.toLowerCase()} = #{mesh.name}.new(#{material.name}.new)";
    }).join("\n    ")}
      end
      public
      def render
        ${meshes.map((mesh)=>"@#{mesh.name.toLowerCase()}.render").join("\n    ")}
      end
    end
    `;
}
}),
"[project]/templates/index/rust.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RustIndex": ()=>RustIndex
});
function RustIndex(meshes, materials, componentName) {
    return `${meshes.map((mesh)=>`use crate::meshes::${mesh.name.toLowerCase()}::${mesh.name};`).join("\n")}
${materials.map((material)=>`use crate::materials::${material.name.toLowerCase()}::${material.name};`).join("\n")}
use wgpu::Device;

/// ${componentName} main component for wgpu
pub struct ${componentName} {
    ${meshes.map((mesh, i)=>`${mesh.name.toLowerCase()}: ${mesh.name},`).join("\n    ")}
}

impl ${componentName} {
    pub fn new(device: &Device) -> Self {
        Self {
            ${meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return `${mesh.name.toLowerCase()}: ${mesh.name}::new(device, ${material.name}::new(device)),`;
    }).join("\n            ")}
        }
    }
    
    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
        ${meshes.map((mesh)=>`self.${mesh.name.toLowerCase()}.render(render_pass);`).join("\n        ")}
    }
}
`;
}
}),
"[project]/templates/index/scala.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ScalaIndex": ()=>ScalaIndex
});
function ScalaIndex(componentName, meshes) {
    return `/**
    * ${componentName} main component for LWJGL in Scala
    */
    class ${componentName} {
      ${meshes.map((mesh, i)=>`private val ${mesh.name.toLowerCase()} = new ${mesh.name}()`).join("\n  ")}
      
      def render(): Unit = {
        ${meshes.map((mesh)=>"${mesh.name.toLowerCase()}.render()").join("\n    ")}
      }
    }
    `;
}
}),
"[project]/templates/index/swift.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SwiftIndex": ()=>SwiftIndex
});
function SwiftIndex(meshes, materials, componentName) {
    return `import Metal
${meshes.map((mesh)=>`import Meshes`).join("\n")}
${materials.map((material)=>`import Materials`).join("\n")}

/// ${componentName} main component for Metal
class ${componentName} {
    ${meshes.map((mesh, i)=>`private let ${mesh.name.toLowerCase()}: ${mesh.name}`).join("\n    ")}
    
    init(device: MTLDevice) {
        ${meshes.map((mesh, i)=>{
        const material = materials[i % materials.length];
        return `${mesh.name.toLowerCase()} = ${mesh.name}(device: device, material: ${material.name}(device: device))`;
    }).join("\n        ")}
    }
    
    func render(renderEncoder: MTLRenderCommandEncoder) {
        ${meshes.map((mesh)=>`${mesh.name.toLowerCase()}.render(renderEncoder: renderEncoder)`).join("\n        ")}
    }
}
`;
}
}),
"[project]/templates/index/typescript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TypescriptIndex": ()=>TypescriptIndex
});
function TypescriptIndex(meshes, materials, componentName) {
    {
        const meshImports = meshes.map((mesh)=>`import ${mesh.name} from './meshes/${mesh.name}';`).join("\n");
        const materialImports = materials.map((material)=>`import ${material.name} from './materials/${material.name}';`).join("\n");
        const meshElements = meshes.map((mesh, i)=>{
            const material = materials[i % materials.length];
            return `      <${mesh.name} material={${material.name}()} />`;
        }).join("\n");
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
    }
}
}),
"[project]/lib/generator/generateIndexComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>generateIndexComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/cpp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/csharp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/dart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/go.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/java.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/javascript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/kotlin.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/php.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/python.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/r.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/ruby.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/rust.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/scala.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/swift.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/index/typescript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/constant.ts [app-ssr] (ecmascript)");
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
;
function generateIndexComponent(componentName, meshes, materials, displayMode, languageId) {
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][languageId];
    switch(languageId){
        case "typescript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypescriptIndex"])(meshes, materials, componentName);
        case "javascript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavascriptIndex"])(meshes, materials, componentName);
        case "python":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PythonIndex"])(componentName, meshes, materials);
        case "java":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavaIndex"])(componentName, meshes, materials);
        case "csharp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSharpIndex"])(meshes, materials, componentName);
        case "cpp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CPPIndex"])(meshes, materials, componentName);
        case "go":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoIndex"])(meshes, materials, componentName);
        case "rust":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RustIndex"])(meshes, materials, componentName);
        case "swift":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiftIndex"])(meshes, materials, componentName);
        case "php":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHPIndex"])(componentName, meshes, materials);
        case "ruby":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RubyIndex"])(componentName, meshes, materials);
        case "scala":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScalaIndex"])(componentName, meshes);
        case "kotlin":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KotlinIndex"])(componentName, meshes);
        case "dart":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DartIndex"])(componentName, meshes, materials);
        case "r":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$index$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RIndex"])(componentName, meshes, materials);
        default:
            // Fallback to TypeScript for unsupported languages
            return generateIndexComponent(componentName, meshes, materials, displayMode, "typescript");
    }
}
}),
"[project]/templates/material/typescript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TypescriptMaterial": ()=>TypescriptMaterial
});
function TypescriptMaterial(materialName, materialType, properties) {
    return `import * as THREE from 'three';

/**
 * ${materialName} material component
 */
export default function ${materialName}(): THREE.Material {
  return new THREE.${materialType}({
    ${properties.join(",\n    ")}
  });
}
`;
}
}),
"[project]/templates/material/javascript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavascriptMaterial": ()=>JavascriptMaterial
});
function JavascriptMaterial(materialName, materialType, properties) {
    return `import * as THREE from 'three';
    /**
     * ${materialName} material component
     */
    export default function ${materialName}() {
      return new THREE.${materialType}({
        ${properties.join(",")}
      });
    }
    `;
}
}),
"[project]/templates/material/python.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PythonMaterial": ()=>PythonMaterial
});
function PythonMaterial(materialName, hasNormals, hasUvs, displayMode) {
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
        ${hasNormals ? "in vec3 in_normal;" : ""}
        ${hasUvs ? "in vec2 in_uv;" : ""}
        
        uniform mat4 projection;
        uniform mat4 view;
        uniform mat4 model;
        
        out vec3 v_position;
        ${hasNormals ? "out vec3 v_normal;" : ""}
        ${hasUvs ? "out vec2 v_uv;" : ""}
        
        void main() {
            v_position = in_position;
            ${hasNormals ? "v_normal = in_normal;" : ""}
            ${hasUvs ? "v_uv = in_uv;" : ""}
            gl_Position = projection * view * model * vec4(in_position, 1.0);
        }
        '''
        
        fragment_shader = '''
        #version 330 core
        in vec3 v_position;
        ${hasNormals ? "in vec3 v_normal;" : ""}
        ${hasUvs ? "in vec2 v_uv;" : ""}
        
        out vec4 fragColor;
        
        void main() {
            ${displayMode === "wireframe" ? "fragColor = vec4(0.0, 0.0, 0.0, 0.8);" : displayMode === "normals" ? "fragColor = vec4(normalize(v_normal) * 0.5 + 0.5, 1.0);" : displayMode === "points" ? "fragColor = vec4(0.0, 1.0, 0.0, 1.0);" : "fragColor = vec4(0.5, 0.5, 0.5, 1.0);"}
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
}
}),
"[project]/templates/material/php.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PHPMaterial": ()=>PHPMaterial
});
function PHPMaterial(materialName, properties) {
    return `<?php
    /**
     * ${materialName} material component for PHP-GLFW
     */
    class ${materialName} {
        public function __construct() {
            // Material setup
        }
        public function use() {
            // Apply material properties
            ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `glfw${key.charAt(0).toUpperCase() + key.slice(1)}(${value});`;
    }).join("\n        ")}
        }
    }
    `;
}
}),
"[project]/templates/material/ruby.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RubyMaterial": ()=>RubyMaterial
});
function RubyMaterial(materialName, properties) {
    return `# ${materialName} material component for Ruby OpenGL
    class ${materialName}
      def initialize
        # Material setup
      end
      def use
        # Apply material properties
        ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `gl${key.charAt(0).toUpperCase() + key.slice(1)}(${value})`;
    }).join("\n    ")}
      end
    end
    `;
}
}),
"[project]/templates/material/scala.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ScalaMaterial": ()=>ScalaMaterial
});
function ScalaMaterial(materialName, properties) {
    return `/**
    * ${materialName} material component for LWJGL in Scala
    */
    class ${materialName} {
      ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `private val ${key} = ${value}`;
    }).join("\n  ")}
      
      def use(): Unit = {
        // Apply material properties
        ${properties.map((prop)=>{
        const [key] = prop.split(": ");
        return `// Set ${key} property`;
    }).join("\n    ")}
      }
    }
    `;
}
}),
"[project]/templates/material/kotlin.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "KotlinMaterial": ()=>KotlinMaterial
});
function KotlinMaterial(materialName, properties) {
    return `/**
    * ${materialName} material component for LWJGL in Kotlin
    */
    class ${materialName} {
        ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `private val ${key} = ${value}`;
    }).join("\n    ")}

        fun use() {
            // Apply material properties
            ${properties.map((prop)=>{
        const [key] = prop.split(": ");
        return `// Set ${key} property`;
    }).join("\n        ")}
        }
    }
    `;
}
}),
"[project]/templates/material/dart.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DartMaterial": ()=>DartMaterial
});
function DartMaterial(materialName, properties) {
    return `/**
    * ${materialName} material component for OpenGL in Dart
    */
    class ${materialName} implements Material {
      ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return "final $key = $value;";
    }).join("\n  ")}

      @override
      void use() {
        // Apply material properties
        ${properties.map((prop)=>{
        const [key] = prop.split(": ");
        return "// Set $key property";
    }).join("\n    ")}
      }
    }
    `;
}
}),
"[project]/templates/material/r.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RMaterial": ()=>RMaterial
});
function RMaterial(materialName, properties) {
    return `#' ${materialName} material component for R OpenGL
    #' @export
    ${materialName} <- function() {
      list(
        use = function() {
          # Apply material properties
          ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `# Set ${key} to ${value}`;
    }).join("\n      ")}
        }
      )
    }
    `;
}
}),
"[project]/templates/material/cpp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CPPMaterial": ()=>CPPMaterial
});
function CPPMaterial(materialName, properties) {
    return `#pragma once
        #include <GL/glew.h>
    
        /**
         * ${materialName} material component for OpenGL
         */
        class ${materialName} {
        private:
            ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `float ${key};`;
    }).join("\n    ")}
        public:
            ${materialName}() {
                ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `${key} = ${value};`;
    }).join("\n        ")}
            }
            
            void use() {
                // Apply material properties
                ${properties.map((prop)=>{
        const [key] = prop.split(": ");
        return `// Set ${key} property`;
    }).join("\n        ")}
            }
        };
        `;
}
}),
"[project]/lib/functions/capitalize.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "capitalize": ()=>capitalize
});
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
}),
"[project]/templates/material/go.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GoMaterial": ()=>GoMaterial
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$capitalize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/capitalize.ts [app-ssr] (ecmascript)");
;
function GoMaterial(materialName, properties) {
    return `package materials

    import "github.com/go-gl/gl/v4.1-core/gl"

    // ${materialName} represents a material with properties
    type ${materialName} struct {
        ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$capitalize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capitalize"])(key)} float32`;
    }).join("\n    ")}
    }

    // New${materialName} creates a new material instance
    func New${materialName}() *${materialName} {
        return &${materialName}{
            ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$capitalize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["capitalize"])(key)}: ${value},`;
    }).join("\n        ")}
        }
    }

    // Use activates the material for rendering
    func (m *${materialName}) Use() {
        // Apply material properties
        ${properties.map((prop)=>{
        const [key] = prop.split(": ");
        return `// Set ${key} property`;
    }).join("\n    ")}
    }
    `;
}
}),
"[project]/templates/material/rust.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RustMaterial": ()=>RustMaterial
});
function RustMaterial(materialName, properties) {
    return `/// ${materialName} material component for wgpu
    pub struct ${materialName} {
        ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `pub ${key}: f32,`;
    }).join("\n    ")}
    }

    impl ${materialName} {
        pub fn new() -> Self {
            Self {
                ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `${key}: ${value},`;
    }).join("\n            ")}
            }
        }
        
        pub fn bind<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
            // Apply material properties
            ${properties.map((prop)=>{
        const [key] = prop.split(": ");
        return `// Set ${key} property`;
    }).join("\n        ")}
        }
    }
    `;
}
}),
"[project]/templates/material/swift.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SwiftMaterial": ()=>SwiftMaterial
});
function SwiftMaterial(materialName, properties) {
    return `import Metal

    /// ${materialName} material component for Metal
    class ${materialName} {
        ${properties.map((prop)=>{
        const [key, value] = prop.split(": ");
        return `private var ${key}: Float = ${value}`;
    }).join("\n    ")}
        
        init() {
            // Material initialization
        }
        
        func use(renderEncoder: MTLRenderCommandEncoder) {
            // Apply material properties
            ${properties.map((prop)=>{
        const [key] = prop.split(": ");
        return `// Set ${key} property`;
    }).join("\n        ")}
        }
    }
    `;
}
}),
"[project]/templates/material/java.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavaMaterial": ()=>JavaMaterial
});
function JavaMaterial(material, materialName, materialType, properties) {
    {
        if ("color" in material) properties.push(`color: new Color(${JSON.stringify(material.color)})`);
        if ("opacity" in material) properties.push(`opacity: ${material.opacity}`);
        if ("transparent" in material) properties.push(`transparent: ${material.transparent}`);
        return `import threejs.Material;
  
  /**
   * ${materialName} material component
   */
  public class ${materialName} {
      public Material create() {
          return new ${materialType}(
              ${properties.join(",\n              ")}
          );
      }
  }`;
    }
}
}),
"[project]/templates/material/csharp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CSharpMaterial": ()=>CSharpMaterial
});
function CSharpMaterial(material, properties, materialName, materialType) {
    {
        if ("color" in material) {
            properties.push(`Color = new Color(${JSON.stringify(material.color)})`);
        }
        if ("opacity" in material) {
            properties.push(`Opacity = ${material.opacity}`);
        }
        if ("transparent" in material) {
            properties.push(`Transparent = ${material.transparent}`);
        }
        return `using ThreeJs;
  
  /**
   * ${materialName} material component
   */
  public class ${materialName}
  {
      public Material Create()
      {
          return new ${materialType}
          {
              ${properties.join(",\n              ")}
          };
      }
  }`;
    }
}
}),
"[project]/lib/generator/generateMaterialComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>generateMaterialComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/typescript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/javascript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/python.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/php.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/ruby.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/scala.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/kotlin.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/dart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/r.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/cpp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/go.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/rust.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/swift.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/java.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/material/csharp.ts [app-ssr] (ecmascript)");
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
;
function generateMaterialComponent(materialName, material, displayMode, languageId, hasNormals = false, hasUvs = false) {
    let materialType = "MeshStandardMaterial";
    const properties = [];
    // Determine material type
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) materialType = "MeshBasicMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]) materialType = "MeshPhongMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshLambertMaterial"]) materialType = "MeshLambertMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]) materialType = "MeshNormalMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]) materialType = "MeshDepthMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshMatcapMaterial"]) materialType = "MeshMatcapMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshToonMaterial"]) materialType = "MeshToonMaterial";
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]) materialType = "MeshPhysicalMaterial";
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
            if ('color' in material && material.color instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]) {
                const color = material.color;
                properties.push(`color: new THREE.Color(${color.r}, ${color.g}, ${color.b})`);
            }
            if ("roughness" in material) properties.push(`roughness: ${material.roughness}`);
            if ("metalness" in material) properties.push(`metalness: ${material.metalness}`);
            if ("opacity" in material) properties.push(`opacity: ${material.opacity}`);
            if ("transparent" in material) properties.push(`transparent: ${material.transparent}`);
            break;
    }
    switch(languageId){
        case "typescript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypescriptMaterial"])(materialName, materialType, properties);
        case "javascript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavascriptMaterial"])(materialName, materialType, properties);
        case "python":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PythonMaterial"])(materialName, hasNormals, hasUvs, displayMode);
        case "php":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHPMaterial"])(materialName, properties);
        case "ruby":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RubyMaterial"])(materialName, properties);
        case "scala":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScalaMaterial"])(materialName, properties);
        case "kotlin":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KotlinMaterial"])(materialName, properties);
        case "dart":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DartMaterial"])(materialName, properties);
        case "r":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RMaterial"])(materialName, properties);
        case "cpp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CPPMaterial"])(materialName, properties);
        case "go":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoMaterial"])(materialName, properties);
        case "rust":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RustMaterial"])(materialName, properties);
        case "swift":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiftMaterial"])(materialName, properties);
        case "java":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavaMaterial"])(material, materialName, materialType, properties);
        case "csharp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$material$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSharpMaterial"])(material, properties, materialName, materialType);
        default:
            // Fallback to TypeScript for unsupported languages
            return generateMaterialComponent(materialName, material, displayMode, "typescript", hasNormals, hasUvs);
    }
}
}),
"[project]/templates/mesh/cpp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CPPMesh": ()=>CPPMesh
});
function CPPMesh(meshName) {
    return `#pragma once
    #include "geometry/${meshName}Geometry.h"

    /**
     * ${meshName} mesh component for OpenGL with geometry
     */
    class ${meshName} {
    private:
        ${meshName}Geometry geometry;
        Material* material;
    public:
        explicit ${meshName}(Material* mat = nullptr) : geometry(), material(mat) {}
        
        void render() {
            if (material) {
                material->use();
            }
            geometry.render();
        }
        
        ${meshName}Geometry& getGeometry() {
            return geometry;
        }
        
        void setMaterial(Material* mat) {
            material = mat;
        }
    };
    `;
}
}),
"[project]/templates/mesh/csharp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CSharpMesh": ()=>CSharpMesh
});
function CSharpMesh(meshName) {
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
}
}),
"[project]/templates/mesh/dart.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DartMesh": ()=>DartMesh
});
function DartMesh(meshName) {
    return `/**
    * ${meshName} mesh component for OpenGL in Dart
    */
    class ${meshName} {
      final ${meshName}Geometry geometry;
      Material? material;

      ${meshName}({this.material}) : geometry = ${meshName}Geometry();

      void render() {
        material?.use();
        geometry.render();
      }
    }
    `;
}
}),
"[project]/templates/mesh/go.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GoMesh": ()=>GoMesh
});
function GoMesh(meshName) {
    return `package meshes

import (
    "github.com/go-gl/gl/v4.1-core/gl"
    "yourproject/geometry"
)

// ${meshName} represents a mesh with geometry only
type ${meshName} struct {
    geometry *geometry.${meshName}Geometry
}

// New${meshName} creates a new mesh instance
func New${meshName}() *${meshName} {
    return &${meshName}{
        geometry: geometry.New${meshName}Geometry(),
    }
}

// Render renders the mesh
func (m *${meshName}) Render() {
    m.geometry.Render()
}

// Cleanup releases OpenGL resources
func (m *${meshName}) Cleanup() {
    m.geometry.Cleanup()
}
    `;
}
}),
"[project]/templates/mesh/java.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavaMesh": ()=>JavaMesh
});
function JavaMesh(meshName) {
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
}
}),
"[project]/templates/mesh/javascript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "JavascriptMesh": ()=>JavascriptMesh
});
function JavascriptMesh(meshName) {
    return `import React from 'react';
    import { ${meshName}Geometry } from '../geometries/${meshName}Geometry';
    /**
     * ${meshName} component
     */
    export default function ${meshName}(props) {
      return <mesh geometry={${meshName}Geometry} {...props} />;
    }
    `;
}
}),
"[project]/templates/mesh/kotlin.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "KotlinMesh": ()=>KotlinMesh
});
function KotlinMesh(meshName) {
    return `/**
    * ${meshName} mesh component for LWJGL in Kotlin
    */
    class ${meshName}(private var material: Material? = null) {
        private val geometry = ${meshName}Geometry()

        fun render() {
            material?.use()
            geometry.render()
        }
    }
    `;
}
}),
"[project]/templates/mesh/php.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PHPMesh": ()=>PHPMesh
});
function PHPMesh(meshName) {
    return `<?php
    /**
     * ${meshName} mesh component for PHP-GLFW
     */
    class ${meshName} {
        private $geometry;
        private $material;
        public function __construct($material = null) {
            $this->geometry = new ${meshName}Geometry();
            $this->material = $material;
        }
        public function render() {
            if ($this->material) {
                $this->material->use();
            }
            $this->geometry->render();
        }
    }
    `;
}
}),
"[project]/templates/mesh/python.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PythonMesh": ()=>PythonMesh
});
function PythonMesh(meshName) {
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
}
}),
"[project]/templates/mesh/r.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RMesh": ()=>RMesh
});
function RMesh(meshName) {
    return `#' ${meshName} mesh component for R OpenGL
    #' @export
    ${meshName} <- function(material = NULL) {
      geometry <- ${meshName}Geometry()
      
      list(
        geometry = geometry,
        material = material,
        render = function() {
          if (!is.null(material)) {
            do.call(material$use, list())
          }
          do.call(geometry$render, list())
        }
      )
    }
    `;
}
}),
"[project]/templates/mesh/ruby.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RubyMesh": ()=>RubyMesh
});
function RubyMesh(meshName) {
    return `# ${meshName} mesh component for Ruby OpenGL
    class ${meshName}
      def initialize(material = nil)
        @geometry = ${meshName}Geometry.new
        @material = material
      end
      def render
        @material.use if @material
        @geometry.render
      end
    end
    `;
}
}),
"[project]/templates/mesh/rust.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RustMesh": ()=>RustMesh
});
function RustMesh(meshName) {
    return `
      use crate::geometry::${meshName}Geometry;
      /// ${meshName} mesh component for wgpu
      pub struct ${meshName} {
          geometry: ${meshName}Geometry,
      }

      impl ${meshName} {
          pub fn new(device: &wgpu::Device) -> Self {
              Self {
                  geometry: ${meshName}Geometry::new(device),
              }
          }
          
          pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
              self.geometry.render(render_pass);
          }
      }
      `;
}
}),
"[project]/templates/mesh/scala.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ScalaMesh": ()=>ScalaMesh
});
function ScalaMesh(meshName) {
    return `/**
    * ${meshName} mesh component for LWJGL in Scala
    */
    class ${meshName}(material: Material = null) {
      private val geometry = new ${meshName}Geometry()
      
      def render(): Unit = {
        if (material != null) material.use()
        geometry.render()
      }
    }
    `;
}
}),
"[project]/templates/mesh/swift.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SwiftMesh": ()=>SwiftMesh
});
function SwiftMesh(meshName) {
    return `import Metal

/// ${meshName} mesh component for Metal rendering
class ${meshName} {
    private let geometry: ${meshName}Geometry
    
    init(device: MTLDevice) {
        self.geometry = ${meshName}Geometry(device: device)
    }
    
    func render(renderEncoder: MTLRenderCommandEncoder) {
        geometry.render(renderEncoder: renderEncoder)
    }
}`;
}
}),
"[project]/templates/mesh/typescript.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TypescriptMesh": ()=>TypescriptMesh
});
function TypescriptMesh(meshName) {
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
}
}),
"[project]/lib/generator/generateMeshComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>generateMeshComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/cpp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/csharp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/dart.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/go.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/java.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/javascript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/kotlin.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/php.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/python.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/r.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/ruby.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/rust.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/scala.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/swift.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/mesh/typescript.ts [app-ssr] (ecmascript)");
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
function generateMeshComponent(meshName, _geometry, displayMode, languageId) {
    switch(languageId){
        case "typescript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$typescript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypescriptMesh"])(meshName);
        case "javascript":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$javascript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavascriptMesh"])(meshName);
        case "python":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$python$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PythonMesh"])(meshName);
        case "java":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$java$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavaMesh"])(meshName);
        case "cpp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$cpp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CPPMesh"])(meshName);
        case "csharp":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$csharp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSharpMesh"])(meshName);
        case "php":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$php$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHPMesh"])(meshName);
        case "ruby":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$ruby$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RubyMesh"])(meshName);
        case "scala":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$scala$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScalaMesh"])(meshName);
        case "kotlin":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$kotlin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KotlinMesh"])(meshName);
        case "dart":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$dart$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DartMesh"])(meshName);
        case "r":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$r$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RMesh"])(meshName);
        case "go":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$go$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoMesh"])(meshName);
        case "swift":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$swift$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiftMesh"])(meshName);
        case "rust":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$mesh$2f$rust$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RustMesh"])(meshName);
        default:
            // Fallback to TypeScript for unsupported languages
            return generateMeshComponent(meshName, _geometry, displayMode, "typescript");
    }
}
}),
"[project]/lib/generator/generateProjectStructure.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>generateProjectStructure
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateExamplePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generator/generateExamplePage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/constant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$getLanguageSpacificName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/getLanguageSpacificName.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$sanitizeName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/functions/sanitizeName.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateGeometryFile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generator/generateGeometryFile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateIndexComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generator/generateIndexComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateMaterialComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generator/generateMaterialComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateMeshComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generator/generateMeshComponent.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function generateProjectStructure(gltf, componentName, displayMode = "original", languageId = "typescript") {
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"][languageId];
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
            const safeMeshName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$sanitizeName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeName"])(meshName);
            const meshComponentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$getLanguageSpacificName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLanguageSpecificName"])(safeMeshName, languageId);
            const geometryFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateGeometryFile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(meshComponentName, geometry, languageId);
            geometries.push({
                name: meshComponentName,
                content: geometryFile,
                originalName: meshName
            });
            const meshComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateMeshComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(meshComponentName, geometry, displayMode, languageId);
            meshes.push({
                name: meshComponentName,
                content: meshComponent,
                originalName: meshName
            });
            const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
            const materialName = material.name || `Material_${materials.length}`;
            const safeMaterialName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$sanitizeName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeName"])(materialName);
            const materialComponentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$getLanguageSpacificName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLanguageSpecificName"])(safeMaterialName, languageId);
            // Extract geometry attributes
            const hasNormals = !!geometry.attributes.normal;
            const hasUvs = !!geometry.attributes.uv;
            // Only add the material if it doesn't already exist
            if (!materials.some((m)=>m.name === materialComponentName)) {
                const materialComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateMaterialComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(materialComponentName, material, displayMode, languageId, hasNormals, hasUvs);
                materials.push({
                    name: materialComponentName,
                    content: materialComponent,
                    originalName: materialName
                });
            }
        }
    });
    const componentComponentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$getLanguageSpacificName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLanguageSpecificName"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$functions$2f$sanitizeName$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeName"])(componentName), languageId);
    const indexContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateIndexComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentComponentName, meshes, materials, displayMode, languageId);
    const examplePageContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateExamplePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentComponentName, languageId);
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
}),
"[project]/app/glb-convertor/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>GLBConverter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/DRACOLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jszip/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/file-saver/dist/FileSaver.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$uploadbutton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/uploadbutton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/constant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$code$2d$editor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/code-editor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/language-selector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$file$2d$tree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/file-tree.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$model$2d$preview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/model-preview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateProjectStructure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/generator/generateProjectStructure.tsx [app-ssr] (ecmascript)");
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
;
function GLBConverter() {
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelUrl, setModelUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectStructure, setProjectStructure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("upload");
    const [gltfData, setGltfData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Display options
    const [displayMode, setDisplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("original");
    const [autoRotate, setAutoRotate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAxes, setShowAxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [componentName, setComponentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Model");
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("typescript");
    const [expandedFolders, setExpandedFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        components: true,
        componentName: true,
        geometries: false,
        meshes: true,
        materials: false,
        app: true,
        modelPage: true
    });
    const [activeFile, setActiveFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("index");
    const [currentFileContent, setCurrentFileContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (projectStructure) {
            setCurrentFileContent(projectStructure.indexContent);
        }
    }, [
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
        const uploadedFile = event.target.files?.[0];
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
                const dracoLoader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$DRACOLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRACOLoader"]();
                dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
                // Track progress for large files
                const xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.responseType = "arraybuffer";
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        try {
                            // Process the GLB data
                            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
                            loader.setDRACOLoader(dracoLoader);
                            loader.parse(xhr.response, "", (gltf)=>{
                                // Store GLTF data for transpilation
                                setGltfData(gltf);
                                // Generate project structure
                                const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateProjectStructure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(gltf, componentName, displayMode, selectedLanguage);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gltfData && componentName && activeTab === "code") {
            setIsProcessing(true);
            setProgress(0);
            try {
                console.log(`Regenerating project structure for ${selectedLanguage}...`);
                // Generate project structure with current settings
                const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateProjectStructure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(gltfData, componentName, displayMode, selectedLanguage);
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
            const lang = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"].find((l)=>l.id === selectedLanguage);
            if (!lang) return;
            // Create folder structure
            const componentFolder = zip.folder(`components/${componentName}`);
            const meshesFolder = componentFolder?.folder("meshes");
            const geometriesFolder = componentFolder?.folder("geometries");
            const materialsFolder = componentFolder?.folder("materials");
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
                const appFolder = zip.folder("app");
                const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-page`);
                modelPageFolder?.file(`page.${lang.extension}`, projectStructure.examplePageContent);
            }
            // Generate and download zip
            zip.generateAsync({
                type: "blob"
            }).then((content)=>{
                const suffix = includeExamplePage ? "-with-example" : "";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAs"])(content, `${componentName}-${selectedLanguage}${suffix}.zip`);
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
            // Generate project structure with current display mode
            const structure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$generator$2f$generateProjectStructure$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(gltfData, componentName, displayMode, selectedLanguage);
            const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
            const lang = __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"].find((l)=>l.id === selectedLanguage);
            if (!lang) return;
            // Create folder structure
            const componentFolder = zip.folder(`components/${componentName}-${displayMode}`);
            const meshesFolder = componentFolder?.folder("meshes");
            const geometriesFolder = componentFolder?.folder("geometries");
            const materialsFolder = componentFolder?.folder("materials");
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
            const appFolder = zip.folder("app");
            const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-${displayMode}-page`);
            modelPageFolder?.file(`page.${lang.extension}`, structure.examplePageContent);
            // Generate and download zip
            zip.generateAsync({
                type: "blob"
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
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#1E1E1E] text-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[calc(100vh-2rem)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 bg-[#252526] border-r border-[#3c3c3c] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-b border-[#3c3c3c]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-medium text-[#CCCCCC] flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
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
                        activeTab === "code" && projectStructure ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$file$2d$tree$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[#858585] text-sm",
                                children: activeTab === "upload" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Upload a GLB file to get started."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Supported file: .glb"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-yellow-400",
                                            children: `If you have a different 3D model format (like .obj, .fbx, .stl), please convert it to <strong>.glb</strong> before uploading.`
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$uploadbutton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                }, this) : activeTab === "preview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Preview your 3D model with different display modes."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Select a file from the project structure to view its code."
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 410,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border-t border-[#3c3c3c]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-[#858585]",
                                children: activeTab === "code" && projectStructure ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                            className: "w-4 h-4 mr-2 text-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#2D2D2D] border-b border-[#3c3c3c] h-10 flex items-center px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("upload"),
                                        className: `text-sm flex items-center gap-1 px-2 py-1 rounded ${activeTab === "upload" ? "bg-[#3C3C3C] text-[#FFFFFF]" : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("preview"),
                                        disabled: !file,
                                        className: `text-sm flex items-center gap-1 px-2 py-1 rounded ${activeTab === "preview" && file ? "bg-[#3C3C3C] text-[#FFFFFF]" : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF] disabled:opacity-50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("code"),
                                        disabled: !projectStructure,
                                        className: `text-sm flex items-center gap-1 px-2 py-1 rounded ${activeTab === "code" && projectStructure ? "bg-[#3C3C3C] text-[#FFFFFF]" : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF] disabled:opacity-50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4",
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#6A0000] border border-[#FF5252] rounded p-3 mb-4 max-w-2xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-4 h-4 text-[#FF5252] mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                lineNumber: 488,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                activeTab === "upload" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-2xl mx-auto mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#252526] rounded p-8 border border-[#3c3c3c]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `border-2 border-dashed rounded p-12 transition-colors ${isDragging ? "border-purple-500 bg-purple-500/10" : "border-[#3c3c3c] hover:border-purple-500"}`,
                                                    onDragOver: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setIsDragging(true);
                                                    },
                                                    onDragLeave: ()=>setIsDragging(false),
                                                    onDrop: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setIsDragging(false);
                                                        const droppedFile = e.dataTransfer.files?.[0];
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "w-12 h-12 text-[#858585] mx-auto mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-[#CCCCCC] mb-2",
                                                            children: "Upload your GLB model"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#858585] mb-6",
                                                            children: "Drop your .glb file here or click to browse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 23
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
                                                            lineNumber: 533,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "file-upload",
                                                            className: `bg-[#0E639C] hover:bg-[#107FC9] text-white px-4 py-2 rounded cursor-pointer transition-colors inline-block ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`,
                                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
                                            (isLoading || isProcessing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#CCCCCC] text-sm",
                                                                children: isProcessing ? "Processing model..." : "Loading file..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-[#3c3c3c] rounded h-1.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#0E70C0] h-1.5 rounded transition-all duration-300",
                                                            style: {
                                                                width: `${progress}%`
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                activeTab === "preview" && modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-6xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#252526] rounded p-6 border border-[#3c3c3c]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium text-[#CCCCCC]",
                                                        children: "3D Model Preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[#CCCCCC] text-sm",
                                                                        children: "Display Mode:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 599,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: displayMode,
                                                                        onChange: (e)=>setDisplayMode(e.target.value),
                                                                        className: "bg-[#3C3C3C] text-[#CCCCCC] px-2 py-1 rounded border border-[#3c3c3c] focus:border-purple-500 outline-none text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "original",
                                                                                children: "Original"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 609,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "wireframe",
                                                                                children: "Wireframe"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 610,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "solid",
                                                                                children: "Solid Color"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 611,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "normals",
                                                                                children: "Normals"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 612,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "depth",
                                                                                children: "Depth"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/glb-convertor/page.tsx",
                                                                                lineNumber: 613,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2 text-[#CCCCCC] text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2 text-[#CCCCCC] text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2 text-[#CCCCCC] text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: downloadCurrentView,
                                                                disabled: isProcessing,
                                                                className: `bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`,
                                                                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                            className: "w-4 h-4 animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                                            lineNumber: 656,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Processing..."
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#2D2D2D] rounded p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#1E1E1E] rounded overflow-hidden",
                                                style: {
                                                    height: "500px"
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
                                                            lineNumber: 699,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
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
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$model$2d$preview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
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
                                                        showAxes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("axesHelper", {
                                                            args: [
                                                                2
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 724,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrbitControls"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                activeTab === "code" && projectStructure && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-medium text-[#CCCCCC]",
                                                            children: activeFile ? (activeFile === "index" ? "index" : activeFile === "examplePage" ? "page" : activeFile.includes("geometry") ? "Geometry" : activeFile.includes("mesh") ? "Mesh" : "Material") + `.${__TURBOPACK__imported__module__$5b$project$5d2f$types$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGES"].find((l)=>l.id === selectedLanguage)?.extension || "ts"}` : "Code Editor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$language$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>downloadZip(true),
                                                            disabled: isProcessing,
                                                            className: `bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`,
                                                            children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "w-4 h-4 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 782,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Processing..."
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>downloadZip(false),
                                                            disabled: isProcessing,
                                                            className: `bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`,
                                                            children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                        className: "w-4 h-4 animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/glb-convertor/page.tsx",
                                                                        lineNumber: 801,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Processing..."
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: downloadModel,
                                                            className: "bg-[#237A57] hover:bg-[#2B9348] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$code$2d$editor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 border-t border-[#3c3c3c] pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-medium text-[#CCCCCC] flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex space-x-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-6 gap-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Meshes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 847,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Geometry Files"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 853,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[#CCCCCC]",
                                                                    children: projectStructure.geometries?.length || 0
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Materials"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 859,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Total Vertices"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "Total Triangles"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#2D2D2D] p-2 rounded",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#858585]",
                                                                    children: "File Size"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/glb-convertor/page.tsx",
                                                                    lineNumber: 877,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#2D2D2D] border-t border-[#3c3c3c] h-8 flex items-center px-4 text-xs text-[#858585]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "UTF-8"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "LF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 894,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-auto flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedLanguage.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/app/glb-convertor/page.tsx",
                                            lineNumber: 902,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c17b0086._.js.map