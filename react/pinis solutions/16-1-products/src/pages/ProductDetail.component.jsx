import React from "react";
import data from "../data";
class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const findProduct = data.find((item) => {
      return item.id === id;
    });
    if (!findProduct) {
      //if there isn't that product redirect to somewhere else. Better to a component that says component not found
      this.props.history.goBack();
    }

    this.setState({ product: findProduct });
  }
  handleClick = () =>{
    this.props.history.goBack();
  }

  render() {
    const renderProduct = () => {
      return (
        <>
          <h4>{this.state.product.title}</h4>
          <h6>Price:{this.state.product.price}</h6>
          <img src={this.state.product.imageUrl} alt="" />
          <div>
              <button onClick={this.handleClick}>back</button>
          </div>
        </>
      );
    };
    return (
      <div>{this.state.product && renderProduct()}</div>
      //2nd way
    );
  }
}

export default ProductDetail;
