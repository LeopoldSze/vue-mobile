<template>
  <div class="main">
    <header>
      <header>
        <i class="fa fa-angle-left" id="menu" @click="pageBack"></i>
        <h4>{{title}}</h4>
        <i class="fa fa-cog" id="set"></i>
      </header>
    </header>
  </div>
</template>

<script>
    export default {
        name: "NavSecond",
        props:["title"],
        methods:{
          pageBack(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped lang="less">
  .main {
    width: 750/37.5rem;
    overflow: hidden;
    // 头部
    header {
      width: 750/37.5rem;
      height: 125/37.5rem;
      line-height: 125/37.5rem;
      background: linear-gradient(to right, #4B66EA, #82A0F6);
      box-shadow: 8/37.5rem 20/37.5rem 8/37.5rem #B4B9CF;
      h4{
        font-size: 36/37.5rem;
        color: #fff;
        display: inline-block;
        margin-left: 220/37.5rem;
      }
      i {
        color: #fff;
        font-size: 40/37.5rem;
        margin-left: 30/37.5rem;
        &:last-of-type{
          margin-left: 225/37.5rem;
        }
      }
    }
  }
</style>
