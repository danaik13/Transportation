import { FC } from 'react';
import { RootState } from '../store/reducers';
import { Table, Select, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useSelector, useDispatch } from 'react-redux';
import { IRequestState, IData, IPoint, TypeMarker } from '../types';
import { clickOnRequest, changeSelectRequest, setRowId } from '../store/actions';
import { FROM_TYPE_MARKER, TO_TYPE_MARKER } from './../store/constants';


const ListRequests: FC = () => {
  const request: IRequestState = useSelector((state: RootState) => state.request)
  const columns: ColumnsType<IData> = [
    {
      title: 'Погрузка',
      dataIndex: 'from',
      key: 'from',
      render: (data, row) => (
        <Select defaultValue={data.name}  onChange={(value) => handleChange([value, row, FROM_TYPE_MARKER])}>
          {request.listPoint.map((point: IPoint) => {
              return <Select.Option key={point.id} value={point.id}>{point.name}</Select.Option>
          })}
        </Select>
        )
    },
    {
      title: 'Разгрузка',
      dataIndex: 'to',
      key: 'to',
      render: (data, row) => (
        <Select defaultValue={data.name}   onChange={(value) => handleChange([value, row, TO_TYPE_MARKER])}>
          {request.listPoint.map((point) => {
              return <Select.Option key={point.id} value={point.id}>{point.name}</Select.Option>
          })}
        </Select>
      )
    }
  ];

  const dispatch = useDispatch()

  function getPointById(points: IPoint[], id: any) {
    return points.filter((point: IPoint) => point.id === id)[0]
  }

  const showMarker = (id: number) => {
    dispatch(setRowId(id))

    const row = request.data.filter((obj: IData) => obj.id === id)
    const points = request.listPoint;

    const from = getPointById(points, row[0].fromPointId)
    const to = getPointById(points, row[0].toPointId)

    dispatch(clickOnRequest(from.position, to.position))
  }

  function setData(data: IData[], pointId: number, requestId: number, typeMarker: TypeMarker) {
    return data.map((item) => {
      if (item.id === requestId) {
        if (typeMarker === FROM_TYPE_MARKER) item.fromPointId = pointId
        if (typeMarker === TO_TYPE_MARKER) item.toPointId = pointId
      }
  
      return item
    })
  }

  const handleChange = ([pointId, row, typeMarker]: [number, IData, TypeMarker]) => {
    dispatch(changeSelectRequest(
      setData(request.data, pointId, row.id, typeMarker)
      ))
  };

  const serializeData = (data: IData[]) => {
    const points = request.listPoint;

    return data.map((item: IData) => {
      return {
        id: item.id,
        key: (item.id).toString(),
        from: getPointById(points, item.fromPointId),
        to: getPointById(points, item.toPointId),
      }
    })
  }

  const data: IData[] = serializeData(request.data)

  const onRow = (record: IData) => {
    return {
      onClick: () => showMarker(record.id)
    };
  }
  
  const setRowClassName = (record: any) => {
    return record.id === request.activeRowId ? 'ant-table-row-selected' : '';
  }
 
  return (
    <div  style={{padding:"20px"}}>
        <Typography.Title level={2}>Заявки на перевозку</Typography.Title>

        <Table
          className='test'
          columns={columns} 
          dataSource={data} 
          onRow={onRow}
          rowClassName={setRowClassName}
          scroll={{ x: 'max-content' }}
          pagination={false}
        />
    </div>    
  );
};

export default ListRequests;