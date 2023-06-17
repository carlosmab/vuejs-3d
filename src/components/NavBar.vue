<script setup lang="ts">
import { ref } from 'vue';
import { CallbackHash } from '../interfaces';

const options = ref(['start', 'pause', 'restart']);

const start = () => {
  console.log('start');
}

const pause = () => {
  console.log('pause');
}

const restart = () => {
  console.log('restart');
}

const optionsCallbacks: CallbackHash = {
  "start": start,
  "pause": pause,
  "restart": restart,
}

const handleOptionClick = (option: string) => {
  optionsCallbacks[option]();
}

</script>

<template>
  <div class="left-panel">
    <nav class="navbar navbar-light bg-light">
      <ul class="nav flex-column nav-items">
        <li class="nav-item" v-for="option in options" :key="option">
          <button class="btn btn-primary" @click="handleOptionClick(option)">{{ option }}</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.left-panel {
  width: 200px;
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-items {
  list-style-type: none;
  padding: 0;
}

.nav-item {
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
