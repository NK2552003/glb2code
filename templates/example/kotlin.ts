export function KotlinExample(componentName){
     return `import org.lwjgl.glfw.GLFWErrorCallback
    import org.lwjgl.opengl.GL
    /**
     * Example application for ${componentName} using LWJGL in Kotlin
     */
    object ${componentName}App {
        @JvmStatic
        fun main(args: Array<String>) {
            // Setup error callback
            GLFWErrorCallback.createPrint(System.err).set()

            // Initialize GLFW
            if (!glfwInit()) throw IllegalStateException("Unable to initialize GLFW")

            // Create window
            val window = glfwCreateWindow(800, 600, "${componentName} Viewer", 0, 0)
            if (window == 0L) throw RuntimeException("Failed to create GLFW window")

            glfwMakeContextCurrent(window)
            GL.createCapabilities()

            // Enable depth testing
            glEnable(GL_DEPTH_TEST)

            // Create model
            val model = ${componentName}()

            // Main loop
            while (!glfwWindowShouldClose(window)) {
                glClear(GL_COLOR_BUFFER_BIT or GL_DEPTH_BUFFER_BIT)

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
