<template>
  <div>
    <Hero />
    <TreeBranches />
    <Showcase />
  </div>
</template>

<script>
import Hero from '~/components/home/Hero'
import TreeBranches from '~/components/home/TreeBranches.vue'
import Showcase from '~/components/home/Showcase.vue'

export default {
  components: { Hero, TreeBranches, Showcase },
}
</script>
