// src/components/Cart.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ products, user }) => {
  const navigate = useNavigate();
  const cartProducts = products.filter((product) => product.value > 0);

  const handleCheckoutClick = () => {
    console.log("Check Out clicked. User:", user);
    if (!user) {
      navigate("/signin");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart Items</h2>
      {cartProducts.length === 0 ? (
        <>
          <p>There are 0 items in your cart.</p>
          <button
            className="btn btn-success mt-3"
            onClick={() => navigate("/")}
          >
            Continue Shop
          </button>
        </>
      ) : (
        <>
          {cartProducts.map((product) => (
            <div key={product.id} className="border-bottom py-3">
              <h5>{product.desc}</h5>
              <div className="d-flex align-items-center">
                <img
                  src={product.image}
                  alt={product.desc}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div className="ms-4">
                  <p>Quantity: {product.value}</p>
                </div>
              </div>
            </div>
          ))}
          <button
            className="btn btn-primary mt-3"     
            onClick={handleCheckoutClick}
          >
            Check Out
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
