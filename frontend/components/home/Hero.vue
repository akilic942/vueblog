<template>
  <section>
    <div class="min-h-screen w-full bg-secondary relative">
      <div class="container m-auto px-8 xl:px-32 pt-72">
        <div class="grid lg:grid-cols-3 gap-4 mb-6" data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce">
          <!-- Card: Einleitung -->
          <div class="col-span-3 flex flex-col">
            <h1 class="mb-4 text-5xl md:text-6xl font-medium text-primary text-center">I'm Aziz Kilic</h1>
            <h1 class="mb-4 text-2xl md:text-4xl font-medium text-primary text-center">a Jr. Experience Designer & Researcher</h1>
            <h1 class="mb-4 text-xl md:text-2xl font-medium text-primary text-center">excited in Participatory and Human-Centered Experience Design,</h1>
            <h1 class="mb-4 text-xl md:text-2xl font-medium text-primary text-center" v-if="devEnv">Organizational Behaviour and Employee Experience</h1>
          </div>
          <!-- /Card: Einleitung -->
        </div>
      </div>

      <div class="absolute inset-x-0 bottom-0 h-16 mb-2 sal-animate" :class="[{ shake: scrollInit }]">
        <div  data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce">
          <img class="mx-auto" src="~/assets/images/seedling.svg" width="60" height="60" uk-svg />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
