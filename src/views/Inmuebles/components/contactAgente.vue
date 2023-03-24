<template>
    <div class="contactAgent">
        <div class="agenteInmueble d-flex flex-column align-items-center">
            <h3 class="contactAgent__title">Contactanos</h3>
            <figure v-if="infoAgente.userdata.foto_persona" class="fotoAgenteInmueble">
                <img class="img-fluid mx-auto d-block" :src="infoAgente.userdata.foto_persona" alt="">
            </figure>
            <div class="nombreAgenteInmueble">
                {{ infoAgente.userdata.primer_nombre }}
                <span class="cargo">Agente inmobiliario</span>
            </div>
        </div>
        <div class="container__interested">
            <p>¡Estoy interesado!</p>
        </div>
        <form>
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Nombre completo:</label>
                <input type="email" class="form-control" id="exampleInputName" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">Correo electronico</label>
                <input type="email" class="form-control" id="exampleInputEmail">
            </div>
            <div class="mb-3">
                <label for="exampleInputCel" class="form-label">celular</label>
                <input type="Number" class="form-control" id="exampleInputCel">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Acepto la política de tratamiento de datos personales</label>
            </div>
    
        <button class="card-footer__btn">          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
          </svg>
          Contactar
        </button>
        <p class="btn-whatsapp">          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          Contactar WHATSAPP
        </p>
        
        </form>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    infoAgente: {
        type: Object
    }
})
</script>

<style scoped lang="scss">
.contactAgent{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    max-width: 500px;
    border: 2px solid var(--color-primary);
    border-radius: 10px;
    padding: 1rem;
    margin: 0 auto;
}
.contactAgent__title{
    color: var(--color-primary);
    font-weight: bold;
}
.fotoAgenteInmueble {
    max-width: 180px;
    width: 100%;
    margin-bottom: 10px;
}

.nombreAgenteInmueble {
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    line-height: 1.4;
}

.nombreAgenteInmueble .cargo {
    display: block;
    line-height: 1;
    font-size: 0.65em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--tm-cop);
}

.btn-whatsapp{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-top: 1.5rem;
    font-size:  12px;
    color: var(--color-primary);
    svg{
        width: 20px;
        height: 20px;
        fill: var(--color-primary);
    }
}
.btn-whatsapp:hover{
    text-decoration: underline;
    cursor: pointer;
}

.card-footer__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height:60px ;
  padding: 4px 6px;
  gap: 4px;
  border: none;
  color: var(--color-primary);
  svg{
    width: 2rem;
    height: 2rem;
    fill: var(--color-primary);
  }
}

.card-footer__btn:hover{
  background-color: var(--color-primary);
  color: white;
  
  svg{
    width: 2rem;
    height: 2rem;
    fill: white;
  }
}
.container__interested{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    padding: 8px;

    p{
        margin: 0;
        color: white;
        font-weight: bold;
    }
}
</style>