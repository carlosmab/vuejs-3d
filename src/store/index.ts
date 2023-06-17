import { reactive } from 'vue';

interface GlobalState {
  startAnimation: (() => void) | null;
  pauseAnimation: (() => void) | null;
  resumeAnimation: (() => void) | null;
}

export const store: GlobalState = reactive({
  startAnimation: null,
  pauseAnimation: null,
  resumeAnimation: null,
});