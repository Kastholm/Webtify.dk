<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted} from "vue";
import stars from "../assets/img/stars.gif";
import { testimonialsdata } from "../assets/json/testimonials.json";

/* export default {;
  components: {
    Tabs,
    Tab
  }
} */
onMounted(async () => {
  // Register gsap plugin
  gsap.registerPlugin(ScrollTrigger);

  // Floating Banner Effect
  const testbox = gsap.timeline({defaults: {ease: "ease"}});
  testbox
  .from('.testi_box', {y: '80%', stagger: .1,  duration: .5, 
        })
  .from('.testi_box *', {opacity: '0',  duration: .5, 
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
<template>



<section class="testi_section">
<h2 >5 Stjerner på Trustpilot</h2>


    <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="3"
    :loop="true"
    
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="testimonial in testimonialsdata"  :key="testimonial"  >
     <div class="testi_container" >
     <span class="testi_box" >
          <img class="w-24 bg-smooth" loading="lazy" width="85" height="17" :src="stars" alt="">
          <h3>{{testimonial.header}}</h3>
          <blockquote>{{testimonial.review}}</blockquote>
     </span>
     </div>
    </SwiperSlide>
  </Swiper>


</section>


</template>


<style>
.testi_section {
     @apply text-center bg-smooth;
}
.testi_section h2 {
     @apply text-4xl py-4;
}
.testi_container  {
     @apply flex place-content-center lg:flex lg:columns-3 lg:justify-center text-left bg-smooth h-64;
}
.testi_container span {
     @apply /* lg:w-1/3 */  p-6 border mx-2 my-4 border-l-orange-500 grid place-content-center text-left ;
}
.testi_container h3 {
     @apply font-bold text-lg;
}
</style>