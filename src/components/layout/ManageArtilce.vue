<template>
  <div >
      <h2>文章管理</h2>
      <main>
        <el-table id="table" show-overflow-tooltip="true" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" ref="multipleTable">
          <el-table-column type="selection" width="80"></el-table-column>
          <el-table-column prop="article" label="标题" >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>文章: {{ scope.row.article }}</p>
                <p>状态: {{ scope.row.ok }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.article }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="username" label="作者" ></el-table-column>
          <el-table-column prop="date" label="日期"  ></el-table-column>
          <el-table-column prop="option" width="200">
             <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
        { date: '1', article: '1', option: '1', ok: 'yes', username: 'yxy'},
        { date: '2', article: '1', option: '1', ok: 'yes', username: 'xc' },
        { date: '3', article: '1', option: '1', ok: 'yes', username: 'yxy' },
        { date: '4', article: '1', option: '1', ok: 'yes', username: 'xc' },
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
#table{
  padding: 20px; 
  margin-bottom: 30px;
}
</style>
