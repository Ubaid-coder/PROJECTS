import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Basic Setup
const canvas = document.getElementById('webgl');
const scene = new THREE.Scene();
const clock = new THREE.Clock();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

// Load Model
let mixer;
let model;
const loader = new GLTFLoader();

loader.load('./assets/models/robot.glb', (gltf) => {
  model = gltf.scene;
  
  scene.add(model);

  // Default scale setup
  adjustModelScale();

  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach(clip => mixer.clipAction(clip).play());
  }
});

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Adjust Model Scale Responsively
function adjustModelScale() {
  if (!model) return;

  const width = window.innerWidth;

  if (width < 600) {
    model.scale.set(1, 1, 1);
    camera.position.z = 4;
  } else if (width < 1200) {
    model.scale.set(1.5, 1.5, 1.5);
    camera.position.z = 5;
  } else {
    model.scale.set(2, 2, 2);
    camera.position.z = 6;
  }
}

// Animate
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  if (mixer) mixer.update(delta);

  controls.update();
  renderer.render(scene, camera);
}

animate();

// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  adjustModelScale();
});
