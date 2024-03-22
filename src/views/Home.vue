<script setup>
import { useRouter } from "vue-router";

import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Feedback from "../components/Feedback.vue"
import Slider2 from "../components/Slider2.vue"
import Logoslider  from "../components/Logoslider.vue"
import Category  from "../components/Category.vue"

import SectionObserver from "../components/SectionObserver.vue";


const router = useRouter()

function navigateToContact() {
  router.push({
    path: "/contact"})
}

function navigateToServices() {
  router.push({
    path: "/services"})
}

function onScroll(page) {
  window.location.href = `#${page}`;
}

</script>

<template>
<Navbar />

<section id="home" class="container items-center justify-between pt-24 md:flex lg:flex md:items-center lg:items-center">
     <div class="text-primary md:w-2/3">
      <div class="px-8 pt-6 text-4xl font-bold leading-tight text-center md:text-left md:text-4xl lg:text-6xl md:px-0 lg:px-0 md:pt-10 lg:pt-0 md:leading-tight lg:leading-tight">
        <h2>Activating your Ideas...</h2>
      </div>
      <p class="pt-4 pb-8 text-sm font-normal text-center md:text-left md:pt-4 lg:pt-8 md:pb-8 lg:pb-14 md:text-sm lg:text-base text-primary">Hire the best remote team of Engineers to innovate<br class="md:hidden lg:hidden"> your ideas and make it real.</p>
      <div class="flex justify-center md:block lg:block">
        <button @click="navigateToContact()" class="flex items-center gap-4 px-3 py-2 text-sm font-normal text-white rounded-lg md:px-3 lg:px-4 md:text-base lg:text-lg bg-secondary hover:bg-sky-700">Talk to Us <img src="../assets/Arrow.png" alt="Arrow" class="h-2 mx-auto md:h-3 lg:h-3"></button>
      </div>
     </div>
     <img src="../assets/image2.png"  class="w-full md:w-[60%]  lg:w-[60%] pt-12 px-4 md:px-0">
  </section>
  

<Logoslider />

