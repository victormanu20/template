<template>
  <div >
    <div class="container-filter">
      <label class="filter__title">Filtar por:</label>
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
import { onMounted,ref,computed,watch,reactive } from 'vue';
import { useStore } from 'vuex';
import SelectFilter from './SelectFilter.vue'
import SelectFilterPosition from './SelectFilterPosition.vue';
const store = useStore();

let select = ref();
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
  console.log('filtros',filtrosSelect.value)
  watchFilterPosition()
})

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

.filter__title{
}
</style>