import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
                <a href="https://www.facebook.com/rudzaniskoopy.tshikumbana/">
                <i className="fa fa-facebook-square"></i>
                </a>
                <a href="#">
                <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="https://www.instagram.com/tshikumbana_rudzani/">
                <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/rudzani-tshikumbana-82314b205/">
                <i className="fa fa-linkedin"></i>
                </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              <span className="highlighted-text"><h3>Rudzani Tshikumbana</h3></span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                    Software Developer Graduate            
                </h1>
                <span className="profile-role-tagline">
                    I am an enthusiastic individual with a natural passion for continous learning and development.<br/>
                    I am very passionate about developing software solutions. <br/>
                    I believe that being a part of SovTech will help me build a strong foundation for a successsful
                    future career.
                </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
                {""}
                Hire Me
            </button>
            <a href="Resume.pdf" download="Rudzani Tshikumbana CV.pdf">
                <button className="btn highlighted-btn" >Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
