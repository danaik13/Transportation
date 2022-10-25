import { FROM_TYPE_MARKER, TO_TYPE_MARKER } from '../../../../core/constants';
import { IData, TypeMarker } from '../../../../types';
import createAction from '../../../helpers/createAction';


export const SET_MARKER_IN_REQUEST = 'SET_MARKER_IN_REQUEST';

// много параметров. больше 3 -> объект
const setMarkerInRequest = (requests: IData[], pointId: number, requestId: number, typeMarker: TypeMarker) => {
  const new_requests: IData[] = requests.map(request => {
    if (request.id === requestId) {
      if (typeMarker === FROM_TYPE_MARKER) return {...request, fromPointId: pointId}
      if (typeMarker === TO_TYPE_MARKER) return {...request, toPointId: pointId}
    }

    return request
  })

  return createAction(SET_MARKER_IN_REQUEST, new_requests);
}

export { setMarkerInRequest };