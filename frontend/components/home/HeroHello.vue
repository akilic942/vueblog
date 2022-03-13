<template>
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
</template>

<script>
export default {
  data() {
    return {
      devEnv: process.env.dev,
      prodEnv: process.env.prod
    }
  }
}
</script>

<style></style>
