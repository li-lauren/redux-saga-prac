import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/user";
import { requestGetUser } from "../requests/user";

// worker/handler Saga: will be fired on GET_USER actions
export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    // instructs saga middleware to dispatch the setUser action
    // a put is an Effect (plain JS object which contain instructions to be fufilled by mw)
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
