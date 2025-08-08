export function PythonIndex(componentName, meshes, materials){
    return `"""${componentName} main component for ModernGL"""
import moderngl
import numpy as np
from typing import List, Optional
${meshes
          .map((mesh) => `from .meshes.${mesh.name} import ${mesh.name}`)
          .join("\n")}
${materials
          .map((material) => `from .materials.${material.name} import ${material.name}`)
          .join("\n")}

class ${componentName}:
    """${componentName} component for ModernGL"""
    
    def __init__(self, ctx: moderngl.Context):
        self.ctx = ctx
        self.meshes: List = []
        self._setup_meshes()
        
    def _setup_meshes(self):
        """Initialize all meshes with their materials"""
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `# Create ${mesh.name}
        ${mesh.name.toLowerCase()}_material = ${material.name}(self.ctx)
        ${mesh.name.toLowerCase()}_mesh = ${mesh.name
              }(self.ctx, ${mesh.name.toLowerCase()}_material)
        self.meshes.append(${mesh.name.toLowerCase()}_mesh)`;
          })
          .join("\n        ")}
    
    def render(self, projection_matrix: np.ndarray, view_matrix: np.ndarray, model_matrix: Optional[np.ndarray] = None):
        """Render all meshes"""
        if model_matrix is None:
            model_matrix = np.eye(4, dtype=np.float32)
            
        for mesh in self.meshes:
            mesh.render(projection_matrix, view_matrix)
`;
}
