'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

type Mode = 'original' | 'wireframe' | 'solid' | 'normals' | 'depth' | 'points';

export default function ModelPreview({
  url,
  displayMode,
  autoRotate,
}: {
  url: string;
  displayMode: Mode;
  autoRotate: boolean;
}) {
  const gltf = useLoader(
    GLTFLoader,
    url,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      (loader as GLTFLoader).setDRACOLoader(dracoLoader);
    }
  ) as any;

  const group = useRef<THREE.Group>(null!);

  // Collect mesh info to rebuild materials per mode without mutating original too much
  const meshes = useMemo(() => {
    const list: Array<{
      geometry: THREE.BufferGeometry;
      position: THREE.Vector3;
      rotation: THREE.Euler;
      scale: THREE.Vector3;
    }> = [];
    gltf.scene.traverse((child: any) => {
      if ((child as THREE.Mesh).isMesh && child.geometry) {
        const pos = new THREE.Vector3();
        const rot = new THREE.Euler();
        const scl = new THREE.Vector3();
        child.updateMatrixWorld();
        child.matrixWorld.decompose(pos, new THREE.Quaternion().setFromEuler(child.rotation), scl);
        // Use local transforms
        list.push({
          geometry: child.geometry,
          position: child.position.clone(),
          rotation: child.rotation.clone(),
          scale: child.scale.clone(),
        });
      }
    });
    return list;
  }, [gltf]);

  useFrame((_state, delta) => {
    if (autoRotate && group.current) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group} dispose={null}>
      {displayMode === 'original' ? (
        <primitive object={gltf.scene} />
      ) : displayMode === 'wireframe' ? (
        meshes.map((m, i) => (
          <mesh key={i} geometry={m.geometry} position={m.position} rotation={m.rotation} scale={m.scale}>
            <meshStandardMaterial color="#c4b5fd" wireframe />
          </mesh>
        ))
      ) : displayMode === 'solid' ? (
        meshes.map((m, i) => (
          <mesh key={i} geometry={m.geometry} position={m.position} rotation={m.rotation} scale={m.scale}>
            <meshStandardMaterial color="#8b5cf6" metalness={0.1} roughness={0.9} />
          </mesh>
        ))
      ) : displayMode === 'normals' ? (
        meshes.map((m, i) => (
          <mesh key={i} geometry={m.geometry} position={m.position} rotation={m.rotation} scale={m.scale}>
            <meshNormalMaterial />
          </mesh>
        ))
      ) : displayMode === 'depth' ? (
        meshes.map((m, i) => (
          <mesh key={i} geometry={m.geometry} position={m.position} rotation={m.rotation} scale={m.scale}>
            <meshDepthMaterial />
          </mesh>
        ))
      ) : (
        // points
        meshes.map((m, i) => (
          <points key={i} geometry={m.geometry} position={m.position} rotation={m.rotation} scale={m.scale}>
            <pointsMaterial size={0.01} color="#a78bfa" />
          </points>
        ))
      )}
    </group>
  );
}
