import { useFrame } from "@react-three/fiber";
import { Loader2 } from "lucide-react";
import { Html } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { GLTFLoader, DRACOLoader } from "three/examples/jsm/Addons.js";
import { isMesh } from "../lib/functions/isMesh";
import * as THREE from 'three'
export default function ModelPreview({
  url,
  displayMode,
  autoRotate,
}: {
  url: string;
  displayMode: string;
  autoRotate: boolean;
}) {
  const [gltf, setGltf] = useState<any>(null);
  const meshRef = useRef<THREE.Group>(null);
  // Load GLTF with memory optimization for large files
  useEffect(() => {
    let isMounted = true;
    const loader = new GLTFLoader();
    // Set up DRACO for compressed models
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
    );
    loader.setDRACOLoader(dracoLoader);
    // For large files, use a more memory-efficient approach
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        if (!isMounted) return;
        loader.parse(
          data,
          "",
          (gltf: any) => {
            // For extremely large models, simplify geometries to prevent memory issues
            if (gltf.scene) {
              gltf.scene.traverse((object: THREE.Object3D) => {
                if (isMesh(object)) {
                  const mesh = object as THREE.Mesh;
                  const geometry = mesh.geometry;
                  // Check if the geometry is extremely large
                  const vertexCount = geometry.attributes.position.count;
                  if (vertexCount > 1000000) {
                    // For extremely large meshes, consider simplifying or warning
                    console.warn(
                      `Mesh ${mesh.name} has ${vertexCount} vertices - this may cause performance issues`
                    );
                  }
                }
              });
            }
            if (isMounted) {
              setGltf(gltf);
            }
          },
          (error: any) => {
            console.error("Error parsing GLTF", error);
          }
        );
      })
      .catch((error) => {
        console.error("Error loading GLB file", error);
      });
    return () => {
      isMounted = false;
      // Clean up GLTF resources
      if (gltf) {
        gltf.scene.traverse((object: THREE.Object3D) => {
          if (isMesh(object)) {
            const mesh = object as THREE.Mesh;
            mesh.geometry.dispose();

            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((material) => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }
    };
  }, [url]);

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  // Apply material overrides based on display mode
  useEffect(() => {
    if (gltf && gltf.scene) {
      gltf.scene.traverse((child: THREE.Object3D) => {
        if (isMesh(child)) {
          const mesh = child as THREE.Mesh;
          const originalMaterial = mesh.material;

          // Dispose of old materials to prevent memory leaks
          if (Array.isArray(originalMaterial)) {
            originalMaterial.forEach((material) => material.dispose());
          } else if (originalMaterial && "dispose" in originalMaterial) {
            (originalMaterial as THREE.Material).dispose();
          }

          // Create new materials based on display mode
          switch (displayMode) {
            case "wireframe": {
              // Clone original material(s) and enable wireframe if supported
              if (Array.isArray(originalMaterial)) {
                mesh.material = originalMaterial.map((mat) => {
                  const newMat = mat.clone();
                  // Only set wireframe if the material type supports it
                  if ("wireframe" in newMat) {
                    (newMat as any).wireframe = true;
                  }
                  newMat.transparent = true;
                  newMat.opacity = 0.8;
                  return newMat;
                });
              } else {
                const newMat = originalMaterial.clone();
                if ("wireframe" in newMat) {
                  (newMat as any).wireframe = true;
                }
                newMat.transparent = true;
                newMat.opacity = 0.8;
                mesh.material = newMat;
              }
              break;
            }
            case "points":
              mesh.material = new THREE.PointsMaterial({
                color: 0x00ff00,
                size: 0.01,
                sizeAttenuation: true,
              });
              break;
            case "normals":
              mesh.material = new THREE.MeshNormalMaterial();
              break;
            case "depth":
              mesh.material = new THREE.MeshDepthMaterial();
              break;
            case "solid":
              mesh.material = new THREE.MeshStandardMaterial({
                color: 0x888888,
                metalness: 0.1,
                roughness: 0.8,
              });
              break;
            default:
              // Keep original materials for 'original' mode
              mesh.material = originalMaterial;
              break;
          }
        }
      });
    }
  }, [gltf, displayMode]);
  if (!gltf) {
    return (
      <Html center>
        <div className="text-white bg-black/50 p-2 rounded">
          <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
          Loading model...
        </div>
      </Html>
    );
  }

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
    />
  );
}
