<template>
  <div id="main-body">
        <el-form  id="add-form" >
            <h1>编辑文章</h1>
            <el-form-item >
                <el-input placeholder="请输入文章主题" v-model="blog.title"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input placeholder="请输入文章内容" type="textarea" :autosize="{ minRows: 8, maxRows: 15}" v-model="blog.content"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-checkbox-group v-model="blog.tags">
                    <el-checkbox label="Vue" name="tag"></el-checkbox>
                    <el-checkbox label="GO" name="tag"></el-checkbox>
                    <el-checkbox label="安全" name="tag"></el-checkbox>
                    <el-checkbox label="Javascript" name="tag"></el-checkbox>
                </el-checkbox-group >
            </el-form-item>
            <el-form-item label="">
                <el-col :span=12><el-button type="primary" v-on:click.prevent="addBlog()">提交（新增或者编辑）</el-button></el-col>
            </el-form-item>           
        </el-form>
        <div id="edit-show">
            <div >
            <h3>添加成功！跳转并查看文章...</h3>
            </div>
            <div id="preview">
                <h1>文章预览</h1>
                <el-input class="e-title" placeholder="标题:" v-model="blog.title"></el-input>
                <el-input placeholder="文章内容" type="textarea" :autosize="{ minRows: 8, maxRows: 15}" v-html="notePreview"></el-input>
                <p class="e-tag">标签</p>
                <ul>
                    <li id="tags" v-for="tag in blog.tags" :key="tag.index">{{tag}} </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import marked from 'marked'
import { Addblog, Deleteblog, Editblog } from '@/api/article.js'
export default {
  name: 'MdEdit',
  components: {},
  data() {
    return {
        blog: {
            title: "",
            content: "",
            tags:[] ,
            submitted:false
        }
        
    }
  },
  methods:{
      addBlog() {
          Addblog(this.blog).then( Response => {
              this.$message.success('添加成功')
          }).catch(error => {
              this.$message.error()
          })
      },
      editBlog() {
          Editblog(this.blog).then(Response => {
              this.$message.success('编辑成功')
          }).catch(error => {
              this.$message.error()
          })
      },
      post() {
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
          return marked(this.blog.content)
      }
  }
}
</script>

<style>
#main-body{
  display: flex;
  flex-direction: row;
  min-height: 100%;
}
#add-form{
  width: 50%;
  min-height: 100%;
  box-sizing:border-box;
  background-color: #fff;
  /* box-shadow: 0 2px 0 rgb(136, 138, 146); */
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
#edit-show{
  width: 50%;  
  min-height: 100%;
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
