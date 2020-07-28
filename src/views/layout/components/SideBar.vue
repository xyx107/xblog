<template>
  <div>
    <el-container>
      <el-scrollbar style=" height: 100%; ">
        <el-aside width="201px" style="height: 100%">
          <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>文章管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link to="manageartilce">文章管理</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="addblog">新增文章</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>分类管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <router-link to="category">分类管理</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">删除分类</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>评论管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <router-link to="comment">评论管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>用户管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <router-link to="user">用户管理</router-link>
                </el-menu-item>
                <el-menu-item index="4-2">修改权限</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-setting"></i>标签管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">删除标签</el-menu-item>
                <el-menu-item index="5-2">添加标签</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-scrollbar>
      <el-container>
        <el-header>
          <el-dropdown>
            <span>欢迎admin</span>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a href @click="logout()">退出</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/article">网站</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <el-scrollbar style="height: 100%;">
            <div v-if="this.$route.path == '/admin'">
              <mian/>
            </div>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script scoped>
export default {
  name: '',
  components: {},
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
    }
  },
  created() {}
}
</script>

<style  scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-header {
  border-bottom: 1px solid #eee;
}
a {
  color: #666;
}
a:visited {
  color: #333;
}
.el-container {
  height: calc(100vh);
  border: 1px solid rgb(230, 207, 207);
  background-color: #fff;
  border-top: none;
  border-bottom: none;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px；;
}
.el-main {
  height: calc(100vh - 1200px);
  padding: 20px 0 0 20px;
  background-image: linear-gradient(to bottom right, #ccffcc, #ffccff);
}
.el-breadcrumb {
  line-height: 60px;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
