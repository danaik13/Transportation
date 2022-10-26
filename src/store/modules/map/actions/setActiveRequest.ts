import createAction from '../../../helpers/createAction';
import { IRequest } from '../../../../types';


export const SET_ACTIVE_REQUEST = 'SET_ACTIVE_REQUEST';

const setActiveRequest = (payload: IRequest) => {
  return createAction(SET_ACTIVE_REQUEST, payload);
}

export { setActiveRequest };