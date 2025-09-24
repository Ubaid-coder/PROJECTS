import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let cancelbtn = document.querySelector('.cancel-btn');
let heartDoc = document.querySelector('.heart-docs ');
let brainDoc = document.querySelector('.brain-docs ');
let earDoc = document.querySelector('.ear-docs ');
let overviewInfo = document.querySelectorAll('.info-item');

overviewInfo.forEach((elem) => {

  elem.addEventListener('click', () => {
    if (elem.id == 'overview') {
      heartDoc.style.transform = "scale(1)";
      heartDoc.style.transform += " translate(-50%, -50%)";
      heartDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Overview</h1>
      
      <p>The heart is a muscular organ that pumps blood throughout the body, circulating oxygen and nutrients while
          removing waste products. It's the central part of the circulatory system, a network of blood vessels that
          carries blood to and from all parts of the body. </p>

          <img src="https://qcg.com.au/wp-content/uploads/2024/12/anatomy-of-the-heart.webp" alt="">

      `
    }

    else if (elem.id == 'function') {
      heartDoc.style.transform = "scale(1)";
      heartDoc.style.transform += " translate(-50%, -50%)";
      heartDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Function</h1>
      
     <ul>

     <li><b>Pumping: </b>The heart acts as a pump, contracting and relaxing to push blood through the circulatory system.</li>

     <li><b>Circulation: </b>It delivers oxygen and nutrients to cells and removes carbon dioxide and other waste products.</li>

     <li><b>Electrical System: </b>The heart's electrical system regulates the rate and rhythm of heartbeats. </li>

 

     </ul>

      `
    }

    else if (elem.id == 'anatomy') {
      heartDoc.style.transform = "scale(1)";
      heartDoc.style.transform += " translate(-50%, -50%)";
      heartDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Anatomy</h1>

      <p>The human heart has four chambers: two atria (left and right) and two ventricles (left and right). It's a muscular organ, about the size of a fist, located in the chest, slightly to the left of the breastbone. The heart's primary function is to pump blood throughout the body, delivering oxygen and nutrients. </p>
      
     <ul>

     <li><b>Atria: </b>The upper two chambers (left and right) receive blood returning to the heart. </li>

     <li><b>Ventricles: </b>The lower two chambers (left and right) pump blood out of the heart. </li>

     <li><b>Septum: </b>An internal wall of tissue, the septum, divides the heart into left and right sides, preventing mixing of oxygenated and deoxygenated blood. </li>

 

     </ul>

      `
    }

    else if (elem.id == 'bloodFlow') {
      heartDoc.style.transform = "scale(1)";
      heartDoc.style.transform += " translate(-50%, -50%)";
      heartDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Bloow Flow</h1>
      
     <ul>

     <li><b>Deoxygenated Blood Enters the Right Atrium: </b>Blood that has circulated throughout the body, depleted of oxygen, enters the heart through two large veins: the superior and inferior vena cava, flowing into the right atrium. </li>

     <li><b>Right Atrium to Right Ventricle:</b>The right atrium pumps this blood into the right ventricle. </li>

     <li><b>Right Ventricle to Lungs:</b>The right ventricle then pumps the blood through the pulmonary artery to the lungs. </li>

 

     <li><b>Oxygenation in the Lungs:</b>In the lungs, the blood releases carbon dioxide and picks up a fresh supply of oxygen. </li>

     <li><b>Oxygenated Blood Returns to the Left Atrium:</b>The oxygenated blood returns to the heart through the pulmonary veins, entering the left atrium. </li>

     <li><b>Left Atrium to Left Ventricle:</b>The left atrium pumps the oxygenated blood into the left ventricle. </li>

     <li><b>Left Ventricle to the Body:</b>The powerful left ventricle then pumps the oxygen-rich blood into the aorta, the largest artery in the body, which distributes it to all parts of the body. </li>

     <li><b> Circulation Continues:</b>This oxygenated blood then circulates through the body, delivering oxygen and nutrients to cells and tissues, before returning to the heart as deoxygenated blood, restarting the cycle. </li>

 

     </ul>

      `
    }

    else if (elem.id == 'brainoverview') {
      brainDoc.style.transform = "scale(1)";
      brainDoc.style.transform += " translate(-50%, -50%)";
      brainDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Overview</h1>
      
<p>The brain is a complex organ that serves as the central control center for the body, managing everything from basic bodily functions like breathing and heart rate to complex activities like thinking, memory, and emotions. It's the command center of the nervous system, receiving and processing information from the senses and sending out instructions to the rest of the body. The brain is composed of billions of nerve cells, including neurons and glial cells, and is protected by the skull and cerebrospinal fluid. </p>
<img src="https://www.news-medical.net/image-handler/picture/2020/10/shutterstock_284175866.jpg">
      `
    }

    else if (elem.id == 'parts') {
      brainDoc.style.transform = "scale(1)";
      brainDoc.style.transform += " translate(-50%, -50%)";
      brainDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Parts</h1>
      
     <ul>

     <li><b>Cerebrum: </b>The largest part, divided into two hemispheres, responsible for higher-level functions like thinking, language, and voluntary movement. </li>

     <li><b>Cerebellum: </b>Located at the back of the brain, it coordinates movement, posture, and balance. </li>

     <li><b>Brainstem: </b>Connects the cerebrum and cerebellum to the spinal cord, controlling basic life functions like breathing and heart rate. </li>
 
     </ul>

      `
    }

    else if (elem.id == 'structure') {
      brainDoc.style.transform = "scale(1)";
      brainDoc.style.transform += " translate(-50%, -50%)";
      brainDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Structure</h1>
      
     <ul>

     <li><b>Cerebral Cortex: </b>The outer layer of the cerebrum, responsible for higher cognitive functions. </li>

     <li><b>Corpus Callosum: </b>Connects the two hemispheres of the cerebrum, allowing them to communicate. </li>

     <li><b>Lobes of the Brain: </b>The cerebrum is divided into lobes (frontal, parietal, temporal, occipital) each with specialized functions. </li>

 

     <li><b>Limbic System: </b>A group of structures involved in emotions, memory, and motivation. </li>

     <li><b>Thalamus: </b> Acts as a relay station for sensory information. </li>

     <li><b>Hypothalamus: </b>Regulates body temperature, hunger, thirst, sleep, and hormones. </li>



     </ul>

      `
    }

    else if (elem.id == 'protection') {
      brainDoc.style.transform = "scale(1)";
      brainDoc.style.transform += " translate(-50%, -50%)";
      brainDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Protection</h1>
      
     <ul>

     <li>The brain is encased within the skull and surrounded by protective membranes called meninges.</li>

     <li>Cerebrospinal fluid cushions the brain and spinal cord. </li>

     </ul>

     <p>In simpler terms, the brain is like a super-powered computer that controls everything you do, from the simplest tasks to the most complex thoughts and emotions.</p>

      `
    }

    else if (elem.id == 'earoverview') {
      earDoc.style.transform = "scale(1)";
      earDoc.style.transform += " translate(-50%, -50%)";
      earDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Overview</h1>
     <p>The ear canal, also known as the external auditory canal, is a tube-like passageway that extends from the outer ear to the eardrum (tympanic membrane). It's a key part of the outer ear, playing a crucial role in hearing and protecting the inner ear. </p>
<img src="data:image/jpeg;base64,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">
      `
    }

    else if (elem.id == 'earanatomy') {
      earDoc.style.transform = "scale(1)";
      earDoc.style.transform += " translate(-50%, -50%)";
      earDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Anatomy: </h1>
     <ul>

     <li><b>Location: </b>The ear canal is the pathway that connects the auricle (or pinna, the visible part of the outer ear) to the eardrum. </li>

     <li><b>Structure: </b>It's a slightly curved tube, about 1 inch (2.5 cm) long. The outer third is made of cartilage, while the inner two-thirds is bony. </li>

     <li><b>Lining: </b>The ear canal is lined with skin that contains glands which produce earwax (cerumen) and tiny hairs. </li>

     </ul>
      `
    }

    else if (elem.id == 'earfunction') {
      earDoc.style.transform = "scale(1)";
      earDoc.style.transform += " translate(-50%, -50%)";
      earDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Function: </h1>
     <ul>

     <li><b>Sound Transmission: </b>The ear canal's primary function is to conduct sound waves from the outer ear to the eardrum, amplifying the sound as it travels. </li>

     <li><b>Protection: </b>The ear canal's skin and glands play a vital role in protecting the delicate inner ear: </li>
  
     <li><b>Earwax (cerumen): </b>The sticky earwax traps dust, dirt, and other debris, preventing them from reaching the eardrum and middle ear. </li>

     <li><b>Hairs: </b>The tiny hairs, pointed outwards, help to discourage insects and debris from entering the ear canal. </li>

    

     </ul>
      `
    }

    else if (elem.id == 'temeperatureRegulation') {
      earDoc.style.transform = "scale(1)";
      earDoc.style.transform += " translate(-50%, -50%)";
      earDoc.innerHTML =
        `
  <div class="cancel-btn">X</div>
      <h1>Temperature Regulation: </h1>
     <p>The ear canal helps to warm the air entering the inner ear, protecting it from extreme temperatures. </p>
      `
    }




  })
})

heartDoc.addEventListener('click', (e) => {
  if (e.target.classList.contains('cancel-btn')) {

    heartDoc.style.transform = "scale(0) translate(-50%, -50%)";
  }
});

brainDoc.addEventListener('click', (e) => {
  if (e.target.classList.contains('cancel-btn')) {

    brainDoc.style.transform = "scale(0) translate(-50%, -50%)";
  }
});

earDoc.addEventListener('click', (e) => {
  if (e.target.classList.contains('cancel-btn')) {

    earDoc.style.transform = "scale(0) translate(-50%, -50%)";
  }
});

// Helper function to initialize a 3D model in a given canvas
function init3DModel({texturePath, canvasId, modelPath, cameraPosition = { x: 0, y: 0, z: 0.7 }, modelScale = { x: 20, y: 20, z: 20 }, modelrotation = { x: 0, y: 0, z: 0 } }) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const textureLoader = new THREE.TextureLoader();
textureLoader.load(`${texturePath}`, function(texture) {
    scene.background = texture;
    scene.environment = texture;
    texture.mapping = THREE.EquirectangularReflectionMapping;
    
});


  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  
  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
  directionalLight.position.set(5, 10, 7);
  scene.add(directionalLight);
  
  // Load Model
  const loader = new GLTFLoader();
  let model;
  loader.load(
    modelPath,
    (gltf) => {
      model = gltf.scene;
      model.scale.set(modelScale.x, modelScale.y, modelScale.z);
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          model.rotation.set(modelrotation.x, modelrotation.y, modelrotation.z)
          
          
          
        }
      });
      scene.add(model);
    },
    undefined,
    (error) => {
      console.error(`Error loading model (${modelPath}):`, error);
    }
  );
  
  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.enableRotate = true;
  controls.enablePan = false;

controls.touches = { ONE: THREE.TOUCH.NONE, TWO: THREE.TOUCH.NONE };
renderer.domElement.style.touchAction = 'pan-y';

  // Responsive resize
  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    if (model) {
      // model.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
    // Simple heart pulsing animation: just scale the whole model up and down
    if (canvas.id === 'heart3d') {
      // Assume the loaded model is the last added child
      const heart = scene.children[scene.children.length - 1];
      const t = performance.now() * 0.001;
      const pulse = 1 + 0.08 * Math.abs(Math.sin(t * 2.5));
      heart.scale.set(
        modelScale.x * pulse,
        modelScale.y * pulse,
        modelScale.z * pulse
      );
    }


  }
  animate();
}

// Initialize both models in their respective canvases
init3DModel({
  canvasId: 'heart3d',
  modelPath: 'Public/assets/models/heart.glb',
  cameraPosition: { x: 0, y: 0, z: 0.7 },
  modelScale: { x: 20, y: 20, z: 20 },
  texturePath:'../../heart.png'
});

init3DModel({
  canvasId: 'brain3d',
  modelPath: 'Public/assets/models/brain.glb',
  cameraPosition: { x: 0, y: 0, z: .7 },
  modelrotation: {x:0, y:-2, z:0},
  modelScale: window.innerWidth > 500?{ x: 4, y: 4, z: 4 }:{ x: 3.5, y: 3.5, z: 3.5 },
  texturePath:'../../brain.png'
});


init3DModel({
  canvasId: 'ear3d',
  modelPath: 'Public/assets/models/ear.glb',
  cameraPosition: { x: 0, y: 0, z: 0.6 },
  modelScale: { x: 15, y: 15, z: 15 },
  modelrotation: { x: 0, y: 1, z: 0 },
  texturePath:'../../ear.png'
});









