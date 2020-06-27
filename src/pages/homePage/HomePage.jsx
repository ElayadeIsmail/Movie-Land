import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./homepage.style.scss";
import {
  getPopularMovies,
  getTrandingMovies,
  getUpComingMovies,
  getTopRatedMovies,
} from "../../redux/movie/action";
import MovieCollection from "../../components/movie-collection/MovieCollection";
import CollectionPage from "../collection-page/CollectionPage";
import Movie from "../../components/movie/Movie";

class HomePage extends Component {
  componentDidMount() {
    const {
      getTopRatedMovies,
      getPopularMovies,
      getTrandingMovies,
      getUpComingMovies,
    } = this.props;
    getTopRatedMovies();
    getUpComingMovies();
    getTrandingMovies();
    getPopularMovies();
  }
  render() {
    const { match, popular, trending, upComing, topRated } = this.props;
    return (
      <div className='home-page'>
        <Route exact path={`${match.path}`} component={CollectionPage} />
        <Route
          exact
          path='/popular'
          render={() => (
            <MovieCollection title='Most Popular' collection={popular} />
          )}
        />
        <Route
          exact
          path='/upcoming'
          render={() => (
            <MovieCollection title='Coming Soon' collection={upComing} />
          )}
        />
        <Route
          exact
          path='/toprated'
          render={() => (
            <MovieCollection title='Top Rated' collection={topRated} />
          )}
        />
        <Route
          exact
          path='/trending'
          render={() => (
            <MovieCollection title='trending' collection={trending} />
          )}
        />
        <Route exact path='/movie/:id' component={Movie} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  popular: state.movies.popular,
  trending: state.movies.trending,
  upComing: state.movies.upComing,
  topRated: state.movies.topRated,
});

export default connect(mapStateToProps, {
  getTopRatedMovies,
  getPopularMovies,
  getTrandingMovies,
  getUpComingMovies,
})(HomePage);
