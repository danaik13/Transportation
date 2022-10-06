import {takeLatest, put, select} from 'redux-saga/effects'
import {getPolyline } from '../../api';
import {CLICK_ON_REQUEST } from '../constants';
import {setPolylineBetweenMarkers} from './../actions'


export function* handlePolylineBetweenMarkers(): any {
    const request = yield select(store => store.request)

    const data = yield getPolyline(request.markerFrom, request.markerTo);
    const steps = data.routes[0].legs[0].steps

    let polyline: any[] = [];

    steps.forEach((step: any) => {    
        step['intersections'].forEach((location: any) => {
            polyline.push([location['location'][1], location['location'][0]])
        })
    })

    yield put(setPolylineBetweenMarkers(polyline))
}

export function* watchClickSaga() {
    yield takeLatest(CLICK_ON_REQUEST, handlePolylineBetweenMarkers)
}

export default function* rootSaga() {
    yield watchClickSaga();
} 