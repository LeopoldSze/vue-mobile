<template>
    <div class="main">
      <!--姓名-->
      <div class="nameArea">
        <img :src="userInfo.photo" alt=""/>
        <h4>{{userInfo.acc}}</h4>
      </div>

      <!--信息-->
      <div class="bodyInfo">
        <ul id="bodyInfo">
          <li>
            <span>年龄</span>
            <p>{{userInfo.age}}<span>岁</span></p>
          </li>
          <li>
            <span>血型</span>
            <p>{{userInfo.blood}}</p>
          </li>
          <li>
            <span>性别</span>
            <p>{{userInfo.gender}}</p>
          </li>
          <li>
            <span>身高</span>
            <p>{{userInfo.height}}<span>cm</span></p>
          </li>
          <li>
            <span>体重</span>
            <p>{{userInfo.weight}}<span>kg</span></p>
          </li>
          <li>
            <span>目标</span>
            <p>78<span>%</span></p>
          </li>
        </ul>
      </div>

      <!--设置-->
      <div class="setting">
        <ul>
          <li><img src="../assets/imgs/index2/target.png" alt=""><a href="">目标设置</a><i class="fa fa-angle-right"></i></li>
          <li><img src="../assets/imgs/index2/like.png" alt=""><a href="">收藏</a><i class="fa fa-angle-right"></i></li>
          <li><img src="../assets/imgs/index2/ensurence.png" alt=""><a href="">保险</a><i class="fa fa-angle-right"></i></li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState} from "vuex";
  import { MessageBox } from 'mint-ui';
    export default {
        name: "Profile",
        computed:{
          ...mapState(["userInfo"])
        },
        mounted(){
          this.isLogin();
        },
        methods:{
          // 判断是否登录方法
          isLogin(){
            if(Object.keys(this.userInfo).length === 0){
              MessageBox.alert("您还未登录，请先登录再查看资料！");
              this.$router.push({path:"/login"});
              return false;
            }
            return true;
          },
        }
    }
</script>

<style scoped lang="less">
@import "../assets/less/profile";
</style>
