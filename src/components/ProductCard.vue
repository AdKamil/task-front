<template>
  <div class="product" @click="goToProduct()">
    <v-lazy-image
      class="product__image"
      :src="image"
      alt="product"
      src-placeholder="@/assets/images/loading.gif"
    />
    <div class="product__text">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image'

export default {
  components: {
    VLazyImage
  },
  props: [
    'image',
    'title',
    'description',
    'id'
  ],
  methods: {
    goToProduct () {
      this.$router.push({ name: 'product', params: { id: this.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.07);
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__text {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
  }
}
</style>
