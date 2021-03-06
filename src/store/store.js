import Vue from 'vue'
import Vuex from 'vuex'

import products from '@/store/modules/products'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart
  }
})
