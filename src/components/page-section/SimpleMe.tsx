import React from "react";

const SimpleMe = () => {
  return (
    <section className="section pb-0">
      <div className="container align-items-center">
        <div className="row pb-5">
          <p className="text-center text-primary">Service</p>
          <span className="landing-title"></span>
          <h2 className="text-center fw-bold pb-5">What can help you</h2>
          <div className="col-lg-3 col-sm-6 mb-5">
            <div className="media media-lg align-items-center">
              <div className="avatar avatar-xl bradius bg-primary-transparent box-shadow-primary me-4">
                <i className="fa fa-tv text-primary fs-23"></i>
              </div>
              <div className="media-body">
                <h5 className="mt-2 fw-bold">Web Application</h5>
                <p className="text-muted fs-12">
                  We can provide you to create Web Application
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5">
            <div className="media media-lg align-items-center">
              <div className="avatar avatar-xl bradius bg-success-transparent me-4">
                <i className="fa fa-globe text-success fs-23"></i>
              </div>
              <div className="media-body">
                <h5 className="mt-2 fw-bold">SEO</h5>
                <p className="text-muted fs-12">
                  Make SEO Friendly to your apps
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5">
            <div className="media media-lg align-items-center">
              <div className="avatar avatar-xl bradius bg-secondary-transparent me-4">
                <i className="fa fa-envira text-secondary fs-23"></i>
              </div>
              <div className="media-body">
                <h5 className="mt-2 fw-bold">UI/UX</h5>
                <p className="text-muted fs-12">
                  Create Beautiful UI and nice documentation
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5">
            <div className="media media-lg align-items-center">
              <div className="avatar avatar-xl bradius bg-danger-transparent me-4">
                <i className="fa fa-mobile text-danger fs-23"></i>
              </div>
              <div className="media-body">
                <h5 className="mt-2 fw-bold">Mobile Apps</h5>
                <p className="text-muted fs-12">
                  Create nice your mobile apps and beutiful UI{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer px-0 pb-0 text-center mt-5"></div>
      </div>
    </section>
  );
};

export default SimpleMe;
