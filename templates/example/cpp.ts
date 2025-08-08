export function CPPExample(componentName){
    return `#include <GL/glew.h>
    #include <GLFW/glfw3.h>
    #include "components/${componentName}.h"

    /**
     * Example application for ${componentName} using OpenGL
     */
    int main() {
        // Initialize GLFW
        if (!glfwInit()) {
            return -1;
        }
        
        // Create window
        GLFWwindow* window = glfwCreateWindow(800, 600, "${componentName} Viewer", NULL, NULL);
        if (!window) {
            glfwTerminate();
            return -1;
        }
        
        glfwMakeContextCurrent(window);
        glewInit();
        
        // Enable depth testing
        glEnable(GL_DEPTH_TEST);
        
        // Create model
        ${componentName} model;
        
        // Main loop
        while (!glfwWindowShouldClose(window)) {
            // Clear the screen
            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
            
            // Set up perspective projection
            // (In a real application, you would set up matrices here)
            
            // Render model
            model.render();
            
            // Swap buffers and poll events
            glfwSwapBuffers(window);
            glfwPollEvents();
        }
        
        // Cleanup
        glfwTerminate();
        return 0;
    }
    `;
}
