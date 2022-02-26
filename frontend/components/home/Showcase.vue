<template>
  <section class="bg-secondary">
    <div class="container m-auto px-10 xl:px-32">
      <div class="grid grid-cols-3 gap-x-3">
        <Case class="col-span-3"  :h1="'Developing a Pandemic Contract Tracing Application '" h2="for internal use in a hospital"
                                  :tags="['UserStoryMapping', 'MVP', 'ParticipatoryDesign', 'InteractionDesign', 'Utility', 'HeuristicEvaluation', 'UsabilityTesting']" :hoverBool="true" :imgCss="'bg-gradient-to-l from-yellow-50 via-yellow-100 to-yellow-50'"
                                  :imgUrl="require('~/assets/images/showcase/ukexcel.png')"/>
        <Case class="col-span-3" :hoverBool="true"/>

          <Case class="col-span-1" :hoverBool="true"/>
          <Case class="col-span-1" :hoverBool="true"/>
          <Case class="col-span-1" :hoverBool="true"/>

      </div>
    </div>
  </section>
</template>

<script>
import Case from './Showcase/CaseThumbnail.vue'
export default { components: { Case } }
</script>

<style></style>
