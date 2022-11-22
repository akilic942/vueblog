<template>
  <section class="relative bg-[#F5FAFF]">
    <div class="container sticky">

      <div class="background-container z-10 w-screen h-screen fixed block">

        <div class="absolute bg-image-first bottom-0 right-0 transition-opacity will-change-[opacity] ease-out duration-300 opacity-100 ">
          <div class="img-container">
            <img src="~/assets/images/path2986.png"
                 :class="'bg-cyan-300 w-full h-full flex'"/>
          </div>
        </div>

        <div class="absolute bg-image-second bottom-0 right-0 transition-opacity will-change-[opacity] ease-out duration-300 opacity-0 ">
          <div class="img-container">
            <img src="~/assets/images/2.jpg"
                 :class="'bg-cyan-300 w-full h-full flex'"/>
          </div>
        </div>

      </div>

      <div class="content-container z-20 w-screen h-screen relative inline-block">
        <div id="content-first" class="overflow-hidden w-screen h-screen">Developing a Pandemic Contract Tracing Application for a Hospital</div>
        <div id="content-second" class="overflow-hidden w-screen h-screen">BBB</div>
      </div>

    </div>
  </section>
</template>

<script>
export default {

  mounted() {
    // define an observer instance
    let interSectionObserver = new IntersectionObserver(onIntersection, {
      root: null,   // default is the viewport
      threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
    })

    // callback is called on intersection change
    function onIntersection(entries, opts) {
      entries.forEach(entry => {
        console.log(entry);

        if(entry.target.id == 'content-first') {
          document.querySelector('.bg-image-first').classList.toggle('opacity-100', entry.isIntersecting)
          document.querySelector('.bg-image-first').classList.toggle('opacity-0', !entry.isIntersecting)

        }

        if(entry.target.id == 'content-second') {
          document.querySelector('.bg-image-second').classList.toggle('opacity-100', entry.isIntersecting)
          document.querySelector('.bg-image-second').classList.toggle('opacity-0', !entry.isIntersecting)
        }


        entry.target.classList.toggle('opacity-100', entry.isIntersecting);
      })
    }

    // Use the observer to observe an element
    interSectionObserver.observe(document.getElementById('content-first'))
    interSectionObserver.observe(document.getElementById('content-second'))


    // To stop observing:
    // observer.unobserve(entry.target)

  },

}
</script>
