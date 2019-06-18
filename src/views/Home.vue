<template>
  <div class="container home-layout">
    <Cart class="home-layout__cart" />
    <div class="home-layout__products">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :image="product.image"
        :title="product.name"
        :description="product.description"
        :id="product.id"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import Cart from '@/components/Cart'

export default {
  name: 'home',
  components: {
    Cart,
    ProductCard
  },
  computed: {
    products () {
      return this.$store.getters.getProducts
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  mounted () {
    this.fetchProducts()
  }
}
</script>

<style lang="scss" scoped>
.home-layout {
  display: grid;
  grid-row-gap: 20px;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 300px auto;
    grid-row-gap: 40px;
    grid-column-gap: 50px;
  }

  &__products {
    display: grid;
    grid-row-gap: 20px;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 40px;
      grid-column-gap: 50px;
    }

    @media screen and (min-width: 1600px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
