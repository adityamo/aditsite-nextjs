import React from "react";
import { TypeAnimation } from "react-type-animation";

const PageIntro = () => {
  return (
    <section
      className="section aditya-owl spacing-top overflow-hidden pb-8"
      id="home"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 mb-5 pb-5 animation-zidex pos-relative my-auto">
            <h5 className="fw-bold mt-7" style={{ color: "#5935B3" }}>
              Welcome to my universe
            </h5>
            <h2 className="text-start fw-bold pt-2">
              {"Hello Folks, I'm "}
              <TypeAnimation
                sequence={[
                  "Aditya",
                  2000,
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block", color: "#0CB4C1" }}
              />
            </h2>
            <p>
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces and web
              development.
            </p>
            <button className="btn btn-pill w-lg mb-3 me-2 btn-primary">
              Contact Us
            </button>
            <button className="btn btn-pill w-lg mb-3 me-2 btn-success">
              Download Resume
            </button>
          </div>
          <div className="col-xl-6 col-lg-6 my-auto text-end">
            <img src="/static/img/brand/pic-me.svg" alt="aditya_septama" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
