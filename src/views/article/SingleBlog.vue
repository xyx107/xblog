<template>
  <div >
      <h1>{{blog.title}}</h1>
      <article>{{blog.content}}</article>
      <ul v-for="tags in blog.tag" :key="tags.insex">
        <li>{{tags}}</li>
      </ul>
  </div>
</template>

<script>
import { Singleblog } from '@/api/article.js'
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
    Singleblog(this.id).then( data => {
          this.blog = data.data
      })
  }
}
</script>

<style>
</style>
