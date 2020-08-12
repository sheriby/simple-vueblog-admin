<template>
  <div class="login" :style="{height: documentHeight}">
    <div class="form">
      <el-form :model="loginData" :rules="rules">
        <h1 class="welcome">こんにちは</h1>
        <span class="info">Username or Email Address</span>
        <el-form-item prop="name">
          <el-input v-model="loginData.name"/>
        </el-form-item>
        <span class="info">Password</span>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginData.password"/>
        </el-form-item>
        <el-form-item>
          <div class="remember">
            <span class="info">Remember Me</span>
            <el-switch active-color="#ff8198" v-model="loginData.remember"/>
          </div>
        </el-form-item>
        <div class="drag">
          <drag ref="verify"/>
        </div>
        <el-form-item>
          <el-button round @click="login">Log In</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Drag from '@/views/login/Drag'
  export default {
    name: "Login",
    components: {
      Drag
    },
    data() {
      return {
        documentHeight: '600px',
        loginData: {
          name: '',
          password: '',
          remember: false,
          verify: false
        },
        rules: {
          name: [
            {required: true, message: 'Please Input Your Username', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please Input Your Password', trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      if (document.documentElement.clientHeight > 600) {
        this.documentHeight = document.documentElement.clientHeight + 'px'
      }
    },
    methods: {
      login() {
        this.loginData.verify = this.$refs.verify.confirmSuccess
        if (!this.loginData.verify) {
          this.$message({
            message: 'Are you a robot? Please Verify.',
            type: 'error',
            center: true
          })
        }
        console.log(this.loginData)
      }
    }
  }
</script>

<style lang="less" scoped>

  div.login {
    width: 100%;
    background: url("~@/assets/image/bg.jpg");
    background-size: cover;

    padding-top: 8%;

    h1.welcome {
      color: #ff8198;
      font-size: 40px;
      text-align: center;
      font-family: "Source Han Sans JP", fantasy;
      font-style: italic;
      letter-spacing: 3px;
    }

    div.form {
      background: rgba(255, 255, 255, 0.8);
      max-width: 380px;
      max-height: 500px;
      margin: 0 auto;
      padding: 20px 40px;
      box-shadow: rgba(0, 0, 0, 0.4) 0 10px 10px;
      border-radius: 5px;

      span.info {
        color: #999999;
        font-size: 13px;
        margin: 0;
      }

      .el-form-item {
        padding: 0;
        margin: 10px 0;
      }

      div.remember {
        margin-top: 10px;
        .el-switch {
          margin-left: 55%;
        }
      }

      div.drag {
        margin: 10px 0;
      }

      .el-input {
        font-size: 16px;
        font-family: serif;

        /deep/ input {
          color: #ff8198;
        }
      }

      .el-button {
        margin-top: 20px;
        width: 100%;
        background-color: #ff8198;
        color: #ffffff;
        border: none;
        outline: none;
        position: relative;

        &:active {
          top: 2px;
        }
      }
    }
  }


</style>