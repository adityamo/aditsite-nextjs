import React from "react";
import style from "../../styles/mobile/mobile.module.css";

const Mobile = () => {
  return (
    <section className={`section ${style.mobilestyle} pb-5`} id="Mobile">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12">
            <h2 className="fw-bold text-start">
              Create UI for your mobile apps
            </h2>
            <p className="text-primary pb-3">a lots experience for UI and UX</p>
            <p>
              Build a beautiful, modern mobile apps with flexible with
              component. built to perform fast on the all of the latest mobile
              devices. Build apps with a small footprint and built-in best
              practices like hardware accelerated transitions, touch-optimized
              gestures, pre-rendering, and more.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img
              src="/static/img/brand/mobile-dms.png"
              alt="mobileapps"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
