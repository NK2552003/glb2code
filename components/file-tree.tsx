'use client';

import React from 'react';
import { ChevronDown, ChevronRight, FileIcon, FolderIcon } from 'lucide-react';
import type { ProjectStructure } from '@/types/glb-convertor';
import { LANGUAGES, type LanguageId } from '@/types/constant';

function Row({
  icon,
  label,
  selected,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm ${
        selected ? 'bg-fuchsia-500/15 text-fuchsia-200' : 'text-slate-300 hover:bg-white/5 hover:text-white'
      }`}
    >
      {icon}
      <span className="truncate">{label}</span>
    </div>
  );
}

export default function FileTree({
  projectStructure,
  selectedLanguage,
  onSelectFile,
  expandedFolders,
  toggleFolder,
  activeFile,
  componentName,
}: {
  projectStructure: ProjectStructure;
  selectedLanguage: LanguageId;
  onSelectFile: (path: string, content: string) => void;
  expandedFolders: Record<string, boolean>;
  toggleFolder: (folder: string) => void;
  activeFile: string | null;
  componentName: string;
}) {
  const lang = LANGUAGES.find((l) => l.id === selectedLanguage)!;

  return (
    <div className="space-y-1">
      {/* components */}
      <div>
        <div
          className="flex items-center gap-1 px-2 py-1.5 text-xs uppercase tracking-wider text-slate-400 cursor-pointer"
          onClick={() => toggleFolder('components')}
        >
          {expandedFolders.components ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          <span>components</span>
        </div>

        {expandedFolders.components && (
          <div className="ml-4">
            {/* Component folder */}
            <div className="mb-1">
              <div className="flex items-center gap-1 px-2 py-1.5 text-xs uppercase tracking-wider text-slate-400 cursor-pointer"
                   onClick={() => toggleFolder('componentName')}>
                {expandedFolders.componentName ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                <FolderIcon className="h-4 w-4 text-amber-400" />
                <span>{componentName}</span>
              </div>

              {expandedFolders.componentName && (
                <div className="ml-4 space-y-1">
                  <Row
                    icon={<FileIcon className="h-4 w-4 text-slate-400" />}
                    label={`index.${lang.extension}`}
                    selected={activeFile === 'index'}
                    onClick={() => onSelectFile('index', projectStructure.indexContent)}
                  />

                  {/* geometries */}
                  <div>
                    <div
                      className="flex items-center gap-1 px-2 py-1.5 text-xs uppercase tracking-wider text-slate-400 cursor-pointer"
                      onClick={() => toggleFolder('geometries')}
                    >
                      {expandedFolders.geometries ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                      <span>geometries</span>
                    </div>
                    {expandedFolders.geometries && (
                      <div className="ml-4">
                        {projectStructure.geometries?.length ? (
                          projectStructure.geometries.map((g) => (
                            <Row
                              key={g.name}
                              icon={<FileIcon className="h-4 w-4 text-slate-400" />}
                              label={`${g.name}Geometry.${lang.geometryExtension}`}
                              selected={activeFile === `geometry:${g.name}`}
                              onClick={() => onSelectFile(`geometry:${g.name}`, g.content)}
                            />
                          ))
                        ) : (
                          <div className="px-2 py-1 text-xs text-slate-500">Empty</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* meshes */}
                  <div>
                    <div
                      className="flex items-center gap-1 px-2 py-1.5 text-xs uppercase tracking-wider text-slate-400 cursor-pointer"
                      onClick={() => toggleFolder('meshes')}
                    >
                      {expandedFolders.meshes ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                      <span>meshes</span>
                    </div>
                    {expandedFolders.meshes && (
                      <div className="ml-4">
                        {projectStructure.meshes.map((m) => (
                          <Row
                            key={m.name}
                            icon={<FileIcon className="h-4 w-4 text-slate-400" />}
                            label={`${m.name}.${lang.extension}`}
                            selected={activeFile === `mesh:${m.name}`}
                            onClick={() => onSelectFile(`mesh:${m.name}`, m.content)}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* materials */}
                  <div>
                    <div
                      className="flex items-center gap-1 px-2 py-1.5 text-xs uppercase tracking-wider text-slate-400 cursor-pointer"
                      onClick={() => toggleFolder('materials')}
                    >
                      {expandedFolders.materials ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                      <span>materials</span>
                    </div>
                    {expandedFolders.materials && (
                      <div className="ml-4">
                        {projectStructure.materials.map((m) => (
                          <Row
                            key={m.name}
                            icon={<FileIcon className="h-4 w-4 text-slate-400" />}
                            label={`${m.name}.${lang.extension}`}
                            selected={activeFile === `material:${m.name}`}
                            onClick={() => onSelectFile(`material:${m.name}`, m.content)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* app */}
      <div>
        <div
          className="flex items-center gap-1 px-2 py-1.5 text-xs uppercase tracking-wider text-slate-400 cursor-pointer"
          onClick={() => toggleFolder('app')}
        >
          {expandedFolders.app ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          <span>app</span>
        </div>
        {expandedFolders.app && (
          <div className="ml-4">
            <div
              className="flex items-center gap-1 px-2 py-1.5 text-xs uppercase tracking-wider text-slate-400 cursor-pointer"
              onClick={() => toggleFolder('modelPage')}
            >
              {expandedFolders.modelPage ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
              <FolderIcon className="h-4 w-4 text-amber-400" />
              <span>{`${componentName.toLowerCase()}-page`}</span>
            </div>
            {expandedFolders.modelPage && (
              <div className="ml-4">
                <Row
                  icon={<FileIcon className="h-4 w-4 text-slate-400" />}
                  label={`page.${lang.extension}`}
                  selected={activeFile === 'examplePage'}
                  onClick={() => onSelectFile('examplePage', projectStructure.examplePageContent)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
