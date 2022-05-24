import React from "react";

const Product = ({ product }) => {
  const { img, name, description, price, minOrderQuantity, availableQuantity } =
    product;

  return (
    <div className="card lg:max-w-md bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><strong>Description : </strong> {description}</p>
        <p><strong>Minimum Order Qunatity : </strong> {minOrderQuantity}</p>
        <p><strong>Available Quantity : </strong> {availableQuantity}</p>
        <p><strong>Price : </strong>$ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
