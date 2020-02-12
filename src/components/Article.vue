<template>
  <div class="addblog">
  文章
   <p>编辑文章</p>
      <form v-if="!submitted">
          主题
          <label><input type="text" name="title" v-model="blog.title"> </label>
          内容
          <label><input type="texare" name="coment" v-model="blog.content"></label>
          标签
          <label>
              Vue
              <input type="checkbox" name="tags" value="Vue" v-model="blog.tags">
          </label>
          <label>
              HTML
              <input type="checkbox" name="tags" value="HTML" v-model="blog.tags">
          </label>
          <label>
              CSS
              <input type="checkbox" name="tags" value="CSS" v-model="blog.tags">
          </label>
          <label>
              JS
              <input type="checkbox" name="tags" value="JS" v-model="blog.tags">
          </label>
          
          <button type="submit" v-on:click.prevent="post">提交</button>
      </form>
      <div v-if="submitted">
        <h3>编辑完成</h3>
      </div>
      <div id="preview">
            <p>预览</p>
            <p>标题:{{blog.title}}</p>
            <p>内容:{{blog.content}}</p>
            <p>标签</p>
            <ul>
                <li v-for="tag in blog.tags" :key="tag.index">{{tag}} </li>
            </ul>

        </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  components: {},
  data() {
    return {
        blog:{
            title: "",
            content: "",
            tags:[]
        },
        submitted:false
    }
  },
  methods:{
      post: function() {
          this.$http.post("https://jsonplaceholder.typicode.com/posts",{
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
          })
            .then(function(data){
                console.log(data);
                this.submitted = true
            })
   } 
  }
}
</script>

<style>
</style>
