<template>
  <div class="group">
    <div class="transform transition duration-500 group-hover:scale-105 group-focus:outline focus:ring focus:ring-neutral-400 ease-in-out inline-block">
      <div data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce" data-sal="slide-up" class="flex">
        <a class="bg-transparent" :href="caseUrl">
          <div class="relative">
            <img :src="imgUrl" :class="imgCss || 'bg-gradient-to-l from-slate-100 via-slate-200 to-slate-100'" class="group-hover:opacity-25 rounded" />

            <div v-if="hoverBool" class="absolute centered-axis-xy z-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100  block">
              <button v-if="caseUrl" class="text-center rounded-lg p-4 bg-white text-gray-700 font-bold text-lg">Learn more</button>
              <button v-if="!caseUrl" class="text-center rounded-lg p-4 bg-white text-gray-700 font-bold text-lg">Available Soon</button>
            </div>
          </div>

          <h1 class="antialiased text-xl lg:text-2xl">{{ h1 }}</h1>
          <div v-for="(tag, index) in tags" class="inline-block mr-2">
            <p class="antialiased  text-xs lg:text-lg font-light">{{ tag }}<span v-if="tags[index + 1]"> · </span></p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    h1: String,
    h2: String,
    hoverBool: Boolean,
    tags: Array,
    href: String,
    imgUrl: {
      type: String,
      default: require('~/assets/images/placeholder.png')
    },
    imgCss: String,
    caseUrl: String,
    tags: Array
  }
}
</script>

<style></style>
