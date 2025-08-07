export const LANGUAGES = [
  {
    id: "typescript",
    name: "TypeScript",
    extension: "tsx",
    geometryExtension: "ts",
    group: "Web",
  },
  {
    id: "javascript",
    name: "JavaScript",
    extension: "jsx",
    geometryExtension: "js",
    group: "Web",
  },
  {
    id: "python",
    name: "Python",
    extension: "py",
    geometryExtension: "py",
    group: "General",
  },
  {
    id: "java",
    name: "Java",
    extension: "java",
    geometryExtension: "java",
    group: "General",
  },
  {
    id: "csharp",
    name: "C#",
    extension: "cs",
    geometryExtension: "cs",
    group: "General",
  },
  {
    id: "cpp",
    name: "C++",
    extension: "cpp",
    geometryExtension: "h",
    group: "Systems",
  },
  {
    id: "go",
    name: "Go",
    extension: "go",
    geometryExtension: "go",
    group: "Systems",
  },
  {
    id: "rust",
    name: "Rust",
    extension: "rs",
    geometryExtension: "rs",
    group: "Systems",
  },
  {
    id: "swift",
    name: "Swift",
    extension: "swift",
    geometryExtension: "swift",
    group: "Mobile",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    extension: "kt",
    geometryExtension: "kt",
    group: "Mobile",
  },
  {
    id: "ruby",
    name: "Ruby",
    extension: "rb",
    geometryExtension: "rb",
    group: "Web",
  },
  {
    id: "php",
    name: "PHP",
    extension: "php",
    geometryExtension: "php",
    group: "Web",
  },
  {
    id: "scala",
    name: "Scala",
    extension: "scala",
    geometryExtension: "scala",
    group: "General",
  },
  {
    id: "dart",
    name: "Dart",
    extension: "dart",
    geometryExtension: "dart",
    group: "Mobile",
  },
  {
    id: "r",
    name: "R",
    extension: "R",
    geometryExtension: "R",
    group: "Data Science",
  },
] as const;


export const LANGUAGE_SETUP = {
  typescript: {
    packageManager: "npm",
    dependencies: [
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "react",
      "react-dom",
      "@types/three",
    ],
    devDependencies: ["typescript", "@types/react", "@types/react-dom"],
    installCommand:
      "npm install three @react-three/fiber @react-three/drei react react-dom @types/three",
    devInstallCommand:
      "npm install -D typescript @types/react @types/react-dom",
    setupSteps: [
      "Create a new Next.js project with TypeScript",
      "Install the required dependencies",
      "Extract the downloaded component files to your project",
      "Import and use the component in your pages",
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
}`,
  },
  javascript: {
    packageManager: "npm",
    dependencies: [
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "react",
      "react-dom",
    ],
    devDependencies: [],
    installCommand:
      "npm install three @react-three/fiber @react-three/drei react react-dom",
    devInstallCommand: "",
    setupSteps: [
      "Create a new React project",
      "Install the required dependencies",
      "Extract the downloaded component files to your project",
      "Import and use the component in your pages",
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
}`,
  },
  python: {
    packageManager: "pip",
    dependencies: ["moderngl", "pyglet", "numpy", "pyrr"],
    devDependencies: [],
    installCommand: "pip install moderngl pyglet numpy pyrr",
    devInstallCommand: "",
    setupSteps: [
      "Create a new Python project",
      "Install the required dependencies",
      "Extract the downloaded component files to your project",
      "Run the example application",
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
        self.mesh = MeshName(ctx, self.material)`,
  },
  java: {
    packageManager: "maven/gradle",
    dependencies: [
      "org.lwjgl:lwjgl:3.3.3",
      "org.lwjgl:lwjgl-opengl:3.3.3",
      "org.lwjgl:lwjgl-glfw:3.3.3",
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
      "Run the example application",
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
}`,
  },
  csharp: {
    packageManager: "NuGet",
    dependencies: ["OpenTK", "OpenTK.Graphics", "OpenTK.Mathematics"],
    devDependencies: [],
    installCommand: "dotnet add package OpenTK --version 4.8.2",
    devInstallCommand: "",
    setupSteps: [
      "Create a new .NET project",
      "Install OpenTK via NuGet",
      "Extract the downloaded component files to your project",
      "Run the example application",
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
}`,
  },
  cpp: {
    packageManager: "vcpkg/conan",
    dependencies: ["glew", "glfw3", "glm"],
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
      "Compile and run the example application",
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
};`,
  },
  go: {
    packageManager: "go mod",
    dependencies: [
      "github.com/go-gl/gl/v4.1-core/gl",
      "github.com/go-gl/glfw/v3.3/glfw",
      "github.com/go-gl/mathgl/mgl32",
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
      "Run the example application",
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
}`,
  },
  rust: {
    packageManager: "cargo",
    dependencies: ["wgpu", "winit", "bytemuck", "glam"],
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
      "Run the example application",
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
}`,
  },
  swift: {
    packageManager: "Swift Package Manager",
    dependencies: ["Metal", "MetalKit", "simd"],
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
      "Run the example application",
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
}`,
  },
  kotlin: {
    packageManager: "Gradle",
    dependencies: ["org.lwjgl:lwjgl:3.3.3", "org.lwjgl:lwjgl-opengl:3.3.3"],
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
      "Run the example application",
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
}`,
  },
  ruby: {
    packageManager: "gem",
    dependencies: ["opengl", "glfw", "matrix"],
    devDependencies: [],
    installCommand: "gem install opengl glfw matrix",
    devInstallCommand: "",
    setupSteps: [
      "Install Ruby and required gems",
      "Extract the downloaded component files to your project",
      "Run the example application",
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
end`,
  },
  php: {
    packageManager: "composer",
    dependencies: ["php-opengl/opengl", "php-gl/math"],
    devDependencies: [],
    installCommand: "composer require php-opengl/opengl php-gl/math",
    devInstallCommand: "",
    setupSteps: [
      "Install PHP and Composer",
      "Install OpenGL PHP extensions",
      "Extract the downloaded component files to your project",
      "Run the example application",
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
}`,
  },
  scala: {
    packageManager: "sbt",
    dependencies: ["org.lwjgl:lwjgl:3.3.3", "org.lwjgl:lwjgl-opengl:3.3.3"],
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
      "Run the example application",
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
}`,
  },
  dart: {
    packageManager: "pub",
    dependencies: ["flutter", "vector_math", "flutter_gl"],
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
      "Run the example application",
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
}`,
  },
  r: {
    packageManager: "CRAN",
    dependencies: ["rgl", "geometry", "matrix"],
    devDependencies: [],
    installCommand: 'install.packages(c("rgl", "geometry", "matrix"))',
    devInstallCommand: "",
    setupSteps: [
      "Install R and required packages",
      "Extract the downloaded component files to your project",
      "Source the example script",
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
)`,
  },
};
export type LanguageId = (typeof LANGUAGES)[number]["id"];

