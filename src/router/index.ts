import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Project from '../views/Project.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
