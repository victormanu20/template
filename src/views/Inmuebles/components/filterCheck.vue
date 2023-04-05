<template>
    <label for="exampleFormControlSelect1" class="select-filter__label">{{ props.label }}</label>
    <div class="container__check">
            <button  v-for="(item) in arrayCheck" :key="item.id" class="check__btn" @click="handleCheck(item.id)" :class="[(checkItem==item.id)?'check__btn-checked':'']">{{ item.label }}</button>
    </div>
</template>
<script setup>
import { ref,defineProps,defineEmits } from 'vue';
const arrayCheck = ref([
    {id:1,label:'1'},{id:2,label:'2'},{id:3,label:'3'},{id:4,label:'4'},{id:5,label:'5+'},
    ])

const checkItem = ref()

const emit = defineEmits(['handleCheckItem'])

defineProps({
    props:{
        type:Object
    }
})
function handleCheck(id){
    checkItem.value=id;
    emit('handleCheckItem',id)
}
</script>

<style scoped>
.container__check{
    display: flex;
    flex-direction: row;
    gap: 6px;
}
.check__btn{
    padding: 6px;
    width: 40px;
    border-radius: 5px;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
}
.check__btn-checked{
    background-color: var(--color-primary);
    color: white;
}


.select-filter__label{
  font-size: 0.9em;
  color: var(--color-primary);
}
</style>