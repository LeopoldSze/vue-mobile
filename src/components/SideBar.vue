<template>
  <div class="main" v-show="sideBarShow.sideBarShow">
    <div class="menu">
      <div class="userArea">
        <img :src="userInfo.photo" alt=""/>
        <h4>{{userInfo.acc}}</h4>
      </div>
      <ul>
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/drugs">药物</router-link></li>
        <li><router-link to="/doctor">医生</router-link></li>
        <li><router-link to="/hospital">健康资讯</router-link></li>
        <li><router-link to="/profile">个人中心</router-link></li>
        <li><router-link to="/login" id="exit">退出登录</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
    export default {
        name: "SideBar",
        computed:{
          ...mapState(["sideBarShow","userInfo"]),
        },
    }
</script>

<style scoped lang="less">
  @import "../assets/less/menu";
</style>
