<template>
  <div >
      <main>
        <el-table id="table" show-overflow-tooltip="true" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" ref="multipleTable">
          <el-table-column type="selection" width="80"></el-table-column>
          <!-- <el-table-column prop="article" label="标题" >
            
          </el-table-column> -->
          <el-table-column prop="username" label="用户名" >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>文章数: {{ scope.row.number }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.username }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="email" label="电子邮件"  ></el-table-column>
          <el-table-column prop="level" label="权限"  ></el-table-column>
          <el-table-column prop="option" width="150">
            <template slot="header" slot-scope="">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
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
export default {
  name: '',
  components: {},
  data() {
    return {
      tableData: [
        { email: '2@qq.com', level: 'yes', username: 'yxy', number: 1 },
        { email: '1@qq.com', level: 'yes', username: 'xc', number: 2 },
        { email: '3@qq.com', level: 'yes', username: 'xixi', number: 2 },
        { email: '4@qq.com', level: 'yes', username: 'hah', number: 2 }
      ]
    }
  }
}
</script>

<style scoped>
main{
  width: 87%;
  margin:0 auto;
}
/* #table{
  padding: 20px; 
  margin-bottom: 30px;
} */

</style>