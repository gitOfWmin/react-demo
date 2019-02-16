//异步action  将重复的请求数据的部分单独拿出来做成一个模块
//返回一个对象给外部的dispatch

import * as types from './types';

// export let asyncAction = (dispatch,url,type,id)=>{
//   fetch().then(res=>res.json())
//     .then(
//       data=>{
//         setTimeout(()=>{
//           dispatch({type:types.VIEW_LOADING,payload:false});
//           dispatch({type:type,payload:{data:data,id:id}});
//         },1000)
//       }
//     )
//   return {type:'VIEW_LOADING',payload:true}
// }

// export let asyncaAction = (dispatch,url,type,id)=>{
//   fetch().then(res=>res.json())
//     .then(resData=>{console.log(resData,"在异步antion中请求成功")})
// }

export let asyncAction=function({url,type,username,password,id}){
  // console.log(username,password)
  return function(dispatch,getState){
    dispatch({type:types.VIEW_LOADING,payload:true})
    return fetch(
      url,
    // {
    //   body:{user:username,pass:password,start:id}
    // }
    ).then(
      res=>res.json()
    ).then(
      function(data){

          dispatch({type:types.VIEW_LOADING,payload:false});
          dispatch({type:type,payload:{data:data,id:id,username:username,password:password}});

          return data;
      }
    )
  }
}