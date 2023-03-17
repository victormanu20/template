<template>
  <div v-if="listIMages.length>0" class="slider__images">
    <div ref="slider" id="mainCarousel" class="carousel">
      <div class="carousel__slide" v-for="(image,index) in listIMages" :key="index">
        <img :data-lazy-src="image.url" class="image-slider"/>
      </div>
    </div>
    
    <div ref="sliderThumbnails"  id="navCarousel" class="carousel">
      <div class="carousel__slide" v-for="(image,index) in listIMages" :key="index">
        <img :data-lazy-src="image.url" />
      </div>
    </div>

  </div>
</template>
<script setup> 
	import { ref, onMounted , defineProps} from "vue"
import { Carousel } from "@fancyapps/ui";

defineProps({
  listIMages:{
    type:Array
  }
})

const slider = ref(null);
const sliderThumbnails=ref(null);

onMounted(() => {
  initSlider()
});

const initSlider = () =>{
  const mainCarousel = new Carousel(slider.value, {
    Dots: false,
  });
  
  new Carousel(sliderThumbnails.value, {
    Sync: {
      target: mainCarousel,
    },
    Dots: false,
    Navigation: false,
  
    infinite: false,
    center: true,
    slidesPerPage: 1,
  });

}


</script>

<style >
#mainCarousel {
  --carousel-button-bg: var(--color-primary);

  --carousel-button-width: 48px;
  --carousel-button-height: 48px;

  --carousel-button-svg-width: 27px;
  --carousel-button-svg-height: 27px;
  --carousel-button-svg-stroke-width: 1.5;

  --carousel-button-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px
      0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px
      4px -1px;
}

.slider__images{
  max-width: 700px;
  margin: 0 auto;
}
.carousel__button.is-prev {
  left: -20px;
}

.carousel__button.is-next {
  right: -20px;
}
.image-slider{
  max-height: 500px;
  width: 100%;
}



.carousel__slide {
  width: 100%;
  padding: 0;
  line-height: 0;
}
.carousel__slide img {
  width: 100%;
}

#navCarousel .carousel__slide {
  width: 100px;
  max-width: 80px;
  margin: 0 5px;
  cursor: pointer;
}

#navCarousel {
  margin-top: -10px;
}

#navCarousel .carousel__slide img{
  border-radius: 5px;
}

#navCarousel .carousel__slide.is-nav-selected:before{
  content: '';
  position: absolute;
  display: block;
  border-radius: 5px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #000, #131313);
  opacity: 0.7;
}

@media (max-width: 500px) {
  .image-slider{
    width: 100%;
  }
}

</style>