'use client';

import React from 'react';
import { LANGUAGES, type LanguageId } from '@/types/constant';

export default function LanguageSelector({
  selectedLanguage,
  onChange,
}: {
  selectedLanguage: LanguageId;
  onChange: (id: LanguageId) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-slate-400">Language</label>
      <select
        className="rounded-md border border-white/10 bg-[#0E0E13] px-2 py-1 text-sm text-slate-200 outline-none focus:border-fuchsia-500"
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value as LanguageId)}
      >
        {LANGUAGES.map((l) => (
          <option value={l.id} key={l.id}>
            {l.title}
          </option>
        ))}
      </select>
    </div>
  );
}
