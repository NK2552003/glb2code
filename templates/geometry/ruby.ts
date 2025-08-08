import { formatArrayData } from "@/lib/functions/formatArrayData";

   export function RubyGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
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
   }