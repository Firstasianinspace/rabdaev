<script setup lang="ts">
</script>

<template>
<header class="header">
<a href="" class="header-logo">Alex</a>
<nav class="nav">
  <ul>
    <li>
      <a href="">Projects</a>
    </li>
    <li>
      <a href="">About</a>
    </li>
  </ul>
</nav>
</header>
</template>

<style scoped>
.header {
  padding: 64px 0;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-logo {
  position: absolute;
  left: 64px;
  opacity: 0;
}
.nav ul {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 64px;
}
</style>
