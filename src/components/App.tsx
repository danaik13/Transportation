import { FC } from 'react';
import Map from './Map';
import ListRequests from './ListRequests';
import { Mosaic } from 'react-mosaic-component';
import { setSplitPercentage } from './../store/actions'
import { useDispatch } from 'react-redux';
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  listRequest: <ListRequests/>,
  map: <Map />
};

const App: FC = () => {
  const dispatch = useDispatch()
  const onChange = (e: any) => {
    dispatch(setSplitPercentage(e.splitPercentage))
  };

  return (
  <div id="app">
    <Mosaic
      renderTile={(id) => ELEMENT_MAP[id]}
      initialValue={{
        direction: 'row',
        first: 'listRequest',
        second: 'map',
        splitPercentage: 35,
      }}
      className={'Blueprint Dark'}
      onChange={onChange}
    />
  </div>);
};

export default App;