import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import type {
  MeshData,
  MaterialData,
  ProjectStructure,
  GeometryData,
} from "@/app/types/glb-convertor";

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
    typeDeclaration: (name: string) => `type ${name} = {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) => `${key}: ${value},`,
    array: (items: string[]) => `[${items.join(", ")}]`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: () => "",
    typeEnd: "",
    objectProperty: (key: string, value: string) => `${key}: ${value},`,
    array: (items: string[]) => `[${items.join(", ")}]`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: () => "",
    typeEnd: "",
    objectProperty: (key: string, value: string) => `    ${key} = ${value}`,
    array: (items: string[]) => `[${items.join(", ")}]`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `public class ${name} {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) =>
      `    public ${value} ${key};`,
    array: (items: string[]) =>
      `new ArrayList<>() {{ ${items
        .map((item) => `add(${item})`)
        .join("; ")}; }}`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `public class ${name} {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) =>
      `    public ${value} ${key} { get; set; }`,
    array: (items: string[]) => `new List<object> { ${items.join(", ")} }`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `class ${name} { public:`,
    typeEnd: "};",
    objectProperty: (key: string, value: string) => `    ${value} ${key};`,
    array: (items: string[]) => `{${items.join(", ")}}`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `type ${name} struct {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) =>
      `    ${key} ${value} \`json:"${key.toLowerCase()}"\``,
    array: (items: string[]) => `[]interface{}{${items.join(", ")}}`,
    stringLiteral: (value: string) => `"${value.replace(/"/g, '\\"')}"`,
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
    typeDeclaration: (name: string) => `pub struct ${name} {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) => `    pub ${key}: ${value},`,
    array: (items: string[]) => `vec![${items.join(", ")}]`,
    stringLiteral: (value: string) => `"${value.replace(/"/g, '\\"')}"`,
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
    typeDeclaration: (name: string) => `class ${name} {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) => `    var ${key}: ${value}`,
    array: (items: string[]) => `[${items.join(", ")}]`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `class ${name} {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) =>
      `    var ${key}: ${value}? = null`,
    array: (items: string[]) => `listOf(${items.join(", ")})`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `class ${name}`,
    typeEnd: "end",
    objectProperty: (key: string, value: string) => `  attr_accessor :${key}`,
    array: (items: string[]) => `[${items.join(", ")}]`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `class ${name} {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) => `    private $${key};`,
    array: (items: string[]) => `array(${items.join(", ")})`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `case class ${name}(`,
    typeEnd: ")",
    objectProperty: (key: string, value: string) => `${key}: ${value},`,
    array: (items: string[]) => `Seq(${items.join(", ")})`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `class ${name} {`,
    typeEnd: "}",
    objectProperty: (key: string, value: string) => `  ${value} ${key};`,
    array: (items: string[]) => `[${items.join(", ")}]`,
    stringLiteral: (value: string) => `"${value}"`,
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
    typeDeclaration: (name: string) => `setClass("${name}", slots = list(`,
    typeEnd: "))",
    objectProperty: (key: string, value: string) => `"${key}" = "${value}",`,
    array: (items: string[]) => `c(${items.join(", ")})`,
    stringLiteral: (value: string) => `"${value}"`,
  },
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
 * Sanitizes names to be valid identifiers
 */
function sanitizeName(name: string): string {
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
    "case",
  ];
  if (reservedKeywords.includes(safeName.toLowerCase())) {
    safeName = "_" + safeName;
  }

  return safeName;
}

/**
 * Formats array data for different languages with proper chunking for large datasets
 */
function formatArrayData(
  data: number[],
  languageId: LanguageId,
  chunkSize: number = 1000
): string {
  const lang = LANGUAGES[languageId];

  if (data.length <= chunkSize) {
    return lang.array(data.map(String));
  }

  // Handle large arrays with chunking
  switch (languageId) {
    case "typescript":
    case "javascript":
      return `new Float32Array([${data.join(", ")}])`;

    case "python":
      return `np.array([${data.join(", ")}], dtype=np.float32)`;

    case "java":
      return `new float[]{${data.join("f, ")}f}`;

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
      return lang.array(data.map(String));
  }
}

/**
 * Generates a complete project structure from a GLTF model
 * Now with separate geometry files for better component management
 */
export function generateProjectStructure(
  gltf: GLTF,
  componentName: string,
  displayMode: string = "original",
  languageId: LanguageId = "typescript"
): ProjectStructure {
  const lang = LANGUAGES[languageId];
  const meshes: MeshData[] = [];
  const materials: MaterialData[] = [];
  const geometries: GeometryData[] = [];
  let totalVertices = 0;
  let totalTriangles = 0;

  gltf.scene.traverse((object: any) => {
    if (object.isMesh) {
      const mesh = object as THREE.Mesh;
      const geometry = mesh.geometry;
      totalVertices += geometry.attributes.position.count;
      if (geometry.index) {
        totalTriangles += geometry.index.count / 3;
      } else {
        totalTriangles += geometry.attributes.position.count / 3;
      }

      const meshName = mesh.name || `Mesh_${meshes.length}`;
      const safeMeshName = sanitizeName(meshName);
      const meshComponentName = getLanguageSpecificName(
        safeMeshName,
        languageId
      );

      const geometryFile = generateGeometryFile(
        meshComponentName,
        geometry,
        languageId
      );
      geometries.push({
        name: meshComponentName,
        content: geometryFile,
        originalName: meshName,
      });

      const meshComponent = generateMeshComponent(
        meshComponentName,
        geometry,
        displayMode,
        languageId
      );
      meshes.push({
        name: meshComponentName,
        content: meshComponent,
        originalName: meshName,
      });

      const material = Array.isArray(mesh.material)
        ? mesh.material[0]
        : mesh.material;
      const materialName = material.name || `Material_${materials.length}`;
      const safeMaterialName = sanitizeName(materialName);
      const materialComponentName = getLanguageSpecificName(
        safeMaterialName,
        languageId
      );

      // Extract geometry attributes
      const hasNormals = !!geometry.attributes.normal;
      const hasUvs = !!geometry.attributes.uv;

      // Only add the material if it doesn't already exist
      if (!materials.some((m) => m.name === materialComponentName)) {
        const materialComponent = generateMaterialComponent(
          materialComponentName,
          material,
          displayMode,
          languageId,
          hasNormals,
          hasUvs
        );

        materials.push({
          name: materialComponentName,
          content: materialComponent,
          originalName: materialName,
        });
      }
    }
  });

  const componentComponentName = getLanguageSpecificName(
    sanitizeName(componentName),
    languageId
  );
  const indexContent = generateIndexComponent(
    componentComponentName,
    meshes,
    materials,
    displayMode,
    languageId
  );
  const examplePageContent = generateExamplePage(
    componentComponentName,
    languageId
  );

  return {
    componentName: componentComponentName,
    indexContent,
    examplePageContent,
    meshes,
    geometries,
    materials,
    totalVertices,
    totalTriangles,
  };
}

/**
 * Generates a separate geometry file for Three.js
 * Creates a reusable geometry object that can be imported by components
 */
function generateGeometryFile(
  meshName: string,
  geometry: THREE.BufferGeometry,
  languageId: LanguageId
): string {
  const positions = Array.from(geometry.attributes.position.array);
  const normals = geometry.attributes.normal
    ? Array.from(geometry.attributes.normal.array)
    : null;
  const uvs = geometry.attributes.uv
    ? Array.from(geometry.attributes.uv.array)
    : null;
  const indices = geometry.index ? Array.from(geometry.index.array) : null;

  const isLargeGeometry = positions.length > 100000;

  switch (languageId) {
    case "typescript":
      return `import * as THREE from 'three';

// ${meshName} geometry definition
export const ${meshName}Geometry = (() => {
  const geometry = new THREE.BufferGeometry();
  
  ${isLargeGeometry
          ? `// Large geometry - using chunked approach
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
  
  ${normals
            ? `const normalChunks = createGeometryChunk(${JSON.stringify(
              normals
            )}, 3);
  const normals = new Float32Array(normalChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));`
            : ""
          }
  
  ${uvs
            ? `const uvChunks = createGeometryChunk(${JSON.stringify(uvs)}, 2);
  const uvs = new Float32Array(uvChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));`
            : ""
          }
  
  ${indices
            ? `const indexChunks = createGeometryChunk(${JSON.stringify(indices)}, 1);
  const indices = new Uint16Array(indexChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));`
            : ""
          }`
          : `// Position data
  const positions = ${formatArrayData(positions, languageId)};
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  ${normals
            ? `// Normal data
  const normals = ${formatArrayData(normals, languageId)};
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));`
            : ""
          }
  
  ${uvs
            ? `// UV data
  const uvs = ${formatArrayData(uvs, languageId)};
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));`
            : ""
          }
  
  ${indices
            ? `// Index data
  const indices = new Uint16Array(${JSON.stringify(indices)});
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));`
            : ""
          }`
        }

  geometry.computeVertexNormals();
  return geometry;
})();
`;
    case "javascript":
      return `import * as THREE from 'three';
    // ${meshName} geometry definition
    export const ${meshName}Geometry = (() => {
      const geometry = new THREE.BufferGeometry();
      // Position data
      const positions = ${formatArrayData(positions, languageId)};
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      ${normals
          ? `// Normal data
      const normals = ${formatArrayData(normals, languageId)};
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));`
          : ""
        }
      ${uvs
          ? `// UV data
      const uvs = ${formatArrayData(uvs, languageId)};
      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));`
          : ""
        }
      ${indices
          ? `// Index data
      const indices = new Uint16Array(${JSON.stringify(indices)});
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));`
          : ""
        }
      geometry.computeVertexNormals();
      return geometry;
    })();
    `;
    case "python":
      return `import numpy as np
