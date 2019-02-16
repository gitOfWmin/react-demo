import React from 'react';
import Footer from "../../common/Footer/Footer";

// class List extends React.Component{
let List = (props)=>{
  let {list,dataName}= props
    return (
      <>
        <div className="aui-coll-user">
          {list.map(item=>(
            <a href="javascript:;" className="aui-coll-user-list b-line" key={item.id}>
              <div className="aui-flex">
                <div className="aui-user-img">
                  <img src={item.src} alt=""/>
                </div>
                <div className="aui-flex-box">
                  <h2>{item.username} <em>{item.rank}</em></h2>
                  <p>{item.place} {item.time}</p>
                </div>
                <div className="aui-flex-follow">
                  <button><i className="icon icon-follow"></i> 关注</button>
                </div>
              </div>
              <div className="aui-text-box">
                <div className="aui-text-head">
                  <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                </div>
                <div className="aui-text-img">
                  {item.imgSrc.map((val,index)=>(
                    <span className="aui-text-img-item" key={index}>
                      <img src={val} alt=""/>
                    </span>
                  ))}
                </div>
              </div>
              <div className="aui-text-bottom">
                <span className="aui-text-bottom-item"> <i className="icon icon-share"></i>{item.share}</span>
                <span className="aui-text-bottom-item"> <i className="icon icon-discuss"></i>{item.comment}</span>
                <span className="aui-text-bottom-item"> <i className="icon icon-give"></i>{item.favour}</span>
              </div>
            </a>
          ))}
        </div>
      </>
    )
  // }
}
export default List;