<template>
  <section class="bg-secondary">
    <div class="min-h-[90vh] w-full relative">
      <div class="container m-auto px-8 xl:px-32 pt-52 md:pt-60">
        <HeroHelloChildComponent/>
      </div>

      <div class="absolute inset-x-0 bottom-0 h-16 mb-2 " :class="{ shake: scrollInit }">
        <div  data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce">
          <img class="mx-auto" src="~/assets/images/seedling.svg" width="60" height="60" uk-svg />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroHelloChildComponent from './Hero/HeroHelloChildComponent.vue'

export default {
  components: { HeroHelloChildComponent },
  data() {
    return {
      scrollInit: true,
      devEnv: process.env.dev,
      prodEnv: process.env.prod
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll, { once: true })
  },
  methods: {
    handleScroll(event) {
      this.scrollInit = false
    }
  }
}
</script>

<style>
.shake {
  animation: shake-animation 4.72s ease infinite;
  transform-origin: 50% 50%;
}

@keyframes shake-animation {
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(5px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(5px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(5px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
