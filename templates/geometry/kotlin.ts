import { formatArrayData } from "@/lib/functions/formatArrayData";

export function KotlinGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
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
}
