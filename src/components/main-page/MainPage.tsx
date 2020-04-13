import * as React from 'react';
import './MainPage.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import DevicePage from './device-page/DevicePage';
import Cart from './cart/Cart';
import DevicesAndFilters from './devices-and-filters/DevicesAndFilters';
import DeviceDTO from '../../model/DeviceDTO';
import DeviceType from '../../model/DeviceType';
import {Switch, Route, RouteComponentProps} from "react-router-dom";

interface MainPageProperty {
  cartDevicesIdsList: string[];
  devicesList: DeviceDTO[];
  changeDeviceType: (deviceType: DeviceType | null) => void;
  addToCart: (deviceId: string) => void;
  removeFromCart: (deviceId: string) => void;
  getDeviceById: (deviceId: string) => DeviceDTO | undefined;
}

class MainPage extends React.Component<MainPageProperty> {
  render() {
    const {cartDevicesIdsList, devicesList, changeDeviceType, addToCart, removeFromCart, getDeviceById} = this.props;
    return(
      <div>
        <Header changeDeviceType={changeDeviceType} cartDevicesIdsList={cartDevicesIdsList}/>
        <Switch>
          <Route path="/device/:id" component={( {match}: RouteComponentProps) => <DevicePage match={match} addToCart={addToCart}/>}/>
          <Route path="/cart" component={() => <Cart cartDevicesIdsList={cartDevicesIdsList} removeFromCart={removeFromCart} getDeviceById={getDeviceById}/>}/>
          <Route component={() => <DevicesAndFilters devicesList={devicesList} addToCart={addToCart}/>}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
