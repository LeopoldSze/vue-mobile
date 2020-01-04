<template>
    <div class="main">
      <header>
        <header>
          <i class="fa fa-bars" id="menu" @click="sideBarShow"></i>
          <h4>{{title}}</h4>
          <router-link class="fa fa-cog" id="set" to="/profileset" tag="i"></router-link>
        </header>
      </header>
    </div>
</template>

<script>
    export default {
        name: "NavFirst",
        props:["title"],
        data(){
          return{
            isShow:false
          }
        },
        methods:{
          sideBarShow(){
            this.isShow = !this.isShow;
            this.$store.dispatch("changeSideBar",{sideBarShow:this.isShow})
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
