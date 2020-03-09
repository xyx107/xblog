<template>
  <div >
      <main>
        <el-table id="table" show-overflow-tooltip="true" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" ref="multipleTable">
          <el-table-column type="selection" width="80"></el-table-column>
          <!-- <el-table-column prop="article" label="标题" >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>文章: {{ scope.row.article }}</p>
                <p>状态: {{ scope.row.ok }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.article }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column> -->
          <el-table-column prop="username" label="作者" ></el-table-column>
          <el-table-column prop="content" label="内容"  ></el-table-column>
          <el-table-column prop="option" width="200">
             <template slot="header" slot-scope="">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">回复</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </main>
      <!-- <div id="test1">
      <div id="main"></div>
      <div id="left"></div>
      <div id="right"></div>
    </div> -->
    <!-- <div id="test2">
      <div>
        <div id="main"></div>
      </div>
      <div id="left"></div>
      <div id="right"></div>
    </div> -->
  </div>
</template>

<script scoped>
export default {
  name: '',
  components: {},
  data() {
    return {
       tableData: [
        { content: '1', ok: 'yes', username: 'yxy'},
        { content: '1', ok: 'yes', username: 'xc' },
        { content: '1', ok: 'yes', username: 'yxy' },
        { content: '1', ok: 'yes', username: 'xc' },
      ]
    }
  }
}
</script>

<style scoped>
#test1{
margin:0 200px 0 200px;
}
#test1 #main{
widows: 100%;
background-color: yellow;
position: relative;
}
#test1 #left{
height: 100px;
width: 200px;
float: left;
left: -100%;
margin-left: 200px;
background-color: blue;
position: relative;

}
#test1 #right{
height: 100px;
width: 200px;
float: left;
left: -200px;
background-color: blue;
position: relative;

}
#test2 #main{
height: 100px;
background-color: red;
}
#test2 #left{
height: 100px;
width: 200px;
float: left;
background-color: blue;
}
#test2 #right{
height: 100px;
width: 200px;
float: left;
background-color: blue;
}
main{
  width: 87%;
  margin:0 auto;
}
/* #table{
  padding: 20px; 
  margin-bottom: 30px;
} */
</style>
