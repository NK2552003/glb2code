import { Copy } from "lucide-react";
import { LanguageId, LANGUAGES } from "@/types/constant";

export default function CodeEditor({
  code,
  languageId,
}: {
  code: string;
  languageId: LanguageId;
}) {

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied to clipboard");
  });
};

  const language = LANGUAGES.find((lang) => lang.id === languageId);
  const lines = code.split("\n");
  const getSyntaxClass = (line: string): string => {
    if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
      return "text-[#6A9955]"; // Comments
    }
    if (
      line.includes("import") ||
      line.includes("from") ||
      line.includes("require")
    ) {
      return "text-[#C586C0]"; // Imports
    }
    if (
      line.includes("function") ||
      line.includes("def") ||
      line.includes("class")
    ) {
      return "text-[#569CD6]"; // Keywords
    }
    if (
      line.includes("const") ||
      line.includes("let") ||
      line.includes("var") ||
      line.includes("final") ||
      line.includes("static") ||
      line.includes("public")
    ) {
      return "text-[#9CDCFE]"; // Variables
    }
    if (
      line.includes("{") ||
      line.includes("}") ||
      line.includes("[") ||
      line.includes("]") ||
      line.includes("(") ||
      line.includes(")")
    ) {
      return "text-[#D4D4D4]"; // Brackets
    }
    if (
      line.includes("=") ||
      line.includes("+") ||
      line.includes("-") ||
      line.includes("*") ||
      line.includes("/") ||
      line.includes("%")
    ) {
      return "text-[#D4D4D4]"; // Operators
    }
    if (line.includes('"') || line.includes("'") || line.includes("`")) {
      return "text-[#CE9178]"; // Strings
    }
    if (!isNaN(Number(line.trim())) || line.trim().match(/0x[0-9A-Fa-f]+/)) {
      return "text-[#B5CEA8]"; // Numbers
    }
    return "text-[#D4D4D4]"; // Default
  };

  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden font-mono text-sm h-full flex flex-col">
      <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-[#333333]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="text-[#CCCCCC] text-xs flex items-center gap-2">
          <span>{language?.name}</span>
          <span className="text-[#858585]">●</span>
          <span className="text-[#858585]">{lines.length} lines</span>
          <button
            onClick={() => copyToClipboard(code)}
            className="ml-2 p-1 hover:bg-[#404040] rounded"
            title="Copy to clipboard"
          >
            <Copy className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="flex">
          <div className="text-[#858585] w-8 select-none flex-shrink-0 pr-4 text-right">
            {lines.map((_, i) => (
              <div key={i} className="select-none">
                {i + 1}
              </div>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            {lines.map((line, i) => (
              <div key={i} className={`whitespace-pre ${getSyntaxClass(line)}`}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}