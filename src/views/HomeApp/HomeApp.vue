
<template>
  <div  class="container__home">
    <CarrouselAppHome/>
    <InmueblesHome/>
    <BlogsHome/>
  </div>
</template> 


<script setup>
  // COMPONENTS
  import CarrouselAppHome from './components/CarrouselApp.vue';
  import InmueblesHome from './components/InmueblesHome.vue';
  import BlogsHome from './components/HomeBlogs.vue';

</script>

<style>
.container__home{
  display: flex;
  flex-direction: column;
}

</style>