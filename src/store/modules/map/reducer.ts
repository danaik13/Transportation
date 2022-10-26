import { IData, IPoint, IRequest } from '../../../types';
import { SET_REQUESTS, SET_POLYLINE_BETWEEN_MARKERS, SET_ACTIVE_REQUEST } from './actions';
import { type LatLngExpression, } from 'leaflet';

interface RequestState {
  requests: IData[];
  points: IPoint[],
  polylineBetweenMarkers: LatLngExpression[];
  activeRequest: IRequest;
}

export interface RequestAction {
  type: string;
  payload: any;
}

const INITIAL_STATE: RequestState = {
  requests: [
    {
        id: 1,
        fromPointId: 1,
        toPointId: 3
      },
      {
        id: 2,
        fromPointId: 5,
        toPointId: 4
      },
      {
        id: 3,
        fromPointId: 2,
        toPointId: 5
      }
  ],
  points: [
    {
      id: 1,
      name: 'Точка 1',
      position: [55.73652, 37.62200]
    },
    {
      id: 2,
      name: 'Точка 2',
      position: [55.76625, 37.60754]
    },
    {
      id: 3,
      name: 'Точка 3',
      position: [55.76869, 37.66230]
    },
    {
      id: 4,
      name: 'Ну ооооооочень длинное название, чтоб много пикселей было',
      position: [55.72462, 37.61554]
    },
    {
      id: 5,
      name: 'Точка 5',
      position: [55.71353, 37.68785]
    }
  ],
  polylineBetweenMarkers: [],
  activeRequest: {
    id: 0,
    from: [0, 0],
    to: [0, 0]
  },
};

export default (state = INITIAL_STATE , { type, payload }: RequestAction) => {
  switch (type) {
    case SET_REQUESTS:
      return {...state, requests: payload}
    case SET_ACTIVE_REQUEST:
      return {...state, activeRequest: payload}
    case SET_POLYLINE_BETWEEN_MARKERS:
      return {...state, polylineBetweenMarkers: payload}
    default:
      return state;
  }
};