<Category />


  <section id="web" class="container flex flex-col items-center justify-center pt-24 md:pt-24 lg:pt-40">
   <div class="grid justify-between gap-10 lg:grid-cols-2 place-items-center md:gap-16 lg:gap-28 text-primary lg:flex lg:flex-row md:flex-col-reverse">
    <div class="">
      <h2 class="pb-8 text-3xl font-bold text-center lg:text-left">Mobile and Web Applications</h2>
      <p class="w-auto pb-10 text-base font-normal text-center lg:text-left">Dive into the dynamic world of Mobile and Web Applications, where innovation meets user-centric design.
      Specializing in crafting responsive solutions, we redefine digital experiences. Our commitment resonates in every line of code,
      shaping a future where seamless mobile and web applications empower businesses. Welcome to a realm of transformative digital excellence.</p>
      <div class="grid gap-6 pb-5 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">System Design, Implementation<br class="md:hidden lg:block"> and Maintenance</p></div></button>
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Mobile Apps: React Native and<br class="md:hidden lg:block"> Flutter</p></div></button>
      </div>

      <div class="grid gap-6 pb-5 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Frontend: ReactJS and VueJS<br class="md:hidden lg:block"> for Web Apps</p></div></button>
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Backend: NodeJS, PHP,<br class="md:hidden lg:block"> Springboot for Web Apps</p></div></button>
      </div>

      <div class="grid gap-6 pb-10 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-4 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">SQL, NoSQL Database Modeling</p></div></button>
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Experts in Firebase, AWS and<br class="md:hidden lg:block"> Azure Cloud Technologies</p></div></button>
      </div>

      <div class="flex justify-center lg:block">
        <button @click="navigateToServices()" class="flex items-center gap-4 px-8 py-2 text-lg font-semibold text-white rounded-lg bg-secondary hover:bg-sky-700">Explore more <img src="../assets/Arrow3.png" alt="Arrow" class="size-5"></button>
      </div>
    </div>
    <div class="order-first w-auto px-4 md:px-0 md:order-first lg:order-none">
      <img src="../assets/image3.png" alt="image3">
    </div>
   </div>
   <SectionObserver @intersect="onScroll('web')"/>
  </section>


  <section id="embedded" class="container flex flex-col items-center justify-center pt-24 md:pt-24 lg:pt-40">
   <div class="grid justify-between gap-10 lg:grid-cols-2 place-items-center md:gap-16 lg:gap-28 text-primary">
    <div class="w-auto px-4 md:px-0">
      <img src="../assets/image4.png" alt="image4" class="">
    </div>
    <div class="">
      <h2 class="pb-8 text-3xl font-bold text-center lg:text-left">Embedded Application Development</h2>
      <p class="w-auto pb-10 text-base font-normal text-center lg:text-left">Explore the realm of Embedded Application Development, where precision meets innovation.
      Our expertise lies in crafting efficient, tailored solutions that redefine digital landscapes. Committed to excellence,
      every line of code we write shapes a future where embedded applications seamlessly enhance functionality.
      Welcome to the forefront of technological innovation with us.</p>
      <div class="grid gap-6 pb-5 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-4 md:py-4 lg:py-4 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Electronic Product Design</p></div></button>
        <button class="px-6 py-4 md:py-4 lg:py-4 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Customized PCB Designs</p></div></button>
      </div>

      <div class="grid gap-6 pb-5 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Develop Prototype to End<br class="md:hidden lg:block"> Product</p></div></button>
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Testing and Prototyping in<br class="md:hidden lg:block"> Our Electronics Lab</p></div></button>
      </div>

      <div class="grid gap-6 pb-10 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Customized Firemware<br class="md:hidden lg:block"> Development</p></div></button>
      </div>
      <div class="flex justify-center lg:block">
        <button @click="navigateToServices()" class="flex items-center gap-4 px-8 py-2 text-lg font-semibold text-white rounded-lg bg-secondary hover:bg-sky-700">Explore more <img src="../assets/Arrow3.png" alt="Arrow" class="size-5"></button>
      </div>
    </div>
   </div>
   <SectionObserver @intersect="onScroll('embedded')"/>
  </section>


  <section id="AI" class="container flex flex-col items-center justify-center pt-24 md:pt-24 lg:pt-40">
   <div class="grid justify-between gap-10 lg:grid-cols-2 place-items-center md:gap-16 lg:gap-28 text-primary">
    <div class="">
      <h2 class="pb-8 text-3xl font-bold text-center lg:text-left">Artificial Intelligence Integrations</h2>
      <p class="w-auto pb-10 text-base font-normal text-center lg:text-left">Embark on a transformative journey with Artificial Intelligence Integrations,
      where innovation converges with practical solutions. Specializing in seamless AI integration, we redefine digital experiences.
      Each line of code reflects our commitment to shaping a future where AI enhances efficiency effortlessly.
      Welcome to a realm where AI and excellence seamlessly intersect.</p>
      <div class="grid gap-6 pb-5 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-4 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Computer Vision Solutions</p></div></button>
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Edge AI/ML Solutions that<br class="md:hidden lg:block"> runs without a Network</p></div></button>
      </div>

      <div class="grid gap-6 pb-5 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-4 md:py-4 lg:py-4 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Process Data/ Images/ Videos</p></div></button>
        <button class="px-6 py-4 md:py-4 lg:py-4 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Big Data Analytics Solutions</p></div></button>
      </div>

      <div class="grid gap-6 pb-10 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-4 md:py-4 lg:py-4 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Data Engineering Services</p></div></button>
      </div>
      <div class="flex justify-center lg:block">
      <button @click="navigateToServices()" class="flex items-center gap-4 px-8 py-2 text-lg font-semibold text-white rounded-lg bg-secondary hover:bg-sky-700">Explore more <img src="../assets/Arrow3.png" alt="Arrow" class="size-5"></button>
      </div>
    </div>
    <div class="order-first w-auto px-4 md:px-0 md:order-first lg:order-none">
      <img src="../assets/image5.png" alt="image5" class="">
    </div>
   </div>
   <SectionObserver @intersect="onScroll('AI')"/>
  </section>


  <section id="industry" class="container flex flex-col items-center justify-center pt-24 pb-20 md:pt-24 lg:pt-40 md:pb-20 lg:pb-40">
   <div class="grid justify-between gap-10 lg:grid-cols-2 place-items-center md:gap-16 lg:gap-28 text-primary">
    <div class="w-auto px-4 md:px-0">
      <img src="../assets/image6.png" alt="image6" class="">
    </div>
    <div class="">
      <h2 class="pb-8 text-3xl font-bold text-center lg:text-left">Industry 4.0 Solution Development</h2>
      <p class="w-auto pb-10 text-base font-normal text-center lg:text-left">Step into the future with Industry 4.0 Solution Development,
      where innovation meets industrial evolution. We specialize in crafting cutting-edge solutions that redefine digital landscapes for industries.
      Our commitment resonates in every line of code, shaping a future where Industry 4.0 transforms businesses seamlessly.
      Welcome to the forefront of industrial technological advancement.</p>
      <div class="grid gap-6 pb-5 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">IoT Solutions from Sensors<br class="md:hidden lg:block"> and Gateways to Dashboard</p></div></button>
        <button class="px-6 py-4 md:py-4 lg:py-2  rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Digital Twins for your Factory</p></div></button>
      </div>

      <div class="grid gap-6 pb-5 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">M2M Communication<br class="md:hidden lg:block"> Solutions</p></div></button>
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Energy, Water and Fuel<br class="md:hidden lg:block"> Consumption Monitoring</p></div></button>
      </div>

      <div class="grid gap-6 pb-10 text-sm font-normal lg:grid-flow-col lg:grid-cols-2">
        <button class="px-6 py-2 md:py-4 lg:py-2 rounded-full  bg-white hover:bg-slate-100 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]"><div class="flex flex-row items-center space-x-4"><img src="../assets/Arrow2.png" alt="Arrow2" class="size-6"><p class="font-normal text-left">Robotics and Automation<br class="md:hidden lg:block"> Solutions</p></div></button>
      </div>
      <div class="flex justify-center lg:block">
      <button @click="navigateToServices()" class="flex items-center gap-4 px-8 py-2 text-lg font-semibold text-white rounded-lg bg-secondary hover:bg-sky-700">Explore more <img src="../assets/Arrow3.png" alt="Arrow" class="size-5"></button>
      </div>
    </div>
   </div>
   <SectionObserver @intersect="onScroll('industry')"/>
  </section>
  
<Slider2 />
<Footer />
</template>