<template>
  <div  class="container__home" id="App" v-if="state">
    <HeaderApp/>
    <main id="MainBody">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import { useStore } from 'vuex';
// COMPONENTS
import HeaderApp from '@/components/header/HeaderApp.vue';

const store = useStore()

let state = ref(false)

onMounted(
  ()  => {
    store.dispatch('AppData/getData')
    .then(() => {
        state.value = true;
      });
  }
)
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
#MainBody{
  margin-top: 90px ;
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
