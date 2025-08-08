export function formatArrayData(
  data: number[],
  languageId: LanguageId,
  chunkSize: number = 1000
): string {
  if (data.length <= chunkSize) {
    // Use language-specific array syntax only if needed
    switch (languageId) {
      case "typescript":
      case "javascript":
        return `[${data.join(", ")}]`;

      case "python":
        return `[${data.join(", ")}]`;

      case "java":
      case "csharp":
        return `new float[]{${data.join("f, ")}f}`;

      case "cpp":
        return `{${data.join("f, ")}f}`;

      case "go":
        return `[]float32{${data.join(", ")}}`;

      case "rust":
        return `vec![${data.join(", ")}]`;

      case "swift":
        return `[${data.join(", ")}]`;

      default:
        return `[${data.join(", ")}]`;
    }
  }

  // Large arrays: use appropriate memory-efficient syntax
  switch (languageId) {
    case "typescript":
    case "javascript":
      return `new Float32Array([${data.join(", ")}])`;

    case "python":
      return `np.array([${data.join(", ")}], dtype=np.float32)`;

    case "java":
    case "csharp":
      return `new float[]{${data.join("f, ")}f}`;

    case "cpp":
      return `{${data.join("f, ")}f}`;

    case "go":
      return `[]float32{${data.join(", ")}}`;

    case "rust":
      return `vec![${data.join(", ")}]`;

    case "swift":
      return `[${data.join(", ")}]`;

    default:
      return `[${data.join(", ")}]`;
  }
}
