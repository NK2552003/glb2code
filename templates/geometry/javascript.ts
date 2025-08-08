import { formatArrayData } from "@/lib/functions/formatArrayData";

export function JavascriptGeometry(meshName, isLargeGeometry,normals,uvs,indices,positions, languageId,){
    return `import * as THREE from 'three';
        // ${meshName} geometry definition
        export const ${meshName}Geometry = (() => {
          const geometry = new THREE.BufferGeometry();
          // Position data
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
            }
          geometry.computeVertexNormals();
          return geometry;
        })();
        `;
}