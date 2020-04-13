import * as React from 'react';
import './NavBar.scss';
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import DeviceType from '../../../../model/DeviceType';

interface NavBarProps {
  changeDeviceType: (deviceType: DeviceType | null) => void;
}

class NavBar extends React.Component<NavBarProps> {

  render() {
    return(
      <Nav className="justify-content-center" id='nav-bar'>
        <Nav.Item className="nav-item-stylization">
          <Link to='/' className="link-stylization" onClick={() => this.props.changeDeviceType(null)}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item-stylization">
          <Link to='/smartphones' className="link-stylization" onClick={() => this.props.changeDeviceType(DeviceType.SMARTPHONE)}>
            Smartphones
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item-stylization">
          <Link to='/tablets' className="link-stylization" onClick={() => this.props.changeDeviceType(DeviceType.TABLET)}>
            Tablets
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item-stylization">
          <Link to='/smartwatches' className="link-stylization" onClick={() => this.props.changeDeviceType(DeviceType.SMARTWATCH)}>
            Smartwatch
          </Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavBar;
