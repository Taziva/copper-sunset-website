import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={sidebarOpen ? 'extra-info info-open' : 'extra-info'}>
      <div className="close-icon">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <i>
            <FontAwesomeIcon icon={['far', 'window-close']} />
          </i>
        </button>
      </div>
      <div className="logo-side mb-30">
        <a href="#">
          <img
            src={require('../../../../public/assets/img/logo/copper-sunset-white.svg')}
            alt="logo"
          />
        </a>
      </div>
      <div className="side-info mb-30">
        <div className="contact-list mb-30">
          <h4>Addresses</h4>
          <p>South Africa</p>
          <p>1679 Taunton Cres, Dainfern, Midrand, 2055</p>
          <br />
          <p>United Kingdom</p>
          <p>58 Holloway Road, London, N7 8JL</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Phone Number</h4>
          <p>(+27) 63 135 8276</p>
          <p>(+44) 772 961 0128</p>
        </div>
        <div className="contact-list mb-30">
          <h4>Email Address</h4>
          <p>info@coppersunset.org</p>
          <p>takasimba@coppersunset.org</p>
        </div>
      </div>
      {/* <div className="instagram">
        <a href="#">
          <img src={require('../../../../public/assets/img/gallery/gallery1.jpg')} alt="gallery" />
        </a>
        <a href="#">
          <img src={require('../../../../public/assets/img/gallery/gallery2.jpg')} alt="gallery" />
        </a>
        <a href="#">
          <img src={require('../../../../public/assets/img/gallery/gallery3.jpg')} alt="gallery" />
        </a>
        <a href="#">
          <img src={require('../../../../public/assets/img/gallery/gallery4.jpg')} alt="gallery" />
        </a>
        <a href="#">
          <img src={require('../../../../public/assets/img/gallery/gallery5.jpg')} alt="gallery" />
        </a>
        <a href="#">
          <img src={require('../../../../public/assets/img/gallery/gallery6.jpg')} alt="gallery" />
        </a>
      </div> */}
      <div className="social-icon-right mt-20">
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
        <a href="#">
          <i>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </i>
        </a>
      </div>
    </div>
  );
}
