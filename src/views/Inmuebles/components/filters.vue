<template>
	<b-form class="filterForm">
		<b-form-group v-for="(item, prop) in filtros" :label="item.label" :key="prop">
			<component 
			v-model="item.value"
			v-bind="item.props" 
			:is="item.component" 
			:disabled="item.props.options ? item.props.options.length == 0 : false"
			@input="setFilters"
			/>
		</b-form-group>
		<b-button @click="clearFiltro">Limpiar</b-button>
	</b-form>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

onMounted(() => {
  store.dispatch('AppInmuebles/getFilters')
  watchUbicaciones();
}),

const filtros = computed(()=> store.state.AppInmuebles.filtros.filtro);

// function watchUbicaciones(){
//   let props = ['pais_id', 'estado_id', 'ciudad_id', 'zona_id', 'barrio_id'];

//   for(let prop of props){
//     this.$watch(() => this.filtros[prop].value,
//       (id) => {
//         this.resetUbicacion(props, prop);
//         if(prop != props[props.length - 1] && id != null){
//           let index = props.indexOf(prop);
//           this.getUbicacion({
//             id, 
//             location: this.filtros[prop].api, 
//             prop: props[index +1]
//           });
//         }
//       });
//   }
// },

// function resetUbicacion(props, prop){
//   let keys = props.map(item => item),
//       index = keys.indexOf(prop);
//   if(prop){
//     keys.shift();
//     keys.splice(0, index);
//   }
//   for(let key of keys){
//     Object.assign(this.filtros[key], { value: null });
//     Object.assign(this.filtros[key].props, { options: [] });
//   }
// }
// function getUbicacion({id, location, prop}){
//   this.$store.dispatch('AppInmuebles/getUbicacion', {id, location, prop});
// },
// function setFilters(){
//   let body = {},
//   {filtros} = this;

//   for(let prop in filtros){
//     if(filtros[prop].value)
//       body[prop] = filtros[prop].value;
//     else
//       delete body[prop];
//   }
//   this.getInmuebles(Object.keys(body).length == 0 ? null : body);
// }
// function clearFiltro(){
//   for(let prop in this.filtros)
//     this.filtros[prop].value = null;

//   this.getInmuebles();
// }
// function getInmuebles(data = null){
//   this.$store.commit('AppInmuebles/DATA_FILTER', data);
//   this.$emit('change', true);
//   this.$store.dispatch('AppInmuebles/getInmuebles')
//   .then(() => {
//     this.$emit('change', false);
//   });
// },

</script>

<style lang="css" scoped>
	/*Filtro*/
	.textRange {
		display: flex;
		margin-top: -4px;
		font-size: 12px;
		justify-content: space-between;
		color: #666;
		padding: 0px 4.5px;
	}
	.textRange .line {
		display: block;
		height: 6px;
		margin: 0 2.5px 6px;
		border-left: 1px solid #9b9b9b;
	}
	.textRange .step {
		align-items: center;
		text-align: left;
	}
	.textRange .step:first-child {
		align-items: flex-start;
	}
	.textRange .step:last-child {
		align-items: flex-end;
	}
	.textRange .value {
		line-height: 1;
		width: 0.5em;
	}
	form.filterForm .form-group {padding-bottom: 1rem;border-bottom: 1px solid #ebe9f1;}
	@media(max-width: 991px){
		.panelSideBar {width: 280px;
			max-width: none;
			position: fixed;
			z-index: 99;
			background: #fff;
			padding: 20px;
			box-shadow: 3px 3px 10px #00000026;
			height: calc(100vh - 90px);
			top: 90px;
			left: 0;
			overflow-y: auto;
			transition: transform 0.4s ease;
		}
	}
</style>