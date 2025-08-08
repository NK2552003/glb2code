export function JavaMaterial(material, materialName,materialType,properties){
    {
  if ("color" in material)
    properties.push(`color: new Color(${JSON.stringify(material.color)})`);
  if ("opacity" in material)
    properties.push(`opacity: ${material.opacity}`);
  if ("transparent" in material)
    properties.push(`transparent: ${(material as any).transparent}`);
  
  return `import threejs.Material;
  
  /**
   * ${materialName} material component
   */
  public class ${materialName} {
      public Material create() {
          return new ${materialType}(
              ${properties.join(",\n              ")}
          );
      }
  }`;
}
}
