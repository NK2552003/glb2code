
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import type {
  MeshData,
  MaterialData,
  ProjectStructure,
  GeometryData,
} from "@/types/glb-convertor";
import generateExamplePage from "./generateExamplePage";
import { LanguageId, LANGUAGES } from "@/types/constant";
import { getLanguageSpecificName } from "../functions/getLanguageSpacificName";
import { sanitizeName } from "../functions/sanitizeName";
import generateGeometryFile from "./generateGeometryFile";
import generateIndexComponent from "./generateIndexComponent";
import generateMaterialComponent from "./generateMaterialComponent";
import generateMeshComponent from "./generateMeshComponent";


export default function generateProjectStructure(
  gltf: GLTF,
  componentName: string,
  displayMode: string = "original",
  languageId: LanguageId = "typescript"
): ProjectStructure {
  const lang = LANGUAGES[languageId];
  const meshes: MeshData[] = [];
  const materials: MaterialData[] = [];
  const geometries: GeometryData[] = [];
  let totalVertices = 0;
  let totalTriangles = 0;

  gltf.scene.traverse((object: any) => {
    if (object.isMesh) {
      const mesh = object as THREE.Mesh;
      const geometry = mesh.geometry;
      totalVertices += geometry.attributes.position.count;
      if (geometry.index) {
        totalTriangles += geometry.index.count / 3;
      } else {
        totalTriangles += geometry.attributes.position.count / 3;
      }

      const meshName = mesh.name || `Mesh_${meshes.length}`;
      const safeMeshName = sanitizeName(meshName);
      const meshComponentName = getLanguageSpecificName(
        safeMeshName,
        languageId
      );

      const geometryFile = generateGeometryFile(
        meshComponentName,
        geometry,
        languageId
      );
      geometries.push({
        name: meshComponentName,
        content: geometryFile,
        originalName: meshName,
      });

      const meshComponent = generateMeshComponent(
        meshComponentName,
        geometry,
        displayMode,
        languageId
      );
      meshes.push({
        name: meshComponentName,
        content: meshComponent,
        originalName: meshName,
      });

      const material = Array.isArray(mesh.material)
        ? mesh.material[0]
        : mesh.material;
      const materialName = material.name || `Material_${materials.length}`;
      const safeMaterialName = sanitizeName(materialName);
      const materialComponentName = getLanguageSpecificName(
        safeMaterialName,
        languageId
      );

      // Extract geometry attributes
      const hasNormals = !!geometry.attributes.normal;
      const hasUvs = !!geometry.attributes.uv;

      // Only add the material if it doesn't already exist
      if (!materials.some((m) => m.name === materialComponentName)) {
        const materialComponent = generateMaterialComponent(
          materialComponentName,
          material,
          displayMode,
          languageId,
          hasNormals,
          hasUvs
        );

        materials.push({
          name: materialComponentName,
          content: materialComponent,
          originalName: materialName,
        });
      }
    }
  });

  const componentComponentName = getLanguageSpecificName(
    sanitizeName(componentName),
    languageId
  );
  const indexContent = generateIndexComponent(
    componentComponentName,
    meshes,
    materials,
    displayMode,
    languageId
  );
  const examplePageContent = generateExamplePage(
    componentComponentName,
    languageId
  );

  return {
    componentName: componentComponentName,
    indexContent,
    examplePageContent,
    meshes,
    geometries,
    materials,
    totalVertices,
    totalTriangles,
  };
}