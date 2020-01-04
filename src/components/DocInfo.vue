<template>
  <div class="main">
    <div class="mainInfo">
      <div class="cont">
        <a href="javascript:"><img src="../assets/imgs/doctor/call.png" alt=""></a>
        <img :src="detailData.photo" alt="">
        <a href="javascript:"><img src="../assets/imgs/doctor/chat.png" alt=""></a>
      </div>
      <div class="info">
        <h4>{{detailData.name}}</h4>
        <p>{{detailData.kind}}</p>
        <p><i class="fa fa-star-o"></i><span class="score">{{detailData.score}}</span>(234条评价)</p>
      </div>
      <a href="#"><button type="button" id="apo">预约挂号</button></a>
    </div>
    <div class="detail">
      <ul>
        <li><img src="../assets/imgs/doctor/a1.png" alt=""><a href="#">个人信息</a><i class="fa fa-angle-right"></i></li>
        <li><img src="../assets/imgs/doctor/a2.png" alt=""><router-link to="/docAddress">工作地址</router-link><i class="fa fa-angle-right"></i></li>
        <router-link :to="{path:'/docreview',query:{id:detailData.id}}" tag="li">
          <img src="../assets/imgs/doctor/a3.png" alt="">
          <a href="docReview.html">评价</a>
          <i class="fa fa-angle-right"></i>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import {reqDocInfo} from "../api/index";
    export default {
        name: "DocInfo",
        data(){
          return{
            id:this.$route.query.id,
            detailData:{},
          }
        },
        mounted(){
          this.getDetailData();
        },
        methods: {
          // 获取数据方法
          async getDetailData() {
            const detailInfo = await reqDocInfo(this.id);
            this.detailData = detailInfo.data[0];
          },
        }
    }
</script>

<style scoped lang="less">
@import "../assets/less/docMain";
</style>
