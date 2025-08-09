import { capitalize } from "@/lib/functions/capitalize";

export function TypescriptMesh(meshName){
  const meshName1= meshName;
    meshName = capitalize(meshName);
      return `import React from 'react';
import { ${meshName1}Geometry } from '../geometries/${meshName1}Geometry';

interface ${meshName}Props {
  [key: string]: any;
}

/**
 * ${meshName} component
 * Simple wrapper that uses pre-defined geometry
 * Easy to modify without touching geometry data
 */
export default function ${meshName}(props: ${meshName}Props) {
  return <mesh geometry={${meshName1}Geometry} {...props} />;
}
`;
}