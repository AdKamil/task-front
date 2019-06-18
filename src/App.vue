<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import './assets/styles/main';
@import './assets/styles/variables';

#app {
  background-color: $background;
  min-height: 100vh;
}

h1 {
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Roboto';
  color: $dark-text;
}

h2 {
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Roboto';
  color: $dark-text;
}

p {
  color: $light-text;
  font-family: 'Lato';
  font-weight: 300;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (min-width: 992px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.mb-1 {
    margin-bottom: 1rem;
}

.mb-2 {
    margin-bottom: 2rem;
}
</style>
