<script setup>
   const categories = [
    {
      image1Url: '../assets/image9.png',
      title1: 'Co-Founder,',
      title2: 'Project Manager',
      title3: 'Charitha',
      title4: 'Dhananjaya',
      desc: 'Charitha brings his Product and Project Management Skills to make your Project Success.',
      image2Url: '../assets/fb_s_icon.png',
      image3Url: '../assets/linkedin_s_icon.png'
    },
    {
      image1Url: '../assets/image9.png',
      title1: 'Co-Founder,',
      title2: 'Project Manager',
      title3: 'Vidura',
      title4: 'Yashan',
      desc: 'Vidura drives the Project Management and Finance Aspects of the Project to make sure your project is cost effective.',
      image2Url: '../assets/fb_s_icon.png',
      image3Url: '../assets/linkedin_s_icon.png'
    },
    {
      image1Url: '../assets/image9.png',
      title1: 'Co-Founder,',
      title2: 'Senior Android/iOS System Architect',
      title3: 'Amila',
      title4: 'Sampath',
      desc: 'Amila brings his expertise on Mobile Applications and Edge Computing Firmware for your Projects.',
      image2Url: '../assets/fb_s_icon.png',
      image3Url: '../assets/linkedin_s_icon.png'
    },
    {
      image1Url: '../assets/image9.png',
      title1: 'Co-Founder,',
      title2: 'Senior Electronics Engineer',
      title3: 'Malinda',
      title4: 'Sulochana',
      desc: 'Malinda brings his expertise on Creative and Innovative Electronics. Expert of Hardware and Firmware.',
      image2Url: '../assets/fb_s_icon.png',
      image3Url: '../assets/linkedin_s_icon.png'
    },
    {
      image1Url: '../assets/image9.png',
      title1: 'Co-Founder,',
      title2: 'Senior Cloud Architect',
      title3: 'Akila',
      title4: 'Oshadha',
      desc: 'Akila is the Cloud Expert, who will fine tune all of your cloud Requirements in AWS/Google or any other environment.',
      image2Url: '../assets/fb_s_icon.png',
      image3Url: '../assets/linkedin_s_icon.png'
    }
   ]
</script>

