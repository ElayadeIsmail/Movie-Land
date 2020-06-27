import React from "react";
import { connect } from "react-redux";

import MoviesPrev from "../../components/movie-prev/MoviePreview";

const CollectionPage = ({ popular, trending, upComing, topRated }) => {
  return (
    <div className='collection-page'>
      <MoviesPrev title='Top Rated' url='toprated' collection={topRated} />
      <MoviesPrev title='Trending' url='trending' collection={trending} />
      <MoviesPrev title='Most Popular' url='popular' collection={popular} />
      <MoviesPrev title='Coming Soon' url='upcoming' collection={upComing} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  popular: state.movies.popular,
  trending: state.movies.trending,
  upComing: state.movies.upComing,
  topRated: state.movies.topRated,
});

export default connect(mapStateToProps)(CollectionPage);
