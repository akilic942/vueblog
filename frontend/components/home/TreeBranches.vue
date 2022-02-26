<template>
  <section>
    <div class="border-double border-y-4 max-h-fit w-full bg-secondary relative branches">
      <div class="container m-auto mx-auto px-10 xl:px-32">
        <div class="grid grid-cols-1 p-8 gap-8 md:grid-cols-2 2xl:grid-cols-4" 
            data-sal="slide-up" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce">
            
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
export default {}
</script>

<style>
.branches {
  background-image: url('~assets/images/path2986.png');
  background-blend-mode: hard-light;
}
</style>
