import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";
import { AnimatedObject3D } from "..";

export class Cube extends AnimatedObject3D {
  constructor(size: number, color: number) {
    super();
    const geometry = new BoxGeometry(size, size, size);
    const material = new MeshBasicMaterial({ color: color });
    const mesh = new Mesh(geometry, material);

    this.add(mesh);
  }

  animate() {
    this.rotation.x += 0.01;
    this.rotation.y += 0.01;
  }
}


