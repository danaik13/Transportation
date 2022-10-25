import createAction from '../../../helpers/createAction';

export const SET_POLYLINE_BETWEEN_MARKERS = 'SET_POLYLINE_BETWEEN_MARKERS';

const setPolylineBetweenMarkers = (payload: any) => {
  return createAction(SET_POLYLINE_BETWEEN_MARKERS, payload);
}

export { setPolylineBetweenMarkers };