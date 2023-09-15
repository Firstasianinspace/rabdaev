<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const scrollTrigger = {
    trigger: '.section-projects',
    start: '10% center',
    end: 'center center',
    pin: true,
    scrub: true,
  };
  gsap.timeline({ scrollTrigger }).from('.section-projects__title', { y: -100, scale: 1.8 });
})
</script>

<template>
  <section class="section section-projects">
    <h4 class="section-projects__title">
      Recent work
    </h4>
    <p class="section-projects__description">THESE ARE SOME OF THE PROJECTS THAT I HAVE DONE IN RECENT
      <br /> YEARS, ALTHOUGH I CANNOT SHOW SOME OF THEM
      <br /> DUE TO CONFIDENTIALITY.
    </p>
    <div class="single-project">
      <img src="https://azarzalejo.com/wp-content/uploads/2023/05/mockup06.jpg" alt="">
      <h6 class="single-project__title">Caixaforum — video and podcast content platform</h6>
      <p class="single-project__description">✦ FRONTEND DEVELOPMENT</p>
    </div>
    <div class="single-project">
      <img src="https://azarzalejo.com/wp-content/uploads/2023/06/mock_myreal_home01.jpg" alt="">
      <h6 class="single-project__title">Myrealfood — app redesign and visuals</h6>
      <p class="single-project__description">✦ FRONTEND DEVELOPMENT</p>
    </div>
    <div class="single-project">
      <img src="https://azarzalejo.com/wp-content/uploads/2023/06/mockup_2023_infoempresa01.jpg" alt="">
      <h6 class="single-project__title">Infoempresa — website and product design</h6>
      <p class="single-project__description">✦ FRONTEND DEVELOPMENT</p>
    </div>
    <div class="single-project">
      <img src="https://azarzalejo.com/wp-content/uploads/2023/05/hero01_allmybooks5.jpg" alt="">
      <h6 class="single-project__title">Allmybooks — Branding, logo design</h6>
      <p class="single-project__description">✦ FRONTEND DEVELOPMENT</p>
    </div>
  </section>
</template>
<style scoped>
.section-projects {
  padding: 480px 32px 300px 32px;
}
.section-projects__title {
  font-size: 210px;
  text-align: center;
}
.section-projects__description {
  padding: 48px 0;
  text-align: center;
}
.single-project {
  padding: 120px 0 20px 0;
}
.single-project img {
  max-width: 100%;
  border-radius: 55px;
}
.single-project__title {
  font-size: 43px;
  line-height: 40px;
  padding: 32px 0 16px 0;
}
</style>