import moderngl
from typing import Optional

class ${meshName}Geometry:
    """${meshName} geometry definition for ModernGL"""
    
    def __init__(self):
        # Position data
        self.positions = ${formatArrayData(positions, languageId)}
        ${normals
          ? `# Normal data
        self.normals = ${formatArrayData(normals, languageId)}`
          : "self.normals = None"
        }
        ${uvs
          ? `# UV data
        self.uvs = ${formatArrayData(uvs, languageId)}`
          : "self.uvs = None"
        }
        ${indices
          ? `# Index data
        self.indices = np.array([${indices.join(", ")}], dtype=np.uint32)`
          : "self.indices = None"
        }
    
    def create_vao(self, ctx: moderngl.Context, program: moderngl.Program) -> moderngl.VertexArray:
        """Create vertex array object for rendering"""
        vbo_positions = ctx.buffer(self.positions.tobytes())
        
        vao_content = [(vbo_positions, '3f', 'in_position')]
        
        ${normals
          ? `if self.normals is not None:
            vbo_normals = ctx.buffer(self.normals.tobytes())
            vao_content.append((vbo_normals, '3f', 'in_normal'))`
          : ""
        }
        
        ${uvs
          ? `if self.uvs is not None:
            vbo_uvs = ctx.buffer(self.uvs.tobytes())
            vao_content.append((vbo_uvs, '2f', 'in_uv'))`
          : ""
        }
        
        ${indices
          ? `if self.indices is not None:
            ibo = ctx.buffer(self.indices.tobytes())
            return ctx.vertex_array(program, vao_content, index_buffer=ibo)
        else:
            return ctx.vertex_array(program, vao_content)`
          : "return ctx.vertex_array(program, vao_content)"
        }
