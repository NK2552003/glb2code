export function GoExample(componentName){
    return `package main

    import (
        "github.com/go-gl/gl/v4.1-core/gl"
        "github.com/go-gl/glfw/v3.3/glfw"
        "yourproject/components"
        "runtime"
    )

    // initGlfw initializes GLFW and returns a Window
    func initGlfw() *glfw.Window {
        if err := glfw.Init(); err != nil {
            panic(err)
        }
        glfw.WindowHint(glfw.Resizable, glfw.True)
        glfw.WindowHint(glfw.ContextVersionMajor, 4)
        glfw.WindowHint(glfw.ContextVersionMinor, 1)
        glfw.WindowHint(glfw.OpenGLProfile, glfw.OpenGLCoreProfile)
        glfw.WindowHint(glfw.OpenGLForwardCompatible, glfw.True)

        window, err := glfw.CreateWindow(800, 600, "${componentName} Viewer", nil, nil)
        if err != nil {
            panic(err)
        }
        window.MakeContextCurrent()

        return window
    }

    // initOpenGL initializes OpenGL
    func initOpenGL() {
        if err := gl.Init(); err != nil {
            panic(err)
        }
        version := gl.GoStr(gl.GetString(gl.VERSION))
        println("OpenGL version", version)
        
        gl.Enable(gl.DEPTH_TEST)
        gl.DepthFunc(gl.LESS)
        gl.ClearColor(0.2, 0.3, 0.3, 1.0)
    }

    func main() {
        runtime.LockOSThread()
        
        window := initGlfw()
        initOpenGL()
        
        // Create model
        model := components.New${componentName}()
        
        // Main loop
        for !window.ShouldClose() {
            // Clear the screen
            gl.Clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
            
            // Render model
            model.Render()
            
            // Maintenance
            window.SwapBuffers()
            glfw.PollEvents()
        }
        
        // Cleanup
        model.Cleanup()
    }
    `;
}
