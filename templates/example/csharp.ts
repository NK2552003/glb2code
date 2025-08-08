export function CSharpExample(componentName){
    return `using System;
using OpenTK.Graphics.OpenGL4;
using OpenTK.Windowing.Common;
using OpenTK.Windowing.Desktop;

/// <summary>
/// Example application for ${componentName} using OpenTK
/// </summary>
public class ${componentName}App : GameWindow
{
    private ${componentName} _model;
    
    public ${componentName}App() : base(GameWindowSettings.Default, 
        new NativeWindowSettings()
        {
            Size = new OpenTK.Mathematics.Vector2i(800, 600),
            Title = "${componentName} Viewer"
        })
    {
    }
    
    protected override void OnLoad()
    {
        base.OnLoad();
        
        GL.ClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        GL.Enable(EnableCap.DepthTest);
        
        _model = new ${componentName}();
    }
    
    protected override void OnRenderFrame(FrameEventArgs e)
    {
        base.OnRenderFrame(e);
        
        GL.Clear(ClearBufferMask.ColorBufferBit | ClearBufferMask.DepthBufferBit);
        
        _model.Render();
        
        SwapBuffers();
    }
    
    protected override void OnUnload()
    {
        _model?.Dispose();
        base.OnUnload();
    }
    
    public static void Main()
    {
        using var app = new ${componentName}App();
        app.Run();
    }
}
`;
}