`;

    case "java":
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
        float[] positions = ${formatArrayData(positions, languageId)};
        ${normals
          ? `float[] normals = ${formatArrayData(normals || [], languageId)};`
          : ""
        }
        ${uvs ? `float[] uvs = ${formatArrayData(uvs || [], languageId)};` : ""}
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
        
        ${normals
          ? `// Normal buffer
        FloatBuffer normalBuffer = BufferUtils.createFloatBuffer(normals.length);
        normalBuffer.put(normals).flip();
        glBufferData(GL_ARRAY_BUFFER, normalBuffer, GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * Float.BYTES, 0);
        glEnableVertexAttribArray(1);`
          : ""
        }
        
        ${uvs
          ? `// UV buffer
        FloatBuffer uvBuffer = BufferUtils.createFloatBuffer(uvs.length);
        uvBuffer.put(uvs).flip();
        glBufferData(GL_ARRAY_BUFFER, uvBuffer, GL_STATIC_DRAW);
        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * Float.BYTES, 0);
        glEnableVertexAttribArray(2);`
          : ""
        }
        
        ${indices
          ? `// Element buffer
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
        IntBuffer indexBuffer = BufferUtils.createIntBuffer(indices.length);
        indexBuffer.put(indices).flip();
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indexBuffer, GL_STATIC_DRAW);
        vertexCount = indices.length;`
          : `vertexCount = positions.length / 3;`
        }
        
        glBindVertexArray(0);
    }
    
    public void render() {
        glBindVertexArray(vao);
        ${indices
          ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0);"
          : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);"
        }
        glBindVertexArray(0);
    }
    
    public void cleanup() {
        glDeleteVertexArrays(vao);
        glDeleteBuffers(vbo);
        ${indices ? "glDeleteBuffers(ebo);" : ""}
    }
}
`;

    case "csharp":
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
        float[] positions = ${formatArrayData(positions, languageId)};
        ${normals
          ? `float[] normals = ${formatArrayData(normals || [], languageId)};`
          : ""
        }
        ${uvs ? `float[] uvs = ${formatArrayData(uvs || [], languageId)};` : ""}
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
        
        ${normals
          ? `// Normal buffer
        GL.BufferData(BufferTarget.ArrayBuffer, normals.Length * sizeof(float), normals, BufferUsageHint.StaticDraw);
        GL.VertexAttribPointer(1, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);
        GL.EnableVertexAttribArray(1);`
          : ""
        }
        
        ${uvs
          ? `// UV buffer
        GL.BufferData(BufferTarget.ArrayBuffer, uvs.Length * sizeof(float), uvs, BufferUsageHint.StaticDraw);
        GL.VertexAttribPointer(2, 2, VertexAttribPointerType.Float, false, 2 * sizeof(float), 0);
        GL.EnableVertexAttribArray(2);`
          : ""
        }
        
        ${indices
          ? `// Element buffer
        GL.BindBuffer(BufferTarget.ElementArrayBuffer, _ebo);
        GL.BufferData(BufferTarget.ElementArrayBuffer, indices.Length * sizeof(uint), indices, BufferUsageHint.StaticDraw);
        _vertexCount = indices.Length;`
          : `_vertexCount = positions.Length / 3;`
        }
        
        GL.BindVertexArray(0);
    }
    
    public void Render()
    {
        GL.BindVertexArray(_vao);
        ${indices
          ? "GL.DrawElements(PrimitiveType.Triangles, _vertexCount, DrawElementsType.UnsignedInt, 0);"
          : "GL.DrawArrays(PrimitiveType.Triangles, 0, _vertexCount);"
        }
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

    case "cpp":
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
        std::vector<float> positions = ${formatArrayData(
        positions,
        languageId
      )};
        ${normals
          ? `std::vector<float> normals = ${formatArrayData(
            normals || [],
            languageId
          )};`
          : ""
        }
        ${uvs
          ? `std::vector<float> uvs = ${formatArrayData(
            uvs || [],
            languageId
          )};`
          : ""
        }
        ${indices
          ? `std::vector<unsigned int> indices = {${indices.join(", ")}};`
          : ""
        }
        
        glGenVertexArrays(1, &VAO);
        glGenBuffers(1, &VBO);
        ${indices ? "glGenBuffers(1, &EBO);" : ""}
        
        glBindVertexArray(VAO);
        
        // Position buffer
        glBindBuffer(GL_ARRAY_BUFFER, VBO);
        glBufferData(GL_ARRAY_BUFFER, positions.size() * sizeof(float), positions.data(), GL_STATIC_DRAW);
        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(0);
        
        ${normals
          ? `// Normal buffer
        glBufferData(GL_ARRAY_BUFFER, normals.size() * sizeof(float), normals.data(), GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(1);`
          : ""
        }
        
        ${uvs
          ? `// UV buffer
        glBufferData(GL_ARRAY_BUFFER, uvs.size() * sizeof(float), uvs.data(), GL_STATIC_DRAW);
        glVertexAttribPointer(2, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(2);`
          : ""
        }
        
        ${indices
          ? `// Element buffer
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), indices.data(), GL_STATIC_DRAW);
        indexCount = indices.size();`
          : `vertexCount = positions.size() / 3;`
        }
        
        glBindVertexArray(0);
    }
    
