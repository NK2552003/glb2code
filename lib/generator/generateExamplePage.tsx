import { CPPExample } from "@/templates/example/cpp";
import { CSharpExample } from "@/templates/example/csharp";
import { DartExample } from "@/templates/example/dart";
import { GoExample } from "@/templates/example/go";
import { JavaExample } from "@/templates/example/java";
import { JavascriptExample } from "@/templates/example/javascript";
import { KotlinExample } from "@/templates/example/kotlin";
import { PHPExample } from "@/templates/example/php";
import { PythonExample } from "@/templates/example/python";
import { RExample } from "@/templates/example/r";
import { RubyExample } from "@/templates/example/ruby";
import { RustExample } from "@/templates/example/rust";
import { ScalaExample } from "@/templates/example/scala";
import { SwiftExample } from "@/templates/example/swift";
import { TypescriptExample } from "@/templates/example/typescript";
import { LanguageId, LANGUAGES } from "@/types/constant";

export default function generateExamplePage(
  componentName: string,
  languageId: LanguageId
): string {
  const lang = LANGUAGES[languageId];

  switch (languageId) {
    case "typescript":
      return TypescriptExample(componentName);
    case "javascript":
      return JavascriptExample(componentName);
    case "python":
     return PythonExample(componentName);
    case "java":
      return JavaExample(componentName);
    case "csharp":
      return CSharpExample(componentName);
    case "php":
      return PHPExample(componentName);
    case "ruby":
      return RubyExample(componentName);
    case "scala":
      return ScalaExample(componentName);
    case "kotlin":
      return KotlinExample(componentName);
    case "dart":
      return DartExample(componentName);
    case "r":
      return RExample(componentName);
    case "cpp":
      return CPPExample(componentName);
    case "go":
      return GoExample(componentName);
    case "rust":
      return RustExample(componentName);
    case "swift":
      return SwiftExample(componentName);
    default:
      // Fallback to TypeScript for unsupported languages
      return generateExamplePage(componentName, "typescript");
  }
}
