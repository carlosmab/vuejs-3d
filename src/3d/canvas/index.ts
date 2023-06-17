import { ObjectState } from '../../interfaces';
import { AnimatedObject3D } from '../objects';
import * as THREE from 'three';

export class CanvasObject {
  canvas: HTMLCanvasElement;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  objects: Array<AnimatedObject3D> = [];
  paused: boolean = false;
  animationId: number | null = null;
  objectsInitialState: Map<AnimatedObject3D, ObjectState> = new Map();

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffff00, 1);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);

    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize();
  };

  addObject(object: AnimatedObject3D) {
    this.objects.push(object);
    this.scene.add(object);

    this.objectsInitialState.set(object, {
      position: object.position.clone(),
      rotation: object.rotation.clone(),
      // Add any other relevant properties you want to store
    });
  }

  resetObjectState() {
    this.objects.forEach((object) => {
      const initialState = this.objectsInitialState.get(object);
      if (initialState) {
        object.position.copy(initialState.position);
        object.rotation.copy(initialState.rotation);
      }
    });
  }

  resetAnimation() {
    this.resetObjectState();
  }
  
  startAnimation() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.resetAnimation(); // Reset the animation state
    this.animate(); // Start the animation loop
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    this.objects.forEach(object => {
      object.animate();
    })
    this.renderer.render(this.scene, this.camera);
  }

  pauseAnimation = () => {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  resumeAnimation = () => {
    if (!this.animationId) {
      this.animate();
    }
  }

  private handleWindowResize = () => {
    const parentElement = this.canvas.parentElement;
    if (parentElement) {
      const parentWidth = parentElement.clientWidth;
      const parentHeight = parentElement.clientHeight;
      this.renderer.setSize(parentWidth, parentHeight);
      this.camera.aspect = parentWidth / parentHeight;
      this.camera.updateProjectionMatrix();
    }
  }

  private getAspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

}

