// main.js (Vue 3 対応)
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import HomePage from './components/HomePage.vue';
import CreateRequirementPage from './components/CreateRequirementPage.vue';
import RequirementDetailPage from './components/RequirementDetailPage.vue';
import PasswordResetPage from './components/PasswordResetPage.vue'; // パスワード再発行ページを追加

const routes = [
  { path: '/', component: LoginPage }, // デフォルトのルートをログインページに設定
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/home', component: HomePage },
  { path: '/create-requirement', component: CreateRequirementPage },
  { path: '/requirement-detail/:id', component: RequirementDetailPage },
  { path: '/password-reset', component: PasswordResetPage } // パスワード再発行ページのルートを追加
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
