import React from 'react';
import {Link} from 'react-router-dom';

export default class Grids extends React.Component{
  render(){
    return (
      <>
        <div className="aui-grids" style={{"marginTop":"44px"}}>
          <Link to="/campus" className="aui-grids-item">
            <div className="aui-grids-item-icon">
              <img src="/images/icon/icon-head-001.png" alt=""/>
            </div>
            <div className="aui-grids-item-text">校园</div>
          </Link>
          <Link to="/coursem" className="aui-grids-item">
            <div className="aui-grids-item-icon">
              <img src="/images/icon/icon-head-002.png" alt=""/>
            </div>
            <div className="aui-grids-item-text">课程</div>
          </Link>
          <Link to="/topic" className="aui-grids-item">
            <div className="aui-grids-item-icon">
              <img src="/images/icon/icon-head-003.png" alt=""/>
            </div>
            <div className="aui-grids-item-text">题库</div>
          </Link>
          <Link to="/mate" className="aui-grids-item">
            <div className="aui-grids-item-icon">
              <img src="/images/icon/icon-head-004.png" alt=""/>
            </div>
            <div className="aui-grids-item-text">同学</div>
          </Link>
          <Link to="/lecture" className="aui-grids-item">
            <div className="aui-grids-item-icon">
              <img src="/images/icon/icon-head-005.png" alt=""/>
            </div>
            <div className="aui-grids-item-text">讲座</div>
          </Link>
          <Link to="/question" className="aui-grids-item">
            <div className="aui-grids-item-icon">
              <img src="/images/icon/icon-head-006.png" alt=""/>
            </div>
            <div className="aui-grids-item-text">问答</div>
          </Link>
        </div>
        <div className="divHeight"></div>
      </>
    )
  }
}