export function JavaIndex(componentName,meshes,materials){
    return `/**
 * ${componentName} main component for LWJGL OpenGL
 */
${meshes.map((mesh) => `import meshes.${mesh.name};`).join("\n")}
${materials.map((material) => `import materials.${material.name};`).join("\n")}

public class ${componentName} {
    ${meshes
          .map((mesh, i) => `private ${mesh.name} ${mesh.name.toLowerCase()};`)
          .join("\n    ")}
    
    public ${componentName}() {
        setupMeshes();
    }
    
    private void setupMeshes() {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()} = new ${mesh.name}(new ${material.name
              }());`;
          })
          .join("\n        ")}
    }
    
    public void render() {
        ${meshes
          .map((mesh) => `${mesh.name.toLowerCase()}.render();`)
          .join("\n        ")}
    }
    
    public void cleanup() {
        ${meshes
          .map((mesh) => `${mesh.name.toLowerCase()}.cleanup();`)
          .join("\n        ")}
    }
}
`;
}
