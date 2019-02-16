import React from 'react';
import Grids from "../Grids/Grids";
import Course from "../Course/Course";
import QueueAnim from 'rc-queue-anim'

export default class Study extends React.Component{
  render(){
    return (
      <QueueAnim>
      < div  key="demo3">
        <Grids/>
        <Course/>
      </div>
      </QueueAnim>
    )
  }
}