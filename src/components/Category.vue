<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

function navigate(hash) {
  router.push({
     hash: hash
  })
}
</script>


<template>
   <section id="category" class="container flex flex-col items-center justify-center pt-24 md:pt-24 lg:pt-36">
    <div class="grid justify-between gap-10 lg:grid-cols-4 place-items-center">

    <a href="#web" class="flex items-center px-8 py-12 rounded-[56px] text-primary bg-white hover:bg-slate-100 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
      <div class="grid gap-4 text-center place-items-center">
        <img src="../assets/Web_&_Mobile_Icon.png" alt="web & mob" class="w-auto h-16">
        <h2 class="py-3 font-bold text-center text-1xl">Mobile App & Web Applications</h2>
        <p class="w-auto text-sm font-normal">At ActVue.com, we blend innovation and excellence in the digital realm, pushing beyond traditional boundaries.
            Specializing in web and mobile app development, we lead with a commitment to shaping the future of technology.
            Join us in the transformative journey, where every line of code brings vision to life. ActVue.com: Continuously redefining digital excellence.</p>
      </div>
    </a>

    <a href="#embedded" class="flex items-center px-8 py-12 rounded-[56px] text-primary bg-white hover:bg-slate-100 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
      <div class="grid gap-4 text-center place-items-center">
        <img src="../assets/embedded_icon.png" alt="embedded" class="w-auto h-16">
        <h2 class="py-3 font-bold text-center text-1xl">Embedded Application Development</h2>
        <p class="w-auto text-sm font-normal">Explore the realm of Embedded Application Development, where expertise meets efficiency.
        We specialize in crafting seamless solutions that redefine digital excellence. Our commitment to innovation is evident in every line of code,
        shaping the future of embedded applications. Welcome to a world of excellence at its core, welcome to Embedded Application Development.</p>
      </div>
    </a>

    <a href="#AI" class="flex items-center px-8 py-12 rounded-[56px] text-primary bg-white hover:bg-slate-100 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
      <div class="grid gap-4 text-center place-items-center">
        <img src="../assets/AI_Icon.png" alt="AI" class="w-auto h-16">
        <h2 class="py-3 font-bold text-center text-1xl">Artificial Intelligence Integrations</h2>
        <p class="w-auto text-sm font-normal">Embark on a journey with Artificial Intelligence Integrations, where innovation meets seamless efficiency.
        Specializing in integrating AI seamlessly, we redefine digital experiences. Our commitment is evident in every line of code,
        shaping a future where AI seamlessly enhances business functions.
        Welcome to a realm of transformative technological excellence with AI Integrations.</p>
      </div>
    </a>

    <a href="#industry" class="flex items-center px-8 py-12 rounded-[56px] text-primary bg-white hover:bg-slate-100 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
      <div class="grid gap-4 text-center place-items-center">
        <img src="../assets/industry_4.0_solution_Icon.png" alt="industry" class="w-auto h-16">
        <h2 class="py-3 font-bold text-center text-1xl">Industry 4.0 Solution Development</h2>
        <p class="w-auto text-sm font-normal">Step into the future with Industry 4.0 Solution Development, where innovation converges with efficiency.
        We specialize in crafting cutting-edge solutions, redefining digital landscapes. Our commitment is evident in every line of code,
        shaping a future where Industry 4.0 transforms industries seamlessly.
        Welcome to the forefront of technological evolution with us.</p>
      </div>
    </a>

    </div>
  </section>
</template>