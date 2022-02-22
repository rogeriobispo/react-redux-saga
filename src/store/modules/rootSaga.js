import { all } from 'redux-saga/effects';

import reserve from './reserves/sagas';

export default function* rootSaga() {
  return yield all([reserve]);
}