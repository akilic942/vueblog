<template>
  <section data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce" data-sal="slide-up"
            class="pt-8 pb-12 mt-28 bg-gray-300 px-16 rounded-lg">

    <div class="grid grid-cols-3 md:grid-cols-3 gap-x-3 gap-y-8 pt-2">
      <div class="col-span-3 md:col-start-1">
        <h1 class="mb-4 text-base md:text-base font-thin text-primary">{{ title }}</h1>
        <p class="text-2xl">{{ text }}</p>
      </div>
    </div>



  </section>
</template>

<script>
export default {
  name: "OneTextComponent",
  props: {
    title: String,
    text: String,
  }
}
</script>

<style scoped>

</style>
