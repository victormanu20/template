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
      <div class="form-group"  v-for="item in filterCheck" :key="item.label" >
        <FilterCheck :props="item" @handleCheckItem="(payload)=>formFilters[item.id] = payload"></FilterCheck>
      </div>
      <div class="form-group" v-for="filter in filtrosSelect" :key="filter.label">
        <SelectFilterPosition 
        :label="filter.label" 
        :optionProps="filter.props"
         @selectItem="(payload)=> (payload )?formFilters[filter.id] = payload.id:formFilters[filter.id] =payload"
         >
         </SelectFilterPosition>
      </div>
    </div>
  </div>
</template>

<script setup >
import { onMounted,computed,watch,reactive,defineProps,defineEmits } from 'vue';
import { useStore } from 'vuex';
import FilterCheck from './filterCheck.vue';
// import SelectFilter from './SelectFilter.vue'
import SelectFilterPosition from './SelectFilterPosition.vue';
const store = useStore();
const emit = defineEmits(['closeFilter']);

let filterCheck= reactive([
  {
    id:'habitaciones',
    label:'habitaciones'
  },
  {
    id:'banos',
    label:'baños'
  }
])

defineProps({
  filterModalState:{
    type:Boolean
  }
})

let formFilters= reactive({
  tipo_inmueble:'',
  tipo_negocio:'',
  pais_id:'48',
  estado_id:'',
  ciudad_id:'',
  zona_id:'',
  barrio_id:'',
  habitaciones:null,
  banos:null
})
// let pais_id=ref();
// let estado_id=ref();
// let ciudad_id=ref();
// let zona_id=ref();
// let barrio_id=ref();
let filtrosSelect = computed(()=> store.state.AppInmuebles.filtros.filtro)

onMounted(() => {
  watchFilterCheck()
  watchFilterPosition()
  watchFilterType()

})

function closeFilter(){
  emit('closeFilter')
}

function getUbicacion(id, location,prop){
  console.log('ejecuto',id)
  store.dispatch('AppInmuebles/getUbicacion', {id, location, prop});
}

function watchFilterPosition(){
  let props = ['pais_id', 'estado_id', 'ciudad_id', 'zona_id', 'barrio_id'];
  //RECORRER LAS DFTES PROPS DE LOS FILTROS POR UBICACION
  for (let i = 0; i < props.length; i++) {
    watch(()=>formFilters[props[i]], () =>{
      console.log('position',formFilters[props[i]]);
      if(formFilters[props[i]]!=null){
      let id= formFilters[props[i]];
        let location = filtrosSelect.value[props[i]].api;
        let prop = props[i+1]
        getUbicacion(
          id,
          location,
          prop
        )
        setFilters()
      }else{
        formFilters[props[i]]=null
        // store.commit('AppInmuebles/CLEAN_FILTER_POSITION',props[i])
        setFilters()
      }
    })
  }
}
function watchFilterType(){
  let props = ['tipo_inmueble','tipo_negocio'];
  //RECORRER LAS DFTES PROPS DE LOS FILTROS POR UBICACION
  for (let i = 0; i < props.length; i++) {
    watch(()=>formFilters[props[i]], () =>{
      setFilters()
    })
  }
}
function watchFilterCheck(){
  //RECORRER LAS DFTES PROPS DE LOS FILTROS POR UBICACION
  for (let item of filterCheck) {
    watch(()=>formFilters[item.id], () =>{
      setFilters()
    })
  }
}

function setFilters() {
  let body = {};
  for (let prop in formFilters) {
    if (formFilters[prop]){
      body[prop] = formFilters[prop];
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
  border: 2px solid var(--color-primary);
  border-radius: 0 15px 15px 0;
  height: auto;
  padding: 16px;
}
.filter__title{
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: bold;
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