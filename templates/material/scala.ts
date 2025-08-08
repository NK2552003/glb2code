export function ScalaMaterial(materialName, properties){
  return `/**
    * ${materialName} material component for LWJGL in Scala
    */
    class ${materialName} {
      ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `private val ${key} = ${value}`;
          })
          .join("\n  ")}
      
      def use(): Unit = {
        // Apply material properties
        ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n    ")}
      }
    }
    `;
}
