<template>
  <div >
      <main>
        <el-table id="table" show-overflow-tooltip="true" :data="tableData" ref="multipleTable">
          <el-table-column type="selection" width="80"></el-table-column>
          <el-table-column prop="name" label="名称" >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>文章数: {{ scope.row.number }}</p>
                <p>状态: {{ scope.row.ok }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="child" label="子分类" ></el-table-column>
          <el-table-column prop="option" width="100" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="save()">新建
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleUpdate(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
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
        { name: 'js', number: '1', ok: 'yes', child: 'yxy'},
        { name: 'vue', number: '2', ok: 'yes', child: 'xc' },
        { name: 'html', number: '3', ok: 'yes', child: 'yxy' },
        { name: 'go', number: '4', ok: 'yes', child: 'xc' },
      ]
    }
  },
  methods: {
    async save() {
      const res = await this.$http.post('categories', this.model)
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        $message: '保存成功'
      })
    }
  }
}
</script>

<style scoped >
main{
  width: 87%;
  margin:0 auto;
}
/* #table{
  padding: 20px; 
  margin-bottom: 30px;
} */
</style>
