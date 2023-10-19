<template>
  <div
   class="dark dark:bg-gray-900 font-  " >
    <Navbar/>
    <Intro/>
    <About/>
    <Recent/>
    <Contact/>

  </div>
</template>

<script setup>
import Intro from '../components/Intro.vue';
import Navbar from '../components/Navbar.vue';
import About from '../components/About.vue';
import Recent from '../components/Recent.vue';
import Contact from '../components/Contact.vue';


</script>

<style lang="scss" scoped>

</style>