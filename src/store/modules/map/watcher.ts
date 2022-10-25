import { takeLatest } from 'redux-saga/effects';
import { fetchPolylineBeetweenMarkersWorker, FETCH_POLYLINE_BETWEEN_MARKERS } from './actions/fetchPolylineBeetweenMarkers';

export default [
  takeLatest(FETCH_POLYLINE_BETWEEN_MARKERS, fetchPolylineBeetweenMarkersWorker),
];