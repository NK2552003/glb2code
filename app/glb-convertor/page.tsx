"use client";

import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Download, Upload, Eye, Code, Loader2, AlertCircle, File, FileText, Folder, Layout, Languages, Package, Terminal, Copy } from 'lucide-react';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import JSZip from 'jszip';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { saveAs } from 'file-saver';
import { generateProjectStructure } from '@/app/lib/glb-converter';
import type { MeshData, MaterialData, ProjectStructure, GeometryData } from '@/app/types/glb-convertor';

// Language configuration for syntax highlighting and code generation
const LANGUAGES = [
  { id: 'typescript', name: 'TypeScript', extension: 'tsx', geometryExtension: 'ts', group: 'Web' },
  { id: 'javascript', name: 'JavaScript', extension: 'jsx', geometryExtension: 'js', group: 'Web' },
  { id: 'python', name: 'Python', extension: 'py', geometryExtension: 'py', group: 'General' },
  { id: 'java', name: 'Java', extension: 'java', geometryExtension: 'java', group: 'General' },
  { id: 'csharp', name: 'C#', extension: 'cs', geometryExtension: 'cs', group: 'General' },
  { id: 'cpp', name: 'C++', extension: 'cpp', geometryExtension: 'h', group: 'Systems' },
  { id: 'go', name: 'Go', extension: 'go', geometryExtension: 'go', group: 'Systems' },
  { id: 'rust', name: 'Rust', extension: 'rs', geometryExtension: 'rs', group: 'Systems' },
  { id: 'swift', name: 'Swift', extension: 'swift', geometryExtension: 'swift', group: 'Mobile' },
  { id: 'kotlin', name: 'Kotlin', extension: 'kt', geometryExtension: 'kt', group: 'Mobile' },
  { id: 'ruby', name: 'Ruby', extension: 'rb', geometryExtension: 'rb', group: 'Web' },
  { id: 'php', name: 'PHP', extension: 'php', geometryExtension: 'php', group: 'Web' },
  { id: 'scala', name: 'Scala', extension: 'scala', geometryExtension: 'scala', group: 'General' },
  { id: 'dart', name: 'Dart', extension: 'dart', geometryExtension: 'dart', group: 'Mobile' },
  { id: 'r', name: 'R', extension: 'R', geometryExtension: 'R', group: 'Data Science' }
] as const;

type LanguageId = typeof LANGUAGES[number]['id'];

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
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    // You could add a toast notification here
    console.log('Copied to clipboard');
  });
};

