import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import apolloProvider from './apollo'

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
