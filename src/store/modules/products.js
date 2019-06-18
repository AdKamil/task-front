import gql from 'graphql-tag'
import { apolloClient } from '@/apollo'

export default {
  state: {
    products: []
  },
  getters: {
    getProducts: (state) => state.products
  },
  actions: {
    async fetchProducts ({ commit }) {
      const response = await apolloClient.query({
        query: gql`
        {
          allProducts {
            id
            name
            description
            image
            imageBig
            quantity
            pricePln
          }
        }`
      })
      commit('setProducts', response.data.allProducts)
    }
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  }
}
