<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CanvasObject } from '../3d/canvas';
import { Cube } from '../3d/objects/cube';

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const canvasObject = new CanvasObject(canvas!);
  const cube = new Cube(2, 0x00ff00);

  canvasObject.addObject(cube);
  canvasObject.animate();

})
</script>

<template>
  <div class="scene-panel">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.scene-panel {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>