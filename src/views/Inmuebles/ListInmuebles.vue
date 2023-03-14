<template>
  <div class="container__inmuebles">
    <h3 class="title__inmuebles">INMUEBLES</h3>
    <div class="main">
      <FiltersInmuebles class="sideBar"></FiltersInmuebles>
      <div class="body__main">
          <div class="inmuebles__grid" v-if="inmueblesList.data">
            <CardInmuebleList v-for="inmueble in inmueblesList.data" :key="inmueble.id" :inmueble="inmueble"
              @showDetail="showDetail" />
          </div>
          <div >
            <Pagination class="mx-n3" :LastPages="inmueblesList.last_page"  />
          </div>
      </div>
    </div>
  </div>
  <VModal v-if="sideBarState" @close="sideClose" titulo="Detalle del inmueble" sideBar size="md">
    <DetailInmueble  :inmuebleSeleted="inmuebleSeleted" />
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

</script>
<style>
:root{
  --background-color-filter:#f4f4f4;
}

</style>

<style scoped>
.container__inmuebles {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 15rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  z-index: 10;
}
.main{
  display: flex;
  gap: 2rem;
}
.sideBar{
  width: 100%;
  max-width: 250px;
  padding: 16px;
  background-color: var(--background-color-filter);
}
@media (max-width:1400px) {
  .container__inmuebles {
    margin: 0 10rem;
  }
}

@media (max-width:900px) {
  .container__inmuebles {
    margin: 0 5rem;
  }
}

@media (max-width:600px) {
  .container__inmuebles {
    margin: 0 2rem;
  }
}
.title__inmuebles {
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
  font-size: bold;
}

.inmuebles__grid {
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-auto-rows: 34rem;
}
</style>