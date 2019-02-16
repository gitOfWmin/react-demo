import React from 'react';
import {Link} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim'

let sTop = 0;

export default class User extends React.Component{
  render(){
    return (
      <QueueAnim
        type={"scaleX"}
        duration={500}
        interval={100}
        appear={true}
      >
        <section key="demo2"className="aui-scrollView" style={{"marginTop":"44px"}}>
        <div className="aui-well-comm">
          <div className="aui-well-comm-hd">
            <img src="/images/user/user-mate-002.jpg" alt=""/>
              <span className="aui-well-comm-vip">
                <img src="/images/icon/icon-vip.png" alt=""/>
              </span>
          </div>
          <div className="aui-well-comm-bd">
            <h4>
              <span>孙璐璐同学</span>
              <i className="icon icon-man"></i>
              <em>Lv.10</em>
            </h4>
            <p>大家好！我是孙璐璐，多多关照</p>
          </div>
          <span className="aui-comm-sign">已签到</span>
        </div>
        <div className="aui-grids">
          <Link to="/collection" className="aui-grids-item">
            <span>1220</span>
            <span className="aui-grids-item-text">收藏</span>
          </Link>
          <Link to="/friends" className="aui-grids-item">
            <span>9236</span>
            <span className="aui-grids-item-text">关注</span>
          </Link>
          <Link to="/friends" className="aui-grids-item">
            <span>190</span>
            <span className="aui-grids-item-text">粉丝</span>
          </Link>
        </div>
        <div className="divHeight"></div>
        <div className="aui-head-access">
          <div className="aui-head-access-hd">我的学习</div>
          <span
            className="aui-head-access-fr aui-head-access-fr-clear">已学习:<em>161</em>节课  学习:<em>289</em>小时 <em>123</em>分</span>
        </div>
        <div className="aui-grids aui-grids-image">
          <Link to="/news" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item001.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的老师</span>
          </Link>
          <Link to="/coursem" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item002.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的课程</span>
          </Link>
          <Link to="/topic" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item003.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的题库</span>
          </Link>
          <a href="javascript:;" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item004.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的成绩</span>
          </a>
          <a href="javascript:;" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item005.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">最近观看</span>
          </a>
          <a href="javascript:;" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item006.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的下载</span>
          </a>
        </div>
        <div className="divHeight"></div>
        <div className="aui-head-access">
          <div className="aui-head-access-hd">我的资产</div>
        </div>
        <div className="aui-grids aui-grids-image">
          <a href="javascript:;" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item007.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的优惠</span>
          </a>
          <a href="javascript:;" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item008.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的金币</span>
          </a>
          <a href="javascript:;" target="_blank" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item009.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的店铺</span>
          </a>
        </div>
        <div className="divHeight"></div>
        <div className="aui-head-access">
          <div className="aui-head-access-hd">我的服务</div>
        </div>
        <div className="aui-grids aui-grids-image">
          <a href="order.html" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item010.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">我的订单</span>
          </a>
          <a href="javascript:;" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item011.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">邀请好友</span>
          </a>
          <a href="http://a-ui.cn/" target="_blank" className="aui-grids-item">
            <span>
              <img src="/images/icon/icon-item012.png" alt=""/>
            </span>
            <span className="aui-grids-item-text">技术支持</span>
          </a>
        </div>
        <div className="divHeight"></div>
        <div className="aui-head-access b-line">
          <div className="aui-head-access-hd">设置</div>
          <span className="aui-head-access-fr"></span>
        </div>
        <div className="aui-head-access b-line">
          <div className="aui-head-access-hd">关于我们</div>
          <span className="aui-head-access-fr"></span>
        </div>
        <div className="aui-head-access">
          <div className="aui-head-access-hd">帮助中心</div>
          <span className="aui-head-access-fr"></span>
        </div>
        <div className="divHeight"></div>
      </section>
      </QueueAnim>
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
  }
  
}
