export function JavascriptIndex(meshes,materials,componentName){
    {
       const meshImportsJS = meshes
        .map((mesh) => `import ${mesh.name} from './meshes/${mesh.name}';`)
        .join("\n");
      const materialImportsJS = materials
        .map(
          (material) =>
            `import ${material.name} from './materials/${material.name}';`
        )
        .join("\n");
      const meshElementsJS = meshes
        .map((mesh, i) => {
          const material = materials[i % materials.length];
          return `      <${mesh.name} material={${material.name}()} />`;
        })
        .join("\n");
      return `import React, { useRef } from 'react';
    import { Group } from '@react-three/fiber';
    ${meshImportsJS}
    ${materialImportsJS}
    /**
     * ${componentName} component
     */
    export default function ${componentName}(props) {
      const ref = useRef(null);
      return (
        <group ref={ref} {...props}>
    ${meshElementsJS}
        </group>
      );
    }
    `;
    }
}