import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import router from './router/router'
import store from './store'

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
