export function DartMesh(
  meshName,
) {
  return `/**
    * ${meshName} mesh component for OpenGL in Dart
    */
    class ${meshName} {
      final ${meshName}Geometry geometry;
      Material? material;

      ${meshName}({this.material}) : geometry = ${meshName}Geometry();

      void render() {
        material?.use();
        geometry.render();
      }
    }
    `;
}
