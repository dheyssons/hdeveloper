import { useEffect, useRef } from 'react'

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Drone(){
    const effectRender = useRef(false);

    useEffect(() => {
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
			const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
			renderer.setSize(426 * 0.9, 240 * 0.9);

			if(effectRender.current === false) {
				document.querySelector('.drone')?.appendChild(renderer.domElement);
				effectRender.current = true;
			}

			let mixer: any;
			const loader = new GLTFLoader();
			loader.load('drone_rigged.glb', (gltf) => {
      const rot = new THREE.Vector3(0,1,0);
      gltf.scene.rotation.setFromVector3(rot);
      gltf.scene.scale.set(1.4,1.4,1.4);
      camera.lookAt(gltf.scene.position);
      scene.add(gltf.scene);
      
      const mesh = gltf.scene;
      mixer = new THREE.AnimationMixer(mesh);
      const clips = gltf.animations;

      // const clip = THREE.AnimationClip.findByName(clips, 'Take 01');
      // const action = mixer.clipAction(clip);
      // action.play();

      clips.forEach( function ( clip ) {
        mixer.clipAction( clip ).play();
      });
    }, undefined, function(error) {
      console.log(error);
    })

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    camera.position.x = 8;
    camera.position.y = 6;
    camera.position.z = 10.5;

    const clock = new THREE.Clock();
    function animate(){
      mixer?.update(clock.getDelta());
      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
	});

    return (
        <div className='drone'>

        </div>
    )
}