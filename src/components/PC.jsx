import { GradientTexture, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function PC() {
  const { nodes } = useGLTF("./models/monitor.gltf");

  const monitorMaterial = new THREE.MeshLambertMaterial({
    color: "white",
    emissive: "grey",
  });
  const sideBarMaterial = new THREE.MeshLambertMaterial({
    color: "#ebbf9e",
    emissive: "#b0584c",
  });
  const whiteboardMaterial = new THREE.MeshLambertMaterial({
    color: "#ebbf9e",
    emissive: "#b0584c",
  });
  const selectedTextMaterial = new THREE.MeshLambertMaterial({
    color: "#e35340",
    // emissive: "red",
  });
  const searchMaterial = new THREE.MeshLambertMaterial({
    color: "white",
    // emissive: "red",
  });
  const pageMaterial = new THREE.MeshLambertMaterial({
    color: "#ebebeb",
    // emissive: "red",
  });

  return (
    <group dispose={null} position={[0, 2, 0]}>
      <group scale={0.0116}>
        <group position={[0, 0, 8]}>
          <mesh
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={monitorMaterial}
            position={[75.462, 0.093, 31]}
            scale={1.03}
          />
          <mesh
            receiveShadow
            geometry={nodes.Rectangle.geometry}
            material={sideBarMaterial}
            position={[75.462, 0.093, 24]}
          />
        </group>
        <group position={[0, -11.641, 10]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.search_input.geometry}
            material={nodes.searchMaterial}
            position={[-182.657, 124.215, 14.226]}
          />
          <group position={[-217.711, 130.907, 25.738]} scale={0.431}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Boolean.geometry}
              material={searchMaterial}
              position={[-19.078, -17.332, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.selected_text.geometry}
            material={selectedTextMaterial}
            position={[-182.657, 72, 17]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.main_text.geometry}
            material={sideBarMaterial}
            position={[-195.501, 72, 26]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.text_1.geometry}
            material={sideBarMaterial}
            position={[-189.848, 3.389, 23]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.text_2.geometry}
            material={sideBarMaterial}
            position={[-211.846, 32.73, 23]}
          />
        </group>
        {/* <directionalLight
          intensity={1}
          decay={2}
          rotation={[0.041, 1.144, -0.045]}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base.geometry}
          material={monitorMaterial}
          position={[-72, -82.03, 0.992]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sidebar.geometry}
          material={sideBarMaterial}
          position={[1, 0.029, 29]}
          scale={[1, 0.953, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window.geometry}
          material={monitorMaterial}
          position={[1, 0.029, 25]}
          scale={[1, 0.953, 1]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.monitor.geometry}
          material={monitorMaterial}
        />
        {/* <OrthographicCamera
        makeDefault={false}
        far={100000}
        near={0}
        position={[20.431, -5.969, 932.351]}
      /> */}
      </group>
    </group>
  );
}
