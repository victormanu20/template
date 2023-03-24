<template>
    <div class="container-info">
        <div class="info-header">
            <img v-if="inmuebleSeleted.inmueble_imagenes[0]" :src="inmuebleSeleted.inmueble_imagenes[0].url" :alt="inmuebleSeleted.titulo_inmueble" class="left-info">
            <div class="rigth-info">
                <p class="name-property">{{ inmuebleSeleted.titulo_inmueble }}</p>
                <p class="position__property"><span> Direccion: </span>{{ inmuebleSeleted.direccion }}</p>
                <p class="position__property">{{ inmuebleSeleted.estado_id.name }}, {{ inmuebleSeleted.ciudad_id.name }}.</p>

            </div>
        </div>
        <div class="footer">
            <p class="text">Gracias!, tu mensaje fue enviado, pronto te contactaremos.</p>
        </div>
        <div class="container__info-agent">
            <p>
                Puedes contactar con el anunciante si deseas.
            </p>
            <div class="table-info">
                <h4 class="title-table"> Datos del Agente</h4>
                <div class="row__info">
                    <p class="row__info-field">nombre</p>
                    <p>{{ inmuebleSeleted.user_id.userdata.primer_nombre }}</p>
                </div>
                <div class="row__info" @click="openWhatsApp()">
                    <p class="row__info-field">contacto whatsapp</p>
                    <p >{{ inmuebleSeleted.user_id.userdata.celular_whatsapp }}</p>
                </div>
                <div class="row__info" @click="openCel()" >
                    <p class="row__info-field">contacto para llamadas</p>
                    <p>{{ inmuebleSeleted.user_id.userdata.celular_movil }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props= defineProps({
    inmuebleSeleted:{
        type:Object
    }
})
function openWhatsApp() {
    if (props.inmuebleSeleted.user_id.userdata.celular_whatsapp) {
        window.open(`https://wa.me/+57${props.inmuebleSeleted.user_id.userdata.celular_whatsapp}`, "_blank");
    }
}
function openCel() {
    window.open(`tel:${props.inmuebleSeleted.user_id.userdata.celular_movil}`)
}
</script>

<style scoped>

p{
    margin: 0;
}
.container-info{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.info-header{
    display: flex;
    width: 100%;
    gap: 1rem;
}
.left-info{
    max-width: 120px;
}
.rigth-info{
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.footer{
width: 100%;
background-color: #dff0d8;
color: black;
padding: 12px;
text-align: center;
}
.table-info{
    display: grid;
    flex-direction: column;
    width: 450px;
    margin: 0 auto;
    gap: 10px;
}
.row__info{
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 2px solid var(--color-primary);
}
.row__info:hover{
    cursor: pointer;
}
.container__info-agent{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.title-table{
    text-align: center;
    color:  var(--color-primary);
    font-weight: bold;
}
.row__info-field{
    color: var(--color-primary);
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
}

@media (max-width:560px) {
    .table-info{
    width: 100%;
}

.row__info{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: none;
}
.info-header{
    flex-direction: column;
    align-items: center;
}
}

</style>

