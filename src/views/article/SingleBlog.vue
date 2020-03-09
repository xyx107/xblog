<template>
  <div id="singleblog">
    <header>
      <p>username Blog  /  </p>
      <h1>{{blog.title}}</h1>
    </header>
    <section>
      <ul>
        <li>发布时间{{blog.createAt}}</li>
        <li>访问量{{blog.rearNum}}</li>
        <li  @click="zan()"><i class="iconfont icon-love"></i>点赞{{blog.zanNum}}</li>
        <!-- <li>评论数{{blog.comments}}</li> -->
      </ul>
    </section>
    <article>
      {{blog.content}}
    </article>
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
  methods: {
    zan(){
      console.log(this.blog.zanNum)
    }
  },
  created() {
    Singleblog(this.id).then( data => {
          this.blog = data.data
      })
  }
}
</script>

<style scoped>
header{
  border-bottom: 1px solid #eee;
}

</style>
