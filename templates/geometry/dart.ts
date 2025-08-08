import { formatArrayData } from "@/lib/functions/formatArrayData";

export function DartGeometry(
  meshName,
  isLargeGeometry,
  normals,
  uvs,
  indices,
  positions,
  languageId
) {
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
        ${
          normals
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
        ${
          normals
            ? `// Normal buffer
        glBufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW);
        glVertexAttribPointer(1, 3, GL_FLOAT, false, 3 * 4, 0);
        glEnableVertexAttribArray(1);`
            : ""
        }
        ${
          uvs
            ? `// UV buffer
        glBufferData(GL_ARRAY_BUFFER, uvs, GL_STATIC_DRAW);
        glVertexAttribPointer(2, 2, GL_FLOAT, false, 2 * 4, 0);
        glEnableVertexAttribArray(2);`
            : ""
        }
        ${
          indices
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
        ${
          indices
            ? "glDrawElements(GL_TRIANGLES, vertexCount, GL_UNSIGNED_INT, 0);"
            : "glDrawArrays(GL_TRIANGLES, 0, vertexCount);"
        }
        glBindVertexArray(0);
      }
    }
    `;
}
