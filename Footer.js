import React from "react";
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
const footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">My Location</h4>
            <p className="lead mb-0">
              Bhavani Nagar, Dhekaha, Rewa Madhya Pradesh
              <br />
              PINCODE-486001
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/Ritikktrivedi999">
              <i className="FaGithub"><FaGithub/></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://instagram.com/its_titled_trivedi_jii99?igshid=YmMyMTA2M2Y=">
              <i className="FaInstagramSquare"><FaInstagramSquare/></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/ritik-trivedi-598a4b21b">
              <i className="FaLinkedin"><FaLinkedin/></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://wa.me/message/JJ4ZLY6JNG57P1">
              <i className="FaWhatsapp"><FaWhatsapp/></i>
            </a>
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">GITHUB</h4>
            <p className="lead mb-0">
              Thank you For Visiting MY Portfilio.
              <br />
              For My Github Account
              <a href="https://github.com/Ritikktrivedi999">Click here</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
