<template>
    <div class="main">
      <!--主体-->
      <div class="main_one clearFix">
        <h1>您需要什么样的药品？</h1>
        <div class="serlist">
          <img src="../assets/imgs/index2/d1.png" alt="">
          <br>
          <router-link to="/drugList">药品列表</router-link>
          <br>
          <span>113种药品</span>
        </div>
        <div class="serlist">
          <img src="../assets/imgs/index2/d2.png" alt="">
          <br>
          <router-link to="/drugShop">排列A-Z</router-link>
          <br>
          <span>459种药品</span>
        </div>
        <div class="serlist">
          <img src="../assets/imgs/index2/d3.png" alt="">
          <br>
          <a href="#">提醒</a>
          <br>
          <span>19个提醒</span>
        </div>
        <div class="serlist">
          <img src="../assets/imgs/index2/d4.png" alt="">
          <br>
          <router-link to="/drugShop">商店</router-link>
          <br>
          <span>在线商店</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Drugs"
    }
</script>

<style scoped lang="less">
@import "../assets/less/listDrug";
</style>
