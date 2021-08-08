<template>
  <div class="bg-gray-bgheader font-circularstd">
    <Header /> 
    <Hero />
    <Partners />
    <Body1 />
    <Body2 />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Partners from './components/Partners.vue';
import Body1 from "./components/Body1.vue";
import Body2 from './components/Body2.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Partners,
    Body1,
    Body2,
    Footer
  },
};
</script>
