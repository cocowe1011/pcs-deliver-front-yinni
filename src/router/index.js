import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/Login.vue'
import HomePage from '../views/home/HomePage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: 'dynamicGraph',
        component: () => import('../views/business/DynamicGraph.vue'),
        name: 'DynamicGraph'
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
