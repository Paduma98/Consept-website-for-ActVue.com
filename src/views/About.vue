<script setup>
import { useRouter } from "vue-router"

import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Leadership from "../components/Leadership.vue"

const router = useRouter()

function navigateToContact() {
  router.push({
    path: "/contact"})
}


</script>

<template>
<Navbar />

<section id="about" class="container pt-24">
   <h1 class="text-center text-4xl text-primary font-bold pt-12">About Us</h1>
   <div class="flex flex-col justify-center items-center pt-14 md:pt-14 lg:pt-24">
   <div class="grid lg:grid-cols-2 place-items-center justify-between gap-10 md:gap-12 lg:gap-28 text-primary">
    <div>
      <h3 class="text-center lg:text-left text-2xl text-secondary font-semibold pb-8">WHO WE ARE</h3>
      <h2 class="text-center lg:text-left text-3xl text-primary font-bold pb-8">We can help take your business to the greater heights.</h2>
      <p class="w-auto font-normal text-primary text-base text-center lg:text-left pb-0 md:pb-0 lg:pb-10">Embarking on the journey of innovation, ActVue.com (PVT) LTD stands out as a
        burgeoning technology startup. We specialize in software and web development services, marking our commitment to excellence.
        Our unique operational model thrives on a remote work basis, uniting a dynamic team spread across Sri Lanka, Sweden, Australia,
        and the United Kingdom. This global synergy enhances our creativity and cultural insights, fostering a collaborative environment.
        Join us in shaping the future of digital possibilities.</p>
    </div>
    <div class="w-auto px-4 md:px-4 lg:px-0 order-first md:order-first lg:order-none">
      <img src="../assets/image8.png" alt="image8" class="">
    </div>
    </div>
    </div>
</section>

<section id="about" class="container pt-24">
   <div class="flex flex-col justify-center items-center pt-0 md:pt-0 lg:pt-6">
   <div class="grid lg:grid-cols-2 place-items-center justify-between gap-10 md:gap-12 lg:gap-28 text-primary">
    <div class="w-auto px-4 md:px-4 lg:px-0">
      <img src="../assets/image16.png" alt="image8" class="">
    </div>
    <div>
      <h3 class="text-center lg:text-left text-2xl text-secondary font-semibold pb-8 px-8">VISION</h3>
      <div class="px-8 py-12 rounded-[24px] bg-sky-50 w-full border shadow-sm">
      <h2 class="text-center lg:text-left text-3xl text-primary font-bold pb-8">Our Vision</h2>
      <p class="w-auto font-normal text-primary text-base text-center lg:text-left pb-0 md:pb-0 lg:pb-10">"Shaping tomorrow's digital landscape through innovation, collaboration, and inclusive growth worldwide."</p>
      </div>
    </div>
    </div>
    </div>
</section>

<section id="about" class="container pt-24">
   <div class="flex flex-col justify-center items-center pt-0 md:pt-0 lg:pt-6">
   <div class="grid lg:grid-cols-2 place-items-center justify-between gap-10 md:gap-12 lg:gap-28 text-primary">
    <div>
      <h3 class="text-center lg:text-left text-2xl text-secondary font-semibold pb-8 px-8">MISSION</h3>
      <div class="px-8 py-12 rounded-[24px] bg-sky-50 w-full border shadow-sm">
      <h2 class="text-center lg:text-left text-3xl text-primary font-bold pb-8">Our Mission</h2>
      <p class="w-auto font-normal text-primary text-base text-center lg:text-left pb-0 md:pb-0 lg:pb-10">"We are dedicated to delivering exceptional IT solutions, driving progress, and empowering businesses to thrive."</p>
      </div>
    </div>
    <div class="w-auto px-4 md:px-4 lg:px-0 order-first md:order-first lg:order-none">
      <img src="../assets/image17.png" alt="image8" class="">
    </div>
    </div>
    </div>
</section>

<section class="container justify-center pt-24 lg:pt-32 pb-20 md:pb-20 lg:pb-40">
  <div class="flex justify-center px-8 py-16 md:py-18 lg:py-28 text-primary rounded-lg  bg-sky-50 drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]">
      <div class="grid place-items-center gap-4 text-center px-6">
        <h1 class="text-center text-3xl md:text-3xl lg:text-5xl font-bold leading-tight">How can we assist you in transitioning<br class="hidden lg:block"> your journey to a digital format?</h1>
        <p class="font-normal text-base md:lg:text-lg lg:text-lg pb-8 pt-4">Contact us to discover how we can transform your concepts into digital offerings, leveraging our teams to drive<br class="hidden lg:block"> your business expansion.</p>
        <div class="flex justify-center md:block lg:block">
          <button @click="navigateToContact()" class="flex items-center gap-4 px-3 py-2 text-sm font-normal text-white rounded-lg md:px-3 lg:px-4 md:text-base lg:text-lg bg-secondary hover:bg-sky-700">Contact Us</button>
        </div>
      </div>
  </div>
</section>

<Leadership />


<Footer />
</template>