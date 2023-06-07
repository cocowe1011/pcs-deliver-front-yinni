<template>
  <div class="login">
    <div class="login-left">
      <img src="./img/imgs_register.png" alt="免费注册">
    </div>
    <div class="login-right">
      <div class="login-right-top">
        <div class="login-right-top-left"></div>
        <div class="login-right-top-min" @click="minWindow"><i class="el-icon-minus" style="font-size:18px;font-weight:600;"></i></div>
        <div class="login-right-top-close" @click="closewindow"><i class="el-icon-close" style="font-size:18px;font-weight:600;"></i></div>
      </div>
      <div class="login-right-down">
        <p class="title">全自动束下输送系统</p>
        <p class="intro">欢迎使用全自动束下输送系统。简洁、易用的操作页面，全自动化管理全力帮助您提高效率。</p>
        <div class="login-form">
          <el-input placeholder="请输入用户名" class="user-code" v-model="userCode"></el-input>
          <el-input placeholder="请输入密码" class="user-password" type="password" v-model="userPassword" autocomplete="off"></el-input>
          <p class="tips">没有帐户？<span id="look-help">立即注册</span><span style="margin-left:185px;">忘记密码?</span> </p>
          <el-button class="user-login-button" type="primary" @click="login" :loading="loadingStatus">立即登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      userCode: '',
      userPassword: '',
      loadingStatus: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    login() {
      this.loadingStatus = true;
      setTimeout(() => {
        this.loadingStatus = false;
        // 跳转主页
        this.$nextTick(() => {
          this.$router.replace({
            path: '/homePage/orderList'
          });
        });
      }, 2000);
    },
    closewindow() {
      ipcRenderer.send('close-window')
    },
    minWindow() {
      ipcRenderer.send('min-window')
    }
  },
  created() {
    ipcRenderer.send('logStatus','logout');
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  &-left {
    pointer-events: none;
    -webkit-app-region: drag;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FBFCFD;
    img {
      width: 690px;
      height: 546px;
    }
  }
  &-right {
    width: calc(100% - 690px);
    height: 100%;
    padding-left: 28px;
    &-top {
      height:45px;
      width:100%;
      display:flex;
      &-left {
        flex:1;
        height: 100%;
        -webkit-app-region: drag;
        line-height: 45px;
        text-align: left;
        padding-left: 10px;
        font-size: 13px;
        font-weight: 600;
      }
      &-min,&-close,&-max {
        height:100%;
        width:50px;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-app-region: no-drag;
      }
      &-min:hover,&-max:hover {
        background-color: #EEEEEE;
      }
      &-close:hover {
        background-color: #F8635F;
        color: #fff;
      }
    }
    &-down {
      width: 100%;
      margin-top: 75px;
      .title {
        font-weight: 400;
        font-size: 36px;
        line-height: 25px;
        color: #262626;
      }
      .intro {
        width: 332px;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #8c8c8c;
        margin-top: -15px;
      }
      .login-form {
        padding: 20px 30px 20px 0px;
        ::v-deep .user-code{
          .el-input__inner {
            height:45px;
            margin-bottom:30px;
            font-size:14px !important;
            color: #000;
          }
        }
        ::v-deep .user-password{
          .el-input__inner {
            height:45px;
            font-size:14px !important;
            color: #000;
            margin-bottom: 2px;
          }
        }
        .user-login-button {
          height: 43px;
          border-radius: 2px;
          font-size: 16px;
          width: 100%;
        }
        .tips {
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #8c8c8c;
          margin-bottom: 36px;
          span {
            color: #4385ff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>