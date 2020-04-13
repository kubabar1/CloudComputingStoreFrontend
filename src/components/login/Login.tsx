import * as React from 'react';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

class Login extends React.Component {

  login = () => {
    console.log('LOGIN USER');
  }

  render() {
    return(
      <div id="login-container">
          <div className="d-flex justify-content-center h-100">
              <div className="card">
                  <div className="card-header">
                      <h3>Sign In</h3>
                  </div>
                  <div className="card-body">
                      <form>
                          <div className="input-group form-group">
                              <div className="input-group-prepend">
                                  <span className="input-group-text font-awesome-icon-stylization">
                                    <FontAwesomeIcon icon={faUser}/>
                                  </span>
                              </div>
                              <input type="text" className="form-control" placeholder="username"/>
                          </div>
                          <div className="input-group form-group">
                              <div className="input-group-prepend">
                                  <span className="input-group-text font-awesome-icon-stylization">
                                    <FontAwesomeIcon icon={faLock}/>
                                  </span>
                              </div>
                              <input type="password" className="form-control" placeholder="password"/>
                          </div>
                          <div className="form-group">
                              <Button className="btn float-right login_btn" onClick={this.login}>
                                Login
                              </Button>
                          </div>
                      </form>
                  </div>
                  <div className="card-footer">
                      <div className="d-flex justify-content-center links">
                        Don't have an account?
                        <Link to='/' className="link-stylization">
                          Sign Up
                        </Link>
                      </div>
                      <div className="d-flex justify-content-center links">
                        <Link to='/' className="link-stylization">
                          Back home
                        </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Login;
