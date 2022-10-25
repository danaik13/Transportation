import { put, select } from 'redux-saga/effects';
import fetchPolylineBeetweenMarkers from '../../../../services/api/map/fetchPolylineBeetweenMarkers';
import createAction from '../../../helpers/createAction';
import { RootState } from '../../../reducers';
import { setPolylineBetweenMarkers } from './setPolylineBetweenMarkers';
import { type LatLngExpression, } from 'leaflet';


export const FETCH_POLYLINE_BETWEEN_MARKERS = 'FETCH_POLYLINE_BETWEEN_MARKERS'

const fetchPolylineBeetweenMarkersAction = () => {
    return createAction(FETCH_POLYLINE_BETWEEN_MARKERS)
}

function* fetchPolylineBeetweenMarkersWorker(): any {
    const activeRequest = yield select((state: RootState) => state.map.activeRequest)
    const res = yield fetchPolylineBeetweenMarkers([activeRequest.from[1],activeRequest.from[0]], [activeRequest.to[1],activeRequest.to[0]])
    
    const steps = res.data.routes[0].legs[0].steps
    
    let polyline: LatLngExpression[] = [];

    steps.forEach((step: any) => {    
        step['intersections'].forEach((location: any) => {
            polyline.push([location['location'][0], location['location'][1]])
        })
    })

    console.log(typeof polyline)

    yield put(setPolylineBetweenMarkers(polyline))
}

export { fetchPolylineBeetweenMarkersAction, fetchPolylineBeetweenMarkersWorker };