import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

import { createPinia } from 'pinia'
app.use(createPinia())

import router from './router'
app.use(router)

import '@arco-design/web-vue/dist/arco.css';
import ArcoVue from '@arco-design/web-vue'
app.use(ArcoVue)

app.mount('#app')
