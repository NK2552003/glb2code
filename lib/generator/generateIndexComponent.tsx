import { CPPIndex } from "@/templates/index/cpp";
import { CSharpIndex } from "@/templates/index/csharp";
import { DartIndex } from "@/templates/index/dart";
import { GoIndex } from "@/templates/index/go";
import { JavaIndex } from "@/templates/index/java";
import { JavascriptIndex } from "@/templates/index/javascript";
import { KotlinIndex } from "@/templates/index/kotlin";
import { PHPIndex } from "@/templates/index/php";
import { PythonIndex } from "@/templates/index/python";
import { RIndex } from "@/templates/index/r";
import { RubyIndex } from "@/templates/index/ruby";
import { RustIndex } from "@/templates/index/rust";
import { ScalaIndex } from "@/templates/index/scala";
import { SwiftIndex } from "@/templates/index/swift";
import { TypescriptIndex } from "@/templates/index/typescript";
import { LanguageId, LANGUAGES } from "@/types/constant";
import { MaterialData, MeshData } from "@/types/glb-convertor";

export default function generateIndexComponent(
  componentName: string,
  meshes: MeshData[],
  materials: MaterialData[],
  displayMode: string,
  languageId: LanguageId
): string {
  const lang = LANGUAGES[languageId];

  switch (languageId) {
    case "typescript":
      return TypescriptIndex(meshes,materials, componentName);
    case "javascript":
      return JavascriptIndex(meshes, materials, componentName);
    case "python":
      return PythonIndex(componentName,meshes,materials);
    case "java":
      return JavaIndex(componentName, meshes, materials);
    case "csharp":
      return CSharpIndex(meshes, materials, componentName);
    case "cpp":
      return CPPIndex(meshes, materials,componentName);
    case "go":
      return GoIndex(meshes, materials, componentName);
    case "rust":
      return RustIndex(meshes, materials, componentName);
    case "swift":
      return SwiftIndex(meshes, materials, componentName);
    case "php":
      return PHPIndex(componentName,meshes,materials);
    case "ruby":
      return RubyIndex(componentName, meshes, materials);
    case "scala":
      return ScalaIndex(componentName,meshes);
    case "kotlin":
      return KotlinIndex(componentName,meshes);
    case "dart":
      return DartIndex(componentName,meshes,materials);
    case "r":
      return RIndex(componentName, meshes, materials);
    default:
      // Fallback to TypeScript for unsupported languages
      return generateIndexComponent(
        componentName,
        meshes,
        materials,
        displayMode,
        "typescript"
      );
  }
}
