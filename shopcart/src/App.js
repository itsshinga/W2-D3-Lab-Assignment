// src/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DisplayProducts from "./components/displayProducts";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import Checkout from "./components/Checkout";
import productsData from "./data/products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
      user: null, // store user data after login
    };
  }

  // Increase product quantity
  handleAdd = (product) => {
    const products = this.state.products.map((p) => {
      if (p.id === product.id) {
        return { ...p, value: p.value + 1 };
      }
      return p;
    });
    this.setState({ products });
  };

  // Decrease product quantity
  handleSubtract = (product) => {
    const products = this.state.products.map((p) => {
      if (p.id === product.id && p.value > 0) {
        return { ...p, value: p.value - 1 };
      }
      return p;
    });
    this.setState({ products });
  };

  // Total cart quantity
  getTotalQuantity = () => {
    return this.state.products.reduce((acc, p) => acc + p.value, 0);
  };

  // Save user data on login
  handleLogin = (userData) => {
    this.setState({ user: userData });
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
              element={<Cart products={this.state.products} user={this.state.user} />}
            />
            <Route path="/signin" element={<SignIn onLogin={this.handleLogin} />} />
            <Route path="/checkout" element={<Checkout user={this.state.user} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
