<template>
  <section class=" px-4 md:px-16">
    <div class="grid grid-cols-3 md:grid-cols-3 gap-x-3 gap-y-8 pt-10">
      <div class="col-span-3 md:col-start-1">
        <h1 class="mb-4 text-base md:text-base font-medium text-primary">Overview</h1>
        <p class="text-2xl">{{ overview }}</p>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-x-6 gap-y-8 pt-10">
      <div class="col-span-1 md:col-start-1">
        <h1 class="mb-4 text-base md:text-base font-medium text-primary">My Role</h1>
        <p class="text-xl">{{ role }}</p>
      </div>

      <div class="col-span-1">
        <h1 class="mb-4 text-base md:text-base font-medium text-primary">Team</h1>
        <p class="text-xl">{{ team }}</p>
      </div>

      <div class="col-span-1">
        <h1 class="mb-4 text-base md:text-base font-medium text-primary">Timeline</h1>
        <p class="text-xl">{{ timeline }}</p>
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

