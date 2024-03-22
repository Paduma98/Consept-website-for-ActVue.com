<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

function navigateToContact() {
  router.push({
    path: "/contact"})
}
</script>

<template>
<footer class="pt-24 pb-16 bg-primary">
<div class="container ">
  <div class="lg:grid grid-cols-8 gap-24 pb-20">
    <div class="col-start-1 col-span-4">
      <div class="flex items-center gap-2 pb-10">
        <img src="../assets/logo1.png" alt="logo" class="logo h-14 cursor-pointer"/><img src="../assets/logo3.png" alt="logo" class="logo h-5 cursor-pointer"/>
      </div>
      <p class="text-white font-normal text-sm w-3/4 pb-10 md:pb-10 lg:pb-0">Elevate your digital experience with ActVue.com. We excel in Mobile and Web Applications, Embedded Development,
      and Artificial Intelligence Integrations, pioneering Industry 4.0 solutions.
      Transform possibilities into realities with our innovative services.</p>
    </div>
    <div class="col-start-5 col-span-2 text-white grid grid-cols-2 gap-16">
      <div class="">
       <h3 class="pb-7 font-bold text-lg">Company</h3>
       <div class="flex flex-col gap-3 font-normal text-sm">
        <RouterLink to="/" class="hover:opacity-60">Home</RouterLink>
        <RouterLink to="/services" class="hover:opacity-60">Our Services</RouterLink>
        <!--<RouterLink to="/portfolio" class="hover:opacity-60">Portfolio</RouterLink>-->
        <RouterLink to="/about" class="hover:opacity-60">About Us</RouterLink>
        <RouterLink to="/contact" class="hover:opacity-60">Contact Us</RouterLink>
       </div>
      </div>
      <div>
       <h3 class="pb-7 font-bold text-lg">More</h3>
       <div class="flex flex-col gap-3 font-normal text-sm">
        <a href="" class="hover:opacity-60">FAQ</a>
       </div>
      </div>
    </div>
    <div class="col-end-9 col-span-2">
      <p class="text-white font-normal text-sm pb-5 pt-10 md:pt-10 lg:pt-0">Do you have any questions that require answers?</p>
      <button @click="navigateToContact()" class="flex items-center px-1 py-1 rounded-lg text-white hover:opacity-60 font-semibold text-xl gap-4 pb-16">Talk to Us <img src="../assets/Arrow4.png" alt="Arrow" class="h-3 mx-auto"></button>
      <div class="grid place-items-start">
        <div class="flex gap-6 w-auto">
          <a href="#"><img src="../assets/fb_icon.png" alt="fb" class="hover:opacity-60"></a>
          <a href="#"><img src="../assets/linkedin_icon.png" alt="insta" class="hover:opacity-60"></a>
          <a href="#"><img src="../assets/twiter_icon.png" alt="twiter" class="hover:opacity-60"></a>
          <a href="#"><img src="../assets/insta_icon.png" alt="github" class="hover:opacity-60"></a>
        </div>
      </div>
    </div>
  </div>
    
  <div class="lg:grid grid-cols-8 gap-2 pt-3 border-t  border-white">
      <div class="col-start-1 col-span-4">
        <p class="text-white text-xs font-light">
        &copy;
        ActVue.com. All Rights Reserved
        </p>
      </div>
      <div class="col-start-7 col-span-1 text-right hidden lg:block">
        <button class="text-white text-xs font-light hover:opacity-60">Privacy Policy</button>
      </div>
      <div class="col-end-9 col-span-1 text-right hidden lg:block">
        <button class="text-white text-xs font-light hover:opacity-60">Terms and Conditions</button>
      </div>
    </div>
</div>
  </footer>
</template>