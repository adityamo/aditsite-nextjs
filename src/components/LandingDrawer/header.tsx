import React, { useEffect, useState } from "react";

const header = () => {
  const [onTop, setOnTop] = useState(false);
  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  };

  useEffect(() => {
    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  });

  console.log(onTop);

  return (
    <React.Fragment>
      {/* Mobile view */}
      <div className="hor-header header">
        <div className="container main-container">
          <div className="d-flex">
            <a
              href=""
              className="app-sidebar__toggle"
              data-bs-toggle="sidebar"
            ></a>
            <a href="" className="logo-horizontal">
              <img
                src="/static/img/brand/adit_logo.svg"
                alt=""
                className="header-brand-img desktop-logo"
              />
              <img
                src="/static/img/brand/adit_logo.svg"
                alt=""
                className="header-brand-img light-logo1"
              />
            </a>
          </div>
        </div>
      </div>
      {/* End Mobile View  */}

      <div className="landing-top-header overflow-hidden bg-transparent">
        <div
          className={`top sticky overflow-hidden ${onTop ? "stickyClass" : ""}`}
        >
          <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
          <div className="app-sidebar bg-transparent horizontal-main">
            <div className="container">
              <div className="row">
                <div className="main-sidemenu navbar px-0">
                  <a
                    className="navbar-brand ps-0 d-none d-lg-block"
                    href="index.html"
                  >
                    <img
                      src="/static/img/brand/adit_logo.svg"
                      alt=""
                      className="logo-2"
                    />
                  </a>
                  <ul className="side-menu">
                    <li className="slide">
                      <a
                        href="#home"
                        className="side-menu__item active"
                        data-bs-toggle="slide"
                      >
                        <span className="side-menu__label">Home</span>
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="#about"
                        className="side-menu__item"
                        data-bs-toggle="slide"
                      >
                        <span className="side-menu__label">About</span>
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="#technology"
                        className="side-menu__item"
                        data-bs-toggle="slide"
                      >
                        <span className="side-menu__label">Technology</span>
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="#resume"
                        className="side-menu__item"
                        data-bs-toggle="slide"
                      >
                        <span className="side-menu__label">Resume</span>
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="#contact"
                        className="side-menu__item"
                        data-bs-toggle="slide"
                      >
                        <span className="side-menu__label">Contact</span>
                      </a>
                    </li>
                  </ul>
                  <div className="header-nav-right d-none d-lg-flex">
                    <a
                      href="#"
                      className="btn btn-pill btn-success me-2 my-auto d-lg-none d-xl-block d-block"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default header;
