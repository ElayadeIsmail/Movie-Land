import {
  GET_TRANDING_MOVIES,
  GET_POPUTAR_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_MOVIE,
} from "./types";

const initialState = {
  trending: [],
  popular: [],
  upComing: [],
  topRated: [],
  movie: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRated: action.payload,
      };
    case GET_TRANDING_MOVIES:
      return {
        ...state,
        trending: action.payload,
      };
    case GET_POPUTAR_MOVIES:
      return {
        ...state,
        popular: action.payload,
      };
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upComing: action.payload,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
