<template>
  <div id="main">
    <section id="left">
      <h2>Hi Blog!</h2>
      <h3>欢迎登陆</h3>
        <div>还没有账号？<router-link to="/register">
              <el-link type="primary">注册</el-link>
            </router-link>
        </div>
    </section>
    <section id="right">
      <div id="main-form">
      <el-form  :model="loginForm" ref="loginFormRef" :rules="logRules" size="medium">
        <el-form-item status-icon prop="username">
          <el-input
            type="text"
            prefix-icon="iconfont icon-yonghu"
            placeholder="请输入用户名/邮箱"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-mima"
            show-password
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item id="getCode" prop="code">
          <el-row :gutter="12">
            <el-col :span="15">
              <el-input
                prefix-icon="iconfont icon-mima"
                placeholder="请输验证码"
                v-model="loginForm.code"
              ></el-input>
            </el-col>

            <el-col :span="7">
              <el-button type="info" plain @click="getCode()">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label-width="60px"></el-form-item>

        <el-form-item class="foot">
          <el-row :gutter="19">
              <el-col :span="15">
                <el-button class="subbtn" type="primary" @click="login()" >登录</el-button>
              </el-col>
              <el-col :span="9">
                <router-link to="/forgetpw">
                  <el-link type="primary">忘记密码</el-link>
                </router-link>
              </el-col>
            </el-row>
        </el-form-item>
      </el-form>
      </div>
    </section>
  </div>
</template>

<script>
import service from '@/utils/request.js'
import { Login } from '@/api/login.js'
import {setToken} from '@/utils/user.js'

// import { Message } from 'element-ui';

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      loginForm:{
        username: 'archerx',
        password: 'archerx',
        code: ''
      },
      logRules:{
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"}
        ],
        password:[
          {required: true, message: "请输入密码", trigger: "blur" },
          { min: 7, message: '长度大于7个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getCode() {
      this.$store.dispatch('user/getCode')
          this.$router.push({
          name: 'register'
          })
    },
    resetLoginForm() {
      // console.log(this.$refs)
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate( valid => {
        if (valid){
          this.$store.dispatch('user/login', this.loginForm)
          .then( () => {
          this.$router.push({
            name: 'sidebar'
            })
          }).catch(error => {});  
        }else {
          return false;
        }
      })
    }
  }
}
</script>

<style  scoped >
#main{
  background: url(/assets/imgs/background.jpg) no-repeat; 
  opacity: 1; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#left{
  margin: 0 auto;
  
}
h2{
  font-family: 'Adele';
  font-size: 50px;
}
#right {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
#main-form {
  height: 320px;
  width: 480px;
  background: #fff;
  border-radius: 5px;
  /* background-color:#409eff1a; */
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.subbtn {
  width: 200px;
}
/* .menu {
  font-size: 20px;
}
.menu li {
  display: inline-block;
  width: 88px;
  line-height: 40px;
  border-radius: 2px;
  cursor: pointer;
} */

/* //width=650px的时候form宽度固定 */
@media screen {
  
}
</style>
