<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import watermark from 'watermark-dom'

// import Article from './components/Article'
// import ShowBlogs from './components/ShowBlogs'
// import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {},
  data() {
    return { 
    }
  },
  methods:{
      
  },
  mounted() {
    watermark.init({ watermark_txt: "xyx107", watermark_color:'#ccc'});
  }
}
</script>

<style>

</style>
