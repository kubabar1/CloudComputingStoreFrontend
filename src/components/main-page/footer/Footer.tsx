import * as React from 'react';
import './Footer.scss';
import {Link} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return(
      <footer id="footer">
        <div>© 2020 Copyright:
          <Link to='/' className="link-stylization"> APP.com</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
