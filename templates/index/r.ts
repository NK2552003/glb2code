export function RIndex(componentName,meshes, materials){
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
  }