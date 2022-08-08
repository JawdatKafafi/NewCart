import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onIncrement, OnDelete, product, onDecrement } = this.props;
    return (
      <div className="row m-2">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>
            {this.formatQuantity()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(product)}
            className="btn btn-secondary "
          >
            +
          </button>
          <button
            onClick={() => onDecrement(product)}
            className="btn btn-secondary mx-2"
            disabled={product.quantity === 0}
          >
            -
          </button>
          <button
            onClick={() => OnDelete(product.id)}
            className="btn btn-danger mx-2"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge me-2 bg-";
    classes +=
      this.props.product.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatQuantity() {
    const { quantity } = this.props.product;
    return quantity === 0 ? "Zero" : quantity;
  }
}

export default Product;
