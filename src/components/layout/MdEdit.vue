<template>
  <div id="main-body">
        <el-form  id="add-form" v-if="!submitted">
            <h1>编辑文章</h1>
            <el-form-item >
                <el-input placeholder="请输入文章主题" v-model="title"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input placeholder="请输入文章内容" type="textarea" :autosize="{ minRows: 8, maxRows: 15}" v-model="content"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-checkbox-group v-model="tags">
                    <el-checkbox label="Vue" name="tag"></el-checkbox>
                    <el-checkbox label="GO" name="tag"></el-checkbox>
                    <el-checkbox label="CSS" name="tag"></el-checkbox>
                    <el-checkbox label="Javascript" name="tag"></el-checkbox>
                </el-checkbox-group >
            </el-form-item>
            <el-form-item label="">
                <el-col :span=12><el-button type="primary" v-on:click.prevent="post">提交</el-button></el-col>
            </el-form-item>           
        </el-form>
        <div id="edit-show">
            <div v-if="submitted">
            <h3>添加成功！跳转并查看文章...</h3>
            </div>
            <div id="preview">
                <h1>文章预览</h1>
                <p class="e-title">标题:{{title}}</p>
                <p class="e-tag">标签</p>
                <ul>
                    <li id="tags" v-for="tag in tags" :key="tag.index">{{tag}} </li>
                </ul>
                <aside v-html="notePreview">内容</aside>
            </div>
        </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'MdEdit',
  components: {},
  data() {
    return {
        title: "",
        content: "",
        tags:[] ,
        submitted:false
    }
  },
  methods:{
      post: function() {
          this.$http.post("https://jsonplaceholder.typicode.com",{
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
          })
            .then(function(data){
                console.log(data);
                this.submitted = true
            })
   } 
  },
  computed: {
      notePreview () {
          return marked(this.content)
      }
  }
}
</script>

<style>
#main-body{
  display: flex;
  min-height: 100%;
}
#add-form{
  width: 50%;
  box-sizing:border-box;
  background-color: #fff;
  /* box-shadow: 0 2px 0 rgb(136, 138, 146); */
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
#edit-show{
  width: 50%;  
  min-height: 50%;
  background-color: #fff; 
  box-shadow: 0 2px 4px rgb(121, 125, 143);
}
.e-title{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    
}
/* .tags{
    display: flex;
    justify-content: space-between;
} */
</style>
