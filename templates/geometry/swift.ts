export function SwiftGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId){
    return `import Metal
    import simd
    
    /// ${meshName} geometry definition for Metal
    class ${meshName}Geometry {
        private var vertexBuffer: MTLBuffer?
        ${indices ? "private var indexBuffer: MTLBuffer?" : ""}
        ${indices ? "private var indexCount: Int" : "private var vertexCount: Int"}
        
        init(device: MTLDevice) {
            // Position data
            let positions: [Float] = [${positions.join(", ")}]
            ${normals
              ? `let normals: [Float] = [${(normals || []).join(", ")}]`
              : ""
            }
            ${uvs ? `let uvs: [Float] = [${(uvs || []).join(", ")}]` : ""}
            ${indices ? `let indices: [UInt16] = [${indices.join(", ")}]` : ""}
            
            // Create vertex data
            var vertexData: [Float] = []
            for i in stride(from: 0, to: positions.count, by: 3) {
                vertexData.append(contentsOf: [positions[i], positions[i+1], positions[i+2]])
                ${normals
              ? `if i < normals.count - 2 {
                    vertexData.append(contentsOf: [normals[i], normals[i+1], normals[i+2]])
                }`
              : ""
            }
                ${uvs
              ? `let uvIndex = (i / 3) * 2
                if uvIndex < uvs.count - 1 {
                    vertexData.append(contentsOf: [uvs[uvIndex], uvs[uvIndex+1]])
                }`
              : ""
            }
            }
            
            vertexBuffer = device.makeBuffer(
                bytes: vertexData,
                length: vertexData.count * MemoryLayout<Float>.size,
                options: []
            )
            
            ${indices
              ? `indexBuffer = device.makeBuffer(
                bytes: indices,
                length: indices.count * MemoryLayout<UInt16>.size,
                options: []
            )
            indexCount = indices.count`
              : `vertexCount = positions.count / 3`
            }
        }
        
        func render(renderEncoder: MTLRenderCommandEncoder) {
            guard let vertexBuffer = vertexBuffer else { return }
            
            renderEncoder.setVertexBuffer(vertexBuffer, offset: 0, index: 0)
            
            ${indices
              ? `guard let indexBuffer = indexBuffer else { return }
            renderEncoder.drawIndexedPrimitives(
                type: .triangle,
                indexCount: indexCount,
                indexType: .uint16,
                indexBuffer: indexBuffer,
                indexBufferOffset: 0
            )`
              : `renderEncoder.drawPrimitives(
                type: .triangle,
                vertexStart: 0,
                vertexCount: vertexCount
            )`
            }
        }
    }
    `;
}
