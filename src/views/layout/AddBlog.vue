<template>
  <div id="addblog">
    <el-form ref="form"  :model="blog" id="nav" label-width="50px">
      <el-form-item>
        <el-button type="primary" @click.prevent="addBlog()">提交</el-button>
      </el-form-item>
      <el-form-item label="标题" inline-message="true">
        <el-input v-model="blog.title"></el-input>
      </el-form-item>
      <el-form-item label="分类" >
        <el-select v-model="blog.comment" filterable placeholder="请选择分类">
          <el-option
            v-for="item in option"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-select
          v-model="blog.tags.tag"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入标签"
        >
          <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      
    </el-form>
    <section id="content" >
      <Markdown v-model="blog.content"/>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import Markdown from "vue-meditor";
import { Addblog, Deleteblog, Editblog, Singleblog } from '@/api/article.js'
export default {
  name: "addblog",
  components: {
    Markdown
  },
  data() {
    return {
      blog: {
        title: "",
        tags: [{tag: 1},],
        //fenlei: [],
        content: ''
      },
      option:[{
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }],
    };
  },
  methods: {
    addBlog() {
      Addblog(this.blog)
        .then(Response => {
          this.$message.success("添加成功");
        })
        .catch(error => {
          this.$message.error();
        });
    },
    getArticle() {
      const id = this.$route.parmas.id;
      console.log(this.$route.parmas.id);
      Singleblog(id).then(res => {
        this.blog = res.data;
        console.log(id);
      });
    },
    created() {}
  }
};
</script>

<style scoped>
#addblog {
  background-color: #eee;
  width: 100%;
}
.el-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
}
.markdown {
  margin: 0;
}
.el-input {
  width: 500px;
}
.el-button {
    margin-right: 20px;
}
#content {
  width: 100%;
  margin-left: 0;
}
.el-form-item {
  /* margin-right: 80px; */
  padding: 0;
}

.markdown-here-wrapper {
  font-size: 16px;
  line-height: 1.8em;
  letter-spacing: 0.1em;
}

pre,
code {
  font-size: 14px;
  font-family: Roboto, "Courier New", Consolas, Inconsolata, Courier, monospace;
  margin: auto 5px;
}

code {
  white-space: pre-wrap;
  border-radius: 2px;
  display: inline;
}

pre {
  font-size: 15px;
  line-height: 1.4em;
  display: block;
  /* !important; */
}

pre code {
  white-space: pre;
  overflow: auto;
  border-radius: 3px;
  padding: 1px 1px;
  display: block !important;
}

strong,
b {
  color: #bf360c;
}

em,
i {
  color: #009688;
}

hr {
  border: 1px solid #bf360c;
  margin: 1.5em auto;
}

p {
  margin: 1.5em 5px !important;
}

table,
pre,
dl,
blockquote,
q,
ul,
ol {
  margin: 10px 5px;
}

ul,
ol {
  padding-left: 15px;
}

li {
  margin: 10px;
}

li p {
  margin: 10px 0 !important;
}

ul ul,
ul ol,
ol ul,
ol ol {
  margin: 0;
  padding-left: 10px;
}

ul {
  list-style-type: circle;
}

dl {
  padding: 0;
}

dl dt {
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
}

dl dd {
  margin: 0 0 10px;
  padding: 0 10px;
}

blockquote,
q {
  border-left: 2px solid #009688;
  padding: 0 10px;
  color: #777;
  quotes: none;
  margin-left: 1em;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-style: bold !important;
  color: #009688 !important;
  text-align: center !important;
  margin: 1.5em 5px !important;
  padding: 0.5em 1em !important;
}

h1 {
  font-size: 24px !important;
  border-bottom: 1px solid #ddd !important;
}

h2 {
  font-size: 20px !important;
  border-bottom: 1px solid #eee !important;
}

h3 {
  font-size: 18px;
}

h4 {
  font-size: 16px;
}

table {
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  font: inherit;
  border: 0;
  margin: 0 auto;
}

tbody {
  margin: 0;
  padding: 0;
  border: 0;
}

table tr {
  border: 0;
  border-top: 1px solid #ccc;
  background-color: white;
  margin: 0;
  padding: 0;
}

table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

table tr th,
table tr td {
  font-size: 16px;
  border: 1px solid #ccc;
  margin: 0;
  padding: 5px 10px;
}

table tr th {
  font-weight: bold;
  color: #eee;
  border: 1px solid #009688;
  background-color: #009688;
}
</style>
    <style>
#area > table {
  width: 100%;
  table-layout: fixed;
}

#area table tr td {
  margin: 0;
  padding: 6px;
  border: 0;
}

#md-area {
  width: 100%;
  height: 600px;
  font-size: 18px;
  overflow: hidden;
  font-weight: bold;
  outline: none;
}

#show-area {
  height: 600px;
  background-color: #fcf6e5;
}

.clearfix:before {
  content: "";
  display: table;
}
</style>
