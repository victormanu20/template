<template>
  <div class="container-inmuebles">
    <div class="container-inmuebles__header">
      <h3 class="title__inmuebles">INMUEBLES</h3>
      <button class="btn-filter" @click="showFilter()">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal icon__filter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5"  stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="14" cy="6" r="2" />
          <line x1="4" y1="6" x2="12" y2="6" />
          <line x1="16" y1="6" x2="20" y2="6" />
          <circle cx="8" cy="12" r="2" />
          <line x1="4" y1="12" x2="6" y2="12" />
          <line x1="10" y1="12" x2="20" y2="12" />
          <circle cx="17" cy="18" r="2" />
          <line x1="4" y1="18" x2="15" y2="18" />
          <line x1="19" y1="18" x2="20" y2="18" />
        </svg>
        FIltrar
      </button>
    </div>
    <div class="main">
      <FiltersInmuebles class="sideBar" :class="[(filterModalState)?'active':'']" :filterModalState="filterModalState" @closeFilter="() =>filterModalState=false"></FiltersInmuebles>
      <div class="main__inmuebles" v-if="inmueblesList.data.length>0">
        <div class="inmuebles__grid" >
          <CardInmuebleList v-for="inmueble in inmueblesList.data" :key="inmueble.id" :inmueble="inmueble"
            @showDetail="showDetail" @showContactForm="showContactForm" />
        </div>
        <Pagination :LastPages="inmueblesList.last_page" />
      </div>
      <div class="not__found" v-else>
        <h5>
          No se han encontrado Inmuebles
        </h5>
      </div>
    </div>
  </div>
  <modalSide v-if="sideBarState" @close="sideClose" ref="modalInmueble" titulo="Detalle del inmueble"   size="md" >
    <component :is="DetailInmueble" :inmuebleSeleted="inmuebleSeleted" @closeModal="sideClose"/>
  </modalSide>
  <v-modal v-if="stateContact"  @close="stateContact=false" titulo="Contactar" size="xs" center>
    <contactAgente :infoAgente="infoAgente" @showInfoContact="showInfoContact()"></contactAgente>
  </v-modal>
  <v-modal v-if="stateInfo"  @close="stateInfo=false" titulo="Información de contacto" size="xs" center>
    <infoDetailContact :inmuebleSeleted="inmuebleSeleted" ></infoDetailContact>
  </v-modal>
</template>

<script setup>

// COMPONENTES
import CardInmuebleList from './components/cardInmuebleList.vue';
import modalSide from "@/components/modalSide.vue";
import VModal from "@/components/vModal.vue";
import DetailInmueble from './components/DetailInmueble.vue';
import contactAgente from './components/contactAgente.vue';
import infoDetailContact from './components/infoDetailContact.vue'

import Pagination from '@/components/PaginationMain.vue'
import FiltersInmuebles from './components/FiltersInmuebles.vue';
import { computed, onMounted, ref,defineComponent } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
let inmuebleSeleted = ref({});
let sideBarState = ref(false);
let stateContact = ref(false);
let stateInfo = ref(false);
let filterModalState=ref(false);


defineComponent()
onMounted(() => {
  store.dispatch('AppInmuebles/getInmuebles');
  store.dispatch('AppInmuebles/getFilters');
});

const inmueblesList = computed(() => store.state.AppInmuebles.grid);
const infoAgente = computed(() => {
  return {
    api: 'api/clientes-interested',
    id_property: inmuebleSeleted.value.id,
    userId:inmuebleSeleted.value.user_id
}
  }
);


async function showDetail(payload) {
  inmuebleSeleted.value = payload
  sideOpen(true)
}
function sideClose() {
  sideBarState.value = false;
}

function sideOpen(value) {
  sideBarState.value = value;
}
function showFilter(){
  filterModalState.value=true
}
function showContactForm(payload){
  inmuebleSeleted.value = payload
  stateContact.value = true
}

function closeModal(){
  stateContact.value=false
}

function showInfoContact(){
  stateInfo.value=true
  closeModal()
}
// function mostrarPosicion(posicion) {
//       var ubicacion = document.getElementById("ubicacion");
//       ubicacion.innerHTML = "Latitud: " + posicion.coords.latitude + "<br>Longitud: " + posicion.coords.longitude;
//     }

//     function errorPosicion(error) {
//       alert("Error al obtener la ubicación: " + error.message);
//     }


</script>
<style>
:root{
  --background-color-filter:#f4f4f4;
}
</style>

<style scoped lang="scss">

.icon__filter{
  fill: var(--color-primary);
  stroke: var(--color-primary);
}
.container-inmuebles{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px 100px;
  margin:3rem 0;
}
.main{
  display: flex;
  width: 100%;
  gap: 2rem;
}
.not__found{
  display: flex;
  width: 100%;
  justify-content: center;
  color: var(--color-primary);
}
.main__inmuebles{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}
.sideBar{
  min-width: 250px;
}
.body__main{
  width: 100%;
}
.container-inmuebles__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 10px;
}
.btn-filter{
  display: none;
}
.title__inmuebles {

  font-size: bold;
}

.inmuebles__grid {
  width: 100%;
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-auto-rows: auto;
}


@media (max-width:980px) {
  .sideBar{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    z-index: 10;
    overflow: auto;
  }
  .sideBar.active{
    display: flex;
    transform: translateX(0);
    animation: slideIn 1s forwards;
  }

  .btn-filter{
  display: flex;
  align-items: center;
  border: 2px solid var(--color-primary);
  padding: 4px;
  background-color: white;
  z-index: 10;
  color: var(--color-primary);
  border-radius: 10px;

}
}

@media (max-width: 600px) {
  .container-inmuebles{
    position: relative;
  }
  .container-inmuebles{
  padding: 0 1rem;
}
}



</style>