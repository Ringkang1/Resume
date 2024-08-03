import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header>
    <h1>Ringkang Basumatary</h1>
    <div className="contact-info">
      <a href="mailto:ringkangbty87@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} /> ringkangbty87@gmail.com
      </a>
      <a href="tel:+918133844233">
        <FontAwesomeIcon icon={faPhone} /> +91 8133844233
      </a>
      <a href="https://linkedin.com/in/ringkangbty87">
        <FontAwesomeIcon icon={faLinkedin} /> ringkangbty87
      </a>
      <a href="https://github.com/Ringkang1">
        <FontAwesomeIcon icon={faGithub} /> Ringkang1
      </a>
    </div>
  </header>
);

export default Header;
