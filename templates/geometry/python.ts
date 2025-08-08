import { formatArrayData } from "@/lib/functions/formatArrayData";

export function PythonGeometry(meshName, isLargeGeometry,normals,uvs,indices,positions, languageId,){
    return `import numpy as np
    import moderngl
    from typing import Optional
    
    class ${meshName}Geometry:
        """${meshName} geometry definition for ModernGL"""
        
        def __init__(self):
            # Position data
            self.positions = ${formatArrayData(positions, languageId)}
            ${normals
              ? `# Normal data
            self.normals = ${formatArrayData(normals, languageId)}`
              : "self.normals = None"
            }
            ${uvs
              ? `# UV data
            self.uvs = ${formatArrayData(uvs, languageId)}`
              : "self.uvs = None"
            }
            ${indices
              ? `# Index data
            self.indices = np.array([${indices.join(", ")}], dtype=np.uint32)`
              : "self.indices = None"
            }
        
        def create_vao(self, ctx: moderngl.Context, program: moderngl.Program) -> moderngl.VertexArray:
            """Create vertex array object for rendering"""
            vbo_positions = ctx.buffer(self.positions.tobytes())
            
            vao_content = [(vbo_positions, '3f', 'in_position')]
            
            ${normals
              ? `if self.normals is not None:
                vbo_normals = ctx.buffer(self.normals.tobytes())
                vao_content.append((vbo_normals, '3f', 'in_normal'))`
              : ""
            }
            
            ${uvs
              ? `if self.uvs is not None:
                vbo_uvs = ctx.buffer(self.uvs.tobytes())
                vao_content.append((vbo_uvs, '2f', 'in_uv'))`
              : ""
            }
            
            ${indices
              ? `if self.indices is not None:
                ibo = ctx.buffer(self.indices.tobytes())
                return ctx.vertex_array(program, vao_content, index_buffer=ibo)
            else:
                return ctx.vertex_array(program, vao_content)`
              : "return ctx.vertex_array(program, vao_content)"
            }
    `;
}
