import { useEffect, useRef } from 'react'

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Camera(){
    const effectRender = useRef(false);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        renderer.setSize(426 * 2, 240 * 2);
    
        if(effectRender.current === false){
            document.querySelector('.canon')?.appendChild(renderer.domElement);
            effectRender.current = true;
        }
    
        const loader = new GLTFLoader();
        loader.load('canon.glb', (gltf) => {
            camera.lookAt(gltf.scene.position);
            scene.add(gltf.scene);
        })
    
        camera.position.set(8, 3, 10);
    
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4);
        scene.add(directionalLight);
    
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const hemis = new THREE.HemisphereLight(0x00AAFF, 0xFFAA00, 1);
        scene.add(hemis);
    
        function animate(){
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    });

    return (
    <div className='canon absolute top-0 right-0 z-50 h-full'>

      </div>
    )
}