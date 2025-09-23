import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);


scene.background = new THREE.Color('#070a1a');



let model;
const loader = new GLTFLoader();
loader.load('./assets/models/earth.glb', (gltf) => {
    model = gltf.scene;
    scene.add(model);
})


const ambientLight = new THREE.AmbientLight('white', 4);
ambientLight.position.set(1, 1, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight('white', 5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);


const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;

// Add a background image using Three.js TextureLoader
const textureLoader = new THREE.TextureLoader();
textureLoader.load('../../space.jpg', function(texture) {
    scene.background = texture;
    scene.environment = texture;
    texture.mapping = THREE.EquirectangularReflectionMapping;
    
});



window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z =  (window.innerWidth / window.innerWidth) * 0.5;

function animate(){
    window.requestAnimationFrame(animate);
    model ? model.rotation.y += 0.002 : null;
    controls.update();
    renderer.render(scene, camera);
}

animate()

import gsap from 'gsap';

const labBtn = document.querySelectorAll('.enter-lab');

const logo = document.querySelector('.logo');

const body = document.querySelector('body');
const videoOverlay = document.querySelector('.video-overlay');
// const video = videoOverlay.querySelector('video');

const title = document.querySelector('.title h1');
const hamburger = document.querySelector('header i');


body.style.overflow = 'hidden';

function playIntro() {

    // document.documentElement.requestFullscreen();
    const tl = gsap.timeline();


    tl.to(labBtn, {
        duration: 0.6,
        opacity: 0,
        y: -20,
        ease: 'ease'
    });

    tl.to(title, {
        duration: 0.6,
        opacity: 0,
        y: -20,
        ease: 'ease'
    })

    tl?.to('nav ul li', {
        duration: 0.7,
        opacity: 0,
        y: -15,
        stagger: 0.1,
        ease: 'ease'
    });

    tl?.to(hamburger,{
        duration: 0.6,
        opacity: 0,
        y: -50,
        ease: 'ease',
    })

    tl.to(logo, {
        duration: 0.6,
        opacity: 0,
        x: -50,
        ease: 'ease',
    });

    tl.to(canvas, {
        duration: 5,
        opacity: 0,
        ease: 'ease'
    });


    // tl.to(videoOverlay, {
    //     opacity: 10,
    //     display: 'block',
    //     zIndex:20,
    //     onStart: () => video.play(),
    //     ease: 'ease'
    // });


    // video.addEventListener('ended', () => {
    //     videoOverlay.style.display = 'none';
    //     body.style.overflowY = 'auto';
    // });
    setTimeout(() => {
    window.location.href =  "/lab.html";
        
    }, 7000);
}

labBtn.forEach(btn => btn.addEventListener('click', () => {
    
    playIntro();
}))

