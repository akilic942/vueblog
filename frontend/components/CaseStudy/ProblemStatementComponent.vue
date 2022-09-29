<template>
  <section data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce" data-sal="slide-up"
           class="pt-8 pb-12 mt-28 bg-gray-300 px-16 rounded-lg">

    <div class="grid grid-cols-3 md:grid-cols-3 gap-x-3 gap-y-8 pt-2 pb-8">
      <div class="col-span-3 md:col-start-1">
        <h1 class="mb-4 text-base md:text-base font-thin text-primary">{{ title }}</h1>
        <p class="text-2xl">{{ text }}</p>
      </div>
    </div>

    <hr>

    <h1 class="mb-4 text-base md:text-base font-thin text-primary pt-8">👤 Users</h1>
    <div class="grid grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-8">
      <div class="col-span-1" v-for='(user, index) in users'
           :key="user" :class="[index !== users.length-1 ? 'border-r-2 ': 'border-r-0']">
        <h1 class="mb-4 text-lg md:text-base font-medium text-primary">{{ user.name  }}</h1>
        <p class="text-xl">{{ user.text }}</p>
      </div>

    </div>


  </section>
</template>

<script>
export default {
  name: "ProblemStatementComponent",
  props: {
    title: String,
    text: String,
    users: [{name: String, text: String}]
  }
}
</script>

<style scoped>

</style>
