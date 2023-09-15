<script setup lang="ts">
</script>

<template>
<section class="section section-friends">
  <h4 class="section-friends__title">
    Some of my friends
  </h4>
  <div class="section-friends__description">
    <p>DURING THE LAST YEARS I HAVE HELPED SEVERAL COMPANIES, SUCH AS MAGNIT, OZON,
    TELE2, MVIDEO, KHAN BANK, WHERE I HAVE MADE GREAT FRIENDS FROM WHOM, TO THIS DAY, I AM STILL LEARNING.</p>
  </div>
  <button class="section-friends__cta">SAY HI 👋</button>
</section>
</template>

<style scoped>
button {
  border: none;
}
.section-friends {
  color: #000;
  background: #fff;
  border-radius: 120px 120px 0 0;
  text-align: center;
  margin: -170px 0 0 0;
  padding: 88px 32px 250px;
}
.section-friends__title {
  font-size: 111px;
}
.section-friends__description {
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.6fr;
}
.section-friends__description p {
  grid-column: 2 / 2;
  padding: 0 0 32px 0;
}
.section-friends__cta {
  padding-right: 1.1111111111111112rem;
  padding-left: 1.1111111111111112rem;
  color: #17171b;
  font-size: 0.8888888888888888rem;
  padding-top: 0.5555555555555556rem;
  padding-bottom: 0.5rem;
  font-size: 16px;
  background: none;
  border-radius: 5rem;
  background-color: transparent;
  border: solid 1px #0a0404;
}
</style>