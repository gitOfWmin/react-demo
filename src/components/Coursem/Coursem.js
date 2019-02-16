import React from "react";

export default class Coursem extends React.Component{
  render(){
    return (
      <>
        <header className="aui-navBar aui-navBar-fixed b-line aui-navBar-change">
          <a href={"javascript:history.back(-1)"} className="aui-navBar-item">
            <i className="icon icon-return"></i>
          </a>
          <div className="aui-center">
            <span className="aui-center-title">课程表</span>
          </div>
          <a href="javascript:;" className="aui-navBar-item" style={{color:"#fff"}}>
            <i className="icon icon-sys"></i>学习计划
          </a>
        </header>
      <section className="aui-scrollView">
        <div className="aui-course-box">
          <a href={"javascript:;"} className="aui-course-item">
            <div className="aui-flex">
              <div className="aui-flex-box">
                12月07日 14:30-16:30
              </div>
              <div className="aui-flex-yes" style={{color:"#fe5a69"}}>未开课</div>
            </div>
            <div className="aui-course-title">
              <h2>2018级项目管理本科项目成本管理课程第一节(一)</h2>
              <p>自考项目管理本科--自考</p>
            </div>
            <div className="aui-flex">
              <div className="aui-flex-TUser">
                <img src="/images/user/user-logo-001.png" alt=""/>
              </div>
              <div className="aui-flex-box">
                <h3>安然老师</h3>
              </div>
            </div>
            <div className="aui-course-button">
              <button><i className="icon icon-data"></i>资料</button>
            </div>
          </a>
          <a href="javascript:;" className="aui-course-item">
            <div className="aui-flex">
              <div className="aui-flex-box">
                11月07日 14:30-16:30
              </div>
              <div className="aui-flex-yes">已结课</div>
            </div>
            <div className="aui-course-title">
              <h2>2018级项目管理本科项目成本管理课程第一节(一)</h2>
              <p>自考项目管理本科--自考</p>
            </div>
            <div className="aui-flex">
              <div className="aui-flex-TUser">
                <img src="/images/user/user-logo-005.png" alt=""/>
              </div>
              <div className="aui-flex-box">
                <h3>安然老师</h3>
              </div>
            </div>
            <div className="aui-course-button">
              <button><i className="icon icon-data"></i>资料</button>
              <button><i className="icon icon-task"></i>作业</button>
            </div>
          </a>
          <a href="javascript:;" className="aui-course-item">
            <div className="aui-flex">
              <div className="aui-flex-box">
                11月07日 14:30-16:30
              </div>
              <div className="aui-flex-yes">已结课</div>
            </div>
            <div className="aui-course-title">
              <h2>2018级项目管理本科项目成本管理课程第一节(一)</h2>
              <p>自考项目管理本科--自考</p>
            </div>
            <div className="aui-flex">
              <div className="aui-flex-TUser">
                <img src="/images/user/user-logo-001.png" alt=""/>
              </div>
              <div className="aui-flex-box">
                <h3>安然老师</h3>
              </div>
            </div>
            <div className="aui-course-button">
              <button><i className="icon icon-data"></i>资料</button>
            </div>
          </a>
          <a href="javascript:;" className="aui-course-item">
            <div className="aui-flex">
              <div className="aui-flex-box">
                11月07日 14:30-16:30
              </div>
              <div className="aui-flex-yes">已结课</div>
            </div>
            <div className="aui-course-title">
              <h2>2018级项目管理本科项目成本管理课程第一节(一)</h2>
              <p>自考项目管理本科--自考</p>
            </div>
            <div className="aui-flex">
              <div className="aui-flex-TUser">
                <img src="/images/user/user-logo-005.png" alt=""/>
              </div>
              <div className="aui-flex-box">
                <h3>安然老师</h3>
              </div>
            </div>
            <div className="aui-course-button">
              <button><i className="icon icon-data"></i>资料</button>
              <button><i className="icon icon-task"></i>作业</button>
            </div>
          </a>
        </div>
      </section>
      </>
    )
  }

}