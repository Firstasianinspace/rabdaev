<script setup>
import { computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AHeader from './components/AHeader.vue'
import AHero from './components/AHero.vue'
import AAbout from './components/AAbout.vue'
import AExpertise from './components/AExpertise.vue'
import AFriends from './components/AFriends.vue'
import ATicker from './components/ATicker.vue'
import AProjects from './components/AProjects.vue'
import AFooter from './components/AFooter.vue'

gsap.registerPlugin(ScrollTrigger);

const footerTicker = computed(() => ['say hi', '✦', 'aleksandr.rabdaev@gmail.com', '✦'])

onMounted(() => {
  const cursor = new Cursor(document.querySelector('.cursor'));
})
</script>

<template>
  <AHeader />
  <AHero />
  <AAbout />
  <AExpertise />
  <AFriends />
  <ATicker :background="`#fff`" />
  <AProjects />
  <AFooter />
  <ATicker :target="`footer`" :items="footerTicker" transparent />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
