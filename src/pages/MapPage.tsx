import { FC } from 'react';
import Map from '../components/Map';
import ListRequests from '../components/ListRequests';
import { Mosaic } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';


const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  listRequest: <ListRequests />,
  map: <Map />
};

const MapPage: FC = () => {
  return (
    <Mosaic
      className={'Blueprint Dark map-page'}
      renderTile={(id) => ELEMENT_MAP[id]}
      initialValue={{
        direction: 'row',
        first: 'listRequest',
        second: 'map',
        splitPercentage: 35,
      }}
    />
  );
};

export default MapPage;