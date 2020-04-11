<template>
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Body from '~/components/Body.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Body,
    Footer
  }
})
</script>