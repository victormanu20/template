<template>
  <div class="container__inmuebles">
    <h3 class="title__inmuebles">BLOGS</h3>
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

console.log(BlogsList.value)


</script>

<style scoped>

.container__inmuebles{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 20rem;
  z-index: 10;
}

.title__inmuebles{
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
  font-size: bold;
}
.inmuebles__grid{
  display: grid;
  justify-items: center;
  gap:2rem;
  grid-template-columns: repeat(auto-fit,minmax(15rem,20rem));
  grid-auto-rows: 24rem;
}

</style>