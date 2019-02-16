import React from "react";
import Banner from "../Banner/Banner";
import Grids from "../Grids/Grids";
import Hot from "../Hot/Hot";
import List from "../List/List";
import * as types from '../../store/types'
import {asyncAction} from "../../store/asyncAction";
import {connect} from 'react-redux';

import QueueAnim from 'rc-queue-anim';

let sTop = 0;

class Home extends React.Component{

  constructor(props){
    super(props);

    let url='/data/home.json'
    props.updata(url);
    // console.log(this.props)
  }
  render(){
    return (
      <QueueAnim
        type={"scale"}
        duration={500}
        interval={100}
        appear={true}
      >
        <section className="aui-scrollView" key="demo1">
          <Banner/>
          <Grids/>
          <Hot/>
          <List list={this.props.home} dataName="home"/>
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

let initMapStateToProps = state => ({
  home:state.home
});
let initMapDispatchToProps = dispatch =>({
  updata:(url)=>dispatch(asyncAction({
    type:types.UPDATE_HOME,
    url:url
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Home);
