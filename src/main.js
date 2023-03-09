import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import pinia from '@/stores/index.js';
import '@/service/index.js';

import './assets/styles/index.less';


createApp(App).use(router).use(pinia).mount('#app');