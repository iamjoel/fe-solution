import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
Vue.config.productionTip = false


const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/langs/zh.json'),
    'en': require('@/assets/langs/en.json')
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
