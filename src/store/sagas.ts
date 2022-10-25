import { all } from 'redux-saga/effects';
import mapWatcher from './modules/map/watcher';

export default function* rootSaga() {
    yield all([
        ...mapWatcher,
    ]);
}