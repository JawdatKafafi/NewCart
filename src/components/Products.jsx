import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, quantity: 0 },
      { id: 1, quantity: 4 },
      { id: 1, quantity: 5 },
      { id: 1, quantity: 7 },
    ],
  };

  handleDelete = (id) => {
    const products = this.state.products.filter((p) => p.id !== id);
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary">Reset</button>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Products;
