export function CPPMesh(meshName){
    return `#pragma once
    #include "geometry/${meshName}Geometry.h"

    /**
     * ${meshName} mesh component for OpenGL with geometry
     */
    class ${meshName} {
    private:
        ${meshName}Geometry geometry;
        Material* material;
    public:
        explicit ${meshName}(Material* mat = nullptr) : geometry(), material(mat) {}
        
        void render() {
            if (material) {
                material->use();
            }
            geometry.render();
        }
        
        ${meshName}Geometry& getGeometry() {
            return geometry;
        }
        
        void setMaterial(Material* mat) {
            material = mat;
        }
    };
    `;
}
