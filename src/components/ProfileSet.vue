<template>
  <div class="main">
    <div class="infoEdit">
      <p>账号<input type="text" id="uacc" :value="userInfo.acc" ref="acc"></p>
      <p>密码<input type="text" id="upass" :value="userInfo.pass" ref="pass"></p>
      <p>头像<input type="text" id="uphoto" :value="userInfo.photo" ref="photo"></p>
      <p>年龄<input type="text" id="uage" :value="userInfo.age" ref="age"></p>
      <p>血型<input type="text" id="ublood" :value="userInfo.blood" ref="blood"></p>
      <p>性别<input type="text" id="ugender" :value="userInfo.gender" ref="gender"></p>
      <p>身高<input type="text" id="uheight" :value="userInfo.height" ref="height"></p>
      <p>体重<input type="text" id="uweight" :value="userInfo.weight" ref="weight"></p>
      <p>邮箱<input type="text" id="umail" :value="userInfo.mail" ref="mail"></p>
      <p><button type="button" id="btn" @click="updProfile">提交修改</button></p>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import {userUpd} from "../api";
  import { MessageBox } from 'mint-ui';
    export default {
        name: "ProfileSet",
        data(){
          return{
            info:{},
          }
        },
        mounted(){
          this.isLogin();
        },
        computed:{
          ...mapState(["userInfo"])
        },
        methods:{
          // 判断是否登录方法
          isLogin(){
            if(Object.keys(this.userInfo).length === 0){
              MessageBox.alert("您还未登录，请先登录再修改资料！");
              this.$router.push({path:"/login"});
              return false;
            }
            return true;
          },
          // 修改资料
          updProfile(){
            this.info.id = this.userInfo.id;
            this.info.acc = this.$refs.acc.value;
            this.info.pass = this.$refs.pass.value;
            this.info.photo = this.$refs.photo.value;
            this.info.age = this.$refs.age.value;
            this.info.blood = this.$refs.blood.value;
            this.info.gender = this.$refs.gender.value;
            this.info.height = this.$refs.height.value;
            this.info.weight = this.$refs.weight.value;
            this.info.mail = this.$refs.mail.value;
            const userInfos = userUpd(...this.info);
            //let msg = this.$store.dispatch("updUserInfo",{userInfo:this.info});
            MessageBox.alert(userInfos.message, "提示");
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped lang="less">
@import "../assets/less/profileSet";
</style>
