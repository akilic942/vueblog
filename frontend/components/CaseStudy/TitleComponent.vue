<template>
  <section data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce" data-sal="slide-up">

    <div class="grid lg:grid-cols-3 gap-4 mb-6" >
      <!-- Card: Einleitung -->
      <div class="col-span-3 flex flex-col">
        <h1 class="mb-4 text-4xl md:text-4xl font-medium text-primary text-center">{{ title }}</h1>
        <h1 class="mb-4 text-xl md:text-2xl font-medium text-primary text-center">{{ subTitle }}</h1>

        <div class="inline-block text-center">
        <h1 v-for="(tag, index) in tags" v-bind:key="tag" class="inline-block mr-2">
          <p class="antialiased  text-xs lg:text-sm font-light">{{ tag }}<span v-if="tags[index + 1]"> · </span></p>
        </h1>
        </div>
      </div>
      <!-- /Card: Einleitung -->
    </div>

    <div class="grid grid-cols-4 gap-x-3 gap-y-8 pt-10">
      <div class="group col-span-4">
        <img :src="imgUrl"
             :class="'bg-gradient-to-l from-yellow-50 via-yellow-100 to-yellow-50'"
        />
      </div>
    </div>

  </section>
</template>

<style>

</style>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    tags: Array,
    imgUrl: {
      type: String,
      default: require('~/assets/images/placeholder.png')
    },
  }
}
</script>

