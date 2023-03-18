import React from "react";
import {FaUserGraduate} from 'react-icons/fa'
const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About Me & Education Detail
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="FaUserGraduate"><FaUserGraduate/></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              <h3>About Me:</h3>
              Experienced Event Coordinator with a demonstrated history of
              working in the non-profit organization management industry.
              Skilled in Frontend Development, Microsoft Excel, Engineering,
              Communication, Event Management, and Graphic Design. Strong
              development professional with a B.Tech focused in Electronics and
              communication from Government Engineering college Rewa Madhya
              Pradesh.Worked as a Headboy for 1.5 years and managed lots of
              events , functions and sports activities during Schooling.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              <h3>Skillset:</h3>
              Skilled in HTML5,CSS3,Bootstrap,JavaScript and ReactJS. Knowledge
              of C++ Programming language and basic concepts of Data Structure
              and Algorithms. Intern at FastFindFirm as a Frontend Developer and
              at Oasis Infobyte as web Development and Designing Intern.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              <div>
                <h3> Graduation:</h3>
                <h5>Government Engineering College, Rewa</h5>
                B.tech, Electronics and communication
                <br />
                Batch :2020 - 2024
                <hr />
                <h4>Higher Secondary Education:</h4>
                <h5>
                  Sanskar Valley public School Maidani,Rewa Madhya pradesh{" "}
                </h5>
                <b>High School(10th)</b>: 89.4%(2018)
                <br />
                <b>Senior Secondary(10+2)</b>: 76.6%(2020)
                <br />
                Stream:Science"Mathematics"
              </div>
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://drive.google.com/file/d/17AXU3zAY0BzxmyRcZCTNpUF3xigBr0Rz/view?usp=sharing"
          >
            <i className="fas fa-download me-2"></i>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;