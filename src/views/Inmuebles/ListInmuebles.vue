<template>
  <div class="container-inmuebles">
    <div class="container-inmuebles__header">
      <h3 class="title__inmuebles">INMUEBLES</h3>
      <button class="btn-filter" @click="showFilter()">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal icon-svg__filter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
      <FiltersInmuebles class="sideBar"></FiltersInmuebles>
      <div class="inmuebles__grid" v-if="inmueblesList.data">
            <CardInmuebleList v-for="inmueble in inmueblesList.data" :key="inmueble.id" :inmueble="inmueble"
              @showDetail="showDetail" />
      </div>
    </div>
    <Pagination class="mx-n3" :LastPages="inmueblesList.last_page"  />
  </div>
  <VModal v-if="sideBarState" @close="sideClose" titulo="Detalle del inmueble" sideBar size="md">
    <DetailInmueble  :inmuebleSeleted="inmuebleSeleted" />
  </VModal>
  <VModal v-if="filterModalState" @close="sideClose" titulo="Detalle del inmueble" sideBar size="md">
    <FiltersInmuebles ></FiltersInmuebles>
  </VModal>
</template>

<script setup>

// COMPONENTES
import CardInmuebleList from './components/cardInmuebleList.vue';
import VModal from "@/components/modal.vue";
import DetailInmueble from './components/DetailInmueble.vue';
import Pagination from '@/components/PaginationMain.vue'
import FiltersInmuebles from './components/FiltersInmuebles.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
let inmuebleSeleted = ref({})
let sideBarState = ref(false)
let filterModalState=ref(false)



onMounted(() => {
  store.dispatch('AppInmuebles/getInmuebles');
  store.dispatch('AppInmuebles/getFilters');

});

const inmueblesList = computed(() => store.state.AppInmuebles.grid);

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
</script>
<style>
:root{
  --background-color-filter:#f4f4f4;
}
</style>

<style scoped>
.container-inmuebles{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  padding: 0 8rem;
  margin-bottom: 3rem;
  z-index: 10;
}
.main{
  display: flex;
  width: 100%;
  gap: 2rem;
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
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
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
  grid-auto-rows: 34rem;
}

@media (max-width:980px) {
  .sideBar{
    display: none;
  }
  .btn-filter{
  display: flex;
}
}
</style>