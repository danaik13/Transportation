import { IRequestState, IRequestAction } from '../../types'
import {
  CLICK_ON_REQUEST, 
  SET_POLYLINE_BETWEEN_MARKERS, 
  CHANGE_SELECT_REQUEST,
  SET_ROW_ID,
  SET_SPLIT_PERCENTAGE
} from './../constants'


const initialState: IRequestState = {
  listPoint: [
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
  data: [
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
  polylineBetweenMarkers: [],
  markerFrom: [-1, -1],
  markerTo: [-1, -1],
  activeRowId: 0,
  splitPercentage: 35
}

export const requestReducer = (state: IRequestState = initialState, action: IRequestAction) => {
  switch (action.type) {
    case CLICK_ON_REQUEST:
      return {...state, markerFrom: action.markerFrom, markerTo: action.markerTo}
    case SET_POLYLINE_BETWEEN_MARKERS:
      return {...state, polylineBetweenMarkers: action.payload}
    case CHANGE_SELECT_REQUEST:
      return {...state, data: action.payload}
    case SET_ROW_ID:
      return {...state, activeRowId: action.payload}
    case SET_SPLIT_PERCENTAGE:
      return {...state, splitPercentage: action.payload}
    default: return state
  }
}