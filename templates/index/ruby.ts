
   export function RubyIndex(componentName, meshes, materials){
    return `# ${componentName} main component for Ruby OpenGL
    class ${componentName}
      ${meshes
          .map((mesh, i) => `attr_reader :${mesh.name.toLowerCase()}`)
          .join("\n  ")}
      def initialize
        setup_meshes
      end
      private
      def setup_meshes
        ${meshes
          .map((mesh, i) => {
            const material = materials[i % materials.length];
            return "@#{mesh.name.toLowerCase()} = #{mesh.name}.new(#{material.name}.new)";
          })
          .join("\n    ")}
      end
      public
      def render
        ${meshes
          .map((mesh) => "@#{mesh.name.toLowerCase()}.render")
          .join("\n    ")}
      end
    end
    `;
   }