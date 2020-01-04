import {DRUGS,DOCTORS,RANDDOCTORS,HOSPITALS,USERINFO,CHANGESIDEBAR} from "./mutations-type";
import {reqDrugs,reqDoctors,reqRandDoctors,reqHospitals,userUpd} from "../api/index";

export default {
  // 异步请求
  // 获取药品
  async getDrugs({commit,state}){
    const drugsData = await reqDrugs();
    if(drugsData.errorNo === 0){
      const drugs = drugsData.data;
      console.log("drugsData:",drugs);
      commit(DRUGS,{drugs});
    }
  },
  // 获取医生
  async getDoctors({commit,state}){
    const doctorsData = await reqDoctors();
    if(doctorsData.errorNo === 0){
      const doctors = doctorsData.data;
      console.log("doctorsData:",doctors);
      commit(DOCTORS,{doctors});
    }
  },
  // 获取随机医生
  async getRandDoctors({commit,state}){
    const doctorsData = await reqRandDoctors();
    if(doctorsData.errorNo === 0){
      const randDoctors = doctorsData.data;
      console.log("doctorsRand:",randDoctors);
      commit(RANDDOCTORS,{randDoctors});
    }
  },
  // 获取医院
  async getHospitals({commit,state}){
    const hospitalsData = await reqHospitals();
    if(hospitalsData.errorNo === 0){
      const hospitals = hospitalsData.data;
      console.log("hospitalsData:",hospitals);
      commit(HOSPITALS,{hospitals});
    }
  },
  // 修改用户信息
  async updUserInfo({commit,state}){
    const userInfos = await userUpd();
    return userInfos.message;

  },
  // 同步
  // 获取用户信息
  getUserInfo({commit},userInfo){
    commit(USERINFO,{userInfo})
  },
  // 点击切换侧边栏显示/隐藏
  changeSideBar({commit},sideBarShow){
    commit(CHANGESIDEBAR,{sideBarShow});
    console.log("sideBarShow:",sideBarShow);
  }
}
