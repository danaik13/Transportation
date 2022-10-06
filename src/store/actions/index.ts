import { IData, Point } from '../../types';
import { 
    CLICK_ON_REQUEST, 
    SET_POLYLINE_BETWEEN_MARKERS, 
    CHANGE_SELECT_REQUEST, 
    SET_ROW_ID,
    SET_SPLIT_PERCENTAGE
 } from './../constants';


export const clickOnRequest = (markerFrom: Point, markerTo: Point) => ({
    type: CLICK_ON_REQUEST,
    markerFrom,
    markerTo,
});

export const setPolylineBetweenMarkers = (payload: Point[]) => ({
    type: SET_POLYLINE_BETWEEN_MARKERS,
    payload
});

export const changeSelectRequest = (payload: IData[]) => ({
    type: CHANGE_SELECT_REQUEST,
    payload
});

export const setRowId = (payload: number) => ({
    type: SET_ROW_ID,
    payload
});

export const setSplitPercentage = (payload: number) => ({
    type: SET_SPLIT_PERCENTAGE,
    payload
});