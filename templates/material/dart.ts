export function DartMaterial(materialName, properties) {
 return `/**
    * ${materialName} material component for OpenGL in Dart
    */
    class ${materialName} implements Material {
      ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return "final $key = $value;";
          })
          .join("\n  ")}

      @override
      void use() {
        // Apply material properties
        ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return "// Set $key property";
          })
          .join("\n    ")}
      }
    }
    `;
}
