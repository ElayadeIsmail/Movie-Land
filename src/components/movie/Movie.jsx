import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie } from "../../redux/movie/action";
import MovieInfo from "../movie-info/MovieInfo";
import "./movie.style.scss";

class Movie extends Component {
  componentDidMount() {
    const { getMovie, match } = this.props;
    getMovie(match.params.id);
  }
  render() {
    const { movie } = this.props;
    return (
      <div>
        <MovieInfo id={movie.id} movie={movie} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { getMovie })(Movie);
