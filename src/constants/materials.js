import * as THREE from "three";
import { set1, set2, set3, set4, set5, set6 } from "./colors";

/**
 * Common materials
 */

export const whiteMaterial = new THREE.MeshLambertMaterial({
  color: "white",
  emissive: "gray",
});

export const violetMaterial = new THREE.MeshStandardMaterial({
  color: "#7286D3",
});

/**
 * Range materials
 */

export const scaleBaseMaterial = new THREE.MeshStandardMaterial({
  color: "#a1aaad",
});
export const scaleCirclesMaterial = new THREE.MeshStandardMaterial({
  color: "#5889d7",
});

export const iconMaterial = new THREE.MeshStandardMaterial({
  color: "#e35340",
});
export const rangeWrapperMaterial = new THREE.MeshStandardMaterial({
  color: "#E5E0FF",
});
export const rangeScaleMaterial = new THREE.MeshStandardMaterial({
  color: "#8EA7E9",
});
export const rangeControllerMaterial = new THREE.MeshStandardMaterial({
  color: "#7286D3",
});

/**
 * Palette materials
 */

export const colorMaterial1 = new THREE.MeshStandardMaterial({
  color: set1[0],
});
export const colorMaterial2 = new THREE.MeshStandardMaterial({
  color: set2[0],
});
export const colorMaterial3 = new THREE.MeshStandardMaterial({
  color: set3[0],
});
export const colorMaterial4 = new THREE.MeshStandardMaterial({
  color: set4[0],
});
export const colorMaterial5 = new THREE.MeshStandardMaterial({
  color: set5[0],
});
export const colorMaterial6 = new THREE.MeshStandardMaterial({
  color: set6[0],
});

/**
 * Shuffle materials
 */

export const buttonMaterial = new THREE.MeshStandardMaterial({
  color: "#7286D3",
});
export const textMaterial = new THREE.MeshStandardMaterial({
  color: "white",
});
export const squareMaterial = new THREE.MeshStandardMaterial({
  color: "#6b6978",
});

/**
 * Icecream materials
 */

export const stickMaterial = new THREE.MeshLambertMaterial({
  color: "#f4af89",
  emissive: "#de8357",
});

/**
 * Cloud materials
 */

export const cloudMaterial = new THREE.MeshStandardMaterial({
  color: "white",
});