public:
    void render() {
        glBindVertexArray(VAO);
        ${indices
          ? "glDrawElements(GL_TRIANGLES, indexCount, GL_UNSIGNED_INT, 0);"
          : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);"
        }
        glBindVertexArray(0);
    }
    
    void cleanup() {
        glDeleteVertexArrays(1, &VAO);
        glDeleteBuffers(1, &VBO);
        ${indices ? "glDeleteBuffers(1, &EBO);" : ""}
    }
};
`;

    case "go":
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
    positions := ${formatArrayData(positions, languageId)}
    ${normals ? `normals := ${formatArrayData(normals || [], languageId)}` : ""}
    ${uvs ? `uvs := ${formatArrayData(uvs || [], languageId)}` : ""}
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
    
    ${normals
          ? `// Normal buffer
    gl.BufferData(gl.ARRAY_BUFFER, len(normals)*4, gl.Ptr(normals), gl.STATIC_DRAW)
    gl.VertexAttribPointer(1, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(1)`
          : ""
        }
    
    ${uvs
          ? `// UV buffer
    gl.BufferData(gl.ARRAY_BUFFER, len(uvs)*4, gl.Ptr(uvs), gl.STATIC_DRAW)
    gl.VertexAttribPointer(2, 2, gl.FLOAT, false, 2*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(2)`
          : ""
        }
    
    ${indices
          ? `// Element buffer
    gl.BindBuffer(gl.ELEMENT_ARRAY_BUFFER, g.ebo)
    gl.BufferData(gl.ELEMENT_ARRAY_BUFFER, len(indices)*4, gl.Ptr(indices), gl.STATIC_DRAW)
    g.indexCount = int32(len(indices))`
          : `g.vertexCount = int32(len(positions) / 3)`
        }
    
    gl.BindVertexArray(0)
}

// Render renders the geometry
func (g *${meshName}Geometry) Render() {
    gl.BindVertexArray(g.vao)
    ${indices
          ? "gl.DrawElements(gl.TRIANGLES, g.indexCount, gl.UNSIGNED_INT, gl.PtrOffset(0))"
          : "gl.DrawArrays(gl.TRIANGLES, 0, g.vertexCount)"
        }
    gl.BindVertexArray(0)
}

// Cleanup cleans up OpenGL resources
func (g *${meshName}Geometry) Cleanup() {
    gl.DeleteVertexArrays(1, &g.vao)
    gl.DeleteBuffers(1, &g.vbo)
    ${indices ? "gl.DeleteBuffers(1, &g.ebo)" : ""}
}
`;

    case "rust":
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
        ${normals
          ? `let normals: Vec<f32> = vec![${(normals || []).join(", ")}];`
          : ""
        }
        ${uvs ? `let uvs: Vec<f32> = vec![${(uvs || []).join(", ")}];` : ""}
        ${indices ? `let indices: Vec<u16> = vec![${indices.join(", ")}];` : ""}
        
        // Create vertex data
        let mut vertex_data = Vec::new();
        for i in (0..positions.len()).step_by(3) {
            vertex_data.extend_from_slice(&positions[i..i+3]);
            ${normals
          ? `if i < normals.len() - 2 {
                vertex_data.extend_from_slice(&normals[i..i+3]);
            }`
          : ""
        }
            ${uvs
          ? `let uv_index = (i / 3) * 2;
            if uv_index < uvs.len() - 1 {
                vertex_data.extend_from_slice(&uvs[uv_index..uv_index+2]);
            }`
          : ""
        }
        }
        
        let vertex_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("${meshName} Vertex Buffer"),
            contents: bytemuck::cast_slice(&vertex_data),
            usage: wgpu::BufferUsages::VERTEX,
        });
        
        ${indices
          ? `let index_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("${meshName} Index Buffer"),
            contents: bytemuck::cast_slice(&indices),
            usage: wgpu::BufferUsages::INDEX,
        });
        
        Self {
            vertex_buffer,
            index_buffer,
            num_indices: indices.len() as u32,
        }`
          : `Self {
            vertex_buffer,
            num_vertices: (positions.len() / 3) as u32,
        }`
        }
    }
    
    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
        render_pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));
        ${indices
          ? `render_pass.set_index_buffer(self.index_buffer.slice(..), wgpu::IndexFormat::Uint16);
        render_pass.draw_indexed(0..self.num_indices, 0, 0..1);`
          : "render_pass.draw(0..self.num_vertices, 0..1);"
        }
    }
}
`;

    case "swift":
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
        ${normals
          ? `let normals: [Float] = [${(normals || []).join(", ")}]`
          : ""
        }
        ${uvs ? `let uvs: [Float] = [${(uvs || []).join(", ")}]` : ""}
        ${indices ? `let indices: [UInt16] = [${indices.join(", ")}]` : ""}
        
        // Create vertex data
        var vertexData: [Float] = []
        for i in stride(from: 0, to: positions.count, by: 3) {
            vertexData.append(contentsOf: [positions[i], positions[i+1], positions[i+2]])
            ${normals
          ? `if i < normals.count - 2 {
                vertexData.append(contentsOf: [normals[i], normals[i+1], normals[i+2]])
            }`
          : ""
        }
            ${uvs
          ? `let uvIndex = (i / 3) * 2
            if uvIndex < uvs.count - 1 {
                vertexData.append(contentsOf: [uvs[uvIndex], uvs[uvIndex+1]])
            }`
          : ""
        }
        }
        
        vertexBuffer = device.makeBuffer(
            bytes: vertexData,
            length: vertexData.count * MemoryLayout<Float>.size,
            options: []
        )
        
        ${indices
          ? `indexBuffer = device.makeBuffer(
            bytes: indices,
            length: indices.count * MemoryLayout<UInt16>.size,
            options: []
        )
        indexCount = indices.count`
          : `vertexCount = positions.count / 3`
        }
    }
    
    func render(renderEncoder: MTLRenderCommandEncoder) {
        guard let vertexBuffer = vertexBuffer else { return }
        
        renderEncoder.setVertexBuffer(vertexBuffer, offset: 0, index: 0)
        
        ${indices
          ? `guard let indexBuffer = indexBuffer else { return }
        renderEncoder.drawIndexedPrimitives(
            type: .triangle,
            indexCount: indexCount,
            indexType: .uint16,
            indexBuffer: indexBuffer,
            indexBufferOffset: 0
        )`
          : `renderEncoder.drawPrimitives(
            type: .triangle,
            vertexStart: 0,
            vertexCount: vertexCount
        )`
        }
    }
}
`;
    case "php":
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
            $positions = ${formatArrayData(positions, languageId)};
            ${normals
          ? `$normals = ${formatArrayData(normals || [], languageId)};`
          : ""
        }
            ${uvs ? `$uvs = ${formatArrayData(uvs || [], languageId)};` : ""}
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
            ${normals
          ? `// Normal buffer
            glfwBufferData(GLFW_ARRAY_BUFFER, count($normals) * 4, $normals, GLFW_STATIC_DRAW);
            glfwVertexAttribPointer(1, 3, GLFW_FLOAT, false, 3 * 4, 0);
            glfwEnableVertexAttribArray(1);`
          : ""
        }
            ${uvs
          ? `// UV buffer
            glfwBufferData(GLFW_ARRAY_BUFFER, count($uvs) * 4, $uvs, GLFW_STATIC_DRAW);
            glfwVertexAttribPointer(2, 2, GLFW_FLOAT, false, 2 * 4, 0);
            glfwEnableVertexAttribArray(2);`
          : ""
        }
            ${indices
          ? `// Element buffer
            glfwBindBuffer(GLFW_ELEMENT_ARRAY_BUFFER, $this->ebo);
            glfwBufferData(GLFW_ELEMENT_ARRAY_BUFFER, count($indices) * 4, $indices, GLFW_STATIC_DRAW);
            $this->vertexCount = count($indices);`
          : `$this->vertexCount = count($positions) / 3;`
        }
            glfwBindVertexArray(0);
        }
        public function render() {
            glfwBindVertexArray($this->vao);
            ${indices
          ? "glfwDrawElements(GLFW_TRIANGLES, $this->vertexCount, GLFW_UNSIGNED_INT, 0);"
          : "glfwDrawArrays(GLFW_TRIANGLES, 0, $this->vertexCount);"
        }
            glfwBindVertexArray(0);
        }
    }
    `;
    case "ruby":
      return `# ${meshName} geometry definition for Ruby OpenGL
    class ${meshName}Geometry
      def initialize
        setup_buffers
      end

      private

      def setup_buffers
        # Position data
        positions = ${formatArrayData(positions, languageId)}
        ${normals
          ? `normals = ${formatArrayData(normals || [], languageId)}`
          : ""
        }
        ${uvs ? `uvs = ${formatArrayData(uvs || [], languageId)}` : ""}
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

        ${normals
          ? `# Normal buffer
        glBufferData(GL::ARRAY_BUFFER, normals.pack('F*'), GL::STATIC_DRAW)
        glVertexAttribPointer(1, 3, GL::FLOAT, false, 3 * 4, 0)
        glEnableVertexAttribArray(1)`
          : ""
        }

        ${uvs
          ? `# UV buffer
        glBufferData(GL::ARRAY_BUFFER, uvs.pack('F*'), GL::STATIC_DRAW)
        glVertexAttribPointer(2, 2, GL::FLOAT, false, 2 * 4, 0)
        glEnableVertexAttribArray(2)`
          : ""
        }

        ${indices
          ? `# Element buffer
        glBindBuffer(GL::ELEMENT_ARRAY_BUFFER, @ebo)
        glBufferData(GL::ELEMENT_ARRAY_BUFFER, indices.pack('I*'), GL::STATIC_DRAW)
        @vertex_count = indices.length`
          : "@vertex_count = positions.length / 3"
        }

        glBindVertexArray(0)
      end

      public

      def render
        glBindVertexArray(@vao)
        ${indices
          ? "glDrawElements(GL::TRIANGLES, @vertex_count, GL::UNSIGNED_INT, nil)"
          : "glDrawArrays(GL::TRIANGLES, 0, @vertex_count)"
        }
        glBindVertexArray(0)
      end
    end
    `;
    case "scala":
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
        val positions = ${formatArrayData(positions, languageId)}
        ${normals
          ? `val normals = ${formatArrayData(normals || [], languageId)}`
          : ""
        }
        ${uvs ? `val uvs = ${formatArrayData(uvs || [], languageId)}` : ""}
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
        ${normals
          ? `// Normal buffer
        glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)
        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0)
        glEnableVertexAttribArray(1)`
          : ""
        }
        ${uvs
          ? `// UV buffer
        glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)
        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0)
        glEnableVertexAttribArray(2)`
          : ""
        }
        ${indices
          ? `// Element buffer
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)
        vertexCount = indices.length`
          : "vertexCount = positions.length / 3"
        }
        glBindVertexArray(0)
      }
      
      def render(): Unit = {
        glBindVertexArray(vao)
        ${indices
          ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0L)"
          : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)"
        }
        glBindVertexArray(0)
      }
    }
    `;
    case "kotlin":
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
            val positions = ${formatArrayData(positions, languageId)}
            ${normals
          ? `val normals = ${formatArrayData(normals || [], languageId)}`
          : ""
        }
            ${uvs ? `val uvs = ${formatArrayData(uvs || [], languageId)}` : ""}
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
            ${normals
          ? `// Normal buffer
            glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)
            glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0)
            glEnableVertexAttribArray(1)`
          : ""
        }
            ${uvs
          ? `// UV buffer
            glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)
            glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0)
            glEnableVertexAttribArray(2)`
          : ""
        }
            ${indices
          ? `// Element buffer
            glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)
            glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)
            vertexCount = indices.size`
          : "vertexCount = positions.size / 3"
        }
            glBindVertexArray(0)
        }

        fun render() {
            glBindVertexArray(vao)
            ${indices
          ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0L)"
          : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)"
        }
            glBindVertexArray(0)
        }
    }
    `;
    case "dart":
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
        final positions = ${formatArrayData(positions, languageId)};
        ${normals
          ? `final normals = ${formatArrayData(normals || [], languageId)};`
          : ""
        }
        ${uvs ? `final uvs = ${formatArrayData(uvs || [], languageId)};` : ""}
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
        ${normals
          ? `// Normal buffer
        glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0);
        glEnableVertexAttribArray(1);`
          : ""
        }
        ${uvs
          ? `// UV buffer
        glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW);
        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0);
        glEnableVertexAttribArray(2);`
          : ""
        }
        ${indices
          ? `// Element buffer
        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW);
        vertexCount = indices.length;`
          : "vertexCount = positions.length ~/ 3;"
        }
        glBindVertexArray(0);
      }

      void render() {
        glBindVertexArray(vao);
        ${indices
          ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0);"
          : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);"
        }
        glBindVertexArray(0);
      }
    }
    `;
    case "r":
      return `#' ${meshName} geometry definition for R OpenGL
    #' @export
    ${meshName}Geometry <- function() {
      # Position data
      positions <- ${formatArrayData(positions, languageId)}
      ${normals
          ? `normals <- ${formatArrayData(normals || [], languageId)}`
          : ""
        }
      ${uvs ? `uvs <- ${formatArrayData(uvs || [], languageId)}` : ""}
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
      ${normals
          ? `# Normal buffer
      glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW)
      glVertexAttribPointer(1, 3, GL_FLOAT, FALSE, 3 * 4, 0)
      glEnableVertexAttribArray(1)`
          : ""
        }
      ${uvs
          ? `# UV buffer
      glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW)
      glVertexAttribPointer(2, 2, GL_FLOAT, FALSE, 2 * 4, 0)
      glEnableVertexAttribArray(2)`
          : ""
        }
      ${indices
          ? `# Element buffer
      glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo)
      glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW)
      vertexCount <- length(indices)`
          : "vertexCount <- length(positions) / 3"
        }
      glBindVertexArray(0)
      
      # Return geometry object
      list(
        vao = vao,
        render = function() {
          glBindVertexArray(vao)
          ${indices
          ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0)"
          : "glDrawArrays(GL_TRIANGLES, 0, vertexCount)"
        }
          glBindVertexArray(0)
        }
      )
    }
    `;
    default:
      // Fallback to TypeScript for unsupported languages
      return generateGeometryFile(meshName, geometry, "typescript");
  }
}

