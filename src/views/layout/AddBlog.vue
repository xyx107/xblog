<template>
  <div id="blog-body">
    <el-form :model="formInline" class="blog-form" size="mini">
      <el-form-item label="请输入文章标题" id="title">
        <el-input type="text" v-model="title"></el-input>
      </el-form-item>
      <el-form-item >
        <el-select v-model="tag" placeholder="请输入文章分类">
          <el-option label="前端" value="前端"></el-option>
          <el-option label="后端" value="后端"></el-option>
          <el-option label="随笔" value="随笔"></el-option>
        </el-select>
        <el-select v-model="comment" placeholder="请输入文章标签">
          <el-option label="vue" value="vue"></el-option>
          <el-option label="nodejs" value="nodejs"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <vue-tinymce v-model="content" :setting="setting" class="tinym"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="addBlog()">发表文章</el-button>
        <el-button type="primary" @click.prevent="">保存文章</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//样式
import 'tinymce/skins/content/default/content.min.css'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'

//主题
import 'tinymce/themes/silver'

//插件
import 'tinymce/plugins/link' //链接插件
import 'tinymce/plugins/image' //图片插件
import 'tinymce/plugins/media' //媒体插件
import 'tinymce/plugins/table' //表格插件
import 'tinymce/plugins/lists' //列表插件
import 'tinymce/plugins/quickbars' //快速栏插件
import 'tinymce/plugins/fullscreen' //全屏插件
import { Addblog, Deleteblog, Editblog, Singleblog } from '@/api/article.js'

export default {
  name: 'addblog',
  data(){
    return {
      title: '',
      tag: '',
      comment: '',
      content: '',
      setting: {
        menubar: false,
        toolbar: "undo redo | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins: "link image media table lists fullscreen quickbars",
        language: 'zh_CN',
        height: 300
      }
    }
  },
  methods: {
      addBlog() {
        const blog = {
            title: this.title,
            content: this.content,
            comment: this.comment,
            tag: this.tag
        }
        Addblog(blog)
            .then(Response => {
            this.$message.success("ok");
            })
            .catch(error => {
            this.$message.error();
        });
    },
  }
}
</script>
<style lang="scss" scoped>
#blog-body{
  width: 70%;
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
  .tinym{
    margin: 0;
    padding: 0;
  }
}
</style>