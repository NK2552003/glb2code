export function CSharpIndex(meshes,materials, componentName){
    return `using System;
using System.Collections.Generic;
${meshes.map((mesh) => `using Meshes;`).join("\n")}
${materials.map((material) => `using Materials;`).join("\n")}

/// <summary>
/// ${componentName} main component for OpenTK
/// </summary>
public class ${componentName} : IDisposable
{
    ${meshes
          .map((mesh, i) => `private ${mesh.name} _${mesh.name.toLowerCase()};`)
          .join("\n    ")}
    
    public ${componentName}()
    {
        SetupMeshes();
    }
    
    private void SetupMeshes()
    {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `_${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name
              }());`;
          })
          .join("\n        ")}
    }
    
    public void Render()
    {
        ${meshes
          .map((mesh) => `_${mesh.name.toLowerCase()}.Render();`)
          .join("\n        ")}
    }
    
    public void Dispose()
    {
        ${meshes
          .map((mesh) => `_${mesh.name.toLowerCase()}?.Dispose();`)
          .join("\n        ")}
    }
}
`;
}
