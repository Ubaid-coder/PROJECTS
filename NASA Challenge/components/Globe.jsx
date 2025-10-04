"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Link from "next/link";


function Globe({ navbarRef }) {
  const globeRef = useRef();



  useEffect(() => {



    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      globeRef.current.clientWidth / globeRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 1.5;


    const renderer = new THREE.WebGLRenderer({
      canvas: globeRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      globeRef.current.clientWidth,
      globeRef.current.clientHeight
    );


    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;


    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);


    function addStars() {
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 2000;
      const starPositions = [];

      for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starPositions.push(x, y, z);
      }

      starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starPositions, 3)
      );

      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1,
      });
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
    }
    addStars();


    const loader = new GLTFLoader();
    let earthModel = null;

    loader.load(
      "/assets/earth.glb",
      (gltf) => {
        earthModel = gltf.scene;
        earthModel.scale.set(2, 2, 2);
        scene.add(earthModel);
        animate();
      },
      undefined,
      (err) => {
        console.error("Failed to load 3D Earth model:", err);
      }
    );

    const handleResize = () => {
      if (!globeRef.current) return;
      camera.aspect =
        globeRef.current.clientWidth / globeRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        globeRef.current.clientWidth,
        globeRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {

      let animationId = requestAnimationFrame(animate);
      if (earthModel) earthModel.rotation.y += 0.002;


      controls.update();
      renderer.render(scene, camera);
    };



    return () => {
      window.removeEventListener("resize", handleResize);
      // cancelAnimationFrame(animationId);
      renderer.dispose();
      scene.clear();
    };
  }, [globeRef.current]);

  return (
    <section
      id="globe"
      className="h-screen w-full flex flex-col items-center justify-between px-6 md:px-16 bg-black text-white"
    >
      <canvas className=" h-full w-full" ref={globeRef}></canvas>

      <div className=" flex flex-col justify-center space-y-6 text-center md:text-left ">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Explore the Globe
        </h2>

        <p className="text-gray-300">
          Interact with Earth and explore live data layers powered by NASA.
        </p>

        <div className="flex pb-10 gap-4 justify-center md:justify-start ">
          <Link
            href={'#Temperature'}
            className="px-4 py-2 bg-cyan-500 rounded-full hover:bg-cyan-400"

          >
            🌡️ Temp
          </Link>

          <Link
            href={"#Forest"}
            className="px-4 py-2 bg-green-500 rounded-full hover:bg-green-400">
            🌲 Forest
          </Link>

          <Link
            href={"#Sea"}
            className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-400">
            🌊 Sea
          </Link>

          <Link
            href={"#Air"}
            className="px-4 py-2 bg-gray-500 rounded-full hover:bg-gray-400">
            🌬️ Air
          </Link>

        </div>
      </div>

    </section>
  );
}

export default Globe;
