import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopHeader2 = () => {
  return (
    <div className="header-area header-2 d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-9">
            <div className="header-wrapper">
              <div className="header-text">
                <span>
                  <i>
                    <FontAwesomeIcon icon={['far', 'map']} />
                  </i>
                  1679 Taunton Cres, Dainfern, Midrand, 2055
                </span>
                <span>
                  <i>
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </i>
                  takasimba@coppersunset.org
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-3">
            <div className="header-icon text-md-right">
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </i>
              </a>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </i>
              </a>
              <a href="#">
                <i>
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </i>
              </a>
              {/* <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'behance']} /></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader2;
