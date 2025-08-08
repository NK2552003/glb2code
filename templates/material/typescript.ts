export function TypescriptMaterial(materialName,materialType,properties){
    return `import * as THREE from 'three';

/**
 * ${materialName} material component
 */
export default function ${materialName}(): THREE.Material {
  return new THREE.${materialType}({
    ${properties.join(",\n    ")}
  });
}
`;
}