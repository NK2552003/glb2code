"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import {
  Download,
  Upload,
  Eye,
  Code,
  Loader2,
  AlertCircle,
  File,
  Folder,
  Layout,
  Terminal,
} from "lucide-react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import JSZip from "jszip";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { saveAs } from "file-saver";
import { generateProjectStructure } from "@/app/lib/glb-converter";
import type {
  ProjectStructure
} from "@/app/types/glb-convertor";
import UploadButton from "../components/uploadbutton";
import { LanguageId, LANGUAGES } from "../types/constant";
import CodeEditor from "../components/code-editor";
import LanguageSelector from "../components/language-selector";
import FileTree from "../components/file-tree";
import ModelPreview from "../components/model-preview";


export default function GLBConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [modelUrl, setModelUrl] = useState("");
  const [projectStructure, setProjectStructure] =
    useState<ProjectStructure | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"upload" | "preview" | "code">(
    "upload"
  );
  const [gltfData, setGltfData] = useState<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  // Display options
  const [displayMode, setDisplayMode] = useState<
    "original" | "wireframe" | "solid" | "normals" | "depth" | "points"
  >("original");
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [showAxes, setShowAxes] = useState(false);
  const [componentName, setComponentName] = useState("Model");
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageId>("typescript");
  const [expandedFolders, setExpandedFolders] = useState({
    components: true,
    componentName: true,
    geometries: false,
    meshes: true,
    materials: false,
    app: true,
    modelPage: true,
  });
  const [activeFile, setActiveFile] = useState<string | null>("index");
  const [currentFileContent, setCurrentFileContent] = useState("");

  useEffect(() => {
    if (projectStructure) {
      setCurrentFileContent(projectStructure.indexContent);
    }
  }, [projectStructure]);

  const toggleFolder = (folder: keyof typeof expandedFolders) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  const handleFileSelect = (path: string, content: string) => {
    setActiveFile(path);
    setCurrentFileContent(content);
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.name.endsWith(".glb")) {
      setFile(uploadedFile);
      setError("");
      setIsLoading(true);
      setProgress(0);
      try {
        // Create object URL for preview
        const url = URL.createObjectURL(uploadedFile);
        setModelUrl(url);
        // Load GLTF with progress tracking for large files
        await loadGLTFWithProgress(url, uploadedFile);
        // Generate component name from filename
        const name = uploadedFile.name
          .replace(".glb", "")
          .replace(/[^a-zA-Z0-9]/g, "");
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        setComponentName(capitalizedName);
        setActiveTab("preview");
      } catch (err) {
        console.error("Error loading GLTF", err);
        setError(
          "Error processing GLB file. The file may be too large or corrupted."
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      setError("Please upload a valid .glb file");
    }
  };

  const loadGLTFWithProgress = async (
    url: string,
    file: File
  ): Promise<void> => {
    setIsProcessing(true);
    setProgress(0);
    return new Promise<void>((resolve, reject) => {
      try {
        // Set up DRACO decoder for compressed models (common in large GLBs)
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath(
          "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
        );
        // Track progress for large files
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function () {
          if (xhr.status === 200) {
            try {
              // Process the GLB data
              const loader = new GLTFLoader();
              loader.setDRACOLoader(dracoLoader);
              loader.parse(
                xhr.response,
                "",
                (gltf: any) => {
                  // Store GLTF data for transpilation
                  setGltfData(gltf);
                  // Generate project structure
                  const structure = generateProjectStructure(
                    gltf,
                    componentName,
                    displayMode,
                    selectedLanguage
                  );
                  setProjectStructure(structure);
                  setIsProcessing(false);
                  resolve();
                },
                (error: any) => {
                  console.error("Error parsing GLTF", error);
                  setIsProcessing(false);
                  reject(error);
                }
              );
            } catch (parseError) {
              console.error("Error parsing GLTF data", parseError);
              setIsProcessing(false);
              reject(parseError);
            }
          } else {
            reject(new Error(`Failed to load file: ${xhr.statusText}`));
          }
        };
        xhr.onprogress = function (event) {
          if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            setProgress(percentComplete);
          }
        };
        xhr.onerror = function () {
          reject(new Error("Network error occurred while loading the file"));
        };
        xhr.send();
      } catch (err) {
        setIsProcessing(false);
        reject(err);
      }
    });
  };

  // Add this useEffect hook to regenerate code when language changes
  useEffect(() => {
    if (gltfData && componentName && activeTab === "code") {
      setIsProcessing(true);
      setProgress(0);
      try {
        console.log(
          `Regenerating project structure for ${selectedLanguage}...`
        );
        // Generate project structure with current settings
        const structure = generateProjectStructure(
          gltfData,
          componentName,
          displayMode,
          selectedLanguage
        );
        setProjectStructure(structure);
        setProgress(100);
        console.log("Project structure regenerated successfully");
      } catch (err) {
        console.error("Error regenerating project structure", err);
        setError(
          "Failed to regenerate project structure for the selected language"
        );
      } finally {
        setIsProcessing(false);
      }
    }
  }, [selectedLanguage, gltfData, componentName, displayMode, activeTab]);

  const downloadZip = (includeExamplePage: boolean = false) => {
    if (!projectStructure) return;
    setIsProcessing(true);
    try {
      const zip = new JSZip();
      const lang = LANGUAGES.find((l) => l.id === selectedLanguage);
      if (!lang) return;
      // Create folder structure
      const componentFolder = zip.folder(`components/${componentName}`);
      const meshesFolder = componentFolder?.folder("meshes");
      const geometriesFolder = componentFolder?.folder("geometries");
      const materialsFolder = componentFolder?.folder("materials");
      // Add index file
      componentFolder?.file(
        `index.${lang.extension}`,
        projectStructure.indexContent
      );
      // Add geometry files
      projectStructure.geometries?.forEach((geometry) => {
        geometriesFolder?.file(
          `${geometry.name}Geometry.${lang.geometryExtension}`,
          geometry.content
        );
      });
      // Add mesh files
      projectStructure.meshes.forEach((mesh) => {
        meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
      });
      // Add material files
      projectStructure.materials.forEach((material) => {
        materialsFolder?.file(
          `${material.name}.${lang.extension}`,
          material.content
        );
      });
      // Add example page if requested
      if (includeExamplePage) {
        const appFolder = zip.folder("app");
        const modelPageFolder = appFolder?.folder(
          `${componentName.toLowerCase()}-page`
        );
        modelPageFolder?.file(
          `page.${lang.extension}`,
          projectStructure.examplePageContent
        );
      }
      // Generate and download zip
      zip.generateAsync({ type: "blob" }).then((content) => {
        const suffix = includeExamplePage ? "-with-example" : "";
        saveAs(content, `${componentName}-${selectedLanguage}${suffix}.zip`);
      });
    } catch (err) {
      console.error("Error generating ZIP", err);
      setError("Failed to generate ZIP file. The model might be too large.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadCurrentView = () => {
    if (!gltfData) return;
    setIsProcessing(true);
    try {
      // Generate project structure with current display mode
      const structure = generateProjectStructure(
        gltfData,
        componentName,
        displayMode,
        selectedLanguage
      );
      const zip = new JSZip();
      const lang = LANGUAGES.find((l) => l.id === selectedLanguage);
      if (!lang) return;
      // Create folder structure
      const componentFolder = zip.folder(
        `components/${componentName}-${displayMode}`
      );
      const meshesFolder = componentFolder?.folder("meshes");
      const geometriesFolder = componentFolder?.folder("geometries");
      const materialsFolder = componentFolder?.folder("materials");
      // Add index file
      componentFolder?.file(`index.${lang.extension}`, structure.indexContent);
      // Add geometry files
      structure.geometries?.forEach((geometry) => {
        geometriesFolder?.file(
          `${geometry.name}Geometry.${lang.geometryExtension}`,
          geometry.content
        );
      });
      // Add mesh files
      structure.meshes.forEach((mesh) => {
        meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
      });
      // Add material files
      structure.materials.forEach((material) => {
        materialsFolder?.file(
          `${material.name}.${lang.extension}`,
          material.content
        );
      });
      // Add example page
      const appFolder = zip.folder("app");
      const modelPageFolder = appFolder?.folder(
        `${componentName.toLowerCase()}-${displayMode}-page`
      );
      modelPageFolder?.file(
        `page.${lang.extension}`,
        structure.examplePageContent
      );
      // Generate and download zip
      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(
          content,
          `${componentName}-${displayMode}-${selectedLanguage}.zip`
        );
      });
    } catch (err) {
      console.error("Error generating ZIP for current view", err);
      setError(
        `Failed to generate ZIP for ${displayMode} view. The model might be too large.`
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadModel = () => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-slate-100">
      <div className="flex h-[calc(100vh-2rem)]">
        {/* Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#3c3c3c] flex flex-col">
          <div className="p-3 border-b border-[#3c3c3c]">
            <h2 className="text-sm font-medium text-[#CCCCCC] flex items-center">
              <Folder className="w-4 h-4 mr-2 text-yellow-400" />
              EXPLORER
            </h2>
          </div>

          {activeTab === "code" && projectStructure ? (
            <div className="flex-1 overflow-y-auto p-1">
              <FileTree
                projectStructure={projectStructure}
                selectedLanguage={selectedLanguage}
                onSelectFile={handleFileSelect}
                expandedFolders={expandedFolders}
                toggleFolder={toggleFolder as (folder: string) => void}
                activeFile={activeFile}
              />
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-3">
              <div className="text-[#858585] text-sm">
                {activeTab === "upload" ? (
                  <div className="space-y-2">
                    <p>Upload a GLB file to get started.</p>
                    <p>Supported file: .glb</p>
                    <p className="text-yellow-400">
                      {`If you have a different 3D model format (like .obj, .fbx, .stl), please convert it to <strong>.glb</strong> before uploading.`}
                    </p>
                    <UploadButton
                      onClick={() =>
                        window.open(
                          "https://imagetostl.com/convert/file/obj/to/glb"
                        )
                      }
                    />
                  </div>
                ) : activeTab === "preview" ? (
                  <div className="space-y-2">
                    <p>Preview your 3D model with different display modes.</p>
                    <p>Use the controls to rotate, zoom, and pan.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p>
                      Select a file from the project structure to view its code.
                    </p>
                    <p>
                      Use the language selector to switch between programming
                      languages.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="p-3 border-t border-[#3c3c3c]">
            <div className="text-xs text-[#858585]">
              {activeTab === "code" && projectStructure ? (
                <div className="flex items-center">
                  <Folder className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {componentName}
                  </span>
                </div>
              ) : (
                <div className="text-[#858585]">No project loaded</div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navigation Tabs */}
          <div className="bg-[#2D2D2D] border-b border-[#3c3c3c] h-10 flex items-center px-4">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("upload")}
                className={`text-sm flex items-center gap-1 px-2 py-1 rounded ${
                  activeTab === "upload"
                    ? "bg-[#3C3C3C] text-[#FFFFFF]"
                    : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF]"
                }`}
              >
                <Upload className="w-3 h-3" />
                Upload
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                disabled={!file}
                className={`text-sm flex items-center gap-1 px-2 py-1 rounded ${
                  activeTab === "preview" && file
                    ? "bg-[#3C3C3C] text-[#FFFFFF]"
                    : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF] disabled:opacity-50"
                }`}
              >
                <Eye className="w-3 h-3" />
                Preview
              </button>
              <button
                onClick={() => setActiveTab("code")}
                disabled={!projectStructure}
                className={`text-sm flex items-center gap-1 px-2 py-1 rounded ${
                  activeTab === "code" && projectStructure
                    ? "bg-[#3C3C3C] text-[#FFFFFF]"
                    : "text-[#B8B8B8] hover:bg-[#3C3C3C] hover:text-[#FFFFFF] disabled:opacity-50"
                }`}
              >
                <Code className="w-3 h-3" />
                Code
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Error Display */}
            {error && (
              <div className="bg-[#6A0000] border border-[#FF5252] rounded p-3 mb-4 max-w-2xl mx-auto">
                <div className="flex items-center">
                  <AlertCircle className="w-4 h-4 text-[#FF5252] mr-2" />
                  <span className="text-[#FF5252] text-sm">{error}</span>
                </div>
              </div>
            )}

            {/* Upload Tab */}
            {activeTab === "upload" && (
              <div className="max-w-2xl mx-auto mt-8">
                <div className="bg-[#252526] rounded p-8 border border-[#3c3c3c]">
                  <div className="text-center">
                    <div
                      className={`border-2 border-dashed rounded p-12 transition-colors ${
                        isDragging
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-[#3c3c3c] hover:border-purple-500"
                      }`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(false);
                        const droppedFile = e.dataTransfer.files?.[0];
                        if (droppedFile && droppedFile.name.endsWith(".glb")) {
                          const fakeEvent = {
                            target: { files: [droppedFile] },
                          } as unknown as React.ChangeEvent<HTMLInputElement>;
                          handleFileUpload(fakeEvent);
                        } else {
                          setError("Please drop a valid .glb file");
                        }
                      }}
                    >
                      <Upload className="w-12 h-12 text-[#858585] mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-[#CCCCCC] mb-2">
                        Upload your GLB model
                      </h3>
                      <p className="text-[#858585] mb-6">
                        Drop your .glb file here or click to browse
                      </p>
                      <input
                        type="file"
                        accept=".glb"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        disabled={isLoading}
                      />
                      <label
                        htmlFor="file-upload"
                        className={`bg-[#0E639C] hover:bg-[#107FC9] text-white px-4 py-2 rounded cursor-pointer transition-colors inline-block ${
                          isLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Choose File"
                        )}
                      </label>
                    </div>
                  </div>
                  {/* Progress Bar for Large Files */}
                  {(isLoading || isProcessing) && (
                    <div className="mt-6">
                      <div className="flex justify-between mb-1">
                        <span className="text-[#CCCCCC] text-sm">
                          {isProcessing
                            ? "Processing model..."
                            : "Loading file..."}
                        </span>
                        <span className="text-[#CCCCCC] text-sm">
                          {Math.round(progress)}%
                        </span>
                      </div>
                      <div className="w-full bg-[#3c3c3c] rounded h-1.5">
                        <div
                          className="bg-[#0E70C0] h-1.5 rounded transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-[#858585] text-xs mt-2">
                        {progress < 100
                          ? "Loading large model. This may take a few moments..."
                          : "Optimizing model data for transpilation..."}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Preview Tab */}
            {activeTab === "preview" && modelUrl && (
              <div className="max-w-6xl mx-auto">
                <div className="bg-[#252526] rounded p-6 border border-[#3c3c3c]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-[#CCCCCC]">
                      3D Model Preview
                    </h3>
                    <div className="flex items-center gap-4">
                      {/* Display Mode Controls */}
                      <div className="flex items-center gap-2">
                        <label className="text-[#CCCCCC] text-sm">
                          Display Mode:
                        </label>
                        <select
                          value={displayMode}
                          onChange={(e) =>
                            setDisplayMode(e.target.value as any)
                          }
                          className="bg-[#3C3C3C] text-[#CCCCCC] px-2 py-1 rounded border border-[#3c3c3c] focus:border-purple-500 outline-none text-sm"
                        >
                          <option value="original">Original</option>
                          <option value="wireframe">Wireframe</option>
                          <option value="solid">Solid Color</option>
                          <option value="normals">Normals</option>
                          <option value="depth">Depth</option>
                          <option value="points">Point Cloud</option>
                        </select>
                      </div>
                      {/* Toggle Controls */}
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-[#CCCCCC] text-sm">
                          <input
                            type="checkbox"
                            checked={autoRotate}
                            onChange={(e) => setAutoRotate(e.target.checked)}
                            className="rounded border-[#3c3c3c] bg-[#3C3C3C] text-[#0E70C0] focus:ring-[#0E70C0]"
                          />
                          Auto Rotate
                        </label>
                        <label className="flex items-center gap-2 text-[#CCCCCC] text-sm">
                          <input
                            type="checkbox"
                            checked={showGrid}
                            onChange={(e) => setShowGrid(e.target.checked)}
                            className="rounded border-[#3c3c3c] bg-[#3C3C3C] text-[#0E70C0] focus:ring-[#0E70C0]"
                          />
                          Grid
                        </label>
                        <label className="flex items-center gap-2 text-[#CCCCCC] text-sm">
                          <input
                            type="checkbox"
                            checked={showAxes}
                            onChange={(e) => setShowAxes(e.target.checked)}
                            className="rounded border-[#3c3c3c] bg-[#3C3C3C] text-[#0E70C0] focus:ring-[#0E70C0]"
                          />
                          Axes
                        </label>
                      </div>
                      <button
                        onClick={downloadCurrentView}
                        disabled={isProcessing}
                        className={`bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ${
                          isProcessing ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <File className="w-4 h-4" />
                            Download {displayMode} Version
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  {/* Display Mode Description */}
                  <div className="mb-4">
                    <div className="bg-[#2D2D2D] rounded p-3">
                      <p className="text-[#858585] text-sm">
                        {displayMode === "original" &&
                          "Showing the original model with its materials and textures."}
                        {displayMode === "wireframe" &&
                          "Displaying the model as a wireframe structure showing the mesh geometry."}
                        {displayMode === "solid" &&
                          "Rendering the model with a uniform solid color material."}
                        {displayMode === "normals" &&
                          "Visualizing surface normals with color-coded directions (RGB = XYZ)."}
                        {displayMode === "depth" &&
                          "Showing depth information - closer surfaces appear lighter."}
                        {displayMode === "points" &&
                          "Displaying the model as a point cloud of vertices."}
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-[#1E1E1E] rounded overflow-hidden"
                    style={{ height: "500px" }}
                  >
                    <Canvas
                      camera={{ position: [0, 0, 5], fov: 50 }}
                      gl={{
                        powerPreference: "high-performance",
                        antialias: true,
                        alpha: true,
                      }}
                    >
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <pointLight position={[-10, -10, -10]} intensity={0.3} />
                      {/* Memory-optimized loading for large models */}
                      {modelUrl && (
                        <React.Suspense
                          fallback={
                            <Html center>
                              <div className="text-white bg-black/50 p-2 rounded">
                                <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                                Loading model...
                              </div>
                            </Html>
                          }
                        >
                          <ModelPreview
                            url={modelUrl}
                            displayMode={displayMode}
                            autoRotate={autoRotate}
                          />
                        </React.Suspense>
                      )}
                      {showGrid && (
                        <gridHelper args={[10, 10, "#444444", "#666666"]} />
                      )}
                      {showAxes && <axesHelper args={[2]} />}
                      <OrbitControls
                        enableZoom
                        enablePan
                        enableRotate
                        minDistance={0.1}
                        maxDistance={100}
                      />
                      <Environment preset="city" />
                    </Canvas>
                  </div>
                  <p className="text-[#858585] text-sm mt-4 text-center">
                    Use mouse to rotate, zoom, and pan around the model. Try
                    different display modes to analyze the model structure.
                  </p>
                </div>
              </div>
            )}

            {/* Code Tab - VS Code Style */}
            {activeTab === "code" && projectStructure && (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-medium text-[#CCCCCC]">
                      {activeFile
                        ? (activeFile === "index"
                            ? "index"
                            : activeFile === "examplePage"
                            ? "page"
                            : activeFile.includes("geometry")
                            ? "Geometry"
                            : activeFile.includes("mesh")
                            ? "Mesh"
                            : "Material") +
                          `.${
                            LANGUAGES.find((l) => l.id === selectedLanguage)
                              ?.extension || "ts"
                          }`
                        : "Code Editor"}
                    </h3>
                    <div className="flex items-center gap-2">
                      <LanguageSelector
                        selectedLanguage={selectedLanguage}
                        onChange={setSelectedLanguage}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => downloadZip(true)}
                      disabled={isProcessing}
                      className={`bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ${
                        isProcessing ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Layout className="w-4 h-4" />
                          Download Full Project
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => downloadZip(false)}
                      disabled={isProcessing}
                      className={`bg-[#0E639C] hover:bg-[#107FC9] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2 ${
                        isProcessing ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <File className="w-4 h-4" />
                          Download Component
                        </>
                      )}
                    </button>
                    <button
                      onClick={downloadModel}
                      className="bg-[#237A57] hover:bg-[#2B9348] text-white px-3 py-1.5 rounded transition-colors flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download GLB
                    </button>
                  </div>
                </div>

                <div className="flex-1 min-h-0">
                  <CodeEditor
                    code={currentFileContent}
                    languageId={selectedLanguage}
                  />
                </div>

                {/* Statistics Section - Now in a collapsible panel at the bottom */}
                <div className="mt-4 border-t border-[#3c3c3c] pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-medium text-[#CCCCCC] flex items-center">
                      <Terminal className="w-4 h-4 mr-2 text-purple-400" />
                      Model Statistics
                    </h4>
                    <div className="flex space-x-2">
                      <span className="text-xs text-[#858585]">
                        {file
                          ? (file.size / 1024 / 1024).toFixed(2) + " MB"
                          : "N/A"}{" "}
                        • {projectStructure.meshes.length} meshes
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-3 text-sm">
                    <div className="bg-[#2D2D2D] p-2 rounded">
                      <div className="text-[#858585]">Meshes</div>
                      <div className="font-medium text-[#CCCCCC]">
                        {projectStructure.meshes.length}
                      </div>
                    </div>
                    <div className="bg-[#2D2D2D] p-2 rounded">
                      <div className="text-[#858585]">Geometry Files</div>
                      <div className="font-medium text-[#CCCCCC]">
                        {projectStructure.geometries?.length || 0}
                      </div>
                    </div>
                    <div className="bg-[#2D2D2D] p-2 rounded">
                      <div className="text-[#858585]">Materials</div>
                      <div className="font-medium text-[#CCCCCC]">
                        {projectStructure.materials.length}
                      </div>
                    </div>
                    <div className="bg-[#2D2D2D] p-2 rounded">
                      <div className="text-[#858585]">Total Vertices</div>
                      <div className="font-medium text-[#CCCCCC]">
                        {projectStructure.totalVertices.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-[#2D2D2D] p-2 rounded">
                      <div className="text-[#858585]">Total Triangles</div>
                      <div className="font-medium text-[#CCCCCC]">
                        {projectStructure.totalTriangles.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-[#2D2D2D] p-2 rounded">
                      <div className="text-[#858585]">File Size</div>
                      <div className="font-medium text-[#CCCCCC]">
                        {file
                          ? (file.size / 1024 / 1024).toFixed(2) + " MB"
                          : "N/A"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Status Bar */}
          <div className="bg-[#2D2D2D] border-t border-[#3c3c3c] h-8 flex items-center px-4 text-xs text-[#858585]">
            <div className="flex space-x-4">
              <span>UTF-8</span>
              <span>LF</span>
              <span>
                {activeTab === "code" && projectStructure
                  ? projectStructure.meshes.length + " meshes"
                  : ""}
              </span>
            </div>
            <div className="ml-auto flex space-x-4">
              <span>{selectedLanguage.toUpperCase()}</span>
              <span>
                Line {activeFile ? "1" : ""}, Column {activeFile ? "1" : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
