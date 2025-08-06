export interface MeshData {
  name: string;
  content: string;
  originalName: string;
}

export interface MaterialData {
  name: string;
  content: string;
  originalName: string;
}

export interface GeometryData {
  name: string;
  content: string;
  originalName: string;
}

export interface ProjectStructure {
  componentName: string;
  indexContent: string;
  examplePageContent: string;
  meshes: MeshData[];
  geometries: GeometryData[];  // New field for geometry blocks
  materials: MaterialData[];
  totalVertices: number;
  totalTriangles: number;
}