export function RExample(componentName){
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
  }