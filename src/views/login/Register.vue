<template>
  <div id="main">
    <section id="left">
      <h2>Hi Blog!</h2>
      <h2>欢迎注册</h2>
        <div>已有账号？<router-link to="/login">
              <el-link type="primary">登陆</el-link>
            </router-link>
        </div>
    </section>
    <section id="right">
        
        <!-- <ul>
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
        </ul> -->
      <div id="main-form">
        <el-form :model="registerForm" ref="registerRef" :rules="registerFormrRules">
          <el-form-item prop="username">
            <el-input prefix-icon="iconfont icon-yonghu" type="text" placeholder="请输入用户名" v-model="registerForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="email" prefix-icon="iconfont icon-youjian" placeholder="请输入邮箱" v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" prefix-icon="iconfont icon-mima" placeholder="请输入密码" v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item id="getCode" prop="code">
            <el-row :gutter="19">
              <el-col :span="15">
                <el-input prefix-icon="iconfont icon-mima" placeholder="请输入验证码" v-model="registerForm.code"></el-input>
              </el-col>
              <el-col :span="9">
                <el-button class="getcodebtn" type="info" plain @click="getcode()" :disabled="codebtnStatus.val">{{codebtnStatus.text}}</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item class="foot">
            <el-button class="subbtn" type="primary" @click="register()" :disabled="registerbtnStatus">注册</el-button>
          </el-form-item>
        
      </el-form>
      </div>
    </section>
  </div>
</template>

<script>
import { Register, GetCode} from '@/api/login'
import { Message } from 'element-ui';
import { validateEmail } from '@/utils/validate.js'
export default {
  name: "",
  components: {},
  data() {
    return {
      registerForm: {
        username: "bbbbb",
        email: "2223333333@qq.com",
        password: "bbbbb",
        code: ''
      },
      timer: null,
      codebtnStatus: {
        val: false,
        text: '获取验证码'
      },
      registerbtnStatus: true,
      registerFormrRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { mix:5, message: '长度大于5个字符', trigger: "blur" }
        ],
        // code: [
        //   { required: true, message: "请输入验证码", trigger: "blur" }
        // ]
      }
    }
  },
  methods: {
    register() {
      this.$refs.registerRef.validate (valid => {
        if(!valid) return
        Register(this.registerForm).then(response => {
          this.$message.success("注册成功！请登录...")
          this.$router.push({
            name: "login"
          })
        }).catch(error => {
          this.$message.error("注册失败！")
        })
      })
    },   
    updataButtonStatus(params) {
        codebtnStatus.val = params.val;
        codebtnStatus.text = params.text;
    },
    countDown(number) {
      if(this.timer) { //防止有没清除的定时器
        clearInterval(this.timer) 
      }
      let time = number
      this.timer = setInterval(() => {
        time--
        console.log(typeof(this.timer))
        if(time === 0) {
          this.$options.methods.updataButtonStatus({
            val: false,
            text: '再次获取'}
          )
          clearInterval(this.timer) //清除定时器
          
        }else {
          this.codebtnStatus = {
            val: true ,
            text: `倒计时${time}秒`
          }
        }
      }, 1000)
    },
    getcode()  {
      
      // console.log(typeof(this.timer.value))
      this.codebtnStatus = {
        val: true,
        text: '发送中'
      }
      this.registerbtnStatus = false
      let Email = {
        email: this.registerForm.email
      }
      if(this.registerForm.email == '' ) {
          this.$message.error('邮箱不能为空！！');
          return false;
        }
      if(validateEmail(this.registerForm.email)) {
          this.$message.error('邮箱格式有误，请重新输入！！');
          return false;
      }
      // debugger
      GetCode(Email).then( response => {
          // let data = response.data
          this.$options.methods.countDown(5)
          console.log('this.codebtnStatus')
        }).catch( error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
#main{
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
}
#right {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
#main-form {
  height: 380px;
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
.foot {
  display: flex;
  justify-content: center;
}
.subbtn {
  width: 350px;
  margin-top: 20px;
}
/* .getcodebtn{
  
} */
</style>
