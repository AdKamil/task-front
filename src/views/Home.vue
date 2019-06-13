<template>
  <div class="home">
    {{ allProducts }}
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'home',
  data () {
    return {
      allProducts: []
    }
  },
  apollo: {
    allProducts: {
      query: gql`
        {
          allProducts {
            name
            description
        }
      }`
    }
  }
}
</script>
