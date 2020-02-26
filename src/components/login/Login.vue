<template>
  <div>
    <div id="main-body">
      <div class="menu">
        <ul>
          <li>
            <router-link to="/login">
              <el-link type="primary">登录</el-link>
            </router-link>
          </li>
          <li>
            <router-link to="/register">
              <el-link type="primary">注册</el-link>
            </router-link>
          </li>
          <!-- <li v-for="item in menuTab" :key="item.index" :class="{'current': iscurrent}"
            @click="switchMenu(item)">{{item.name}}</li>-->
        </ul>
      </div>
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
    </div>
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
        username: 'aaaaa',
        password: 'aaaaa',
        code: ''
      },
      logRules:{
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"}
        ],
        password:[
          {required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, message: '长度大于5个字符', trigger: 'blur' }
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
            name: 'outline'
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

<style >
#main-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu {
  margin-top: 10%;
  height: 20px;
  font-size: 20px;
}
.menu li {
  display: inline-block;
  width: 88px;
  line-height: 40px;
  border-radius: 2px;
  cursor: pointer;
}
#main-form {
  width: 60%;
  /* background-color:#409eff1a; */
  padding: 45px 10px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.subbtn {
  width: 200px;
}
/* //width=650px的时候form宽度固定 */
</style>
