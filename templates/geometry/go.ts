import { formatArrayData } from "@/lib/functions/formatArrayData";

export function GoGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
    return `package geometry

import (
    "github.com/go-gl/gl/v4.1-core/gl"
    "github.com/go-gl/mathgl/mgl32"
)

// ${meshName}Geometry represents the geometry data for ${meshName}
type ${meshName}Geometry struct {
    vao uint32
    vbo uint32
    ${indices ? "ebo uint32" : ""}
    ${indices ? "indexCount int32" : "vertexCount int32"}
}

// New${meshName}Geometry creates a new ${meshName} geometry
func New${meshName}Geometry() *${meshName}Geometry {
    geom := &${meshName}Geometry{}
    geom.setupBuffers()
    return geom
}

func (g *${meshName}Geometry) setupBuffers() {
    // Position data
    positions := ${formatArrayData(positions, languageId)}
    ${normals ? `normals := ${formatArrayData(normals || [], languageId)}` : ""}
    ${uvs ? `uvs := ${formatArrayData(uvs || [], languageId)}` : ""}
    ${indices ? `indices := []uint32{${indices.join(", ")}}` : ""}
    
    gl.GenVertexArrays(1, &g.vao)
    gl.GenBuffers(1, &g.vbo)
    ${indices ? "gl.GenBuffers(1, &g.ebo)" : ""}
    
    gl.BindVertexArray(g.vao)
    
    // Position buffer
    gl.BindBuffer(gl.ARRAY_BUFFER, g.vbo)
    gl.BufferData(gl.ARRAY_BUFFER, len(positions)*4, gl.Ptr(positions), gl.STATIC_DRAW)
    gl.VertexAttribPointer(0, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(0)
    
    ${normals
          ? `// Normal buffer
    gl.BufferData(gl.ARRAY_BUFFER, len(normals)*4, gl.Ptr(normals), gl.STATIC_DRAW)
    gl.VertexAttribPointer(1, 3, gl.FLOAT, false, 3*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(1)`
          : ""
        }
    
    ${uvs
          ? `// UV buffer
    gl.BufferData(gl.ARRAY_BUFFER, len(uvs)*4, gl.Ptr(uvs), gl.STATIC_DRAW)
    gl.VertexAttribPointer(2, 2, gl.FLOAT, false, 2*4, gl.PtrOffset(0))
    gl.EnableVertexAttribArray(2)`
          : ""
        }
    
    ${indices
          ? `// Element buffer
    gl.BindBuffer(gl.ELEMENT_ARRAY_BUFFER, g.ebo)
    gl.BufferData(gl.ELEMENT_ARRAY_BUFFER, len(indices)*4, gl.Ptr(indices), gl.STATIC_DRAW)
    g.indexCount = int32(len(indices))`
          : `g.vertexCount = int32(len(positions) / 3)`
        }
    
    gl.BindVertexArray(0)
}

// Render renders the geometry
func (g *${meshName}Geometry) Render() {
    gl.BindVertexArray(g.vao)
    ${indices
          ? "gl.DrawElements(gl.TRIANGLES, g.indexCount, gl.UNSIGNED_INT, gl.PtrOffset(0))"
          : "gl.DrawArrays(gl.TRIANGLES, 0, g.vertexCount)"
        }
    gl.BindVertexArray(0)
}

// Cleanup cleans up OpenGL resources
func (g *${meshName}Geometry) Cleanup() {
    gl.DeleteVertexArrays(1, &g.vao)
    gl.DeleteBuffers(1, &g.vbo)
    ${indices ? "gl.DeleteBuffers(1, &g.ebo)" : ""}
}
`;
}
