<template>
  <div class="wrapper">
    <nav class="container main-nav">

      <router-link to="/">
        <span class="main-nav__logo">LOGO</span>
      </router-link>

      <ul class="main-nav__link-list" :class="navOpen ? 'opened' : ''">
        <li
          class="main-nav__link-wrapper"
          v-for="(link, index) in links"
          :key="index"
        >
          <router-link
            :to="link.slug"
            exact
            @click.native="navOpen = !navOpen"
            class="main-nav__link"
          >{{ link.name }}
        </router-link>
        </li>
      </ul>

      <span class="search" @click="search">
        <img src="../../assets/images/icons/search.svg" alt="search icon" class="search__image">
      </span>

      <button
        class="hamburger hamburger--spin"
        :class="navOpen ? 'is-active' : ''"
        type="button"
        @click="navOpen = !navOpen"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      links: [
        {
          slug: '/',
          name: 'home'
        },
        {
          slug: '/about',
          name: 'about'
        },
        {
          slug: '/contact',
          name: 'contact'
        }
      ],
      navOpen: false
    }
  },
  methods: {
    search () {
      alert('Out of task scope')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
@import './hamburger';

.container {
  padding-top: 0;
  padding-bottom: 0;
}

.wrapper {
  border-bottom: solid 1px $gray;
}

.main-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 992px){
    height: 70px;
  }

  &__logo {
    font-family: 'Lato';
    font-size: 1.5rem;
    font-weight: 300;
    color: $dark-text
  }

  &__link-list {
    margin-top: 0;
    padding-left: 0;
    margin-bottom: 0;
    display: flex;

    @media screen and (max-width: 991.9px){
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $dark-blue;
      flex-direction: column;
      justify-content: center;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform .2s ease-in-out;
    }

    @media screen and (min-width: 992px) {
      margin-right: 50px;
      margin-left: auto;
    }

    &.opened {
      transform: scaleY(1);
    }
  }

  &__link-wrapper {
    text-align: right;
    padding-right: 50px;
    padding-top: 25px;
    padding-bottom: 0;

    @media screen and (min-width: 992px) {
      color: $dark-text;
      padding-right: 0;
      padding-left: 50px;
      padding-top: 0;
    }
  }

  &__link {
    color: #fff;
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Roboto';
    display: inline-block;
    transition: transform .2s ease-in-out;
    font-weight: 500;

    @media screen and (min-width: 992px) {
      color: $dark-text;
      font-size: 1rem;
      text-transform: lowercase;
    }

    &:hover {
      transform: scale(.9);
    }

    &.router-link-active {
      position: relative;

      @media screen and (max-width: 991.9px) {
        &:after {
          content: '';
          display: block;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 100%;
          background-color: #fff;
        }
      }

      @media screen and (min-width: 992px) {
        color: $light-blue;
      }
    }
  }
}

.hamburger {
  outline: none;

  @media screen and (min-width: 992px){
    display: none;
  }
}

.search {
  height: 60px;
  width: 70px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (min-width: 992px) {
    height: 100%;
  }

  &__image {
    height: 20px;
  }
}

</style>
