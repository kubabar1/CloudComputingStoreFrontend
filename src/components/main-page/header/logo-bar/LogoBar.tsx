import * as React from 'react';
import './LogoBar.scss';
import CartWidget from './cart-widget/CartWidget';

interface LogoBarProps {
  cartDevicesIdsList: string[];
}

class LogoBar extends React.Component<LogoBarProps> {
  render() {
    return(
        <section id='logo-bar'>
          <p>APP</p>
          <CartWidget cartDevicesIdsList={this.props.cartDevicesIdsList}/>
        </section>
    );
  }
}

export default LogoBar;
