import { capitalize } from "@/lib/functions/capitalize";

export function GoMaterial(materialName, properties){
    return `package materials

    import "github.com/go-gl/gl/v4.1-core/gl"

    // ${materialName} represents a material with properties
    type ${materialName} struct {
        ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `${capitalize(key)} float32`;
          })
          .join("\n    ")}
    }

    // New${materialName} creates a new material instance
    func New${materialName}() *${materialName} {
        return &${materialName}{
            ${properties
          .map((prop) => {
            const [key, value] = prop.split(": ");
            return `${capitalize(key)}: ${value},`;
          })
          .join("\n        ")}
        }
    }

    // Use activates the material for rendering
    func (m *${materialName}) Use() {
        // Apply material properties
        ${properties
          .map((prop) => {
            const [key] = prop.split(": ");
            return `// Set ${key} property`;
          })
          .join("\n    ")}
    }
    `;
}
