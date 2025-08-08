import { formatArrayData } from "@/lib/functions/formatArrayData";

export function TypescriptGeometry(meshName, isLargeGeometry,normals,uvs,indices,positions, languageId,){
    return `import * as THREE from 'three';
    
    // ${meshName} geometry definition
    export const ${meshName}Geometry = (() => {
      const geometry = new THREE.BufferGeometry();
      
      ${isLargeGeometry
              ? `// Large geometry - using chunked approach
      const createGeometryChunk = (data: number[], itemSize: number) => {
        const chunkSize = 50000;
        const chunks: Float32Array[] = [];
        for (let i = 0; i < data.length; i += chunkSize) {
          const chunk = data.slice(i, i + chunkSize);
          chunks.push(new Float32Array(chunk));
        }
        return chunks;
      };
      
      const positionChunks = createGeometryChunk(${JSON.stringify(positions)}, 3);
      const positions = new Float32Array(positionChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      ${normals
                ? `const normalChunks = createGeometryChunk(${JSON.stringify(
                  normals
                )}, 3);
      const normals = new Float32Array(normalChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));`
                : ""
              }
      
      ${uvs
                ? `const uvChunks = createGeometryChunk(${JSON.stringify(uvs)}, 2);
      const uvs = new Float32Array(uvChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));`
                : ""
              }
      
      ${indices
                ? `const indexChunks = createGeometryChunk(${JSON.stringify(indices)}, 1);
      const indices = new Uint16Array(indexChunks.reduce((acc, chunk) => [...acc, ...chunk], [] as number[]));
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));`
                : ""
              }`
              : `// Position data
      const positions = ${formatArrayData(positions, languageId)};
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      ${normals
                ? `// Normal data
      const normals = ${formatArrayData(normals, languageId)};
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));`
                : ""
              }
      
      ${uvs
                ? `// UV data
      const uvs = ${formatArrayData(uvs, languageId)};
      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));`
                : ""
              }
      
      ${indices
                ? `// Index data
      const indices = new Uint16Array(${JSON.stringify(indices)});
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));`
                : ""
              }`
            }
    
      geometry.computeVertexNormals();
      return geometry;
    })();
    `;
}