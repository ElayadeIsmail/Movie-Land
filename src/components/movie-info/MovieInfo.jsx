import React from "react";
import "./move-info.scss";

const MovieInfo = ({
  movie: { homepage, genres, overview, poster_path, title, vote_average },
}) => {
  return (
    <div
      className='movie-info'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt='img' />
      <div className='movie-info-content'>
        <h1 className='title'>
          <span>{title}</span>
        </h1>
        <div className='vote'>
          <h2>Vote :</h2>
          <span>{vote_average}</span>
        </div>
        <div className='gender'>
          <h2>Genres :</h2>
          {genres ? genres.map((genre) => <span>{genre.name}</span>) : null}
        </div>
        <div className='overview'>
          <h2>OverView :</h2>
          <p>{overview}</p>
        </div>
        <div className='link'>
          {homepage ? (
            <a href={homepage} rel='noopener noreferrer' target='_blank'>
              Go To Homepage Of The Movie
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
