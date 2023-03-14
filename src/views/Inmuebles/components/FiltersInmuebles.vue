<template>
  <div>
    <h3>FILTROS</h3>
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
      <button @click="filter()"> filtar</button>
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

function filter(){
  console.log(formFilters.pais_id.id)
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
});
} else {
  /* geolocation IS NOT available */
}
}
function getUbicacion(id, location,prop){
  store.dispatch('AppInmuebles/getUbicacion', {id, location, prop});
}

function watchFilterPosition(){
  let props = ['pais_id', 'estado_id', 'ciudad_id', 'zona_id', 'barrio_id'];
  //RECORRER LAS DFTES PROPS DE LOS FILTROS POR UBICACION
  for (let i = 0; i < props.length; i++) {
    watch(()=>formFilters[prop], () =>{
      console.log(formFilters[prop]);
      let id= formFilters[prop].id;
        let location = filtrosSelect.value[prop];
        let prop = prop+1
        getUbicacion(
          id,
          location,
          prop
        )
    })
  }
}
// watch(()=>formFilters.pais_id,()=>{
//   console.log(formFilters.pais_id)
//   console.log(filtrosSelect.value['pais_id'])
//       if(formFilters.pais_id!=null){
//         let id= formFilters.pais_id.id;
//         let location = 'states';
//         let prop = 'estado_id'
//         getUbicacion(
//             id,
//             location,
//             prop
//         )
//       }
// })
// watch(()=>formFilters.estado_id,()=>{
//       if(formFilters.estado_id!=null){
//         let id= formFilters.estado_id.id;
//         let location = 'cities';
//         let prop = 'ciudad_id'
//         getUbicacion(
//             id,
//             location,
//             prop
//         )
//       }
// })
// watch(()=>formFilters.ciudad_id,()=>{
//       if(formFilters.ciudad_id!=null){
//         let id= formFilters.ciudad_id.id;
//         let location = 'zonas';
//         let prop = 'zona_id'
//         getUbicacion(
//             id,
//             location,
//             prop
//         )
//       }
// })
// watch(()=>formFilters.zona_id,()=>{
//       if(formFilters.zona_id!=null){
//         let id= formFilters.zona_id.id;
//         let location = 'barrio';
//         let prop = 'barrio_id'
//         getUbicacion(
//             id,
//             location,
//             prop
//         )

//       }
// })


</script>