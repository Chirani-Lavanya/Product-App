import React from "react";


const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 2px 10px rgb(174, 15, 237)",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ height: 150, objectFit: "contain", marginBottom: 10 }}
      />
<h2 className="product-title">{product.title}</h2>
<p className="product-price">${product.price}</p>
    </div>
  );
};

export default ProductCard;