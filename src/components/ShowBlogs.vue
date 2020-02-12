<template>
<div id="show-blogs">
    总览
  <div v-for="blog in blogs" :key="blog.index" id="single-blog">
      <router-link :to="'/blog/' + blog.id">
      <h2>{{blog.title}}</h2>
      </router-link>
      <h3>{{blog.body}}</h3>
      
  </div>
</div>
</template>

<script>
export default {
  name: 'ShowBlogs',
  components: {},
  data() {
    return {
        blogs:[]
    }
  },
  created() {
      this.$http.get("https://jsonplaceholder.typicode.com/posts/")
      .then(function(data) {
          this.blogs = data.body.slice(0,10)
          console.log(this.blogs)
      })
  }
}
</script>

<style>

</style>
