import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
axios.defaults.withCredentials = false

createApp(App).use(store).use(router).mount('#app')
