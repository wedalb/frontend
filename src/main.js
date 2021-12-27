import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import '@/css/colors.sass'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  colors: {

    // Änder die Farben für Buttons!!
    primary:'#eadbb0',
    success:'rgb(142,220,147)',
    danger:'rgb(225,104,140)',
    warning:'rgb(206,145,114)',
    dark:'rgb(59,56,86)'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
