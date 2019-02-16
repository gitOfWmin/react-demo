import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

//数据预载   userdata={this.state.data}
class Auth extends React.Component{
  render(){
    let {component:Component,user, ...rest}=this.props;
    return (
      <Route {...rest} render={(contents)=>(
        user.auth ? <Component userdata={user.data} {...contents} /> : <Redirect to="/login" />
      )} />
    )
  }
}

let initMapStateToProps = state => ({
  user:state.user
});

let initMapDispatchToProps = dispatch =>({
  // view_foot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Auth);