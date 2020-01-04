<template>
  <div class="main">
    <drug-kinds-scroll></drug-kinds-scroll>
    <div class="drugs">
      <ul id="ulist">
        <router-link :to="{path:'/drugdetail',query:{id:item.id}}" tag="li" class="docList" v-for="item,index in drugs" :key="index">
          <input type="hidden" :id="item.id" >
          <img :src="item.photo" alt=""/>
          <h4>{{item.name}}</h4>
          <p>￥{{item.price}}</p>
        </router-link>
      </ul>
<!--      <ul id="ulist1">-->
<!--        <li class="docList" v-for="item,index in drugs" :key="index">-->
<!--          <input type="hidden" :id="item.id" >-->
<!--          <img :src="item.photo" alt=""/>-->
<!--          <h4>{{item.name}}</h4>-->
<!--          <p>￥{{item.price}}</p>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex";
  import DrugKindsScroll from "./DrugKindsScroll";
    export default {
      name: "DrugShop",
      components:{
        DrugKindsScroll,
      },
      // 挂载
      mounted(){
        this.getDrugs();
      },
      methods:{
        ...mapActions(["getDrugs"]),
      },
      computed:{
        ...mapState(["drugs"]),
      }
    }
</script>

<style scoped lang="less">
@import "../assets/less/drugShop";
</style>
