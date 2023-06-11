import React from "react";
import style from "../../styles/project/project.module.css";
import Sliders from "../sliders";

type Props = {
  sliderData: any;
};

const Project = ({ sliderData }: Props) => {
  return (
    <div className={`${style["project-landing"]} section`} id="#Project">
      <div className="container">
        <div className="row">
          <div className="col-lg-md-12">
            <div className="card bg-transparent">
              <p className="text-center text-white-80">Project</p>
              <h2 className="text-center fw-bold text-white-80">
                Latest Project
              </h2>
              <p className="text-muted fs-14 text-center text-white">
                Many project have been worked for
              </p>
              <div>
                <Sliders sliderData={sliderData} />
                {/* <Slider {...settings}>
                  <div className={style["slick-slide"]}>
                    <img
                      src="/static/img/project/DMS-mobile.jpg"
                      alt="mobileapps"
                      className="mb-2"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className={style["slick-slide"]}>
                    <img
                      src="/static/img/project/suratjalancenter.jpg"
                      alt="mobileapps"
                      className="mb-2"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className={style["slick-slide"]}>
                    <img
                      src="/static/img/project/rumahsakit.jpg"
                      alt="mobileapps"
                      className="mb-2"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className={style["slick-slide"]}>
                    <img
                      src="/static/img/project/potaru.jpg"
                      alt="mobileapps"
                      className="mb-2"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className={style["slick-slide"]}>
                    <img
                      src="/static/img/project/ticketbook.jpg"
                      alt="mobileapps"
                      className="mb-2"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </Slider> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
