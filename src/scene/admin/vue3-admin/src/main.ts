import { createApp } from 'vue'

import App from './App.vue'

import { createPinia } from 'pinia'

import router from './router'

import '@arco-design/web-vue/dist/arco.css'
import ArcoVue from '@arco-design/web-vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')
