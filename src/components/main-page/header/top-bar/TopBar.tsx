import * as React from 'react';
import {Button} from 'react-bootstrap';
import {Redirect} from 'react-router';
import './TopBar.scss';

interface TopBarState {
  redirect: boolean;
}

class TopBar extends React.Component<{}, TopBarState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  redirectOnClick = () => {
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/login" />;
    }

    return(
      <section id='top-bar'>
        <Button id='login-button' variant='primary' onClick={this.redirectOnClick}>
          Log in
        </Button>
      </section>
    );
  }
}

export default TopBar;
