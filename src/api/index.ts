import axios from "axios"
import { Point } from "../types"


export const getPolyline = async (markerFrom: Point, markerTo: Point) => {
    try {
        const response = await axios.post(`https://routing.openstreetmap.de/routed-car/route/v1/driving/${markerFrom[1]},${markerFrom[0]};${markerTo[1]},${markerTo[0]}?overview=false&geometries=polyline&steps=true`)
        return await response.data
    } catch (error) {
        console.error(error);
    }
}