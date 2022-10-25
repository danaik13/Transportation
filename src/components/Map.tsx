import { FC } from 'react';
import { useSelector } from 'react-redux';
import { type LatLngExpression, } from 'leaflet';
import { MapContainer, Marker, TileLayer, Polyline } from 'react-leaflet';
import { getIcon } from '../utils';
import { IRequest } from '../types'
import { RootState } from '../store/reducers';
import greenMarker from './../assets/images/marker-green.png';
import redMarker from './../assets/images/marker-red.png';


const center: LatLngExpression = [55.7448236, 37.6371090]
const polylineOptions = {
  color: 'blue',
  opacity: 0.3,
  weight: 8
}

const Map: FC = () => {
  const activeRequest: IRequest = useSelector((state: RootState) => state.map.activeRequest)
  const polylineBetweenMarkers: LatLngExpression[] = useSelector((state: RootState) => state.map.polylineBetweenMarkers)

  return (
    <MapContainer 
      center={center} 
      zoom={12} 
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { activeRequest.id !== 0 && <>
        <Marker 
          position={activeRequest.from}
          icon={getIcon(greenMarker)}
        />
        <Marker 
          position={activeRequest.to}
          icon={getIcon(redMarker)}
        />
        <Polyline 
          pathOptions={polylineOptions}
          positions={polylineBetweenMarkers}
        />
      </>}
    </MapContainer>
  )
}

export default Map;