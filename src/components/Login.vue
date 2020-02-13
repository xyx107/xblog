<template>
  <div id="login-main">
      <el-form ref="loginFormRef" id="login-form" :model="loginForm" :rules="formRules">
        <el-form-item prop="username"> 
            <el-input prefix-icon="iconfont icon-yonghu" placeholder="请输入用户名/邮箱" v-model="loginForm.username"> </el-input >
        </el-form-item>
        <el-form-item prop="password">
            <el-input prefix-icon="iconfont icon-mima" show-password placeholder="请输入密码" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item >  
            <el-input prefix-icon="iconfont icon-mima"  placeholder="请输入验证码" v-model="loginForm.verification"></el-input>
        </el-form-item> 
        <el-form-item >
            <router-link to="/forgetpw" > 
              <el-link type="info">忘记密码</el-link>
            </router-link>
            <el-button type="info" plain @click="resetLoginForm">重置</el-button>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login" >登录</el-button>
          <el-button type="primary" plain >
            <router-link to="/register" > 
              注册
            </router-link>
          </el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import service from '@/utils/request.js'
import { xxx } from '@/api/login.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      loginForm:{
        username: '',
        password: '',
        verification: ''
      },
      formRules:{
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"}
        ],
        password:[
          {required: true, message: "请输入密码" },
          { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      // console.log(this.$refs)
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        console.log(validate)
        if(!valid) return //验证失败则返回
        const {data: res} = await this.$http.post("login//登录验证地址",this.loginForm)
        if(res.meta.status !=200) return console.log("登陆失败")
        console.log("登陆成功")
     })
    }
  }
}
</script>

<style >
#login-main{
  background-color: #eee;
}
.login-logo{
  width: 27%;
  height: 30%;
  position: absolute;
  /* left: 50%;
  transform: translate(-50%,-50%); */

  border:1px solid #ddd;
  border-radius: 50%;
  box-shadow: 0 0 5px #ccc;
  padding: 5px;
  
  }
img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ddd;
  }
#login-form{
  width: 300px;
  background-color: #eee;
  border-radius: 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 25px 15px ;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.btns{
  display: flex;
  justify-content: flex-end;
}
</style>
