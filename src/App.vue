<template>
  <div id="app">
    <!-- <Article/> -->
    <!-- <ShowBlogs/> -->
    <!-- <BlogHeader/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Article from './components/Article'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    Article,
    ShowBlogs,
    BlogHeader
  },
  data() {
    
  },
  methods:{
      
  }
}
</script>

<style>

</style>
