import * as React from 'react';
import './CartItem.scss';
import DeviceDTO from '../../../../model/DeviceDTO';
import {Image, Button} from 'react-bootstrap';

interface CartItemProps {
  deviceDTO: DeviceDTO | undefined;
  removeFromCart: (deviceId: string) => void;
}

class CartItem extends React.Component<CartItemProps> {
  render() {
    const deviceDTO = this.props.deviceDTO;

    return(
      <div className="cart-item-container">
        <div className="image-container">
          {deviceDTO && <Image src={deviceDTO.imageName}/>}
        </div>
        <div className="description-container">
          <div className="brand-model-container">
            {deviceDTO && deviceDTO.brand + ' ' + deviceDTO.model}
          </div>
          <div className="price-container">
            {deviceDTO && deviceDTO.price} $
          </div>
          <div className="remove-button-container">
            {deviceDTO &&
              <Button className="remove-cart-button" onClick={() => this.props.removeFromCart(deviceDTO.id)}>
                Remove
              </Button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
