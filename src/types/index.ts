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

export interface IRequestState {
  listPoint: IPoint[],
  data: IData[];
  polylineBetweenMarkers: ArrayPoint[];
  markerFrom: Point;
  markerTo: Point;
  activeRowId: number;
  splitPercentage: number;
}

export interface IPolylineBetweenMarkers {
  code: string;
  routes: any[]
  waypoints: any[]
}