<template>
  <div class="video" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/693992218?h=06b451780d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Webtify video"></iframe></div><!-- <script src="https://player.vimeo.com/api/player.js"></script> -->
<div class="button_container ">
  <figure class="glightbox_video "> 
                  <svg width="101" height="101" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="#fbfbfb"></path>
                      <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="#fbfbfb"></circle>
                      <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#274653"></path>
                  </svg>
                  </figure>
</div>
</template>

<script>
export default {

}
</script>

<style>

.glightbox_video {
  position: absolute;
  top: 55%;
  cursor: pointer;
  pointer-events: auto;
  left: 50%;
  transform: translate(-50%, -50%);
  }

.outer_circle {
  stroke-width: 3;
  stroke-dasharray: 410; 
   stroke-dashoffset: 0;
  stroke-linecap: square;
  transition: all .4s ease-out;
}

.glightbox_video:hover .outer_circle {
stroke-dashoffset:410;

  transition: stroke .7s .4s ease-out, stroke-dashoffset .4s ease-out
}

.glightbox_video:hover 
.inner-circle {
  fill: #274653;
  transition:fill .4s .3s ease-out;
  
}

.glightbox_video:hover
.play{
  
    fill: white;
  transition:fill .4s .3s ease-out;
}

</style>