<template>
  <!-- https://medium.com/design-bootcamp/if-your-ux-portfolio-has-this-20-well-done-it-will-give-you-an-80-result-a129f048d8a7 -->
  <section class="bg-secondary pb-24 pt-12">
    <div class="container m-auto px-8 xl:px-32 pt-32 md:pt-28">
      <TitleComponent :title="'Translating an Excel Task'"
                      :subTitle="'Developing a Pandemic Contract Tracing Application for a Hospital'"
                      :tags="['User Research', 'Task Analysis','Participatory Design', 'Conceptual Design']"
                      :imgUrl="require('~/assets/images/showcase/case_ukexcel/thumbnail.png')"/>

      <IntroComponent :overview="'In the event of an outbreak of infectious diseases, rapid action must be taken to prevent chains of infection. One of the methods used to contain chains of infection\n'+
                                'is contact tracing. Using this\n'+
                                'epidemiological method, the environment and all persons with whom the infected person had\n'+
                                'contact are being identified and alerted in order to restrict the chain of infection. In this project a hospital asked me to develop an application to support their contact tracing of their co-workers while a pandemic was going on.'"
                      :role="'I was hired to develop quickly a solution for their problem with no direct role. First I did the research and with time I found a hospital internal co-worker who offered his help with the design and development of the application'" :team="'1 designer, 1 engineer'"
                      :timeline="'Oct 2020 - May 2021'"/>

      <ProblemStatementComponent :title="'Problem Statement'" :text="'The hospital had to set up a contact person management process for their hospital in a very short time. Due to the time-critical circumstance of a pandemic and due to technical conditions, there was no suitable technical support for this task yet. The staff used an Excel file on which they documented the contact persons, but with which they could not work simultaneously. '"
      :users="[{name:'1️⃣ Contact Tracing Hotline Employee', text:'Primary User of the future system. Their tasks is to document any person who had contact with the virus and provide each person who had or might had contact with virus with further instructions'},
      {name:'2️⃣ Contact Tracing Supervisor', text:'In charge of the employees. Assigns daily tasks and is in direct contact with Doctors. Secondary user of the future system.'},
      {name:'3️⃣ Virology and Hygiene Doctors', text:'Developed the structure and workflow of the contact tracing by the given requirements. Teritary user, with interest in the system to excerpt statistics from the future system.'}]"/>

    </div>

  </section>

</template>

<script>
import TitleComponent from "@/components/CaseStudy/TitleComponent";
import IntroComponent from "@/components/CaseStudy/IntroComponent";
import ProblemStatementComponent from "~/components/CaseStudy/ProblemStatementComponent";

export default {
  components: {
    ProblemStatementComponent,
    TitleComponent,
    IntroComponent
  }
}

</script>

<style>


</style>
