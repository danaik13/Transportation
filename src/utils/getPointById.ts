import { IPoint } from '../types'

export const getPointById = (points: IPoint[], id: any) => {
    return points.filter((point: IPoint) => point.id === id)[0]
}