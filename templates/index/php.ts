
    export function PHPIndex(componentName, meshes, materials){
        return `<?php
    /**
     * ${componentName} main component for PHP-GLFW
     */
    class ${componentName} {
        ${meshes
          .map((mesh, i) => `private $${mesh.name.toLowerCase()};`)
          .join("\n    ")}
        public function __construct() {
            $this->setupMeshes();
        }
        private function setupMeshes() {
            ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `$this->${mesh.name.toLowerCase()} = new ${mesh.name
              }(new ${material.name}());`;
          })
          .join("\n        ")}
        }
        public function render() {
            ${meshes
          .map((mesh) => `$this->${mesh.name.toLowerCase()}->render();`)
          .join("\n        ")}
        }
    }
    `;
  }