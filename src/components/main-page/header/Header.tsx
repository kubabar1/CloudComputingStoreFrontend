import * as React from 'react';
import './Header.scss';
import TopBar from './top-bar/TopBar';
import LogoBar from './logo-bar/LogoBar';
import NavBar from './nav-bar/NavBar';
import DeviceType from '../../../model/DeviceType';

interface HeaderProps {
  cartDevicesIdsList: string[];
  changeDeviceType: (deviceType: DeviceType | null) => void;
}

class Header extends React.Component<HeaderProps> {
  render() {
    return(
      <header>
        <TopBar/>
        <LogoBar cartDevicesIdsList={this.props.cartDevicesIdsList}/>
        <NavBar changeDeviceType={this.props.changeDeviceType}/>
      </header>
    );
  }
}

export default Header;
