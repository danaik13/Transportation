import { FC } from 'react';
import { Layout } from 'antd';
import MapPage from './pages/MapPage';
import './assets/styles/App.css'

const App: FC = () => {
  return (
    <Layout>
      <Layout.Content>
        <MapPage />
      </Layout.Content>
    </Layout>
)};

export default App;