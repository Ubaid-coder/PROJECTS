import * as THREE from 'three';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Elements
const lensOverlay = document.getElementById("lensOverlay");
const closeLensBtn = document.getElementById("closeLensBtn");
const canvas = document.getElementById("webgl");
const microscopeVideo = document.getElementById("microscopeVideo");
const items = document.querySelectorAll(".microscope-items video");

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 110;
camera.position.y = 10;

// Item Click Logic
items.forEach(item => {
  item.onclick = () => {
    const videoSrc = item.getAttribute("src");
    if (videoSrc) {
      microscopeVideo.src = videoSrc;
      microscopeVideo.play();
      openMicroscopeView();
    }
  };
});



function openMicroscopeView() {
  lensOverlay.style.display = "flex";

  setTimeout(() => {
    lensOverlay.classList.add("active");
  }, 600);


  gsap.to(camera.position, { y: 7.2, z: 0.05, duration: 1, ease: "power2.inOut" });
  canvas.style.transition = "transform 1s ease";
  canvas.style.transform = "scale(1.5)";

}

function closeMicroscopeView() {


  lensOverlay.classList.remove("active");
  gsap.to(camera.position, { y: 10, z: 110, duration: 1, ease: "power2.inOut" });
  canvas.style.transform = "scale(1)";
  setTimeout(() => {
    lensOverlay.style.display = "none";
    microscopeVideo.pause();
  }, 500);
}

closeLensBtn.onclick = closeMicroscopeView;

// THREE.js Setup
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(10, 2, 10);
scene.add(directionalLight);

let model;
const loader = new GLTFLoader();
loader.load('Public/assets/models/microscope.glb', (gltf) => {
  model = gltf.scene;
  model.scale.set(2, 2, 2);
  model.rotation.y = Math.PI;
  model.position.y = -10;

  scene.add(model);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enableRotate = false;
// Disable touch/pan so canvas doesn't block page scroll on mobile
controls.enablePan = false;
controls.touches = { ONE: THREE.TOUCH.NONE, TWO: THREE.TOUCH.NONE };
renderer.domElement.style.touchAction = 'pan-y';

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
