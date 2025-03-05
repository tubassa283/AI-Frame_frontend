// main.js (Vue 3 対応)
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import CreateRequirementPage from './components/CreateRequirementPage.vue';
import RequirementDetailPage from './components/RequirementDetailPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/create-requirement', component: CreateRequirementPage },
  { path: '/requirement-detail/:id', component: RequirementDetailPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
