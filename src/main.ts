import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import './style.css';

const app = createApp(App);
app.use(Vue3Toastify);
app.use(createPinia());

app.mount('#app');
