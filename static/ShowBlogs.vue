<template>
  <div id="show-blogs">
    <blog-header />
    <article v-if="this.$route.path == '/article'">
      <div v-for="blog in blogs" :key="blog.index" id="single-blog">
        <!-- <router-link :to="'/article/' + blog.id"> -->
          <h3 class="title">{{blog.title}}</h3>
        <!-- </router-link> -->
        <!-- <h3>{{blog.content}}</h3> -->
      </div>
      <el-pagination 
        background 
        :total= 10*totalCount
        :jumper= "1" 
        :page-count= "totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10]"
        layout="total, sizes, prev, pager, next, jumper"
        >
      </el-pagination>
    </article>
    <router-view></router-view>
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
      // blogs: [],
      blogs: [
        {title: 'PYTHON ENHANCEMENT PROPOSALS'},
        {title: '聊一聊多CPU，多核，多进程，多线程'},
        {title: 'PYTHON 沙箱逃逸总结一下'},
      ],
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
    //  this.blogs = []
    //  this.page.pageNumber = val
    //  Bloglist(val).then(data => {
    //   this.blogs = data.data.articleList;
    //   this.totalCount =  data.data.totalCount;
    // });
    // },
    // handleSizeChange(val) {
    //   this.page.pageSize = val
    // }
  },
  mounted() {
    // Bloglist(1).then(data => {
    //   this.blogs = data.data.articleList;
    //   this.totalCount =  data.data.totalCount;
    // });
  },
  // beforeRouteEnter (to, from, next){
  //   window.document.body.style.backgroundColor = 'blue';
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   window.document.body.style.backgroundColor = '';
  //   next();
  // }
}
</script>

<style Scoped>
/* #show-blogs{
    background: url('/assets/imgs/bg1.jpg') no-repeat;
    /* background: url() no-repeat; */
    /*content: "";
    display: block;
    opacity: 1;
    z-index: -3;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
} */
body {
  font-family: Lucida Sans Unicode, Verdana, "Hiragino Sans GB", -apple-system,
    Microsoft Yahei, sans-serif;
}
li {
  display: inline-block;
  list-style: none;
}
#show-blogs {
  width: 90%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 20px;
  /* padding: 20px; */
}
#single-blog {
  width: 70%;
}
.title {
  margin: 3px 5px 0 10px;
  color: #666;
  width: 100%;
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
</style>
