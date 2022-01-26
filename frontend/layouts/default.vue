<style>
</style>

<template>
  <div>
    <Navbar></Navbar>
    <nuxt />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import sal from 'sal.js'


export default {
  components: {
    Navbar
  },
  mounted() {
    sal();
  },
};

</script>