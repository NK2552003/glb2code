"use client";
import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { Download, Upload, Eye, Code, Loader2, AlertCircle, File, FileText, Folder, Layout, Languages } from 'lucide-react';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import JSZip from 'jszip';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import saveAs from 'file-saver';
import { generateProjectStructure } from '@/app/lib/glb-converter';
import { MeshData, MaterialData, ProjectStructure, GeometryData } from '@/app/types/glb-convertor';

// Language configuration for syntax highlighting and code generation
const LANGUAGES = [
  { id: 'typescript', name: 'TypeScript', extension: 'tsx', geometryExtension: 'ts', group: 'Web' },
  { id: 'javascript', name: 'JavaScript', extension: 'jsx', geometryExtension: 'js', group: 'Web' },
  { id: 'python', name: 'Python', extension: 'py', geometryExtension: 'py', group: 'General' },
  { id: 'java', name: 'Java', extension: 'java', geometryExtension: 'java', group: 'General' },
  { id: 'csharp', name: 'C#', extension: 'cs', geometryExtension: 'cs', group: 'General' },
  { id: 'cpp', name: 'C++', extension: 'cpp', geometryExtension: 'h', group: 'Systems' },
  { id: 'go', name: 'Go', extension: 'go', geometryExtension: 'go', group: 'Systems' },
  { id: 'rust', name: 'Rust', extension: 'rs', geometryExtension: 'rs', group: 'Systems' },
  { id: 'swift', name: 'Swift', extension: 'swift', geometryExtension: 'swift', group: 'Mobile' },
  { id: 'kotlin', name: 'Kotlin', extension: 'kt', geometryExtension: 'kt', group: 'Mobile' },
  { id: 'ruby', name: 'Ruby', extension: 'rb', geometryExtension: 'rb', group: 'Web' },
  { id: 'php', name: 'PHP', extension: 'php', geometryExtension: 'php', group: 'Web' },
  { id: 'scala', name: 'Scala', extension: 'scala', geometryExtension: 'scala', group: 'General' },
  { id: 'dart', name: 'Dart', extension: 'dart', geometryExtension: 'dart', group: 'Mobile' },
  { id: 'r', name: 'R', extension: 'R', geometryExtension: 'R', group: 'Data Science' }
] as const;

type LanguageId = typeof LANGUAGES[number]['id'];

