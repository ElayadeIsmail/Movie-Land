import {
  GET_TRANDING_MOVIES,
  GET_POPUTAR_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_MOVIE,
} from "./types";
import axois from "axios";
// most Popular
// https://api.themoviedb.org/3/movie/popular?api_key=930f62e012106d3875f065e01263210e&language=en-US&page=1

// top Rated
// https://api.themoviedb.org/3/movie/top_rated?api_key=930f62e012106d3875f065e01263210e&language=en-US&page=1

// Up Coming
// https://api.themoviedb.org/3/movie/upcoming?api_key=930f62e012106d3875f065e01263210e&language=en-US&page=1

// image
// https://image.tmdb.org/t/p/w500/
export const getTopRatedMovies = () => async (dispatch) => {
  const res = await axois.get(
    " https://api.themoviedb.org/3/movie/top_rated?api_key=930f62e012106d3875f065e01263210e&language=en-US&page=1"
  );
  dispatch({
    type: GET_TOP_RATED_MOVIES,
    payload: res.data.results,
  });
};
export const getTrandingMovies = () => async (dispatch) => {
  const res = await axois.get(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=930f62e012106d3875f065e01263210e"
  );
  dispatch({
    type: GET_TRANDING_MOVIES,
    payload: res.data.results,
  });
};
export const getPopularMovies = () => async (dispatch) => {
  const res = await axois.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=930f62e012106d3875f065e01263210e&language=en-US&page=1"
  );
  dispatch({
    type: GET_POPUTAR_MOVIES,
    payload: res.data.results,
  });
};
export const getUpComingMovies = () => async (dispatch) => {
  const res = await axois.get(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=930f62e012106d3875f065e01263210e&language=en-US&page=1"
  );
  dispatch({
    type: GET_UPCOMING_MOVIES,
    payload: res.data.results,
  });
};
export const getMovie = (id) => async (dispatch) => {
  const res = await axois.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=930f62e012106d3875f065e01263210e&language=en-US`
  );
  dispatch({
    type: GET_MOVIE,
    payload: res.data,
  });
};
