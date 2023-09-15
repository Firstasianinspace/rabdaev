<script setup lang="ts">
</script>

<template>
<section class="section section-hero panel">
  <p class="hero-title">
    <span>I'm Alex</span>
    <br />
    <span>Portfolio/23</span>
  </p>
  <div class="hero-text">
    <p>Frontend Developer</p>
    <p class="hero-text__small">LAST UPDATE ✦ 2023 \///
      <br />
      ©ALEKSANDR RABDAEV
      <br />
      ((SCROLL))
    </p>
  </div>
  <p class="hero-text">✺Here you can see
  <br />some of my latest
  <br />designs and projects</p>
</section>
</template>

<style scoped>
.section {
  padding: 86px 24px 0;
}
.section-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 270px;
  padding: 86px 56px 0 56px;
}
.hero-title {
  grid-column: 1 / 3;
  font-size: 229px;
  line-height: 175px;
}
.hero-text {
  font-size: 66px;
  line-height: 60px;
}
.hero-text__small {
  font-size: 16px;
  line-height: 16px;
  padding: 32px 0 0 0;
}
span {
  letter-spacing: -0.372rem;
}
</style>