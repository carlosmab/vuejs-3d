<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CanvasObject } from '../3d/canvas';
import { Cube } from '../3d/objects/cube';
import { store } from '../store';

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const canvasObject = new CanvasObject(canvas!);
  const cube = new Cube(1, 0x00ff00);
  const cube2 = new Cube(1, 0xff0000);
  cube.position.set(-1.5, 0, 0);
  cube2.position.set(1.5, 0, 0);

  canvasObject.addObject(cube);
  canvasObject.addObject(cube2);
  store.startAnimation = () => canvasObject.startAnimation();
  store.pauseAnimation = () => canvasObject.pauseAnimation();
  store.resumeAnimation = () => canvasObject.resumeAnimation();
})
</script>

<template>
  <div class="scene-panel">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.scene-panel {
}

</style>