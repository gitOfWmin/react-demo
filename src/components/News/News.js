import React from 'react'
import QueueAnim from 'rc-queue-anim'

export default class News extends React.Component{
  render(){
    return (
      <QueueAnim
      type={"right"}
      >

        <section key="demo4"className="aui-scrollView" style={{"marginTop":"44px"}}>
          <div className="aui-news-box">
            <div className="aui-mate-box">
              <a href="javascript:;" className="aui-flex b-line">
                <div className="aui-branch-img">
                  <img src="/images/user/user-mate-009.jpg" alt=""/>
                </div>
                <div className="aui-flex-box aui-flex-box-head">
                  <h3>我的老师</h3>
                </div>
                <div className="aui-mate-text aui-mate-text-arrow">
                  <p></p>
                </div>
              </a>
              <a href="javascript:;" className="aui-flex b-line">
                <div className="aui-branch-img">
                  <img src="/images/user/user-mate-010.jpg" alt=""/>
                </div>
                <div className="aui-flex-box aui-flex-box-head">
                  <h3>消息通知</h3>
                </div>
                <div className="aui-mate-text aui-mate-text-arrow">
                  <p></p>
                </div>
              </a>
              <a href="javascript:;" className="aui-flex b-line">
                <div className="aui-branch-img">
                  <img src="/images/user/user-mate-008.jpg" alt=""/>
                </div>
                <div className="aui-flex-box">
                  <h3>项目管理本科主群 <em>班级群</em></h3>
                  <p>李星宇，老师各位同学好！</p>
                </div>
                <div className="aui-mate-text">
                  <p>今天</p>
                </div>
              </a>
              <a href="javascript:;" className="aui-flex b-line">
                <div className="aui-branch-img">
                  <img src="/images/user/user-mate-008.jpg" alt=""/>
                </div>
                <div className="aui-flex-box">
                  <h3>项目管理本科主群</h3>
                  <p>李星宇，老师各位同学好！</p>
                </div>
                <div className="aui-mate-text">
                  <p>今天</p>
                </div>
              </a>
              <a href="javascript:;" className="aui-flex b-line">
                <div className="aui-branch-img">
                  <img src="/images/user/user-mate-008.jpg" alt=""/>
                </div>
                <div className="aui-flex-box">
                  <h3>项目管理本科主群 <em>课程群</em></h3>
                  <p>李星宇，老师各位同学好！</p>
                </div>
                <div className="aui-mate-text">
                  <p>今天</p>
                </div>
              </a>
              <a href="javascript:;" className="aui-flex b-line">
                <div className="aui-branch-img">
                  <img src="/images/user/user-mate-008.jpg" alt=""/>
                </div>
                <div className="aui-flex-box">
                  <h3>项目管理本科主群 </h3>
                  <p>李星宇，老师各位同学好！</p>
                </div>
                <div className="aui-mate-text">
                  <p>今天</p>
                </div>
              </a>
              <a href="javascript:;" className="aui-flex b-line">
                <div className="aui-branch-img">
                  <img src="/images/user/user-mate-008.jpg" alt=""/>
                </div>
                <div className="aui-flex-box">
                  <h3>项目管理本科主群 </h3>
                  <p>李星宇，老师各位同学好！</p>
                </div>
                <div className="aui-mate-text">
                  <p>今天</p>
                </div>
              </a>
            </div>
          </div>
        </section>

      </QueueAnim>
    )
  }
}