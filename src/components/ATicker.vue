<script setup>
import { onMounted, ref, computed } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  items: {
    type: Array,
    default: ['✦', 'magnit', '✦', 'ozon', '✦', 'tele2', '✦', 'mvideo', '✦', 'khan bank']
  },
  target: {
    type: String,
    default: 'friends'
  },
  background: {
    type: String,
    default: '#e6eaee'
  }
})

onMounted(() => {
  const speed = 70;
  let target = document.querySelector(`.${props.target}`);
  let original_html = target.innerHTML;
  let new_html = `<div class='ticker-items' id='${props.target}'>` + original_html + "</div>";
  target.innerHTML = new_html;
  target.innerHTML += new_html;

  let tickerWidth = document.querySelector(".ticker-items").offsetWidth;
  let initDuration = tickerWidth / speed;
  gsap.to(`#${props.target}`, {
    duration: initDuration,
    xPercent: -100,
    ease: "none",
    repeat: -1
  });
})


</script>

<template>
  <section class="section section-ticker" :style="{ background: background }">
    <ul :class="target" class="ticker">
      <li v-for="item in items"> {{ item }} </li>
    </ul>
  </section>
</template>
<style scoped>
.white {
  background: #fff;
}
.ticker {
  margin: 0;
  padding: 40px 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

li {
  list-style: none;
  margin: 0;
  padding: 0 40px 0 30px;
  font-size: 150px;
  display: inline-block;
  font-family: sans-serif;
  line-height: 50px;
  vertical-align: center;
  color: #000;
  text-transform: uppercase;
}

span {
    display: inline-block;
}

.ticker-items,
.ticker-wrapper {
    display: inline-block;
}
/* This is so you can see how the looping is working */
.ticker-items:nth-child(2) {
    background: rgba(255, 255, 255, 0.25);
}
</style>