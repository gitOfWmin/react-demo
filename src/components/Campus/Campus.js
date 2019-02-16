import React from "react";
let sTop = 0;
export default class Campus extends React.Component{
  render(){
    return (
      <>
        <header className="aui-navBar aui-navBar-fixed b-line">
          <a href="javascript:history.back(-1)" className="aui-navBar-item">
            <i className="icon icon-return"></i>
          </a>
          <div className="aui-center">
            <span className="aui-center-title">校园</span>
          </div>
          <a href="branch.html" className="aui-navBar-item">
            <i className="icon icon-sys"></i>全国分校
          </a>
        </header>
        <section className="aui-scrollView">
          <div className="aui-campus-box">
            <a href="javascript:;" className="aui-campus-list">
              <div className="aui-campus-img">
                <img src="/images/ad/live-001.jpg" alt=""/>
                <span className="aui-campus-play"><img src="/images/icon/icon-play.png" alt=""/></span>
              </div>
              <div className="aui-campus-title">
                <h3>新年新气象开学典礼即将开始</h3>
              </div>
              <div className="aui-flex">
                <div className="aui-flex-box">
                  <div className="aui-campus-user-sml">
                  <span>
                      <img src="/images/user/user-logo-001.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-002.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-003.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-004.png" alt=""/>
                  </span>
                    <em>274489人正在围观</em>
                  </div>
                </div>

                <div className="aui-text-bottom" style={{overflow:"inherit"}}>
                <span className="aui-text-bottom-item">
                  <i className="icon icon-give"></i>543</span>
                </div>
              </div>
            </a>
            <a href="javascript:;" className="aui-campus-list">
              <div className="aui-campus-img">
                <img src="/images/ad/live-002.jpg" alt=""/>
                <span className="aui-campus-play"><img src="/images/icon/icon-play.png" alt=""/></span>
              </div>
              <div className="aui-campus-title">
                <h3>2018年成绩公布表彰大会新年新气象开学典礼即将开始</h3>
              </div>
              <div className="aui-flex">
                <div className="aui-flex-box">
                  <div className="aui-campus-user-sml">
                  <span>
                      <img src="/images/user/user-logo-001.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-002.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-003.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-004.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-004.png" alt=""/>
                  </span>
                    <em>274489人正在围观</em>
                  </div>
                </div>

                <div className="aui-text-bottom" style={{overflow:"inherit"}}>
                  <span className="aui-text-bottom-item"> <i className="icon icon-give"></i>543</span>
                </div>
              </div>
            </a>
            <a href="javascript:;" className="aui-campus-list">
              <div className="aui-campus-img">
                <img src="/images/ad/live-001.jpg" alt=""/>
                <span className="aui-campus-play"><img src="/images/icon/icon-play.png" alt=""/></span>
              </div>
              <div className="aui-campus-title">
                <h3>新年新气象开学典礼即将开始</h3>
              </div>
              <div className="aui-flex">
                <div className="aui-flex-box">
                  <div className="aui-campus-user-sml">
                  <span>
                      <img src="/images/user/user-logo-001.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-002.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-003.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-004.png" alt=""/>
                  </span>
                    <em>274489人正在围观</em>
                  </div>
                </div>

                <div className="aui-text-bottom" style={{overflow:"inherit"}}>
                  <span className="aui-text-bottom-item"> <i className="icon icon-give"></i>543</span>
                </div>
              </div>
            </a>
            <a href="javascript:;" className="aui-campus-list">
              <div className="aui-campus-img">
                <img src="/images/ad/live-002.jpg" alt=""/>
                <span className="aui-campus-play"><img src="/images/icon/icon-play.png" alt=""/></span>
              </div>
              <div className="aui-campus-title">
                <h3>2018年成绩公布表彰大会新年新气象开学典礼即将开始</h3>
              </div>
              <div className="aui-flex">
                <div className="aui-flex-box">
                  <div className="aui-campus-user-sml">
                  <span>
                      <img src="/images/user/user-logo-001.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-002.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-003.png" alt=""/>
                  </span>
                    <span>
                      <img src="/images/user/user-logo-004.png" alt=""/>
                  </span>
                    <em>274489人正在围观</em>
                  </div>
                </div>

                <div className="aui-text-bottom" style={{overflow:"inherit"}}>
                  <span className="aui-text-bottom-item"> <i className="icon icon-give"></i>543</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      </>
    )
  }
  componentWillReceiveProps(nextProps, nextContext) {
    if(this.props.location !== nextProps.location){//当前地址不等于目标地址
      window.scrollTo(0,0);//滚动到顶部
    }
  }
  componentDidMount() {
    window.scrollTo(0,sTop)
  }

  componentWillUnmount() {
    sTop = document.documentElement.scrollTop;
    // console.log(sTop)
  }
}