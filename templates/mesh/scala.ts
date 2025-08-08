export function ScalaMesh(meshName){
    return `/**
    * ${meshName} mesh component for LWJGL in Scala
    */
    class ${meshName}(material: Material = null) {
      private val geometry = new ${meshName}Geometry()
      
      def render(): Unit = {
        if (material != null) material.use()
        geometry.render()
      }
    }
    `;
}
