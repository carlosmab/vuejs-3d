export interface CallbackHash {
  [key: string]: () => void;
}

export interface ObjectState {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  // Add any other relevant properties
}