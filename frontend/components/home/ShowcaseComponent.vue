<template>
  <section class="bg-secondary pb-24 pt-12">
    <div class="container m-auto px-8 xl:px-32">
      <div class="grid grid-cols-4 gap-x-3 gap-y-8">
        <Case class="col-span-4" :h1="'Translating an Excel Task'" :h2="'- Developing a Pandemic Contract Tracing Application for a Hospital'"
              :tags="['User Research', 'Task Analysis','Participatory Design', 'Conceptual Design']" :hoverBool="true" :caseUrl="'/case/contacttracing'"
              :imgCss="'bg-gradient-to-l from-yellow-50 via-yellow-100 to-yellow-50'" :imgUrl="require('~/assets/images/showcase/case_ukexcel/thumbnail.png')" />
      </div>
    </div>
  </section>
</template>

<script>
import Case from './Showcase/CaseThumbnail.vue'
export default { components: { Case } }
</script>

<style></style>
