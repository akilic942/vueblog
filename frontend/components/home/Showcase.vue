<template>
  <section class="bg-secondary pb-24 pt-12">
    <div class="container m-auto px-8 xl:px-32">
      <div class="grid grid-cols-4 gap-x-3 gap-y-8">
        <Case class="col-span-4" :h1="'Developing a Pandemic Contract Tracing Application for a Hospital'" h2="for internal use in a hospital" :tags="['Participatory Design', 'User Story Mapping', 'MVP', 'Conceptual Design', 'Utility', 'Heuristic Evaluation', 'Usability Testing']" :hoverBool="true" :imgCss="'bg-gradient-to-l from-yellow-50 via-yellow-100 to-yellow-50'" :imgUrl="require('~/assets/images/showcase/case_ukexcel/thumbnail.png')" />
      </div>

      <div class="grid grid-cols-4 gap-x-3 gap-y-8 mt-24 md:mt-40">
        <div class="col-span-4" data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce">
          <h1 class="text-xl lg:text-2xl">Current Work and Side Projects</h1>
          <hr />
        </div>
        <Case class="col-span-4 md:col-span-2" :h1="'Ediya.de - Consulting Building a Business'" h2="A Growth Journey for the Two of Us" :tags="['UX Consulting and Strategy', 'User Research']" :imgCss="'bg-gradient-to-t from-[#96BF48] to-[#9cb965]'" :imgUrl="require('~/assets/images/showcase/case_ediya/thumbnail.png')" :hoverBool="true" />

        <Case class="col-span-4 md:col-span-2" :h1="'Concept Case | A Pen & Paper Roleplay Platform'" :imgUrl="require('~/assets/images/showcase/case_pap/thumbnail.png')" :imgCss="'bg-gradient-to-b from-yellow-100 to-red-100'" :hoverBool="true" />

        <Case class="col-span-4 md:col-span-2" :h1="'Concept Case | Peer-to-Peer Insurance'" :imgUrl="require('~/assets/images/showcase/case_p2pinsurance/thumbnail.png')" :imgCss="'bg-gradient-to-tr from-stone-100 to-indigo-100'" :hoverBool="true" />

        <Case class="col-span-4 md:col-span-2" :h1="'Concept Case | Game Model Trust Research'" :imgUrl="require('~/assets/images/showcase/case_godot/thumbnail.png')" :hoverBool="true" />
      </div>
    </div>
  </section>
</template>

<script>
import Case from './Showcase/CaseThumbnail.vue'
export default { components: { Case } }
</script>

<style></style>
