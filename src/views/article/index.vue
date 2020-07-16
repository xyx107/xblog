<template>
   <div id="show-blogs">
    <blog-header />
    <article v-if="this.$route.path == '/article'">
      <div v-for="blog in blogs" :key="blog.index" id="single-blog">
        <router-link :to="'/article/' + blog.id">
          <h3 class="title">{{blog.title}}</h3>
        </router-link>
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
    <section>
      <router-view></router-view>
    </section>
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
        {title: 'PYTHON ENHANCEMENT PROPOSALS'},
        {title: '聊一聊多CPU，多核，多进程，多线程fghfghdyutyjtujutjutjvh'},
        {title: 'PYTHON 沙箱逃逸总结一下'},
        {title: 'PYTHON ENHANCEMENT PROPOSALS'},
        {title: '聊一聊多CPU，多核，多进程，多线程'},
        {title: 'PYTHON 沙箱逃逸总结一下'},
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
    handleCurrentChange(val) {
     this.blogs = []
     this.page.pageNumber = val
     Bloglist(val).then(data => {
      this.blogs = data.data.articleList;
      this.totalCount =  data.data.totalCount;
    });
    },
    handleSizeChange(val) {
      this.page.pageSize = val
    }
  },
  // created() {
  //   Bloglist(1).then(data => {
  //     this.blogs = data.data.articleList;
  //     this.totalCount =  data.data.totalCount;
  //   });
  // }
};
</script>

<style lang="scss" scoped>
body {
  font-family: Lucida Sans Unicode, Verdana, "Hiragino Sans GB", -apple-system,
    Microsoft Yahei, sans-serif;
}
h3{
  font-family: 'zashu';
  padding: 10px 0;
}
a:hover{
  text-decoration: underline;
}
a:active{
  color:#ba2636;
}
li {
  display: inline-block;
  list-style: none;
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
.blog-footer{
  position: fixed;
}
</style>
