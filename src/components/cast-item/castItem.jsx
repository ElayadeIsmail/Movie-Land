import React from "react";
import "./cast-item.style.scss";

const CastItem = ({ cast: { character, name, profile_path } }) => {
  return profile_path ? (
    <div className='cast-item'>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt='cast' />
      <div className='cast-item-info'>
        <h3 className='name'>{name}</h3>
        <h3>{character}</h3>
      </div>
    </div>
  ) : null;
};

export default CastItem;
