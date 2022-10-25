import routingOpenstreetmapAPI from '../index'

export default (markerFrom: [number, number], markerTo: [number, number]) => {
  return routingOpenstreetmapAPI.get(`/routed-car/route/v1/driving/${markerFrom[1]},${markerFrom[0]};${markerTo[1]},${markerTo[0]}?overview=false&geometries=polyline&steps=true`).then((data) => {
    return data;
  });
};