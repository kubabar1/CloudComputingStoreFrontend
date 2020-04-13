import * as React from 'react';
import './DevicesList.scss';
import DevicesListContainer from './devices-list-container/DevicesListContainer';
import DeviceDTO from '../../../../model/DeviceDTO';
import DeviceType from '../../../../model/DeviceType';
import {Container} from 'react-bootstrap';

interface DevicesListProps {
  devicesList: DeviceDTO[];
  addToCart: (deviceId: string) => void;
}

class DevicesList extends React.Component<DevicesListProps> {

  render() {
    const {devicesList, addToCart} = this.props;

    return(
      <div id='devices-list'>
        {devicesList && <DevicesListContainer devicesList={devicesList} addToCart={addToCart}/>}
      </div>
    );
  }
}

export default DevicesList;
