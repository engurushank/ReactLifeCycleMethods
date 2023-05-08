import React,{Component} from 'react'
import Child from './Child';

class App extends Component{

  constructor(props)
  {
    super(props);
    console.log("Inside constructor");
  }
  UNSAFE_componentWillMount()
  {
    console.log("Inside componentWillMount");
  }
  state={name : "Rushank" , show : true , count : 0};
  render()
  {
    let c;
    if(this.state.show)
    {
      c= <Child name={this.state.name}/>
    }
    console.log("Inside render method");
    return(
      <>
        <h2>Hello {this.state.name}</h2>
        <h2>Count : {this.state.count}</h2>
        {c}
        <button onClick={()=>{
          this.setState({name : "Rohan",show : false , count : this.state.count+1});
        }
        }>Change</button>
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
}
export default App
