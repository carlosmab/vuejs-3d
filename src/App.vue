<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import ScenePanel from './components/ScenePanel.vue'

</script>

<template>
  <div>
    <div class="row">
      <div class="col-3">
        <NavBar />
      </div>
      <div class="col-9">
        <ScenePanel />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  height: 100vh;
}
</style>
