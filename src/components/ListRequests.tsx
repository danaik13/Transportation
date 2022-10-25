import  Column from './Column'
import { Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { IData, IPoint, IRequest } from '../types';
import { getPointById, serializeData } from '../utils';
import { FROM_MARKER, TO_MARKER } from '../constants/markers';
import { setActiveRequest, fetchPolylineBeetweenMarkersAction } from '../store/modules/map/actions';


const columns = (requests: IData[], points: IPoint[]): ColumnsType<IData> => ([
  Column({title: 'Погрузка', key: FROM_MARKER, points: points, requests: requests}),
  Column({title: 'Разгрузка', key: TO_MARKER, points: points, requests: requests}),
])

const ListRequests = () => {
  const requests: IData[] = useSelector((state: RootState) => state.map.requests)
  const points: IPoint[] = useSelector((state: RootState) => state.map.points)
  const activeRequest: IRequest = useSelector((state: RootState) => state.map.activeRequest)
  const dispatch = useDispatch()

  const showMarker = (id: number) => {
    const row = requests.filter((obj: IData) => obj.id === id)[0]
    const from = getPointById(points, row.fromPointId)
    const to = getPointById(points, row.toPointId)

    dispatch(setActiveRequest({
      id: id,
      from: from.position, 
      to: to.position
    }))
    dispatch(fetchPolylineBeetweenMarkersAction())
  }

  const onRow = (record: IData) => ({
    onClick: () => showMarker(record.id)
  })
  
  const setRowClassName = (record: any) => {
    return record.id === activeRequest.id ? 'ant-table-row-selected' : '';
  }

  return (
    <div style={{padding:"20px"}}>
      <Typography.Title level={2}>Заявки на перевозку</Typography.Title>
      <Table
        columns={columns(requests, points)} 
        dataSource={serializeData(requests, points)} 
        onRow={onRow}   
        rowClassName={setRowClassName}
        scroll={{ x: 'max-content' }}
        pagination={false}
      />
    </div>    
  )
};

export default ListRequests;