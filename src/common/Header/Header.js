import React from "react";

class Header extends React.Component{
  // constructor(props){
  //   super()
  //   this.state={
  //     title:props.title
  //   }
  // }
  render(){
    return (
      <header className="aui-navBar aui-navBar-fixed">
        <a href="javascript:;" className="aui-navBar-item">
          <i className="icon "></i>
        </a>
        <div className="aui-center">
          <span className="aui-center-title">{this.props.title}</span>
        </div>
        <a href="javascript:;" className="aui-navBar-item">
          <i className="icon icon-sys"></i>
        </a>
      </header>
    )
  }
}
export default Header;