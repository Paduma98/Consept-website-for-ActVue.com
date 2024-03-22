<script setup>
import {RouterLink} from 'vue-router'


import {ref} from 'vue'
const open  = ref  (false)



const menuOpen = () => {
  open.value = !open.value
}
</script>


<template>
  <nav class="fixed w-full top-0 z-50 shadow-md py-3 text-primary bg-white">
  <div class="container">
  <div class="md:flex md:items-center justify-between items-center">
    <div class="flex items-center gap-2">
      <img src="../assets/logo1.png" alt="logo" class="logo h-14 cursor-pointer"/><img src="../assets/logo2.png" alt="logo" class="logo h-5 cursor-pointer"/>
    </div>


    <span class="text-primary text-5xl absolute right-4 top-4 cursor-pointer md:hidden" @click="menuOpen">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>
    <ul class="md:flex md:gap-5 lg:gap-10 items-center absolute md:static bg-white w-full md:w-auto md:pb-0 px-6 md:px-0 top-24 pb-8 duration-500 shadow-md md:shadow-none"
    :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="py-1  md:my-0  hover:text-sky-700 hover:font-medium duration-300 text-base">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="py-1  md:my-0  hover:text-sky-700 hover:font-medium duration-300 text-base">
        <RouterLink to="/services">Our Services</RouterLink>
      </li>
     <li class="py-1  md:my-0  hover:text-sky-700 hover:font-medium duration-300 text-base">
        <RouterLink to="/portfolio">Portfolio</RouterLink>
      </li>
      <li class="py-1 pb-4 md:pb-0 hover:text-sky-700 hover:font-medium duration-300 text-base">
        <RouterLink to="/about">About Us</RouterLink>
      </li>
      <li class="px-4 py-2 rounded-lg bg-secondary hover:bg-sky-700 hover:font-medium text-white duration-300 text-base text-center">
        <RouterLink to="/contact">Contact Us</RouterLink>
      </li>
    </ul>


    <!--<div class="md:flex md:items-center md:gap-10">
      <RouterLink to="/" class="text-primary font-normal hover:text-sky-700" >Home</RouterLink>
      <RouterLink to="/services" class="text-primary font-normal hover:text-sky-700" >Our Services</RouterLink>
      <RouterLink to="/portfolio" class="text-primary font-normal hover:text-sky-700" >Portfolio</RouterLink>
      <RouterLink to="/about" class="text-primary font-normal hover:text-sky-700" >About Us</RouterLink>
      <RouterLink to="/contact" class="md:px-4 md:py-2 md:rounded-lg text-white font-normal text-lg bg-secondary hover:bg-sky-700">Contact Us</RouterLink>
    </div>-->
  </div>
  </div>
  </nav>  
</template>