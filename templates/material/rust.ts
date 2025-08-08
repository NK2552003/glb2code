export function RustMaterial(materialName, properties){
    return `/// ${materialName} material component for wgpu
    pub struct ${materialName} {
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `pub ${key}: f32,`;
          })
          .join("\n    ")}
    }

    impl ${materialName} {
        pub fn new() -> Self {
            Self {
                ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `${key}: ${value},`;
          })
          .join("\n            ")}
            }
        }
        
        pub fn bind<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
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
