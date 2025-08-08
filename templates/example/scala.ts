export function ScalaExample(componentName){
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
}
