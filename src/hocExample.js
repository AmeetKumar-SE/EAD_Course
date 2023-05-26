import React from 'react';
import { Button } from 'react-bootstrap';

export default function withCounter(WrappedComponent){
  class NewCompoent extends React.Component {

    constructor(props){
        super(props)
        this.state = {count:0}
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState((prev) => ({ count: prev.count + 1 }));
    }
      

    render() {
      return <WrappedComponent count={this.state.count}  increment={this.increment} {...this.props}/>;
    }
  }

  return NewCompoent;
};

// const MyComponent = (props) => {
//   return <><div>Hello!</div>
//   <Button onClick={props.increment}>{props.count}</Button></>
// };

// export const MyTodayComponent = withCounter(MyComponent);
