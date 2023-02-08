<template>
  <div class="container__inmuebles">
    <h3 class="title__inmuebles">BLOGS</h3>
    <div class="inmuebles__grid">
      <CardInmueble/>
    </div>
    <DetInmueble/>
  </div>
</template>

<script setup>
  import CardInmueble from '../inmuebles/components/CardInmueble.vue';
  import DetInmueble from '../inmuebles/components/DetInmueble.vue'
</script>

<style scoped>
.container__inmuebles{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 4rem;
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
  grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
  grid-template-rows: 450px;
}

</style>