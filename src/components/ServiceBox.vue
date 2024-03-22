<script setup>


   const categories = [
    {
      title: 'Web Applications Development',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Services%2FWeb_Icon.png?alt=media&token=7f6905aa-2acd-4f88-a132-c775e8e03210',
      desc: 'Experience the pinnacle of Web Applications with our expertise in System Design, Implementation, and Maintenance. Our Frontend mastery includes ReactJS and VueJS, complemented by Customized Backends utilizing NodeJS, PHP, and Springboot. Proficient in SQL and NoSQL Database Modeling, we excel in Cloud Technologies such as Firebase, AWS, and Azure. Elevate your digital presence with our comprehensive solutions.'
    },
    {
      title: 'Mobile Applications Development',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Services%2FMobile_Icon.png?alt=media&token=8b50d1f1-dced-47fd-b643-893a7620e0f0',
      desc: 'Explore the forefront of Mobile Applications with our expertise in System Design, Implementation, and Maintenance. We specialize in React Native and Flutter, crafting seamless experiences. As experts in Firebase, AWS, and Azure Cloud Technologies, we elevate mobile solutions to unparalleled heights. Your journey to cutting-edge mobile innovation begins with us. And navigate the future of mobile innovation confidently with our comprehensive solutions.'
    },
    {
      title: 'Embedded Application Development',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Services%2Fembedded_icon.png?alt=media&token=2b7fc95e-d708-4dce-866c-5b7a15d0fc46',
      desc: 'Dive into the world of Embedded Application Development, where innovation meets precision. We excel in Electronic Product Design, offering Customized PCB Designs and end-to-end solutions from Prototype to Product. Our state-of-the-art Electronics Lab ensures thorough Testing and Prototyping. With expertise in Customized Firmware Development, we shape a future of seamless embedded solutions.'
    },
    {
      title: 'Artificial Intelligence Integrations',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Services%2FAI_Icon.png?alt=media&token=dbd63d6b-b676-4b9a-8494-5d12e1a0de0a',
      desc: 'Experience the forefront of Artificial Intelligence Integrations with our innovative solutions. Specializing in Computer Vision and Edge AI/ML solutions, we empower businesses with network-independent capabilities. Our expertise extends to processing Data, Images, and Videos, alongside Big Data Analytics and comprehensive Data Engineering Services. Transform your operations with our cutting-edge AI integrations today.'
    },
    {
      title: 'Industry 4.0 Solution Development',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Services%2Findustry_4.0_solution_Icon.png?alt=media&token=64aea855-dcb8-47ce-8c00-060d50675bf0',
      desc: 'Embark on the evolution of Industry 4.0 Solution Development, where innovation meets connectivity. We specialize in end-to-end IoT Solutions, seamlessly integrating Sensors, Gateways, and Dashboards. Elevate your factory with Digital Twins, enhance efficiency with M2M Communication, and optimize resources through Energy, Water, and Fuel Consumption Monitoring. Revolutionize your industry with our Robotics and Automation Solutions.'
    },
    {
      title: 'Digital Marketing solutions',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/actvuecom.appspot.com/o/Services%2FDigital_Icon.png?alt=media&token=392f52e2-75ed-44f3-8cb8-0ea4d1ab9a59',
      desc: 'Embark on a transformative journey with our Digital Marketing Solutions, where strategic prowess converges with impactful results. We specialize in end-to-end services encompassing SEO, SEM, and social media management. Through data analytics, we optimize campaigns for maximum effectiveness. Elevate your brands presence and performance in the dynamic digital landscape with our tailored and results-driven solutions.'
    }
   ]

</script>

