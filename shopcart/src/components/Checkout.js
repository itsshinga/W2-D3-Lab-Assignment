// src/components/Checkout.js
import React from "react";

const Checkout = ({ user }) => {
  return (
    <div className="container mt-4">
      <h2>Check Out</h2>
      {user ? (
        <>
          <p>Welcome {user.name || "User"}! You are now logged in.</p>
          <p>Time to complete your purchase.</p>
        </>
      ) : (
        <p>You must be logged in to check out.</p>
      )}
    </div>
  );
};

export default Checkout;
