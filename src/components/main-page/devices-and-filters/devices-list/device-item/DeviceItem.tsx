import * as React from 'react';
import './DeviceItem.scss';
import {Col, Button, Image} from 'react-bootstrap';
import {Redirect} from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import DeviceType from '../../../../../model/DeviceType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface DeviceItemProps {
  id: string;
  type: DeviceType;
  brand: string;
  model: string;
  rating: number;
  price: number;
  specialOffer: boolean;
  imageName: string;
  addToCart: (deviceId: string) => void;
}

interface DeviceItemState {
  redirect: boolean;
}

class DeviceItem extends React.Component<DeviceItemProps, DeviceItemState> {

  constructor(props: DeviceItemProps) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  redirectToDevicePage = () => {
    this.setState({redirect: true});
  }

  renderSaleIcon = () => {
    return(
      <div className="sale-icon">
        Sale
      </div>
    );
  }

  addToCart = (event: React.MouseEvent) => {
    event.stopPropagation()
    this.props.addToCart(this.props.id);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={"/device/"+this.props.id} />;
    }

    return(
      <Col xs={12} sm={12} md={11} lg={3} className='device-item-container' onClick={this.redirectToDevicePage}>
        {this.props.specialOffer && this.renderSaleIcon()}
        <Image src={this.props.imageName} fluid  className='device-image'/>
        <div className='device-rank'>
          <StarRatingComponent
            name="rate"
            starCount={5}
            value={this.props.rating}
            />
        </div>
        <div className='device-brand-model'>
          <strong>{this.props.brand + " " + this.props.model}</strong>
        </div>
        <div className='device-buy-container'>
          <div className='device-price'>
            <p>{this.props.price} $</p>
          </div>
          <div className='device-buy-button'>
            <Button onClick={this.addToCart}>
              <FontAwesomeIcon icon={faShoppingCart}/> Buy
            </Button>
          </div>
        </div>
      </Col>
    );
  }
}

export default DeviceItem;
