import '../public/stylesheet.scss';

import * as THREE from 'three';
import * as dat from 'dat.gui';

const canvas = document.querySelector('canvas.webgl');

// Debug
const gui = new dat.GUI();

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth/window.innerHeight,
  1,
  1000,
);

// Renderer
const renderer = new THREE.WebGL1Renderer({
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
