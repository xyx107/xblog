<template>
  <div id="logIndex">
    <div id="main-body">
      <ul class="menu">
        <li
          v-for="item in menuTab"
          :key="item.index"
          :class="{'current': iscurrent}"
          @click="switchMenu(item)"
        >{{item.name}}</li>
      </ul>
      <el-form id="main-form" ref="logFormRef" :rules="logFormRules" size="medium">
        <el-form-item status-icon prop="username">
          <el-input
            type="emali"
            prefix-icon="iconfont icon-yonghu"
            placeholder="请输入邮箱登录"
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
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="15">
              <el-input
                prefix-icon="iconfont icon-mima"
                placeholder="请输入验证码"
                v-model="loginForm.verification"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <el-button type="info" plain @click="getCode">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label-width="60px"></el-form-item>

        <el-form-item class="btn">
          <!-- 忘记密码-登录模块 -->
          <router-link to="/forgetpw">
            <el-link type="info">忘记密码</el-link>
          </router-link>
          <el-button type="primary" @click="submit">{{ (isRegist) ? "登录": "注册"}}</el-button>
          <!-- <el-button type="info" plain @click="resetLoginForm">重置</el-button> -->
        </el-form-item>
      </el-form>
      <!-- <Login v-show="isregister"></Login>
      <Register v-></Register>-->
    </div>
  </div>
</template> 

<script>
import Login from "./Login";
import Register from "./Register";
export default {
  name: "",
  components: {
    Login,
    Register
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        verification: ""
      },
      logFormRules: {
        username: [
            {required: true, message: "请输入用户名", trigger: blur }
        ],
        password:[
            {}
        ]
      },

      //动态显示
      isRegist: true
      //提交按钮
      // isLogin: true
    };
  },
  methods: {
    login() {
        this.$refs.loginFormRef.validate(async (valid) => {
            if(!valid) return;
            const{data: res} = await this.$http.post("login", this.loginForm);
            if(res.meta.status !== 200) return this.$message.error("登陆失败！");
            this.$message.success("登陆成功！");
            //保存token
            window.localStorage.setItem("token",res.data.token);
            this.$router.push("/blogs")

             
        })
    }
  }
};
</script>

<style scoped>
#main-body {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#main-form {
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #eee;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
