<template>
  <div class="container about">
    <div class="about__wrapper">
      <div class="about__img-wrapper">
        <img
          src="@/assets/images/icons/contact-blue.svg"
          alt="contact icon"
          class="about__img"
        >
      </div>
      <h1 class="mb-2">ABOUT</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, animi porro illum error corporis tempore tenetur ratione aliquam! Veniam, fugit veritatis architecto quod voluptas expedita aut culpa saepe consectetur ea?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);

  @media screen and (min-width: 992px) {
    min-height: calc(100vh - 170px);
  }

  &__wrapper {
    background-color: #fff;
    padding: 50px;
    text-align: center;

    @media screen and (min-width: 768px) {
      min-width: 500px;
      max-width: 600px;
    }
  }

  &__img-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    border-color: $light-blue;
    border-block-width: 2px;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem auto;
  }

  &__img {
    width: 55%;
    height: auto;
  }
}
</style>
