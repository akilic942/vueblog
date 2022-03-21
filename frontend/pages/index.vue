<template>
  <div>
    <HeroComponent />
    <TreeBranches />
    <ShowcaseComponent />
  </div>
</template>

<script>
import TreeBranches from '~/components/home/TreeBranches.vue'
import ShowcaseComponent from '~/components/home/ShowcaseComponent.vue'
import HeroComponent from "~/components/home/HeroComponent";

export default {
  components: {HeroComponent, TreeBranches, ShowcaseComponent },
}
</script>
