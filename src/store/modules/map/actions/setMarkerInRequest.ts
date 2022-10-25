import { FROM_MARKER, TO_MARKER } from '../../../../constants/markers';
import { IData, TypeMarker } from '../../../../types';
import createAction from '../../../helpers/createAction';

interface PropsAction {
  requests: IData[];
  pointId: number; 
  requestId: number; 
  typeMarker: TypeMarker;
}

export const SET_MARKER_IN_REQUEST = 'SET_MARKER_IN_REQUEST';

const setMarkerInRequest = (payload: PropsAction) => {
  const new_requests: IData[] = payload.requests.map(request => {
    if (request.id === payload.requestId) {
      if (payload.typeMarker === FROM_MARKER) return {...request, fromPointId: payload.pointId}
      if (payload.typeMarker === TO_MARKER) return {...request, toPointId: payload.pointId}
    }

    return request
  })

  return createAction(SET_MARKER_IN_REQUEST, new_requests);
}

export { setMarkerInRequest };