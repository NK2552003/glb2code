export function TypescriptMesh(meshName){
      return `import React from 'react';
import { ${meshName}Geometry } from '../geometries/${meshName}Geometry';

interface ${meshName}Props {
  [key: string]: any;
}

/**
 * ${meshName} component
 * Simple wrapper that uses pre-defined geometry
 * Easy to modify without touching geometry data
 */
export default function ${meshName}(props: ${meshName}Props) {
  return <mesh geometry={${meshName}Geometry} {...props} />;
}
`;
}