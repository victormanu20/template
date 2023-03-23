<template>
    <div class="container__check">
        <label for="exampleFormControlSelect1" class="select-filter__label">{{ label }}</label>
        <div v-for="(item) in arrayCheck" :key="item.id" >
            <input type="checkbox" class="btn-check" :id="item.id" autocomplete="off">
            <label class="btn btn-outline-primary" :for="item.id">{{ item.label }}</label>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const arrayCheck = ref([
    {id:1,label:'1'},{id:2,label:'2'},{id:3,label:'3'},{id:4,label:'4'},{id:5,label:'5+'},
    ])
</script>

<style scoped>
.container__check{
    display: flex;
    flex-direction: row;
    gap: 6px;
}
</style>