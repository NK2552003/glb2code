export function RMaterial(materialName, properties){
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
}