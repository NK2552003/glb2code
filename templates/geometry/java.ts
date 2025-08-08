import { formatArrayData } from "@/lib/functions/formatArrayData";

export function JavaGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
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
}
