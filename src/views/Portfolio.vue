<script setup>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"

const categories = [
    {
      imageUrl: '../assets/image14.png',
      title1: 'Smart Home',
      title2: 'Mobile App',
      desc: 'This mobile app was created for a client in the US. A fitness trainer uses this as an app for fitness training.'
    },
    {
      imageUrl: '../assets/image14.png',
      title1: 'Go',
      title2: 'Mobile App',
      desc: 'This mobile app was created for a client in the US.This app is designed to be used for food delivery.'
    },
    {
      imageUrl: '../assets/image14.png',
      title1: 'The Cut Salon',
      title2: 'Website',
      desc: 'This website was created for a client in the Russia. This website was created for his beauty salon.'
    }
   ]
</script>

<template>
<Navbar />

<section id="portfolio" class="container pt-24">
   <h1 class="text-center text-4xl text-primary font-bold pt-12">Portfolio</h1>
</section>
<section id="portfolio" class="container">
   
   <div class="flex flex-col justify-center pt-20 pb-12 md:pb-16 lg:pb-24">
    <div class="grid lg:grid-cols-3 place-items-center justify-between gap-10">

     <!--<button v-for="category of categories" :key="category.title" class="flex items-center pb-12 rounded-[56px] text-primary font-normal border-2 border-primary bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] hover:drop-shadow-xl hover:-translate-y-1 hover:scale-102">
      <div class="grid gap-4">
        <img :src="category.imageUrl" alt="web app" class="w-full h-full rounded-t-[56px]">
        <h2 class="text-left text-2xl font-bold px-8 pt-3">{{category.title1}}</h2>
        <p class="text-left text-1xl px-8 font-medium text-secondary">{{category.title2}}</p>
        <p class="w-auto font-normal text-left text-sm px-8 line-clamp-2">{{category.desc}}</p>
      </div>
     </button>-->

     <button class="flex items-center pb-12 rounded-[56px] text-primary font-normal border-2 border-primary bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] hover:drop-shadow-xl hover:-translate-y-1 hover:scale-102">
      <div class="grid gap-4">
        <img src="../assets/image18.png" alt="web app" class="w-full h-full rounded-t-[56px]">
        <h2 class="text-left text-2xl font-bold px-8 pt-3">Smart Home</h2>
        <p class="text-left text-1xl px-8 font-medium text-secondary">Mobile App</p>
        <p class="w-auto font-normal text-left text-sm px-8 line-clamp-2">This mobile app was created for a client in the US. A fitness trainer uses this as an app for fitness training.</p>
      </div>
     </button>

     <button class="flex items-center pb-12 rounded-[56px] text-primary font-normal border-2 border-primary bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] hover:drop-shadow-xl hover:-translate-y-1 hover:scale-102">
      <div class="grid gap-4">
        <img src="../assets/image19.png" alt="web app" class="w-full h-full rounded-t-[56px]">
        <h2 class="text-left text-2xl font-bold px-8 pt-3">Go</h2>
        <p class="text-left text-1xl px-8 font-medium text-secondary">Mobile App</p>
        <p class="w-auto font-normal text-left text-sm px-8 line-clamp-2">This mobile app was created for a client in the US.This app is designed to be used for food delivery.</p>
      </div>
     </button>

     <button class="flex items-center pb-12 rounded-[56px] text-primary font-normal border-2 border-primary bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] hover:drop-shadow-xl hover:-translate-y-1 hover:scale-102">
      <div class="grid gap-4">
        <img src="../assets/image 20.png" alt="web app" class="w-full h-full rounded-t-[56px]">
        <h2 class="text-left text-2xl font-bold px-8 pt-3">The Cut Salon</h2>
        <p class="text-left text-1xl px-8 font-medium text-secondary">Website</p>
        <p class="w-auto font-normal text-left text-sm px-8 line-clamp-2">This website was created for a client in the Russia. This website was created for his beauty salon.</p>
      </div>
     </button>

    </div>
   </div>
</section>
<div class="flex justify-center pb-20 md:pb-20 lg:pb-40">
   <button class="px-4 py-2 rounded-lg text-white font-normal text-lg bg-secondary hover:bg-sky-700">Load More</button>
</div>
<Footer />
</template>