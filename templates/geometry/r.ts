import { formatArrayData } from "@/lib/functions/formatArrayData";

export function RGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
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
    `;}