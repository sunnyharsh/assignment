import { takeLatest, all } from "redux-saga/effects";
import { GET_MOVIE } from "../action.types";

import { onGetMovie } from "./getMovie.saga";

function* sagas() {
    yield all([takeLatest(GET_MOVIE, onGetMovie)]);

}

export default sagas;