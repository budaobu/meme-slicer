import type { RouteRecordRaw } from 'vue-router';
import MemeSlicer from '../components/MemeSlicer.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: MemeSlicer,
  },
];
