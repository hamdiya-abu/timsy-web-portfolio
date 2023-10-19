<template>
    <div  id="home" class=" dark bg-white  dark:bg-gray-900">
        <div class=" container flex flex-col md:flex-col lg:flex-col gap-6  mobile:gap-6 mt-24 pt-20 md:w lg:w-4/6">  
            <div class="container text-white mt-10 ">
    
                <h1 class=" text-4xl font-bold flex-wrap flex">
        
                    Hey<img src="/images/hand.png" alt="hello" class="w-10"/>,I'm
                     Hamdiya Abubakar
                </h1>
                <p class="text-lg mt-6 md:flex-wrap">I'm a Web Developer based in Accra, Ghana, and I'm deeply passionate and dedicated to my work. Say hello!</p>
                 <div class="flex flex-col md:flex-row gap-6  mt-16 "> 

                     <div class="border-dotted border-2 border-gray-500 p-5 h-auto justify-center w-full md:w-48 flex flex-col items-center rounded text-center space-y-3 cursor-pointer" @click="goToServices">
                         <span class="text-center justify-center items-center text-lg font-semibold" >SERVICES</span>
                         <div class="justify-center border rounded-full items-center text-center flex gap-2 py-3 w-full"><i class="fa-solid fa-code"></i><i class="fa-solid fa-palette"></i></div>
                     </div>
     
                     <div class="border-dotted border-2 border-gray-500 p-5 h-auto justify-center flex flex-col w-full md:w-48 items-center rounded text-center space-y-3" @click="goToPortfolio">
                         <span class="text-center justify-center items-center text-lg font-semibold" >PROJECTS</span>
                         <div class="justify-center   items-center text-center flex gap-2 py-3"><img src="/images/laptop.png"/></div>
                     </div>
                     <div class="border-dotted border-2 border-gray-500 p-5 h-auto flex flex-col justify-center w-full md:w-48 items-center rounded text-center space-y-3 " @click="goToAbout">
                         <span class="text-center justify-center items-center text-lg font-semibold" >ABOUT</span>
                         <div class="justify-center    items-center text-center flex gap-2 py- font-extrabold"><i class="fa-solid fa-a"></i></div>
                     </div>
                 </div>
            </div>
           
            <div class="w-full h-72 sm:h-72 mobile: mobile:h-72 mt-20 md:h-72 md:mt-16 border-x-4 border-x-[#09f5f5] lg:justify-center  rounded-lg bg-teal-700 p-6 relative container sm:mb-8 sm:mt-36 md: lg:w-[650px]  ">
   <!-- Image in between the slanted oval -->
   <div class="oval"></div>
   <img src="/images/aania.png" alt="Description" class="absolute bg-transparent -top-1/5 -bottom-1 z-10 h-[400px] w-[400px] sm:left-40 md:left-48 lg:left-40 ">

   
 </div>
 </div>

 <div class="gradient-line mx-auto mt-4"></div>
            

  <!--services-->

  <div class="container mt-16" id="services">
    <h2 class="bg-gradient-to-b from-teal-500 via-green-500 to-blue-500 text-transparent bg-clip-text font-bold text-2xl">
    WHAT I DO
</h2>

    <h1 class="text-white  text-5xl font-extrabold container">My specializations</h1>
    
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16 container">
    <img src="/images/web-design.png"/>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Web Developer</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">In the world of web development, specialization isn't just trendy—it's a dedication to a distinct digital niche. 
        As a devoted web developer, I don't skim across every task; I dive deeply into "front-end development",
        ensuring that every pixel and line of code resonates with purpose.

    </p>
    <hr>
    <a href="https://darling-puffpuff-b2e3f4.netlify.app/" class="inline-flex items-center text-blue-600 hover:underline">
        My projects
        <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>  
    </a>
</div>

  


  </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const goToServices = () => {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const goToAbout = () => {
      const servicesElement = document.getElementById('about');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const goToPortfolio = () => {
      const servicesElement = document.getElementById('portfolio');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }




</script>

<style scoped>
.fa-code {
  color: blue;
  font-size: 30px;
}
 .fa-palette {
  color: white;
  font-size: 28px;
}
.fa-a{
    color:#09f5f5;
    font-size: 58px;
    font: bolder;

}
.oval {
  position: absolute;
  top: 54%;
  left: 60%;
  transform: translate(-60%, -50%) rotate(-18deg); /* Negative rotation to slant towards the other side */
  width: 90%;
  height: 60%;
  border: 8px solid #09f5f5; /* Border to create the ring effect */
  background-color: transparent;
  border-radius: 50%;
  z-index: 5;
}


.gradient-line {
  height: 4px; /* or whatever thickness you want */
  width: 100%; /* adjust width as needed */
  background: linear-gradient(90deg, transparent, #333, transparent);
}






</style>