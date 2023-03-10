<template>
  <div class="container__inmuebles">
    <h3 class="title__inmuebles">INMUEBLES</h3>

    <div class="inmuebles__grid" v-if="inmueblesList.data">
      <CardInmuebleList v-for="inmueble in inmueblesList.data" :key="inmueble.id" :inmueble="inmueble"
        @showDetail="showDetail" />
    </div>
  </div>
  <VModal v-if="sideBarState" @close="sideClose" titulo="Detalle del inmueble" sideBar size="xs">
    <DetailInmueble @showClose="showClose" :inmuebleSeleted="inmuebleSeleted" />
  </VModal>
  <div >
    <Pagination class="mx-n3" :LastPages="inmueblesList.last_page"  />
  </div>
</template>



<script setup>

import CardInmuebleList from './components/cardInmuebleList.vue';
import VModal from "@/views/componente/modal";
import DetailInmueble from './components/DetailInmueble.vue';
import Pagination from '@/components/PaginationMain.vue'
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
let inmuebleSeleted = ref({})
let sideBarState = ref(false)



onMounted(() => {
  store.dispatch('AppInmuebles/getInmuebles');
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

<style scoped>
.container__inmuebles {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 15rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
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



.title__inmuebles {
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
  font-size: bold;
}

.inmuebles__grid {
  display: grid;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: 30rem;
}
</style>