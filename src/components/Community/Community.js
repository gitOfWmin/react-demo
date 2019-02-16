import React from 'react';
import List from "../List/List";
import {asyncAction} from "../../store/asyncAction";
import * as types from "../../store/types";
import {connect} from 'react-redux'
import QueueAnim from 'rc-queue-anim'

let sTop = 0;
class Community extends React.Component{

  constructor(props){
    super(props)

    let url='/data/home.json'
    props.updata(url);

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
  }

  render(){
    return (
      <QueueAnim
        type={"scaleY"}
      >
      <section key="demo5"className="aui-scrollView" style={{"marginTop":"44px"}}>
        <div className="aui-branch-box">
          <div className="aui-coll-title">
            <h2>精彩活动</h2>
          </div>
          <div className="aui-slide-list">
            <ul className="aui-slide-item-list">
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/com-001.jpg" alt=""/>
                </a>
                <h3>十一月签到活动进行中</h3>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/mt-002.jpg" alt=""/>
                </a>
                <h3>十一月签到活动进行中</h3>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/com-001.jpg" alt=""/>
                </a>
                <h3>十一月签到活动进行中</h3>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/mt-001.jpg" alt=""/>
                </a>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/com-001.jpg" alt=""/>
                </a>
                <h3>十一月签到活动进行中</h3>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/com-001.jpg" alt=""/>
                </a>
                <h3>十一月签到活动进行中</h3>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/com-001.jpg" alt=""/>
                </a>
                <h3>十一月签到活动进行中</h3>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/com-001.jpg" alt=""/>
                </a>
                <h3>十一月签到活动进行中</h3>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/com-001.jpg" alt=""/>
                </a>
              </li>
              <li className="aui-slide-item-item">
                <a href="javascript:;" className="aui-link">
                  <img src="/images/img/com-001.jpg" alt=""/>
                </a>
                <h3>十一月签到活动进行中</h3>
              </li>
            </ul>
          </div>
          <div className="aui-coll-title">
            <h2>精选话题</h2>
          </div>
          <div className="aui-comm-link">
            <a href="javascript:;" className="aui-comm-link-item"><em>1</em>#2018我的考试成绩单#</a>
            <a href="javascript:;" className="aui-comm-link-item"><em>2</em>#2018我的考试成绩单#</a>
            <a href="javascript:;" className="aui-comm-link-item"><em>3</em>#2018我的考试成绩单#</a>
            <a href="javascript:;" className="aui-comm-link-item"><em>4</em>#2018我的考试成绩单#</a>
          </div>
        </div>
        <List list={this.props.community} dataName="community"/>
      </section>
      </QueueAnim>
    )
  }

}
let initMapStateToProps = state => ({
  community:state.community
});
let initMapDispatchToProps = dispatch =>({
  updata:(url)=>dispatch(asyncAction({
    type:types.UPDATE_COMMUNITY,
    url:url
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Community);