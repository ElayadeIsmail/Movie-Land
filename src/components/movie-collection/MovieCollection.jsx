import React from "react";
import "./movie-collection.scss";
import CartItem from "../cartItem/CartItem";

const MovieCollection = ({ title, collection }) => {
  return (
    <div className='collection-movies'>
      <h1 className='collection-movies-title'>{title.toUpperCase()}</h1>
      <div className='collection-movies-items'>
        {collection.map((item) => (
          <CartItem key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieCollection;
