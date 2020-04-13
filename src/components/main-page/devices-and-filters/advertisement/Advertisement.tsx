import * as React from 'react';
import './Advertisement.scss';
import {Carousel} from 'react-bootstrap';

class Advertisement extends React.Component {
  render() {
    return(
      <section id='advertisement'>
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.joniniemela.com/wp-content/uploads/seeds2.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://marketing.zobj.net/assets/zedge_meta.60e7f2c2c0f3e0609a6b95ae2b0ba608.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://store-images.s-microsoft.com/image/apps.63033.13510798882340622.000e29e2-b465-4cf5-8fee-0568358c12b0.24ee9172-4624-4f8c-baf1-e2f96a172f4f?mode=scale&q=90&h=1080&w=1920"
            alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}

export default Advertisement;
