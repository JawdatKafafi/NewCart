import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
class App extends Component {
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

  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity--;
    this.setState({ products });
  };

  handleReset = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <NavBar productCount={products.filter((p) => p.quantity > 0).length} />
        <div className="container mt-4">
          <Products
            products={products}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </div>
      </>
    );
  }
}

export default App;
