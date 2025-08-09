'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Download, Upload, Eye, CodeIcon, Loader2, AlertCircle, FileIcon, FolderIcon, Layout, Terminal } from 'lucide-react';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import JSZip from 'jszip';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { saveAs } from 'file-saver';
import type { ProjectStructure } from '@/types/glb-convertor';
import UploadButton from '@/components/upload-button';
import { LanguageId, LANGUAGES } from '@/types/constant';
import CodeEditor from '@/components/code-editor';
import LanguageSelector from '@/components/language-selector';
import FileTree from '@/components/file-tree';
import ModelPreview from '@/components/model-preview';
import generateProjectStructure from '@/lib/generator/generateProjectStructure';
import ErrorToast from '@/components/errortoast';

export default function GLBConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [modelUrl, setModelUrl] = useState('');
  const [projectStructure, setProjectStructure] = useState<ProjectStructure | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'upload' | 'preview' | 'code'>('upload');
  const [gltfData, setGltfData] = useState<any>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Display options
  const [displayMode, setDisplayMode] = useState<'original' | 'wireframe' | 'solid' | 'normals' | 'depth' | 'points'>('original');
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [showAxes, setShowAxes] = useState(false);

  const [componentName, setComponentName] = useState('Model');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageId>('typescript');

  const [expandedFolders, setExpandedFolders] = useState({
    components: true,
    componentName: true,
    geometries: false,
    meshes: true,
    materials: false,
    app: true,
    modelPage: true,
  });

  const [activeFile, setActiveFile] = useState<string | null>('index');
  const [currentFileContent, setCurrentFileContent] = useState('');

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

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.name.endsWith('.glb')) {
      setFile(uploadedFile);
      setError('');
      setIsLoading(true);
      setProgress(0);
      try {
        // Create object URL for preview
        const url = URL.createObjectURL(uploadedFile);
        setModelUrl(url);

        // Load GLTF with progress tracking for large files
        await loadGLTFWithProgress(url, uploadedFile);

        // Generate component name from filename
        const name = uploadedFile.name.replace('.glb', '').replace(/[^a-zA-Z0-9]/g, '');
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        setComponentName(capitalizedName);

        setActiveTab('preview');
      } catch (err) {
        console.error('Error loading GLTF', err);
        setError('Error processing GLB file. The file may be too large or corrupted.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setError('Please upload a valid .glb file');
    }
  };

  const loadGLTFWithProgress = async (url: string, _file: File): Promise<void> => {
    setIsProcessing(true);
    setProgress(0);
    return new Promise<void>((resolve, reject) => {
      try {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = function () {
          if (xhr.status === 200) {
            try {
              const loader = new GLTFLoader();
              loader.setDRACOLoader(dracoLoader);
              loader.parse(
                xhr.response,
                '',
                (gltf: any) => {
                  setGltfData(gltf);
                  const structure = generateProjectStructure(gltf, componentName, displayMode, selectedLanguage);
                  setProjectStructure(structure);
                  setIsProcessing(false);
                  resolve();
                },
                (error: any) => {
                  console.error('Error parsing GLTF', error);
                  setIsProcessing(false);
                  reject(error);
                }
              );
            } catch (parseError) {
              console.error('Error parsing GLTF data', parseError);
              setIsProcessing(false);
              reject(parseError);
            }
          } else {
            reject(new Error(`Failed to load file: ${xhr.statusText}`));
          }
        };

        xhr.onprogress = function (event) {
          if (event) {
            // keep TS happy:
          }
        };

        xhr.onprogress = function (event) {
          if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            setProgress(percentComplete);
          }
        };

        xhr.onerror = function () {
          reject(new Error('Network error occurred while loading the file'));
        };

        xhr.send();
      } catch (err) {
        setIsProcessing(false);
        reject(err);
      }
    });
  };

  // Regenerate code when language/display/component changes and tab is Code
  useEffect(() => {
    if (gltfData && componentName && activeTab === 'code') {
      setIsProcessing(true);
      setProgress(0);
      try {
        const structure = generateProjectStructure(gltfData, componentName, displayMode, selectedLanguage);
        setProjectStructure(structure);
        setProgress(100);
      } catch (err) {
        console.error('Error regenerating project structure', err);
        setError('Failed to regenerate project structure for the selected language');
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
      const meshesFolder = componentFolder?.folder('meshes');
      const geometriesFolder = componentFolder?.folder('geometries');
      const materialsFolder = componentFolder?.folder('materials');

      // Add index file
      componentFolder?.file(`index.${lang.extension}`, projectStructure.indexContent);

      // Add geometry files
      projectStructure.geometries?.forEach((geometry) => {
        geometriesFolder?.file(`${geometry.name}Geometry.${lang.geometryExtension}`, geometry.content);
      });

      // Add mesh files
      projectStructure.meshes.forEach((mesh) => {
        meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
      });

      // Add material files
      projectStructure.materials.forEach((material) => {
        materialsFolder?.file(`${material.name}.${lang.extension}`, material.content);
      });

      // Add example page if requested
      if (includeExamplePage) {
        const appFolder = zip.folder('app');
        const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-page`);
        modelPageFolder?.file(`page.${lang.extension}`, projectStructure.examplePageContent);
      }

      // Generate and download zip
      zip.generateAsync({ type: 'blob' }).then((content) => {
        const suffix = includeExamplePage ? '-with-example' : '';
        saveAs(content, `${componentName}-${selectedLanguage}${suffix}.zip`);
      });
    } catch (err) {
      console.error('Error generating ZIP', err);
      setError('Failed to generate ZIP file. The model might be too large.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadCurrentView = () => {
    if (!gltfData) return;
    setIsProcessing(true);
    try {
      const structure = generateProjectStructure(gltfData, componentName, displayMode, selectedLanguage);
      const zip = new JSZip();
      const lang = LANGUAGES.find((l) => l.id === selectedLanguage);
      if (!lang) return;

      const componentFolder = zip.folder(`components/${componentName}-${displayMode}`);
      const meshesFolder = componentFolder?.folder('meshes');
      const geometriesFolder = componentFolder?.folder('geometries');
      const materialsFolder = componentFolder?.folder('materials');

      componentFolder?.file(`index.${lang.extension}`, structure.indexContent);

      structure.geometries?.forEach((geometry) => {
        geometriesFolder?.file(`${geometry.name}Geometry.${lang.geometryExtension}`, geometry.content);
      });

      structure.meshes.forEach((mesh) => {
        meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
      });

      structure.materials.forEach((material) => {
        materialsFolder?.file(`${material.name}.${lang.extension}`, material.content);
      });

      const appFolder = zip.folder('app');
      const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-${displayMode}-page`);
      modelPageFolder?.file(`page.${lang.extension}`, structure.examplePageContent);

      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, `${componentName}-${displayMode}-${selectedLanguage}.zip`);
      });
    } catch (err) {
      console.error('Error generating ZIP for current view', err);
      setError(`Failed to generate ZIP for ${displayMode} view. The model might be too large.`);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadModel = () => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const langExt = useMemo(() => LANGUAGES.find((l) => l.id === selectedLanguage)?.extension || 'tsx', [selectedLanguage]);

  return (
    <div className="bg-[#0B0B0F] text-slate-100 w-full h-auto md:h-full">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0B0F]/70 backdrop-blur">
        <div className="w-full px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wide text-slate-200">GLB2CODE</span>
          </div>
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1 border ${
                activeTab === 'upload'
                  ? 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-200'
                  : 'border-white/5 hover:border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <Upload className="h-4 w-4" />
              <span className=' hidden md:block'>Upload</span>
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              disabled={!file}
              className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1 border disabled:opacity-50 ${
                activeTab === 'preview' && file
                  ? 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-200'
                  : 'border-white/5 hover:border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <Eye className="h-4 w-4" />
              <span className='hidden md:block'>Preview</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              disabled={!projectStructure}
              className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1 border disabled:opacity-50 ${
                activeTab === 'code' && projectStructure
                  ? 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-200'
                  : 'border-white/5 hover:border-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <CodeIcon className="h-4 w-4" />
              <span className='hidden md:block'>Code</span>
            </button>
          </nav>
        </div>
      </header>
{error && (
  <ErrorToast message={error}/>
)}


      {/* Main */}
<main className="flex flex-col flex-1 w-full px-4 py-6 h-[93%] ">
        <div className="grid grid-cols-12 gap-4 h-full">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 xl:col-span-2 flex flex-col rounded-lg border border-white/10 bg-white/[0.02]">
            <div className="px-3 py-3 border-b border-white/10">
              <h2 className="text-xs uppercase tracking-wider text-slate-400 flex items-center">
                <FolderIcon className="h-4 w-4 mr-2 text-amber-400" />
                Explorer
              </h2>
            </div>

            {activeTab === 'code' && projectStructure ? (
              <div className="flex-1 overflow-y-auto px-1 py-2">
                <FileTree
                  projectStructure={projectStructure}
                  selectedLanguage={selectedLanguage}
                  onSelectFile={handleFileSelect}
                  expandedFolders={expandedFolders}
                  toggleFolder={toggleFolder as unknown as (folder: string) => void}
                  activeFile={activeFile}
                  componentName={componentName}
                />
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4">
                <div className="text-slate-400/80 text-sm space-y-3">
                  {activeTab === 'upload' ? (
                    <div className="space-y-2">
                      <p>Upload a GLB file to get started.</p>
                      <p>Supported file: .glb</p>
                      <p className="text-amber-300">
                        {'If you have a different 3D model format (like .obj, .fbx, .stl), please convert it to '}
                        <strong>.glb</strong>
                        {' before uploading.'}
                      </p>
                      <UploadButton onClick={() => window.open('https://imagetostl.com/convert/file/obj/to/glb')} />
                    </div>
                  ) : activeTab === 'preview' ? (
                    <div className="space-y-2">
                      <p>Preview your 3D model with different display modes.</p>
                      <p>Use the controls to rotate, zoom, and pan.</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p>Select a file from the project structure to view its code.</p>
                      <p>Use the language selector to switch between programming languages.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="px-3 py-2 border-t border-white/10">
              <div className="text-xs text-slate-500">
                {activeTab === 'code' && projectStructure ? (
                  <div className="flex items-center">
                    <FolderIcon className="h-4 w-4 mr-2 text-amber-400" />
                    <span className="overflow-hidden whitespace-nowrap text-ellipsis">{componentName}</span>
                  </div>
                ) : (
                  <div>No project loaded</div>
                )}
              </div>
            </div>
          </aside>
          
          {/* Content */}
          <section className="col-span-12 md:col-span-9 xl:col-span-10 h-full">
            {/* Upload */}
            {activeTab === 'upload' && (
              <div className="w-full h-full flex flex-col">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 h-full flex flex-col">
                  <div
                    className={`rounded-lg border-2 border-dashed p-12 text-center transition-colors flex flex-col justify-center items-center h-full ${
                      isDragging ? 'border-fuchsia-500 bg-fuchsia-500/10' : 'border-white/10 hover:border-fuchsia-500/50'
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
                      if (droppedFile && droppedFile.name.endsWith('.glb')) {
                        const fakeEvent = { target: { files: [droppedFile] } } as unknown as React.ChangeEvent<HTMLInputElement>;
                        handleFileUpload(fakeEvent);
                      } else {
                        setError('Please drop a valid .glb file');
                      }
                    }}
                  >
                    <Upload className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-200 mb-2">Upload your GLB model</h3>
                    <p className="text-slate-400 mb-6">Drop your .glb file here or click to browse</p>
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
                      className={`inline-block cursor-pointer rounded-md bg-gradient-to-tr from-fuchsia-600 to-indigo-600 px-4 py-2 text-white shadow transition-colors ${
                        isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:from-fuchsia-500 hover:to-indigo-500'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 inline mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Choose File'
                      )}
                    </label>
                  </div>

                  {(isLoading || isProcessing) && (
                    <div className="mt-6">
                      <div className="mb-1 flex justify-between">
                        <span className="text-slate-300 text-sm">{isProcessing ? 'Processing model...' : 'Loading file...'}</span>
                        <span className="text-slate-300 text-sm">{Math.round(progress)}%</span>
                      </div>
                      <div className="h-2 w-full rounded bg-white/10 overflow-hidden">
                        <div
                          className="h-2 rounded bg-gradient-to-r from-fuchsia-500 to-indigo-500 transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-slate-500 text-xs mt-2">
                        {progress < 100 ? 'Loading large model. This may take a few moments...' : 'Optimizing model data for transpilation...'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Preview */}
            {activeTab === 'preview' && modelUrl && (
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-slate-200">3D Model Preview</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <label className="text-sm text-slate-300">Display Mode:</label>
                      <select
                        value={displayMode}
                        onChange={(e) => setDisplayMode(e.target.value as any)}
                        className="rounded-md border border-white/10 bg-[#0E0E13] px-2 py-1 text-sm text-slate-200 outline-none focus:border-fuchsia-500"
                      >
                        <option value="original">Original</option>
                        <option value="wireframe">Wireframe</option>
                        <option value="solid">Solid Color</option>
                        <option value="normals">Normals</option>
                        <option value="depth">Depth</option>
                        <option value="points">Point Cloud</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input
                          type="checkbox"
                          checked={autoRotate}
                          onChange={(e) => setAutoRotate(e.target.checked)}
                          className="h-4 w-4 rounded border-white/10 bg-[#0E0E13] text-fuchsia-500 focus:ring-fuchsia-500"
                        />
                        Auto Rotate
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input
                          type="checkbox"
                          checked={showGrid}
                          onChange={(e) => setShowGrid(e.target.checked)}
                          className="h-4 w-4 rounded border-white/10 bg-[#0E0E13] text-fuchsia-500 focus:ring-fuchsia-500"
                        />
                        Grid
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input
                          type="checkbox"
                          checked={showAxes}
                          onChange={(e) => setShowAxes(e.target.checked)}
                          className="h-4 w-4 rounded border-white/10 bg-[#0E0E13] text-fuchsia-500 focus:ring-fuchsia-500"
                        />
                        Axes
                      </label>
                    </div>

                    <button
                      onClick={downloadCurrentView}
                      disabled={isProcessing}
                      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                        isProcessing
                          ? 'opacity-60 cursor-not-allowed border-white/10 bg-white/[0.02] text-slate-300'
                          : 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/15'
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <FileIcon className="h-4 w-4" />
                          Download {displayMode} Version
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-4 rounded-lg border border-white/10 bg-[#0E0E13] p-3">
                  <p className="text-sm text-slate-400">
                    {displayMode === 'original' && 'Showing the original model with its materials and textures.'}
                    {displayMode === 'wireframe' && 'Displaying the model as a wireframe structure showing the mesh geometry.'}
                    {displayMode === 'solid' && 'Rendering the model with a uniform solid color material.'}
                    {displayMode === 'normals' && 'Visualizing surface normals with color-coded directions (RGB = XYZ).'}
                    {displayMode === 'depth' && 'Showing depth information - closer surfaces appear lighter.'}
                    {displayMode === 'points' && 'Displaying the model as a point cloud of vertices.'}
                  </p>
                </div>

                <div className="rounded-lg overflow-hidden border border-white/10" style={{ height: '62vh' }}>
                  <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <pointLight position={[-10, -10, -10]} intensity={0.3} />

                    {modelUrl && (
                      <React.Suspense
                        fallback={
                          <Html center>
                            <div className="rounded bg-black/60 px-3 py-2 text-white">
                              <Loader2 className="mr-2 inline h-4 w-4 animate-spin" />
                              Loading model...
                            </div>
                          </Html>
                        }
                      >
                        <ModelPreview url={modelUrl} displayMode={displayMode} autoRotate={autoRotate} />
                      </React.Suspense>
                    )}

                    {showGrid && <gridHelper args={[10, 10, '#444444', '#666666']} />}
                    {showAxes && <axesHelper args={[2]} />}

                    <OrbitControls enableZoom enablePan enableRotate autoRotate={autoRotate} autoRotateSpeed={0.6} minDistance={0.1} maxDistance={100} />
                    <Environment preset="city" />
                  </Canvas>
                </div>

                <p className="mt-3 text-center text-sm text-slate-500">
                  Use mouse to rotate, zoom, and pan around the model. Try different display modes to analyze the model structure.
                </p>
              </div>
            )}

            {/* Code */}
            {activeTab === 'code' && projectStructure && (
              <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-medium text-slate-200">
                      {activeFile
                        ? (activeFile === 'index'
                            ? 'index'
                            : activeFile === 'examplePage'
                            ? 'page'
                            : activeFile.includes('geometry')
                            ? 'Geometry'
                            : activeFile.includes('mesh')
                            ? 'Mesh'
                            : 'Material') + `.${langExt}`
                        : 'Code Editor'}
                    </h3>
                    <LanguageSelector selectedLanguage={selectedLanguage} onChange={setSelectedLanguage} />
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      onClick={() => downloadZip(true)}
                      disabled={isProcessing}
                      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                        isProcessing
                          ? 'opacity-60 cursor-not-allowed border-white/10 bg-white/[0.02] text-slate-300'
                          : 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/15'
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Layout className="h-4 w-4" />
                          Download Full Project
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => downloadZip(false)}
                      disabled={isProcessing}
                      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                        isProcessing
                          ? 'opacity-60 cursor-not-allowed border-white/10 bg-white/[0.02] text-slate-300'
                          : 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-200 hover:bg-fuchsia-500/15'
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <FileIcon className="h-4 w-4" />
                          Download Component
                        </>
                      )}
                    </button>

                    <button
                      onClick={downloadModel}
                      className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200 hover:bg-emerald-500/15"
                    >
                      <Download className="h-4 w-4" />
                      Download GLB
                    </button>
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-white/10">
                  <CodeEditor code={currentFileContent} languageId={selectedLanguage} />
                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="flex items-center text-sm font-medium text-slate-200">
                      <Terminal className="mr-2 h-4 w-4 text-fuchsia-400" />
                      Model Statistics
                    </h4>
                    <div className="flex space-x-2 text-xs text-slate-500">
                      <span>{file ? (file.size / 1024 / 1024).toFixed(2) + ' MB' : 'N/A'} • {projectStructure.meshes.length} meshes</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 text-sm">
                    <div className="rounded bg-[#0E0E13] p-3 border border-white/10">
                      <div className="text-slate-500">Meshes</div>
                      <div className="font-medium text-slate-200">{projectStructure.meshes.length}</div>
                    </div>
                    <div className="rounded bg-[#0E0E13] p-3 border border-white/10">
                      <div className="text-slate-500">Geometry Files</div>
                      <div className="font-medium text-slate-200">{projectStructure.geometries?.length || 0}</div>
                    </div>
                    <div className="rounded bg-[#0E0E13] p-3 border border-white/10">
                      <div className="text-slate-500">Materials</div>
                      <div className="font-medium text-slate-200">{projectStructure.materials.length}</div>
                    </div>
                    <div className="rounded bg-[#0E0E13] p-3 border border-white/10">
                      <div className="text-slate-500">Total Vertices</div>
                      <div className="font-medium text-slate-200">
                        {projectStructure.totalVertices.toLocaleString()}
                      </div>
                    </div>
                    <div className="rounded bg-[#0E0E13] p-3 border border-white/10">
                      <div className="text-slate-500">Total Triangles</div>
                      <div className="font-medium text-slate-200">
                        {projectStructure.totalTriangles.toLocaleString()}
                      </div>
                    </div>
                    <div className="rounded bg-[#0E0E13] p-3 border border-white/10">
                      <div className="text-slate-500">File Size</div>
                      <div className="font-medium text-slate-200">{file ? (file.size / 1024 / 1024).toFixed(2) + ' MB' : 'N/A'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Status bar */}
        <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-slate-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span>LF</span>
              <span>{activeTab === 'code' && projectStructure ? `${projectStructure.meshes.length} meshes` : ''}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{selectedLanguage.toUpperCase()}</span>
              <span>Line {activeFile ? '1' : ''}, Column {activeFile ? '1' : ''}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
