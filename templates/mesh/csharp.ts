export function CSharpMesh(meshName){
    return `using OpenTK.Graphics.OpenGL4;

/// <summary>
/// ${meshName} mesh component for OpenTK
/// </summary>
public class ${meshName} : System.IDisposable
{
    private ${meshName}Geometry _geometry;
    private Material _material;
    
    public ${meshName}(Material material = null)
    {
        _geometry = new ${meshName}Geometry();
        _material = material;
    }
    
    public void Render()
    {
        _material?.Use();
        _geometry.Render();
    }
    
    public void Dispose()
    {
        _geometry?.Dispose();
    }
    
    public ${meshName}Geometry Geometry => _geometry;
    
    public Material Material
    {
        get => _material;
        set => _material = value;
    }
}
`;
}
