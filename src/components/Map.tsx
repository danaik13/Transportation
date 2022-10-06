import { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Point } from '../types'
import { MapRoute } from './MapRoute';


const Map: FC = () => {
  const center: Point = [55.7448236, 37.6371090]
  
  return (
    <MapContainer center={center} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapRoute />
    </MapContainer>
  )
}

export default Map;