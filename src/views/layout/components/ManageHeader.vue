<template>
  <div >
    <el-header id="nav">
        <ul id='manageNav'>
            <section><router-link to="main">概要</router-link></section>
            <section><router-link to="manageartilce">文章</router-link></section>
            <section><router-link to="category">分类</router-link></section>
            <section><router-link to="comment">评论</router-link></section>
            <section><router-link to="user">用户</router-link></section>
            <!-- <section><router-link to="friend">友链</router-link></section> -->
        </ul>
        <ul id="userNav">
            <li>欢迎admin</li>
            <li> <a href="" @click="logout()">登出</a></li>
            <li><router-link to="/article">网站</router-link></li>
        </ul>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'ManageHeader',
  components: {},
  data() {
    return {

    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      .then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    }
  }
}
</script>

<style scoped>
/* .el-header {
    background-color: rgba(219, 108, 201, 0.1);
    color: #333;
    text-align: center;
    margin-right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 60px;
  } */
#manageNav {
  padding-left: 10px;
  display: flex;
}
#manageNav section{
    margin-right: 10px;
    background-color: rgba(219, 108, 201, 0.1);
}
#nav{
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #333;
}
li {
  list-style: none;
  display: inline;
  padding-right: 10px;
}

</style>
