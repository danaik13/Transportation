import { Select } from 'antd';
import { useDispatch } from 'react-redux'
import { IData, IPoint, TypeMarker } from '../types';
import { setMarkerInRequest } from '../store/modules/map/actions';

interface IColumn {
  key: TypeMarker;
  title: string;
  points: IPoint[];
  requests: IData[]
}

const Column = ({title, key, points, requests}: IColumn) => {
  const dispatch = useDispatch()

  const handleChange = ([requests, pointId, row, typeMarker]: [IData[],number, IData, TypeMarker]) => {
    dispatch(setMarkerInRequest({requests:requests, pointId:pointId, requestId: row.id, typeMarker:typeMarker}))
  };

  return ({
    title,
    key,
    dataIndex: key,
    render: (data: IPoint, row: IData) => {
      return <Select
        defaultValue={data.name}  
        onChange={(value: any) => handleChange([requests, value, row, key])}
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

export default Column;