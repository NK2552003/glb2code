import { LanguageId } from '@/types/constant';
import * as THREE from 'three'
import { TypescriptGeometry } from '@/templates/geometry/typescript';
import { JavascriptGeometry } from '@/templates/geometry/javascript';
import { PythonGeometry } from '@/templates/geometry/python';
import { JavaGeometry } from '@/templates/geometry/java';
import { CSharpGeometry } from '@/templates/geometry/csharp';
import { CPPGeometry } from '@/templates/geometry/cpp';
import { GoGeometry } from '@/templates/geometry/go';
import { RustGeometry } from '@/templates/geometry/rust';
import { SwiftGeometry } from '@/templates/geometry/swift';
import { PHPGeometry } from '@/templates/geometry/php';
import { RubyGeometry } from '@/templates/geometry/ruby';
import { ScalaGeometry } from '@/templates/geometry/scala';
import { KotlinGeometry } from '@/templates/geometry/kotlin';
import { DartGeometry } from '@/templates/geometry/dart';
import { RGeometry } from '@/templates/geometry/r';

export default function generateGeometryFile(
  meshName: string,
  geometry: THREE.BufferGeometry,
  languageId: LanguageId
): string {
  const positions = Array.from(geometry.attributes.position.array);
  const normals = geometry.attributes.normal
    ? Array.from(geometry.attributes.normal.array)
    : null;
  const uvs = geometry.attributes.uv
    ? Array.from(geometry.attributes.uv.array)
    : null;
  const indices = geometry.index ? Array.from(geometry.index.array) : null;

  const isLargeGeometry = positions.length > 100000;

  switch (languageId) {
    case "typescript":
      return TypescriptGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "javascript":
      return JavascriptGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "python":
      return PythonGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "java":
      return JavaGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "csharp":
      return CSharpGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "cpp":
      return CPPGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "go":
      return GoGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "rust":
      return RustGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);

    case "swift":
      return SwiftGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "php":
      return PHPGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "ruby":
      return RubyGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "scala":
      return ScalaGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "kotlin":
      return KotlinGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "dart":
      return DartGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    case "r":
      return RGeometry(meshName,isLargeGeometry,normals,uvs,indices,positions,languageId);
    default:
      return generateGeometryFile(meshName, geometry, "typescript");
  }
}