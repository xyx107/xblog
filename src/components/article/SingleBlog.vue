<template>
  <div >
      <h1>{{blog.title}}</h1>
      <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {
  name: 'SingleBlog',
  components: {},
  data() {
    return {
        blog: {},
        id: this.$route.params.id
    }
  },
  created() {
      this.$http.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function(data){
          this.blog = data.body
      })
  }
}
</script>

<style>
</style>
