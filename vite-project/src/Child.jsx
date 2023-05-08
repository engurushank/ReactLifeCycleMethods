import React,{Component} from "react";

export default class Child extends Component
{
    constructor(props)
  {
    super(props);
    console.log("Inside  child constructor");
  }
  UNSAFE_componentWillMount()
  {
    console.log("Inside componentWillMount");
  }
  render()
  {
    console.log("Inside render method");
    return(
      <>
        <h2>I am from child class</h2>
      </>
    );
  }
  componentDidMount()
  {
    console.log("Inside componentDidMount");
  }
  UNSAFE_componentWillReceiveProps()
  {
    console.log("Inside componentWillRecieveProps");
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("Inside shouldComponentUpdate");
    console.log("current props : ", this.props);
    console.log("next props : ",nextProps);
    console.log("current state : ", this.state);
    console.log("next state : ",nextState);
    return true;
  }
  UNSAFE_componentWillUpdate()
  {
    console.log("Inside componentWillUpdate");
  }
  componentDidUpdate()
  {
    console.log("Inside componentDidUpdate");
  }
  UNSAFE_componentWillUnmount()
  {
    console.log("Inside componentWillUnmount");
  }
  
}