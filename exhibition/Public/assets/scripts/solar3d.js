import * as THREE from 'three';

// Get the canvas element
const canvas = document.getElementById('solar3d');

if (!canvas) {
    console.error('Solar system canvas not found');
} else {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

    // Set renderer size
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0.1);

    // Create sun (central sphere)
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffff00,
        emissive: 0xffff00,
        emissiveIntensity: 0.5
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create planets
    const planets = [];
    const planetData = [
        { name: 'Mercury', distance: 5, size: 0.3, color: 0x8c7853, speed: 0.02 },
        { name: 'Venus', distance: 8, size: 0.5, color: 0xffa500, speed: 0.015 },
        { name: 'Earth', distance: 12, size: 0.6, color: 0x0077ff, speed: 0.01 },
        { name: 'Mars', distance: 16, size: 0.4, color: 0xff4400, speed: 0.008 },
        { name: 'Jupiter', distance: 22, size: 1.2, color: 0xffb90f, speed: 0.005 },
        { name: 'Saturn', distance: 28, size: 1.0, color: 0xffd700, speed: 0.003 },
        { name: 'Uranus', distance: 34, size: 0.8, color: 0x00ffff, speed: 0.002 },
        { name: 'Neptune', distance: 40, size: 0.8, color: 0x0000ff, speed: 0.001 }
    ];

    planetData.forEach((data, index) => {
        const planetGeometry = new THREE.SphereGeometry(data.size, 32, 32);
        const planetMaterial = new THREE.MeshBasicMaterial({ color: data.color });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        
        // Position planet in orbit
        const angle = (index / planetData.length) * Math.PI * 2;
        planet.position.x = Math.cos(angle) * data.distance;
        planet.position.z = Math.sin(angle) * data.distance;
        
        // Store planet data for animation
        planet.userData = {
            distance: data.distance,
            speed: data.speed,
            angle: angle
        };
        
        planets.push(planet);
        scene.add(planet);
    });

    // Add some stars in the background
    for (let i = 0; i < 200; i++) {
        const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(starGeometry, starMaterial);
        
        star.position.x = (Math.random() - 0.5) * 200;
        star.position.y = (Math.random() - 0.5) * 200;
        star.position.z = (Math.random() - 0.5) * 200;
        
        scene.add(star);
    }

    // Position camera
    camera.position.set(0, 20, 50);
    camera.lookAt(0, 0, 0);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate sun
        sun.rotation.y += 0.005;
        
        // Animate planets
        planets.forEach(planet => {
            planet.userData.angle += planet.userData.speed;
            planet.position.x = Math.cos(planet.userData.angle) * planet.userData.distance;
            planet.position.z = Math.sin(planet.userData.angle) * planet.userData.distance;
            planet.rotation.y += 0.01;
        });
        
        // Rotate camera around the scene
        const time = Date.now() * 0.0001;
        camera.position.x = Math.cos(time) * 50;
        camera.position.z = Math.sin(time) * 50;
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    });

    // Start animation
    animate();
} 