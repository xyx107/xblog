<template>
  <div id="addmain">
    <el-form size="mini" class="form">
      <el-form-item label="请输入文章标题" id="title">
        <el-input type="text" v-model="blog.title"></el-input>
      </el-form-item>

      <div class="selec">
        <el-form-item >
          <el-select v-model="blog.tags" placeholder="请输入文章分类" class="selec">
            <el-option label="前端" value="前端"></el-option>
            <el-option label="后端" value="后端"></el-option>
            <el-option label="随笔" value="随笔"></el-option>
          </el-select>
          <!-- <el-select v-model="blog.comment" placeholder="请输入文章标签">
            <el-option label="vue" value="vue"></el-option>
            <el-option label="nodejs" value="nodejs"></el-option>
          </el-select> -->
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="toshow">预览</el-button>
            <el-button type="primary" @click="addBlog">发表文章</el-button>
            <!-- <el-button type="primary" @click="addBlog">上传</el-button> -->
        </el-form-item>
      </div>
      
      <div class="body">
        <el-form-item class="editor-container">
          <markdown-editor
            id="contentEditor"
            ref="contentEditor"
            v-model="blog.content"
            :height="260"
            :zIndex="20"
          ></markdown-editor>
        </el-form-item>
        <el-form-item class="preview-container">
          <el-scrollbar style=" height: 100%; ">
            <div v-if="isshow" class="preview">
              <p id="title">标题：{{blog.title}}</p>
              <div v-html="html"></div>
            </div>
          </el-scrollbar>
        </el-form-item>
      </div>
      
    </el-form>
  </div>
</template>

<script>
import MarkdownEditor from '../../views/layout/Edit'
import { Addblog, Deleteblog, Editblog, Singleblog } from '../../api/article'
export default {
  components: { MarkdownEditor },
  data() {
    return {
      isshow: false,
      blog: {
        title: '',
        comment: '',
        content: '',
        tags: ''
      },
      html: ''
    }
  },
  methods: {
    markdown2Html() {
      import('showdown').then(showdown => {
        const converter = new showdown.Converter()
        this.html = converter.makeHtml(this.blog.content)
      })
    },
    toshow() {
      this.isshow = !this.isshow
      import('showdown').then(showdown => {
        const converter = new showdown.Converter()
        this.html = converter.makeHtml(this.blog.content)
      })
    },
    addBlog() {
      const blog = {
        title: this.blog.title,
        content: this.html,
        tag: this.blog.tag,
        author: 'xyx107'
      }
      Addblog(blog)
        .then(Response => {
          this.$message.success('ok')
        })
        .catch(error => {
          this.$message.error()
        })
    }
  }
}
</script>
<style lang="scss" scoped>
#addmain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
  #title {
    font-family: 'zashu';
  }
}
.form {
  margin-top: 20px;
  width: 70%;
}
.preview {
  height: 415px;
  border: 1px solid #ccc;
    border-left: 15px solid #333;
    background-color: #fff;
}
.selec{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .el-select{
    width: 100%;
  }
  .el-button{
    width: 80px;
    
  }
}
.body{
  display: flex;
  flex-direction: row;
  height: 60%;
  .preview-container{
    width: 50%;
    padding-left: 10px;
    
  }
  .editor-container{
    width: 50%;
  }
}
</style>