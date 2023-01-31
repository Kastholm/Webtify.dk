<script setup>
/* useHead({
title: "Forside - Webtify",
meta: [
  {name: "description", content: "The Rock" },
  {property: "og:description", content: "The Rock" },
  {property: "og:image", content: "The Rock" }
]
}); */
useServerSeoMeta({
  title: 'My Amazing Siteee',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template >
  <div class=" bg-gradient-to-br from-cyangreen to-m via-midnight antialiased bg-no-repeat"> 
  <NuxtPage />
  <ForsideVideo />
  <Testimonials />
  <ForsideInfo />
  <Skills />
  <Services />
</div>
</template>

<style>


</style>