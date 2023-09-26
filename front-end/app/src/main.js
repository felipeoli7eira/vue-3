import { createApp } from 'vue';

import store from '@/store/store';

import App from './App.vue';
import router from './router';

// toast lib
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toast, {});

app.mount('#app');
