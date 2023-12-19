import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { cloudMaterial } from "../constants/materials";
import { useSpring, animated, easings } from "@react-spring/three";

export function Cloud({
  scale = 0.01,
  delay = 0,
  positionRangeX: [xMin, xMax],
  positionY,
}) {
  const { nodes } = useGLTF("./models/cloud_copy.gltf");
  const ref = useRef();
  const z = -positionY;

  const [position] = useSpring(() => ({
    from: { position: [xMin, positionY, z] },
    to: [
      { position: [xMax, positionY, z] },
      { position: [xMin, positionY, z] },
    ],
    config: {
      mass: 0.1,
      tension: 80,
    },
    delay,
    loop: true,
  }));

  return (
    <animated.group ref={ref} dispose={null} {...position}>
      <group scale={scale}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={cloudMaterial}
          position={[-0.884, -10.626, 0]}
        />
      </group>
    </animated.group>
  );
}
