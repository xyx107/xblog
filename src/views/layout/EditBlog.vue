<template>
  <div id="editmain">
    <el-form size="mini" class="form" >
      <el-form-item label="请输入文章标题" id="title">
        <el-input type="text" v-model="blog.title"></el-input>
      </el-form-item>
      <el-form-item >
        <el-select v-model="blog.tag" placeholder="请输入文章分类">
          <el-option label="前端" value="前端"></el-option>
          <el-option label="后端" value="后端"></el-option>
          <el-option label="随笔" value="随笔"></el-option>
        </el-select>
        <el-select v-model="blog.comment" placeholder="请输入文章标签">
          <el-option label="vue" value="vue"></el-option>
          <el-option label="nodejs" value="nodejs"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="editor-container">
        <markdown-editor
          id="contentEditor"
          ref="contentEditor"
          v-model="blog.content"
          :height="260"
          :zIndex="20"
        ></markdown-editor>
      </el-form-item>
      <el-form-item >
        <div v-if="isshow" class="preview">
          <p>标题：{{blog.title}}</p>
            <div v-html="html" ></div>
        </div>
        <el-button type="primary" @click="toshow">预览</el-button>
        <el-button type="primary" @click="editBlog">提交修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import MarkdownEditor from '../../views/layout/Edit'
import { Addblog, Deleteblog, Editblog, Singleblog } from '../../api/article'
import { Collapse } from 'element-ui'

export default {
  components: { MarkdownEditor },
  data() {
    return {
      isshow: false,
      blog: {
          title: '',
          comment: '',
          content: '',
          tag: ''
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
    editBlog() {
      // 必须要先转成ＨＴＭＬ才能提交，待解决
      //   import('showdown').then(showdown => {
      //   const converter = new showdown.Converter()
      //   this.html = converter.makeHtml(this.blog.content)
      // })
        const data = {
            title: this.blog.title,
            content: this.html,
            tag: this.blog.tag
        }
        Editblog(this.blog.id, data).then(Response => {
            this.$message.success('this.blog.id')
        }).catch(error => {
            this.$message.error()
        })
    },
    getArticle() {
        const bid = this.$route.params.id
        Singleblog(bid).then(res => {
          console.log(res)
            this.blog = res.data[0]
        })
    }
  },
  created() {
    this.getArticle()
   }
}
</script>
<style lang="scss" scoped>
#editmain{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  overflow: hidden;
  margin: 0 auto;
  padding: 20px;
  #title{
    font-family: 'zashu';
  }
  
}
 .form{
    width: 70%;
  }
  .preview{
    border: 1px solid #ccc;
  }
</style>