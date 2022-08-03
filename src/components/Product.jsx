import React, { Component } from "react";

class Product extends Component {
  state = {
    quantity: this.props.product.quantity,
  };

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  render() {
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button onClick={this.handleIncrement} className="btn btn-primary ">
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
    classes += this.state.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatQuantity() {
    const { quantity } = this.state;
    return quantity === 0 ? "Zero" : quantity;
  }
}

export default Product;
