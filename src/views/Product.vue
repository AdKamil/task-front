<template>
  <div class="container product-layout">
    <Cart class="product-layout__cart" />
    <div class="product-layout__product">
      <div class="product">
        <img :src="product.imageBig" :alt="product.name" class="product__image">
        <div class="product__info">
          <div class="product__desc">
            <h1 class="product__desc-header">
              {{ product.name }}
            </h1>
            <p class="product__desc-paragraph">
              {{ product.description }}
            </p>
          </div>
          <button class="product__button" @click="addProduct">ADD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart'

export default {
  name: 'product',
  components: {
    Cart
  },
  data () {
    return {
      product: {}
    }
  },
  computed: {
    products () {
      return this.$store.getters.getProducts
    }
  },
  methods: {
    filterProduct () {
      this.products.map(product => {
        const productId = this.$route.params.id
        if (product.id === productId) {
          this.product = product
        }
      })
    },
    addProduct () {
      this.$store.dispatch('addCartItem', this.product)
    }
  },
  mounted () {
    this.filterProduct()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.product-layout {
  display: grid;
  grid-row-gap: 20px;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 300px auto;
    padding-top: 50px;
    padding-bottom: 50px;
    grid-row-gap: 40px;
    grid-column-gap: 50px;
  }
}

.product {
  background-color: $light-blue;

  &__info {

    padding: 15px 25px 25px 25px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      padding: 30px 50px 50px 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__image {
    max-width: 100%;
  }

  &__desc-header {
    color: #fff;
  }

  &__desc-paragraph {
    color: $gray;
  }

  &__button {
    background-color: $accent;
    border: none;
    font-size: 1.3rem;
    font-family: 'Roboto';
    padding: 15px 60px;
    color: #fff;
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover {
      opacity: .8;
    }
  }
}
</style>
