<template>
  <div class="main_two clearFix" ref="eParents">
    <ul class="recList clearFix" id="recList" ref="eChild">
      <router-link class="docList" v-for="item,index in randDoctors" :key="index" :to="{path:'/docinfo',query:{id:item.id}}" tag="li">
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
</template>

<script>
  import BScroll from "better-scroll";
  import {mapState,mapActions} from "vuex";
    export default {
        name: "Scroll",
        // 挂载
        mounted(){
          this.initBScroll();
          this.getRandDoctors();
        },
        methods:{
          // 初始化better-scroll
          initBScroll(){
            let new_width = 750*5/37.5;
            this.$refs.eChild.style.width = new_width + "rem";
            if(!this.scroll){
              this.scroll = new BScroll(this.$refs.eParents,{
                click:true,
                scrollX:true,
                // 是否需要回弹动画
                bounce:true,
              })
            }else{
              this.scroll.refresh();
            }
          },
          ...mapActions(["getRandDoctors"]),
        },
      computed:{
        ...mapState(["randDoctors"]),
      }
    }
</script>

<style scoped lang="less">
@import "../assets/less/home";
</style>
