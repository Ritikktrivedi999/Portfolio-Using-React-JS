import React from "react";
import photo from "./assets/photo.png";
import {FaRegStar} from 'react-icons/fa'
const MasterHead = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src={photo} alt="..." />
        <h1 className="masthead-heading text-uppercase mb-0">Ritik Trivedi</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="FaRegStar"><FaRegStar/></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Frontend Developer - Web Designer - E&C Engineer
        </p>
      </div>
    </header>
  );
};

export default MasterHead;