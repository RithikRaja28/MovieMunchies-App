// Cart.jsx
import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.image}
            className="img-fluid rounded-start"
            alt={item.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: {item.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ items, onRemove }) => {
  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};
export default Cart;
