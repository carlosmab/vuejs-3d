import { AnimatedObject3D } from '../objects';
import * as THREE from 'three';

export class CanvasObject {
  canvas: HTMLCanvasElement;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  objects: Array<AnimatedObject3D> = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.camera.position.z = 5;
  };

  addObject(object: AnimatedObject3D) {
    this.objects.push(object);
    this.scene.add(object);
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.objects.forEach(object => {
      object.animate();
    })
    this.renderer.render(this.scene, this.camera);
  }
    
}

