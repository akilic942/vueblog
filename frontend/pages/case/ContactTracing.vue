<template>

  <section class="bg-secondary pb-24 pt-12">
    <div class="container m-auto px-8 xl:px-32 pt-32 md:pt-28">

      <TitleComponent :title="'Translating an Excel Task'"
                      :subTitle="'Developing a Pandemic Contract Tracing Application for a Hospital'"
                      :tags="['User Research', 'Task Analysis','Participatory Design', 'Conceptual Design']"
                      :imgUrl="require('~/assets/images/showcase/case_ukexcel/thumbnail.png')"/>

      <IntroComponent :overview="'In the event of an outbreak of infectious diseases, rapid action must be taken to prevent chains of infection. One of the methods used to contain chains of infection\n'+
                                'is contact tracing. Using this\n'+
                                'epidemiological method, the environment and all persons with whom the infected person had\n'+
                                'contact are being identified and alerted in order to restrict the chain of infection. For this task, a hospital asked me to develop an application to support their daily work while a pandemic was going on.'"
                      :role="'User Researcher and Experience Conceptualizer'" :team="'1 designer, 1 engineer'"
                      :timeline="'Oct 2020 - May 2021'"/>

    </div>

  </section>

</template>

<script>
import TitleComponent from "@/components/CaseStudy/TitleComponent";
import IntroComponent from "@/components/CaseStudy/IntroComponent";

export default {
  components: {
    TitleComponent,
    IntroComponent
  }
}

</script>

<style>


</style>
