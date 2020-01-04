<template>
  <div class="main">
    <div class="info">
      <img :src="detailData.photo" alt=""/>
      <h4>{{detailData.name}}</h4>
      <p>￥{{detailData.price}}</p>
      <ul>
        <li>
          <h4>它是什么？</h4>
          <p>{{detailData.descp}}</p>
        </li>
        <li>
          <h4>服用方法</h4>
          <p>{{detailData.methods}}</p>
        </li>
      </ul>
    </div>
    <button type="button" id="btn" @click="isLogin">加入购物车</button>
  </div>
</template>

<script>
  import {reqDrugInfo} from "../api/index";
  import {mapState} from "vuex";
  import { MessageBox } from 'mint-ui';
    export default {
      name: "DrugDetail",
      data(){
        return{
          id:this.$route.query.id,
          detailData:{},
        }
      },
      computed:{
        ...mapState(["userInfo"])
      },
      mounted(){
        this.getDetailData();
      },
      methods: {
        // 获取数据方法
        async getDetailData() {
          const detailInfo = await reqDrugInfo(this.id);
          this.detailData = detailInfo.data[0];
        },
        // 判断是否登录方法
        isLogin(){
          if(Object.keys(this.userInfo).length === 0){
            MessageBox.alert("您还未登录，请先登录再购买！");
            this.$router.push({path:"/login"});
            return false;
          }else{
            MessageBox.alert("加入购物车成功！");
            return true;
          }
        }
      }

    }
</script>

<style scoped lang="less">
@import "../assets/less/drugDetail";
  #btn{
    margin-top: 150/37.5rem;
  }
</style>
