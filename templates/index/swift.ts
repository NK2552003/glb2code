export function SwiftIndex(meshes, materials, componentName){
   return `import Metal
${meshes.map((mesh) => `import Meshes`).join("\n")}
${materials.map((material) => `import Materials`).join("\n")}

/// ${componentName} main component for Metal
class ${componentName} {
    ${meshes
          .map((mesh, i) => `private let ${mesh.name.toLowerCase()}: ${mesh.name}`)
          .join("\n    ")}
    
    init(device: MTLDevice) {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()} = ${mesh.name
              }(device: device, material: ${material.name}(device: device))`;
          })
          .join("\n        ")}
    }
    
    func render(renderEncoder: MTLRenderCommandEncoder) {
        ${meshes
          .map(
            (mesh) =>
              `${mesh.name.toLowerCase()}.render(renderEncoder: renderEncoder)`
          )
          .join("\n        ")}
    }
}
`;
}
