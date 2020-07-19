<template>
  <div class="body">
    
    <main class="main">
      <el-backtop target=".body">
          <div
            style="{ height: 100%; width: 100%; text-align: center; }">
            <img src="https://blog.ixuchao.cn/usr/themes/Plain-master/images/commentsbg.gif" alt />
          </div>
        </el-backtop>
      <el-scrollbar style="height:100%">
      <el-table
        id="table"
        v-loading="loading"
        v-infinite-scroll="nextpage" 
        style="overflow:auto"
        @selection-change="handleSelectionChange"
        :row-key="handleReserve"
        show-overflow-tooltip="true"
        ref="multipleTable"
        :data="blogs.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      >
        <el-table-column type="selection" width="80" v-model="select"></el-table-column>
        <el-table-column prop label="标题">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>阅读量: {{ scope.row.readNum }}</p>
              <p>评论数: {{ scope.row.comments }}</p>
              <p>点赞数: {{ scope.row.zanNum }}</p>
              <p>文章ID: {{ scope.row.id }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.title }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="User.username" label="作者"></el-table-column>
        <el-table-column prop="createAt" label="日期"></el-table-column>
        <el-table-column prop="option" width="210">
          <template slot="header" slot-scope>
            <el-input
              class="option"
              v-model="search"
              prefix-icon="iconfont icon-fangdajing"
              size="mini"
              placeholder="搜索标题"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteOne(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
      <el-button id="delbtn" type="primary" @click="deleteArr()">删除选中项</el-button>
    </main>
  </div>
</template>

<script>
import { Addblog, Deleteblog, Deleteblogs, Editblog, Bloglist} from '@/api/article.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      // blogs: [],
      blogs: [{
        readNum: 1,
        comments: 2,
        zanNum: 3,
        id: 4,
        createAt: 3,
        title: 'vscode自定义vue模板'
      },{
        readNum: 1,
        comments: 2,
        zanNum: 3,
        id: 2
      },{
        readNum: 1,
        comments: 2,
        zanNum: 3,
        id: 1
      }],
      id: 1,
      loading: true,
      search: '',
      select: '',
      delarr:[],
      totalCount: ''
    }
  },
  methods: {
    addBlog() {
        this.$router.push({
        name: 'mdedit'
      })
      },
    handleEdit(index, row) {
        // this.index = index
        // this.msg = row.id
        this.$router.push({
          path: '/mdedit',
          parmas: {
            id: row.id
          }
        })
      },
      //chudijiazai
    nextpage() {
      this.id++
      if(this.id > this.totalCount) {
        console.log('meile')
      }else {
        Bloglist(this.id).then(data => {
          this.blogs = this.blogs.concat(data.data.articleList)
      })
      }
   },
    handleDelete(index, row) {},
    handleReserve (row) {
        return row.id
      },
    
    deleteOne(index, row) {
        this.$confirm('此操作将永久删除选中文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Deleteblog([row.id,])//后台要接受的是数组
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    handleSelectionChange(val) {
            this.delarr = val.map(item => item.id);
            // this.delarr.push(id)
        },
    
    deleteArr() {
      if(!this.delarr) {
          this.$message({
              message: "您没有选中数据",
              type: "error"
          })
          return false;
      }
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        //   if (rows) {
        //   rows.forEach(row => {
        //     this.delarr.push(row.id)
        //     console.log(this.delarr)
        //   })
        // }
        const Data = {
          ids: this.delarr
        }
        Deleteblogs(Data)
            this.$message({
            type: 'success',
            message: '删除成功!'
            })
         }).catch(() => {
          console.log(this.delarr)
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        
    }
  },
  mounted() {
    this.loading = false,
    Bloglist(1).then(data => {
        this.blogs = data.data.articleList
        this.totalCount = data.data.totalCount
      })
  }  
}
</script>

<style scoped>
body .el-scrollbar__wrap {
    overflow-x: hidden;
}
main {
  width: 100%;
  margin: 0 auto;
}
/* #table {
  padding: 20px;
  margin-bottom: 30px;
} */
#addbtn {
  display: flex;
  background-color: #eee;
}
.addbtn {
  margin: 30px 10px;
  height: 30px;
  text-align: center;
}
.option {
  width: 150px;
}
#delbtn{
  margin-top: 15px;
}
</style>
