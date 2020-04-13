import * as React from 'react';
import './CartWidget.scss';
import {Redirect} from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from "react-router";

interface CartWidgetProps extends RouteComponentProps<any> {
  cartDevicesIdsList: string[];
}

class CartWidget extends React.Component<CartWidgetProps> {

  redirectOnClick = () => {
    this.props.history.push('/cart');
  }

  render() {
    return(
        <div id="card-widget" onClick={this.redirectOnClick}>
          <div id="card-shopping-cart-icon-container">
            <FontAwesomeIcon icon={faShoppingCart}/>
          </div>
          <div id="cart-info-container">
            <div id="cart-info-text-container">
              {this.props.cartDevicesIdsList.length} ITEMS
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(CartWidget);
