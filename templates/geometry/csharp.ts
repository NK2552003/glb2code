import { formatArrayData } from "@/lib/functions/formatArrayData";

export function CSharpGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
    return `using System;
    using OpenTK.Graphics.OpenGL4;
    using OpenTK.Mathematics;
    
    /// <summary>
    /// ${meshName} geometry definition for OpenTK
    /// </summary>
    public class ${meshName}Geometry : IDisposable
    {
        private int _vao;
        private int _vbo;
        ${indices ? "private int _ebo;" : ""}
        private int _vertexCount;
        
        public ${meshName}Geometry()
        {
            SetupBuffers();
        }
        
        private void SetupBuffers()
        {
            // Position data
            float[] positions = ${formatArrayData(positions, languageId)};
            ${normals
              ? `float[] normals = ${formatArrayData(normals || [], languageId)};`
              : ""
            }
            ${uvs ? `float[] uvs = ${formatArrayData(uvs || [], languageId)};` : ""}
            ${indices ? `uint[] indices = {${indices.join(", ")}};` : ""}
            
            _vao = GL.GenVertexArray();
            _vbo = GL.GenBuffer();
            ${indices ? "_ebo = GL.GenBuffer();" : ""}
            
            GL.BindVertexArray(_vao);
            
            // Position buffer
            GL.BindBuffer(BufferTarget.ArrayBuffer, _vbo);
            GL.BufferData(BufferTarget.ArrayBuffer, positions.Length * sizeof(float), positions, BufferUsageHint.StaticDraw);
            GL.VertexAttribPointer(0, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);
            GL.EnableVertexAttribArray(0);
            
            ${normals
              ? `// Normal buffer
            GL.BufferData(BufferTarget.ArrayBuffer, normals.Length * sizeof(float), normals, BufferUsageHint.StaticDraw);
            GL.VertexAttribPointer(1, 3, VertexAttribPointerType.Float, false, 3 * sizeof(float), 0);
            GL.EnableVertexAttribArray(1);`
              : ""
            }
            
            ${uvs
              ? `// UV buffer
            GL.BufferData(BufferTarget.ArrayBuffer, uvs.Length * sizeof(float), uvs, BufferUsageHint.StaticDraw);
            GL.VertexAttribPointer(2, 2, VertexAttribPointerType.Float, false, 2 * sizeof(float), 0);
            GL.EnableVertexAttribArray(2);`
              : ""
            }
            
            ${indices
              ? `// Element buffer
            GL.BindBuffer(BufferTarget.ElementArrayBuffer, _ebo);
            GL.BufferData(BufferTarget.ElementArrayBuffer, indices.Length * sizeof(uint), indices, BufferUsageHint.StaticDraw);
            _vertexCount = indices.Length;`
              : `_vertexCount = positions.Length / 3;`
            }
            
            GL.BindVertexArray(0);
        }
        
        public void Render()
        {
            GL.BindVertexArray(_vao);
            ${indices
              ? "GL.DrawElements(PrimitiveType.Triangles, _vertexCount, DrawElementsType.UnsignedInt, 0);"
              : "GL.DrawArrays(PrimitiveType.Triangles, 0, _vertexCount);"
            }
            GL.BindVertexArray(0);
        }
        
        public void Dispose()
        {
            GL.DeleteVertexArray(_vao);
            GL.DeleteBuffer(_vbo);
            ${indices ? "GL.DeleteBuffer(_ebo);" : ""}
        }
    }
    `;
}
