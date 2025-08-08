export function RustMesh(meshName){
    return `
      use crate::geometry::${meshName}Geometry;
      /// ${meshName} mesh component for wgpu
      pub struct ${meshName} {
          geometry: ${meshName}Geometry,
      }

      impl ${meshName} {
          pub fn new(device: &wgpu::Device) -> Self {
              Self {
                  geometry: ${meshName}Geometry::new(device),
              }
          }
          
          pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
              self.geometry.render(render_pass);
          }
      }
      `;
}
