<template>
  <section>
    <div class="max-h-fit w-full bg-secondary relative branches">
      <div class="container m-auto mx-auto px-8 xl:px-32 py-4">

        <div v-if="devEnv || prodEnv" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-6" data-sal="slide-up" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce">
          <div class="md:col-span-3 md:col-start-1 lg:col-span-3 lg:col-start-2 rounded border-l-[16px] border-orange-500 overflow-hidden shadow-lg card transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
            <div class="py-6">
              <p class="font-bold text-xl py-2 mb-2">Under Development</p>
              <p class="text-gray-700 text-base">My <span class="italic">case studies</span> and my <span class="italic">blog</span> are still <span class="font-bold">under heavy development</span>. 
                <br><br> Stay tuned for my following case studies and projects I am working on!</p>
            </div>
          </div>          
        </div>

        <div v-if="false" class="grid grid-cols-1 p-8 gap-8 md:grid-cols-2 2xl:grid-cols-4" data-sal="slide-up" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce">
          <div class="rounded overflow-hidden shadow-lg card transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset 1</div>
              <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg card transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset 2</div>
              <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg card transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset 3</div>
              <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>

          <div class="rounded overflow-hidden shadow-lg card transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset 4</div>
              <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      devEnv: process.env.dev,
      prodEnv: process.env.prod
    }
  }
}
</script>

<style>
.branches {
  background-image: url('~assets/images/path2986.png');
  background-blend-mode: hard-light;
  background-size: cover;
}
</style>
