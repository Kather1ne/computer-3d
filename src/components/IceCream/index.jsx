import React, { useContext, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Face1, Face2, Face3, Face4 } from "./Faces";
import { BodyContext } from "../../context/body";
import { ColorContext } from "../../context/color";
import * as THREE from "three";
import { RangeContext } from "../../context/range";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { stickMaterial } from "../../constants/materials";

const MAX_ROTATION = 0.7;

export function IceCream() {
  const { nodes } = useGLTF("./models/ice-cream.gltf");

  const { body: bodyIndex, face: faceIndex } = useContext(BodyContext);
  const { colorSet } = useContext(ColorContext);
  const { range } = useContext(RangeContext);

  const object = useRef();
  const direction = useRef(1);

  const [style, setStyle] = useSpring(() => ({
    scale: 0,
    config: { tension: 250, friction: 10 },
  }));

  const coeff = useMemo(() => 0.01 + range * 0.002, [range]);

  const { topMaterial, iceCreamMaterial } = useMemo(() => {
    const topMaterial = new THREE.MeshStandardMaterial({
      color: colorSet[1],
      roughness: 0.2,
      shininess: 0.9,
    });
    const iceCreamMaterial = new THREE.MeshStandardMaterial({
      color: colorSet[0],
      roughness: 0.5,
      shininess: 0.5,
    });

    return { topMaterial, iceCreamMaterial };
  }, [colorSet]);

  const bodies = [
    nodes.Body0.geometry,
    nodes.Body1.geometry,
    nodes.Body2.geometry,
    nodes.Body0.geometry,
  ];

  const isTopVisible = bodyIndex === bodies.length - 1;

  useFrame((scene, delta) => {
    setStyle({ scale: coeff });

    // to prevent extra big delta
    if (delta > 0.01) {
      return;
    }

    if (object.current.rotation.y > MAX_ROTATION) {
      direction.current = -1;
    }

    if (object.current.rotation.y < -MAX_ROTATION) {
      direction.current = 1;
    }

    const rotationY =
      object.current.rotation.y + direction.current * delta * 0.2;
    object.current.rotation.set(0, rotationY, 0);
  });

  const faces = useMemo(() => {
    const props = { nodes };
    return [
      <Face1 {...props} />,
      <Face2 {...props} />,
      <Face3 {...props} />,
      <Face4 {...props} />,
    ];
  }, [nodes]);

  return (
    <animated.group {...style} position={[0.83, 2, 0.8]} ref={object}>
      <group>
        {faces[faceIndex]}

        <mesh
          castShadow
          geometry={nodes.Shape_6.geometry}
          material={topMaterial}
          position={[-52.021, 49.41, -15.211]}
          visible={isTopVisible}
        />
        <mesh
          castShadow
          geometry={bodies[bodyIndex]}
          material={iceCreamMaterial}
          position={[20.581, 15.443, 13.5]}
        />
        <mesh
          castShadow
          geometry={nodes.stick.geometry}
          material={stickMaterial}
          position={[0.018, -61.814, -5]}
        />
      </group>
    </animated.group>
  );
}
