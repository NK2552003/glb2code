export function DartIndex(
  componentName, meshes,materials
) {
  return `/**
    * ${componentName} main component for OpenGL in Dart
    */
    class ${componentName} {
      ${meshes
          .map((mesh, i) => `final ${mesh.name} ${mesh.name.toLowerCase()};`)
          .join("\n  ")}

      ${componentName}() {
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return `${mesh.name.toLowerCase()} = ${mesh.name}(material: ${material.name}());`
            ;
          })
          .join("\n    ")}
      }

      void render() {
        ${meshes
          .map((mesh) => "${mesh.name.toLowerCase()}.render();")
          .join("\n    ")}
      }
    }
    `;
}
