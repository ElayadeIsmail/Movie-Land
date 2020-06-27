import React from "react";
import "./cartItem.style.scss";
import { withRouter } from "react-router-dom";

const CartItem = ({
  movie: { vote_average, title, poster_path, id },
  history,
}) => {
  return (
    <div onClick={() => history.push(`/movie/${id}`)} className='cart-item'>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt='item' />
      <div className='rate'>
        <span>TMDB</span>
        <span>{vote_average}</span>
      </div>
      <span className='title'>{title}</span>
    </div>
  );
};

export default withRouter(CartItem);
