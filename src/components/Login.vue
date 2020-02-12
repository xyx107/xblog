<template>
  <div id="main">
      <el-form id="login-form">
        <label>
            用户名：
            <el-input  type="text" placeholder="请输入用户名" v-model="username"> </el-input >
        </label>
        <label>
            密码：
            <el-input show-password placeholder="请输入密码" v-model="password"></el-input>
        </label>
        <label>
            验证码
        <el-input type="text" clearable ></el-input>
        </label>
        <label>
            <router-link to="/forgetpw" > 
              <el-link type="info">忘记密码</el-link>
            </router-link>
        </label>
        <el-button type="primary" plain value="登录">登录</el-button>
        <el-button type="primary" plain value="注册">注册</el-button>
        
      </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
        username: '',
        password: ''
    }
  }
}
</script>

<style>
#main{
  width:60%;
  padding: 10% 10%;
  background-color: #eee;
}
</style>
