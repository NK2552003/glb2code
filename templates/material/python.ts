export function PythonMaterial(materialName, hasNormals, hasUvs, displayMode){
    return `"""${materialName} material for ModernGL"""
import moderngl
import numpy as np

class ${materialName}:
    """${materialName} material for ModernGL"""
    
    def __init__(self, ctx: moderngl.Context):
        self.ctx = ctx
        self.program = self._create_shader_program()
        
    def _create_shader_program(self) -> moderngl.Program:
        vertex_shader = '''
        #version 330 core
        in vec3 in_position;
        ${hasNormals ? "in vec3 in_normal;" : ""}
        ${hasUvs ? "in vec2 in_uv;" : ""}
        
        uniform mat4 projection;
        uniform mat4 view;
        uniform mat4 model;
        
        out vec3 v_position;
        ${hasNormals ? "out vec3 v_normal;" : ""}
        ${hasUvs ? "out vec2 v_uv;" : ""}
        
        void main() {
            v_position = in_position;
            ${hasNormals ? "v_normal = in_normal;" : ""}
            ${hasUvs ? "v_uv = in_uv;" : ""}
            gl_Position = projection * view * model * vec4(in_position, 1.0);
        }
        '''
        
        fragment_shader = '''
        #version 330 core
        in vec3 v_position;
        ${hasNormals ? "in vec3 v_normal;" : ""}
        ${hasUvs ? "in vec2 v_uv;" : ""}
        
        out vec4 fragColor;
        
        void main() {
            ${displayMode === "wireframe"
          ? "fragColor = vec4(0.0, 0.0, 0.0, 0.8);"
          : displayMode === "normals"
            ? "fragColor = vec4(normalize(v_normal) * 0.5 + 0.5, 1.0);"
            : displayMode === "points"
              ? "fragColor = vec4(0.0, 1.0, 0.0, 1.0);"
              : "fragColor = vec4(0.5, 0.5, 0.5, 1.0);"
        }
        }
        '''
        
        return self.ctx.program(vertex_shader=vertex_shader, fragment_shader=fragment_shader)
    
    def use(self):
        """Activate this material for rendering"""
        self.program.use()
        
    def set_matrix(self, name: str, matrix: np.ndarray):
        """Set a matrix uniform"""
        if name in self.program:
            self.program[name].write(matrix.astype(np.float32).tobytes())
`;
}
