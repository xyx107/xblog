<template>
  <div id="show-blogs" >
    <article>
    <div v-for="blog in blogs" :key="blog.index" id="single-blog">
      <router-link :to="'/blog/' + blog.id">
        <h3 class="title">{{blog.title}}</h3>
      </router-link>
      <!-- <h3>{{blog.body}}</h3> -->
    </div>
    <ol>
      <li>&#171</li>
      <li>1</li>
      <li>2</li> 
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>&#187</li>
    </ol>
    </article>
  </div>
</template>

<script>
// import BlogHeader from '@/components/BlogHeader'
export default {
  name: "BlogList",
  components: {  },
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
        // console.log(this.blogs)
      });
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
  width: 61.8%;
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
</style>
