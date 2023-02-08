<template>
  <div id="carouselExampleAutoplaying" class="carousel slide"  data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner container-carrousel__images">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="https://s.yimg.com/ny/api/res/1.2/0kG83sCQiW14KCRB10GoOQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUyNw--/https://media.zenfs.com/en/smartasset_475/21759e36688ba0f43fc0796ca627e979" class="w-100 carrousel__image " alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="https://s.wsj.net/public/resources/images/BN-XM808_camuto_M_20180215145322.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item " data-bs-interval="3000">
        <img src="https://s.yimg.com/ny/api/res/1.2/0kG83sCQiW14KCRB10GoOQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUyNw--/https://media.zenfs.com/en/smartasset_475/21759e36688ba0f43fc0796ca627e979" class=" w-100 carrousel__image" alt="...">
      </div>
    </div>
    <button 
      class="carousel-control-prev carrousel__button" 
      type="button" 
      data-bs-slide="prev"
      data-bs-target="#carouselExampleAutoplaying"
      >
      <svg class="icon-button__carrousel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
      </svg>
      <span class="visually-hidden">Previous</span>
    </button>
    <button 
      class="carousel-control-next carrousel__button" 
      type="button" 
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next">
      <svg class="icon-button__carrousel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
      </svg>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup>
</script>
<style scoped>
.icon-button__carrousel{
  width: 2rem;
  height: 2.5rem;
  fill: var(--color-primary);
}
.container-carrousel__images{
  height: 80vh;

}
.carrousel__image{
  object-fit: contain;
}
</style>