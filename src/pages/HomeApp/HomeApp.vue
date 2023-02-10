
<template>
  <div  class="container__home">
    <CarrouselAppHome/>
    <InmueblesHome/>
    <BlogsHome/>
  
  </div>
</template>


<script setup>
// import { onMounted,computed} from 'vue';
// import { useStore } from 'vuex';

// COMPONENTS
// import HomeApp from '@/components/header/HeaderApp.vue'
import CarrouselAppHome from './components/CarrouselApp.vue'
import InmueblesHome from './components/InmueblesHome.vue'
import BlogsHome from './components/HomeBlogs.vue'
// import BlogApp from '@/components/blogs/BlogApp.vue';
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