import {
  Backdrop,
  PerspectiveCamera,
  SoftShadows,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Hand } from "./components/Hand";
import { useEffect, useRef } from "react";

import {
  Keyboard,
  PC,
  Palette,
  Range,
  Shuffle,
  IceCream,
} from "./components";

export default function Stage() {
  const camera = useRef();

  useEffect(() => {
    camera.current.lookAt(0, 1.4, 0);
  }, [camera]);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <PerspectiveCamera
        ref={camera}
        position={[0, 1.5, 10]}
        makeDefault
        fov={40}
      />

      <SoftShadows />
      <group position-z={-2}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[0, 1.5, 0]}
          intensity={2}
          shadow-mapSize={1024}
        />

        <directionalLight
          castShadow
          position={[-0.5, 1.5, 3.5]}
          intensity={2}
          shadow-mapSize={1024}
          shadow-camera-left={-10}
          shadow-camera-right={10}
        />

        <pointLight position={[-3, 1, 5]} intensity={5} color={"#7573ff"} />
        <pointLight position={[3, 4, 4]} intensity={3} color={"#f82f2f"} />

        <IceCream />
        <PC />
        <Keyboard />
        <Palette />
        <Range />
        <Shuffle />
      </group>

      <Hand />

      <Backdrop
        receiveShadow
        scale={[50, 20, 15]}
        floor={1.5}
        position={[0, -1, -15]}
      >
        <meshStandardMaterial color="#f8d3ee" />
      </Backdrop>
    </>
  );
}
