import React from 'react';

let Friends = ()=>(
  <section className="aui-flexView">
    <header className="aui-navBar aui-navBar-fixed b-line">
      <a href="javascript:history.back(-1)" className="aui-navBar-item">
        <i className="icon icon-return"></i>
      </a>
      <div className="aui-center">
        <span className="aui-center-title">我的好友</span>
      </div>
      <a href="javascript:;" className="aui-navBar-item">
        <i className="icon icon-sys"></i>
      </a>
    </header>
    <section className="aui-scrollView">
      <div className="aui-friends-box">
        <div className="aui-tab-box" data-ydui-tab>
          <ul className="tab-nav">
            <li className="tab-nav-item tab-active">
              <a href="javascript:;">我的关注</a>
            </li>
            <li className="tab-nav-item">
              <a href="javascript:;">我的粉丝</a>
            </li>
          </ul>
          <div className="tab-panel">
            <div className="tab-panel-item tab-active">
              <div className="tab-item">
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-001.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>孙璐璐</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-002.jpg" alt=""/>
                      <p>关注好友</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-002.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip1.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>安然老师</h4>
                    <p>同学们好 我是你们的班主任</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-003.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>小微同学</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-004.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>刘梦</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-005.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>张海</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-006.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>李若彤</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-007.jpg" alt=""/>
                        <span className="aui-well-comm-vip">
                        <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>明一同学</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
              </div>
            </div>
            <div className="tab-panel-item">
              <div className="tab-item">
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-001.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>孙璐璐</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-003.jpg" alt=""/>
                      <p>关注好友</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-002.jpg" alt=""/>
                        <span className="aui-well-comm-vip">
                        <img src="/images/icon/icon-vip1.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>安然老师</h4>
                    <p>同学们好 我是你们的班主任</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-003.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>小微同学</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-004.jpg" alt=""/>
                        <span className="aui-well-comm-vip">
                        <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>刘梦</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-005.jpg" alt=""/>
                      <span className="aui-well-comm-vip">
                        <img src="/images/icon/icon-vip.png" alt=""/>
                      </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>张海</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-006.jpg" alt=""/>
                    <span className="aui-well-comm-vip">
                      <img src="/images/icon/icon-vip.png" alt=""/>
                    </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>李若彤</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                                    <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                                    <p>相互关注</p>
                                </span>
                </a>
                <a href="javascript:;" className="aui-list-item">
                  <div className="aui-list-item-hd">
                    <img src="/images/user/user-mate-007.jpg" alt=""/>
                      <span className="aui-well-comm-vip">
                        <img src="/images/icon/icon-vip.png" alt=""/>
                      </span>
                  </div>
                  <div className="aui-list-item-bd">
                    <h4>明一同学</h4>
                    <p>新的一天新的开始加油学习</p>
                  </div>
                  <span className="aui-list-item-fr">
                      <img src="/images/icon/icon-follow-001.jpg" alt=""/>
                      <p>相互关注</p>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
)

export default Friends;