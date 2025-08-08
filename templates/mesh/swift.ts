export function SwiftMesh(meshName){
  return `import Metal

/// ${meshName} mesh component for Metal rendering
class ${meshName} {
    private let geometry: ${meshName}Geometry
    
    init(device: MTLDevice) {
        self.geometry = ${meshName}Geometry(device: device)
    }
    
    func render(renderEncoder: MTLRenderCommandEncoder) {
        geometry.render(renderEncoder: renderEncoder)
    }
}`;
}
