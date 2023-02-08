<template>
  <div class="container__inmuebles">
    <h3 class="title__inmuebles">INMUEBLES</h3>
    <div class="inmuebles__grid" >
    <div v-for="inmueble in inmueblesList" :key="inmueble.id">
        <CardInmueble @showDetail="showDetail" :inmueble="inmueble"/>
        {{ inmueble.titulo_inmueble }}
      </div>
    </div>
  </div>
  <DetInmueble :showSlide="showSlide" @showDetail="showDetail"/>
</template>

<script setup>
import { onMounted,computed} from 'vue';
import { useStore } from 'vuex';
  import CardInmueble from './components/CardInmueble.vue';
  import DetInmueble from './components/DetInmueble.vue';

  import { ref } from 'vue';
  let showSlide=ref(false);

function showDetail(value){
  showSlide.value = value;
}

const store = useStore()

const inmueblesList = computed( () => store.state.AppInmuebles.list)
onMounted(
  () =>{
    store.dispatch('AppInmuebles/getListInmuebles');
  }
)


</script>

<style scoped>

.container__inmuebles{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 4rem;
  z-index: 10;
}

.title__inmuebles{
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
  font-size: bold;
}
.inmuebles__grid{
  display: grid;
  justify-items: center;
  width: 100%;
  gap: 2rem;
  grid-template-columns: repeat(5,minmax(8rem,1fr));
  grid-template-rows: 450px;
}

</style>