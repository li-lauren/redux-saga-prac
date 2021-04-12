import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { GET_USER } from "../ducks/user";

/*
  Worker Saga
  Starts handleGetUser on each dispatched GET_USER action
  takeEvery -> allows for concurrent fetches of user
  takeLatest -> only latest dispatch will be run; prev ones are canceled
*/
export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser)
}