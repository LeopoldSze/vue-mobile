<template>
  <div class="main">
    <img src="../assets/imgs/walkthrough/logo.png" alt="">
    <h2>登录</h2>
    <div class="login">
      <img src="../assets/imgs/login/1.png" class="icos" alt="">
      <img src="../assets/imgs/login/2.png" class="icos" alt="">
      <input type="text" placeholder="用户名" id="uacc" v-model="acc">
      <input type="password" placeholder="密码" id="upass" v-model="pass">
      <router-link to="/forgetpass" id="forget">忘记密码？</router-link>
      <router-link to="/index"><button type="button" id="btn" @click="loginHandle">登录</button></router-link>
      <a href="javascript:" id="btnAcc">使用其他账号登录</a>
    </div>
    <div class="loginAcc">
      <i class="fa fa-qq"></i>
      <i class="fa fa-weixin"></i>
      <i class="fa fa-weibo"></i>
      <br>
      <a href="javascript:">QQ登录</a>
      <a href="javascript:">微信登录</a>
      <a href="javascript:">微博登录</a>
    </div>
    <p><span>还没有账号？</span><router-link to="/register" id="link">马上注册</router-link></p>
  </div>
</template>

<script>
  import {userLogin} from "../api/index";
  import { MessageBox } from 'mint-ui';
    export default {
        name: "Login",
        data(){
          return{
            acc:"",
            pass:""
          }
        },
      methods:{
        async loginHandle(){
          const result = await userLogin(this.acc,this.pass);
          if(result.errorNo === 0){
            this.$store.dispatch("getUserInfo",result.data[0]);
            MessageBox.alert(result.message, "提示");
            this.$router.push({path:"/profile"});
          }else if(result.errorNo === -1){
            MessageBox.alert(result.message, "提示");
          }
        }
      }
    }
</script>

<style scoped lang="less">
@import "../assets/less/login";
</style>
