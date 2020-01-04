import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Drugs from '@/components/Drugs'
import DrugList from '@/components/DrugList'
import DrugShop from '@/components/DrugShop'
import DrugDetail from '@/components/DrugDetail'
import Doctor from '@/components/Doctor'
import Hospital from '@/components/Hospital'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import DocInfo from '@/components/DocInfo'
import DocAddr from '@/components/DocAddr'
import DocReview from '@/components/DocReview'
import ProfileSet from '@/components/ProfileSet'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '*',
      redirect:{
        path:"/index"
      }
    },
    {
      path: '/index',
      name:"Index",
      component:Index,
      meta:{
        sideBarShow:true,
        navFirstShow:true,
        title:"首页",
        footerShow:true,
      }
    },
    {
      path: '/drugs',
      name:"Drugs",
      component:Drugs,
      meta:{
        sideBarShow:true,
        navFirstShow:true,
        title:"药物",
        footerShow:true,
      }
    },
    {
      path: '/druglist',
      name:"DrugList",
      component:DrugList,
      meta:{
        sideBarShow:false,
        navSecondShow:true,
        title:"药品列表",
        footerShow:false,
      }
    },
    {
      path: '/drugshop',
      name:"DrugShop",
      component:DrugShop,
      meta:{
        sideBarShow:false,
        navSecondShow:true,
        title:"药品商店",
        footerShow:false,
      }
    },
    {
      path: '/drugdetail',
      name:"DrugDetail",
      component:DrugDetail,
      meta:{
        sideBarShow:false,
        navSecondShow:true,
        title:"药品详细",
        footerShow:false,
      }
    },
    {
      path: '/doctor',
      name:"Doctor",
      component:Doctor,
      meta:{
        sideBarShow:true,
        navFirstShow:true,
        title:"医生",
        footerShow:true,
      }
    },
    {
      path: '/docinfo',
      name:"DocInfo",
      component:DocInfo,
      meta:{
        sideBarShow:false,
        navSecondShow:true,
        title:"医生简介",
        footerShow:false,
      }
    },
    {
      path: '/docaddr',
      name:"DocAddr",
      component:DocAddr,
      meta:{
        sideBarShow:false,
        navSecondShow:true,
        title:"工作地址",
        footerShow:false,
      }
    },
    {
      path: '/docreview',
      name:"DocReview",
      component:DocReview,
      meta:{
        sideBarShow:false,
        navSecondShow:true,
        title:"医生评价",
        footerShow:false,
      }
    },
    {
      path: '/hospital',
      name:"Hospital",
      component:Hospital,
      meta:{
        sideBarShow:true,
        navFirstShow:true,
        title:"医院",
        footerShow:true,
      }
    },
    {
      path: '/profile',
      name:"Profile",
      component:Profile,
      meta:{
        sideBarShow:true,
        navFirstShow:true,
        title:"个人中心",
        footerShow:true,
      }
    },
    {
      path: '/profileset',
      name:"ProfileSet",
      component:ProfileSet,
      meta:{
        sideBarShow:false,
        navSecondShow:true,
        title:"修改资料",
        footerShow:false,
      }
    },
    {
      path: '/login',
      name:"Login",
      component:Login,
      meta:{
        sideBarShow:false,
        navFirstShow:false,
        title:"",
        footerShow:false,
      }
    },
  ]
})
