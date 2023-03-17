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
      <VModal
        v-if="sideBarState"
        @close="sideClose"
        titulo="Detalle del inmueble"
        ref="modalInmueble"
        sideBar
        size="md"
      >
          <DetailInmueble @showClose="showClose" :inmuebleSeleted="inmuebleSeleted"/>
      </VModal>
</template>

<script setup>
import { onMounted,computed} from 'vue';
import { useStore } from 'vuex';
  import CardInmueble from './components/CardInmueble.vue';
  import VModal from "@/views/componente/modal";
  import DetailInmueble from '../../pages/Inmuebles/components/DetailInmueble.vue'

  // import DetInmueble from './components/DetInmuebles/DetInmueble.vue'
  import { ref } from 'vue';

  let sideBarState=ref(false)
  let inmuebleSeleted= ref({})



async function showDetail(payload){ 
  inmuebleSeleted.value=payload
  sideOpen(true)
}

function sideClose(){
  sideBarState.value =false;
}

function sideOpen(value){
  sideBarState.value =value;
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
  padding: 0 2rem;
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
  gap:2rem;
  grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
  grid-auto-rows: 24rem;
}

</style>