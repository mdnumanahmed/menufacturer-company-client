import React from "react";

const Review = ({review}) => {
    const {img, name, description} = review;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Review;