<template>
   <section id="services" class="container pt-24 pb-20 md:pb-20 lg:pb-28">
   <h1 class="pt-12 text-4xl font-bold text-center text-primary">Services</h1>
   <div class="flex flex-col items-center justify-center pt-20">
    
    <div class="grid justify-between lg:grid-cols-3 gap-10 pt-0 pb-10 md:pb-10 lg:pb-10 place-items-center">
      
      <div v-for="category of categories" :key="category.title" class="flex items-center px-8 py-12 rounded-[56px] text-primary font-normal text-lg bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] border-2 md:border-0 lg:border-0 border-primary">
       <div class="grid gap-4 text-center place-items-center">
         <img :src="category.imageUrl" alt="Ai" class="w-auto h-16">
         <h2 class="py-3 font-bold text-center text-1xl">{{category.title}}</h2>
         <p class="w-auto text-sm font-normal">{{category.desc}}</p>
       </div>
      </div>
 
      <!--<div class="flex items-center px-8 py-12 rounded-[56px] text-primary font-normal text-lg bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] border-2 md:border-0 lg:border-0 border-primary">
       <div class="grid gap-4 text-center place-items-center">
         <img src="../assets/Mobile_icon.png" alt="mob" class="w-auto h-16">
         <h2 class="py-3 font-bold text-center text-1xl">Mobile Applications Development</h2>
         <p class="w-auto text-sm font-normal">Explore the forefront of Mobile Applications with our expertise in System Design, Implementation,
         and Maintenance. We specialize in React Native and Flutter, crafting seamless experiences. As experts in Firebase, AWS,
         and Azure Cloud Technologies, we elevate mobile solutions to unparalleled heights.
         Your journey to cutting-edge mobile innovation begins with us. And navigate the future of mobile innovation confidently with
         our comprehensive solutions.</p>
       </div>
      </div>
 
      <div class="flex items-center px-8 py-12 rounded-[56px] text-primary font-normal text-lg bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] border-2 md:border-0 lg:border-0 border-primary">
       <div class="grid gap-4 text-center place-items-center">
         <img src="../assets/embedded_Icon.png" alt="digital" class="w-auto h-16">
         <h2 class="py-3 font-bold text-center text-1xl">Embedded Application Development</h2>
         <p class="w-auto text-sm font-normal">Dive into the world of Embedded Application Development, where innovation meets precision.
         We excel in Electronic Product Design, offering Customized PCB Designs and end-to-end solutions from Prototype to Product.
         Our state-of-the-art Electronics Lab ensures thorough Testing and Prototyping. With expertise in Customized Firmware Development,
         we shape a future of seamless embedded solutions.</p>
       </div>
      </div>

    </div>

    <div class="grid justify-between lg:grid-cols-3 gap-10 pt-0 pb-20 md:pb-20 lg:pb-40 place-items-center">
      
      <div class="flex items-center px-8 py-12 rounded-[56px] text-primary font-normal text-lg bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] border-2 md:border-0 lg:border-0 border-primary">
       <div class="grid gap-4 text-center place-items-center">
         <img src="../assets/Ai_Icon.png" alt="Ai" class="w-auto h-16">
         <h2 class="py-3 font-bold text-center text-1xl">Artificial Intelligence Integrations</h2>
         <p class="w-auto text-sm font-normal">Experience the forefront of Artificial Intelligence Integrations with our innovative solutions.
          Specializing in Computer Vision and Edge AI/ML solutions, we empower businesses with network-independent capabilities.
          Our expertise extends to processing Data, Images, and Videos, alongside Big Data Analytics and comprehensive Data Engineering Services.
          Transform your operations with our cutting-edge AI integrations today.</p>
       </div>
      </div>
 
      <div class="flex items-center px-8 py-12 rounded-[56px] text-primary font-normal text-lg bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] border-2 md:border-0 lg:border-0 border-primary">
       <div class="grid gap-4 text-center place-items-center">
         <img src="../assets/industry_4.0_solution_Icon.png" alt="industry" class="w-auto h-16">
         <h2 class="py-3 font-bold text-center text-1xl">Industry 4.0 Solution Development</h2>
         <p class="w-auto text-sm font-normal">Embark on the evolution of Industry 4.0 Solution Development, where innovation meets connectivity.
            We specialize in end-to-end IoT Solutions, seamlessly integrating Sensors, Gateways, and Dashboards. Elevate your factory with
            Digital Twins, enhance efficiency with M2M Communication, and optimize resources through Energy, Water, and Fuel Consumption Monitoring.
            Revolutionize your industry with our Robotics and Automation Solutions.</p>
       </div>
      </div>
 
      <div class="flex items-center px-8 py-12 rounded-[56px] text-primary font-normal text-lg bg-white md:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] border-2 md:border-0 lg:border-0 border-primary">
       <div class="grid gap-4 text-center place-items-center">
         <img src="../assets/Digital_Icon.png" alt="digital" class="w-auto h-16">
         <h2 class="py-3 font-bold text-center text-1xl">Digital Marketing solutions</h2>
         <p class="w-auto text-sm font-normal">Embark on a transformative journey with our Digital Marketing Solutions,
            where strategic prowess converges with impactful results. We specialize in end-to-end services encompassing SEO, SEM,
            and social media management. Through data analytics, we optimize campaigns for maximum effectiveness.
            Elevate your brand's presence and performance in the dynamic digital landscape with our tailored and results-driven solutions.</p>
       </div>
      </div>
 
    </div>-->
  </div>
  </div>
</section>
</template>