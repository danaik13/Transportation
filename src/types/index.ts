export type Point = [number, number];
export type ArrayPoint = Array<Point>;
export type TypeMarker = 'from' | 'to';

export interface IPoint {
  id: number;
  name: string;
  position: Point;
}

export interface IData {
  id: number;
  key?: string;
  fromPointId?: number;
  toPointId?: number;
  from?: IPoint;
  to?: IPoint;
}

export interface IRequestAction {
  type: string;
  payload?: any;
  markerFrom?: Point;
  markerTo?: Point;
}

export interface IRequest {
  id: number;
  from: Point;
  to: Point;
}

export interface IRequestState {
  requests: IData[];
  points: IPoint[],
  polylineBetweenMarkers: Point[];
  activeRequest: IRequest;
  // markerFrom: Point;
  // markerTo: Point;
  // activeRequestId: number;
  splitPercentage: number;
}

export interface IPolylineBetweenMarkers {
  code: string;
  routes: any[]
  waypoints: any[]
}