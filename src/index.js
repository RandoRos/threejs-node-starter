import '../public/stylesheet.scss';

import * as THREE from 'three';
import * as dat from 'dat.gui';

import Peep from './example/objects/peep';
import BaseScene from './example/base';

const canvas = document.querySelector('canvas.webgl');

// Debug
const gui = new dat.GUI();

const peeps = [...Array(5)].map(() => new Peep());

const scene = BaseScene();

peeps.forEach(p => scene.add(p.mesh))

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth/window.innerHeight,
  1,
  1000,
);
camera.position.x = 1;
camera.position.y = 2;
camera.position.z = 6;

camera.lookAt(new THREE.Vector3(0, 0, 0));

const renderer = new THREE.WebGL1Renderer({
  canvas,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const update = () => {
  // Render
  renderer.render(scene, camera);
  requestAnimationFrame(() => {
    peeps.forEach(p => {
      p.brain();
      p.move();
    });
    update();
  });
};

update();
