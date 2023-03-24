<template>
  <div>
    <label for="exampleFormControlSelect1" class="select-filter__label">{{ label }}</label>
    <div class="container__select" >
      <select class="form-select" v-model="select" v-if="optionProps"> 
        <option  :value="item" v-for="(item) in optionProps.options" :key="item">{{ item[optionProps.label] }}</option>
      </select>
      <button class="btn_close" v-if="select" @click="handleClickEmpty()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  width="12">
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps,watch,ref,defineEmits } from 'vue';

let select = ref('')
const emit = defineEmits(['selectItem']);

watch(select,()=>{
  emit('selectItem',select.value)
})
defineProps({
  label:{
    type:String
  },
  optionProps:{
    type:Object
  }
})
function handleClickEmpty(){
  select.value=null
}

</script>
<style scoped>
.container__select{
  display: flex;
  background-color: white;
  gap: 12px;
  padding: 4px 8px;
  border-radius: 10px;
  border: 2px solid var(--color-primary);
  max-width: 320px;
}
.btn_close{
  fill: var(--color-primary);
  border: none;
  background-color: white;
}
.form-select{
  border: none;
}
.select-filter__label{
  font-size: 0.9em;
  color: var(--color-primary);
}
</style>