/**
 * Generates a mesh component that imports geometry from a separate file
 * Component name starts with capital letter as required by React
 */
function generateMeshComponent(
  meshName: string,
  _geometry: THREE.BufferGeometry,
  displayMode: string,
  languageId: LanguageId
): string {
  switch (languageId) {
    case "typescript":
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
    case "javascript":
      return `import React from 'react';
    import { ${meshName}Geometry } from '../geometries/${meshName}Geometry';
    /**
     * ${meshName} component
     */
    export default function ${meshName}(props) {
      return <mesh geometry={${meshName}Geometry} {...props} />;
    }
    `;
    case "python":
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
    case "java":
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
    case "cpp":
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
    case "csharp":
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
    case "php":
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
    case "ruby":
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
    case "scala":
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
    case "kotlin":
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
    case "dart":
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
    case "r":
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
    case "go":
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
    case "swift":
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
    case "rust":
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
    default:
      // Fallback to TypeScript for unsupported languages
      return generateMeshComponent(
        meshName,
        _geometry,
        displayMode,
        "typescript"
      );
  }
}

/**
 * Generates a material component based on display mode
 * Component name starts with capital letter as required by React
 */
function generateMaterialComponent(
  materialName: string,
  material: THREE.Material,
  displayMode: string,
  languageId: LanguageId,
  hasNormals: boolean = false,
  hasUvs: boolean = false
): string {
  let materialType = "MeshStandardMaterial";
  const properties: string[] = [];

  // Determine material type
  if (material instanceof THREE.MeshBasicMaterial)
    materialType = "MeshBasicMaterial";
  else if (material instanceof THREE.MeshPhongMaterial)
    materialType = "MeshPhongMaterial";
  else if (material instanceof THREE.MeshLambertMaterial)
    materialType = "MeshLambertMaterial";
  else if (material instanceof THREE.MeshNormalMaterial)
    materialType = "MeshNormalMaterial";
  else if (material instanceof THREE.MeshDepthMaterial)
    materialType = "MeshDepthMaterial";
  else if (material instanceof THREE.MeshMatcapMaterial)
    materialType = "MeshMatcapMaterial";
  else if (material instanceof THREE.MeshToonMaterial)
    materialType = "MeshToonMaterial";
  else if (material instanceof THREE.MeshPhysicalMaterial)
    materialType = "MeshPhysicalMaterial";

  // Configure properties based on display mode
  switch (displayMode) {
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
     if ('color' in material && material.color instanceof THREE.Color) {
        const color = material.color as THREE.Color;
        properties.push(
          `color: new THREE.Color(${color.r}, ${color.g}, ${color.b})`
        );
      }
      if ("roughness" in material)
        properties.push(`roughness: ${(material as any).roughness}`);
      if ("metalness" in material)
        properties.push(`metalness: ${(material as any).metalness}`);
      if ("opacity" in material)
        properties.push(`opacity: ${(material as any).opacity}`);
      if ("transparent" in material)
        properties.push(`transparent: ${(material as any).transparent}`);
      break;
  }

  switch (languageId) {
    case "typescript":
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
    case "javascript":
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
    case "python":
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
            ${displayMode === "wireframe"
          ? "fragColor = vec4(0.0, 0.0, 0.0, 0.8);"
          : displayMode === "normals"
            ? "fragColor = vec4(normalize(v_normal) * 0.5 + 0.5, 1.0);"
            : displayMode === "points"
              ? "fragColor = vec4(0.0, 1.0, 0.0, 1.0);"
              : "fragColor = vec4(0.5, 0.5, 0.5, 1.0);"
        }
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
    case "php":
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
            ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `glfw${key.charAt(0).toUpperCase() + key.slice(1)
              }(${value});`;
          })
          .join("\n        ")}
        }
    }
    `;
    case "ruby":
      return `# ${materialName} material component for Ruby OpenGL
    class ${materialName}
      def initialize
        # Material setup
      end
      def use
        # Apply material properties
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `gl${key.charAt(0).toUpperCase() + key.slice(1)}(${value})`;
          })
          .join("\n    ")}
      end
    end
    `;
    case "scala":
      return `/**
    * ${materialName} material component for LWJGL in Scala
    */
    class ${materialName} {
      ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `private val ${key} = ${value}`;
          })
          .join("\n  ")}
      
      def use(): Unit = {
        // Apply material properties
        ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n    ")}
      }
    }
    `;
    case "kotlin":
      return `/**
    * ${materialName} material component for LWJGL in Kotlin
    */
    class ${materialName} {
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `private val ${key} = ${value}`;
          })
          .join("\n    ")}

        fun use() {
            // Apply material properties
            ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n        ")}
        }
    }
    `;
    case "dart":
      return `/**
    * ${materialName} material component for OpenGL in Dart
    */
    class ${materialName} implements Material {
      ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return "final $key = $value;";
          })
          .join("\n  ")}

      @override
      void use() {
        // Apply material properties
        ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return "// Set $key property";
          })
          .join("\n    ")}
      }
    }
    `;
    case "r":
      return `#' ${materialName} material component for R OpenGL
    #' @export
    ${materialName} <- function() {
      list(
        use = function() {
          # Apply material properties
          ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `# Set ${key} to ${value}`;
          })
          .join("\n      ")}
        }
      )
    }
    `;
    case "cpp":
      return `#pragma once
    #include <GL/glew.h>

    /**
     * ${materialName} material component for OpenGL
     */
    class ${materialName} {
    private:
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `float ${key};`;
          })
          .join("\n    ")}
    public:
        ${materialName}() {
            ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `${key} = ${value};`;
          })
          .join("\n        ")}
        }
        
        void use() {
            // Apply material properties
            ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n        ")}
        }
    };
    `;
    case "go":
      return `package materials

    import "github.com/go-gl/gl/v4.1-core/gl"

    // ${materialName} represents a material with properties
    type ${materialName} struct {
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `${capitalize(key)} float32`;
          })
          .join("\n    ")}
    }

    // New${materialName} creates a new material instance
    func New${materialName}() *${materialName} {
        return &${materialName}{
            ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `${capitalize(key)}: ${value},`;
          })
          .join("\n        ")}
        }
    }

    // Use activates the material for rendering
    func (m *${materialName}) Use() {
        // Apply material properties
        ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n    ")}
    }
    `;
    case "rust":
      return `/// ${materialName} material component for wgpu
    pub struct ${materialName} {
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `pub ${key}: f32,`;
          })
          .join("\n    ")}
    }

    impl ${materialName} {
        pub fn new() -> Self {
            Self {
                ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `${key}: ${value},`;
          })
          .join("\n            ")}
            }
        }
        
        pub fn bind<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
            // Apply material properties
            ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n        ")}
        }
    }
    `;
    case "swift":
      return `import Metal

    /// ${materialName} material component for Metal
    class ${materialName} {
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `private var ${key}: Float = ${value}`;
          })
          .join("\n    ")}
        
        init() {
            // Material initialization
        }
        
        func use(renderEncoder: MTLRenderCommandEncoder) {
            // Apply material properties
            ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n        ")}
        }
    }
    `;
    default:
      // Fallback to TypeScript for unsupported languages
      return generateMaterialComponent(
        materialName,
        material,
        displayMode,
        "typescript",
        hasNormals,
        hasUvs
      );
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

  switch (languageId) {
    case "typescript":
      const meshImports = meshes
        .map((mesh) => `import ${mesh.name} from './meshes/${mesh.name}';`)
        .join("\n");

      const materialImports = materials
        .map(
          (material) =>
            `import ${material.name} from './materials/${material.name}';`
        )
        .join("\n");

      const meshElements = meshes
        .map((mesh, i) => {
          const material = materials[i % materials.length];
          return `      <${mesh.name} material={${material.name}()} />`;
        })
        .join("\n");

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
    case "javascript":
      const meshImportsJS = meshes
        .map((mesh) => `import ${mesh.name} from './meshes/${mesh.name}';`)
        .join("\n");
      const materialImportsJS = materials
        .map(
          (material) =>
            `import ${material.name} from './materials/${material.name}';`
        )
        .join("\n");
      const meshElementsJS = meshes
        .map((mesh, i) => {
          const material = materials[i % materials.length];
          return `      <${mesh.name} material={${material.name}()} />`;
        })
        .join("\n");
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
    case "python":
      return `"""${componentName} main component for ModernGL"""
