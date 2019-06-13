<template>
  <nav class="main-nav">
    <router-link to="/">
      <span class="main-nav__logo">LOGO</span>
      <ul class="main-nav__link-list">
        <li
          class="main-nav__link-wrapper"
          v-for="(link, index) in links"
          :key="index"
        >
          <router-link :to="link.slug" class="main-nav__link">{{ link.name }}</router-link>
        </li>
      </ul>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      links: [
        {
          slug: '/home',
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
