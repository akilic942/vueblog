<template>
  <div class="bg-secondary">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
</style>

<script>
import Navbar from './Navbar.vue'
import sal from 'sal.js'
import Footer from './Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    sal()
  },
}
</script>
