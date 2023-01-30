<script setup>
useHead({
title: "Forside - Webtify",
meta: [
  {name: "description", content: "The Rock" },
  {property: "og:description", content: "The Rock" },
  {property: "og:image", content: "The Rock" }
]
});
 import Video from '~~/components/forside/Video.vue';
 import Info from '~~/components/forside/Info.vue';
 import Testimonials from '~~/components/Testimonials.vue';
 import Skills from '~~/components/Skills.vue'
</script>

<template >
  <div class=" bg-gradient-to-br from-cyangreen to-m via-midnight antialiased bg-no-repeat"> 
  <NuxtPage />
  <Video />
  <Testimonials />
  <Info />
  <Skills />
  <Services />
</div>
</template>

<style>


</style>