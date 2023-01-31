<script>
</script>
<template>
<LoadingScreen />
  <Nav />
  <main>
      <slot /> 
  </main>
  <Footer />
</template>


<style>
@media only screen and (max-width: 40em) {
  html {
    font-size: 2.2vw;
  }
}
@media screen and (min-width: 40em) {
  html {
    font-size: 1.8vw;
  }
}
@media screen and (min-width: 50em) {
  html {
    font-size: 1.3vw;
  }
}
@media screen and (min-width: 62em) {
  html {
    font-size: 1em;
  }
}


.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  left: 0;
  right: 0;
  transition: all 150ms linear;
}
.page-left-enter-from, .page-right-leave-to {
  transform: translateX(100%);
}
.page-left-leave-to, .page-right-enter-from {
  transform: translateX(-100%);
}
.page-left-enter-to, .page-right-enter-to {
  transform: translateX(0);
}
</style>