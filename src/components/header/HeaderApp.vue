<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary header__nav">
  <div class="container-fluid" style="background-color: white;">
    <a class="navbar-brand" href="#">Navbar</a>
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
      <!-- <ul class="navbar-nav ">
        <li class="nav-item header__item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item header__item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown header__item">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul> -->
    </div>
  </div>
</nav>
</template>

<script setup>


</script>

<style scoped>
.header__nav{
  width: 100vw;
  height: 90px;
  box-shadow: 0 4px 30px white;
  background-color: white !important;
  z-index: 20;
}

.header__item{
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 4px solid transparent;

}
.navbar-nav{
  display: flex;
  gap: 1rem;
}
.header__item:hover {
  box-sizing:border-box;
  background-color: var(--color-secundary);
  border-bottom: 4px solid var(--color-primary);
}
</style>