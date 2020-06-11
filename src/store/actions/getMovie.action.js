import { GET_MOVIE, GET_MOVIE_SUCCESS } from "../action.types";

export const getMovie = values => ({
  type: GET_MOVIE,
  values
});
export const getMovieSuccess = values => ({
  type: GET_MOVIE_SUCCESS,
  values
});
