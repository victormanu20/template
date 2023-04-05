<template>
  <!-- <div id="carouselExampleAutoplaying" class="carousel slide"  data-bs-ride="carousel">
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
        <img src="https://s.wsj.net/public/resources/images/BN-XM808_camuto_M_20180215145322.jpg" class="d-block w-100 carrousel__image" alt="...">
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
    {{ banner }}
  </div> -->


  <section id="Banner" class="sectionTemplate py-0">
		<div class="slider " ref="slider">
			<div v-if="banners.length > 0">
				<div class="wrapperSlick"  >
							<div class="banner-container" v-for="(item,index) in banners" :key="item.id" :class="{ 'active': index===posBanner }">
								<picture>
									<source media="(min-width:992px)" :srcset="(item.imagen)?item.imagen:'https://res.cloudinary.com/dppmjy7uj/image/upload/v1676564836/banners-template/laptop.jpg'">
									<source media="(min-width:700px)" :srcset="(item.imagen)?item.imagen:'https://res.cloudinary.com/dppmjy7uj/image/upload/v1676565646/banners-template/tablet.jpg'">
									<img class="img-banner" :srcset="(item.imagen)?item.imagen:'https://res.cloudinary.com/dppmjy7uj/image/upload/v1676565923/banners-template/movil.jpg'" alt="Banner">
								</picture>
								<div class="overlay"></div>
								<div class="content-banner">
									<h2 class="title-banner">{{item.titulo}}</h2>
									<div class="text-banner" v-html="item.descripcion">
									</div>
									<div class="link-banner">
										<button class="btn"  @click="handlePageINmuebles()">Ver más</button>
									</div>
							</div>
						</div>
						<!-- <a class="carousel-control-prev button-carrousel" role="button" data-slide="prev" @click="prevIMage()">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>
						</a>
						<a class="carousel-control-next button-carrousel" role="button" data-slide="next" @click="nexImage()">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
              </svg>
						</a> -->
				</div>
			</div>
			<div v-else>
				<div class="wrapperSlick">
					<div class="banner-container">
						<picture class="image-banner">
							<source media="(min-width:992px)" srcset="https://res.cloudinary.com/dppmjy7uj/image/upload/v1676564836/banners-template/laptop.jpg">
							<source media="(min-width:700px)" srcset="https://res.cloudinary.com/dppmjy7uj/image/upload/v1676565646/banners-template/tablet.jpg">
							<img class="img-banner" srcset="https://res.cloudinary.com/dppmjy7uj/image/upload/v1676565923/banners-template/movil.jpg" alt="Banner">
						</picture>
						<!-- <div class="overlay"></div>
						<div class="content-banner">
							<h2 class="title-banner"></h2>
							<div class="text-banner" >
							</div>
							<div class="link-banner">
								<a class="btn" > </a>
							</div>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>

import { onMounted,computed,ref,onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

const router = useRouter()
const store =useStore()
let posBanner=ref(0)
let interval = ref()
onMounted(() => {
  store.dispatch('AppBanner/getBanners')
  // autoIncrement()
  }
)
onUnmounted(() =>{
  clearInterval(interval)
})
const banners = computed(() => store.state.AppBanner.banners)
console.log(banners)

// function autoIncrement(){
//   interval.value=setInterval(()=> {
//     nexImage()
//   }
//   ,3000)
// }
// function nexImage(){
//   if(posBanner.value<banners.value.length-1){
//     posBanner.value++
//   }else{
//     posBanner.value=0
//   }
// }
// function prevIMage(){
//   if(posBanner.value>0){
//     posBanner.value--
//   }else{
//     posBanner.value=banners.value.length-1
//   }
// }

function handlePageINmuebles(){
  router.push({
    name: 'inmuebles',
  })
}

</script>
<style scoped lang="scss">
/* .icon-button__carrousel{
  width: 2rem;
  height: 2.5rem;
  fill: var(--color-primary);
}
.container-carrousel__images{
  height: 80vh;

}
@media (max-width:700px) {
  .container-carrousel__images{
  height: 20rem;

}
}
.carrousel__image{
  object-fit: cover;
  height: 100%;
}
.carousel-item{
  height: 100%;
} */


#Banner .slider {
		position: relative;
		display: flex;
		margin:0;
		--carousel-button-color: #170724;
		--carousel-button-bg: #fff;
		--carousel-button-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%),
		0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

		--carousel-button-svg-width: 20px;
		--carousel-button-svg-height: 20px;
		--carousel-button-svg-stroke-width: 2.5;
		overflow: hidden;
	}
  .button-carrousel{
    svg{
      width: 40px;
      height: 50px;
      fill: var(--color-primary);
    }
  }
	.carousel__track{
		transform: none !important;
	}
	.wrapperSlick {
		width: 100%;
		flex-shrink: 0;
	}
	.banner-container {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 50px 100px;
		width: 100vw;
		min-height: 600px;
		display: none;
	}
	.banner-container .image-banner,
	.banner-container .img-banner {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.button-carrousel{
		width: 5% !important;
	}

	.banner-container .content-banner {
		position: absolute;
		z-index: 1;
		color: #fff;
		font-size: 20px;
		width: 40%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		bottom: 4rem;
	}

	.banner-container .overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(45deg, #000, #0000);
		mix-blend-mode: multiply;
	}

	.banner-container .title-banner {
		font-size: 3em;
		line-height: 1.2;
		margin-bottom: 1rem;
		width: 100%;
	}

	.banner-container .text-banner {
		font-size: 1.1em;
		line-height: 1.8;
	}

	.banner-container .link-banner .btn {
		font-size: 1.5rem;
		font-weight: 600;
		text-transform: uppercase;
    color: var(--color-primary);

	}

	.banner-container .link-banner {
		margin-top: 2rem;
	}

	.banner-container .text-banner > :first-child {
		margin-top: 0;
		padding-top: 0;
	}

	.banner-container .text-banner > :last-child {
		margin-bottom: 0;
		padding-bottom: 0;
	}
	.active{
		display: block;
	}

	.banner-container .title-banner::after {
		content: '';
		display: block;
		border-bottom: 4px solid var(--tm-color);
		width: 2em;
		margin-top: 6px;
	}
	@media(max-width: 991px){
		.banner-container .content-banner {
			width:auto;
      height: auto;
			font-size: 16px;
		}
	}
	@media(max-width: 767px){
		.banner-container {
			padding: 50px;
			justify-content: flex-end;
			min-height: 70vh;
		}
		.banner-container .overlay{
			background: linear-gradient( to top,#000, #0000);
		}
		.banner-container .content-banner {
			font-size: 14px;
		}
		.banner-container .title-banner {
			font-size: 2em;
		}
		.banner-container .text-banner {
			display: none;
		}
		.banner-container .link-banner{
			margin-top: 1rem;
		}
		.banner-container .link-banner .btn {
			font-size: 1rem;
		}
	}
	#Banner .slider .carousel__dots {
		top: initial;
		bottom: 15px;
		z-index: 1;
	}
	#Banner .slider .carousel__dots .carousel__dot::after{
		display:none;
	}
	#Banner .slider .carousel__dots .carousel__dot{
		background:#ffffff;
		height: 6px;
		width:15px;
		margin:4px;
		border-radius:2px;
		box-shadow: 2px 2px 5px #00000026;
		transition:all ease 0.4s;
	}

	#Banner .slider .carousel__dots .carousel__dot.is-selected {
		width:22px;
		background:var(--tm-color)
	}


</style>