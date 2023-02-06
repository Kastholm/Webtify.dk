<script setup>
import { gsap } from "gsap";
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted} from "vue";

  onMounted(async () => { 
// Register gsap plugin
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

   var tl = gsap.timeline(),
  mySplitText = new SplitText(".quote", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set(".quote", { perspective: 400 });

/* console.log(chars); */

  ScrollTrigger.create({
    animation: tl,
    trigger: ".quote",
//markers:true,
    start: "top 75%",
   end: "bottom center",
    scrub:1
  })
tl
.from(chars, {
  duration: 0.8,
  opacity: 0,
  scale: 0,
  y: 80,
  rotationX: 180,
  transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.01,

})
.from('.quote_text', {
  opacity: 0,
}, 1)
.to('.dotsBlue',{
  opacity: 1,
top: '125px',
}, 1)
.from('.gsapimg ',{
  
y: '-10%',
}, 1)




  });
</script>

<template>

<section class="wrapper flex">
<div class="w-1/2">
<span class="">
  <p>Hej</p>
  <h3 class="quote header">AFLAST DIN DIGITALE HVERDAG HOS OS</h3>
  <h4 class="quote_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit cumque velit, nostrum nesciunt at placeat, blanditiis illum ex dolores, in cum odio incidunt ratione maiores dolorum eveniet? Optio molestiae dolorem quidem laboriosam maxime officia consequatur nulla doloribus ipsam unde odit consectetur, qui quae natus quos beatae aut debitis cupiditate minima.</h4>
  
</span>
</div>
<div class="w-1/2 relative">
<img class="w-[30em] gsapimg " src="https://easol.com/_next/image?url=%2Fimages%2Fhomepage%2F5.jpg&w=2048&q=75" alt="">
<img class="dotsBlue clusterPieces absolute" src="/img/dots_blue.svg" style="transform: translate(0%, 2.654%) translate3d(0px, 0px, 0px);"/>
</div>

</section>






</template>


<style>
.quote{
  font-size:74px;
  line-height:90px;
  color:#dedede;
}
.dotsBlue {
    width: 100%;
    height: auto;
    opacity: 0;
    max-width: 434px;
    max-height: 434px;
    z-index: -1;
    left: 30px;
    top: 180px;
   
}
</style>