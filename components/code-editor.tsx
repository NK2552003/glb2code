'use client';

import React, { useEffect, useMemo, useState } from 'react';

import prettier from 'prettier/standalone';
import babelPlugin from 'prettier/plugins/babel';
import typescriptPlugin from 'prettier/plugins/typescript';

import Editor from '@monaco-editor/react';
import type { LanguageId } from '@/types/constant';

export default function CodeEditor({
  code,
  languageId,
}: {
  code: string;
  languageId: LanguageId;
}) {
  const [formatted, setFormatted] = useState(code);

  const parser = useMemo(
    () => (languageId === 'typescript' ? 'typescript' : 'babel'),
    [languageId]
  );

useEffect(() => {
  const formatCode = async () => {
    try {
      const result = await prettier.format(code, {
        parser,
        plugins: [babelPlugin, typescriptPlugin],
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
      });
      setFormatted(result.trim());
    } catch {
      setFormatted(code);
    }
  };

  formatCode();
}, [code, parser]);

  const monacoLanguage = languageId === 'typescript' ? 'typescript' : 'javascript';

  const defineTheme = (monaco: any) => {
    monaco.editor.defineTheme('v0-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: '', background: '0B0B0F' },
        { token: 'keyword', foreground: 'C084FC' },
        { token: 'number', foreground: '93C5FD' },
        { token: 'string', foreground: '86EFAC' },
        { token: 'type', foreground: 'FCA5A5' },
      ],
      colors: {
        'editor.background': '#0B0B0F',
        'editor.lineHighlightBackground': '#12121A',
        'editorCursor.foreground': '#F472B6',
        'editor.selectionBackground': '#6D28D933',
        'editorLineNumber.foreground': '#49506B',
        'editorGutter.background': '#0B0B0F',
      },
    });
  };

  return (
    <Editor
      value={formatted}
      language={monacoLanguage}
      theme="v0-dark"
      beforeMount={defineTheme}
      options={{
        readOnly: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 13,
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        lineHeight: 20,
        wordWrap: 'on',
        smoothScrolling: true,
        automaticLayout: true,
      }}
      height="60vh"
    />
  );
}
