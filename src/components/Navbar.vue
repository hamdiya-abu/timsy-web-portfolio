<template>
    <div class="container" >
     
<!--<nav class="bg-white border-gray-500 dark:bg-gray-900 border-b-2">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div style="display: flex; align-items: center; background-color: #F5F5F5; padding: 10px; border-radius: 10px;">
    <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
         Monitor Frame with subtle shadow 
        <rect x="5" y="5" width="50" height="50" rx="8" ry="8" fill="#1A73E8" filter="url(#f1)" />
        
         "T" Letter
        <text x="30" y="35" font-family="Georgia, serif" font-size="20" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">T</text>

         Code Brackets 
        <text x="15" y="40" font-family="Georgia, serif" font-size="15" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">&lt;</text>
        <text x="45" y="40" font-family="Georgia, serif" font-size="15" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">&gt;</text>
        <defs>
            <filter id="f1" x="0" y="0" width="100%" height="100%">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="2" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
        </defs>
    </svg>
    <span style="font-size: 1.3em; margin-left: 15px; color: #1A73E8; font-weight: bold; font-family: 'Georgia', serif;">WebCraft by Timsy</span>
</div>


    <button  @click="toggleNavbar"  data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div :class="{ 'hidden': !isNavbarOpen, 'md:flex': true }" class=" w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#services" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->



   
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 -left-0 border-b border-gray-200 dark:border-gray-600 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div style="display: flex; align-items: center; background-color: #F5F5F5; padding: 5px; border-radius: 10px;">
    <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
         Monitor Frame with subtle shadow 
        <rect x="5" y="5" width="50" height="50" rx="8" ry="8" fill="#1A73E8" filter="url(#f1)" />
        
         "T" Letter
        <text x="30" y="35" font-family="Georgia, serif" font-size="20" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">T</text>

         Code Brackets 
        <text x="15" y="40" font-family="Georgia, serif" font-size="15" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">&lt;</text>
        <text x="45" y="40" font-family="Georgia, serif" font-size="15" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">&gt;</text>
        <defs>
            <filter id="f1" x="0" y="0" width="100%" height="100%">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="2" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
        </defs>
    </svg>
    <span style="font-size: 1.2em; margin-left: 10px; color: #1A73E8; font-weight: bold; font-family: 'Georgia', serif;">WebCraft by Timsy</span>
</div>

  <div class="flex md:order-2 gap-2">
      <div class="flex gap-2">
        <img src="/images/chat.png" alt="chat" class="w-10 h-10"/>
        <div class="flex flex-col text-slate-50 text-sm"> 
          <h1 class="text-white">Have any questions?</h1>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=timsyabubakr7@gmail.com&su=Inquiry%20from%20Your%20Portfolio&body=Hello%20[Your%20Name],%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0D%0A%0D%0ABest,%0D%0A[Your%20Contact's%20Name]" target="_blank" class="underline">Email </a>


        </div>

      </div>
      <button  @click="toggleNavbar"  data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div :class="{ 'hidden': !isNavbarOpen, 'md:flex': true }" class=" w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#services" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#portfolio" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
        </li>
        <li>
          <a href="#contacts" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



   



    

 


    </div>
</template>



<script setup>
import { ref } from 'vue';

const isNavbarOpen = ref(false);

const toggleNavbar = () => {
      isNavbarOpen.value = !isNavbarOpen.value;
    };
  // export default {
   // name: "/Navbar",
   // computed: {
    //    currentPath() {
       //     return this.$route.name
     //   }
    //}
//}

</script>

<style lang="scss" scoped>

</style>