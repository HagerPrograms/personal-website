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
import {Platform} from 'react-native';

class threeJSCanvas extends React.Component{
  //Once component mounts this code will be executed.
  
  componentDidMount() {
      // === THREE.JS CODE START ===
    var container = document.getElementById('canvas-box');
    var canvas = document.getElementById('canvas');
    //Load threejs Object loader for GLTF format
    const loader = new GLTFLoader();
    //Create new threeJS scene
    var scene = new THREE.Scene();
    //Instantiate a threeJS camera 
    let camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    //Instantiate a ThreeJS WebGL renderer
    var renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});
    renderer.setClearColor( 0x000000, 0 );

    // renderer.setSize( 750, 750, true );
    container.append(renderer.domElement);

    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.domElement.id = 'threejsCanvas'
    
    // Variables for hemispherical lighting
    var groundColor = 0x00;
    var skyColor = 0xFFFFFF;
    //Hemisphere light takes a ground color and a light color and shades the model using the gradients between the two colors.
    var light = new THREE.HemisphereLight (skyColor,groundColor, 3);
    light.position.x = 0;
    scene.add(light);

    //Load 3d model using the GTLF loader
    loader.load( "male_head_i/finished-head.glb", 
      //On load
      function ( glb ) {
        var head = glb.scene.children[0];
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
    const animate = function (time) {
      
      time *= 0.001;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      //Set Camera position
      
      var aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
      if (Platform.OS === 'ios'){
        aspect *= 2;
      }

      camera.position.x = 2*(1/aspect);
      camera.position.y = 0.5*(1/aspect);
      camera.position.z = 1*(1/aspect);
      //Create a box that encapsulates the model and find the center of it
      var center = new THREE.Vector3();
      const box = new THREE.Box3();
      box.setFromObject(scene.children[1].children[0]);
      box.getCenter(center);
      //Look at box center
      camera.lookAt(center);
      renderer.render( scene, camera );
      //Rotate model.
      //scene.children[1].rotation.x -= 1;
      scene.children[1].rotation.y += 0.01;
      // scene.children[1].rotation.z -= 1;
      requestAnimationFrame( animate );

    };
      // === THREE.JS EXAMPLE CODE END ===
  }
  render(time)
  {
      return(<></>);
  }
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width  = canvas.clientWidth  * pixelRatio | 0;
  const height = canvas.clientHeight * pixelRatio | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

export default threeJSCanvas;
