export function PythonMesh(meshName){
  return `"""${meshName} mesh component for ModernGL"""
import moderngl
from .${meshName}Geometry import ${meshName}Geometry

class ${meshName}:
    """${meshName} mesh for ModernGL rendering"""
    
    def __init__(self, ctx: moderngl.Context, material=None):
        self.ctx = ctx
        self.material = material
        self.geometry = ${meshName}Geometry()
        self.vao = None
        
    def setup_vao(self, program: moderngl.Program):
        """Setup vertex array object with the given shader program"""
        self.vao = self.geometry.create_vao(self.ctx, program)
    
    def render(self, projection_matrix, view_matrix):
        """Render the mesh"""
        if self.vao and self.material:
            self.material.use()
            # Set matrices if available
            if hasattr(self.material, 'set_matrix'):
                self.material.set_matrix('projection', projection_matrix)
                self.material.set_matrix('view', view_matrix)
            self.vao.render(moderngl.TRIANGLES)
`;
}
