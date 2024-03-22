<script setup>
import { useRoute } from "vue-router"

import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue" 

const route = useRoute();

console.log("Route Parameters", route.params.name)
</script>

<template>
<Navbar />

<section id="about" class="container pt-24">
   <h1 class="text-center text-4xl text-primary font-bold pt-12">Contact Us</h1>
   <div class="container">
   <p class="container text-center text-1xl md:text-100xl lg:text-2xl text-primary font-normal pt-14 md:pt-14 lg:pt-16">We use an agile approach to test assumptions and connect with the
   needs of your audience early and often.</p>
   </div>
</section>

<section class="relative">
  <div class="container px-5 pt-10 md:pt-10 lg:pt-12 pb-20 md:pb-20 lg:pb-28 mx-auto">
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="lg:flex lg:flex-wrap -m-2">
        <div class="p-2 lg:w-1/2 pb-4 md:pb-4 lg:pb-8">
          <div class="relative">
            <label for="name" class="leading-7 text-sm font-medium text-primary">First Name</label>
            <input type="text" id="Fname" name="Fname" class="w-full bg-sky-100 bg-opacity-50 rounded-lg border border-primary focus:border-secondary focus:bg-white focus:ring-2 focus:ring-sky-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="first name">
          </div>
        </div>
        <div class="p-2 lg:w-1/2 pb-4 md:pb-4 lg:pb-8">
          <div class="relative">
            <label for="name" class="leading-7 text-sm font-medium text-primary">Last Name</label>
            <input type="text" id="Fname" name="Fname" class="w-full bg-sky-100 bg-opacity-50 rounded-lg border border-primary focus:border-secondary focus:bg-white focus:ring-2 focus:ring-sky-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="last name">
          </div>
        </div>
        <div class="p-2 lg:w-1/2 pb-4 md:pb-4 lg:pb-8">
          <div class="relative">
            <label for="email" class="leading-7 text-sm font-medium text-primary">Your Email</label>
            <input type="email" id="email" name="email" class="w-full bg-sky-100 bg-opacity-50 rounded-lg border border-primary focus:border-secondary focus:bg-white focus:ring-2 focus:ring-sky-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="name@company.com">
          </div>
        </div>
        <div class="p-2 lg:w-1/2 pb-4 md:pb-4 lg:pb-8">
          <div class="relative">
            <label for="name" class="leading-7 text-sm font-medium text-primary">Phone Number or WhatsApp Number</label>
            <input type="text" id="Fname" name="Fname" class="w-full bg-sky-100 bg-opacity-50 rounded-lg border border-primary focus:border-secondary focus:bg-white focus:ring-2 focus:ring-sky-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="+123 456 789">
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm font-medium text-primary">Message</label>
            <textarea id="message" name="message" class="w-full bg-sky-100 bg-opacity-50 rounded-lg border border-primary focus:border-secondary focus:bg-white focus:ring-2 focus:ring-sky-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Leave a comment..."></textarea>
          </div>
        </div>
        <p class="text-start text-sm text-primary font-normal pt-4  pb-4 p-2">By submitting this form you agree to our terms and conditions and our privacy policy which explains how we may collect,
        use and disclose your personal information including to third parties.</p>
        <div class="p-2">
          <button class="px-4 py-2 rounded-lg text-white font-normal text-base bg-secondary hover:bg-sky-700">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container justify-center">
  <div class="flex justify-center px-8 py-16 md:py-18 lg:py-28 text-primary rounded-lg  bg-white drop-shadow-[0_0_3px_rgba(0,0,0,0.35)]">
      <div class="grid place-items-center gap-4 text-center">
        <img src="../assets/whatsapp-icon.png" alt="web app" class="w-auto h-40">
        <h2 class="text-center text-2xl font-bold">Call us in WhatsApp Business:</h2>
        <p class="font-normal text-lg pb-5">Call us through WhatsApp to contact our Project Managers, anywhere from the world.</p>
        <h1 class="text-center text-3xl font-bold">+94 72 430 4301</h1>
      </div>
  </div>
</section>

<section id="services" class="container pb-20 md:pb-20 lg:pb-28 pt-12">
   <div class="flex flex-col justify-center items-center">
    <div class="grid md:grid-cols-3 lg:grid-cols-3 place-items-center justify-between gap-5 md:gap-10 lg:gap-10">

     <div class="flex items-center px-8 pb-8 md:pb-12 lg:pb-12 text-primary">
      <div class="grid place-items-center  gap-3 text-center">
        <img src="../assets/location_Icon.png" alt="web app" class="w-auto h-16">
        <h2 class="text-center text-1xl font-bold">Registered Address</h2>
        <p class="font-normal text-sm">380/A, Koongahakotuwa, Thanthirimulla,<br>Panadura, Sri Lanka.<br>
        Zip Code/Postal Code:12500</p>
      </div>
     </div>

     <div class="flex items-center px-8 pb-8 md:pb-12 lg:pb-12 text-primary">
      <div class="grid place-items-center  gap-3 text-center">
        <img src="../assets/office_Icon.png" alt="web app" class="w-auto h-16">
        <h2 class="text-center text-1xl font-bold">Operations office Address</h2>
        <p class="font-normal text-sm pb-0 md:pb-8 lg:pb-6">Mattegoda, Colombo, Sri Lanka.<br>
         Zip Code/Postal Code:10240</p>
      </div>
     </div>

     <div class="flex items-center px-8 pb-0 md:pb-12 lg:pb-12 text-primary">
      <div class="grid place-items-center  gap-3 text-center">
        <img src="../assets/email_Icon.png" alt="web app" class="w-auto h-16">
        <h2 class="text-center text-1xl font-bold">Email</h2>
        <p class="font-normal text-sm pb-0 md:pb-28 lg:pb-14">hello@actvue.com</p>
      </div>
     </div>

    </div>
   </div>
</section>

<Footer />
</template>