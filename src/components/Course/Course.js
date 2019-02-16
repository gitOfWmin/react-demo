import React from 'react';

export default class Course extends React.Component{
  render(){
    return (
      <div className="aui-course-box">
        <a href="javascript:;" className="aui-course-item">
          <div className="aui-flex">
            <div className="aui-flex-box">
              12月07日 14:30-16:30
            </div>
            <div className="aui-flex-yes" style={{color:"#fe5a69"}}>今天16:30直播</div>
          </div>
          <div className="aui-course-title">
            <h2>2018级项目管理本科项目成本管理课程第一节(一)</h2>
            <p>自考项目管理本科--自考</p>
          </div>
          <div className="aui-flex">
            <div className="aui-flex-TUser">
              <img src="/images/user/user-mate-002.jpg" alt=""/>
            </div>
            <div className="aui-flex-box">
              <h3>安然老师</h3>
            </div>
          </div>
          <div className="aui-course-button">
            <button><i className="icon icon-data"></i>课程资料</button>
            <button><i className="icon icon-task"></i>课后作业</button>
          </div>
        </a>

      </div>
    )
  }
}