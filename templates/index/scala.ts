export function ScalaIndex(componentName,meshes){
   return `/**
    * ${componentName} main component for LWJGL in Scala
    */
    class ${componentName} {
      ${meshes
          .map(
            (mesh, i) =>
              `private val ${mesh.name.toLowerCase()} = new ${mesh.name}()`
          )
          .join("\n  ")}
      
      def render(): Unit = {
        ${meshes
          .map((mesh) => "${mesh.name.toLowerCase()}.render()")
          .join("\n    ")}
      }
    }
    `; 
}
