export function JavascriptExample(componentName){
    return `import React from 'react';
    import { Canvas } from '@react-three/fiber';
    import { OrbitControls, Environment } from '@react-three/drei';
    import ${componentName} from '@/components/${componentName}';
    /**
     * Example page for ${componentName}
     */
    export default function ${componentName}Page() {
      return (
        <div className="w-full h-screen">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <${componentName} />
            <OrbitControls enableZoom enablePan enableRotate />
            <Environment preset="studio" />
          </Canvas>
        </div>
      );
    }
    `;
}