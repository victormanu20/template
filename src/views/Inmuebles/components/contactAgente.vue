<template>
    <div class="contactAgent">
        <div class="agenteInmueble d-flex flex-column align-items-center">
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