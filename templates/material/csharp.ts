export function CSharpMaterial(material,properties,materialName,materialType){
  {
  if ("color" in material){
    properties.push(`Color = new Color(${JSON.stringify(material.color)})`);}
  if ("opacity" in material){
    properties.push(`Opacity = ${material.opacity}`);}
  if ("transparent" in material){
    properties.push(`Transparent = ${(material as any).transparent}`);
  }
  return `using ThreeJs;
  
  /**
   * ${materialName} material component
   */
  public class ${materialName}
  {
      public Material Create()
      {
          return new ${materialType}
          {
              ${properties.join(",\n              ")}
          };
      }
  }`;
}

}
