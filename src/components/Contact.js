// Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faSchool } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <h3>Beniamin Tacota</h3>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> btacota@ggc.edu
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 404-123-9876
        </p>
        <p>
          <FontAwesomeIcon icon={faSchool} /> GGC
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} /> Senior
        </p>
        <p>
          <FontAwesomeIcon icon={faBook} /> Software Developer
        </p>
      </div>
      <div className="contact-item">
        <h3>Benjamin Caron</h3>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> bcaron@ggc.edu
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 770-456-7890
        </p>
        <p>
          <FontAwesomeIcon icon={faSchool} /> GGC
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} /> Senior
        </p>
        <p>
          <FontAwesomeIcon icon={faBook} /> Software Developer
        </p>
      </div>
      <div className="contact-item">
        <h3>Jarrett Capwell</h3>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> jcapwll@ggc.edu
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 678-654-3210
        </p>
        <p>
          <FontAwesomeIcon icon={faSchool} /> GGC
        </p>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} /> Senior
        </p>
        <p>
          <FontAwesomeIcon icon={faBook} /> Software Developer
        </p>
      </div>
    </div>
  );
};

export default Contact;
