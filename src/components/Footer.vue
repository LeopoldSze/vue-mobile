<template>
    <div class="main">
      <!--底部-->
      <footer>
        <router-link to="/drugs"><img src="../assets/imgs/index/drugs.png" alt=""></router-link>
        <router-link to="/doctor"><img src="../assets/imgs/index/doctor.png" alt=""></router-link>
        <router-link to="/home"><img src="../assets/imgs/index/stethoscope.png" alt=""></router-link>
        <router-link to="/hospital"><img src="../assets/imgs/index/Shape.png" alt=""></router-link>
        <router-link to="/profile"><img src="../assets/imgs/index/profile.png" alt=""></router-link>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="less">
.main{
  // 底部
  footer {
    width: 750/37.5rem;
    background: #F3F6FE;
    opacity: 0.9;
    border-top: 1px solid #ccc;
    position: relative;

    a {
      display: inline-block;
      width: 80/37.5rem;
      height: 80/37.5rem;
      border-radius: 50%;
      text-align: center;
      margin-left: 45/37.5rem;
      margin-top: 30/37.5rem;

      &:nth-of-type(2) {
        margin-right: 140/37.5rem;
      }

      &:nth-of-type(3) {
        width: 120/37.5rem;
        height: 120/37.5rem;
        background: linear-gradient(to right, #4B66EA, #82A0F6);
        padding-top: 20/37.5rem;
        position: absolute;
        top: -65/37.5rem;
        left: 260/37.5rem;
      }

      img {
        width: 70%;
      }
    }
  }
}
</style>
