import L from 'leaflet'

export const getIcon = (iconUrl: string) =>  {
  return L.icon({
    iconUrl: iconUrl,
  })
}