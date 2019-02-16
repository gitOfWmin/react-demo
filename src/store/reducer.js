import * as types from './types';

let reducer = (state,action)=>{
  //根据对应操作(action)修改对应状态(state)
  let {type,payload} = action;//从操作对象身上解出来操作的类型(函数名称)和负载(传的参数)

  switch (type) {
    //将bLoading的新值合并到state中  依次同理
    case types.VIEW_LOADING:
      return Object.assign({},state,{bLoading:payload});

    case types.VIEW_HEADER:
      return Object.assign({},state,{bHeader:payload});

    case types.VIEW_FOOTER:
      return Object.assign({},state,{bFooter: payload});

    case types.UPDATE_HOME:
      return Object.assign({},state,{home: payload.data});
    case types.UPDATE_COMMUNITY:
      return Object.assign({},state,{community: payload.data});

    case types.CHECK_USER:
      console.log('login',payload)
      if(payload.username == payload.data.username && payload.password == payload.data.password){
        payload.data.auth = true;
        console.log("登陆成功")
      }
      return Object.assign({},state,{user:payload.data})

    case types.GET_USERNAME:
      return Object.assign({},state,{username:payload})

    case types.GET_PASSWORD:
          return Object.assign({},state,{password:payload})

    case types.TITLE:
      console.log("reducer",payload)
      return Object.assign({},state,{title:payload})
  }

  return state;//返回更新后的state
}

export default reducer;
