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
<!-- <LoadingScreen /> -->
  <Nav />
  <main>
      <slot /> 
  </main>
  <Footer />
</template>


<style>
@import url("https://use.typekit.net/rwl1ktr.css");
::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-gradient-to-t bg-midnight/50 to-cyangreen/50
}

::-webkit-scrollbar-thumb {
  @apply bg-indigo-600;
}

body{
 @apply bg-cyangreen;
 background-color: #04032d;
}
main{
-webkit-clip-path: inset(1.25rem 1.25rem 8vh 1.25rem round 15px);
    clip-path: inset(1.25rem 1.25rem 8vh 1.25rem round 15px);
}
section{
  @apply mx-12 pb-12 /* max-w-[1920px] m-auto */;
  
}
.wrapper {
@apply max-w-[1640px] xl:m-auto px-12;
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
p {
  font-family: "source-sans-3", sans-serif;
font-weight: 400;
font-style: normal; 
}
h1, h2, h3, .header, .tab-title {
  font-family: "niveau-grotesk", sans-serif !important;
font-weight: 600;
font-style: normal;
/* font-family: "montserrat", sans-serif;
font-weight: 600;
font-style: normal; */
@apply uppercase;
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