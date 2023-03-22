<template>
  <!-- <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary header__nav">
  <div class="container-fluid" style="background-color: white;">
    <a class="navbar-brand" href="#"><img :src="configuration.logo" alt="" class="image__logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
          <li class="nav-item header__item">
            <router-link to="/" class="nav-link active"  aria-current="page">Home</router-link>
          </li>
          <li class="nav-item header__item">
            <router-link to="/inmuebles" class="nav-link">Inmuebles</router-link>
          </li>
      </ul>
    </div>
  </div>
</nav> -->
<nav class="navbar">
  <div class="navbar-logo">
    <router-link to="/"  aria-current="page" >
      <img :src="configuration.logo" alt=""  class="nav__logo">
    </router-link>
  </div>
  <ul class="navbar-menu" :class="(stateMenuMobile)?'active':''">
    <li >
        <router-link to="/" class="nav-link active"  aria-current="page" @click="showMenuMobile()">Inicio</router-link>
    </li>
    <li >
        <router-link :to="{name:'inmuebles'}" class="nav-link active"  aria-current="page" @click="showMenuMobile()">Immuebles</router-link>
    </li>
    <li >
        <router-link to="/" class="nav-link active"  aria-current="page">Blogs</router-link>
    </li>
  </ul>
  <div class="navbar-toggle" @click="showMenuMobile()">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

</template>

<script setup>
import { computed,ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

let stateMenuMobile = ref(false)

let configuration = computed(() => store.state.AppData.data.configuracion);

function showMenuMobile(){
  stateMenuMobile.value= !stateMenuMobile.value;
}


</script>

<style scoped>
.nav__logo{
  max-width: 60px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #333;
  padding: 10px 30px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-logo a {
  color: #333;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin-right: 20px;
  transition: all 0.3s ease-in-out;
}

.navbar-menu li:last-child {
  margin-right: 0;
}

.navbar-menu li a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  position: relative;
}

.navbar-menu li a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #333;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.navbar-menu li a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.navbar-toggle {
  display: none;
  cursor: pointer;
}

.navbar-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .navbar {
    justify-content: space-between;
    padding: 20px;
  }
  .navbar-logo a {
    font-size: 36px;
  }
  .navbar-logo {
    order: 2;
  }
  .navbar-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 40;
    order: 1;
  }
  .navbar-menu.active {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 0 0 10px 10px;
  }
  .navbar-menu li {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .navbar-toggle {
    display: block;
  }
  .navbar-toggle.active span:nth-child(2) {
    opacity: 0;
  }
}

</style>