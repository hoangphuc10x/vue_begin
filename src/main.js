import './assets/main.css'
import router from './routers/route';
import { createApp } from 'vue';
import App from './App.vue';
import { BootstrapVue3 } from 'bootstrap-vue-3';

const app = createApp(App);
app.use(router)
app.use(BootstrapVue3);
app.mount('#app');


