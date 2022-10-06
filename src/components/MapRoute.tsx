import L from 'leaflet'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRequestState } from '../types'
import { RootState } from './../store/reducers';
import greenMarker from './../images/marker-green.png';
import redMarker   from './../images/marker-red.png';
import { useLeafletContext } from '@react-leaflet/core'


export function MapRoute() {
  const getIcon = (iconUrl: string) =>  {
    return L.icon({
        iconUrl: iconUrl
    })
  }

  const context = useLeafletContext()
  const request: IRequestState = useSelector((state: RootState) => state.request)

  const markerFrom = L.marker(request.markerFrom, {icon: getIcon(greenMarker)})
  const markerTo = L.marker(request.markerTo, {icon: getIcon(redMarker)})
  const polyline = L.polyline(request.polylineBetweenMarkers, { 
      color: 'blue',
      opacity: 0.3,
      weight: 8
  })

  useEffect(() => {
    const container = context.layerContainer || context.map

    if (request.activeRowId !== 0) {
      container.addLayer(markerFrom)
      container.addLayer(markerTo)
      container.addLayer(polyline)
      context.map.flyToBounds([request.markerFrom, request.markerTo])

      return () => {
        container.removeLayer(markerFrom)
        container.removeLayer(markerTo)
        container.removeLayer(polyline)
      }
    }
    
  }, [request.markerFrom, request.markerTo, request.polylineBetweenMarkers])

  useEffect(() => {
    context.map.invalidateSize()
  }, [request.splitPercentage])
  
  return null
}
