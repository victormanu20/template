<template>
  <div class="container__inmuebles">
    <div class="container__title">
      <h3 class="title__inmuebles">INMUEBLES</h3>
      <button class="btn__show" @click="ShowInmuebles()" >Ver más...</button>
    </div>
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
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const inmueblesList = computed( () => store.state.AppInmuebles.list);
onMounted(
  ()  => {
    store.dispatch('AppInmuebles/getListInmuebles');
  }
)
function ShowInmuebles(){
  router.push({
        name: 'inmuebles',
})
}
</script>

<style scoped>
.btn__show{
  padding: 4px 8px;
  background-color: var(--color-primary);
  border: none;
  color: white;
  border-radius: 5px;
}
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

.container__title{
  display: flex;
  justify-content: space-between;
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