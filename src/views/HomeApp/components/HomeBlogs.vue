<template>
  <div class="container__inmuebles">
    <div  class="container__title">
      <h3 class="title__inmuebles">BLOGS</h3>
      <button class="btn__show" @click="ShowInmuebles()" >Ver más...</button>
    </div>
    <div class="inmuebles__grid"  v-if="BlogsList">
      <cardBlog  
        v-for="blog in BlogsList" 
        :key="blog.id" 
        :itemBlog="blog"  
        />
      </div>
    </div>
</template>

<script setup>
import { onMounted,computed} from 'vue';
import { useStore } from 'vuex';

//components
import cardBlog from '@/components/blogs/cardBlog.vue';

const store = useStore();
const BlogsList = computed( () => store.state.AppBlog.grid.data);
onMounted(
  ()  => {
    store.dispatch('AppInmuebles/getListInmuebles');
    store.dispatch('AppBlog/getBlogs');
  }
)



</script>

<style scoped>
.btn__show{
  padding: 4px 8px;
  background-color: var(--color-primary);
  border: none;
  color: white;
  border-radius: 5px;
}

.container__inmuebles{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 20rem;
  z-index: 10;
}
@media (max-width:1400px) {
  .container__inmuebles {
    padding: 0 10rem;
  }
}

@media (max-width:900px) {
  .container__inmuebles {
    padding: 0 5rem;
  }
}

@media (max-width:600px) {
  .container__inmuebles {
    padding: 0 2rem;
  }
}

.container__title{
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
  font-size: bold;
}

.title__inmuebles{
}
.inmuebles__grid{
  display: grid;
  justify-items: center;
  gap:2rem;
  grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
  grid-auto-rows: 24rem;
}

</style>