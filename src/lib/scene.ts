import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = null;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / 2 / window.innerHeight,
  0.1,
  1000
);
const light = new THREE.DirectionalLight(0xffffff);
const arenaGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
const towerGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 32);
const fancyMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xaa00aa,
});
const arena = new THREE.Mesh(arenaGeometry, fancyMaterial);
const torre = new THREE.Mesh(towerGeometry, fancyMaterial);
torre.position.x = 2;
scene.add(arena);
arena.add(torre);

light.position.set(0, 1, 1).normalize();
scene.add(light);

camera.position.z = 5;
camera.position.y = 2;
camera.rotation.x = -0.5;

let renderer: THREE.WebGLRenderer;

const animate = () => {
  requestAnimationFrame(animate);
  arena.rotation.y += 0.01;
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setSize(window.innerWidth / 2, window.innerHeight);
  camera.aspect = window.innerWidth / 2 / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (element: HTMLCanvasElement) => {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: element,
    alpha: true,
  });
  resize();
  animate();
};

window.addEventListener("resize", resize);
