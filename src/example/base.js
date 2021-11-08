import * as THREE from 'three';

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

const BaseScene = () => {
  const scene = new THREE.Scene();
  const plane = getPlane(3);
  plane.rotation.x = Math.PI/2;
  plane.position.x = 3/2;
  plane.position.z = 3/2;
  
  const box = getBox(1, 1, 1);
  box.position.y = box.geometry.parameters.height/2;
  box.position.x = box.geometry.parameters.width/2 + (box.geometry.parameters.width);
  box.position.z = box.geometry.parameters.width/2 + (box.geometry.parameters.width);

  // scene.add(box);
  scene.add(plane);

  return scene;
};

export default BaseScene;
