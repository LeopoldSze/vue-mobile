// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import "./comm.js";
import "./assets/less/css/comm.css"
import "font-awesome/css/font-awesome.min.css";
import mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false;
Vue.use(mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
