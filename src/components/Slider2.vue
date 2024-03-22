<script setup>
import { onMounted } from 'vue'
import { initCarousels } from 'flowbite'

  
</script>

<template>
  <section id="comslider" class="container pb-20 md:pb-20 lg:pb-28">
    <div>
      <h2 class="pb-6 md:pb-12 lg:pb-12 text-3xl font-bold text-center md:text-3xl lg:text-4xl text-primary">Feedback from our clients regarding<br>
      <div class="text-secondary">ActVue.com</div></h2>
    </div>
  

<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/ImageCorousal%2Fic1.jpeg?alt=media&token=deadd7d3-5890-4a75-ba31-f0e5f8aab462" class="absolute block w-auto h-56 md:h-96 lg:h-96 pb-9 md:pb-7 lg:pb-7 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Feedback%2Ffeedback1.png?alt=media&token=d577a5d5-896b-45b3-bd3c-14dbfdb19915" class="absolute block  w-auto h-56 md:h-96 lg:h-96 pb-9 md:pb-7 lg:pb-7 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/ImageCorousal%2Fic3.jpeg?alt=media&token=1de06763-772b-4ca6-b3d2-8026bf712298" class="absolute block  w-auto h-56 md:h-96 lg:h-96 pb-9 md:pb-7 lg:pb-7 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Feedback%2Ffeedback4.png?alt=media&token=326aec67-e903-4ae9-a93e-0a9591f4f3de" class="absolute block  w-auto h-56 md:h-96 lg:h-96 pb-9 md:pb-7 lg:pb-7 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Feedback%2Ffeedback5.png?alt=media&token=78d2a0fc-dcb3-4d7b-ba96-465510b81770" class="absolute block  w-auto h-56 md:h-96 lg:h-96 pb-9 md:pb-7 lg:pb-7  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse drop-shadow-[0_0_1px_rgba(0,0,0,1)]">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden md:block lg:block" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-400 dark:bg-gray-800/30 group-hover:bg-secondary dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden md:block lg:block" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-400 dark:bg-gray-800/30 group-hover:bg-secondary dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

  
  </section>
</template>
