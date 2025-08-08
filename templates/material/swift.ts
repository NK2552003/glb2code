export function SwiftMaterial(materialName,properties){
   return `import Metal

    /// ${materialName} material component for Metal
    class ${materialName} {
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `private var ${key}: Float = ${value}`;
          })
          .join("\n    ")}
        
        init() {
            // Material initialization
        }
        
        func use(renderEncoder: MTLRenderCommandEncoder) {
            // Apply material properties
            ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n        ")}
        }
    }
    `;
}
