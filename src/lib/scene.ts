import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const light = new THREE.DirectionalLight(0xffffff, 1);
const loader = new GLTFLoader();

let arena: THREE.Group = new THREE.Group();
loader.load("/models/arena.glb", (gltf) => {
  arena = gltf.scene;
  arena.scale.set(0.5, 0.5, 0.5);
  scene.add(arena);
});

let pivot = new THREE.Group();
pivot.position.set(0, 0, 0);
let antennaTelecom = new THREE.Group();
loader.load("/models/antenna-telecom.glb", (gltf) => {
  antennaTelecom = gltf.scene;
  antennaTelecom.scale.set(0.2, 0.2, 0.2);
  antennaTelecom.position.set(2, 0, 0);
  pivot.add(antennaTelecom);
  scene.add(pivot);
});

light.position.set(1, 1, 5).normalize();
light.target = arena;

camera.position.z = 5;
camera.position.y = 2;
camera.rotation.x = -0.5;

scene.add(light);

let renderer: THREE.WebGLRenderer;

const animate = () => {
  requestAnimationFrame(animate);
  arena.rotation.y -= 0.01;
  pivot.rotation.y += 0.01;
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
