<template>
    <div class="main">
      <!--主体-->
      <div class="hosInfo">
        <ul class="recList clearFix">
          <li v-for="item,index in hospitals" :key="index">
            <img :src="item.photo" alt="" />
            <div class="info">
              <h4>{{item.name}}</h4>
              <p>{{item.kind}}</p>
              <p><i class="fa fa-map-marker"></i>&nbsp;<span>0.8km</span></p>
              <span class="score">{{item.score}}</span>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {mapState,mapActions} from "vuex";
    export default {
        name: "Hospital",
      // 挂载
      mounted(){
        this.getHospitals();
      },
      methods:{
        ...mapActions(["getHospitals"]),
      },
      computed:{
        ...mapState(["hospitals"]),
      }
    }
</script>

<style scoped lang="less">
@import "../assets/less/listHos";
</style>
