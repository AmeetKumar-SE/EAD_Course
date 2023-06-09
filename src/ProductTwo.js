import React from "react";

export default class Products2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  componentDidMount(){
        fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => this.setState({products: data}));
  }
  

  render() {
    return (
      <>
      {/* <p>{JSON.stringify(this.state)}</p> */}
        <ul>
          {this.state?.products?.map(product => <li key={product.id}>{product.title}</li>)}
        </ul>
      </>
    );
  }
}
