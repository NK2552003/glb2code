export function GoMesh(meshName){
      return `package meshes

import (
    "github.com/go-gl/gl/v4.1-core/gl"
    "yourproject/geometry"
)

// ${meshName} represents a mesh with geometry only
type ${meshName} struct {
    geometry *geometry.${meshName}Geometry
}

// New${meshName} creates a new mesh instance
func New${meshName}() *${meshName} {
    return &${meshName}{
        geometry: geometry.New${meshName}Geometry(),
    }
}

// Render renders the mesh
func (m *${meshName}) Render() {
    m.geometry.Render()
}

// Cleanup releases OpenGL resources
func (m *${meshName}) Cleanup() {
    m.geometry.Cleanup()
}
    `;
}
