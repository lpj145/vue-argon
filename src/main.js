import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import Tooltip from 'vue-directive-tooltip'
import { VueHammer } from 'vue2-hammer'
import './registerServiceWorker'
import './assets/custom.scss'
import router from './router'

Vue.use(VueHammer)

Vue.use(Tooltip, {
  delay: 100,
  placement: 'bottom',
  class: 'tooltip-custom',
  triggers: ['hover'],
  offset: 0
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
