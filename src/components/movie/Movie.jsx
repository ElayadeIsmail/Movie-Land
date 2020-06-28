import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie, getCredits } from "../../redux/movie/action";
import MovieInfo from "../movie-info/MovieInfo";
import "./movie.style.scss";
import Cast from "../cast/Cast";

class Movie extends Component {
  componentDidMount() {
    const { getMovie, getCredits, match } = this.props;
    getMovie(match.params.id);
    getCredits(match.params.id);
  }
  render() {
    const { movie, credits } = this.props;
    return (
      <div className='movie'>
        <MovieInfo id={movie.id} movie={movie} />
        <h1 className='movie-credits-title'>Cast</h1>
        <Cast casts={credits} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  credits: state.movies.credits,
});

export default connect(mapStateToProps, { getMovie, getCredits })(Movie);
