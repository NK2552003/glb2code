import { ChevronDown, ChevronRight, Folder, FileText, File} from "lucide-react";
import { LanguageId, LANGUAGES } from "@/types/constant";
import { ProjectStructure } from "@/types/glb-convertor";

export default function FileTree({
  projectStructure,
  selectedLanguage,
  onSelectFile,
  expandedFolders,
  toggleFolder,
  activeFile,
}: {
  projectStructure: ProjectStructure | null;
  selectedLanguage: LanguageId;
  onSelectFile: (path: string, content: string) => void;
  expandedFolders: Record<string, boolean>;
  toggleFolder: (folder: string) => void;
  activeFile: string | null;
}) {
  if (!projectStructure) return null;

  const lang = LANGUAGES.find((l) => l.id === selectedLanguage);
  if (!lang) return null;

  const getIcon = (fileName: string) => {
    if (fileName.includes("Geometry")) return "text-cyan-400";
    if (fileName.includes("index")) return "text-green-400";
    if (fileName.includes("meshes")) return "text-cyan-400";
    if (fileName.includes("geometries")) return "text-cyan-400";
    if (fileName.includes("materials")) return "text-orange-400";
    if (fileName.includes("page")) return "text-purple-400";
    return "text-white";
  };

  return (
    <div className="text-sm">
      <div
        className="flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded"
        onClick={() => toggleFolder("components")}
      >
        {expandedFolders.components ? (
          <ChevronDown className="w-3 h-3 mr-1 text-[#C5C5C5]" />
        ) : (
          <ChevronRight className="w-3 h-3 mr-1 text-[#C5C5C5]" />
        )}
        <Folder className="w-4 h-4 mr-2 text-yellow-400" />
        <span className="text-[#C5C5C5]">components</span>
      </div>

      {expandedFolders.components && (
        <div className="pl-4">
          <div
            className="flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded"
            onClick={() => toggleFolder("componentName")}
          >
            {expandedFolders.componentName ? (
              <ChevronDown className="w-3 h-3 mr-1 text-[#C5C5C5]" />
            ) : (
              <ChevronRight className="w-3 h-3 mr-1 text-[#C5C5C5]" />
            )}
            <Folder className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-[#C5C5C5]">Model</span>
          </div>

          {expandedFolders.componentName && (
            <div className="pl-4">
              <div
                className={`flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${
                  activeFile === "index" ? "bg-[#2A2D2E]" : ""
                }`}
                onClick={() =>
                  onSelectFile("index", projectStructure.indexContent)
                }
              >
                <FileText className={`w-4 h-4 mr-2 ${getIcon("index")}`} />
                <span className="text-[#C5C5C5]">index.{lang.extension}</span>
              </div>

              <div
                className="flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded"
                onClick={() => toggleFolder("geometries")}
              >
                {expandedFolders.geometries ? (
                  <ChevronDown className="w-3 h-3 mr-1 text-[#C5C5C5]" />
                ) : (
                  <ChevronRight className="w-3 h-3 mr-1 text-[#C5C5C5]" />
                )}
                <Folder className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-[#C5C5C5]">geometries</span>
              </div>

              {expandedFolders.geometries && (
                <div className="pl-4">
                  {projectStructure.geometries?.map((geometry, i) => (
                    <div
                      key={i}
                      className={`flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${
                        activeFile === `geometry-${i}` ? "bg-[#2A2D2E]" : ""
                      }`}
                      onClick={() =>
                        onSelectFile(`geometry-${i}`, geometry.content)
                      }
                    >
                      <File className={`w-4 h-4 mr-2 ${getIcon(geometry.name)}`} />
                      <span className="text-[#C5C5C5]">
                        {geometry.name}Geometry.{lang.geometryExtension}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div
                className="flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded"
                onClick={() => toggleFolder("meshes")}
              >
                {expandedFolders.meshes ? (
                  <ChevronDown className="w-3 h-3 mr-1 text-[#C5C5C5]" />
                ) : (
                  <ChevronRight className="w-3 h-3 mr-1 text-[#C5C5C5]" />
                )}
                <Folder className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-[#C5C5C5]">meshes</span>
              </div>

              {expandedFolders.meshes && (
                <div className="pl-4">
                  {projectStructure.meshes.map((mesh, i) => (
                    <div
                      key={i}
                      className={`flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${
                        activeFile === `mesh-${i}` ? "bg-[#2A2D2E]" : ""
                      }`}
                      onClick={() => onSelectFile(`mesh-${i}`, mesh.content)}
                    >
                      <File className={`w-4 h-4 mr-2 ${getIcon(mesh.name)}`} />
                      <span className="text-[#C5C5C5]">
                        {mesh.name}.{lang.extension}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div
                className="flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded"
                onClick={() => toggleFolder("materials")}
              >
                {expandedFolders.materials ? (
                  <ChevronDown className="w-3 h-3 mr-1 text-[#C5C5C5]" />
                ) : (
                  <ChevronRight className="w-3 h-3 mr-1 text-[#C5C5C5]" />
                )}
                <Folder className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-[#C5C5C5]">materials</span>
              </div>

              {expandedFolders.materials && (
                <div className="pl-4">
                  {projectStructure.materials.map((material, i) => (
                    <div
                      key={i}
                      className={`flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${
                        activeFile === `material-${i}` ? "bg-[#2A2D2E]" : ""
                      }`}
                      onClick={() =>
                        onSelectFile(`material-${i}`, material.content)
                      }
                    >
                      <File
                        className={`w-4 h-4 mr-2 ${getIcon(material.name)}`}
                      />
                      <span className="text-[#C5C5C5]">
                        {material.name}.{lang.extension}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div
        className="flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded"
        onClick={() => toggleFolder("app")}
      >
        {expandedFolders.app ? (
          <ChevronDown className="w-3 h-3 mr-1 text-[#C5C5C5]" />
        ) : (
          <ChevronRight className="w-3 h-3 mr-1 text-[#C5C5C5]" />
        )}
        <Folder className="w-4 h-4 mr-2 text-purple-400" />
        <span className="text-[#C5C5C5]">app</span>
      </div>

      {expandedFolders.app && (
        <div className="pl-4">
          <div
            className="flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded"
            onClick={() => toggleFolder("modelPage")}
          >
            {expandedFolders.modelPage ? (
              <ChevronDown className="w-3 h-3 mr-1 text-[#C5C5C5]" />
            ) : (
              <ChevronRight className="w-3 h-3 mr-1 text-[#C5C5C5]" />
            )}
            <Folder className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-[#C5C5C5]">model-page</span>
          </div>

          {expandedFolders.modelPage && (
            <div className="pl-4">
              <div
                className={`flex items-center px-3 py-1 hover:bg-[#2A2D2E] cursor-pointer rounded ${
                  activeFile === "examplePage" ? "bg-[#2A2D2E]" : ""
                }`}
                onClick={() =>
                  onSelectFile(
                    "examplePage",
                    projectStructure.examplePageContent
                  )
                }
              >
                <FileText className={`w-4 h-4 mr-2 ${getIcon("page")}`} />
                <span className="text-[#C5C5C5]">page.{lang.extension}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}