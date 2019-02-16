import React from 'react';
import ReactSwipe from 'react-swipe';

const Banner = ()=>(
<>
  <div className="m-slider" data-ydui-slider style={{"marginTop":"44px"}}>
  <div className="slider-wrapper">
  <ReactSwipe
  className="carousel"
  swipeOptions={{continuous:true,auto:1000,speed:100}}
  >
    {/*<img src="/images/banner/banner-001.jpg"/>*/}
    {/*<img src="/images/banner/banner-002.jpg"/>*/}
    {/*<img src="/images/banner/banner-003.jpg"/>*/}
    {/*<img src="/images/banner/banner-004.jpg"/>*/}
    {/*<img src="/images/banner/banner-005.jpg"/>*/}

  <div className="slider-item">
    <a href="javascript:;">
     <img src="/images/banner/banner-001.jpg"/>
    </a>
  </div>
  <div className="slider-item">
  <a href="javascript:;">
  <img src="/images/banner/banner-002.jpg"/>
  </a>
  </div>
  <div className="slider-item">
  <a href="javascript:;">
  <img src="/images/banner/banner-003.jpg"/>
  </a>
  </div>
  <div className="slider-item">
  <a href="javascript:;">
  <img src="/images/banner/banner-004.jpg"/>
  </a>
  </div>
  <div className="slider-item">
  <a href="javascript:;">
  <img src="/images/banner/banner-005.jpg"/>
  </a>
  </div>
  <div className="slider-item">
  <a href="javascript:;">
  <img src="/images/banner/banner-006.jpg"/>
  </a>
  </div>

  </ReactSwipe>
  </div>
  <div className="slider-pagination"></div>
  </div>

  </>
)

export default Banner;