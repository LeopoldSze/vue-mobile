import axios from "axios";
export default function ajax(url,data={},type="GET") {
  return new Promise(function (resolve,reject) {
    let promise;
    if(type==="GET"){
      // 准备URL query参数
      let strUrl = "";
      // 数据拼接
      Object.keys(data).forEach(key=>{
        strUrl += key + "=" + data[key] + "&";
      });
      if(strUrl !== ""){
        strUrl = strUrl.substring(0,strUrl.length-1);
        console.log("strUrl:",strUrl);
        url = url + "?" + strUrl;
      }
      // 发送get请求
      promise = axios.get(url);
    }else{
      // 发送post请求
      promise = axios.post(url,data);
    }
    promise.then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })
  })
}
