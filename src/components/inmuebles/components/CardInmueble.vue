<template>
  <div class=" card-box-a card-shadow" style="width: 18rem;" @click="()=>$emit('showDetail',true)">
    <div class="img-box-a">
      <img src="https://s.yimg.com/ny/api/res/1.2/0kG83sCQiW14KCRB10GoOQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUyNw--/https://media.zenfs.com/en/smartasset_475/21759e36688ba0f43fc0796ca627e979" 
        class="img-a "
        alt="...">
    </div>
    <div class="card-overlay">
      <div class="card-overlay-a-content">
        <div class="card-header-a">
          <h2 class="card-title-a">
          </h2>
        </div>

      </div>
    </div>
    <div class="card-footer-a">
      <ul class="card-info d-flex justify-content-around">
        <li>
          <h4 class="card-info-title">Area</h4>
          <span>340m
            <sup>2</sup>
          </span>
        </li>
        <li>
          <h4 class="card-info-title">Beds</h4>
          <span>2</span>
        </li>
        <li>
          <h4 class="card-info-title">Baths</h4>
          <span>4</span>
        </li>
        <li>
          <h4 class="card-info-title">Garages</h4>
          <span>1</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  import {defineProps} from 'vue';  
  let props=defineProps({
  inmueble: Object
})
  console.log(props)


</script>

<style scoped>

.img-box-a{
  width: 100%;
  height: 100%;
}
.card-footer-a {
  width: 100%;
  position: absolute;
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
  border-radius: 10px;
}
.card-box-a:hover{
  cursor: pointer;
  box-shadow: 0 0 10px var(--color-primary);
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
  object-fit: fill;
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
    bottom: 60px;
  }
  .card-box-a:hover .card-body-a {
    padding-bottom: 1rem;
  }
  .card-overlay-a-content {
  transition: all .5s ease-in;
  position: absolute;
  width: 100%;
  bottom: 0px;
  z-index: 2;
}

.card-box-a:hover .card-overlay-a-content {
    bottom: 60px;
  }

  .card-overlay-a-content {
    bottom: -20px;
  }

  @media (min-width: 768px) and (min-width: 768px) {
  .card-box-a:hover .card-overlay-a-content {
    bottom: 60px;
  }
}

@media (min-width: 768px) and (min-width: 992px) {
  .card-box-a:hover .card-overlay-a-content {
    bottom: 64px;
  }
}

@media (min-width: 992px) {
  .card-box-a .price-a,
  .card-box-b .price-a {
    font-size: 1rem;
  }
}

</style>