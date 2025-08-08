export function KotlinMaterial(materialName,properties){
  return `/**
    * ${materialName} material component for LWJGL in Kotlin
    */
    class ${materialName} {
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `private val ${key} = ${value}`;
          })
          .join("\n    ")}

        fun use() {
            // Apply material properties
            ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n        ")}
        }
    }
    `;
}
