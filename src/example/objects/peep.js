import * as THREE from 'three';

const buildMesh = () => {
  const size = 0.2;

  const geo = new THREE.BoxGeometry(size, size, size);
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const mesh = new THREE.Mesh(geo, mat);

  mesh.position.z = Math.random() * ((3 + size) - 0.6) + 0.6;
  mesh.position.x = Math.random() * ((3 - size) - size) + size;
  mesh.position.y = .5/2;

  return mesh;
}

const onPlain = (pos, dir) => {
  const planeLength = 3;

  if (dir === 'X') {
    return (pos.x < planeLength - 0.2 && pos.x >= 0.2);
  } else if (dir === 'Z') {
    return (pos.z < planeLength + 0.1 && pos.z >= 0.6);
  }
};

const getNegative = (dir, pos) => {
  switch(dir) {
    case 'X':
      if (pos.x <= 0.2) {
        return false;
      }
      return true;
    case 'Z':
      if (pos.z <= 0.6) {
        return false;
      }
      return true;
  }
}

const setPeepDirection = (obj) => {
  // const idx = peeps.findIndex(o => o === obj);
  const dir = Math.random() > 0.5 ? 'X': 'Z';
  const direction = { dir, negative: getNegative(dir, obj.position)};
  // peeps[idx].direction = direction;
  return direction;
}

export default class Peep {
  constructor() {
    this.mesh = buildMesh();
    this.direction = { dir: 'X', negative: false };
  }

  brain() {
    // const idx = peeps.findIndex(m => m === mesh);
    if (Math.random() < 0.005) {
      this.direction.dir = this.direction.dir === 'X' ? 'Z' : 'X';
    }
  }

  move() {
    let isCollisionHit = false;
  
    if (!onPlain(this.mesh.position, this.direction.dir)) {
      isCollisionHit = true;
      this.direction = setPeepDirection(this.mesh);
    }
  
    if (isCollisionHit || onPlain(this.mesh.position, this.direction.dir)) {
      if (this.direction.dir === 'X') {
        this.mesh.position.x += 0.01 * (this.direction.negative ? -1 : 1);
      }
      if (this.direction.dir === 'Z') {
        this.mesh.position.z += 0.01 * (this.direction.negative ? -1 : 1);
      }
    }
  };

  setDirection(direction) {
    this.direction = direction;
  }

  getDirection() {
    return this.direction;
  }
}