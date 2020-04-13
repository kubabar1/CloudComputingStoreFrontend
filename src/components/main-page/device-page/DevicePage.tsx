import * as React from 'react';
import './DevicePage.scss';
import {Button, Image, Container} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import DeviceType from '../../../model/DeviceType';
import DeviceDTO from '../../../model/DeviceDTO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { smartphonesListMock, tabletsListMock, smartwatchesListMock } from '../../../model/MockData';

interface DevicePageProperty {
  addToCart: (deviceId: string) => void;
  match: any;
}

interface DevicePageState {
  id: string | null;
  type: DeviceType | null;
  brand: string | null;
  model: string | null;
  rating: number | null;
  price: number | null;
  specialOffer: boolean | null;
  imageName: string | null;
}

class DevicePage extends React.Component<DevicePageProperty, DevicePageState> {

  constructor(props: DevicePageProperty) {
    super(props);
    this.state = {
      id: null,
      type: null,
      brand: null,
      model: null,
      rating: null,
      price: null,
      specialOffer: null,
      imageName: null
    };
  }

  componentDidMount() {
    const deviceId: string = this.props.match.params.id;
    const pageDevice: DeviceDTO | undefined = this.fetchDeviceDataById(deviceId);
    this.setState({
      id: pageDevice ? pageDevice.id : null,
      type: pageDevice ? pageDevice.type : null,
      brand: pageDevice ? pageDevice.brand : null,
      model: pageDevice ? pageDevice.model : null,
      rating: pageDevice ? pageDevice.rating : null,
      price: pageDevice ? pageDevice.price : null,
      specialOffer: pageDevice ? pageDevice.specialOffer : null,
      imageName: pageDevice ? pageDevice.imageName : null
    });
  }

  fetchDeviceDataById = (deviceId: string): DeviceDTO | undefined => {
    return smartphonesListMock
      .concat(tabletsListMock)
      .concat(smartwatchesListMock)
      .find((device: DeviceDTO) => device.id === deviceId);
  }

  addToCart = (event: React.MouseEvent) => {
    if(this.state.id) {
      this.props.addToCart(this.state.id);
    }
  }

  render() {
    const {id, type, brand, model, rating, price, specialOffer, imageName} = this.state;

    return(
      <Container fluid id='device-page'>
        <div id='device-brand-model'>
          <h3>
            <strong>
              {brand && model && brand + " " + model}
            </strong>
          </h3>
        </div>
        {imageName && <Image src={imageName} fluid id='device-image'/>}
        <div id='device-data'>
          <div id='device-rank'>
            {rating &&
              <StarRatingComponent
                name="rate"
                starCount={5}
                value={rating}
                />
            }
          </div>
          <div id='device-price'>
            <p><strong>Price: </strong>{price && price} $</p>
          </div>
        </div>
        <div id='device-buy-button'>
          <Button onClick={this.addToCart}>
            <FontAwesomeIcon icon={faShoppingCart}/> Buy
          </Button>
        </div>
      </Container>
    );
  }
}

export default DevicePage;
