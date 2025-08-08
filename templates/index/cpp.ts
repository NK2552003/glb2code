export function CPPIndex(meshes, materials, componentName){
    return `#pragma once
#include <vector>
#include <memory>
${meshes.map((mesh) => `#include "meshes/${mesh.name}.h"`).join("\n")}
${materials
          .map((material) => `#include "materials/${material.name}.h"`)
          .join("\n")}

/**
 * ${componentName} main component for OpenGL
 */
class ${componentName} {
private:
    ${meshes
          .map(
            (mesh, i) => `std::unique_ptr<${mesh.name}> ${mesh.name.toLowerCase()};`
          )
          .join("\n    ")}
    
public:
    ${componentName}() {
        setupMeshes();
    }
    
    ~${componentName}() {
        cleanup();
    }
    
private:
    void setupMeshes() {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()} = std::make_unique<${mesh.name
              }>(std::make_unique<${material.name}>());`;
          })
          .join("\n        ")}
    }
    
public:
    void render() {
        ${meshes
          .map(
            (mesh) =>
              `if (${mesh.name.toLowerCase()}) ${mesh.name.toLowerCase()}->render();`
          )
          .join("\n        ")}
    }
    
    void cleanup() {
        ${meshes
          .map((mesh) => `${mesh.name.toLowerCase()}.reset();`)
          .join("\n        ")}
    }
};
`;
}
