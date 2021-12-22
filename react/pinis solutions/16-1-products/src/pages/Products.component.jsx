import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.setState({ data: data });
  }

  render() {
    const renderProducts = () => {
      return this.state.data.map((product) => {
        return (
          <Link
            to={`${this.props.location.pathname}/${product.id}`}
            key={product.id}
          >
            {product.title}
          </Link>
          //bad practice to save the product to link state
          // <Link
          //   style={styles}
          //   key={product.id}
          //   to={{
          //     pathname: `${this.props.location.pathname}/${product.id}`,
          //     state: { product },
          //   }}
          // >
          //   {product.title}
          // </Link>
        );
      });
    };
    return <div>{renderProducts()}</div>;
  }
}

export default Products;
