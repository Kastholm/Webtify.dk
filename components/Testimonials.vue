<template>
  <section class="testi_section">
<h2>5 stjerner på trustpilot</h2>
<!-- <img class="w-44 bg-smooth" loading="lazy" width="85" height="17" :src="stars" alt=""> -->
     <div class="testi_container">
     <span class="testi_box"><img class="w-24 bg-smooth" loading="lazy" width="85" height="17" :src="stars" alt=""><h3>Fantastisk oplevelse</h3><blockquote>Super rare og professionele mennesker at snakke med. Gik lige til sagen og skabte en hjemmeside jeg er
                virkelig glad for. Kan varmt anbefale Kastholm Design.</blockquote></span>
     <span class="testi_box"><img class="w-24 bg-smooth" loading="lazy" width="85" height="17" :src="stars" alt=""><h3>Fantastisk oplevelse</h3><blockquote>Super rare og professionele mennesker at snakke med. Gik lige til sagen og skabte en hjemmeside jeg er
                virkelig glad for. Kan varmt anbefale Kastholm Design.</blockquote></span>
     <span class="testi_box"><img class="w-24 bg-smooth" loading="lazy" width="85" height="17" :src="stars" alt=""><h3>Fantastisk oplevelse</h3><blockquote>Super rare og professionele mennesker at snakke med. Gik lige til sagen og skabte en hjemmeside jeg er
                virkelig glad for. Kan varmt anbefale Kastholm Design.</blockquote></span>
     </div>

  </section>


  <!-- <div class="slider">
  <img src="https://webtify.dk/dist/img/icon-pack/SEO2.webp" alt="image 1">
  <img src="https://webtify.dk/dist/img/icon-pack/SEO2.webp" alt="image 2">
  <img src="https://webtify.dk/dist/img/icon-pack/SEO2.webp" alt="image 3">
</div> -->
</template>

<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted} from "vue";
import stars from "../assets/img/stars.gif";

onMounted(async () => {
  // Register gsap plugin
  gsap.registerPlugin(ScrollTrigger);

  // Floating Banner Effect
  const testbox = gsap.timeline({defaults: {ease: "ease"}});
  testbox
  .from('.testi_box', {y: '80%', stagger: .1, duration: .5, 
        })
  .from('.testi_box *', {opacity: '0', duration: .5, 
        });

    ScrollTrigger.create({
    animation: testbox ,
    trigger: ".testi_section",
    markers: true,
    start: "top 70% ",
    end: "bottom 30%",
    once: true,
    scrub: false
});

const slider = document.querySelector('.slider');
gsap.to(slider, {duration: 1, x: -600});


})

</script>

<style>
.testi_section {
     @apply text-center;
}
.testi_section h2 {
     @apply text-4xl;
}
.testi_container {
     @apply grid place-content-center lg:flex lg:columns-3 lg:justify-center text-center mt-8 ;
}
.testi_container span {
     @apply lg:w-1/3 mx-12 bg-smooth rounded-lg p-6 ;
}
.testi_container h3 {
     @apply font-bold text-lg;
}
</style>