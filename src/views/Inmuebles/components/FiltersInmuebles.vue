<template>
  <div >
    <div class="container-filter">
      <div class="container-filter__header">
        <label class="filter__title">Filtar por:</label>
        <span :class="[(filterModalState)?'active_btn':'disable_btn']" @click="closeFilter()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="btn-close">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
          </svg>
        </span>
      </div>
      <div class="form-group" v-for="filter in filtrosSelect" :key="filter.label">
        <SelectFilterPosition :label="filter.label" :optionProps="filter.props" @selectItem="(payload)=>formFilters.tipo_inmueble=payload"></SelectFilterPosition>
      </div>

      <div class="form-group">
        <SelectFilter :filter="filtrosSelect.tipo_inmueble.label" :array="filtrosSelect.tipo_inmueble.props.options" @selectItem="(payload)=>formFilters.tipo_inmueble=payload"></SelectFilter>
      </div>
      <div class="form-group">
        <SelectFilter :filter="filtrosSelect.tipo_negocio.label" :array="filtrosSelect.tipo_negocio.props.options" @selectItem="(payload)=>formFilters.tipo_negocio=payload"></SelectFilter>
      </div>
      <div class="form-group">
        <SelectFilterPosition :filter="filtrosSelect.pais_id.label" :array="filtrosSelect.pais_id.props.options" @selectItem="(payload)=>formFilters.pais_id=payload"></SelectFilterPosition>
      </div>
      <div class="form-group">
        <SelectFilterPosition :filter="filtrosSelect.estado_id.label" :array="filtrosSelect.estado_id.props.options" @selectItem="(payload)=>formFilters.estado_id=payload"></SelectFilterPosition>
      </div>
      <div class="form-group">
        <SelectFilterPosition :filter="filtrosSelect.ciudad_id.label" :array="filtrosSelect.ciudad_id.props.options" @selectItem="(payload)=>formFilters.ciudad_id=payload"></SelectFilterPosition>
      </div>
      <div class="form-group">
        <SelectFilterPosition :filter="filtrosSelect.zona_id.label" :array="filtrosSelect.zona_id.props.options" @selectItem="(payload)=>formFilters.zona_id=payload"></SelectFilterPosition>
      </div>
      <div class="form-group">
        <SelectFilterPosition :filter="filtrosSelect.barrio_id.label" :array="filtrosSelect.barrio_id.props.options"  @selectItem="(payload)=>formFilters.barrio_id=payload"></SelectFilterPosition>
      </div>
    </div>
  </div>
</template>

<script setup >
import { onMounted,ref,computed,watch,reactive,defineProps,defineEmits } from 'vue';
import { useStore } from 'vuex';
import SelectFilter from './SelectFilter.vue'
import SelectFilterPosition from './SelectFilterPosition.vue';
const store = useStore();
let select = ref();
const emit = defineEmits(['closeFilter']);


const props=defineProps({
  filterModalState:{
    type:Boolean
  }
})

const formFilters= reactive({
  tipo_inmueble:'',
  tipo_negocio:'',
  pais_id:'',
  estado_id:'',
  ciudad_id:'',
  zona_id:'',
  barrio_id:''
})
// let pais_id=ref();
// let estado_id=ref();
// let ciudad_id=ref();
// let zona_id=ref();
// let barrio_id=ref();
let filtrosSelect = computed(()=> store.state.AppInmuebles.filtros.filtro)

onMounted(() => {
  console.log(select.value)
  console.log('filtros',filtrosSelect.value);
  console.log('state',props.filterModalState)
  watchFilterPosition()
})

function closeFilter(){
  emit('closeFilter')
}

function getUbicacion(id, location,prop){
  store.dispatch('AppInmuebles/getUbicacion', {id, location, prop});
}

function watchFilterPosition(){
  let props = ['pais_id', 'estado_id', 'ciudad_id', 'zona_id', 'barrio_id'];
  //RECORRER LAS DFTES PROPS DE LOS FILTROS POR UBICACION

  for (let i = 0; i < props.length; i++) {
    console.log(i)
    watch(()=>formFilters[props[i]], () =>{
      console.log(formFilters[props[i]]);
      if(formFilters[props[i]]!=null){
      let id= formFilters[props[i]].id;
        let location = filtrosSelect.value[props[i]].api;
        let prop = props[i+1]
        getUbicacion(
          id,
          location,
          prop
        )
        setFilters()
      }
    })
  }
}

function setFilters() {
  let body = {};
  for (let prop in filtrosSelect.value) {
    console.log('prop',prop)
    if (formFilters[prop]){
      body[prop] = formFilters[prop].id;
      console.log('body',body)
    }
    else{
      delete body[prop];
    }
  }
  getInmuebles(Object.keys(body).length == 0 ? null : body);
}

function getInmuebles(data = null) {
  store.commit('AppInmuebles/DATA_FILTER', data);
  store.dispatch('AppInmuebles/getInmuebles')
    .then(() => {
      // this.$emit('change', false);
    });
}

</script>

<style scoped>
.container-filter{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--background-color-filter);
  height: auto;
  padding: 16px;
}

.container-filter__header{
  display: flex;
  justify-content: space-between;
}
.btn-close{
  width: 25px;
  height: 25px;
}

.disable_btn{

  display: none;
}
.active_btn{
  display: block;
}
</style>