export function sanitizeName(name: string): string {
  // Replace invalid characters with underscores
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

  return safeName;
}
