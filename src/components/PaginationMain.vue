<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
					<div class="col-12">
						<ul class="pagination mt-3 mb-0 justify-content-center" aria-label="...">
							<li class="page-item arrow-p left">
								<a @click.prevent="prevPage" href="#" class="page-link">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="icon-button">
										<path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg>
								</a>
							</li>
							<li class="page-item" v-for="item in LastPages" :key="item" :class="[(pageOn==item)?'active':'', (item>=min && item<=max)?'show__item':'disable__item']">
								<a class="page-link" @click.prevent="setPage(item)">{{item}}</a>
							</li>
							<li class="page-item">
								<a  class="page-link" >...</a>
							</li>
							<li  class="page-item" :class="[(pageOn==LastPages)?'active':'']" >
								<a class="page-link" @click.prevent="setPage(LastPages)">{{ LastPages }}</a>
							</li>
							<li class="page-item arrow-p right" >
								<a @click.prevent="nextPage" href="#" class="page-link">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="icon-button">
										<path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
								</a>
							</li>
						</ul>
					</div>
			</div>
		</div>
	</div>

</template>

<script setup>
import { defineProps,ref,watch,onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

let pageOn = ref(1)
let min =ref(1)
let max= ref(4);
const props=defineProps({
  LastPages:{
    type:Number
  }
})

onMounted(() => {
	console.log(props.LastPages)
}),

watch(pageOn ,()=>{
  console.log(pageOn.value);
	getData(
		{page: pageOn.value},
		{
			overlay: 'AppInmuebles/SET_OVERLAY',
			dispatch: 'AppInmuebles/getInmuebles' 
			});
})


function nextPage(){
	if( pageOn.value)
  pageOn.value++;
	max.value++;
	min.value++;
}
function prevPage(){
	if(pageOn.value>1){
		pageOn.value--;
		max.value--;
	min.value--;
	}
}
function setPage(item){
	if(pageOn.value<=props.LastPages){
		pageOn.value=item;
	}
}

function getData(params, {overlay, dispatch}){
  store.commit(overlay, true);
  store.dispatch(dispatch, params)
  .then(() => {
    store.commit(overlay, false);
})}

</script>

<style>
.page-item{
	cursor: pointer;
}
.icon-button{
	width: 0.9em;
	height: 0.9em;
	fill: var(--color-primary);
}
.icon-button:hover{
	background-color: var(--color-primary);
	fill: var(--c);
}
.show__item{
	display: block;
}
.disable__item{
	display: none;
}
</style>