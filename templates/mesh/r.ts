export function RMesh(meshName){
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
  }