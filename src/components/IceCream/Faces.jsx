import * as THREE from "three";

const sparkleMaterial = new THREE.MeshBasicMaterial({
  color: "white",
});
const eyeMaterial = new THREE.MeshStandardMaterial({
  color: "black",
  roughness: 0.2,
  metalness: 0.9,
});
const chicksMaterial = new THREE.MeshBasicMaterial({
  color: "#c70c0c",
  // color: "#ff7b80",
});
const tongueMaterial = new THREE.MeshBasicMaterial({
  color: "red",
});

export const Face1 = ({ nodes }) => {
  return (
    <group position={[0.358, -12.382, 14.655]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Shape_3.geometry}
        material={eyeMaterial}
        position={[-37.995, 1.027, -20.556]}
        rotation={[-Math.PI / 2, 0, 0.2]}
      />
      <mesh
        geometry={nodes.Shape_3.geometry}
        material={eyeMaterial}
        position={[29.261, 1.027, -22]}
        rotation={[-Math.PI / 2, 0, -0.9]}
      />
      <mesh
        geometry={nodes.Shape.geometry}
        material={eyeMaterial}
        position={[-34.987, 1.025, -1.8]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Shape_1.geometry}
        material={eyeMaterial}
        position={[-10.207, -2.299, -0.573]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_4.geometry}
        material={chicksMaterial}
        position={[40.682, 0.265, 6.462]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_4.geometry}
        material={chicksMaterial}
        position={[-40.27, 0.265, 6.462]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Sphere_2.geometry}
        material={eyeMaterial}
        position={[25.289, 0, -2.942]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.292]}
      />
    </group>
  );
};

export const Face2 = ({ nodes }) => {
  return (
    <group position={[0.358, -12.382, 14.655]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Shape_2.geometry}
        material={chicksMaterial}
        position={[-12.289, 0.615, 6.991]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_4_1.geometry}
        material={chicksMaterial}
        position={[40.682, 0.265, 6.462]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_3_1.geometry}
        material={chicksMaterial}
        position={[-40.27, 0.265, 6.462]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse.geometry}
        material={sparkleMaterial}
        position={[23.5, 3.235, -0.965]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse.geometry}
        material={sparkleMaterial}
        position={[-26.569, 3.235, -0.965]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Sphere_2_1.geometry}
        material={eyeMaterial}
        position={[25.289, 0, -2.942]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.292]}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={eyeMaterial}
        position={[-24.897, 0, -2.942]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.292]}
      />
    </group>
  );
};

export const Face3 = ({ nodes }) => {
  return (
    <group position={[0.358, -12.382, 14.655]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Shape_2_2.geometry}
        material={eyeMaterial}
        position={[-25.453, 0.316, -24.046]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={nodes.Shape_3.geometry}
        material={eyeMaterial}
        position={[22.96, 0.316, -24.046]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Shape_2_3.geometry}
        material={tongueMaterial}
        position={[-8.447, -0.699, 7.364]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Shape_4.geometry}
        material={chicksMaterial}
        position={[-10.207, -1.005, -0.573]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_4_2.geometry}
        material={chicksMaterial}
        position={[40.682, 0.265, 6.462]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_3_2.geometry}
        material={chicksMaterial}
        position={[-40.27, 0.265, 6.462]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_2_1.geometry}
        material={sparkleMaterial}
        position={[28.999, 2.951, -4.877]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_1.geometry}
        material={sparkleMaterial}
        position={[-21.07, 2.951, -4.877]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Sphere_2_2.geometry}
        material={eyeMaterial}
        position={[25.289, 0, -2.942]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.292]}
      />
      <mesh
        geometry={nodes.Sphere_1.geometry}
        material={eyeMaterial}
        position={[-24.897, 0, -2.942]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.292]}
      />
    </group>
  );
};

export const Face4 = ({ nodes }) => {
  return (
    <group position={[0.358, -12.382, 14.679]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        geometry={nodes.Ellipse_3_3.geometry}
        material={sparkleMaterial}
        position={[22.984, 4.305, -3.706]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_2_2.geometry}
        material={sparkleMaterial}
        position={[-27.212, 4.305, -4.339]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_3_4.geometry}
        material={sparkleMaterial}
        position={[27.203, 4.305, 1.086]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_2.geometry}
        material={sparkleMaterial}
        position={[-22.994, 4.305, 0.453]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Shape_5.geometry}
        material={chicksMaterial}
        position={[-10.426, -0.001, -0.42]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_4_3.geometry}
        material={chicksMaterial}
        position={[40.682, 0.265, 6.462]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_3_5.geometry}
        material={chicksMaterial}
        position={[-40.27, 0.265, 6.462]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_2_3.geometry}
        material={sparkleMaterial}
        position={[28.999, 2.951, -4.877]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ellipse_3.geometry}
        material={sparkleMaterial}
        position={[-21.07, 2.951, -4.877]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Sphere_2_3.geometry}
        material={eyeMaterial}
        position={[25.289, 0, -2.942]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.292]}
      />
      <mesh
        geometry={nodes.Sphere_2.geometry}
        material={eyeMaterial}
        position={[-24.897, 0, -2.942]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.292]}
      />
    </group>
  );
};
