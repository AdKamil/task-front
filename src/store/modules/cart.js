export default {
  state: {
    cartItems: []
  },
  getters: {
    getCartItems: (state) => state.cartItems
  },
  actions: {
    addCartItem ({ commit }, item) {
      commit('addItem', item)
    }
  },
  mutations: {
    addItem (state, payload) {
      state.cartItems.push(payload)
    }
  }
}
