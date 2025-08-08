import { CPPMesh } from '@/templates/mesh/cpp';
import { CSharpMesh } from '@/templates/mesh/csharp';
import { DartMesh } from '@/templates/mesh/dart';
import { GoMesh } from '@/templates/mesh/go';
import { JavaMesh } from '@/templates/mesh/java';
import { JavascriptMesh } from '@/templates/mesh/javascript';
import { KotlinMesh } from '@/templates/mesh/kotlin';
import { PHPMesh } from '@/templates/mesh/php';
import { PythonMesh } from '@/templates/mesh/python';
import { RMesh } from '@/templates/mesh/r';
import { RubyMesh } from '@/templates/mesh/ruby';
import { RustMesh } from '@/templates/mesh/rust';
import { ScalaMesh } from '@/templates/mesh/scala';
import { SwiftMesh } from '@/templates/mesh/swift';
import { TypescriptMesh } from '@/templates/mesh/typescript';
import { LanguageId } from '@/types/constant';
import * as THREE from 'three';

export default function generateMeshComponent(
  meshName: string,
  _geometry: THREE.BufferGeometry,
  displayMode: string,
  languageId: LanguageId
): string {
  switch (languageId) {
    case "typescript":
      return TypescriptMesh(meshName);
    case "javascript":
      return JavascriptMesh(meshName);
    case "python":
      return PythonMesh(meshName); 
    case "java":
      return JavaMesh(meshName);
    case "cpp":
      return CPPMesh(meshName);
    case "csharp":
      return CSharpMesh(meshName);
    case "php":
      return PHPMesh(meshName);
    case "ruby":
      return RubyMesh(meshName);
    case "scala":
      return ScalaMesh(meshName);
    case "kotlin":
      return KotlinMesh(meshName);
    case "dart":
      return DartMesh(meshName);
    case "r":
      return RMesh(meshName);
    case "go":
      return GoMesh(meshName);
    case "swift":
      return SwiftMesh(meshName);
    case "rust":
      return RustMesh(meshName);
    default:
      // Fallback to TypeScript for unsupported languages
      return generateMeshComponent(
        meshName,
        _geometry,
        displayMode,
        "typescript"
      );
  }
}