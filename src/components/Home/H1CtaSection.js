import React, { Component } from 'react';
import Link from 'next/link';

class H1CtaSection extends Component {
  render() {
    return (
      <div
        className="cta-area pt-100 pb-90"
        style={{ backgroundImage: `url(${'assets/img/bg/bg2.jpg'})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="cta-wrapper mb-15">
                <div className="cta-img">
                  <img src={require('../../../public/assets/img/shape/3.png')} alt="shape" />
                </div>
                <div className="cta-text">
                  <h1>Looking for fresh produce?</h1>
                  <p>
                    We are looking for wholesalers, supermarkets, shops, restaurants, and
                    foodservice providers to collaborate with. If you need fresh produce feel free
                    to get in contact.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="cta-button mb-15 text-md-right">
                <Link href="/contact" as="/contact">
                  <a className="btn">Contact us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default H1CtaSection;