import moderngl
import numpy as np
from typing import List, Optional
${meshes
          .map((mesh) => `from .meshes.${mesh.name} import ${mesh.name}`)
          .join("\n")}
${materials
          .map((material) => `from .materials.${material.name} import ${material.name}`)
          .join("\n")}

class ${componentName}:
    """${componentName} component for ModernGL"""
    
    def __init__(self, ctx: moderngl.Context):
        self.ctx = ctx
        self.meshes: List = []
        self._setup_meshes()
        
    def _setup_meshes(self):
        """Initialize all meshes with their materials"""
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `# Create ${mesh.name}
        ${mesh.name.toLowerCase()}_material = ${material.name}(self.ctx)
        ${mesh.name.toLowerCase()}_mesh = ${mesh.name
              }(self.ctx, ${mesh.name.toLowerCase()}_material)
        self.meshes.append(${mesh.name.toLowerCase()}_mesh)`;
          })
          .join("\n        ")}
    
    def render(self, projection_matrix: np.ndarray, view_matrix: np.ndarray, model_matrix: Optional[np.ndarray] = None):
        """Render all meshes"""
        if model_matrix is None:
            model_matrix = np.eye(4, dtype=np.float32)
            
        for mesh in self.meshes:
            mesh.render(projection_matrix, view_matrix)
