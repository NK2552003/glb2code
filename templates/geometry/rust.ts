export function RustGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
    return `use wgpu::util::DeviceExt;

/// ${meshName} geometry definition for wgpu
pub struct ${meshName}Geometry {
    vertex_buffer: wgpu::Buffer,
    ${indices ? "index_buffer: wgpu::Buffer," : ""}
    ${indices ? "num_indices: u32," : "num_vertices: u32,"}
}

impl ${meshName}Geometry {
    pub fn new(device: &wgpu::Device) -> Self {
        // Position data
        let positions: Vec<f32> = vec![${positions.join(", ")}];
        ${normals
          ? `let normals: Vec<f32> = vec![${(normals || []).join(", ")}];`
          : ""
        }
        ${uvs ? `let uvs: Vec<f32> = vec![${(uvs || []).join(", ")}];` : ""}
        ${indices ? `let indices: Vec<u16> = vec![${indices.join(", ")}];` : ""}
        
        // Create vertex data
        let mut vertex_data = Vec::new();
        for i in (0..positions.len()).step_by(3) {
            vertex_data.extend_from_slice(&positions[i..i+3]);
            ${normals
          ? `if i < normals.len() - 2 {
                vertex_data.extend_from_slice(&normals[i..i+3]);
            }`
          : ""
        }
            ${uvs
          ? `let uv_index = (i / 3) * 2;
            if uv_index < uvs.len() - 1 {
                vertex_data.extend_from_slice(&uvs[uv_index..uv_index+2]);
            }`
          : ""
        }
        }
        
        let vertex_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("${meshName} Vertex Buffer"),
            contents: bytemuck::cast_slice(&vertex_data),
            usage: wgpu::BufferUsages::VERTEX,
        });
        
        ${indices
          ? `let index_buffer = device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
            label: Some("${meshName} Index Buffer"),
            contents: bytemuck::cast_slice(&indices),
            usage: wgpu::BufferUsages::INDEX,
        });
        
        Self {
            vertex_buffer,
            index_buffer,
            num_indices: indices.len() as u32,
        }`
          : `Self {
            vertex_buffer,
            num_vertices: (positions.len() / 3) as u32,
        }`
        }
    }
    
    pub fn render<'a>(&'a self, render_pass: &mut wgpu::RenderPass<'a>) {
        render_pass.set_vertex_buffer(0, self.vertex_buffer.slice(..));
        ${indices
          ? `render_pass.set_index_buffer(self.index_buffer.slice(..), wgpu::IndexFormat::Uint16);
        render_pass.draw_indexed(0..self.num_indices, 0, 0..1);`
          : "render_pass.draw(0..self.num_vertices, 0..1);"
        }
    }
}
`;
}
