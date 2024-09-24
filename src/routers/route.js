import { createRouter, createWebHistory } from 'vue-router';

import Report from '../components/CmReport.vue';
import Technical from '../components/CmTechnical.vue';

const routes = [
  {
    path: '/detail',
    name: 'Detail',
    redirect: '/detail/thong-so',
    children: [
      {
        path: 'thong-so',
        component: Technical,
      },
      {
        path: 'danh-gia',
        component: Report,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
