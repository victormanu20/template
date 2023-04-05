<template>
  <div  class="container__home" id="App" v-if="state">
    <HeaderApp/>
    <main id="MainBody">
      <router-view></router-view>
    </main>
    <FooterApp/>
  </div>
</template>

<script setup>
import { onMounted,ref,computed,watch } from 'vue';
import { useStore } from 'vuex';
// COMPONENTS
import HeaderApp from '@/components/header/HeaderApp.vue';
import FooterApp from '@/components/footer/FooterApp.vue';

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
let configuration = computed(() => store.state.AppData.data.configuracion);

watch(configuration,()=>{
  GetColors()
  changeFavicon(configuration.value.logo);


})
function GetColors(){
  document.documentElement.style.cssText = `--color-primary:${configuration.value.color_primario}; --color-secundary:${configuration.value.color_secundario};--color-text:${configuration.value.font_color};`;
  console.log(configuration.value.color_primario)
  console.log(configuration.value.color_secundario)
  document.title =configuration.value.nombre;

}

function changeFavicon(src) {
  var link = document.createElement('link'),
  oldLink = document.getElementById('favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}
</script>

<style lang="scss">
  :root{
    --color-primary:#2eca6a;
    --color-secundary:white;
    --color-text:#444444;
  }
#app {
  font-family:  Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;

}
#MainBody{
  padding-bottom: 2rem;

}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html{
  background-color: var(--color-secundary);

}
a {
  text-decoration: none;
}
li{
  list-style: none;
}


</style>
