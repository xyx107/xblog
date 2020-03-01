<template>
  <div id="show-blogs" >
    <blog-header/>
    <article v-if="this.$route.path == '/article'">
    <div v-for="blog in blogs" :key="blog.index" id="single-blog">
      <router-link :to="'/article/' + blog.id">
        <h3 class="title">{{blog.title}}</h3>
      </router-link>
      <!-- <h3>{{blog.content}}</h3> -->
    </div>
    <div id="page">
      <el-button>&#171;</el-button>
      <ol v-for="i in totalCount" :key="i.index" >
        <li>{{i}}</li>
      </ol>
      <el-button>&#187;</el-button>
    </div>
    
    </article>
    <router-view></router-view>
    <blog-footer/>
  </div>
</template>

<script>

import { Bloglist } from '@/api/article.js'
export default {
  name: "ShowBlogs",
  components: {  },
  data() {
    return {
      blogs: [],
      totalCount: ''
    };
  },
  methods: {

  },
  mounted() {
    Bloglist().then(data => {
        this.blogs = data.data.articleList
        this.totalCount = data.data.totalCount
      })
  }
};
</script>

<style Scoped>
body{
  font-family: Lucida Sans Unicode,Verdana,"Hiragino Sans GB",-apple-system,Microsoft Yahei,sans-serif;
 
}
li{
  display: inline-block;
  list-style: none;
}
#show-blogs{
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 auto;
  padding: 20px
}
#single-blog{
  width: 70%;
}
.title{
  margin: 3px 5px 0 10px;
  color: #666;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 100;
}
.title a:hover{
  text-decoration: underline; 
}
#page{
  display: flex;
  justify-content: flex-start;
}

</style>
