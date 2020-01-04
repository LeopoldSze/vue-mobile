<template>
  <div class="main">
    <div class="reviews">
      <ul id="reviewList">
        <li v-for="item,index in detailData">
          <div class="info">
            <img :src="item.photo" alt="">
            <h3>{{item.nickname}}
              <span>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
              </span>
            </h3>
          </div>
          <p>{{item.review}}</p>
        </li>
      </ul>
    </div>
    <button type="button" id="submi">发表评论</button>
  </div>
</template>

<script>
  import {reqDocReview} from "../api/index";
    export default {
      name: "DocReview",
      data(){
        return{
          id:this.$route.query.id,
          detailData:{},
        }
      },
      mounted(){
        this.getDetailData();
      },
      methods: {
        // 获取数据方法
        async getDetailData() {
          const detailInfo = await reqDocReview(this.id);
          this.detailData = detailInfo.data;
          console.log("detailInfo:",this.detailData);
        },
      }
    }
</script>

<style scoped lang="less">
@import "../assets/less/docReview";
</style>
