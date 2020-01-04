<template>
    <div class="main">
      <!--轮播图-->
      <h3 id="tit">H❤aler</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/imgs/index/s1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imgs/index/s2.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../assets/imgs/index/s3.jpg" alt=""></div>
        </div>
      </div>

      <!--主体1-->
      <div class="main_one clearFix">
        <h1>欢迎您，</h1>
        <h1>我们能为您提供的服务:</h1>
        <div class="serlist">
          <img src="../assets/imgs/index/doc.png" alt="">
          <br>
          <a href="doctor.html">找医生</a>
          <br>
          <span>113医生</span>
        </div>
        <div class="serlist">
          <img src="../assets/imgs/index/hos.png" alt="">
          <br>
          <a href="hospital.html">找医院</a>
          <br>
          <span>269医院</span>
        </div>
        <div class="serlist">
          <img src="../assets/imgs/index/res.png" alt="">
          <br>
          <a href="appointment.html">预约挂号</a>
          <br>
          <span>59可预约</span>
        </div>
        <div class="serlist">
          <img src="../assets/imgs/index/fee.png" alt="">
          <br>
          <a href="services.html">收费服务</a>
          <br>
          <span>26项服务</span>
        </div>
      </div>

      <!--主体2-->
      <div class="title">
        <h4>为您推荐</h4>
      </div>
      <Scroll></Scroll>

      <!--主体3-->
      <div class="title">
        <h4>健康资讯</h4>
      </div>
      <div class="main_three clearFix">
        <div class="news">
          <img src="../assets/imgs/index/heal1.png" alt="">
          <h4>养胃+减肥的一日三餐</h4>
          <p>一日三餐食谱，简单的材料和过程，达到最快减肥效果的具体计划</p>
        </div>
        <div class="news">
          <img src="../assets/imgs/index/heal2.png" alt="">
          <h4>养胃+减肥的一日三餐</h4>
          <p>一日三餐食谱，简单的材料和过程，达到最快减肥效果的具体计划</p>
        </div>
        <div class="news">
          <img src="../assets/imgs/index/heal1.png" alt="">
          <h4>养胃+减肥的一日三餐</h4>
          <p>一日三餐食谱，简单的材料和过程，达到最快减肥效果的具体计划</p>
        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
  import Scroll from "./Scroll";
    export default {
        name: "Index",
        mounted(){
          this.initSwiper();
        },
        components:{
          Scroll,
        },
        methods:{
          initSwiper(){
            new Swiper('.swiper-container', {
              autoplay: {
                displayOnInteraction:false,
              },//可选选项，自动滑动
              loop : true,
              speed:1000,
              effect : 'cube',
              pagination: {
                el: '.swiper-pagination',
                clickable:true
              },
            })
          }
        }
    }
</script>

<style scoped lang="less">
@import "../assets/less/home";
</style>
