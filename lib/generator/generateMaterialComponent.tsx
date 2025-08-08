import { LanguageId } from '@/types/constant';
import * as THREE from 'three';
import { TypescriptMaterial } from '@/templates/material/typescript';
import { JavascriptMaterial } from '@/templates/material/javascript';
import { PythonMaterial } from '@/templates/material/python';
import { PHPMaterial } from '@/templates/material/php';
import { RubyMaterial } from '@/templates/material/ruby';
import { ScalaMaterial } from '@/templates/material/scala';
import { KotlinMaterial } from '@/templates/material/kotlin';
import { DartMaterial } from '@/templates/material/dart';
import { RMaterial } from '@/templates/material/r';
import { CPPMaterial } from '@/templates/material/cpp';
import { GoMaterial } from '@/templates/material/go';
import { RustMaterial } from '@/templates/material/rust';
import { SwiftMaterial } from '@/templates/material/swift';
import { JavaMaterial } from '@/templates/material/java';
import { CSharpMaterial } from '@/templates/material/csharp';

export default function generateMaterialComponent(
  materialName: string,
  material: THREE.Material,
  displayMode: string,
  languageId: LanguageId,
  hasNormals: boolean = false,
  hasUvs: boolean = false
): string {
  let materialType = "MeshStandardMaterial";
  const properties: string[] = [];

  // Determine material type
  if (material instanceof THREE.MeshBasicMaterial)
    materialType = "MeshBasicMaterial";
  else if (material instanceof THREE.MeshPhongMaterial)
    materialType = "MeshPhongMaterial";
  else if (material instanceof THREE.MeshLambertMaterial)
    materialType = "MeshLambertMaterial";
  else if (material instanceof THREE.MeshNormalMaterial)
    materialType = "MeshNormalMaterial";
  else if (material instanceof THREE.MeshDepthMaterial)
    materialType = "MeshDepthMaterial";
  else if (material instanceof THREE.MeshMatcapMaterial)
    materialType = "MeshMatcapMaterial";
  else if (material instanceof THREE.MeshToonMaterial)
    materialType = "MeshToonMaterial";
  else if (material instanceof THREE.MeshPhysicalMaterial)
    materialType = "MeshPhysicalMaterial";

  // Configure properties based on display mode
  switch (displayMode) {
    case "wireframe":
      properties.push("wireframe: true", "transparent: true", "opacity: 0.8");
      break;
    case "solid":
      properties.push("color: 0x888888", "metalness: 0.1", "roughness: 0.8");
      break;
    case "normals":
      materialType = "MeshNormalMaterial";
      break;
    case "depth":
      materialType = "MeshDepthMaterial";
      break;
    case "points":
      materialType = "PointsMaterial";
      properties.push("color: 0x00ff00", "size: 0.01", "sizeAttenuation: true");
      break;
    default:
     if ('color' in material && material.color instanceof THREE.Color) {
        const color = material.color as THREE.Color;
        properties.push(
          `color: new THREE.Color(${color.r}, ${color.g}, ${color.b})`
        );
      }
      if ("roughness" in material)
        properties.push(`roughness: ${(material as any).roughness}`);
      if ("metalness" in material)
        properties.push(`metalness: ${(material as any).metalness}`);
      if ("opacity" in material)
        properties.push(`opacity: ${(material as any).opacity}`);
      if ("transparent" in material)
        properties.push(`transparent: ${(material as any).transparent}`);
      break;
  }

  switch (languageId) {
    case "typescript":
      return TypescriptMaterial(materialName,materialType,properties);
    case "javascript":
      return JavascriptMaterial(materialName,materialType,properties);
    case "python":
      return PythonMaterial(materialName,hasNormals, hasUvs,displayMode);
    case "php":
      return PHPMaterial(materialName, properties);
    case "ruby":
      return RubyMaterial(materialName, properties);
    case "scala":
      return ScalaMaterial(materialName,properties);
    case "kotlin":
      return KotlinMaterial(materialName, properties);
    case "dart":
      return DartMaterial(materialName, properties);
    case "r":
      return RMaterial(materialName, properties);
    case "cpp":
      return CPPMaterial(materialName, properties);
    case "go":
      return GoMaterial(materialName, properties);
    case "rust":
      return RustMaterial(materialName, properties);
    case "swift":
      return SwiftMaterial(materialName, properties);
    case "java":
      return JavaMaterial(material, materialName,materialType,properties);
    case "csharp":
      return CSharpMaterial(material,properties,materialName, materialType);
    default:
      // Fallback to TypeScript for unsupported languages
      return generateMaterialComponent(
        materialName,
        material,
        displayMode,
        "typescript",
        hasNormals,
        hasUvs
      );
  }
}
