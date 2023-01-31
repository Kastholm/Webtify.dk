<template>
  <div class="fixed -z-10 h-screen w-screen" id="abc"></div>
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
        el: "#abc",
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x17abe2,
  midtoneColor: 0x4d2ad3,
  lowlightColor: 0x3021ce,
  baseColor: 0x163f4b,
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