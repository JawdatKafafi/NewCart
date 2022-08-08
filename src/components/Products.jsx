import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { products, onDelete, onIncrement, onReset, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary">
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Products;
