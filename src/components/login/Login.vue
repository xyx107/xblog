<template>
  <!-- <div id="login-main">
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
  </div> -->
  <div>
    <div id="main-body">
      <div class="menu">
        <ul>
          <li>
            <router-link to="/login">
              <el-link type="info">登录</el-link>
            </router-link>
          </li>
          <li>
            <router-link to="/register">
              <el-link type="info">注册</el-link>
            </router-link>
          </li>
          <!-- <li v-for="item in menuTab" :key="item.index" :class="{'current': iscurrent}"
            @click="switchMenu(item)">{{item.name}}111</li>-->
        </ul>
      </div>
      <div id="main-form">
      <el-form  :model="loginForm" ref="loginFormRef" :rules="logRules" size="medium">
        <el-form-item status-icon prop="username">
          <el-input
            type="text"
            prefix-icon="iconfont icon-yonghu"
            placeholder="请输入用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item status-icon prop="email">
          <el-input
            
            prefix-icon="iconfont icon-youjian"
            placeholder="请输入邮箱"
            v-model="loginForm.email"
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
              <el-button type="info" plain @click="getCode">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label-width="60px"></el-form-item>

        <el-form-item class="foot">
          <el-button class="subbtn" type="primary" @click="submitForm('loginFormRef')" >登录</el-button> 
            <router-link to="/forgetpw">
              <el-link type="info">忘记密码</el-link>
            </router-link>
        </el-form-item>
      </el-form>
      </div>
      <!-- @click="login()" <Login v-show="isregister"></Login>
      <Register v-></Register>-->
    </div>
  </div>
</template>

<script>
import service from '@/utils/request.js'
import { Login } from '@/api/login.js'

// import { Message } from 'element-ui';

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      loginForm:{
        username: 'aaaaa',
        password: 'aaaaa',
        email: '1297184665@qq.com',
        code: ''
      },
      logRules:{
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"}
        ],
        password:[
          {required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, message: '长度大于5个字符', trigger: 'blur' }
        ],
        emali: [
          {required: true, message: "请输入邮箱", trigger: "blur" },
        ]
      }
    }
  },
  methods: {
    getCode() {

    },
    resetLoginForm() {
      // console.log(this.$refs)
      this.$refs.loginFormRef.resetFields();
    },
    // login() {
    //   this.$refs.loginFormRef.validate(async (valid) => {
    //     console.log(validate)
    //     if(!valid) return //验证失败则返回
    //     const {data: res} = await this.$http.post("login",this.loginForm)
    //     if(res.meta.status !=200) return console.log("登陆失败")
    //     console.log("登陆成功")
    //  })
    login () {
        let Data = {
          username: 'aaaaa',
          email: '1297184665@qq.com',
          password: 'aaaaa',
          code: ''}
        this.$store.dispatch('user/login', Data)
        .then(response => {
          this.$router.push({
            name: 'Console'
          })
        }).catch(error => {});
      },
    submitForm (loginFormRef)  {
        this.$refs.loginFormRef.validate((valid) => {
          if (valid) {
           this.$options.methods.login()
          } else {
            return false;}
        })
            }
      
    // login() {
    //   this.$refs.loginFormRef.validate( valid => {
    //     if (valid){
    //       //因为vuex里的login返回了一个promise，所以可以直接用.then
    //       this.$store.dispatch('user/login', this.loginForm)
    //       .then( () => { 
    //        setToken('aaa') 
    //       // console.log(store.state.user.token)
    //       this.$router.push({
    //       name: 'article'
    //       })
    //     }).catch(error => {});  
    //   } else {
    //       return false;
    //     }
    //     //  await 
    //   })
    // }
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
  background-color: #01162d1a;
}
.menu {
  margin-top: 10%;
  height: 20px;
}
.menu li {
  display: inline-block;
  width: 88px;
  line-height: 50px;
  font-size: 14px;
  color: #fff;
  background-color: #ffffff1a;
  border-radius: 2px;
  cursor: pointer;
}
#main-form {
  width: 350px;
  background-color:#409eff1a;
  padding: 45px 10px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.foot {
  display: flex;
  justify-content: center;
}
.subbtn {
  width: 200px;
}
</style>
