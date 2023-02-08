
<template>
  <div  class="container__home">
    <HomeApp/>
    <CarrouselApp/>
    <TableInmuebles/>
    <BlogApp/>
  </div>
</template>


<script setup>
// import { onMounted,computed} from 'vue';
// import { useStore } from 'vuex';

// COMPONENTS
import HomeApp from '@/components/header/HeaderApp.vue'
import CarrouselApp from '@/components/carrousel/CarrouselApp.vue'
import TableInmuebles from '@/components/inmuebles/TableInmuebles.vue'
import BlogApp from '@/components/blogs/BlogApp.vue';
// const store = useStore()

// const inmueblesList = computed( () => store.state.AppInmuebles.list)

// onMounted(
//   () =>{
//     console.log()
//     store.dispatch('AppInmuebles/getListInmuebles');
//   }
// )

</script>

<style>
.container__home{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

</style>