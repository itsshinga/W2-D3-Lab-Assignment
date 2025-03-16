import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DisplayProducts from "./components/displayProducts";
import Cart from "./components/Cart";
import productsData from "./data/products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
    };
  }

  // Handler to increment product quantity
  handleAdd = (product) => {
    const products = this.state.products.map((p) => {
      if (p.id === product.id) {
        return { ...p, value: p.value + 1 };
      }
      return p;
    });
    this.setState({ products });
  };

  // Handler to decrement product quantity
  handleSubtract = (product) => {
    const products = this.state.products.map((p) => {
      if (p.id === product.id && p.value > 0) {
        return { ...p, value: p.value - 1 };
      }
      return p;
    });
    this.setState({ products });
  };

  // Calculate total quantity
  getTotalQuantity = () => {
    return this.state.products.reduce((acc, p) => acc + p.value, 0);
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar totalQuantity={this.getTotalQuantity()} />
          <Routes>
            <Route
              path="/"
              element={
                <DisplayProducts
                  products={this.state.products}
                  onAdd={this.handleAdd}
                  onSubtract={this.handleSubtract}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart products={this.state.products} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
