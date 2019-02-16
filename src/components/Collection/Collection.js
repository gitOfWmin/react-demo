import React from 'react';

export default class Collection extends React.Component{
  render(){
    return (
      <section className="aui-flexView">
        <header className="aui-navBar aui-navBar-fixed b-line">
          <a href="javascript:history.back(-1)" className="aui-navBar-item">
            <i className="icon icon-return"></i>
          </a>
          <div className="aui-center">
            <span className="aui-center-title">我的收藏</span>
          </div>
          <a href="javascript:;" className="aui-navBar-item">
            <i className="icon icon-sys"></i>
          </a>
        </header>
        <section className="aui-scrollView">
          <div className="aui-branch-box">
            <a href="javascript:;" className="aui-topic-item aui-flex">
              <div className="aui-flex-box">
                <h4>工程经济学</h4>
                <p>做题进度:129/19883</p>
              </div>
              <div className="aui-topic-arrow"></div>
            </a>
            <a href="javascript:;" className="aui-topic-item aui-flex">
              <div className="aui-flex-box">
                <h4>工程经济学</h4>
                <p>做题进度:129/19883</p>
              </div>
              <div className="aui-topic-arrow"></div>
            </a>
            <a href="javascript:;" className="aui-topic-item aui-flex">
              <div className="aui-flex-box">
                <h4>工程经济学</h4>
                <p>做题进度:129/19883</p>
              </div>
              <div className="aui-topic-arrow"></div>
            </a>
          </div>
        </section>
      </section>
    )
  }

}