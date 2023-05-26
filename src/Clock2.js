import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.updateCount = this.updateCount.bind(this);
  }

  componentDidMount() {
    // Simulating a state update after 2 seconds
    console.log("Componenet Mouting")
    setTimeout(() => {
      this.setState({ count: 1 });
    }, 2000);


  }

  componentDidUpdate(prevProps, prevState) {
    // Checking if the count state has changed
    if (this.state.count !== prevState.count) {
      console.log("Count has been updated!");
    }
  }

  updateCount() {
    this.setState((prevState) => ({ count: this.state.count + 1 }));
  }

  componentWillUnmount(){
    console.log("Component UnMouting");
  }

  render() {
    return (
      <div>
        <h1>Example Component</h1>
        <p>Count: {this.state.count}</p>
        <Button onClick={this.updateCount}>Click me</Button>
      </div>
    );
  }
}
