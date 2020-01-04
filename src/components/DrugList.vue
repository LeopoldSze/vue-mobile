<template>
  <div class="main">
    <ul id="ulist">
      <li class="docList" v-for="item,index in drugs" :key="index">
        <input type="hidden" :id="item.id" >
        <img :src="item.photo" alt=""/>
        <a href="#">{{item.name}}</a>
        <i class="fa fa-angle-right"></i>
      </li>
    </ul>
    <a href="#" class="add">+</a>
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex";
    export default {
        name: "DrugList",
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
@import "../assets/less/drugList";
</style>
