import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.product)}
          className="btn btn-primary "
        >
          Increment
        </button>
        <button
          onClick={() => this.props.OnDelete(this.props.product.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
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