<template>
    <!--<section id="founders" class="container pb-20 md:pb-20 lg:pb-40">
    <div class="pt-16 md:pt-16 lg:pt-32">
      <h3 class="text-center text-2xl text-secondary font-semibold pb-8">LEADERSHIP</h3>
      <h2 class="text-center text-3xl font-bold text-primary pb-8">Our Founders</h2>
      <p class="w-auto text-center font-normal text-primary text-base pb-10">Best Innovation Team for Activate Your Idea.</p>
    </div>
   <div class="flex flex-col justify-center place-items-center">
    <div class="grid lg:grid-cols-3 place-items-center justify-center gap-10">

     <div v-for="category of categories" :key="category.title" class="flex items-center px-8 py-12 rounded-[24px] text-primary font-normal  bg-sky-50 w-80 border shadow-sm">
      <div class="grid place-items-center  gap-4 text-center">
        <img :src="category.image1Url" alt="web app" class="w-auto h-48">
        <h3 class="text-center text-sm text-secondary font-bold pt-2">{{category.title1}}<br>{{category.title2}}</h3>
        <h2 class="text-center text-3xl font-normal text-primary py-1">{{category.title3}}<br>{{category.title4}}</h2>
        <p class="w-auto font-normal text-primary text-sm pb-8">{{category.desc}}</p>
        <div class="flex gap-6 w-auto">
          <a href="https://web.facebook.com/Charitha.D"><img :src="category.image2Url" alt="fb" class="hover:opacity-60"></a>
          <a href="https://www.linkedin.com/in/charithadhananjaya/"><img :src="category.image3Url" alt="insta" class="hover:opacity-60"></a>
        </div>
      </div>
     </div>


    ///from this line////
    

     <div class="flex items-center px-8 py-12 rounded-[24px] text-primary font-normal bg-sky-50 w-80 border shadow-sm">
      <div class="grid place-items-center  gap-4 text-center">
        <img src="../assets/image10.png" alt="web app" class="w-auto h-48">
        <h3 class="text-center text-sm text-secondary font-bold pt-2">Co-Founder,<br>Project Manager</h3>
        <h2 class="text-center text-3xl font-normal text-primary py-1">Vidura<br>Yashan</h2>
        <p class="w-auto font-normal text-primary text-sm pb-8">Vidura drives the Project Management and Finance Aspects of the Project to make sure your project is cost effective.</p>
        <div class="flex gap-6 w-auto">
          <a href="https://web.facebook.com/vidura.sumanasena"><img src="../assets/fb_s_icon.png" alt="fb" class="hover:opacity-60"></a>
          <a href="#"><img src="../assets/linkedin_s_icon.png" alt="insta" class="hover:opacity-60"></a>
        </div>
      </div>
     </div>

     <div class="flex items-center px-8 py-12 rounded-[24px] text-primary font-normal bg-sky-50 w-80 border shadow-sm">
      <div class="grid place-items-center  gap-4 text-center">
        <img src="../assets/image11.png" alt="web app" class="w-auto h-48">
        <h3 class="text-center text-sm text-secondary font-bold pt-2">Co-Founder,<br>Senior Android/iOS System Architect</h3>
        <h2 class="text-center text-3xl font-normal text-primary py-1">Amila<br>Sampath</h2>
        <p class="w-auto font-normal text-primary text-sm pb-8">Amila brings his expertise on Mobile Applications and Edge Computing Firmware for your Projects.</p>
        <div class="flex gap-6 w-auto">
          <a href="https://web.facebook.com/pgsamila"><img src="../assets/fb_s_icon.png" alt="fb" class="hover:opacity-60"></a>
          <a href="https://www.linkedin.com/in/pgsamila/"><img src="../assets/linkedin_s_icon.png" alt="insta" class="hover:opacity-60"></a>
        </div>
      </div>
     </div>

    </div>


    <div class="grid lg:grid-cols-2 place-items-center justify-between gap-10 pt-10  pb-20 lg:pb-40">
      
        <div class="flex items-center px-8 py-12 rounded-[24px] text-primary font-normal bg-sky-50 w-80 border shadow-sm">
      <div class="grid place-items-center  gap-4 text-center">
        <img src="../assets/image12.png" alt="web app" class="w-auto h-48">
        <h3 class="text-center text-sm text-secondary font-bold pt-2">Co-Founder,<br>Senior Electronics Engineer</h3>
        <h2 class="text-center text-3xl font-normal text-primary py-1">Malinda<br>Sulochana</h2>
        <p class="w-auto font-normal text-primary text-sm pb-8">Malinda brings his expertise on Creative and Innovative Electronics. Expert of Hardware and Firmware.</p>
        <div class="flex gap-6 w-auto">
          <a href="https://web.facebook.com/malinda.sulochana.3"><img src="../assets/fb_s_icon.png" alt="fb" class="hover:opacity-60"></a>
          <a href="https://www.linkedin.com/in/malinda-sulochana-0bb988b4/"><img src="../assets/linkedin_s_icon.png" alt="insta" class="hover:opacity-60"></a>
        </div>
      </div>
     </div>
 
     <div class="flex items-center px-8 py-12 rounded-[24px] text-primary font-normal bg-sky-50 w-80 border shadow-sm">
      <div class="grid place-items-center  gap-4 text-center">
        <img src="../assets/image13.png" alt="web app" class="w-auto h-48">
        <h3 class="text-center text-sm text-secondary font-bold pt-2">Co-Founder,<br>Senior Cloud Architect</h3>
        <h2 class="text-center text-3xl font-normal text-primary py-1">Akila<br>Oshadha</h2>
        <p class="w-auto font-normal text-primary text-sm pb-8">Akila is the Cloud Expert, who will fine tune all of your cloud Requirements in AWS/Google or any other environment.</p>
        <div class="flex gap-6 w-auto">
          <a href="https://web.facebook.com/asak999"><img src="../assets/fb_s_icon.png" alt="fb" class="hover:opacity-60"></a>
          <a href="https://www.linkedin.com/in/akila-wickramarachchi-3b72b1b4/"><img src="../assets/linkedin_s_icon.png" alt="insta" class="hover:opacity-60"></a>
        </div>
      </div>
     </div>
 

    /////to this line no needed/////


 
     </div>
   </div>
</section>-->
</template>