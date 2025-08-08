export function JavascriptMaterial(materialName,materialType,properties){
    return `import * as THREE from 'three';
    /**
     * ${materialName} material component
     */
    export default function ${materialName}() {
      return new THREE.${materialType}({
        ${properties.join(",")}
      });
    }
    `;
}