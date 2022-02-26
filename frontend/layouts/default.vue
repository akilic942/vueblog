<style></style>

<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import sal from 'sal.js'
import Footer from './footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    sal()
  }
}
</script>
