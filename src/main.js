import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Tooltip from 'vue-directive-tooltip'
import './registerServiceWorker'
import './assets/custom.scss'
import router from './router'

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
