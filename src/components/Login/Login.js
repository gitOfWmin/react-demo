import React from 'react';
import './Login.css'
import {asyncAction} from "../../store/asyncAction";
import * as types from '../../store/types'
import {connect} from 'react-redux'
import QueueAnim from 'rc-queue-anim'
class Login extends React.Component {
  render() {
    // console.log("this.props",this.props)
    let {username,password,getUsername,getPassword,login,history} = this.props;
    // console.log('login:',username);  //正常获取
    // console.log('login:',password)
    // console.log(history)
    return (
     <QueueAnim
     type={"top"}
     >
       <div id="login" key={"demo6"} >
         <p><a href="javascript:;" style={{"color": "gray", "margin": "-30px", "textDecoration": "none"}}
               onClick={() => {
                 window.history.go(-1)
               }}>&lt;返回</a></p>
         <form action="">
           <label htmlFor="username">用户名：</label>
           <input id="username" type="text" value={username} onChange={getUsername}/>
           <br/>
           <label htmlFor="password">密码：</label>
           <input id="password" type="text" value={password} onChange={getPassword}/>
           <br/>
           <input type="button" defaultValue={"登陆"} onClick={()=>{login(username,password,history)}}/>
         </form>
       </div>
     </QueueAnim>
    )
  }
}

//获取默认state到props UI以props接收  把state的对应数据给props  render中的props来自于这里或下面的方法
let initMapStateToProps = state => ({
  username:state.username,
  password:state.password
});

//利用接收的dispatch参数 给执行方法的负载传递给reducer reducer执行后返回给store  会绑定到路由上下文
let initMapDispatchToProps = dispatch =>({
  // 先导向异步action,在导向reducer
  login:(username,password,history)=>{
    return (
      dispatch(asyncAction({
        url:'/data/user.json',
        type:types.CHECK_USER,
        username:username,
        password:password
      })).then(
        res=>{
          // console.log("res",history);
          if(res.auth){
            history.push({pathname:'/user'})
          }
        }
      )
    )
  },
  getUsername:(event)=>dispatch({
    type:types.GET_USERNAME,
    payload:event.target.value
  }),
  getPassword:(event)=>dispatch({
    type:types.GET_PASSWORD,
    payload:event.target.value
  })
});

export default connect  (
  initMapStateToProps,
  initMapDispatchToProps
)(Login)
