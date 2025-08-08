export function RustIndex(meshes, materials, componentName){
    return `${meshes
        .map(
          (mesh) =>
            `use crate::meshes::${mesh.name.toLowerCase()}::${mesh.name};`
        )
        .join("\n")}
${materials
          .map(
            (material) =>
              `use crate::materials::${material.name.toLowerCase()}::${material.name};`
          )
          .join("\n")}
use wgpu::Device;

/// ${componentName} main component for wgpu
pub struct ${componentName} {
    ${meshes
          .map((mesh, i) => `${mesh.name.toLowerCase()}: ${mesh.name},`)
          .join("\n    ")}
}

impl ${componentName} {
    pub fn new(device: &Device) -> Self {
        Self {
            ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()}: ${mesh.name}::new(device, ${material.name
              }::new(device)),`;
          })
          .join("\n            ")}
        }
    }
    
    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
        ${meshes
          .map((mesh) => `self.${mesh.name.toLowerCase()}.render(render_pass);`)
          .join("\n        ")}
    }
}
`;
}