// VS Code-like editor component with syntax highlighting
function CodeEditor({ code, languageId }: { code: string; languageId: LanguageId }) {
  const language = LANGUAGES.find(lang => lang.id === languageId);
  const lines = code.split('\n');
  
  const getSyntaxClass = (line: string, index: number) => {
    if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
      return 'text-[#6A9955]'; // Comments
    }
    if (line.includes('import') || line.includes('from') || line.includes('require')) {
      return 'text-[#C586C0]'; // Imports
    }
    if (line.includes('function') || line.includes('def') || line.includes('class')) {
      return 'text-[#569CD6]'; // Keywords
    }
    if (line.includes('const') || line.includes('let') || line.includes('var') || 
        line.includes('final') || line.includes('static') || line.includes('public')) {
      return 'text-[#9CDCFE]'; // Variables
    }
    if (line.includes('{') || line.includes('}') || line.includes('[') || line.includes(']') || 
        line.includes('(') || line.includes(')')) {
      return 'text-[#D4D4D4]'; // Brackets
    }
    if (line.includes('=') || line.includes('+') || line.includes('-') || 
        line.includes('*') || line.includes('/') || line.includes('%')) {
      return 'text-[#D4D4D4]'; // Operators
    }
    if (line.includes('"') || line.includes("'") || line.includes('`')) {
      return 'text-[#CE9178]'; // Strings
    }
    if (!isNaN(Number(line.trim())) || line.trim().match(/0x[0-9A-Fa-f]+/)) {
      return 'text-[#B5CEA8]'; // Numbers
    }
    return 'text-[#D4D4D4]'; // Default
  };

  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden font-mono text-sm h-full flex flex-col">
      <div className="bg-[#3C3C3C] px-4 py-2 flex items-center justify-between border-b border-[#333333]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="text-[#CCCCCC] text-xs flex items-center gap-2">
          <span>{language?.name}</span>
          <span className="text-[#858585]">•</span>
          <span className="text-[#858585]">{lines.length} lines</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="flex">
          <div className="text-[#858585] w-8 select-none flex-shrink-0 pr-4 text-right">
            {lines.map((_, i) => (
              <div key={i} className="select-none">{i + 1}</div>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            {lines.map((line, i) => (
              <div key={i} className={`whitespace-pre ${getSyntaxClass(line, i)}`}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Language selector component with grouping
function LanguageSelector({ 
  selectedLanguage, 
  onChange 
}: { 
  selectedLanguage: LanguageId; 
  onChange: (language: LanguageId) => void 
}) {
  const groups = Array.from(new Set(LANGUAGES.map(lang => lang.group)));
  
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Languages className="w-4 h-4 text-purple-400" />
        <select
          value={selectedLanguage}
          onChange={(e) => onChange(e.target.value as LanguageId)}
          className="bg-slate-700 text-white px-3 py-1.5 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm appearance-none pr-8 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%239CA3AF%22><path d=%22M7 10l5 5 5-5z%22/></svg>')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem] cursor-pointer"
        >
          {groups.map(group => (
            <optgroup key={group} label={group}>
              {LANGUAGES.filter(lang => lang.group === group).map(lang => (
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
  // Display options
  const [displayMode, setDisplayMode] = useState<'original' | 'wireframe' | 'solid' | 'normals' | 'depth' | 'points'>('original');
  const [autoRotate, setAutoRotate] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [showAxes, setShowAxes] = useState(false);
  const [componentName, setComponentName] = useState('Model');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageId>('typescript');

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
        console.error("Error loading GLTF", err);
        setError('Error processing GLB file. The file may be too large or corrupted.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setError('Please upload a valid .glb file');
    }
  };

  const loadGLTFWithProgress = async (url: string, file: File) => {
    setIsProcessing(true);
    setProgress(0);
    return new Promise<void>((resolve, reject) => {
      try {
        // Set up DRACO decoder for compressed models (common in large GLBs)
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        
        // Track progress for large files
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
          if (xhr.status === 200) {
            try {
              // Process the GLB data
              const loader = new GLTFLoader();
              loader.setDRACOLoader(dracoLoader);
              
              loader.parse(
                xhr.response,
                '',
                (gltf) => {
                  // Store GLTF data for transpilation
                  setGltfData(gltf);
                  // Generate project structure
                  const structure = generateProjectStructure(gltf, componentName, displayMode, selectedLanguage);
                  setProjectStructure(structure);
                  setIsProcessing(false);
                  resolve();
                },
                (error) => {
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
        xhr.onprogress = function(event) {
          if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            setProgress(percentComplete);
          }
        };
        xhr.onerror = function() {
          reject(new Error('Network error occurred while loading the file'));
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
  if (gltfData && componentName && activeTab === 'code') {
    setIsProcessing(true);
    setProgress(0);
    try {
      console.log(`Regenerating project structure for ${selectedLanguage}...`);
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
      const lang = LANGUAGES.find(l => l.id === selectedLanguage);
      if (!lang) return;
      
      // Create folder structure
      const componentFolder = zip.folder(`components/${componentName}`);
      const meshesFolder = componentFolder?.folder('meshes');
      const geometriesFolder = componentFolder?.folder('geometries');
      const materialsFolder = componentFolder?.folder('materials');
      
      // Add index file
      componentFolder?.file(`index.${lang.extension}`, projectStructure.indexContent);
      
      // Add geometry files
      projectStructure.geometries?.forEach(geometry => {
        geometriesFolder?.file(`${geometry.name}Geometry.${lang.geometryExtension}`, geometry.content);
      });
      
      // Add mesh files
      projectStructure.meshes.forEach(mesh => {
        meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
      });
      
      // Add material files
      projectStructure.materials.forEach(material => {
        materialsFolder?.file(`${material.name}.${lang.extension}`, material.content);
      });
      
      // Add example page if requested
      if (includeExamplePage) {
        const appFolder = zip.folder('app');
        const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-page`);
        modelPageFolder?.file(`page.${lang.extension}`, projectStructure.examplePageContent);
      }
      
      // Generate and download zip
      zip.generateAsync({ type: 'blob' }).then(content => {
        const suffix = includeExamplePage ? '-with-example' : '';
        saveAs(content, `${componentName}-${selectedLanguage}${suffix}.zip`);
      });
    } catch (err) {
      console.error("Error generating ZIP", err);
      setError('Failed to generate ZIP file. The model might be too large.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadCurrentView = () => {
    if (!gltfData) return;
    setIsProcessing(true);
    try {
      // Generate project structure with current display mode
      const structure = generateProjectStructure(gltfData, componentName, displayMode, selectedLanguage);
      const zip = new JSZip();
      const lang = LANGUAGES.find(l => l.id === selectedLanguage);
      if (!lang) return;
      
      // Create folder structure
      const componentFolder = zip.folder(`components/${componentName}-${displayMode}`);
      const meshesFolder = componentFolder?.folder('meshes');
      const geometriesFolder = componentFolder?.folder('geometries');
      const materialsFolder = componentFolder?.folder('materials');
      
      // Add index file
      componentFolder?.file(`index.${lang.extension}`, structure.indexContent);
      
      // Add geometry files
      structure.geometries?.forEach(geometry => {
        geometriesFolder?.file(`${geometry.name}Geometry.${lang.geometryExtension}`, geometry.content);
      });
      
      // Add mesh files
      structure.meshes.forEach(mesh => {
        meshesFolder?.file(`${mesh.name}.${lang.extension}`, mesh.content);
      });
      
      // Add material files
      structure.materials.forEach(material => {
        materialsFolder?.file(`${material.name}.${lang.extension}`, material.content);
      });
      
      // Add example page
      const appFolder = zip.folder('app');
      const modelPageFolder = appFolder?.folder(`${componentName.toLowerCase()}-${displayMode}-page`);
      modelPageFolder?.file(`page.${lang.extension}`, structure.examplePageContent);
      
      // Generate and download zip
      zip.generateAsync({ type: 'blob' }).then(content => {
        saveAs(content, `${componentName}-${displayMode}-${selectedLanguage}.zip`);
      });
    } catch (err) {
      console.error("Error generating ZIP for current view", err);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Code className="w-10 h-10 text-purple-400" />
            GLB to Code Converter
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Convert your GLB 3D models into self-contained components in 15+ programming languages with separate geometry blocks for easier maintenance.
            Handles large files efficiently with progress tracking and memory optimization.
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                activeTab === 'upload'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Upload className="w-4 h-4" />
              Upload
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              disabled={!file}
              className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                activeTab === 'preview' && file
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              disabled={!projectStructure}
              className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                activeTab === 'code' && projectStructure
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              <Code className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
        
        {/* Error Display */}
        {error && (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-200">{error}</span>
            </div>
          </div>
        )}
        
        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="text-center">
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 hover:border-purple-500 transition-colors">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Upload your GLB model
                  </h3>
                  <p className="text-slate-400 mb-6">
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
                    className={`bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors inline-block ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Choose File'
                    )}
                  </label>
                </div>
              </div>
              
              {/* Progress Bar for Large Files */}
              {(isLoading || isProcessing) && (
                <div className="mt-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">
                      {isProcessing ? 'Processing model...' : 'Loading file...'}
                    </span>
                    <span className="text-slate-300 text-sm">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-slate-400 text-xs mt-2">
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
        {activeTab === 'preview' && modelUrl && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">3D Model Preview</h3>
                <div className="flex items-center gap-4">
                  {/* Display Mode Controls */}
                  <div className="flex items-center gap-2">
                    <label className="text-slate-300 text-sm">Display Mode:</label>
                    <select
                      value={displayMode}
                      onChange={(e) => setDisplayMode(e.target.value as any)}
                      className="bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm"
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
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={autoRotate}
                        onChange={(e) => setAutoRotate(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Auto Rotate
                    </label>
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={showGrid}
                        onChange={(e) => setShowGrid(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Grid
                    </label>
                    <label className="flex items-center gap-2 text-slate-300 text-sm">
                      <input
                        type="checkbox"
                        checked={showAxes}
                        onChange={(e) => setShowAxes(e.target.checked)}
                        className="rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                      />
                      Axes
                    </label>
                  </div>
                  
                  <button
                    onClick={downloadCurrentView}
                    disabled={isProcessing}
                    className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                      isProcessing ? 'opacity-50 cursor-not-allowed' : ''
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
                <div className="bg-slate-900 rounded-lg p-3">
                  <p className="text-slate-400 text-sm">
                    {displayMode === 'original' && 'Showing the original model with its materials and textures.'}
                    {displayMode === 'wireframe' && 'Displaying the model as a wireframe structure showing the mesh geometry.'}
                    {displayMode === 'solid' && 'Rendering the model with a uniform solid color material.'}
                    {displayMode === 'normals' && 'Visualizing surface normals with color-coded directions (RGB = XYZ).'}
                    {displayMode === 'depth' && 'Showing depth information - closer surfaces appear lighter.'}
                    {displayMode === 'points' && 'Displaying the model as a point cloud of vertices.'}
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-900 rounded-lg overflow-hidden" style={{ height: '500px' }}>
                <Canvas 
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  gl={{ 
                    powerPreference: "high-performance",
                    antialias: true,
                    alpha: true
                  }}
                >
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <pointLight position={[-10, -10, -10]} intensity={0.3} />
                  
                  {/* Memory-optimized loading for large models */}
                  {modelUrl && (
                    <React.Suspense fallback={
                      <Html center>
                        <div className="text-white bg-black/50 p-2 rounded">
                          <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                          Loading model...
                        </div>
                      </Html>
                    }>
                      <ModelPreview 
                        url={modelUrl} 
                        displayMode={displayMode} 
                        autoRotate={autoRotate} 
                      />
                    </React.Suspense>
                  )}
                  
                  {showGrid && (
                    <gridHelper args={[10, 10, '#444444', '#666666']} />
                  )}
                  {showAxes && (
                    <axesHelper args={[2]} />
                  )}
                  
                  <OrbitControls 
                    enableZoom 
                    enablePan 
                    enableRotate 
                    minDistance={0.1}
                    maxDistance={100}
                  />
                  <Environment preset="studio" />
                </Canvas>
              </div>
              
              <p className="text-slate-400 text-sm mt-4 text-center">
                Use mouse to rotate, zoom, and pan around the model. Try different display modes to analyze the model structure.
              </p>
            </div>
          </div>
        )}
        {isProcessing && activeTab === 'code' && (
  <div className="absolute top-4 right-4 bg-slate-800 px-3 py-1 rounded text-sm text-purple-400">
    Regenerating code...
  </div>
)}
        {/* Code Tab */}
        {activeTab === 'code' && projectStructure && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-slate-700 gap-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    Project Structure
                  </h3>
                  {/* Language Selection */}
                  <div className="flex items-center gap-2">
                    <LanguageSelector 
                      selectedLanguage={selectedLanguage} 
                      onChange={setSelectedLanguage} 
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <button
                    onClick={() => downloadZip(true)}
                    disabled={isProcessing}
                    className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto ${
                      isProcessing ? 'opacity-50 cursor-not-allowed' : ''
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
                    className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto ${
                      isProcessing ? 'opacity-50 cursor-not-allowed' : ''
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
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full md:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    Download GLB
                  </button>
                </div>
              </div>
              
              {/* Project Structure Overview */}
              <div className="p-6 border-b border-slate-700">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Folder className="w-5 h-5 mr-2 text-purple-400" />
                      Project Structure
                    </h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="text-slate-400 text-sm">
                        <div className="flex items-center">
                          <Folder className="w-4 h-4 mr-2 text-yellow-400" />
                          <span className="font-medium">components</span>
                        </div>
                        <div className="pl-6">
                          <div className="flex items-center">
                            <Folder className="w-4 h-4 mr-2 text-blue-400" />
                            <span className="font-medium">{componentName}</span>
                          </div>
                          <div className="pl-6">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2 text-green-400" />
                              <span>index.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <Folder className="w-4 h-4 mr-2 text-cyan-400" />
                              <span className="font-medium">geometries</span>
                            </div>
                            <div className="pl-6">
                              {projectStructure.geometries?.map((geometry, i) => (
                                <div key={i} className="flex items-center">
                                  <File className="w-4 h-4 mr-2 text-cyan-400" />
                                  <span>{geometry.name}Geometry.{LANGUAGES.find(l => l.id === selectedLanguage)?.geometryExtension}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center mt-2">
                              <Folder className="w-4 h-4 mr-2 text-cyan-400" />
                              <span className="font-medium">meshes</span>
                            </div>
                            <div className="pl-6">
                              {projectStructure.meshes.map((mesh, i) => (
                                <div key={i} className="flex items-center">
                                  <File className="w-4 h-4 mr-2 text-cyan-400" />
                                  <span>{mesh.name}.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center mt-2">
                              <Folder className="w-4 h-4 mr-2 text-orange-400" />
                              <span className="font-medium">materials</span>
                            </div>
                            <div className="pl-6">
                              {projectStructure.materials.map((material, i) => (
                                <div key={i} className="flex items-center">
                                  <File className="w-4 h-4 mr-2 text-orange-400" />
                                  <span>{material.name}.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center">
                          <Folder className="w-4 h-4 mr-2 text-purple-400" />
                          <span className="font-medium">app</span>
                        </div>
                        <div className="pl-6">
                          <div className="flex items-center">
                            <Folder className="w-4 h-4 mr-2 text-blue-400" />
                            <span className="font-medium">{componentName.toLowerCase()}-page</span>
                          </div>
                          <div className="pl-6">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-2 text-green-400" />
                              <span>page.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-purple-400" />
                      Model Statistics
                    </h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="text-slate-400 text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Meshes:</span>
                          <span className="font-medium">{projectStructure.meshes.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Geometry Files:</span>
                          <span className="font-medium">{projectStructure.geometries?.length || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Materials:</span>
                          <span className="font-medium">{projectStructure.materials.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Vertices:</span>
                          <span className="font-medium">{projectStructure.totalVertices.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Triangles:</span>
                          <span className="font-medium">{projectStructure.totalTriangles.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>File Size:</span>
                          <span className="font-medium">{file ? (file.size / 1024 / 1024).toFixed(2) + ' MB' : 'N/A'}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-700 mt-2">
                          <p className="text-xs text-slate-500">
                            {`Note: For extremely large models (>100MB), some meshes might be simplified 
                            during transpilation to prevent browser memory issues.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Preview */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-purple-400" />
                    index.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension} - Main Component
                  </h4>
                  <CodeEditor 
                    code={projectStructure.indexContent} 
                    languageId={selectedLanguage} 
                  />
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2 text-cyan-400" />
                    Example Page
                  </h4>
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                      <span className="text-purple-400 font-mono">app/{componentName.toLowerCase()}-page/page.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                    </div>
                    <CodeEditor 
                      code={projectStructure.examplePageContent} 
                      languageId={selectedLanguage} 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2 text-cyan-400" />
                    Geometry Files
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectStructure.geometries?.slice(0, 3).map((geometry, i) => (
                      <div key={i} className="bg-slate-900 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                          <span className="text-cyan-400 font-mono">{geometry.name}Geometry.{LANGUAGES.find(l => l.id === selectedLanguage)?.geometryExtension}</span>
                        </div>
                        <CodeEditor 
                          code={geometry.content} 
                          languageId={selectedLanguage} 
                        />
                      </div>
                    ))}
                    {projectStructure.geometries && projectStructure.geometries.length > 3 && (
                      <div className="col-span-full text-center text-slate-400 text-sm py-4">
                        ... and {projectStructure.geometries.length - 3} more geometry files
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2 text-cyan-400" />
                    Mesh Components
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectStructure.meshes.slice(0, 3).map((mesh, i) => (
                      <div key={i} className="bg-slate-900 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                          <span className="text-cyan-400 font-mono">{mesh.name}.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                        </div>
                        <CodeEditor 
                          code={mesh.content} 
                          languageId={selectedLanguage} 
                        />
                      </div>
                    ))}
                    {projectStructure.meshes.length > 3 && (
                      <div className="col-span-full text-center text-slate-400 text-sm py-4">
                        ... and {projectStructure.meshes.length - 3} more mesh components
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2 text-orange-400" />
                    Material Components
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectStructure.materials.slice(0, 3).map((material, i) => (
                      <div key={i} className="bg-slate-900 rounded-lg overflow-hidden">
                        <div className="px-4 py-2 bg-slate-800 border-b border-slate-700">
                          <span className="text-orange-400 font-mono">{material.name}.{LANGUAGES.find(l => l.id === selectedLanguage)?.extension}</span>
                        </div>
                        <CodeEditor 
                          code={material.content} 
                          languageId={selectedLanguage} 
                        />
                      </div>
                    ))}
                    {projectStructure.materials.length > 3 && (
                      <div className="col-span-full text-center text-slate-400 text-sm py-4">
                        ... and {projectStructure.materials.length - 3} more material components
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-3">
                  How to Use
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-400 text-sm mb-2">1. Download the complete project with example page:</p>
                    <pre className="bg-slate-900 rounded p-2 text-sm">
                      <code className="text-blue-400">{`<button onClick={() => downloadZip(true)}>Download Full Project</button>`}</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-2">2. Extract the zip file into your project root</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-2">3. The example page will be available at:</p>
                    <pre className="bg-slate-900 rounded p-2 text-sm">
                      <code className="text-blue-400">{`app/${componentName.toLowerCase()}-page/page.${LANGUAGES.find(l => l.id === selectedLanguage)?.extension}`}</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-2">4. Import and use the component elsewhere:</p>
                    <pre className="bg-slate-900 rounded p-2 text-sm">
                      <code className="text-blue-400">{`import ${componentName} from '@/components/${componentName}'
// ...
<Canvas>
  <${componentName} />
</Canvas>`}</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-2">5. Customize individual parts:</p>
                    <pre className="bg-slate-900 rounded p-2 text-sm">
                      <code className="text-blue-400">{`// Access specific parts
import { MeshName } from '@/components/${componentName}/meshes'
import { MeshNameGeometry } from '@/components/${componentName}/geometries'
import { MaterialName } from '@/components/${componentName}/materials'
// Example: Change material of a specific mesh
function CustomModel() {
  return (
    <${componentName}>
      <mesh geometry={${componentName}Geometry} material={new MaterialName()} />
    </${componentName}>
  )
}`}</code>
                    </pre>
                  </div>
                  <div className="pt-2 border-t border-slate-700 mt-2">
                    <p className="text-xs text-slate-500">
                      For extremely large models, the converter automatically applies optimizations:
                      <br />- Geometry data is separated into reusable blocks for better maintainability
                      <br />- Geometry files are stored in a dedicated folder for easy access
                      <br />- Mesh components are simplified to just import and use geometry
                      <br />- Memory usage is optimized for large models through better data structure
                      <br />- Example page is included for immediate use with proper Canvas setup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Component to display the GLB model in the preview with memory optimization
function ModelPreview({ url, displayMode, autoRotate }: { 
  url: string; 
  displayMode: string; 
  autoRotate: boolean 
}) {
  const [gltf, setGltf] = useState<any>(null);
  const meshRef = useRef<THREE.Group>(null);
  
  // Load GLTF with memory optimization for large files
  useEffect(() => {
    let isMounted = true;
    const loader = new GLTFLoader();
    
    // Set up DRACO for compressed models
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);
    
    // For large files, use a more memory-efficient approach
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(data => {
        if (!isMounted) return;
        loader.parse(
          data,
          '',
          (gltf) => {
            // For extremely large models, simplify geometries to prevent memory issues
            if (gltf.scene) {
              gltf.scene.traverse((object: THREE.Object3D) => {
                if (object.isMesh) {
                  const mesh = object as THREE.Mesh;
                  const geometry = mesh.geometry;
                  // Check if the geometry is extremely large
                  const vertexCount = geometry.attributes.position.count;
                  if (vertexCount > 1000000) {
                    // For extremely large meshes, consider simplifying or warning
                    console.warn(`Mesh ${mesh.name} has ${vertexCount} vertices - this may cause performance issues`);
                  }
                }
              });
            }
            if (isMounted) {
              setGltf(gltf);
            }
          },
          (error) => {
            console.error("Error parsing GLTF", error);
          }
        );
      })
      .catch(error => {
        console.error("Error loading GLB file", error);
      });
      
    return () => {
      isMounted = false;
      // Clean up GLTF resources
      if (gltf) {
        gltf.scene.traverse((object: THREE.Object3D) => {
          if (object.isMesh) {
            const mesh = object as THREE.Mesh;
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(material => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }
    };
  }, [url]);
  
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });
  
  // Apply material overrides based on display mode
  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child: THREE.Object3D) => {
        if (child.isMesh) {
          const mesh = child as THREE.Mesh;
          const originalMaterial = mesh.material;
          
          // Dispose of old materials to prevent memory leaks
          if (Array.isArray(originalMaterial)) {
            originalMaterial.forEach(material => material.dispose());
          } else if (originalMaterial && 'dispose' in originalMaterial) {
            (originalMaterial as THREE.Material).dispose();
          }
          
          // Create new materials based on display mode
          switch (displayMode) {
            case 'wireframe':
              if (Array.isArray(originalMaterial)) {
                mesh.material = originalMaterial.map(mat => {
                  const newMat = mat.clone();
                  newMat.wireframe = true;
                  newMat.transparent = true;
                  newMat.opacity = 0.8;
                  return newMat;
                });
              } else {
                const newMat = originalMaterial.clone();
                newMat.wireframe = true;
                newMat.transparent = true;
                newMat.opacity = 0.8;
                mesh.material = newMat;
              }
              break;
            case 'points':
              mesh.material = new THREE.PointsMaterial({
                color: 0x00ff00,
                size: 0.01,
                sizeAttenuation: true
              });
              break;
            case 'normals':
              mesh.material = new THREE.MeshNormalMaterial();
              break;
            case 'depth':
              mesh.material = new THREE.MeshDepthMaterial();
              break;
            case 'solid':
              mesh.material = new THREE.MeshStandardMaterial({
                color: 0x888888,
                metalness: 0.1,
                roughness: 0.8
              });
              break;
            default:
              // Keep original materials for 'original' mode
              mesh.material = originalMaterial;
              break;
          }
        }
      });
    }
  }, [gltf, displayMode]);
  
  if (!gltf) {
    return (
      <Html center>
        <div className="text-white bg-black/50 p-2 rounded">
          <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
          Loading model...
        </div>
      </Html>
    );
  }
  
  return (
    <primitive 
      ref={meshRef} 
      object={gltf.scene} 
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
    />
  );
}