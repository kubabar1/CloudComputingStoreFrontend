import * as React from 'react';
import './Cart.scss';
import DeviceDTO from '../../../model/DeviceDTO';
import CartItem from './cart-item/CartItem';
import {Container} from 'react-bootstrap';

interface CartProps {
  cartDevicesIdsList: string[];
  removeFromCart: (deviceId: string) => void;
  getDeviceById: (deviceId: string) => DeviceDTO | undefined;
}

class Cart extends React.Component<CartProps> {

  createCartItem = (deviceId: string, arrayIndex: number) => {
    return(
      <CartItem
        deviceDTO={this.props.getDeviceById(deviceId)}
        key={deviceId + '-' + arrayIndex}
        removeFromCart={this.props.removeFromCart}
        />
    );
  }

  render() {
    return(
      <Container fluid id='cart-list-container'>
        {this.props.cartDevicesIdsList.map((deviceId: string, index: number) => this.createCartItem(deviceId, index))}
      </Container>
    );
  }
}

export default Cart;
