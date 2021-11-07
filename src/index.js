import '../public/stylesheet.scss';

import * as THREE from 'three';
import * as dat from 'dat.gui';

const canvas = document.querySelector('canvas.webgl');

const getPlane = (h) => {
  const geometry = new THREE.PlaneBufferGeometry(h, h);
  const material = new THREE.MeshBasicMaterial({
    color: 0x93999b,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};

const getBox = (h, w, d) => {
  const geometry = new THREE.BoxGeometry(h, w, d);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};

const init = () => {
  // Debug
  const gui = new dat.GUI();
  
  const scene = new THREE.Scene();

  const plane = getPlane(3);
  plane.rotation.x = Math.PI/2;
  plane.position.x = 1.5;
  
  const box = getBox(1, 1, 1);
  box.position.y = box.geometry.parameters.height/2;
  box.position.x = 1.5;

  scene.add(box);
  scene.add(plane);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    1,
    1000,
  );
  camera.position.x = 1;
  camera.position.y = 2;
  camera.position.z = 5;

  camera.lookAt(new THREE.Vector3(0, 0, 0));

  const renderer = new THREE.WebGL1Renderer({
    canvas,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Render
  renderer.render(scene, camera);
};

init();