// VS Code-like editor component with syntax highlighting
function CodeEditor({ code, languageId }: { code: string; languageId: LanguageId }) {
  const language = LANGUAGES.find(lang => lang.id === languageId);
  const lines = code.split('\n');

  const getSyntaxClass = (line: string): string => {
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

  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden font-mono text-sm h-full flex flex-col">
      <div className="bg-[#3C3C3C] px-4 py-2 flex items-center justify-between border-b border-[#333333]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="text-[#CCCCCC] text-xs flex items-center gap-2">
          <span>{language?.name}</span>
          <span className="text-[#858585]">•</span>
          <span className="text-[#858585]">{lines.length} lines</span>
          <button
            onClick={() => copyToClipboard(code)}
            className="ml-2 p-1 hover:bg-[#404040] rounded"
            title="Copy to clipboard"
          >
            <Copy className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="flex">
          <div className="text-[#858585] w-8 select-none flex-shrink-0 pr-4 text-right">
            {lines.map((_, i) => (
              <div key={i} className="select-none">{i + 1}</div>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            {lines.map((line, i) => (
              <div key={i} className={`whitespace-pre ${getSyntaxClass(line)}`}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Language selector component with grouping
function LanguageSelector({ 
  selectedLanguage, 
  onChange 
}: { 
  selectedLanguage: LanguageId; 
  onChange: (language: LanguageId) => void 
}) {
  const groups = Array.from(new Set(LANGUAGES.map(lang => lang.group)));

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Languages className="w-4 h-4 text-purple-400" />
        <select
          value={selectedLanguage}
          onChange={(e) => onChange(e.target.value as LanguageId)}
          className="bg-slate-700 text-white px-3 py-1.5 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm appearance-none pr-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%239CA3AF%22><path d=%22M7 10l5 5 5-5z%22/></svg>')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem] cursor-pointer"
        >
          {groups.map(group => (
            <optgroup key={group} label={group}>
              {LANGUAGES.filter(lang => lang.group === group).map(lang => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );
}

// How to Use section component
function HowToUseSection({ 
  selectedLanguage, 
  componentName 
}: { 
  selectedLanguage: LanguageId; 
  componentName: string 
}) {
  const setup = LANGUAGE_SETUP[selectedLanguage];
  const lang = LANGUAGES.find(l => l.id === selectedLanguage);

  const replaceComponentName = (text: string) => {
    return text.replace(/\{componentName\}/g, componentName);
  };

  return (
    <div className="p-6 border-t border-slate-700">
      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
        <Terminal className="w-5 h-5 mr-2 text-purple-400" />
        How to Use ({setup.packageManager})
      </h4>
      
      <div className="space-y-6">
        {/* Dependencies Section */}
        <div>
          <h5 className="text-md font-semibold text-white mb-2 flex items-center">
            <Package className="w-4 h-4 mr-2 text-green-400" />
            Dependencies
          </h5>
          <div className="bg-slate-900 rounded-lg p-4">
            <div className="mb-3">
              <p className="text-slate-400 text-sm mb-2">Install required dependencies:</p>
              <div className="bg-slate-800 rounded p-3 relative">
                <code className="text-green-400 text-sm">{setup.installCommand}</code>
                <button
                  onClick={() => copyToClipboard(setup.installCommand)}
                  className="absolute top-2 right-2 p-1 hover:bg-slate-700 rounded"
                  title="Copy command"
                >
                  <Copy className="w-3 h-3 text-slate-400" />
                </button>
              </div>
            </div>
            
            {setup.devInstallCommand && (
              <div className="mb-3">
                <p className="text-slate-400 text-sm mb-2">Install development dependencies:</p>
                <div className="bg-slate-800 rounded p-3 relative">
                  <code className="text-blue-400 text-sm">{setup.devInstallCommand}</code>
                  <button
                    onClick={() => copyToClipboard(setup.devInstallCommand)}
                    className="absolute top-2 right-2 p-1 hover:bg-slate-700 rounded"
                    title="Copy command"
                  >
                    <Copy className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>
            )}

            <div className="text-xs text-slate-500 mt-3">
              <p className="font-medium mb-1">Required packages:</p>
              <ul className="list-disc list-inside space-y-1">
                {setup.dependencies.map((dep, i) => (
                  <li key={i}>{dep}</li>
                ))}
              </ul>
              {setup.devDependencies.length > 0 && (
                <>
                  <p className="font-medium mb-1 mt-2">Development packages:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {setup.devDependencies.map((dep, i) => (
                      <li key={i}>{dep}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Setup Steps */}
        <div>
          <h5 className="text-md font-semibold text-white mb-2">Setup Steps</h5>
          <div className="bg-slate-900 rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-2 text-slate-400 text-sm">
              {setup.setupSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Download Instructions */}
        <div>
          <h5 className="text-md font-semibold text-white mb-2">Download & Extract</h5>
          <div className="bg-slate-900 rounded-lg p-4">
            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-sm mb-2">1. Download the complete project:</p>
                <div className="bg-slate-800 rounded p-3">
                  <code className="text-blue-400 text-sm">Click "Download Full Project" button above</code>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">2. Extract to your project directory:</p>
                <div className="bg-slate-800 rounded p-3">
                  <code className="text-yellow-400 text-sm">
                    {componentName}-{selectedLanguage}-with-example.zip → your-project/
                  </code>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">3. File structure after extraction:</p>
                <div className="bg-slate-800 rounded p-3 text-xs">
                  <div className="text-slate-300 font-mono">
                    <div>📁 components/</div>
                    <div className="ml-4">📁 {componentName}/</div>
                    <div className="ml-8">📄 index.{lang?.extension}</div>
                    <div className="ml-8">📁 geometries/</div>
                    <div className="ml-8">📁 meshes/</div>
                    <div className="ml-8">📁 materials/</div>
                    <div>📁 app/</div>
                    <div className="ml-4">📁 {componentName.toLowerCase()}-page/</div>
                    <div className="ml-8">📄 page.{lang?.extension}</div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div>
          <h5 className="text-md font-semibold text-white mb-2">Basic Usage</h5>
          <div className="bg-slate-900 rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
              <span className="text-purple-400 font-mono text-sm">
                Basic implementation example
              </span>
              <button
                onClick={() => copyToClipboard(replaceComponentName(setup.importExample))}
                className="p-1 hover:bg-slate-700 rounded"
                title="Copy example"
              >
                <Copy className="w-3 h-3 text-slate-400" />
              </button>
            </div>
            <div className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-300">
                  {replaceComponentName(setup.importExample)}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Customization Example */}
        <div>
          <h5 className="text-md font-semibold text-white mb-2">Advanced Customization</h5>
          <div className="bg-slate-900 rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
              <span className="text-orange-400 font-mono text-sm">
                Access individual components
              </span>
              <button
                onClick={() => copyToClipboard(replaceComponentName(setup.customizationExample))}
                className="p-1 hover:bg-slate-700 rounded"
                title="Copy example"
              >
                <Copy className="w-3 h-3 text-slate-400" />
              </button>
            </div>
            <div className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code className="text-slate-300">
                  {replaceComponentName(setup.customizationExample)}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Language-specific Notes */}
        <div>
          <h5 className="text-md font-semibold text-white mb-2">Important Notes</h5>
          <div className="bg-slate-900 rounded-lg p-4">
            <div className="text-xs text-slate-400 space-y-2">
              {selectedLanguage === 'typescript' || selectedLanguage === 'javascript' ? (
                <>
                  <p>• This component is designed for React Three Fiber applications</p>
                  <p>• Make sure you have a Canvas component wrapping your 3D content</p>
                  <p>• Geometry files are separated for better maintainability and reusability</p>
                  <p>• Each mesh component imports its geometry from the geometries folder</p>
                </>
              ) : selectedLanguage === 'python' ? (
                <>
                  <p>• This implementation uses ModernGL for high-performance OpenGL rendering</p>
                  <p>• Make sure you have OpenGL drivers installed on your system</p>
                  <p>• Geometry data is optimized for NumPy arrays</p>
                  <p>• Each component is a separate class for modularity</p>
                </>
              ) : selectedLanguage === 'java' ? (
                <>
                  <p>• This implementation uses LWJGL for OpenGL bindings</p>
                  <p>• Make sure to include native libraries for your platform</p>
                  <p>• Geometry data is stored in efficient buffer objects</p>
                  <p>• Memory management is handled automatically</p>
                </>
              ) : selectedLanguage === 'csharp' ? (
                <>
                  <p>• This implementation uses OpenTK for OpenGL bindings</p>
                  <p>• Compatible with .NET Core and .NET Framework</p>
                  <p>• Implements IDisposable for proper resource cleanup</p>
                  <p>• Geometry data is optimized for GPU buffers</p>
                </>
              ) : selectedLanguage === 'cpp' ? (
                <>
                  <p>• This implementation uses modern OpenGL with GLEW and GLFW</p>
                  <p>• Requires C++11 or later</p>
                  <p>• Uses RAII for automatic resource management</p>
                  <p>• Geometry data is stored in efficient STL containers</p>
                </>
              ) : selectedLanguage === 'go' ? (
                <>
                  <p>• This implementation uses go-gl bindings for OpenGL</p>
                  <p>• Requires CGO to be enabled</p>
                  <p>• Memory management is handled by Go's garbage collector</p>
                  <p>• Geometry data is stored in slices for efficiency</p>
                </>
              ) : selectedLanguage === 'rust' ? (
                <>
                  <p>• This implementation uses wgpu for cross-platform graphics</p>
                  <p>• Memory safety is guaranteed by Rust's ownership system</p>
                  <p>• Geometry data is stored in efficient Vec containers</p>
                  <p>• Compatible with WebAssembly for web deployment</p>
                </>
              ) : selectedLanguage === 'swift' ? (
                <>
                  <p>• This implementation uses Metal for high-performance graphics</p>
                  <p>• Compatible with iOS, macOS, and tvOS</p>
                  <p>• Automatic reference counting handles memory management</p>
                  <p>• Geometry data is optimized for Metal buffers</p>
                </>
              ) : (
                <>
                  <p>• Geometry files are separated for better maintainability</p>
                  <p>• Each component is modular and can be used independently</p>
                  <p>• Memory optimization is applied for large models</p>
                  <p>• Follow the platform-specific best practices for your language</p>
                </>
              )}
              <p className="pt-2 border-t border-slate-700 mt-3">
                <strong>Performance Tips:</strong> For extremely large models (&gt;100MB), consider:
                <br />• Loading geometry data asynchronously
                <br />• Implementing level-of-detail (LOD) systems
                <br />• Using instancing for repeated geometry
                <br />• Applying mesh simplification for distant objects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GLBConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [modelUrl, setModelUrl] = useState('');
  const [projectStructure, setProjectStructure] = useState<ProjectStructure | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'upload' | 'preview' | 'code'>('upload');
  const [gltfData, setGltfData] = useState<any>(null);

  // Display options
  const [displayMode, setDisplayMode] = useState<'original' | 'wireframe' | 'solid' | 'normals' | 'depth' | 'points'>('original');
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [showAxes, setShowAxes] = useState(false);
  const [componentName, setComponentName] = useState('Model');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageId>('typescript');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
      } finally {
        setIsLoading(false);
      }
    } else {
      setError('Please upload a valid .glb file');
    }
  };

  const loadGLTFWithProgress = async (url: string, file: File): Promise<void> => {
    setIsProcessing(true);
    setProgress(0);

    return new Promise<void>((resolve, reject) => {
      try {
        // Set up DRACO decoder for compressed models (common in large GLBs)
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

        // Track progress for large files
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = function() {
          if (xhr.status === 200) {
            try {
              // Process the GLB data
              const loader = new GLTFLoader();
              loader.setDRACOLoader(dracoLoader);
              loader.parse(
                xhr.response,
                '',
                (gltf) => {
                  // Store GLTF data for transpilation
                  setGltfData(gltf);
                  
                  // Generate project structure
                  const structure = generateProjectStructure(
                    gltf, 
                    componentName, 
                    displayMode, 
                    selectedLanguage
                  );
                  setProjectStructure(structure);
                  setIsProcessing(false);
                  resolve();
                },
                (error) => {
                  console.error("Error parsing GLTF", error);
                  setIsProcessing(false);
                  reject(error);
                }
              );
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
            const percentComplete = (event.loaded / event.total) * 100;
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
  useEffect(() => {
    if (gltfData && componentName && activeTab === 'code') {
      setIsProcessing(true);
      setProgress(0);

      try {
        console.log(`Regenerating project structure for ${selectedLanguage}...`);
        // Generate project structure with current settings
        const structure = generateProjectStructure(
          gltfData, 
          componentName, 
          displayMode, 
          selectedLanguage
        );
        setProjectStructure(structure);
        setProgress(100);
        console.log("Project structure regenerated successfully");
      } catch (err) {
        console.error("Error regenerating project structure", err);
        setError('Failed to regenerate project structure for the selected language');
      } finally {
        setIsProcessing(false);
      }
    }
  }, [selectedLanguage, gltfData, componentName, displayMode, activeTab]);

  const downloadZip = (includeExamplePage: boolean = false) => {
    if (!projectStructure) return;

    setIsProcessing(true);
    try {
      const zip = new JSZip();
      const lang = LANGUAGES.find(l => l.id === selectedLanguage);
      if (!lang) return;

      // Create folder structure
      const componentFolder = zip.folder(`components/${componentName}`);
      const meshesFolder = componentFolder?.folder('meshes');
      const geometriesFolder = componentFolder?.folder('geometries');
      const materialsFolder = componentFolder?.folder('materials');

      // Add index file
      componentFolder?.file(`index.${lang.extension}`, projectStructure.indexContent);

      // Add geometry files
      projectStructure.geometries?.forEach(geometry => {
        geometriesFolder?.file(
          `${geometry.name}Geometry.${lang.geometryExtension}`, 
          geometry.content
        );
      });

      // Add mesh files
      projectStructure.meshes.forEach(mesh => {
        meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
      });

      // Add material files
      projectStructure.materials.forEach(material => {
        materialsFolder?.file(`${material.name}.${lang.extension}`, material.content);
      });

      // Add example page if requested
      if (includeExamplePage) {
        const appFolder = zip.folder('app');
        const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-page`);
        modelPageFolder?.file(`page.${lang.extension}`, projectStructure.examplePageContent);
      }

      // Generate and download zip
      zip.generateAsync({ type: 'blob' }).then(content => {
        const suffix = includeExamplePage ? '-with-example' : '';
        saveAs(content, `${componentName}-${selectedLanguage}${suffix}.zip`);
      });
    } catch (err) {
      console.error("Error generating ZIP", err);
      setError('Failed to generate ZIP file. The model might be too large.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadCurrentView = () => {
    if (!gltfData) return;

    setIsProcessing(true);
    try {
      // Generate project structure with current display mode
      const structure = generateProjectStructure(
        gltfData, 
        componentName, 
        displayMode, 
        selectedLanguage
      );
      const zip = new JSZip();
      const lang = LANGUAGES.find(l => l.id === selectedLanguage);
      if (!lang) return;

      // Create folder structure
      const componentFolder = zip.folder(`components/${componentName}-${displayMode}`);
      const meshesFolder = componentFolder?.folder('meshes');
      const geometriesFolder = componentFolder?.folder('geometries');
      const materialsFolder = componentFolder?.folder('materials');

      // Add index file
      componentFolder?.file(`index.${lang.extension}`, structure.indexContent);

      // Add geometry files
      structure.geometries?.forEach(geometry => {
        geometriesFolder?.file(
          `${geometry.name}Geometry.${lang.geometryExtension}`, 
          geometry.content
        );
      });

      // Add mesh files
      structure.meshes.forEach(mesh => {
        meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
      });

      // Add material files
      structure.materials.forEach(material => {
        materialsFolder?.file(`${material.name}.${lang.extension}`, material.content);
      });

      // Add example page
      const appFolder = zip.folder('app');
      const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-${displayMode}-page`);
      modelPageFolder?.file(`page.${lang.extension}`, structure.examplePageContent);

      // Generate and download zip
      zip.generateAsync({ type: 'blob' }).then(content => {
        saveAs(content, `${componentName}-${displayMode}-${selectedLanguage}.zip`);
      });
    } catch (err) {
      console.error("Error generating ZIP for current view", err);
      setError(`Failed to generate ZIP for ${displayMode} view. The model might be too large.`);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadModel = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Code className="w-10 h-10 text-purple-400" />
            GLB to Code Converter
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Convert your GLB 3D models into self-contained components in 15+ programming languages with separate geometry blocks for easier maintenance.
            Handles large files efficiently with progress tracking and memory optimization.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                activeTab === 'upload'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Upload className="w-4 h-4" />
              Upload
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              disabled={!file}
              className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                activeTab === 'preview' && file
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              disabled={!projectStructure}
              className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                activeTab === 'code' && projectStructure
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              <Code className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-200">{error}</span>
            </div>
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="text-center">
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 hover:border-purple-500 transition-colors">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Upload your GLB model
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Drop your .glb file here or click to browse
                  </p>
                  <input
                    type="file"
                    accept=".glb"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    disabled={isLoading}
                  />
                  <label
                    htmlFor="file-upload"
                    className={`bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors inline-block ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Choose File'
                    )}
                  </label>
                </div>
              </div>

              {/* Progress Bar for Large Files */}
              {(isLoading || isProcessing) && (
                <div className="mt-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">
                      {isProcessing ? 'Processing model...' : 'Loading file...'}
                    </span>
                    <span className="text-slate-300 text-sm">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-slate-400 text-xs mt-2">
                    {progress < 100
                      ? "Loading large model. This may take a few moments..."
                      : "Optimizing model data for transpilation..."
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Preview Tab */}
        {activeTab === 'preview' && modelUrl && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">3D Model Preview</h3>
                <div className="flex items-center gap-4">
                  {/* Display Mode Controls */}
                  <div className="flex items-center gap-2">
                    <label className="text-slate-300 text-sm">Display Mode:</label>
                    <select
                      value={displayMode}
                      onChange={(e) => setDisplayMode(e.target.value as any)}
                      className="bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm"
                    >
                      <option value="original">Original</option>
                      <option value="wireframe">Wireframe</option>
                      <option value="solid">Solid Color</option>
                      <option value="normals">Normals</option>
                      <option value="depth">Depth</option>
                      <option value="points">Point Cloud</option>
                    </select>
                  </div>

                  {/* Toggle Controls */}
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={autoRotate}
                        onChange={(e) => setAutoRotate(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Auto Rotate
                    </label>
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={showGrid}
                        onChange={(e) => setShowGrid(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Grid
                    </label>
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={showAxes}
                        onChange={(e) => setShowAxes(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Axes
                    </label>
                  </div>

                  <button
                    onClick={downloadCurrentView}
                    disabled={isProcessing}
                    className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                      isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <File className="w-4 h-4" />
                        Download {displayMode} Version
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Display Mode Description */}
              <div className="mb-4">
                <div className="bg-slate-900 rounded-lg p-3">
                  <p className="text-slate-400 text-sm">
                    {displayMode === 'original' && 'Showing the original model with its materials and textures.'}
                    {displayMode === 'wireframe' && 'Displaying the model as a wireframe structure showing the mesh geometry.'}
                    {displayMode === 'solid' && 'Rendering the model with a uniform solid color material.'}
                    {displayMode === 'normals' && 'Visualizing surface normals with color-coded directions (RGB = XYZ).'}
                    {displayMode === 'depth' && 'Showing depth information - closer surfaces appear lighter.'}
                    {displayMode === 'points' && 'Displaying the model as a point cloud of vertices.'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg overflow-hidden" style={{ height: '500px' }}>
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
                  <pointLight position={[-10, -10, -10]} intensity={0.3} />

                  {/* Memory-optimized loading for large models */}
                  {modelUrl && (
                    <React.Suspense fallback={
                      <Html center>
                        <div className="text-white bg-black/50 p-2 rounded">
                          <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                          Loading model...
                        </div>
                      </Html>
                    }>
                      <ModelPreview 
                        url={modelUrl} 
                        displayMode={displayMode} 
                        autoRotate={autoRotate} 
                      />
                    </React.Suspense>
                  )}

                  {showGrid && (
                    <gridHelper args={[10, 10, '#444444', '#666666']} />
                  )}

                  {showAxes && (
                    <axesHelper args={[2]} />
                  )}

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

              <p className="text-slate-400 text-sm mt-4 text-center">
                Use mouse to rotate, zoom, and pan around the model. Try different display modes to analyze the model structure.
              </p>
            </div>
          </div>
        )}

        {isProcessing && activeTab === 'code' && (
          <div className="absolute top-4 right-4 bg-slate-800 px-3 py-1 rounded text-sm text-purple-400">
            Regenerating code...
          </div>
        )}

        {/* Code Tab */}
        {activeTab === 'code' && projectStructure && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-slate-700 gap-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    Project Structure
                  </h3>
                  {/* Language Selection */}
                  <div className="flex items-center gap-2">
                    <LanguageSelector 
                      selectedLanguage={selectedLanguage} 
                      onChange={setSelectedLanguage} 
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <button
                    onClick={() => downloadZip(true)}
                    disabled={isProcessing}
                    className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto ${
                      isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Layout className="w-4 h-4" />
                        Download Full Project
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => downloadZip(false)}
                    disabled={isProcessing}
                    className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto ${
                      isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <File className="w-4 h-4" />
                        Download Component
                      </>
                    )}
                  </button>

                  <button
                    onClick={downloadModel}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    Download GLB
                  </button>
                </div>
              </div>

              {/* Project Structure Overview */}
              <div className="p-6 border-b border-slate-700">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Folder className="w-5 h-5 mr-2 text-purple-400" />
                      Project Structure
                    </h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="text-slate-400 text-sm">
                        <div className="flex items-center">
                          <Folder className="w-4 h-4 mr-2 text-yellow-400" />
                          <span className="font-medium">components</span>
                        </div>
                        <div className="pl-6">
                          <div className="flex items-center">
                            <Folder className="w-4 h-4 mr-2 text-blue-400" />
                            <span className="font-medium">{componentName}</span>
                          </div>
                          <div className="pl-6">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2 text-green-400" />
                              <span>index.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                            </div>
                            
                            <div className="flex items-center mt-2">
                              <Folder className="w-4 h-4 mr-2 text-cyan-400" />
                              <span className="font-medium">geometries</span>
                            </div>
                            <div className="pl-6">
                              {projectStructure.geometries?.map((geometry, i) => (
                                <div key={i} className="flex items-center">
                                  <File className="w-4 h-4 mr-2 text-cyan-400" />
                                  <span>{geometry.name}Geometry.{LANGUAGES.find(l => l.id === selectedLanguage)?.geometryExtension}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center mt-2">
                              <Folder className="w-4 h-4 mr-2 text-cyan-400" />
                              <span className="font-medium">meshes</span>
                            </div>
                            <div className="pl-6">
                              {projectStructure.meshes.map((mesh, i) => (
                                <div key={i} className="flex items-center">
                                  <File className="w-4 h-4 mr-2 text-cyan-400" />
                                  <span>{mesh.name}.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center mt-2">
                              <Folder className="w-4 h-4 mr-2 text-orange-400" />
                              <span className="font-medium">materials</span>
                            </div>
                            <div className="pl-6">
                              {projectStructure.materials.map((material, i) => (
                                <div key={i} className="flex items-center">
                                  <File className="w-4 h-4 mr-2 text-orange-400" />
                                  <span>{material.name}.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center">
                          <Folder className="w-4 h-4 mr-2 text-purple-400" />
                          <span className="font-medium">app</span>
                        </div>
                        <div className="pl-6">
                          <div className="flex items-center">
                            <Folder className="w-4 h-4 mr-2 text-blue-400" />
                            <span className="font-medium">{componentName.toLowerCase()}-page</span>
                          </div>
                          <div className="pl-6">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2 text-green-400" />
                              <span>page.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-purple-400" />
                      Model Statistics
                    </h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="text-slate-400 text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Meshes:</span>
                          <span className="font-medium">{projectStructure.meshes.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Geometry Files:</span>
                          <span className="font-medium">{projectStructure.geometries?.length || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Materials:</span>
                          <span className="font-medium">{projectStructure.materials.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Vertices:</span>
                          <span className="font-medium">{projectStructure.totalVertices.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Triangles:</span>
                          <span className="font-medium">{projectStructure.totalTriangles.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>File Size:</span>
                          <span className="font-medium">{file ? (file.size / 1024 / 1024).toFixed(2) + ' MB' : 'N/A'}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-700 mt-2">
                          <p className="text-xs text-slate-500">
                            {`Note: For extremely large models (>100MB), some meshes might be simplified
                             during transpilation to prevent browser memory issues.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Preview */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-purple-400" />
                    index.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension} - Main Component
                  </h4>
                  <CodeEditor code={projectStructure.indexContent} languageId={selectedLanguage} />
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2 text-cyan-400" />
                    Example Page
                  </h4>
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                      <span className="text-purple-400 font-mono">
                        app/{componentName.toLowerCase()}-page/page.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}
                      </span>
                    </div>
                    <CodeEditor code={projectStructure.examplePageContent} languageId={selectedLanguage} />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2 text-cyan-400" />
                    Geometry Files
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectStructure.geometries?.slice(0, 3).map((geometry, i) => (
                      <div key={i} className="bg-slate-900 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                          <span className="text-cyan-400 font-mono">
                            {geometry.name}Geometry.{LANGUAGES.find(l => l.id === selectedLanguage)?.geometryExtension}
                          </span>
                        </div>
                        <CodeEditor code={geometry.content} languageId={selectedLanguage} />
                      </div>
                    ))}
                    {projectStructure.geometries && projectStructure.geometries.length > 3 && (
                      <div className="col-span-full text-center text-slate-400 text-sm py-4">
                        ... and {projectStructure.geometries.length - 3} more geometry files
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2 text-cyan-400" />
                    Mesh Components
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectStructure.meshes.slice(0, 3).map((mesh, i) => (
                      <div key={i} className="bg-slate-900 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                          <span className="text-cyan-400 font-mono">
                            {mesh.name}.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}
                          </span>
                        </div>
                        <CodeEditor code={mesh.content} languageId={selectedLanguage} />
                      </div>
                    ))}
                    {projectStructure.meshes.length > 3 && (
                      <div className="col-span-full text-center text-slate-400 text-sm py-4">
                        ... and {projectStructure.meshes.length - 3} more mesh components
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2 text-orange-400" />
                    Material Components
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectStructure.materials.slice(0, 3).map((material, i) => (
                      <div key={i} className="bg-slate-900 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                          <span className="text-orange-400 font-mono">
                            {material.name}.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}
                          </span>
                        </div>
                        <CodeEditor code={material.content} languageId={selectedLanguage} />
                      </div>
                    ))}
                    {projectStructure.materials.length > 3 && (
                      <div className="col-span-full text-center text-slate-400 text-sm py-4">
                        ... and {projectStructure.materials.length - 3} more material components
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Updated How to Use Section */}
              <HowToUseSection 
                selectedLanguage={selectedLanguage} 
                componentName={componentName} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Component to display the GLB model in the preview with memory optimization
function ModelPreview({ 
  url, 
  displayMode, 
  autoRotate 
}: { 
  url: string; 
  displayMode: string; 
  autoRotate: boolean 
}) {
  const [gltf, setGltf] = useState<any>(null);
  const meshRef = useRef<THREE.Group>(null);

  // Load GLTF with memory optimization for large files
  useEffect(() => {
    let isMounted = true;
    const loader = new GLTFLoader();

    // Set up DRACO for compressed models
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);

    // For large files, use a more memory-efficient approach
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(data => {
        if (!isMounted) return;

        loader.parse(
          data,
          '',
          (gltf) => {
            // For extremely large models, simplify geometries to prevent memory issues
            if (gltf.scene) {
              gltf.scene.traverse((object: THREE.Object3D) => {
                if (object.isMesh) {
                  const mesh = object as THREE.Mesh;
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
          },
          (error) => {
            console.error("Error parsing GLTF", error);
          }
        );
      })
      .catch(error => {
        console.error("Error loading GLB file", error);
      });

    return () => {
      isMounted = false;
      // Clean up GLTF resources
      if (gltf) {
        gltf.scene.traverse((object: THREE.Object3D) => {
          if (object.isMesh) {
            const mesh = object as THREE.Mesh;
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(material => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }
    };
  }, [url]);

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  // Apply material overrides based on display mode
  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child: THREE.Object3D) => {
        if (child.isMesh) {
          const mesh = child as THREE.Mesh;
          const originalMaterial = mesh.material;

          // Dispose of old materials to prevent memory leaks
          if (Array.isArray(originalMaterial)) {
            originalMaterial.forEach(material => material.dispose());
          } else if (originalMaterial && 'dispose' in originalMaterial) {
            (originalMaterial as THREE.Material).dispose();
          }

          // Create new materials based on display mode
          switch (displayMode) {
            case 'wireframe':
              if (Array.isArray(originalMaterial)) {
                mesh.material = originalMaterial.map(mat => {
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
              mesh.material = new THREE.PointsMaterial({
                color: 0x00ff00,
                size: 0.01,
                sizeAttenuation: true
              });
              break;
            case 'normals':
              mesh.material = new THREE.MeshNormalMaterial();
              break;
            case 'depth':
              mesh.material = new THREE.MeshDepthMaterial();
              break;
            case 'solid':
              mesh.material = new THREE.MeshStandardMaterial({
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
  }, [gltf, displayMode]);

  if (!gltf) {
    return (
      <Html center>
        <div className="text-white bg-black/50 p-2 rounded">
          <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
          Loading model...
        </div>
      </Html>
    );
  }

  return (
    <primitive 
      ref={meshRef} 
      object={gltf.scene} 
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
    />
  );
}
