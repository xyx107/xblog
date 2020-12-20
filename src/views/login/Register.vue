<template>
  <div id="main" :style="note">
    <section id="left">
      <h2>Hi Blog!</h2>
      
        <div>
          <h4>欢迎注册|已有账号？
            <router-link to="/login">
              <el-link type="primary">登陆</el-link>
            </router-link>
          </h4>
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
       note: {
            backgroundImage: "url(" + require("@/assets/imgs/bg.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            marginTop: "0",
          },
      registerForm: {
        username: "xingyu",
        email: "xyx107@outlook.com",
        password: "123456",
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
          { required: true, message: "请输入邮箱", trigger: "blur" },
          // { mix:5, message: '长度大于5个字符', trigger: "blur" }
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
          this.$options.methods.clearCountDown()
        }).catch(error => {
          // this.$message.error("注册失败！")
        })
      })
    },
    updataButtonStatus(params) {
        this.codebtnStatus.val = params.val;
        this.codebtnStatus.text = params.text;
    },
    countDown(number) {
      if(this.timer) { //防止有没清除的定时器
        clearInterval(this.timer) 
      }
      let time = number
      this.timer = setInterval(() => {
        time--
        if(time === 0) {
          clearInterval(this.timer) //清除定时器
          this.updataButtonStatus({
            val: false,
            text: '再次获取'
          })
        }else {
          // console.log(time)
          this.updataButtonStatus ({
            val: true ,
            text: `${time}秒后重发`
          })
        }
      }, 1000)
    },
    getcode() {
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
      // var that = this
      GetCode(Email).then( (response) => {
          // let data = response.data
          this.countDown(60)
        }).catch( error => {
          console.log(error)
        })
    },
    clearCountDown () {
        // 还原验证码按钮默认状态
        updataButtonStatus({
          val: false,
          text: '获取验证码'
        })
        // 清除倒计时
        clearInterval(timer.value)
      }
  }
}
</script>
 
<style scoped>
#main{
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
 
h2{
  font-family: 'Adele';
  font-size: 50px;
}
 
#main-form {
  height: 380px;
  width: 480px;
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