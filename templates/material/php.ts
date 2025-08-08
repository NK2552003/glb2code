export function PHPMaterial(materialName, properties){
    return `<?php
    /**
     * ${materialName} material component for PHP-GLFW
     */
    class ${materialName} {
        public function __construct() {
            // Material setup
        }
        public function use() {
            // Apply material properties
            ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `glfw${key.charAt(0).toUpperCase() + key.slice(1)
              }(${value});`;
          })
          .join("\n        ")}
        }
    }
    `;
  }