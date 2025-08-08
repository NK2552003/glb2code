export function KotlinMesh(meshName){
      return `/**
    * ${meshName} mesh component for LWJGL in Kotlin
    */
    class ${meshName}(private var material: Material? = null) {
        private val geometry = ${meshName}Geometry()

        fun render() {
            material?.use()
            geometry.render()
        }
    }
    `;
}
