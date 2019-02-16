import React from "react";
import Banner from "../Banner/Banner";
import Grids from "../Grids/Grids";
import Hot from "../Hot/Hot";
import List from "../List/List";
import * as types from '../../store/types'
import {asyncAction} from "../../store/asyncAction";
import {connect} from 'react-redux';

export default class Home extends React.Component{
  constructor(props){
    super(props);

    let url='/data/home.json'
    props.updata(url);

  }
  render(){
    return (
      <section className="aui-scrollView">
        <Banner/>
        <Grids/>
        <Hot/>
        {/*<List list={this.props.home} dataName="home"/>*/}
      </section>
    )
  }
}

let initMapStateToProps = state => ({
  home:state.home
});

// let initMapDispatchToProps = dispatch =>({
//   updata_home:(home)=>dispatch({type:types.UPDATE_HOME,payload:home})
// });
let initMapDispatchToProps = dispatch =>({
  updata:(url)=>dispatch(asyncAction({
    type:types.UPDATE_HOME,
    url:url
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Auth);
