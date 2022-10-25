import { IData, IPoint } from "../types"
import { getPointById } from "./getPointById"


export const serializeData = (data: IData[], points: IPoint[]): IData[] => 
  data.map((item: IData) => {
    return {
      id: item.id,
      key: (item.id).toString(),
      from: getPointById(points, item.fromPointId),
      to: getPointById(points, item.toPointId),
    }
})