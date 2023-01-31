<script>
export default {
  computed: {
    pageName() {
      return this.$route.name;
    }
  },
  watch: {
    $route(to, from) {
      useHead({
        titleTemplate: `${this.pageName} - Webtify`
      });
    }
  }
};
/*   useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Webtify` : `${titleChunk} - Webtify` ;
    }
  }) */
  /*   useHead({
    // as a string,
    // where `%s` is replaced with the title
    titleTemplate: '%s - Site Title',
    // ... or as a function
    titleTemplate: (productCategory) => {
      return productCategory
        ? `${productCategory} - Site Title`
        : 'Site Title'
    }
  }) */


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
body{
 /*  -webkit-clip-path: inset(1.25rem 1.25rem 8vh 1.25rem round 15px);
    clip-path: inset(1.25rem 1.25rem 8vh 1.25rem round 15px); */
}
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
*{
  @apply text-smooth;
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