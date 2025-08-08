
export function RubyMaterial(materialName, properties){
    return `# ${materialName} material component for Ruby OpenGL
    class ${materialName}
      def initialize
        # Material setup
      end
      def use
        # Apply material properties
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `gl${key.charAt(0).toUpperCase() + key.slice(1)}(${value})`;
          })
          .join("\n    ")}
      end
    end
    `;
   }