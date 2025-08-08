export function KotlinIndex(componentName,meshes){
    return `/**
      * ${componentName} main component for LWJGL in Kotlin
      */
      class ${componentName} {
          ${meshes
          .map(
            (mesh, i) =>
              `private val ${mesh.name.toLowerCase()} = ${mesh.name}()`
          )
          .join("\n    ")}

          fun render() {
              ${meshes
          .map((mesh) => "${mesh.name.toLowerCase()}.render()")
          .join("\n        ")}
          }
      }
      `;
}
