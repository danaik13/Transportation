import { IData } from '../../../../types';
import createAction from '../../../helpers/createAction';


export const SET_REQUESTS = 'SET_REQUESTS';

const setRequests = (payload: IData[]) => {
  return createAction(SET_REQUESTS, payload);
}

export { setRequests };