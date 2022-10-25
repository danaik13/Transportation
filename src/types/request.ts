import { type LatLngExpression } from 'leaflet';

export type TypeMarker = 'from' | 'to';

export interface IRequest {
  id: number;
  from: LatLngExpression;
  to: LatLngExpression;
}

export interface IData {
  id: number;
  key?: string;
  fromPointId?: number;
  toPointId?: number;
  from?: IPoint;
  to?: IPoint;
}

export interface IPoint {
  id: number;
  name: string;
  position: LatLngExpression;
}

export interface IPolylineBetweenMarkers {
  code: string;
  routes: any[]
  waypoints: any[]
}