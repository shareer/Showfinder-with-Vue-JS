import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router'


const app = createApp(App)

app.use(bootstrap)
app.use(VueAxios, axios);
app.use(createPinia())
app.use(router)
app.mount('#app')


