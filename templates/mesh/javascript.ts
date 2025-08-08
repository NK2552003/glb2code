export function JavascriptMesh(meshName){
    return `import React from 'react';
    import { ${meshName}Geometry } from '../geometries/${meshName}Geometry';
    /**
     * ${meshName} component
     */
    export default function ${meshName}(props) {
      return <mesh geometry={${meshName}Geometry} {...props} />;
    }
    `;
}