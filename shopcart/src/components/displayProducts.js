// src/components/displayProducts.js
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DisplayProducts = ({ products, onAdd, onSubtract }) => {
  // State to control modal visibility and store the active product
  const [showModal, setShowModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleShowModal = (product) => {
    setActiveProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveProduct(null);
  };

  return (
    <div className="container mt-4">
      {products.map((product) => (
        <div key={product.id} className="border-bottom py-3">
          <h5 className="mb-3">{product.desc}</h5>
          <div className="d-flex align-items-center">
            <img
              src={product.image}
              alt={product.desc}
              style={{ width: "80px", height: "80px", objectFit: "cover", cursor: "pointer" }}
              onClick={() => handleShowModal(product)}
            />
            <div className="ms-4">
              <div className="d-flex align-items-center">
                <Button variant="secondary" onClick={() => onSubtract(product)}>-</Button>
                <input
                  type="number"
                  value={product.value}
                  readOnly
                  style={{ width: "60px", textAlign: "center", margin: "0 10px" }}
                />
                <Button variant="secondary" onClick={() => onAdd(product)}>+</Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {activeProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{activeProduct.desc}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={activeProduct.image}
              alt={activeProduct.desc}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <p className="mt-3">
              Ratings: <span style={{ fontWeight: "bold" }}>{activeProduct.ratings} / 5</span>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default DisplayProducts;
