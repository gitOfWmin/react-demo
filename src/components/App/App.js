import React from "react"
import {Route,Switch,Redirect} from 'react-router-dom'
import '../../assets/css/base.css'
import '../../assets/css/home.css'

import Header from '../../common/Header/Header'
import Home from '../Home/Home'
import Footer from "../../common/Footer/Footer";
import Study from "../Study/Study";
import News from "../News/News";
import Community from "../Community/Community";
import User from "../User/User";
import Campus from "../Campus/Campus";
import Coursem from "../Coursem/Coursem";
import Topic from "../Topic/Topic";
import Mate from "../Mate/Mate";
import Lecture from "../Lecture/Lecture";
import Question from "../Question/Question";
import Collection from "../Collection/Collection";
import Friends from "../Friends/Friends";
import Auth from "../../guard/Auth";
import Login from "../Login/Login";

import * as types from '../../store/types'
import {connect} from 'react-redux'

class App extends React.Component{
  componentWillReceiveProps(nextProps){//路由监听 参数是路由上下文信息
    // console.log(nextProps)
    let {view_header,view_footer,view_title}=nextProps;
    let path = nextProps.location.pathname;
    if(/home/.test(path)){
      view_title("首页");
    }
    if(/study/.test(path)){
      view_title("学习");
    }
    if(/news/.test(path)){
      view_title("消息");
    }
    if(/community/.test(path)){
      view_title("社区");
    }
    if(/user/.test(path)){
      view_title("会员中心");
    }
    if(/user|community|news|home|study/.test(path)){
      view_header(true);
      view_footer(true);
    }
    if(/reg|collection|friends|coursem|topic|campus|mate|lecture|question|login/.test(path)){
      view_header(false);
      view_footer(false);
    }
  }

  render(){
    //props路由上下文信息 match
    // console.log(this.props)
    let {title,bLoading,bHeader,bFooter} = this.props;
    // console.log(title)
    return (
      <section className="aui-flexView">
        {bHeader && <Header title={title}></Header>}
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/study" component={Study}/>
          <Route path="/community" component={Community}/>
          <Route path="/news" component={News}/>
          {/*//路由守卫*/}
          <Auth path="/user" component={User}/>
          {/*<Route path="/user" component={User}/>*/}

          <Route path="/login" component={Login}/>
          <Route path="/campus" component={Campus}/>
          <Route path="/coursem" component={Coursem}/>
          <Route path="/topic" component={Topic}/>
          <Route path="/mate" component={Mate}/>
          <Route path="/lecture" component={Lecture}/>
          <Route path="/question" component={Question}/>
          <Route path="/collection" component={Collection}/>
          <Route path="/friends" component={Friends}/>
          <Redirect exact from="/" to="/home"/>

          <Route path={"**"} component={Error}/>
        </Switch>
        {bFooter && <Footer></Footer>}
      </section>
    )
  }
}

//获取默认state到props UI以props接收  把state的对应数据给props  render中的props来自于这里或下面的方法
let initMapStateToProps = state => ({
  bLoading:state.bLoading,
  bFooter:state.bFooter,
  bHeader:state.bHeader,
  title:state.title
});

//利用接收的dispatch参数 给执行方法的负载传递给reducer reducer执行后返回给store  会绑定到路由上下文
let initMapDispatchToProps = dispatch =>({
  view_header:(bl)=>dispatch({type:types.VIEW_HEADER,payload:bl}),
  view_footer:(bl)=>dispatch({type:types.VIEW_FOOTER,payload:bl}),
  view_title:(title)=>dispatch({type:types.TITLE,payload:title})
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App);
