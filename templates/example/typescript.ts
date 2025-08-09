import { capitalize } from "@/lib/functions/capitalize";

export function TypescriptExample(componentName){
  componentName = capitalize(componentName);
   return `use 'client';
   import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ${componentName} from '@/components/${componentName}';

/**
 * Example page demonstrating how to use the ${componentName} component
 */
export default function ${componentName}Page() {
  return (
    <div className="w-full h-screen">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: true
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <${componentName} />
        <OrbitControls 
          enableZoom
          enablePan
          enableRotate
          minDistance={0.1}
          maxDistance={100}
        />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
`;
}