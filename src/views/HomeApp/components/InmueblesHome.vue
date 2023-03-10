<template>
  <div class="container__inmuebles">
    <h3 class="title__inmuebles">INMUEBLES</h3>
    <div class="inmuebles__grid"  v-if="inmueblesList">
        <CardInmueble  
        v-for="inmueble in inmueblesList" 
        :key="inmueble.id" 
        :inmueble="inmueble"  
        />
      </div>
    </div>
</template>

<script setup>
import { onMounted,computed} from 'vue';
import { useStore } from 'vuex';
  import CardInmueble from '@/components/inmuebles/CardInmueble.vue';

  // import DetInmueble from './components/DetInmuebles/DetInmueble.vue'

const store = useStore()
const inmueblesList = computed( () => store.state.AppInmuebles.list)
onMounted(
  ()  => {
    store.dispatch('AppInmuebles/getListInmuebles');
  }
)


</script>

<style scoped>

.container__inmuebles{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 20rem;
  z-index: 10;
}
@media (max-width:1400px) {
  .container__inmuebles {
    padding: 0 10rem;
  }
}

@media (max-width:900px) {
  .container__inmuebles {
    padding: 0 5rem;
  }
}

@media (max-width:600px) {
  .container__inmuebles {
    padding: 0 2rem;
  }
}


.title__inmuebles{
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
  font-size: bold;
}
.inmuebles__grid{
  display: grid;
  justify-items: center;
  gap:2rem;
  grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
  grid-auto-rows: 24rem;
}

</style>