import { put } from "redux-saga/effects";
import axios from "../api.interface";
import { getMovieSuccess } from "../actions/getMovie.action";
export function* onGetMovie(data) {
  let obj = data.values;
  try {
    const data = yield axios.get(
      `/?s=${obj.movie}&y=${obj.year}&apikey=eccf9937`
    );
    yield put(getMovieSuccess(data.data));
  } catch (error) {
    throw error;
  }
}