`;

    case "java":
      return `/**
 * ${componentName} main component for LWJGL OpenGL
 */
${meshes.map((mesh) => `import meshes.${mesh.name};`).join("\n")}
${materials.map((material) => `import materials.${material.name};`).join("\n")}

public class ${componentName} {
    ${meshes
          .map((mesh, i) => `private ${mesh.name} ${mesh.name.toLowerCase()};`)
          .join("\n    ")}
    
    public ${componentName}() {
        setupMeshes();
    }
    
    private void setupMeshes() {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name
              }());`;
          })
          .join("\n        ")}
    }
    
    public void render() {
        ${meshes
          .map((mesh) => `${mesh.name.toLowerCase()}.render();`)
          .join("\n        ")}
    }
    
    public void cleanup() {
        ${meshes
          .map((mesh) => `${mesh.name.toLowerCase()}.cleanup();`)
          .join("\n        ")}
    }
}
`;

    case "csharp":
      return `using System;
using System.Collections.Generic;
${meshes.map((mesh) => `using Meshes;`).join("\n")}
${materials.map((material) => `using Materials;`).join("\n")}

/// <summary>
/// ${componentName} main component for OpenTK
/// </summary>
public class ${componentName} : IDisposable
{
    ${meshes
          .map((mesh, i) => `private ${mesh.name} _${mesh.name.toLowerCase()};`)
          .join("\n    ")}
    
    public ${componentName}()
    {
        SetupMeshes();
    }
    
    private void SetupMeshes()
    {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `_${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name
              }());`;
          })
          .join("\n        ")}
    }
    
    public void Render()
    {
        ${meshes
          .map((mesh) => `_${mesh.name.toLowerCase()}.Render();`)
          .join("\n        ")}
    }
    
    public void Dispose()
    {
        ${meshes
          .map((mesh) => `_${mesh.name.toLowerCase()}?.Dispose();`)
          .join("\n        ")}
    }
}
`;

    case "cpp":
      return `#pragma once
#include <vector>
#include <memory>
${meshes.map((mesh) => `#include "meshes/${mesh.name}.h"`).join("\n")}
${materials
          .map((material) => `#include "materials/${material.name}.h"`)
          .join("\n")}

/**
 * ${componentName} main component for OpenGL
 */
class ${componentName} {
private:
    ${meshes
          .map(
            (mesh, i) => `std::unique_ptr<${mesh.name}> ${mesh.name.toLowerCase()};`
          )
          .join("\n    ")}
    
public:
    ${componentName}() {
        setupMeshes();
    }
    
    ~${componentName}() {
        cleanup();
    }
    
private:
    void setupMeshes() {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()} = std::make_unique<${mesh.name
              }>(std::make_unique<${material.name}>());`;
          })
          .join("\n        ")}
    }
    
public:
    void render() {
        ${meshes
          .map(
            (mesh) =>
              `if (${mesh.name.toLowerCase()}) ${mesh.name.toLowerCase()}->render();`
          )
          .join("\n        ")}
    }
    
    void cleanup() {
        ${meshes
          .map((mesh) => `${mesh.name.toLowerCase()}.reset();`)
          .join("\n        ")}
    }
};
`;

    case "go":
      return `package main

${meshes.map((mesh) => `import "./meshes"`).join("\n")}
${materials.map((material) => `import "./materials"`).join("\n")}

// ${componentName} represents the main 3D component
type ${componentName} struct {
    ${meshes
          .map((mesh, i) => `${mesh.name.toLowerCase()} *meshes.${mesh.name}`)
          .join("\n    ")}
}

// New${componentName} creates a new ${componentName} instance
func New${componentName}() *${componentName} {
    component := &${componentName}{}
    component.setupMeshes()
    return component
}

func (c *${componentName}) setupMeshes() {
    ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `c.${mesh.name.toLowerCase()} = meshes.New${mesh.name
              }(materials.New${material.name}())`;
          })
          .join("\n    ")}
}

// Render renders all meshes in the component
func (c *${componentName}) Render() {
    ${meshes
          .map(
            (mesh) => `if c.${mesh.name.toLowerCase()} != nil {
        c.${mesh.name.toLowerCase()}.Render()
    }`
          )
          .join("\n    ")}
}

// Cleanup cleans up all resources
func (c *${componentName}) Cleanup() {
    ${meshes
          .map(
            (mesh) => `if c.${mesh.name.toLowerCase()} != nil {
        c.${mesh.name.toLowerCase()}.Cleanup()
    }`
          )
          .join("\n    ")}
}
`;

    case "rust":
      return `${meshes
        .map(
          (mesh) =>
            `use crate::meshes::${mesh.name.toLowerCase()}::${mesh.name};`
        )
        .join("\n")}
${materials
          .map(
            (material) =>
              `use crate::materials::${material.name.toLowerCase()}::${material.name};`
          )
          .join("\n")}
use wgpu::Device;

/// ${componentName} main component for wgpu
pub struct ${componentName} {
    ${meshes
          .map((mesh, i) => `${mesh.name.toLowerCase()}: ${mesh.name},`)
          .join("\n    ")}
}

impl ${componentName} {
    pub fn new(device: &Device) -> Self {
        Self {
            ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()}: ${mesh.name}::new(device, ${material.name
              }::new(device)),`;
          })
          .join("\n            ")}
        }
    }
    
    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
        ${meshes
          .map((mesh) => `self.${mesh.name.toLowerCase()}.render(render_pass);`)
          .join("\n        ")}
    }
}
`;

    case "swift":
      return `import Metal
