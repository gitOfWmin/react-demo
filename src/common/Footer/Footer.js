import React from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends React.Component{
  render(){
    return (
      <footer className="aui-footer">
        <NavLink to="/home" className="aui-tabBar-item" activeClassName={"aui-tabBar-item-active"}>
            <span className="aui-tabBar-item-icon">
                <i className="icon icon-home"></i>
            </span>
          <span className="aui-tabBar-item-text">首页</span>
        </NavLink>
        <NavLink to="/study" className="aui-tabBar-item" activeClassName={"aui-tabBar-item-active"}>
            <span className="aui-tabBar-item-icon">
                <i className="icon icon-loan"></i>
            </span>
          <span className="aui-tabBar-item-text">学习</span>
        </NavLink>
        <NavLink to="/news" className="aui-tabBar-item " activeClassName={"aui-tabBar-item-active"}>
            <span className="aui-tabBar-item-icon">
                <i className="icon icon-find"></i>
            </span>
          <span className="aui-tabBar-item-text">消息</span>
        </NavLink>
        <NavLink to="/community" className="aui-tabBar-item" activeClassName={"aui-tabBar-item-active"}>
            <span className="aui-tabBar-item-icon">
                <i className="icon icon-comm"></i>
            </span>
          <span className="aui-tabBar-item-text">社区</span>
        </NavLink>
        <NavLink to="/user" className="aui-tabBar-item" activeClassName={"aui-tabBar-item-active"}>
            <span className="aui-tabBar-item-icon">
                <i className="icon icon-car"></i>
            </span>
          <span className="aui-tabBar-item-text">我的</span>
        </NavLink>
      </footer>
    )
  }
}
export default Footer;