import { Select } from 'antd'
import { useDispatch } from 'react-redux'
import { FROM_MARKER, TO_MARKER } from '../constants'
import { IData, IPoint, TypeMarker } from '../types'
import { setActiveRequest, setRequests } from '../store/modules/map/actions'
import { getPointById } from '../utils'

interface IColumn {
  key: TypeMarker;
  title: string;
  points: IPoint[];
  requests: IData[]
}

export const useColumn = ({title, key, points, requests}: IColumn) => {
  const dispatch = useDispatch()

  const handleChange = ([requests, pointId, requestId, typeMarker]: [IData[],number, number, TypeMarker]) => {
    const new_requests: IData[] = requests.map(request => {
      if (request.id === requestId) {
        const new_request = {...request}

        if (typeMarker === FROM_MARKER) new_request.fromPointId = pointId
        if (typeMarker === TO_MARKER) new_request.toPointId = pointId

        dispatch(setActiveRequest({
          id: new_request.id,
          from: getPointById(points, new_request.fromPointId).position,
          to: getPointById(points, new_request.toPointId).position
        }))

        return new_request
      }
      return request
    })

    dispatch(setRequests(new_requests))
  };

  return ({
    title,
    key,
    dataIndex: key,
    render: (data: IPoint, row: IData) => {
      return <Select
        defaultValue={data.name}  
        onChange={(value: any) => handleChange([requests, value, row.id, key])}
      >
        {points.map((point: IPoint) => 
          <Select.Option key={point.id} value={point.id}>
            {point.name}
          </Select.Option>
        )} 
      </Select>
    }
  })
}