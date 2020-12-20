<template>
   <div id="show-blogs">
    <blog-header />
    <article id="list" v-if="this.$route.path == '/article'">
      <ol v-for="blog in blogs" :key="blog.index" id="single-blog" >
        <router-link :to="'/article/' + blog.id">
          <h3 class="title">{{blog.title}}</h3>
        </router-link>
        <!-- <h3>{{blog.content}}</h3> -->
      </ol>
    </article>
    <router-view></router-view>
    <el-pagination
      v-if="this.$route.path == '/article'"
      background
      :total= 10*totalCount
      :jumper= "1" 
      :page-count= "totalCount"
      @current-change="handleCurrentChange"
      layout="total, prev, pager, next, jumper"
      >
    </el-pagination>
    <blog-footer />
  </div>
</template>

<script>
import { Bloglist } from "@/api/article.js";
export default {
  name: "ShowBlogs",
  components: {},
  data() {
    return {
      blogs: [],
      totalCount: null,
      currentPage: null,
      page: {
        pageNumber: 1,
        pageSize: 10
      }
    };
  },
  methods: {
    // handleCurrentChange(val) {
    //   this.blogs = []
    //   this.page.pageNumber = val
    //   Bloglist(val).then(data => {
    //     this.blogs = data.data.articleList;
    //     this.totalCount =  data.data.totalCount;
    //   });
    // },
    handleCurrentChange(val) {
      this.blogs = []
      this.page.pageNumber = val
      Bloglist(val).then(data => {
        this.blogs = data.blogs;
        this.totalCount =2 ;
      });
    },
    handleSizeChange(val) {
      this.page.pageSize = val
    }
  },
  beforeMount() {
    const data = {
      page: 1
    }
    // Bloglist(data).then(data => {
    //   this.blogs = data.data.articleList;
    //   this.totalCount =  data.data.totalCount;
    //   console.log(111)
    // }).catch((err) => {
    //   console.log(err)
    // })
    Bloglist(data).then(data => {
      this.blogs = data.blogs;
      this.totalCount =  2;
    }).catch((err) => {
      console.log(err)
    })
  }
};
</script>

<style lang="scss" scoped>
body {
  font-family: Lucida Sans Unicode, Verdana, "Hiragino Sans GB", -apple-system,
    Microsoft Yahei, sans-serif;
}
ol{
  padding: 0;
  margin: 0;
}
h3{
  font-family: 'zashu';
  padding: 10px 0;
}
a:hover{
  text-decoration: underline;
}
a:active{
  color:#644545;
}
li {
  display: inline-block;
  list-style: none;
}
#list{
  display: block;
  height: 50%;
}
#show-blogs {
  width: 720px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 auto;
  /* padding: 20px; */
}
#single-blog {
  width: 60%;
  
}
.title {
  margin: 3px 5px 0 10px;
  color: #333;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 100;
}
.title a:hover {
  text-decoration: underline;
}
#page {
  display: flex;
  justify-content: flex-start;
}
.blog-footer{
  position: fixed;
}
</style>
