<template>
  <div >
    <div id="addbtn">
      <h2>文章管理</h2>
      <el-button class="addbtn" @click="addBlog()" type="primaty"> 新增 </el-button>
    </div>
      <main>
        <el-table 
          id="table" 
          show-overflow-tooltip="true" 
          ref="multipleTable"
          :data="blogs.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))" >
          <el-table-column type="selection" width="80" v-model="select"></el-table-column>
          <!-- <el-table-column v-for="blog in blogs" :key="blog.index" :label="id" width="80">
            <template slot-scope="scope">
            <span>{{blogs[index].id}}</span>
            </template>
          </el-table-column> -->
          <el-table-column prop="" label="标题" >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>阅读量: {{ scope.row.readNum }}</p>
                <p>评论数: {{ scope.row.comments }}</p>
                <p>点赞数: {{ scope.row.zanNum }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.title }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="User.username" label="作者" ></el-table-column>
          <el-table-column prop="createAt" label="日期"  ></el-table-column>
          <el-table-column prop="option" width="210" >
             <template slot="header" slot-scope="">
              <el-input
                class="option"
                v-model="search"
                prefix-icon="iconfont icon-fangdajing"
                size="mini"
                placeholder="搜索标题"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(blog.id)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </main>
  </div>
</template>

<script>
import { Addblog, Deleteblog, Editblog, Bloglist} from '@/api/article.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      blogs: [],
      search: '',
      delarr:[]
    }
  },
  methods: {
    handleEdit(index, row) {
        this.index = index
        this.msg = row
      },
    handleDelete(index, row) {
        console.log(index, row);
        Deleteblog(blog.id)
      },
    addBlog() {
      this.$router.push({
        name: 'mdedit'
      })
    }
  },
  mounted() {
    Bloglist().then(data => {
        this.blogs = data.data.articleList
      })
  }  
}
</script>

<style scoped>
main{
  width: 87%;
  margin:0 auto;
}
#table{
  padding: 20px; 
  margin-bottom: 30px;
}
#addbtn{
  display: flex;
  background-color: #eee;
}
.addbtn{
  margin:30px 10px;
  height: 30px;
  text-align: center;
}
.option{
  width: 150px;
}
</style>
