export function CPPMaterial(materialName, properties){
    return `#pragma once
        #include <GL/glew.h>
    
        /**
         * ${materialName} material component for OpenGL
         */
        class ${materialName} {
        private:
            ${properties
              .map((prop) => {
                const [key, value] = prop.split(": ");
                return `float ${key};`;
              })
              .join("\n    ")}
        public:
            ${materialName}() {
                ${properties
              .map((prop) => {
                const [key, value] = prop.split(": ");
                return `${key} = ${value};`;
              })
              .join("\n        ")}
            }
            
            void use() {
                // Apply material properties
                ${properties
              .map((prop) => {
                const [key] = prop.split(": ");
                return `// Set ${key} property`;
              })
              .join("\n        ")}
            }
        };
        `;
}
