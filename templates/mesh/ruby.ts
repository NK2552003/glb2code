export function RubyMesh(meshName) {
  return `# ${meshName} mesh component for Ruby OpenGL
    class ${meshName}
      def initialize(material = nil)
        @geometry = ${meshName}Geometry.new
        @material = material
      end
      def render
        @material.use if @material
        @geometry.render
      end
    end
    `;
}
