<template>
  <div class="cart">
    <div class="cart__wrapper">
      <div class="cart__contact">
        <div class="header">
          <img src="@/assets/images/icons/contact.svg" alt="contact" class="header__img">
          <h2 class="header__text">Contact</h2>
        </div>
        <div class="description">
          <p class="description__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque quod odio eveniet provident. Illum.</p>
        </div>
      </div>
      <div class="cart__cart">
        <div class="header">
          <img src="@/assets/images/icons/cart.svg" alt="cart" class="header__img">
          <h2 class="header__text">Cart</h2>
        </div>
        <div class="cart__cart-items">
          <div
            class="cart-item"
            v-for="(item, index) in cartItems"
            :key="index"
          >
            <span class="cart-item__price">
              {{ item.pricePln }}
            </span>
            <span class="cart-item__name">
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems () {
      return this.$store.getters.getCartItems
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.cart {

  &__wrapper {
    background-color: $light-blue;
    padding: 20px;
  }

  &__cart-items {
    padding: 10px;
    border: dashed 2px #fff;
    height: 170px;
    overflow-y: scroll;
  }
}

.header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  &__img {
    height: 30px;
    margin-right: 20px;
  }

  &__text {
    color: #fff;
  }
}

.description {

  &__paragraph {
    color: $gray;
  }
}

.cart-item {
  background-color: rgba(0, 0, 0, .2);
  padding: 12px;
  margin-top: 5px;
  margin-bottom: 5px;

  &__price {
    color: $accent;
    font-family: 'Roboto';
    font-weight: 500;
    margin-right: 7px;
  }

  &__name {
    color: #fff;
    font-family: 'Roboto';
    font-weight: 500;
  }
}

</style>
