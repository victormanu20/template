<template>
  <div class=" card-box-a card-shadow" style="width: 100%;"  v-if="itemBlog" >
    <div class="img-box-a">
      <img :src="itemBlog.image" 
        class="img-a "
        :alt="itemBlog.titulo">
    </div>
    <div class="card-overlay">
      <div class="card-overlay-a-content">
        <div class="card-header-a">
          <h2 class="card-title-a">
            {{ itemBlog.titulo }}
          </h2>
        </div>

      </div>
    </div>
    <div class="card-footer-a ">

      {{ itemBlog.descripcion }}
    </div>
  </div>
</template>
<script  setup>
import {  defineProps } from 'vue';
defineProps({
  itemBlog:{
    type: Object
  }
})

</script>

<style scoped>
.card-title-a{
  color: var(--color-secundary);
  font-size: 1.3rem;
}

.img-box-a{
  width: 100%;
  height: 100%;
}
.img-a {
  width: 100%;
}
.card-footer-a {
  position: absolute;
  width: 100%;
  height: 80px;
  z-index: 2;
  bottom: 0;
  background-color: #2eca6a;
}

.card-info .card-info-title {
  font-size: 1rem;
  color: #313131;
}
.card-info {
  list-style: none;
  margin-bottom: 0;
  padding: .5rem 0;
}

.card-box-a{
  position: relative;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-box-a:hover{
  cursor: pointer;
  box-shadow: 0 0 20px var(--color-primary);
}
.card-shadow {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-shadow:before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 27%, rgba(0, 0, 0, 0.65) 90%);
}

.img-a{
  height: 100%;
  object-fit: cover;
}
.card-box-a .img-a{
  transition: .8s all ease-in-out;
}
.grid .card-box-a{
    margin-bottom: 2.5rem;
  }

  .card-box-a:hover .img-a{
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .card-box-a .img-a{
  transition: .8s all ease-in-out;
}

  .card-box-a .price-a,
  .card-box-b .price-a {
    font-size: .9rem;
  }

  .card-box-a:hover .card-overlay-a-content {
    bottom: 80px;
  }
  .card-box-a:hover .card-body-a {
    padding-bottom: 1rem;
  }
  .card-overlay-a-content {
  transition: all .5s ease-in;
  position: absolute;
  width: 100%;
  bottom: 0px;
  padding: 0 4px;
  z-index: 2;
}
.card-info_detail{
  color: var(--color-secundary);
}
.card-box-a:hover .card-overlay-a-content {
    bottom: 80px;
  }

.card-overlay-a-content {
  bottom: -60px;
}

  @media (max-width: 768px) {
  .card-overlay-a-content {
    bottom: 80px;
  }
}


</style>