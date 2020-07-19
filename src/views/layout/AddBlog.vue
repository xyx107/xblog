<template>
  <div id="blog-body">
    <div id="title">
        <el-input type="text" v-model="title" placeholder="请输入文章标题"></el-input>
    </div>
    <vue-tinymce v-model="content" :setting="setting" />
    <el-button type="primary" @click.prevent="addBlog()">发表文章</el-button>
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
      tag: 'aaa',
      content: '',
      setting: {
        menubar: false,
        toolbar: "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins: "link image media table lists fullscreen quickbars",
        language: 'zh_CN',
        height: 700
      }
    }
  },
  methods: {
      addBlog() {
        const blog = {
            title: this.title,
            content: this.content,
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
<style scoped>
  #title{
    display: flex;
  }
  #blog-body{
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 10%;
  }
</style>