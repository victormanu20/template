<template>
  <div class="container__inmuebles">
    <h3 class="title__inmuebles">INMUEBLES</h3>
    <div class="inmuebles__grid"  v-if="inmueblesList">
        <CardInmueble  
        v-for="inmueble in inmueblesList" 
        :key="inmueble.id" 
        :inmueble="inmueble"  
        @showDetail="showDetail"
        />
      </div>
    </div>
    <div v-show="showSlide">
      <DetInmueble @showClose="showClose"/>
    </div>
</template>

<script setup>
import { onMounted,computed} from 'vue';
import { useStore } from 'vuex';
  import CardInmueble from './components/CardInmueble.vue';
  import DetInmueble from './components/DetInmuebles/DetInmueble.vue'
  import { ref } from 'vue';

  let showSlide=ref(false);



async function showDetail(payload){  
  console.log(payload)  
  await store.dispatch('AppInmuebles/getDetailInmuebles',payload);
  showOpen(true)
}

function showClose(){
  showSlide.value =false;
}

function showOpen(value){
  showSlide.value =value;
  console.log(showSlide.value)
}
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
  padding: 0 14rem;
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
  grid-template-columns: repeat(4,350px);
  grid-auto-rows: 450px;
}

</style>