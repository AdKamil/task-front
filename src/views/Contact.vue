<template>
  <div class="container contact">
    <div class="contact__wrapper">
      <div class="contact__img-wrapper">
        <img
          src="@/assets/images/icons/contact-blue.svg"
          alt="contact icon"
          class="contact__img"
        >
      </div>
      <h1 class="mb-2">CONTACT</h1>
      <p class="mb-2">divante@divante.pl</p>
      <p>tel. 123-456-789</p>
      <p class="mb-2">tel. 123-456-789</p>
      <p>ul. Dmowskiego 17</p>
      <p>50-203 Wrocław</p>
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

.contact {
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
