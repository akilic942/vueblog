<template>
  <header :class="['absolute w-full top-0 z-50 transition duration-600 mt-6 bg-transparent']" id="header">
    <!-- {'opacity-0': hideWhenScroll, 'opacity-100': !hideWhenScroll},
                        {'bg-white': atTopOfPage, 'nav': !atTopOfPage} -->

    <nav class="container mx-auto px-10 xl:px-32">
      <div class="relative flex items-center justify-between h-16">
        <div class="whitespace-nowrap flex-1 flex items-center justify-center sm:justify-start">
          <a class="" href="/">
            <h3 class="inline text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl lg:text-3xl font-sans gap-0 text-gray-500">
              COMPASSIONUX
            </h3>
          </a>

          <div class="divide-y text-3xl font-sans mr-0 md:mr-auto mx-auto ml-1 md:block" href="#">
            <div class="text-base font-light subpixel-antialiased group-hover:text-purple-500">Aziz Kilic</div>
            <div class="text-base font-normal subpixel-antialiased group-hover:text-purple-500">UX Designer</div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex order-last items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <ul class="hidden md:flex px-4 font-extralight font-heading space-x-6 lg:space-x-12 gray-500">
            <li v-if="devEnv"><a class="hover:text-green-500" href="/2">BLOG</a></li>
          </ul>

          <img class="hidden sm:block" src="~/assets/images/yinyang_tree.svg" width="60" height="60" uk-svg />
        </div>
      </div>

      <div class="w-full md:hidden mt-6" v-if="devEnv">
        <ul class="font-extralight font-heading flex-1 flex items-center justify-center sm:justify-start text-base text-lg">
          <li><a class="hover:text-green-500 mr-4" href="/2">ABOUT</a></li>
          <li><a class="hover:text-green-500 mr-4" href="/2">CONTACT</a></li>
          <li><a class="hover:text-green-500 mr-4" href="/2">BLOG</a></li>
        </ul>
      </div>

    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
   /* hideWhenScroll: false,
    atTopOfPage: false*/ 
    devEnv: process.env.dev,
    prodEnv: process.env.prod
  }),

  mounted() {
    /*    var lastScrollTop = 0;
        const header = document.getElementById("header");

        document.addEventListener('scroll', (event) => {

            // Schatten CSS wenn er am bildschirm oben ist
            if (window.pageYOffset > 0) {
                if (!this.atTopOfPage) { this.atTopOfPage = true; this.hideWhenScroll = false; }
            } else {
                if (this.atTopOfPage) {  this.atTopOfPage = false }
            }


            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // downscroll code
                setTimeout( () => {
                    header.classList.add("invisible");
                }, 300);
                this.hideWhenScroll = true;

            } else {
                // upscroll code
                setTimeout( () => {
                    header.classList.remove("invisible");
                }, 300);
                this.hideWhenScroll = false;
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

        }); */
  },
  unmounted() {
      /* document.removeEventListener('scroll')*/
  }
}
</script>
