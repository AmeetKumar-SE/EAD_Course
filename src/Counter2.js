import React from "react";
export default class Counter2 extends React.Component{

    constructor(props){
    super(props);
    this.state = {count:0, age: 20}
    }   
    
    increment(){
    //this.setState({count: this.state.count+1})
    this.setState((prevState2, props)=>({...prevState2, count: prevState2.count + + props.offset}));
    }
    
    decrement(){
    this.setState({count: this.state.count-1})
    }
    
    render(){
    return <>
    <span>{this.state.age}</span>
    <button onClick={(()=>(this.increment.bind(this)))()}>+</button>
    <span>{this.state.count}</span>
    <button onClick={(()=>(this.setState({count:this.state.count-10})))}>-</button>
    </>
    }
}
    