<template>
  <div class="main">
    <!--主体-->
    <div class="docInfo">
      <ul class="recList clearFix" id="recList">
        <router-link v-for="item,index in doctors" :key="index" tag="li" :to="{path:'/docinfo',query:{id:item.id}}">
          <img :src="item.photo" alt=""/>
          <div class="info">
            <input type="hidden" :id="item.id" class="num">
            <h4>{{item.name}}</h4>
            <p>{{item.kind}}</p>
            <p><i class="fa fa-map-marker"></i>&nbsp;<span>0.8km</span></p>
            <span class="score"><i class="fa fa-star-o"></i>&nbsp;{{item.score}}</span>
            <i class="fa fa-ellipsis-v"></i>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex";
  export default {
    name: "Doctor",
    // 挂载
    mounted(){
      this.getDoctors();
    },
    methods:{
      ...mapActions(["getDoctors"]),
    },
    computed:{
      ...mapState(["doctors"]),
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/listDoc";
</style>
