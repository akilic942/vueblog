<template>
  <section>
    <div class="max-h-fit w-full bg-secondary relative branches">
      <div class="container m-auto mx-auto px-8 xl:px-28 py-4">
        <div v-if="devEnv || prodEnv" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-6"
           data-sal="slide-up" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce">

          <div
            class="md:col-span-3 md:col-start-1 lg:col-span-2 lg:col-start-1 cursor-default rounded border-y-[6px] border-yellow-200 overflow-hidden shadow-lg card transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div class="py-2">
              <p class="font-bold text-xl py-2 mb-2">Customer Engagement</p>
              <p class="text-gray-700 text-base">By putting every <span class="italic">Human</span>, <span class="italic">Customer</span> and <span class="italic">User</span> in the center of your service, you can improve your <span class="font-bold">employee</span> and <span class="font-bold">customer experience</span> for havingys a better customer engagement</p>
            </div>
          </div>

          <div
             class="md:col-span-3 md:col-start-1 lg:col-span-2 lg:col-start-3 cursor-default rounded border-y-[6px] border-yellow-300 overflow-hidden shadow-lg card transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div class="py-2">
              <p class="font-bold text-xl py-2 mb-2">My Focus</p>
              <p class="text-gray-700 text-base">I focus on combining <span class="font-bold">critical thinking</span> and  <span class="font-bold">creativity</span>
                <br><br><span class="underline underline-offset-2">Critical Thinking</span> to do truthful work
                <br><br><span class="underline underline-offset-2">Creativity</span> to work without <span class="italic">fixation</span> or <span class="italic">imitation</span>, to find a solution tailored for you and your customer through <span class="italic">careful considerations</span></p>

            </div>
          </div>

          <a href="https://medium.com/@azizkilic942"
             class="md:col-span-3 md:col-start-1 lg:col-span-2 lg:col-start-5 cursor-default rounded border-y-[3px] border-r-[26px] border-orange-300 overflow-hidden shadow-lg card transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
            <div class="py-2">
              <p class="font-bold text-xl py-2 mb-2">My Blog</p>
              <p class="text-gray-700 text-base">Having UX as my passion, I'm always striving for <span class="font-bold">holistic multidisciplinary knowledge</span>
                <br><br>Learn about <span class="italic">topics on UX/CX</span>, my <span class="italic">thinking</span> and my <span class="italic">work</span> on my <span class="font-bold">blog</span></p>
              <p class="font-bold text-lg py-2 mb-2 text-right text-amber-700">Click Here <span class="font-bold">»</span></p>
            </div>
          </a>



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
