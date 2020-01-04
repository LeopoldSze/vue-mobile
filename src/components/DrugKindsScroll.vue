<template>
  <div class="lists" ref="eParents">
    <ul class="case clearFix" ref="eChild">
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
      <li>F</li>
      <li>G</li>
      <li>H</li>
      <li>I</li>
      <li>J</li>
      <li>K</li>
      <li>L</li>
      <li>M</li>
      <li>N</li>
      <li>O</li>
      <li>P</li>
      <li>Q</li>
      <li>R</li>
      <li>S</li>
      <li>T</li>
      <li>U</li>
      <li>V</li>
      <li>W</li>
      <li>X</li>
      <li>Y</li>
      <li>Z</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
    export default {
        name: "DrugKindsScroll",
      mounted(){
        this.initBScroll();
      },
      methods:{
        // 初始化better-scroll
        initBScroll(){
          let new_width = 60*26/37.5;
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
      },
    }
</script>

<style scoped lang="less">
  @import "../assets/less/drugShop";
  .case{
    height: 90/37.5rem;
    overflow: hidden;
  }
</style>
