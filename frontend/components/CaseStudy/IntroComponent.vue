<template>
  <section data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce" data-sal="slide-up">

    <div class="grid grid-cols-3 md:grid-cols-3 gap-x-3 gap-y-8 pt-10">
      <div class="col-span-3 md:col-start-1">
        <h1 class="mb-4 text-base md:text-base font-medium text-primary">Overview</h1>
        <p class="text-2xl">{{ overview }}</p>
      </div>
    </div>

    <div class="grid grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-8 pt-10">
      <div class="col-span-1 md:col-start-1">
        <h1 class="mb-4 text-base md:text-base font-medium text-primary">My Role</h1>
        <p>{{ role }}</p>
      </div>

      <div class="col-span-1">
        <h1 class="mb-4 text-base md:text-base font-medium text-primary">Team</h1>
        <p>{{ team }}</p>
      </div>

      <div class="col-span-1">
        <h1 class="mb-4 text-base md:text-base font-medium text-primary">Timeline</h1>
        <p>{{ timeline }}</p>
      </div>
    </div>


  </section>
</template>

<style>

</style>

<script>
export default {
  props: {
    overview: String,
    role: String,
    team: String,
    timeline: String
  }
}
</script>

