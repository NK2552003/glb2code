export function GoIndex(meshes, materials, componentName){
    return `package main

${meshes.map((mesh) => `import "./meshes"`).join("\n")}
${materials.map((material) => `import "./materials"`).join("\n")}

// ${componentName} represents the main 3D component
type ${componentName} struct {
    ${meshes
          .map((mesh, i) => `${mesh.name.toLowerCase()} *meshes.${mesh.name}`)
          .join("\n    ")}
}

// New${componentName} creates a new ${componentName} instance
func New${componentName}() *${componentName} {
    component := &${componentName}{}
    component.setupMeshes()
    return component
}

func (c *${componentName}) setupMeshes() {
    ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `c.${mesh.name.toLowerCase()} = meshes.New${mesh.name
              }(materials.New${material.name}())`;
          })
          .join("\n    ")}
}

// Render renders all meshes in the component
func (c *${componentName}) Render() {
    ${meshes
          .map(
            (mesh) => `if c.${mesh.name.toLowerCase()} != nil {
        c.${mesh.name.toLowerCase()}.Render()
    }`
          )
          .join("\n    ")}
}

// Cleanup cleans up all resources
func (c *${componentName}) Cleanup() {
    ${meshes
          .map(
            (mesh) => `if c.${mesh.name.toLowerCase()} != nil {
        c.${mesh.name.toLowerCase()}.Cleanup()
    }`
          )
          .join("\n    ")}
}
`;

}
