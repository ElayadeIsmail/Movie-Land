import React from "react";
import "./cast.style.scss";
import CastItem from "../cast-item/castItem";

import Spinner from "../spinner/Spinner";

const Cast = ({ casts }) => {
  return (
    <div className='cast'>
      {casts ? (
        casts
          .filter((item, ind) => ind < 15)
          .map((cast) => <CastItem key={cast.id} cast={cast} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Cast;
