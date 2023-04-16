import React, { Component } from 'react';
import Link from 'next/link';

class H1FeaturesSection extends Component {
  render() {
    return (
      <div
        className="features-area pt-110 pb-90"
        style={{ backgroundImage: `url(${'assets/img/bg/bg1.jpg'})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center section-circle mb-70">
                <div className="section-img">
                  <img src={require('../../../public/assets/img/shape/1.png')} alt="shape" />
                </div>
                <h1>Benefits</h1>
                <p>
                  Experience the ultimate in fresh produce with Copper Sunset. Our fruits and
                  vegetables are unmatched in freshness, quality, and variety, ensuring you always
                  receive the best of what South Africa has to offer.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="features-wrapper text-center mb-30">
                <div className="features-img">
                  <img src={require('../../../public/assets/img/features/3.png')} alt="features" />
                </div>
                <div className="features-text">
                  <h4>Freshness</h4>
                  <p>
                    By sourcing directly from farmers and working with the finest freight companies
                    to deliver our produce quickly, we offer some of the freshest fruits and
                    vegetables available.
                  </p>
                  {/* <Link href="/services-details" as="/services-details" >
										<a>Read More <i className="dripicons-arrow-thin-right"></i></a>
									</Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="features-wrapper text-center mb-30">
                <div className="features-img">
                  <img src={require('../../../public/assets/img/features/1.png')} alt="features" />
                </div>
                <div className="features-text">
                  <h4>Quality</h4>
                  <p>
                    With a focus on carefully selecting only the highest quality produce, we provide
                    you with premium fruits and vegetables that stand out from the competition.
                  </p>
                  {/* <Link href="/services-details" as="/services-details" >
										<a>Read More <i className="dripicons-arrow-thin-right"></i></a>
									</Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="features-wrapper text-center mb-30">
                <div className="features-img">
                  <img src={require('../../../public/assets/img/features/6.png')} alt="features" />
                </div>
                <div className="features-text">
                  <h4>Variety</h4>
                  <p>
                    As a fruit and vegetable export company, we are able to offer a wider variety of
                    produce than you could find locally, helping to meet your unique needs and
                    preferences.
                  </p>
                  {/* <Link href="/services-details" as="/services-details" >
										<a>Read More <i className="dripicons-arrow-thin-right"></i></a>
									</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default H1FeaturesSection;
