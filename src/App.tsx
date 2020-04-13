import * as React from 'react';
import './App.scss';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {Switch, Route} from "react-router-dom";
import MainPage from './components/main-page/MainPage';
import Login from './components/login/Login';
import DeviceDTO from './model/DeviceDTO';
import DeviceType from './model/DeviceType';
import { smartphonesListMock, tabletsListMock, smartwatchesListMock } from './model/MockData';

interface AppState {
  currentDeviceType: DeviceType | null;
  cartDevicesIdsList: string[];
  devicesList: DeviceDTO[];
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      currentDeviceType: null,
      devicesList: [],
      cartDevicesIdsList: []
    };
  }

  componentDidMount() {
    this.setState({
      devicesList: this.getDevicesList(this.state.currentDeviceType)
    });
  }

  getDeviceById = (deviceId: string): DeviceDTO | undefined => {
    return smartphonesListMock
      .concat(tabletsListMock)
      .concat(smartwatchesListMock)
      .find((device: DeviceDTO) => device.id === deviceId);
  }

  addToCart = (deviceId: string): void => {
    this.setState(prevState => ({
      cartDevicesIdsList: prevState.cartDevicesIdsList.concat(deviceId)
    }));
  }

  removeFromCart = (deviceId: string): void => {
    const cartDevicesIdsTmpList: string[] = [...this.state.cartDevicesIdsList];
    const index: number = cartDevicesIdsTmpList.findIndex((devId: string) => devId===deviceId);
    if (index !== -1) {
      cartDevicesIdsTmpList.splice(index, 1);
      this.setState({cartDevicesIdsList: cartDevicesIdsTmpList});
    }
  }

  getDevicesList = (currentDeviceType: DeviceType | null): DeviceDTO[] => {
    let devicesList: DeviceDTO[];
    if(currentDeviceType === DeviceType.SMARTPHONE) {
      devicesList = smartphonesListMock;
    } else if(currentDeviceType === DeviceType.TABLET) {
      devicesList = tabletsListMock;
    } else if(currentDeviceType === DeviceType.SMARTWATCH) {
      devicesList = smartwatchesListMock;
    } else {
      devicesList = this.getSpeciallOffers();
    }
    return devicesList;
  }

  getSpeciallOffers = () => {
    return smartphonesListMock
      .concat(tabletsListMock)
      .concat(smartwatchesListMock)
      .filter((device: DeviceDTO) => device.specialOffer);
  }

  changeDeviceType = (deviceType: DeviceType | null): void => {
    this.setState({
      currentDeviceType: deviceType,
      devicesList: this.getDevicesList(deviceType)
    });
  }

  renderMainPage = () => {
    return(
      <MainPage
        changeDeviceType={this.changeDeviceType}
        cartDevicesIdsList={this.state.cartDevicesIdsList}
        devicesList={this.state.devicesList}
        addToCart={this.addToCart}
        removeFromCart={this.removeFromCart}
        getDeviceById={this.getDeviceById}
        />
    );
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={this.renderMainPage}/>
        <Route path="/smartphones" component={this.renderMainPage}/>
        <Route path="/tablets" component={this.renderMainPage}/>
        <Route path="/smartwatches" component={this.renderMainPage}/>
        <Route path="/device/:id" component={this.renderMainPage}/>
        <Route path="/cart" component={this.renderMainPage}/>
        <Route path="/login" component={Login}/>
      </Switch>
    );
  }

}

export default App;
