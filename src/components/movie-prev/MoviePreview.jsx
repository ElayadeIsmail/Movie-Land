import React from "react";
import Slider from "react-slick";
import "./_slickTheme.scss";
import "./_slick.scss";
import { withRouter } from "react-router-dom";

import CartItem from "../cartItem/CartItem";
import "./movie-prev.style.scss";
import Spinner from "../spinner/Spinner";
import { LeftArrow, RightArrow } from "../right-arrow/Arrows";

const MoviesPrev = ({ title, collection, url, history }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <div className='preveiw'>
      {collection.length > 0 ? (
        <React.Fragment>
          <h1 onClick={() => history.push(`/${url}`)} className='preveiw-title'>
            {title}
          </h1>
          <Slider {...settings}>
            {collection
              .filter((item, idx) => idx < 10)
              .map((movie) => (
                <CartItem key={movie.id} movie={movie} />
              ))}
          </Slider>
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default withRouter(MoviesPrev);
