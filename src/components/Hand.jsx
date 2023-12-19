import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { violetMaterial } from "../constants/materials";

const SCALE = 0.35;

export function Hand() {
  const { nodes, materials } = useGLTF("models/Hand_Final_Glt.gltf");

  const objectRef = useRef();

  useFrame(({ mouse, camera }) => {
    const vector = new THREE.Vector3(mouse.x, mouse.y, 0);
    vector.unproject(camera);

    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));

    objectRef.current.position.set(pos.x + 0.7, pos.y - 1.15, 0.5);
  });

  return (
    <>
      <group
        ref={objectRef}
        scale={SCALE}
        rotation-y={Math.PI}
        rotation-x={-Math.PI / 8}
        rotation-z={-Math.PI / 8}
        onPointerDown={() => {
          console.log("Click");
        }}
      >
        <mesh
          castShadow
          geometry={nodes.Cube.geometry}
          material={materials.Skin}
        />
        <mesh
          castShadow
          geometry={nodes.Sleeve.geometry}
          material={violetMaterial}
        />
        <mesh geometry={nodes.Sleeve_2.geometry} material={violetMaterial} />
      </group>
    </>
  );
}
