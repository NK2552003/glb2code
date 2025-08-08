'use client';

import React from 'react';
import { Upload } from 'lucide-react';

export default function UploadButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-200 hover:bg-indigo-500/15 transition-colors"
    >
      <Upload className="h-4 w-4" />
      Convert other formats to .glb
    </button>
  );
}
