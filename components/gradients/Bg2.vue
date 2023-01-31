<template>
  <div class="fixed -z-10 h-screen w-screen" id="grad2"></div>
</template>

<script>
import * as THREE from "three";
import HALO from "vanta/dist/vanta.fog.min";

export default {
  async mounted() {
    // window is only avaiable on browser
   /*  if (process.browser) { */
      window.THREE = THREE;
      const { default: FOG } = await import("vanta/dist/vanta.fog.min");
      FOG({
        el: "#grad2",
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xe2a117,
  midtoneColor: 0xddd8e9,
  lowlightColor: 0x95ce21,
  baseColor: 0x0,
  blurFactor: 0.90,
  speed: 2.20,
  zoom: 0.60,
        THREE: window.THREE
      });
   /*  } */
  }
};
</script>

<style>

</style>