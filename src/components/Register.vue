<template>
  <div >
      <el-form :rules="registerFormrRules">
          <el-form-item prop="username">
              <el-input placeholder="请输入用户名"></el-input>
          </el-form-item>
           <el-form-item prop="email">
              <el-input placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="verification">
              <el-input placeholder="请输入验证码"></el-input>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
        registerFormrRules: [
            {required: true, message: "请输入用户名"}
        ]
    }
  }
}
</script>

<style>
</style>
