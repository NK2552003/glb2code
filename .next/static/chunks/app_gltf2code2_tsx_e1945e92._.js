(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/gltf2code2.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>GLBConverter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export G as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Component to display the GLB model in the preview
function ModelPreview(param) {
    let { url, displayMode, autoRotate } = param;
    _s();
    const gltf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"], url);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ModelPreview.useFrame": (state)=>{
            if (meshRef.current && autoRotate) {
                meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
            }
        }
    }["ModelPreview.useFrame"]);
    // Apply material overrides based on display mode
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ModelPreview.useEffect": ()=>{
            if (gltf.scene) {
                gltf.scene.traverse({
                    "ModelPreview.useEffect": (child)=>{
                        if (child.isMesh) {
                            const originalMaterial = child.material;
                            switch(displayMode){
                                case 'wireframe':
                                    if (Array.isArray(originalMaterial)) {
                                        child.material = originalMaterial.map({
                                            "ModelPreview.useEffect": (mat)=>{
                                                const newMat = mat.clone();
                                                newMat.wireframe = true;
                                                newMat.transparent = true;
                                                newMat.opacity = 0.8;
                                                return newMat;
                                            }
                                        }["ModelPreview.useEffect"]);
                                    } else {
                                        const newMat = originalMaterial.clone();
                                        newMat.wireframe = true;
                                        newMat.transparent = true;
                                        newMat.opacity = 0.8;
                                        child.material = newMat;
                                    }
                                    break;
                                case 'points':
                                    child.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                                        color: 0x00ff00,
                                        size: 0.01,
                                        sizeAttenuation: true
                                    });
                                    break;
                                case 'normals':
                                    child.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]();
                                    break;
                                case 'depth':
                                    child.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]();
                                    break;
                                case 'solid':
                                    child.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                                        color: 0x888888,
                                        metalness: 0.1,
                                        roughness: 0.8
                                    });
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }["ModelPreview.useEffect"]);
            }
        }
    }["ModelPreview.useEffect"], [
        gltf.scene,
        displayMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        ref: meshRef,
        object: gltf.scene,
        scale: [
            1,
            1,
            1
        ],
        position: [
            0,
            0,
            0
        ]
    }, void 0, false, {
        fileName: "[project]/app/gltf2code2.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(ModelPreview, "CioSoI9bXTnhUDUNhygwWW+i1yE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ModelPreview;
// Helper function to generate material code
function generateMaterialCode(key, material) {
    let materialType = 'MeshStandardMaterial';
    let properties = [];
    // Determine material type
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]) materialType = 'MeshBasicMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]) materialType = 'MeshPhongMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshLambertMaterial"]) materialType = 'MeshLambertMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshNormalMaterial"]) materialType = 'MeshNormalMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]) materialType = 'MeshDepthMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshMatcapMaterial"]) materialType = 'MeshMatcapMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshToonMaterial"]) materialType = 'MeshToonMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]) materialType = 'MeshPhysicalMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]) materialType = 'MeshStandardMaterial';
    else if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]) materialType = 'ShaderMaterial';
    // Extract properties
    properties.push("color: new THREE.Color(".concat(material.color.r, ", ").concat(material.color.g, ", ").concat(material.color.b, ")"));
    if ('roughness' in material) properties.push("roughness: ".concat(material.roughness));
    if ('metalness' in material) properties.push("metalness: ".concat(material.metalness));
    if ('opacity' in material) properties.push("opacity: ".concat(material.opacity));
    if ('transparent' in material) properties.push("transparent: ".concat(material.transparent));
    if ('emissive' in material) {
        const emissive = material.emissive;
        properties.push("emissive: new THREE.Color(".concat(emissive.r, ", ").concat(emissive.g, ", ").concat(emissive.b, ")"));
    }
    if ('emissiveIntensity' in material) properties.push("emissiveIntensity: ".concat(material.emissiveIntensity));
    if ('shininess' in material) properties.push("shininess: ".concat(material.shininess));
    if ('wireframe' in material) properties.push("wireframe: ".concat(material.wireframe));
    return "map.set('".concat(key, "', new THREE.").concat(materialType, "({\n    ").concat(properties.join(',\n    '), "\n  }));");
}
// Helper function to generate geometry code
function generateGeometryCode(mesh) {
    const attributes = [
        "// Position data\n    const positions = new Float32Array(".concat(JSON.stringify(mesh.geometry.positions), ");\n    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));")
    ];
    if (mesh.geometry.normals) {
        attributes.push("// Normal data\n    const normals = new Float32Array(".concat(JSON.stringify(mesh.geometry.normals), ");\n    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));"));
    }
    if (mesh.geometry.uvs) {
        attributes.push("// UV data\n    const uvs = new Float32Array(".concat(JSON.stringify(mesh.geometry.uvs), ");\n    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));"));
    }
    let indexCode = '';
    if (mesh.geometry.indices) {
        indexCode = "// Index data\n    const indices = new Uint16Array(".concat(JSON.stringify(mesh.geometry.indices), ");\n    geometry.setIndex(new THREE.BufferAttribute(indices, 1));");
    }
    return "map.set('".concat(mesh.name, "', (() => {\n    const geometry = new THREE.BufferGeometry();\n    ").concat(attributes.join('\n    '), "\n    ").concat(indexCode, "\n    return geometry;\n  })());");
}
// Function to generate transpiled component (embeds all geometry data)
function generateTranspiledComponent(fileName, componentName, gltfData) {
    if (!gltfData) return '// Error: GLTF data not available for transpilation';
    const { scene } = gltfData;
    const meshes = [];
    const uniqueMaterials = new Map();
    // Extract all meshes from the scene
    scene.traverse((object)=>{
        if (object.isMesh) {
            // Process geometry
            const geometry = object.geometry;
            const positionArray = geometry.attributes.position.array;
            // Get or create material key
            const materialKey = Array.isArray(object.material) ? object.material.map((m)=>m.uuid).join('|') : object.material.uuid;
            // Store unique materials
            if (!uniqueMaterials.has(materialKey)) {
                uniqueMaterials.set(materialKey, object.material);
            }
            meshes.push({
                name: object.name || "mesh_".concat(meshes.length),
                geometry: {
                    positions: Array.from(positionArray),
                    normals: geometry.attributes.normal ? Array.from(geometry.attributes.normal.array) : null,
                    uvs: geometry.attributes.uv ? Array.from(geometry.attributes.uv.array) : null,
                    indices: geometry.index ? Array.from(geometry.index.array) : null
                },
                materialKey
            });
        }
    });
    // Generate material code
    const materialsCode = Array.from(uniqueMaterials.entries()).map((param)=>{
        let [key, material] = param;
        return generateMaterialCode(key, material);
    }).join(',\n');
    // Generate geometry code
    const geometriesCode = meshes.map((mesh)=>{
        return generateGeometryCode(mesh);
    }).join(',\n');
    // Generate JSX structure
    const jsxStructure = meshes.map((mesh)=>"      <mesh geometry={geometries.get('".concat(mesh.name, "')} material={materials.get('").concat(mesh.materialKey, "')} />")).join('\n');
    return "import React, { useMemo } from 'react';\nimport * as THREE from 'three';\nimport { GroupProps } from '@react-three/fiber';\n\n// Generated with gltfjsx-like transpilation\nexport default function ".concat(componentName, "(props: GroupProps) {\n  // Create materials\n  const materials = useMemo(() => {\n    const map = new Map();\n    ").concat(materialsCode, "\n    return map;\n  }, []);\n  \n  // Create geometries\n  const geometries = useMemo(() => {\n    const map = new Map();\n    ").concat(geometriesCode, "\n    return map;\n  }, []);\n  \n  return (\n    <group {...props} dispose={null}>\n").concat(jsxStructure, "\n    </group>\n  );\n}");
}
// Function to generate R3F component code
function generateR3FComponent(fileName, componentName) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { wireframe, displayMode, autoRotate } = options;
    let materialOverride = '';
    let rotationCode = '';
    if (wireframe || displayMode === 'wireframe') {
        materialOverride = "\n  // Apply wireframe material override\n  React.useEffect(() => {\n    if (nodes.Scene) {\n      nodes.Scene.traverse((child) => {\n        if (child.isMesh) {\n          if (Array.isArray(child.material)) {\n            child.material = child.material.map(mat => ({\n              ...mat,\n              wireframe: true,\n              transparent: true,\n              opacity: 0.8\n            }));\n          } else {\n            child.material = {\n              ...child.material,\n              wireframe: true,\n              transparent: true,\n              opacity: 0.8\n            }\n          }\n        }\n      })\n    }\n  }, [nodes])";
    }
    if (displayMode === 'normals') {
        materialOverride = "\n  // Apply normal material override\n  React.useEffect(() => {\n    if (nodes.Scene) {\n      nodes.Scene.traverse((child) => {\n        if (child.isMesh) {\n          child.material = new THREE.MeshNormalMaterial()\n        }\n      })\n    }\n  }, [nodes])";
    }
    if (displayMode === 'solid') {
        materialOverride = "\n  // Apply solid material override\n  React.useEffect(() => {\n    if (nodes.Scene) {\n      nodes.Scene.traverse((child) => {\n        if (child.isMesh) {\n          child.material = new THREE.MeshStandardMaterial({\n            color: 0x888888,\n            metalness: 0.1,\n            roughness: 0.8\n          })\n        }\n      })\n    }\n  }, [nodes])";
    }
    if (autoRotate) {
        rotationCode = "\n  const meshRef = useRef<THREE.Group>(null)\n  useFrame((state) => {\n    if (meshRef.current) {\n      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5\n    }\n  })";
    }
    const imports = "import React, { useRef".concat(materialOverride || rotationCode ? ', useEffect' : '').concat(rotationCode ? ', useFrame' : '', " } from 'react'\nimport { useGLTF").concat(rotationCode ? ', useFrame' : '', " } from '@react-three/drei'\nimport { GroupProps } from '@react-three/fiber'").concat(materialOverride.includes('THREE.') ? "\nimport * as THREE from 'three'" : '');
    return "".concat(imports, "\nexport default function ").concat(componentName, "(props: GroupProps) {\n  const { nodes, materials } = useGLTF('/").concat(fileName, "')").concat(rotationCode).concat(materialOverride, "\n  return (\n    <group {...props} dispose={null}").concat(autoRotate ? ' ref={meshRef}' : '', ">\n      <primitive object={nodes.Scene || nodes[Object.keys(nodes)[0]]} />\n    </group>\n  )\n}\nuseGLTF.preload('/").concat(fileName, "')");
}
function convertJsxToTsx(jsxCode, componentName) {
    // Add TypeScript imports
    let tsxCode = jsxCode.replace("import React from 'react'", "import React from 'react'\nimport { GroupProps } from '@react-three/fiber'");
    // Add type annotations to the main component
    tsxCode = tsxCode.replace("export default function ".concat(componentName, "(props) {"), "export default function ".concat(componentName, "(props: GroupProps) {"));
    // Add type for useGLTF hook
    tsxCode = tsxCode.replace("const { nodes, materials } = useGLTF", "const { nodes, materials }: any = useGLTF");
    return tsxCode;
}
// Function to generate code in different languages
function generateCodeInLanguage(fileName, componentName, language) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, gltfData = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
    const { wireframe, displayMode, autoRotate } = options;
    switch(language){
        case 'transpiled-tsx':
            return generateTranspiledComponent(fileName, componentName, gltfData);
        case 'transpiled-jsx':
            return generateTranspiledComponent(fileName, componentName, gltfData).replace(/: GroupProps|import { GroupProps } from '@react-three\/fiber'/g, '').replace(/React, { useRef, useMemo }/g, 'React, { useRef, useMemo, useEffect }');
        case 'tsx':
            return generateR3FComponent(fileName, componentName, options);
        case 'jsx':
            return generateR3FComponent(fileName, componentName, options).replace(/: GroupProps|: any|import { GroupProps } from '@react-three\/fiber'|: THREE\.GroupProps/g, '');
        case 'vanilla-js':
            return "// Vanilla JavaScript Three.js implementation\nimport * as THREE from 'three';\nimport { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';\nimport { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';\nclass ".concat(componentName, "Viewer {\n  constructor(canvasElement) {\n    this.canvas = canvasElement;\n    this.init();\n    this.loadModel();\n    ").concat(autoRotate ? 'this.animate();' : '', "\n  }\n  init() {\n    // Scene setup\n    this.scene = new THREE.Scene();\n    this.scene.background = new THREE.Color(0x1a1a2e);\n    // Camera setup\n    this.camera = new THREE.PerspectiveCamera(\n      50, \n      this.canvas.clientWidth / this.canvas.clientHeight, \n      0.1, \n      1000\n    );\n    this.camera.position.set(0, 0, 5);\n    // Renderer setup\n    this.renderer = new THREE.WebGLRenderer({ \n      canvas: this.canvas,\n      antialias: true \n    });\n    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);\n    this.renderer.shadowMap.enabled = true;\n    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;\n    // Lighting\n    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);\n    this.scene.add(ambientLight);\n    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);\n    directionalLight.position.set(10, 10, 10);\n    directionalLight.castShadow = true;\n    this.scene.add(directionalLight);\n    // Controls\n    this.controls = new OrbitControls(this.camera, this.renderer.domElement);\n    this.controls.enableDamping = true;\n    this.controls.dampingFactor = 0.05;\n    // Handle window resize\n    window.addEventListener('resize', () => this.onWindowResize());\n  }\n  loadModel() {\n    const loader = new GLTFLoader();\n    loader.load(\n      '").concat(fileName, "',\n      (gltf) => {\n        this.model = gltf.scene;\n        ").concat(displayMode === 'wireframe' ? "\n        // Apply wireframe material\n        this.model.traverse((child) => {\n          if (child.isMesh) {\n            child.material.wireframe = true;\n            child.material.transparent = true;\n            child.material.opacity = 0.8;\n          }\n        });" : '', "\n        ").concat(displayMode === 'normals' ? "\n        // Apply normal materials\n        this.model.traverse((child) => {\n          if (child.isMesh) {\n            child.material = new THREE.MeshNormalMaterial();\n          }\n        });" : '', "\n        this.scene.add(this.model);\n        this.render();\n      },\n      (progress) => {\n        console.log('Loading progress:', progress);\n      },\n      (error) => {\n        console.error('Error loading model:', error);\n      }\n    );\n  }\n  ").concat(autoRotate ? "\n  animate() {\n    requestAnimationFrame(() => this.animate());\n    if (this.model) {\n      this.model.rotation.y += 0.01;\n    }\n    this.controls.update();\n    this.render();\n  }" : "\n  render() {\n    this.controls.update();\n    this.renderer.render(this.scene, this.camera);\n  }", "\n  onWindowResize() {\n    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;\n    this.camera.updateProjectionMatrix();\n    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);\n    this.render();\n  }\n}\n// Usage:\n// const canvas = document.getElementById('canvas');\n// const viewer = new ").concat(componentName, "Viewer(canvas);\nexport default ").concat(componentName, "Viewer;");
        case 'python':
            return '#!/usr/bin/env python3\n"""\n'.concat(componentName, ' 3D Model Viewer\nPython implementation using Open3D and Trimesh\n"""\nimport open3d as o3d\nimport trimesh\nimport numpy as np\nimport argparse\nimport sys\nclass ').concat(componentName, "Viewer:\n    def __init__(self, model_path):\n        self.model_path = model_path\n        self.mesh = None\n        self.wireframe = ").concat(displayMode === 'wireframe' ? 'True' : 'False', "\n        self.auto_rotate = ").concat(autoRotate ? 'True' : 'False', '\n    def load_model(self):\n        """Load GLB/GLTF model using trimesh"""\n        try:\n            # Load using trimesh (supports GLB format)\n            scene = trimesh.load(self.model_path)\n            if isinstance(scene, trimesh.Scene):\n                # Merge all geometries if it\'s a scene\n                mesh = trimesh.util.concatenate([\n                    trimesh.Trimesh(vertices=geometry.vertices, faces=geometry.faces)\n                    for geometry in scene.geometry.values()\n                    if hasattr(geometry, \'vertices\')\n                ])\n            else:\n                mesh = scene\n            # Convert to Open3D mesh\n            self.mesh = o3d.geometry.TriangleMesh()\n            self.mesh.vertices = o3d.utility.Vector3dVector(mesh.vertices)\n            self.mesh.triangles = o3d.utility.Vector3iVector(mesh.faces)\n            # Compute normals\n            self.mesh.compute_vertex_normals()\n            print(f"Model loaded successfully: {len(mesh.vertices)} vertices, {len(mesh.faces)} faces")\n            return True\n        except Exception as e:\n            print(f"Error loading model: {e}")\n            return False\n    def setup_visualization(self):\n        """Setup Open3D visualization"""\n        self.vis = o3d.visualization.Visualizer()\n        self.vis.create_window(window_name=f"').concat(componentName, ' Viewer", width=800, height=600)\n        # Configure rendering options\n        render_option = self.vis.get_render_option()\n        render_option.show_coordinate_frame = True\n        render_option.background_color = np.asarray([0.1, 0.1, 0.18])\n        if self.wireframe:\n            render_option.mesh_show_wireframe = True\n            render_option.mesh_show_back_face = True\n        # Add mesh to visualizer\n        if self.mesh:\n            ').concat(displayMode === 'normals' ? "\n            # Color by normals\n            normals = np.asarray(self.mesh.vertex_normals)\n            colors = (normals + 1.0) / 2.0  # Normalize to [0,1]\n            self.mesh.vertex_colors = o3d.utility.Vector3dVector(colors)" : "\n            # Set default color\n            self.mesh.paint_uniform_color([0.7, 0.7, 0.7])", '\n            self.vis.add_geometry(self.mesh)\n    def run(self):\n        """Run the visualization"""\n        if not self.load_model():\n            return\n        self.setup_visualization()\n        # Set camera position\n        ctr = self.vis.get_view_control()\n        ctr.set_zoom(0.8)\n        print("Controls:")\n        print("- Mouse: Rotate view")\n        print("- Scroll: Zoom")\n        print("- Ctrl+Mouse: Pan")\n        print("- Press \'Q\' or close window to exit")\n        if self.auto_rotate:\n            self._run_with_rotation()\n        else:\n            self.vis.run()\n        self.vis.destroy_window()\n    def _run_with_rotation(self):\n        """Run with automatic rotation"""\n        while True:\n            # Rotate the mesh\n            rotation_matrix = self.mesh.get_rotation_matrix_from_axis_angle([0, 0.02, 0])\n            self.mesh.rotate(rotation_matrix, center=self.mesh.get_center())\n            self.vis.update_geometry(self.mesh)\n            self.vis.poll_events()\n            self.vis.update_renderer()\n            if not self.vis.poll_events():\n                break\ndef main():\n    parser = argparse.ArgumentParser(description=\'').concat(componentName, " 3D Model Viewer')\n    parser.add_argument('model_path', nargs='?', default='").concat(fileName, "', \n                       help='Path to the GLB model file')\n    args = parser.parse_args()\n    viewer = ").concat(componentName, 'Viewer(args.model_path)\n    viewer.run()\nif __name__ == "__main__":\n    main()\n# Required dependencies:\n# pip install open3d trimesh numpy');
        case 'cpp':
            return "// ".concat(componentName, " 3D Model Viewer - C++ OpenGL Implementation\n#include <GL/glew.h>\n#include <GLFW/glfw3.h>\n#include <glm/glm.hpp>\n#include <glm/gtc/matrix_transform.hpp>\n#include <glm/gtc/type_ptr.hpp>\n#include <assimp/Importer.hpp>\n#include <assimp/scene.h>\n#include <assimp/postprocess.h>\n#include <iostream>\n#include <vector>\n#include <string>\nclass ").concat(componentName, "Viewer {\nprivate:\n    GLFWwindow* window;\n    unsigned int VBO, VAO, EBO;\n    unsigned int shaderProgram;\n    std::vector<float> vertices;\n    std::vector<unsigned int> indices;\n    glm::mat4 model = glm::mat4(1.0f);\n    glm::mat4 view = glm::mat4(1.0f);\n    glm::mat4 projection = glm::mat4(1.0f);\n    float rotationAngle = 0.0f;\n    bool autoRotate = ").concat(autoRotate ? 'true' : 'false', ";\n    bool wireframe = ").concat(displayMode === 'wireframe' ? 'true' : 'false', ";\npublic:\n    ").concat(componentName, 'Viewer() {}\n    bool initialize() {\n        // Initialize GLFW\n        if (!glfwInit()) {\n            std::cerr << "Failed to initialize GLFW" << std::endl;\n            return false;\n        }\n        glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);\n        glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);\n        glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);\n        // Create window\n        window = glfwCreateWindow(800, 600, "').concat(componentName, ' Viewer", NULL, NULL);\n        if (!window) {\n            std::cerr << "Failed to create GLFW window" << std::endl;\n            glfwTerminate();\n            return false;\n        }\n        glfwMakeContextCurrent(window);\n        glfwSetFramebufferSizeCallback(window, framebuffer_size_callback);\n        // Initialize GLEW\n        if (glewInit() != GLEW_OK) {\n            std::cerr << "Failed to initialize GLEW" << std::endl;\n            return false;\n        }\n        // Enable depth testing\n        glEnable(GL_DEPTH_TEST);\n        // Set viewport\n        glViewport(0, 0, 800, 600);\n        return true;\n    }\n    bool loadModel(const std::string& path) {\n        Assimp::Importer importer;\n        const aiScene* scene = importer.ReadFile(path, \n            aiProcess_Triangulate | \n            aiProcess_FlipUVs | \n            aiProcess_GenNormals);\n        if (!scene || scene->mFlags & AI_SCENE_FLAGS_INCOMPLETE || !scene->mRootNode) {\n            std::cerr << "ERROR::ASSIMP::" << importer.GetErrorString() << std::endl;\n            return false;\n        }\n        processNode(scene->mRootNode, scene);\n        setupBuffers();\n        std::cout << "Model loaded: " << vertices.size()/6 << " vertices, " \n                 << indices.size()/3 << " triangles" << std::endl;\n        return true;\n    }\n    void processNode(aiNode* node, const aiScene* scene) {\n        // Process all the node\'s meshes\n        for (unsigned int i = 0; i < node->mNumMeshes; i++) {\n            aiMesh* mesh = scene->mMeshes[node->mMeshes[i]];\n            processMesh(mesh, scene);\n        }\n        // Process all the node\'s children\n        for (unsigned int i = 0; i < node->mNumChildren; i++) {\n            processNode(node->mChildren[i], scene);\n        }\n    }\n    void processMesh(aiMesh* mesh, const aiScene* scene) {\n        unsigned int baseVertex = vertices.size() / 6;\n        // Process vertices\n        for (unsigned int i = 0; i < mesh->mNumVertices; i++) {\n            // Positions\n            vertices.push_back(mesh->mVertices[i].x);\n            vertices.push_back(mesh->mVertices[i].y);\n            vertices.push_back(mesh->mVertices[i].z);\n            // Normals\n            if (mesh->HasNormals()) {\n                vertices.push_back(mesh->mNormals[i].x);\n                vertices.push_back(mesh->mNormals[i].y);\n                vertices.push_back(mesh->mNormals[i].z);\n            } else {\n                vertices.push_back(0.0f);\n                vertices.push_back(1.0f);\n                vertices.push_back(0.0f);\n            }\n        }\n        // Process indices\n        for (unsigned int i = 0; i < mesh->mNumFaces; i++) {\n            aiFace face = mesh->mFaces[i];\n            for (unsigned int j = 0; j < face.mNumIndices; j++) {\n                indices.push_back(baseVertex + face.mIndices[j]);\n            }\n        }\n    }\n    void setupBuffers() {\n        glGenVertexArrays(1, &VAO);\n        glGenBuffers(1, &VBO);\n        glGenBuffers(1, &EBO);\n        glBindVertexArray(VAO);\n        glBindBuffer(GL_ARRAY_BUFFER, VBO);\n        glBufferData(GL_ARRAY_BUFFER, vertices.size() * sizeof(float), vertices.data(), GL_STATIC_DRAW);\n        glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);\n        glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), indices.data(), GL_STATIC_DRAW);\n        // Position attribute\n        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);\n        glEnableVertexAttribArray(0);\n        // Normal attribute\n        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));\n        glEnableVertexAttribArray(1);\n        glBindBuffer(GL_ARRAY_BUFFER, 0);\n        glBindVertexArray(0);\n    }\n    void run() {\n        setupShaders();\n        // Set camera position\n        view = glm::lookAt(glm::vec3(0.0f, 0.0f, 5.0f),\n                          glm::vec3(0.0f, 0.0f, 0.0f),\n                          glm::vec3(0.0f, 1.0f, 0.0f));\n        projection = glm::perspective(glm::radians(50.0f), 800.0f / 600.0f, 0.1f, 100.0f);\n        // Render loop\n        while (!glfwWindowShouldClose(window)) {\n            processInput();\n            // Clear buffers\n            glClearColor(0.1f, 0.1f, 0.18f, 1.0f);\n            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\n            // Set wireframe mode\n            if (wireframe) {\n                glPolygonMode(GL_FRONT_AND_BACK, GL_LINE);\n            } else {\n                glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);\n            }\n            // Update model matrix\n            if (autoRotate) {\n                rotationAngle += 0.01f;\n                model = glm::rotate(glm::mat4(1.0f), rotationAngle, glm::vec3(0.0f, 1.0f, 0.0f));\n            }\n            // Use shader program\n            glUseProgram(shaderProgram);\n            // Set uniforms\n            unsigned int modelLoc = glGetUniformLocation(shaderProgram, "model");\n            unsigned int viewLoc = glGetUniformLocation(shaderProgram, "view");\n            unsigned int projLoc = glGetUniformLocation(shaderProgram, "projection");\n            glUniformMatrix4fv(modelLoc, 1, GL_FALSE, glm::value_ptr(model));\n            glUniformMatrix4fv(viewLoc, 1, GL_FALSE, glm::value_ptr(view));\n            glUniformMatrix4fv(projLoc, 1, GL_FALSE, glm::value_ptr(projection));\n            // Draw model\n            glBindVertexArray(VAO);\n            glDrawElements(GL_TRIANGLES, indices.size(), GL_UNSIGNED_INT, 0);\n            glfwSwapBuffers(window);\n            glfwPollEvents();\n        }\n    }\n    void setupShaders() {\n        const char* vertexShaderSource = R"(\n            #version 330 core\n            layout (location = 0) in vec3 aPos;\n            layout (location = 1) in vec3 aNormal;\n            out vec3 FragPos;\n            out vec3 Normal;\n            uniform mat4 model;\n            uniform mat4 view;\n            uniform mat4 projection;\n            void main() {\n                FragPos = vec3(model * vec4(aPos, 1.0));\n                Normal = mat3(transpose(inverse(model))) * aNormal;\n                gl_Position = projection * view * vec4(FragPos, 1.0);\n            }\n        )";\n        const char* fragmentShaderSource = R"(\n            #version 330 core\n            out vec4 FragColor;\n            in vec3 FragPos;\n            in vec3 Normal;\n            void main() {\n                ').concat(displayMode === 'normals' ? "\n                vec3 norm = normalize(Normal);\n                FragColor = vec4(abs(norm), 1.0);" : "\n                vec3 lightColor = vec3(1.0, 1.0, 1.0);\n                vec3 lightPos = vec3(5.0, 5.0, 5.0);\n                vec3 objectColor = vec3(0.7, 0.7, 0.7);\n                vec3 norm = normalize(Normal);\n                vec3 lightDir = normalize(lightPos - FragPos);\n                float diff = max(dot(norm, lightDir), 0.0);\n                vec3 diffuse = diff * lightColor;\n                vec3 ambient = 0.3 * lightColor;\n                vec3 result = (ambient + diffuse) * objectColor;\n                FragColor = vec4(result, 1.0);", '\n            }\n        )";\n        // Compile and link shaders\n        unsigned int vertexShader = glCreateShader(GL_VERTEX_SHADER);\n        glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);\n        glCompileShader(vertexShader);\n        unsigned int fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);\n        glShaderSource(fragmentShader, 1, &fragmentShaderSource, NULL);\n        glCompileShader(fragmentShader);\n        shaderProgram = glCreateProgram();\n        glAttachShader(shaderProgram, vertexShader);\n        glAttachShader(shaderProgram, fragmentShader);\n        glLinkProgram(shaderProgram);\n        glDeleteShader(vertexShader);\n        glDeleteShader(fragmentShader);\n    }\n    void processInput() {\n        if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)\n            glfwSetWindowShouldClose(window, true);\n        if (glfwGetKey(window, GLFW_KEY_W) == GLFW_PRESS)\n            wireframe = !wireframe;\n        if (glfwGetKey(window, GLFW_KEY_R) == GLFW_PRESS)\n            autoRotate = !autoRotate;\n    }\n    static void framebuffer_size_callback(GLFWwindow* window, int width, int height) {\n        glViewport(0, 0, width, height);\n    }\n    ~').concat(componentName, "Viewer() {\n        glDeleteVertexArrays(1, &VAO);\n        glDeleteBuffers(1, &VBO);\n        glDeleteBuffers(1, &EBO);\n        glDeleteProgram(shaderProgram);\n        glfwTerminate();\n    }\n};\nint main() {\n    ").concat(componentName, 'Viewer viewer;\n    if (!viewer.initialize()) {\n        return -1;\n    }\n    if (!viewer.loadModel("').concat(fileName, '")) {\n        std::cerr << "Failed to load model: ').concat(fileName, '" << std::endl;\n        return -1;\n    }\n    std::cout << "Controls:" << std::endl;\n    std::cout << "W - Toggle wireframe" << std::endl;\n    std::cout << "R - Toggle auto rotation" << std::endl;\n    std::cout << "ESC - Exit" << std::endl;\n    viewer.run();\n    return 0;\n}\n// Build instructions:\n// g++ -o ').concat(componentName.toLowerCase(), "_viewer main.cpp -lGL -lGLEW -lglfw -lassimp");
        default:
            return generateR3FComponent(fileName, componentName, options);
    }
}
function GLBConverter() {
    _s1();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modelUrl, setModelUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [generatedCode, setGeneratedCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [componentName, setComponentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Model');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('upload');
    const [gltfData, setGltfData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Display options
    const [displayMode, setDisplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('original');
    const [autoRotate, setAutoRotate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAxes, setShowAxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('transpiled-tsx');
    const handleFileUpload = async (event)=>{
        var _event_target_files;
        const uploadedFile = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        if (uploadedFile && uploadedFile.name.endsWith('.glb')) {
            setFile(uploadedFile);
            setError('');
            // Create object URL for preview
            const url = URL.createObjectURL(uploadedFile);
            setModelUrl(url);
            try {
                // Load and store GLTF data for transpilation
                const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
                const gltf = await loader.loadAsync(url);
                setGltfData(gltf);
            } catch (err) {
                console.error("Error loading GLTF data:", err);
                setError('Error processing GLB file for transpilation');
            }
            // Generate component name from filename
            const name = uploadedFile.name.replace('.glb', '').replace(/[^a-zA-Z0-9]/g, '');
            const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
            setComponentName(capitalizedName);
            setActiveTab('preview');
        } else {
            setError('Please upload a valid .glb file');
        }
    };
    // Regenerate code when display options change
    const regenerateCode = ()=>{
        if (file) {
            const options = {
                wireframe: displayMode === 'wireframe',
                displayMode,
                autoRotate
            };
            const code = generateCodeInLanguage(file.name, componentName, selectedLanguage, options, gltfData);
            setGeneratedCode(code);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GLBConverter.useEffect": ()=>{
            if (file) {
                regenerateCode();
            }
        }
    }["GLBConverter.useEffect"], [
        file,
        displayMode,
        autoRotate,
        componentName,
        selectedLanguage,
        gltfData
    ]);
    const downloadModel = ()=>{
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
    const downloadCode = ()=>{
        if (!generatedCode) return;
        const extension = selectedLanguage === 'transpiled-tsx' || selectedLanguage === 'tsx' ? 'tsx' : selectedLanguage === 'transpiled-jsx' || selectedLanguage === 'jsx' ? 'jsx' : selectedLanguage === 'vanilla-js' ? 'js' : selectedLanguage === 'python' ? 'py' : 'cpp';
        const blob = new Blob([
            generatedCode
        ], {
            type: 'text/plain'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "".concat(componentName, ".").concat(extension);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-white mb-4",
                            children: "GLB to React Three Fiber Converter"
                        }, void 0, false, {
                            fileName: "[project]/app/gltf2code2.tsx",
                            lineNumber: 934,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 max-w-2xl mx-auto",
                            children: "Convert your GLB 3D models into self-contained React Three Fiber components. Upload your model, preview it, and download the generated code with all geometry data embedded."
                        }, void 0, false, {
                            fileName: "[project]/app/gltf2code2.tsx",
                            lineNumber: 937,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/gltf2code2.tsx",
                    lineNumber: 933,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-lg p-1 flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('upload'),
                                className: "px-6 py-2 rounded-md font-medium transition-all ".concat(activeTab === 'upload' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-4 h-4 inline mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 954,
                                        columnNumber: 15
                                    }, this),
                                    "Upload"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 946,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('preview'),
                                disabled: !file,
                                className: "px-6 py-2 rounded-md font-medium transition-all ".concat(activeTab === 'preview' && file ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-4 h-4 inline mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 966,
                                        columnNumber: 15
                                    }, this),
                                    "Preview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 957,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab('code'),
                                disabled: !generatedCode,
                                className: "px-6 py-2 rounded-md font-medium transition-all ".concat(activeTab === 'code' && generatedCode ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                        className: "w-4 h-4 inline mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 978,
                                        columnNumber: 15
                                    }, this),
                                    "Code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 969,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gltf2code2.tsx",
                        lineNumber: 945,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gltf2code2.tsx",
                    lineNumber: 944,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-5 h-5 text-red-400 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 988,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-200",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 989,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gltf2code2.tsx",
                        lineNumber: 987,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gltf2code2.tsx",
                    lineNumber: 986,
                    columnNumber: 11
                }, this),
                activeTab === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl p-8 border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-2 border-dashed border-slate-600 rounded-lg p-12 hover:border-purple-500 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-12 h-12 text-slate-400 mx-auto mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-white mb-2",
                                            children: "Upload your GLB model"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 mb-6",
                                            children: "Drop your .glb file here or click to browse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1004,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".glb",
                                            onChange: handleFileUpload,
                                            className: "hidden",
                                            id: "file-upload"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1007,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "file-upload",
                                            className: "bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors inline-block",
                                            children: "Choose File"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1014,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gltf2code2.tsx",
                                    lineNumber: 999,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 998,
                                columnNumber: 15
                            }, this),
                            file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 p-4 bg-slate-700 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white font-medium",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm",
                                                    children: [
                                                        (file.size / 1024 / 1024).toFixed(2),
                                                        " MB"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1027,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1025,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: componentName,
                                                onChange: (e)=>setComponentName(e.target.value),
                                                className: "bg-slate-600 text-white px-3 py-1 rounded border border-slate-500 focus:border-purple-500 outline-none",
                                                placeholder: "Component name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1032,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1031,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gltf2code2.tsx",
                                    lineNumber: 1024,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1023,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gltf2code2.tsx",
                        lineNumber: 997,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gltf2code2.tsx",
                    lineNumber: 996,
                    columnNumber: 11
                }, this),
                activeTab === 'preview' && modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl p-6 border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-white",
                                        children: "3D Model Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 1052,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-300 text-sm",
                                                        children: "Display Mode:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: displayMode,
                                                        onChange: (e)=>setDisplayMode(e.target.value),
                                                        className: "bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "original",
                                                                children: "Original"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1062,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "wireframe",
                                                                children: "Wireframe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1063,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "solid",
                                                                children: "Solid Color"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1064,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "normals",
                                                                children: "Normals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1065,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "depth",
                                                                children: "Depth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1066,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "points",
                                                                children: "Point Cloud"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1067,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1057,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1055,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: autoRotate,
                                                                onChange: (e)=>setAutoRotate(e.target.checked),
                                                                className: "rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1074,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Auto Rotate"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1073,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: showGrid,
                                                                onChange: (e)=>setShowGrid(e.target.checked),
                                                                className: "rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1083,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Grid"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1082,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 text-slate-300 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: showAxes,
                                                                onChange: (e)=>setShowAxes(e.target.checked),
                                                                className: "rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1092,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Axes"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1091,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1072,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: downloadModel,
                                                className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1106,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Download GLB"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 1053,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1051,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 rounded-lg p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-sm",
                                        children: [
                                            displayMode === 'original' && 'Showing the original model with its materials and textures.',
                                            displayMode === 'wireframe' && 'Displaying the model as a wireframe structure showing the mesh geometry.',
                                            displayMode === 'solid' && 'Rendering the model with a uniform solid color material.',
                                            displayMode === 'normals' && 'Visualizing surface normals with color-coded directions (RGB = XYZ).',
                                            displayMode === 'depth' && 'Showing depth information - closer surfaces appear lighter.',
                                            displayMode === 'points' && 'Displaying the model as a point cloud of vertices.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 1115,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/gltf2code2.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 rounded-lg overflow-hidden",
                                style: {
                                    height: '500px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                                    camera: {
                                        position: [
                                            0,
                                            0,
                                            5
                                        ],
                                        fov: 50
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                                            intensity: 0.5
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                                            position: [
                                                10,
                                                10,
                                                10
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1129,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                                            position: [
                                                -10,
                                                -10,
                                                -10
                                            ],
                                            intensity: 0.3
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Suspense, {
                                            fallback: null,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelPreview, {
                                                url: modelUrl,
                                                displayMode: displayMode,
                                                autoRotate: autoRotate
                                            }, void 0, false, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1132,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1131,
                                            columnNumber: 19
                                        }, this),
                                        showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("gridHelper", {
                                            args: [
                                                10,
                                                10,
                                                '#444444',
                                                '#666666'
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1135,
                                            columnNumber: 21
                                        }, this),
                                        showAxes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("axesHelper", {
                                            args: [
                                                2
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1138,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                                            enableZoom: true,
                                            enablePan: true,
                                            enableRotate: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1140,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                                            preset: "studio"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gltf2code2.tsx",
                                    lineNumber: 1127,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm mt-4 text-center",
                                children: "Use mouse to rotate, zoom, and pan around the model. Try different display modes to analyze the model structure."
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1145,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gltf2code2.tsx",
                        lineNumber: 1050,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gltf2code2.tsx",
                    lineNumber: 1049,
                    columnNumber: 11
                }, this),
                activeTab === 'code' && generatedCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 rounded-xl border border-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center p-6 border-b border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold text-white",
                                                children: "Generated Code"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-slate-300 text-sm",
                                                        children: "Language:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1164,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedLanguage,
                                                        onChange: (e)=>setSelectedLanguage(e.target.value),
                                                        className: "bg-slate-700 text-white px-3 py-1 rounded border border-slate-600 focus:border-purple-500 outline-none text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "transpiled-tsx",
                                                                children: "Transpiled TypeScript (TSX)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1170,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "transpiled-jsx",
                                                                children: "Transpiled JavaScript (JSX)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1171,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "tsx",
                                                                children: "TypeScript React (TSX)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1172,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "jsx",
                                                                children: "JavaScript React (JSX)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1173,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "vanilla-js",
                                                                children: "Vanilla JavaScript"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1174,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "python",
                                                                children: "Python (Open3D)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1175,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "cpp",
                                                                children: "C++ (OpenGL)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1176,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1165,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1163,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 1157,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: downloadCode,
                                        className: "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1185,
                                                columnNumber: 19
                                            }, this),
                                            "Download ",
                                            selectedLanguage.toUpperCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1156,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-slate-900 border-b border-slate-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-400",
                                    children: [
                                        selectedLanguage === 'transpiled-tsx' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "✨ ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Transpiled TypeScript:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1194,
                                                    columnNumber: 29
                                                }, this),
                                                " Self-contained component with all geometry data embedded (no external GLB needed)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1194,
                                            columnNumber: 21
                                        }, this),
                                        selectedLanguage === 'transpiled-jsx' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "✨ ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Transpiled JavaScript:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1197,
                                                    columnNumber: 29
                                                }, this),
                                                " Self-contained component with all geometry data embedded (no external GLB needed)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1197,
                                            columnNumber: 21
                                        }, this),
                                        selectedLanguage === 'tsx' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "⚡ ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "TypeScript React:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1200,
                                                    columnNumber: 29
                                                }, this),
                                                " Uses external GLB file (requires file in public folder)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1200,
                                            columnNumber: 21
                                        }, this),
                                        selectedLanguage === 'jsx' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "⚡ ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "JavaScript React:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 29
                                                }, this),
                                                " Uses external GLB file (requires file in public folder)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1203,
                                            columnNumber: 21
                                        }, this),
                                        selectedLanguage === 'vanilla-js' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "✨ ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Vanilla JavaScript:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 29
                                                }, this),
                                                " Pure Three.js implementation - works in any web environment"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1206,
                                            columnNumber: 21
                                        }, this),
                                        selectedLanguage === 'python' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "🐍 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Python:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 30
                                                }, this),
                                                " Cross-platform 3D viewer using Open3D and Trimesh libraries"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1209,
                                            columnNumber: 21
                                        }, this),
                                        selectedLanguage === 'cpp' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "⚙️ ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "C++:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                    lineNumber: 1212,
                                                    columnNumber: 30
                                                }, this),
                                                " High-performance OpenGL renderer with GLFW and Assimp"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gltf2code2.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gltf2code2.tsx",
                                    lineNumber: 1192,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1191,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-slate-900 rounded-lg p-4 overflow-x-auto text-sm max-h-96 overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-slate-300 whitespace-pre-wrap",
                                        children: generatedCode
                                    }, void 0, false, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 1219,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/gltf2code2.tsx",
                                    lineNumber: 1218,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1217,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-t border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-semibold text-white mb-3",
                                        children: selectedLanguage.startsWith('transpiled-') ? 'Transpiled Component Instructions' : selectedLanguage === 'tsx' || selectedLanguage === 'jsx' ? 'Installation Instructions' : selectedLanguage === 'vanilla-js' ? 'Usage Instructions' : selectedLanguage === 'python' ? 'Python Setup' : 'Build Instructions'
                                    }, void 0, false, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 1224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            (selectedLanguage === 'transpiled-tsx' || selectedLanguage === 'transpiled-jsx') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "1. Copy the generated code to a new file:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1235,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-blue-400",
                                                                    children: "import ".concat(componentName, " from './").concat(componentName, "'")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1237,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1236,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1234,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "2. Use the component directly (no external GLB needed):"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1241,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-blue-400",
                                                                    children: "<Canvas>\n  <".concat(componentName, " />\n</Canvas>")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1243,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1242,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1240,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400 text-sm mb-2",
                                                            children: "3. All geometry data is embedded in the component"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gltf2code2.tsx",
                                                            lineNumber: 1249,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1248,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            (selectedLanguage === 'tsx' || selectedLanguage === 'jsx') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "1. Install required dependencies:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1256,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-green-400",
                                                                    children: "npm install three @react-three/fiber @react-three/drei"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1258,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1257,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1255,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400 text-sm mb-2",
                                                            children: "2. Place your GLB file in the public folder"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gltf2code2.tsx",
                                                            lineNumber: 1262,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1261,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "3. Import and use the component:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1265,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-blue-400",
                                                                    children: "import ".concat(componentName, " from './").concat(componentName, "'")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1267,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1266,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1264,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            selectedLanguage === 'vanilla-js' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "1. Include Three.js in your HTML:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1275,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-green-400",
                                                                    children: '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1277,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1276,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1274,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "2. Create a canvas element:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1281,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-blue-400",
                                                                    children: '<canvas id="canvas" width="800" height="600"></canvas>'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1283,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1282,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1280,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "3. Initialize the viewer:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1287,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-blue-400",
                                                                    children: "const canvas = document.getElementById('canvas');\nconst viewer = new ".concat(componentName, "Viewer(canvas);")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1289,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1288,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            selectedLanguage === 'python' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "1. Install required dependencies:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1298,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-green-400",
                                                                    children: "pip install open3d trimesh numpy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1300,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1299,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "2. Run the viewer:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1304,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-blue-400",
                                                                    children: [
                                                                        "python ",
                                                                        componentName.toLowerCase(),
                                                                        "_viewer.py [model_path]"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1306,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1305,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1303,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "3. Controls:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1310,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "text-slate-400 text-sm ml-4 space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "• Mouse: Rotate view"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                                        lineNumber: 1312,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "• Scroll: Zoom in/out"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                                        lineNumber: 1313,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "• Ctrl+Mouse: Pan view"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                                        lineNumber: 1314,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "• Q: Quit application"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                                        lineNumber: 1315,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1311,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1309,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            selectedLanguage === 'cpp' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "1. Install dependencies (Ubuntu/Debian):"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1323,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-green-400",
                                                                    children: "sudo apt install libglew-dev libglfw3-dev libassimp-dev libglm-dev"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1325,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1324,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1322,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "2. Compile:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1329,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-blue-400",
                                                                    children: "g++ -o viewer main.cpp -lGL -lGLEW -lglfw -lassimp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1331,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1330,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1328,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "3. Run:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1335,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "bg-slate-900 rounded p-2 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-blue-400",
                                                                    children: "./viewer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/gltf2code2.tsx",
                                                                    lineNumber: 1337,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1336,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1334,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-400 text-sm mb-2",
                                                                children: "4. Controls:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1341,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "text-slate-400 text-sm ml-4 space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "• W: Toggle wireframe"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                                        lineNumber: 1343,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "• R: Toggle auto rotation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                                        lineNumber: 1344,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: "• ESC: Exit application"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                                        lineNumber: 1345,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1342,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1340,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            (displayMode !== 'original' || autoRotate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-sm mb-2",
                                                        children: "Applied Options:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1352,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-slate-400 text-sm ml-4 space-y-1",
                                                        children: [
                                                            displayMode !== 'original' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "• Display Mode: ",
                                                                    displayMode
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1354,
                                                                columnNumber: 56
                                                            }, this),
                                                            autoRotate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Auto Rotation: Enabled"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/gltf2code2.tsx",
                                                                lineNumber: 1355,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/gltf2code2.tsx",
                                                        lineNumber: 1353,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/gltf2code2.tsx",
                                                lineNumber: 1351,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gltf2code2.tsx",
                                        lineNumber: 1231,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gltf2code2.tsx",
                                lineNumber: 1223,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gltf2code2.tsx",
                        lineNumber: 1155,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/gltf2code2.tsx",
                    lineNumber: 1154,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/gltf2code2.tsx",
            lineNumber: 931,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/gltf2code2.tsx",
        lineNumber: 930,
        columnNumber: 5
    }, this);
}
_s1(GLBConverter, "HhUaEMNp58glMCc59LFfd4Sxoxo=");
_c1 = GLBConverter;
var _c, _c1;
__turbopack_context__.k.register(_c, "ModelPreview");
__turbopack_context__.k.register(_c1, "GLBConverter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_gltf2code2_tsx_e1945e92._.js.map