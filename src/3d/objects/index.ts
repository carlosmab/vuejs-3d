import { Object3D } from "three";

export abstract class AnimatedObject3D extends Object3D {
  abstract animate(): void;
}