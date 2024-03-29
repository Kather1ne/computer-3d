/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useContext, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGesture } from "react-use-gesture";
import { useSpring, animated } from "@react-spring/three";
import { BodyContext } from "../context/body";
import {
  squareMaterial,
  textMaterial,
  violetMaterial,
  whiteMaterial,
} from "../constants/materials";

const SCALE = 0.01;
const minScale = [1, 1, 1];
const maxScale = [1.1, 1.1, 1.1];
const minRotation = [0, 0, 0];

export function Shuffle() {
  const { nodes } = useGLTF("./models/helpers.gltf");

  const { setRandomValue } = useContext(BodyContext);

  const [buttonSpring, setButtonSpring] = useSpring(() => ({
    scale: minScale,
  }));
  const [diceSpring, setDiceSpring] = useSpring(() => ({
    rotation: minRotation,
  }));

  const bind = useGesture({
    onHover: ({ hovering }) => {
      const rotation = Math.PI;
      setButtonSpring({ scale: hovering ? maxScale : minScale });
      setDiceSpring({ rotation: hovering ? [0, 0, rotation] : minRotation });
    },
    onPointerDown: () => {
      setButtonSpring({ scale: minScale });
      setRandomValue(4);
    },
    onPointerUp: () => {
      setButtonSpring({ scale: maxScale });
    },
  });

  return (
    <group dispose={null} position={[-4.2, -1, 1]}>
      <group scale={SCALE}>
        <group position={[260.736, 150.022, 0]}>
          <group position={[3.057, 0.1, 10]}>
            <animated.group {...buttonSpring} {...bind()}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Button.geometry}
                material={violetMaterial}
                position={[0, -25.869, 0]}
                scale-z={5}
              />
              <mesh
                castShadow
                geometry={nodes.Text.geometry}
                material={textMaterial}
                position={[0, -25.622, 12]}
              />
            </animated.group>
            <animated.group {...diceSpring} position={[-0.206, 26.501, 10]}>
              <mesh
                geometry={nodes.Ellipse.geometry}
                material={textMaterial}
                position={[0, 0, 4.5]}
                rotation={[0, 0, -Math.PI / 4]}
              />
              <mesh
                castShadow
                geometry={nodes.Rectangle.geometry}
                material={squareMaterial}
                scale-y={1.1}
              />
              <group position={[0, 0, 5]} rotation={[0, 0, -Math.PI / 4]}>
                <mesh
                  geometry={nodes.mesh_2_instance_1.geometry}
                  material={textMaterial}
                  position={[0, 10, 0]}
                />
                <mesh
                  geometry={nodes.mesh_2_instance_2.geometry}
                  material={textMaterial}
                  position={[10, 0, 0]}
                />
                <mesh
                  geometry={nodes.mesh_2_instance_3.geometry}
                  material={textMaterial}
                  position={[0, -10, 0]}
                />
                <mesh
                  geometry={nodes.mesh_2_instance_4.geometry}
                  material={textMaterial}
                  position={[-10, 0, 0]}
                />
              </group>
            </animated.group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={whiteMaterial}
            position={[3.057, 0.153, 0]}
          />
        </group>
      </group>
    </group>
  );
}
