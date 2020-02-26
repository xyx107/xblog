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
        </ul>
      </div>
      <div id="main-form">
        <el-form :model="registerForm" ref="registerRef" :rules="registerFormrRules">
          <el-form-item prop="username">
            <el-input prefix-icon="iconfont icon-yonghu" type="text" placeholder="请输入用户名" v-model="registerForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="email" prefix-icon="iconfont icon-youjian" placeholder="请输入邮箱" v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item id="getCode" prop="code">
            <el-row :gutter="19">
              <el-col :span="15">
                <el-input prefix-icon="iconfont icon-mima" placeholder="请输入验证码" v-model="registerForm.code"></el-input>
              </el-col>
              <el-col :span="9">
                <el-button class="getcodebtn" type="info" plain @click="getCode()">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item class="foot">
            <el-button class="subbtn" type="primary" @click="register()">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Register, GetCode} from '@/api/login'
import service from '@/utils/request.js'
export default {
  name: "",
  components: {},
  data() {
    return {
      registerForm: {
        username: "bbbbb",
        email: "1297184665@qq.com",
        password: "bbbbb",
        code: ''
      },
      registerFormrRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    register() {
      this.$refs.registerRef.validate (valid => {
        if(!valid) return
        Register(this.registerForm)
        .then(response => {
          this.$message.success("注册成功！请登录...")
          // this.router.push({
          //   name: "login"
          // })
        })
        .catch(error => {
          this.$message.error("注册失败！");
        });
      })
    },
    getCode() {

    }
  }
};
</script>

<style scoped>
#main-body {
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
  /* background-color: rgba(20, 120, 120, 0.1); */
  border-radius: 5%;
  padding: 45px 10px 25px 10px;
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
  width: 350px;
  margin-top: 20px;
}
.getcodebtn{
  
}
</style>