${meshes.map((mesh) => `import Meshes`).join("\n")}
${materials.map((material) => `import Materials`).join("\n")}

/// ${componentName} main component for Metal
class ${componentName} {
    ${meshes
          .map((mesh, i) => `private let ${mesh.name.toLowerCase()}: ${mesh.name}`)
          .join("\n    ")}
    
    init(device: MTLDevice) {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()} = ${mesh.name
              }(device: device, material: ${material.name}(device: device))`;
          })
          .join("\n        ")}
    }
    
    func render(renderEncoder: MTLRenderCommandEncoder) {
        ${meshes
          .map(
            (mesh) =>
              `${mesh.name.toLowerCase()}.render(renderEncoder: renderEncoder)`
          )
          .join("\n        ")}
    }
}
`;
    case "php":
      return `<?php
    /**
     * ${componentName} main component for PHP-GLFW
     */
    class ${componentName} {
        ${meshes
          .map((mesh, i) => `private $${mesh.name.toLowerCase()};`)
          .join("\n    ")}
        public function __construct() {
            $this->setupMeshes();
        }
        private function setupMeshes() {
            ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `$this->${mesh.name.toLowerCase()} = new ${mesh.name
              }(new ${material.name}());`;
          })
          .join("\n        ")}
        }
        public function render() {
            ${meshes
          .map((mesh) => `$this->${mesh.name.toLowerCase()}->render();`)
          .join("\n        ")}
        }
    }
    `;
    case "ruby":
      return `# ${componentName} main component for Ruby OpenGL
    class ${componentName}
      ${meshes
          .map((mesh, i) => `attr_reader :${mesh.name.toLowerCase()}`)
          .join("\n  ")}
      def initialize
        setup_meshes
      end
      private
      def setup_meshes
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return "@#{mesh.name.toLowerCase()} = #{mesh.name}.new(#{material.name}.new)";
          })
          .join("\n    ")}
      end
      public
      def render
        ${meshes
          .map((mesh) => "@#{mesh.name.toLowerCase()}.render")
          .join("\n    ")}
      end
    end
    `;
    case "scala":
      return `/**
    * ${componentName} main component for LWJGL in Scala
    */
    class ${componentName} {
      ${meshes
          .map(
            (mesh, i) =>
              `private val ${mesh.name.toLowerCase()} = new ${mesh.name}()`
          )
          .join("\n  ")}
      
      def render(): Unit = {
        ${meshes
          .map((mesh) => "${mesh.name.toLowerCase()}.render()")
          .join("\n    ")}
      }
    }
    `;
    case "kotlin":
      return `/**
      * ${componentName} main component for LWJGL in Kotlin
      */
      class ${componentName} {
          ${meshes
          .map(
            (mesh, i) =>
              `private val ${mesh.name.toLowerCase()} = ${mesh.name}()`
          )
          .join("\n    ")}

          fun render() {
              ${meshes
          .map((mesh) => "${mesh.name.toLowerCase()}.render()")
          .join("\n        ")}
          }
      }
      `;
    case "dart":
      return `/**
    * ${componentName} main component for OpenGL in Dart
    */
    class ${componentName} {
      ${meshes
          .map((mesh, i) => `final ${mesh.name} ${mesh.name.toLowerCase()};`)
          .join("\n  ")}

      ${componentName}() {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return "${mesh.name.toLowerCase()} = ${mesh.name}(material: ${material.name}());";
          })
          .join("\n    ")}
      }

      void render() {
        ${meshes
          .map((mesh) => "${mesh.name.toLowerCase()}.render();")
          .join("\n    ")}
      }
    }
    `;
    case "r":
      return `#' ${componentName} main component for R OpenGL
    #' @export
    ${componentName} <- function() {
      # Create meshes
      ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()} <- ${mesh.name}(material = ${material.name
              }())`;
          })
          .join("\n  ")}
      
      # Return component
      list(
        ${meshes
          .map(
            (mesh) => `${mesh.name.toLowerCase()} = ${mesh.name.toLowerCase()}`
          )
          .join(",\n    ")}
        render = function() {
          ${meshes
          .map((mesh) => `do.call(${mesh.name.toLowerCase()}$render, list())`)
          .join("\n      ")}
        }
      )
    }
    `;

    default:
      // Fallback to TypeScript for unsupported languages
      return generateIndexComponent(
        componentName,
        meshes,
        materials,
        displayMode,
        "typescript"
      );
  }
}

// Fix the generateExamplePage function around line 900 to ensure proper file extensions
function generateExamplePage(
  componentName: string,
  languageId: LanguageId
): string {
  const lang = LANGUAGES[languageId];

  switch (languageId) {
    case "typescript":
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
    case "javascript":
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
    case "python":
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

    case "java":
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

    case "csharp":
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
    case "php":
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
    case "ruby":
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
    case "scala":
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
    case "kotlin":
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
    case "dart":
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
    case "r":
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
    case "cpp":
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
    case "go":
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
    case "rust":
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
    case "swift":
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
    default:
      // Fallback to TypeScript for unsupported languages
      return generateExamplePage(componentName, "typescript");
  }
}

function getLanguageSpecificName(name: string, languageId: LanguageId): string {
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
    "case",
  ];
  if (reservedKeywords.includes(safeName.toLowerCase())) {
    safeName = "_" + safeName;
  }

  switch (languageId) {
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
      return safeName.replace(/(^|_)(\w)/g, (_, _1, c) => c.toUpperCase());

    case "typescript":
    case "javascript":
      // Convert to camelCase (myMaterialName)
      return (
        safeName.charAt(0).toLowerCase() +
        safeName.slice(1).replace(/(_)(\w)/g, (_, _1, c) => c.toUpperCase())
      );

    case "python":
      // Convert to CamelCase (MyMaterialName)
      return safeName.replace(/(^|_)(\w)/g, (_, _1, c) => c.toUpperCase());

    case "php":
      // For PHP, class names are typically CamelCase
      return safeName.replace(/(^|_)(\w)/g, (_, _1, c) => c.toUpperCase());

    case "r":
      // For R, function names are typically snake_case
      return safeName.toLowerCase().replace(/[^a-z0-9]/g, "_");

    default:
      // For other languages, just capitalize the first letter
      return safeName.charAt(0).toUpperCase() + safeName.slice(1);
  }
}
