<template>
  <div id="app">
    <side-bar></side-bar>
    <nav-first v-show="$route.meta.navFirstShow" :title="$route.meta.title"></nav-first>
    <nav-second v-show="$route.meta.navSecondShow" :title="$route.meta.title"></nav-second>
    <router-view/>
    <Footer v-show="$route.meta.footerShow"></Footer>
  </div>
</template>

<script>
  import SideBar from "./components/SideBar";
  import NavFirst from "./components/NavFirst";
  import NavSecond from "./components/NavSecond";
  import Footer from "./components/Footer";
export default {
  name: 'App',
  components:{
    SideBar,
    NavFirst,
    NavSecond,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
