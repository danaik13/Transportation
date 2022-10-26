import { FC, useEffect } from 'react'
import { Table, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducers'
import { IData, IPoint, IRequest } from '../types'
import { getPointById, serializeData } from '../utils'
import { FROM_MARKER, TO_MARKER } from '../constants/markers'
import { setActiveRequest, fetchPolylineBeetweenMarkersAction } from '../store/modules/map/actions'
import { useColumn } from '../hooks/useColumn'

const ListRequests: FC = () => {
  const requests: IData[] = useSelector((state: RootState) => state.map.requests)
  const points: IPoint[] = useSelector((state: RootState) => state.map.points)
  const activeRequest: IRequest = useSelector((state: RootState) => state.map.activeRequest)
  const dispatch = useDispatch()

  useEffect(() => {
    if (activeRequest.id === 0) return;
    
    dispatch(fetchPolylineBeetweenMarkersAction())
  }, [activeRequest])

  const columsFrom = useColumn({
    title: 'Погрузка', 
    key: FROM_MARKER,
    requests, 
    points
  })
  const columsTo = useColumn({
    title: 'Разгрузка', 
    key: TO_MARKER, 
    requests, 
    points
  })

  const columns: ColumnsType<IData> = [
    columsFrom,
    columsTo
  ]

  const showMarker = (requestId: number) => {
    if (activeRequest.id === requestId) return;

    const row = requests.filter((obj: IData) => obj.id === requestId)[0]
    const from = getPointById(points, row.fromPointId)
    const to = getPointById(points, row.toPointId)

    const newActiveRequest = {
      id: requestId,
      from: from.position, 
      to: to.position
    }

    dispatch(setActiveRequest(newActiveRequest))
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
        columns={columns} 
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