<template>
  <section>
    <div class="max-h-fit w-full bg-secondary relative branches">
      <div class="container m-auto mx-auto px-8 xl:px-28 py-4">
        <div v-if="devEnv || prodEnv" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 py-6">

          <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce"
            class="md:col-span-3 md:col-start-1 lg:col-span-2 lg:col-start-1 cursor-default rounded border-y-[6px] border-[#A4AFA9] overflow-hidden shadow-lg card transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div class="py-2">
              <p class="font-bold text-xl py-2 mb-2">UX & CX Consulting</p>
              <p class="text-gray-700 text-base">I <span class="font-bold">define</span> and <span class="font-bold">create</span> solutions tailored for you and your customers, help you to improve internal employee processes and collaboration by focusing on <span class="font-bold">User-Centered Design</span> on all levels</p>
            </div>
          </div>

          <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" data-sal-easing="ease-out-bounce"
             class="md:col-span-3 md:col-start-1 lg:col-span-2 lg:col-start-3 cursor-default rounded border-y-[6px] border-[#A4AFA9] overflow-hidden shadow-lg card transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div class="py-2">
              <p class="font-bold text-xl py-2 mb-2">Services</p>
              <p class="text-gray-700 text-base">My services includes all steps of the user-centered design processes, from planning, user research, defining the problem space, content, architecture and interaction design, testing and documentation </p>
            </div>
          </div>

          <a href="https://medium.com/@azizkilic942" data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" data-sal-easing="ease-out-bounce"
             class="md:col-span-3 md:col-start-1 lg:col-span-2 lg:col-start-5 cursor-default rounded border-y-[3px] border-r-[26px] border-[#A4AFA9] overflow-hidden shadow-lg card transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
            <div class="py-2">
              <p class="font-bold text-xl py-2 mb-2">My Blog</p>
              <p class="text-gray-700 text-base">Having UX as my passion, I'm always striving for <span class="font-bold">holistic multidisciplinary knowledge</span>
                <br><br>Learn about <span class="italic">topics on UX/CX and more</span> on my <span class="font-bold">blog</span></p>
              <p class="font-bold text-xl py-2 mb-2 text-right text-amber-700"><br>Visit my Blog<span class="font-bold">»</span></p>
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
