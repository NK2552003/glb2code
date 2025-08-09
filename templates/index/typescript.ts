import { capitalize } from "@/lib/functions/capitalize";

export function TypescriptIndex(meshes,materials,componentName,){
    componentName = capitalize(componentName);
   {const meshImports = meshes
        .map((mesh) => `import ${capitalize(mesh.name)} from './meshes/${mesh.name}';`)
        .join("\n");
      const materialImports = materials
        .map(
          (material) =>
            `import ${capitalize(material.name)} from './materials/${material.name}';`
        )
        .join("\n");

      const meshElements = meshes
        .map((mesh, i) => {
          const material = materials[i % materials.length];
          const meshName = capitalize(mesh.name);
          const materialName = capitalize(material.name);
          return `      <${meshName} material={${materialName}()} />`;
        })
        .join("\n");

      return `import React, { useRef } from 'react';
import type { GroupProps } from '@react-three/fiber';
import * as THREE from 'three';
${meshImports}
${materialImports}

interface ${componentName}Props extends GroupProps {
  [key: string]: any;
}

/**
 * ${componentName} component
 * Main component that assembles all mesh and material parts
 */
export default function ${componentName}(props: ${componentName}Props) {
  const ref = useRef<THREE.Group>(null);
  
  return (
    <group ref={ref} {...props}>
${meshElements}
    </group>
  );
}
`;}
}