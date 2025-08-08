export function JavaMesh(meshName){
    return `/**
 * ${meshName} mesh component for LWJGL OpenGL
 */
public class ${meshName} {
    private ${meshName}Geometry geometry;
    private Material material;
    
    public ${meshName}(Material material) {
        this.geometry = new ${meshName}Geometry();
        this.material = material;
    }
    
    public void render() {
        if (material != null) {
            material.use();
        }
        geometry.render();
    }
    
    public void cleanup() {
        geometry.cleanup();
    }
    
    public ${meshName}Geometry getGeometry() {
        return geometry;
    }
    
    public void setMaterial(Material material) {
        this.material = material;
    }
}
`;
}
