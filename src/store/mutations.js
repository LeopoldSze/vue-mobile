import {DRUGS,DOCTORS,RANDDOCTORS,
        HOSPITALS,USERINFO,CHANGESIDEBAR} from "./mutations-type";
export default {
  [DRUGS](state,{drugs}){
    state.drugs = drugs;
  },
  [DOCTORS](state,{doctors}){
    state.doctors = doctors;
  },
  [RANDDOCTORS](state,{randDoctors}){
    state.randDoctors = randDoctors;
  },
  [HOSPITALS](state,{hospitals}){
    state.hospitals = hospitals;
  },
  [USERINFO](state,{userInfo}){
    state.userInfo = userInfo;
  },
  [CHANGESIDEBAR](state,sideBarShow){
    state.sideBarShow = sideBarShow;
    console.log(state.sideBarShow);
  }
}
