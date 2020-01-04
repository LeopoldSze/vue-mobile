import ajax from "./ajax";

// 获取药品列表
export const reqDrugs = ()=>ajax(`/api/drug/list`);

// 获取药品模糊查询
export const reqDrugKind = (engname)=>ajax(`/api/doctor/query`,{engname});

// 获取药品详细
export const reqDrugInfo = (id)=>ajax(`/api/drug/id`,{id});

// 获取医生
export const reqDoctors = ()=>ajax(`/api/doctor/list`);

// 获取随机医生
export const reqRandDoctors = ()=>ajax(`/api/doctor/rand`);

// 获取医生资料
export const reqDocInfo = (id)=>ajax(`/api/doctor/id`,{id});

// 获取医生评价
export const reqDocReview = (id)=>ajax(`/api/review/list`,{id});

// 获取医院
export const reqHospitals = ()=>ajax(`/api/hospital/list`);

// 获取用户登录信息
export const userLogin = (acc,pass)=>ajax(`/api/users/login`,{acc,pass},"POST");

// 修改用户信息
export const userUpd = (id,acc,pass,photo,age,blood,gender,height,weight,mail)=>ajax(`/api/users/upd`,{id,acc,pass,photo,age,blood,gender,height,weight,mail},"POST");
