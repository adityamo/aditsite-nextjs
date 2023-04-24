import React from "react";
import style from "../../styles/mobile/mobile.module.css";

const Website = () => {
  return (
    <section className={`section ${style.webstyle}`} id="Website">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-lg-6">
            <img
              src="/static/img/brand/website.svg"
              alt="mobileapps"
              className=""
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h2 className="fw-bold text-lg-start text-xs-center">
              Support your Website Apps
            </h2>
            <p className="text-primary pb-3">
              Webs apps with responsive design
            </p>
            <p>
              I have create many website. Webs Apps or Landing page your
              company, with framework programitically and responsive for mobile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Website;
