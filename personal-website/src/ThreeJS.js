/*

Author: Seth Hager
Date: Aug 21st

Code loads threeJS canvas and puts a head model in the canvas.

*/


import logo from './logo.svg';
import './App.css';
import React from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class threeJSCanvas extends React.Component{
  //Once component mounts this code will be executed.
  
  componentDidMount() {
      // === THREE.JS CODE START ===
    var container = document.getElementById('canvas');
    //Load threejs Object loader for GLTF format
    const loader = new GLTFLoader();
    //Create new threeJS scene
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    //Instantiate a threeJS camera 
    let camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    //Instantiate a ThreeJS WebGL renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( 750, 750 );
    container.append(renderer.domElement);

    renderer.outputEncoding = THREE.sRGBEncoding;
    
    // Variables for hemispherical lighting
    var groundColor = 0x00;
    var skyColor = 0xFFFFFF;
    //Hemisphere light takes a ground color and a light color and shades the model using the gradients between the two colors.
    var light = new THREE.HemisphereLight (skyColor,groundColor, 3);
    light.position.x = 0;
    scene.add(light);

    //Load 3d model using the GTLF loader
    loader.load( "male_head_i/scene.glb", 
      //On load
      function ( glb ) {
        var head = glb.scene.children[0];
        head.scale.set(0.008,0.008,0.008);
        head.name = 'head';
        scene.add(glb.scene);
        animate();
      },
      //During load
      undefined, 
      //Error!
      function ( error ) {
        console.error( error );
      } );
    
    // Animate function called every frame
    const animate = function () {
      //Set Camera position
      camera.position.x = 2;
      camera.position.y = 1;
      camera.position.z = 1;
      //Create a box that encapsulates the model and find the center of it
      var center = new THREE.Vector3();
      const box = new THREE.Box3();
      box.setFromObject(scene.children[1].children[0]);
      box.getCenter(center);
      //Look at box center
      camera.lookAt(center);
      renderer.render( scene, camera );
      //Rotate model.
      scene.children[1].rotation.y += 0.001;
      requestAnimationFrame( animate );

    };
      // === THREE.JS EXAMPLE CODE END ===
  }
  render(){
    return(<></>);
  }
}

export default threeJSCanvas;
