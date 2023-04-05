<template>
    <footer>
        <div class="footer">
            <div class="footer__logo" v-if="configuration">
                <img :src="configuration.logo" :alt="configuration.nombre" class="logo_empresa">
            </div>
            <div class="footer__metaData">
                <h3 class="footer__metaData-title">{{ configuration.nombre }}</h3>
                <ul class="footer__metaData-list">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                        </svg>
                        <span>
                            {{ configuration.direccion }}
                        </span>
                    </li>
                    <li> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>
                        <span>
                            {{ configuration.id_pais.name }}, {{ configuration.id_estado.name }}, {{ configuration.id_ciudad.name }}.
                        </span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                        </svg>
                        <span>
                            <a class="linkMenuList" :href="`mailto:${configuration.email}`">{{ configuration.email }}</a>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="footer__manager">
                <h4>Siguenos en</h4>
                <ul class="footer__manager-list">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
			<div class="col"><h5 class="copyRigth">Red CRM &copy; {{year}} | <a href="https://crmred.co" target="_blank">Powered by RED</a></h5></div>
		</div>
        
    </footer>
</template>

<script setup>
import { computed,ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
let configuration = computed(() => store.state.AppData.data.configuracion);
let year = ref(new Date().getFullYear());

</script>

<style lang="scss" scoped >
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 10px;
    margin: 1rem 0;
    background-color: #f5f5f5;
    ul{
        margin: 0; /* To remove default bottom margin */ 
        padding: 0; /* To remove default left padding */
    }
    a{
        text-decoration: none;
        color: black;
    }
    svg{
        fill: var(--color-primary);
    }
}

.footer{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo_empresa {
    max-width: 200px;
    margin: 0 auto;
}

.footer__manager-list{
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    svg{
        width: 40px;
        height: 40px;
    }
}
.footer__metaData-list{
    display: flex;
    flex-direction: column;
    gap: 6px;
    
    li{
        display: flex;
        align-items: center;
        gap: 6px;
        svg{
        width: 20px;
        height: 20px;
    }
    }
}
.footer__metaData-title{
    color: var(--color-primary);
}
.copyRigth {
		line-height: 1.2;
		font-size: 14px;
		opacity: 0.6;
		text-align: center;
		font-weight: 500;
        color: var(--color-primary);
	}

@media (min-width: 760px) {
    .footer__metaData-list{
    display: flex;
    flex-direction: column;
    align-items: center;
}
}

@media (min-width: 1000px) {
    .footer {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
}
}
</style>