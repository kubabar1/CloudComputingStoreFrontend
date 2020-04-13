import * as React from 'react';
import './DevicesListContainer.scss';
import DeviceItem from '../device-item/DeviceItem';
import DeviceDTO from '../../../../../model/DeviceDTO';
import {Container} from 'react-bootstrap';

interface DevicesListContainerProps {
  devicesList: DeviceDTO[];
  addToCart: (deviceId: string) => void;
}

class DevicesListContainer extends React.Component<DevicesListContainerProps> {

  createDeviceItem = (device: DeviceDTO): JSX.Element => {
    return(
      <DeviceItem
        key = {device.id}
        id = {device.id}
        type = {device.type}
        brand = {device.brand}
        model = {device.model}
        rating = {device.rating}
        price = {device.price}
        specialOffer = {device.specialOffer}
        imageName = {device.imageName}
        addToCart = {this.props.addToCart}
      />
    );
  }

  render() {
    return(
      <Container id='devices-list-container'>
        {this.props.devicesList.map((deviceDTO: DeviceDTO) => this.createDeviceItem(deviceDTO))}
      </Container>
    );
  }
}

export default DevicesListContainer;
