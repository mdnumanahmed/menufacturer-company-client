import React from "react";
import { Link, useParams } from "react-router-dom";

const Product = ({ product, refetch }) => {
  const {id} = useParams()
  
  const { _id, img, name, description, price, minOrderQuantity, availableQuantity } =
    product;
    refetch();

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
        <Link to={`product/${_id}`} className="btn btn-outline btn-secondary font-bold">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
