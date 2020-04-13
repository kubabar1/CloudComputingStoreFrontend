import * as React from 'react';
import './DevicesAndFilters.scss';
import Filters from './filters/Filters';
import Advertisement from './advertisement/Advertisement';
import DevicesList from './devices-list/DevicesList';
import {Row, Col} from 'react-bootstrap';
import DeviceDTO from '../../../model/DeviceDTO';
import DeviceType from '../../../model/DeviceType';

interface DevicesAndFiltersProperties {
  devicesList: DeviceDTO[];
  addToCart: (deviceId: string) => void;
}

class DevicesAndFilters extends React.Component<DevicesAndFiltersProperties> {
  render() {
    const {devicesList, addToCart} = this.props;
    
    return(
      <Row id="filters-devices-list-container">
        <Col xs={12} md={3} id="filters-col">
          <Filters/>
        </Col>
        <Col xs={12} md={9} id="devices-list-col">
          <DevicesList devicesList={devicesList} addToCart={addToCart}/>
        </Col>
      </Row>
    );
  }
}

export default DevicesAndFilters;
