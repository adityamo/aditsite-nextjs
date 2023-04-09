import React from "react";

const footer = () => {
  return (
    <div className="demo-footer">
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="top-footer pb-5">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12">
                  <h6>About</h6>
                  <p>
                    I have a career in IT System and Development for more than 3
                    years, With that experience, I mastered web-based
                    programming and UI/UX and also familiar with data management
                    with database. With some of the experience I have, Im sure
                    it can help to grow your business. really like challenges
                    and also teamwork.
                  </p>
                </div>
                <div className="col-lg-2 col-sm-6 col-md-4">
                  <h6>Pages</h6>
                  <ul className="list-unstyled mb-5 mb-lg-0">
                    <li>
                      <a href="#Home">Home</a>
                    </li>
                    <li>
                      <a href="#About">About</a>
                    </li>
                    <li>
                      <a href="#Techonology">Technology</a>
                    </li>
                    <li>
                      <a href="#Resume">Resume</a>
                    </li>
                    <li>
                      <a href="#Contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 col-sm-12 col-md-4">
                  <div className="">
                    <a href="#">
                      <img
                        src="/static/img/brand/adit_logo.svg"
                        alt=""
                        className="logo-2 mb-3"
                        loading="lazy"
                      />
                    </a>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Excepteur sint
                      occaecat.
                    </p>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                        <button className="btn btn-primary" type="button">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="btn-list">
                    <button type="button" className="btn btn-icon rounded-pill">
                      <i className="fa fa-facebook"></i>
                    </button>
                    <button type="button" className="btn btn-icon rounded-pill">
                      <i className="fa fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-icon rounded-pill">
                      <i className="fa fa-instagram"></i>
                    </button>
                    <button type="button" className="btn btn-icon rounded-pill">
                      <i className="fa fa-linkedin"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <footer className="main-footer px-0 pb-0 text-center">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  Copyright © <span id="year"></span>
                  Designed with{" aditya septama"}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
