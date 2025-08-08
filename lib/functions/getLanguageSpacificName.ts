import { LanguageId } from "@/types/constant";

export function getLanguageSpecificName(name: string, languageId: LanguageId): string {
  // First sanitize the name
  let safeName = name.replace(/[^a-zA-Z0-9_]/g, "_");
  // Ensure it starts with a letter
  if (!/^[a-zA-Z_]/.test(safeName)) {
    safeName = "_" + safeName;
  }
  // Handle reserved keywords
  const reservedKeywords = [
    "default",
    "function",
    "class",
    "export",
    "import",
    "let",
    "const",
    "var",
    "continue",
    "break",
    "case",
  ];
  if (reservedKeywords.includes(safeName.toLowerCase())) {
    safeName = "_" + safeName;
  }

  switch (languageId) {
    case "go":
    case "java":
    case "csharp":
    case "scala":
    case "kotlin":
    case "ruby":
    case "cpp":
    case "rust":
    case "swift":
    case "dart":
      // Convert to PascalCase (MyMaterialName)
      return safeName.replace(/(^|_)(\w)/g, (_, _1, c) => c.toUpperCase());

    case "typescript":
    case "javascript":
      // Convert to camelCase (myMaterialName)
      return (
        safeName.charAt(0).toLowerCase() +
        safeName.slice(1).replace(/(_)(\w)/g, (_, _1, c) => c.toUpperCase())
      );

    case "python":
      // Convert to CamelCase (MyMaterialName)
      return safeName.replace(/(^|_)(\w)/g, (_, _1, c) => c.toUpperCase());

    case "php":
      // For PHP, class names are typically CamelCase
      return safeName.replace(/(^|_)(\w)/g, (_, _1, c) => c.toUpperCase());

    case "r":
      // For R, function names are typically snake_case
      return safeName.toLowerCase().replace(/[^a-z0-9]/g, "_");

    default:
      // For other languages, just capitalize the first letter
      return safeName.charAt(0).toUpperCase() + safeName.slice(1);
  }
}