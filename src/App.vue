<template>
  <HomePage/>
</template>

<script setup>
import HomePage from '@/pages/HomeApp.vue'
</script>

<style>
  :root{
    --color-primary:#2eca6a;
    --color-secundary:white;
    --color-text:black;
  }
#app {
  font-family:  Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;

}

*{
  box-sizing: border-box;
}
html{
  background-color: var(--color-secundary);
  width: 100%;

}
a {
  text-decoration: none;
}
li{
  list-style: none;
}
</style>
