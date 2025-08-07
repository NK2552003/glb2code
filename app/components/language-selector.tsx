import { Languages } from "lucide-react";
import { LanguageId, LANGUAGES } from "../types/constant";

export default function LanguageSelector({
  selectedLanguage,
  onChange,
}: {
  selectedLanguage: LanguageId;
  onChange: (language: LanguageId) => void;
}) {
  const groups = Array.from(new Set(LANGUAGES.map((lang) => lang.group)));
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Languages className="w-4 h-4 text-purple-400" />
        <select
          value={selectedLanguage}
          onChange={(e) => onChange(e.target.value as LanguageId)}
          className="bg-[#252526] text-white px-3 py-1.5 rounded border border-[#3c3c3c] focus:border-purple-500 outline-none text-sm appearance-none pr-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%239CA3AF%22><path d=%22M7 10l5 5 5-5z%22/></svg>')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem] cursor-pointer"
        >
          {groups.map((group) => (
            <optgroup key={group} label={group}>
              {LANGUAGES.filter((lang) => lang.group === group).map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );
}
