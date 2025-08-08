export function JavaExample(componentName){
    return `/**
 * Example application for ${componentName} using LWJGL
 */
import ${componentName};
import org.lwjgl.glfw.GLFW;
import org.lwjgl.opengl.GL;
import static org.lwjgl.opengl.GL11.*;

public class ${componentName}App {
    private long window;
    private ${componentName} model;
    
    public void run() {
        init();
        loop();
        cleanup();
    }
    
    private void init() {
        // Initialize GLFW
        if (!GLFW.glfwInit()) {
            throw new IllegalStateException("Unable to initialize GLFW");
        }
        
        // Create window
        window = GLFW.glfwCreateWindow(800, 600, "${componentName} Viewer", 0, 0);
        if (window == 0) {
            throw new RuntimeException("Failed to create the GLFW window");
        }
        
        GLFW.glfwMakeContextCurrent(window);
        GL.createCapabilities();
        
        // Initialize model
        model = new ${componentName}();
        
        // Enable depth testing
        glEnable(GL_DEPTH_TEST);
    }
    
    private void loop() {
        while (!GLFW.glfwWindowShouldClose(window)) {
            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
            
            // Render model
            model.render();
            
            GLFW.glfwSwapBuffers(window);
            GLFW.glfwPollEvents();
        }
    }
    
    private void cleanup() {
        model.cleanup();
        GLFW.glfwTerminate();
    }
    
    public static void main(String[] args) {
        new ${componentName}App().run();
    }
}
`;
}
