import React from 'react';
import {Link} from 'react-router-dom';

export default class Grids extends React.Component {
  render() {
    return (
      <section className="aui-flexView">
        <header className="aui-navBar aui-navBar-fixed b-line">
          <a href="javascript:history.back(-1)" className="aui-navBar-item">
            <i className="icon icon-return"></i>
          </a>
          <div className="aui-center">
            <span className="aui-center-title">题库</span>
          </div>
          <a href="javascript:;" className="aui-navBar-item">
            <i className="icon icon-sys"></i>
          </a>
        </header>
        <section className="aui-scrollView">
          <div className="aui-topic-box">
            <div className="aui-flex">
              <div className="aui-flex-box">
                <div className="au-topic-one">
                  <h2>课后练习</h2>
                  <p>所有结课后的练习题和作业人</p>
                  <button>去练习</button>
                </div>
              </div>
              <div className="aui-flex-box">
                <div className="au-topic-two">
                  <div className="aui-topic-wrong">
                    <h2>随机练习</h2>
                    <p>所有结课后的练习题和作业人</p>
                  </div>
                  <div className="aui-topic-wrong">
                    <h2>智能练习</h2>
                    <p>所有结课后的练习题和作业人</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aui-topic-head">
              <h2>所有科目</h2>
            </div>
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