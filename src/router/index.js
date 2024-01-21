// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/RegisterForm.vue';
import Login from '../views/LoginForm.vue';
import Home from '@/views/HomeForm.vue';

const routes = [
  {
    path: '/',
    redirect: '/register', // Redirect the root path to the register page
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
