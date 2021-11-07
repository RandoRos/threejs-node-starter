import '../public/stylesheet.scss';

import * as THREE from 'three';
import * as dat from 'dat.gui';

const canvas = document.querySelector('canvas.webgl');

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

  const box = getBox(1, 1, 1);
  scene.add(box);

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
