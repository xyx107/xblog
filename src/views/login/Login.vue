<template>
   <div id="main" :style="note"> 
    <section id="left">
      <h2>Hi Blog!</h2>
     
        <div>
          <h5> 欢迎登陆 | 还没有账号？
            <router-link to="/register">
              <el-link type="primary">注册</el-link>
            </router-link>
          </h5>
        </div>
    </section>
    <section id="main-form">
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
       
        <el-form-item class="foot">
          <el-row :gutter="60">
              <el-col :span="12">
                <el-button class="subbtn" type="primary" @click="login()" >登录</el-button>
              </el-col>
              <el-col :span="12" >
                <router-link to="">
                  <el-link class="linkbtn" type="primary">忘记密码</el-link>
                </router-link>
              </el-col>
            </el-row>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import service from '@/utils/request.js'
import { Login } from '@/api/login.js'
import { setToken } from '@/utils/user.js'
// import { Message } from 'element-ui';

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      // backgroundImage:'url(' + require('src/assets/imgs/bg1.jpg') + ')',
       note: {
            backgroundImage: "url(" + require("@/assets/imgs/bg.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            marginTop: "0",
          },
      loginForm:{
        username: 'xyx107',
        password: 'aaaaaaa',
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
    // getCode() {
    //   this.$store.dispatch('user/getCode')
    //       this.$router.push({
    //       name: 'register'
    //       })
    // },
    resetLoginForm() {
      // console.log(this.$refs)
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate( valid => {
        if (valid){
          this.$store.dispatch('user/login', this.loginForm)
          .then( () => {
            if(this.$route.query.required == location.hostname) {
              this.$ruter.go(-1)
            } else {
              this.$router.push({
                name: 'article'
              })
            }
          }).catch(error => {});  
        }else {
          return false;
        }
      })
    }
  },
  // beforeRouteEnter (to, from, next){
  //   document.getElementsByTagName('body')[0].className = 'bgc';
  //   // window.document.body.style.background = 'blue';
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   document.body.removeAttribute('class', 'bgc');
  //   // window.document.body.style.background = '';
  //   next();
  // }
}
</script>

<style  scoped>
#main {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

h2{
  font-family: 'Adele';
  font-size: 50px;
}

#main-form {
  height: 260px;
  width: 400px;
  background: #fff;
  border-radius: 5px;
  background-image:linear-gradient(to bottom right, #ffbc4041,#ff66401e);
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.subbtn {
  width: 150px;
}

/* width=650px的时候form宽度固定 */
@media (max-width: 750px){
  #mian{
    display: flex;
    flex-direction: column;
  }
  #left{
    width: 100%;
  }
}
</style>
