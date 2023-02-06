<script setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted} from "vue";

  onMounted(async () => { 
// Register gsap plugin
gsap.registerPlugin(ScrollTrigger);

  gsap.from("nav", {
    duration: .5,
    y: "-100%",
    ease: "ease"
});
/* -------------------------------------------------------------------------- */
/*                             Finder Nav div                             */
/* -------------------------------------------------------------------------- */
let megaTabs = gsap.utils.toArray('.megaTab');

megaTabs.forEach((megaTab) => {
  let ddPanel = megaTab.querySelector('.megaDd');
  megaTab.addEventListener('mouseenter', (event) => {
    showDd(ddPanel);
  });
  megaTab.addEventListener('mouseleave', (event) => {
    hideDd(ddPanel);
  });
});
/* -------------------------------------------------------------------------- */
/*                                  Show Nav                                  */
/* -------------------------------------------------------------------------- */
function showDd(element) {
  var tl = gsap.timeline({});
  tl.to(element, {
    duration: 1.60,
    
    height: '20em' ,
    y: "30%",
    top: '0',
    overflow: 'visible',
    height: 'fit-content',
   ease: "power4"
  });
}
/* -------------------------------------------------------------------------- */
/*                                  Hide Nav                                  */
/* -------------------------------------------------------------------------- */
function hideDd(element) {
  var tl = gsap.timeline({});
  tl.to(element, {
    duration: 1.60,
  
    height: '0em',
    overflow: 'hidden',
    y: "-80%",
    ease: "power4"
  });
}

const navScroll = gsap.timeline({defaults: {ease: "ease", duration: .3}});
 
ScrollTrigger.create({
    animation: navScroll ,
    trigger: ".video",
    /* markers: true, */
    start: "top -10% ",
    end: "bottom 30%",
    once: false,
    scrub: 1
});

navScroll
      .to('.top_nav',{
            height: '0',
            overflow:'hidden'
            }, 0)
      .to('.main_nav', {
            backgroundColor: '#0A6C74',
      }, 1)
      .to('.main_nav img', {
      width: '5rem',
      }, 1)
      .to('.main_nav a', {
            padding: '1.4rem',
            
            color: '#fbfbfb'
      }, 1)
       .to('.megaDd', {
             marginTop: "-1.5%",
       })

  });




</script>

<template>
<nav>
  <ul  class="top_nav">
      <li class="ml-6">+45 2864 0000</li>
      <li class="ml-auto mr-6">Underpunkt</li>
      <li class="mr-6">Vores Team</li>
  </ul>
  <ul class="main_nav">
      <picture>
      <img src="https://i.ibb.co/JCyKc3F/Webber-blue-logo-moon-web.gif" alt="Flowers">
      </picture>
      <li><NuxtLink to="/">Forside</NuxtLink></li>
      <li class="megaTab"><NuxtLink to="/Hjemmesider">Webløsning</NuxtLink><div class="megaDd">
            <div><span class="bg-yellow-400">Hej</span><span class="bg-blue-400">Med</span><span class="bg-red-400">Dig</span></div>
    </div></li>
      <li class="megaTab"><NuxtLink to="/Markedsfoering">Markedsføring</NuxtLink><div class="megaDd">
            <div><span class="bg-yellow-400">Hej</span><span class="bg-blue-400">Med</span><span class="bg-red-400">Dig</span></div>
    </div></li>
      <li class="megaTab"><NuxtLink to="/Design">Design</NuxtLink><div class="megaDd">
           <div><span class="bg-yellow-400">Hej</span><span class="bg-blue-400">Med</span><span class="bg-red-400">Dig</span></div>
    </div></li>
      <li><NuxtLink to="/Kontakt">Kontakt</NuxtLink></li>
  </ul>
</nav>
  

</template>




<style>
picture {
      @apply w-32 grid;
}
img {
      @apply w-24 m-auto;
}
ul {
      @apply flex;
}
nav {
      @apply fixed w-screen z-20 ;
}
.top_nav{
      @apply bg-cyangreen text-smooth relative z-50 ;
}
.main_nav {
      @apply bg-smooth relative ;
      transition: 1s;
}
.main_nav div div {
      @apply flex columns-3 relative;
}
.main_nav div div span {
      @apply block w-1/3 h-72 grid place-content-center;
}
.main_nav li {
      @apply grid text-center text-elipse ;
}
.main_nav a {
      @apply m-auto p-8 w-44;
}
.router-link-active {
      @apply bg-cyangreen text-smooth;
}
.router-link-hover {
      @apply bg-cyangreen;
}
a:hover{
      @apply bg-cyangreen text-smooth;
}
.megaDd {
  z-index: -10;
  transform: translateY(-190%);
  top: -200px;
  left: 0;
  width: 100vw;
  height: 0;
  overflow: hidden;
  @apply absolute  bg-cyangreen;
}

</style>