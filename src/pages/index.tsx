import type { NextPage } from "next";
import React from "react";
import LandingDrawer from "@/components/LandingDrawer";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const Home: NextPage = (): JSX.Element => {
  return (
    <LandingDrawer>
      <div
        className="demo-screen-headline main-demo main-demo-1 spacing-top overflow-hidden"
        // style={{ backgroundColor: "#EDF8FF" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-5 pb-5 animation-zidex pos-relative my-auto">
              <h4 className="fw-bold mt-7" style={{ color: "#5935B3" }}>
                Welcome to my universe
              </h4>
              <h1 className="text-start fw-bold pt-5">
                {"Hello Folks, I'm "}
                <span style={{ color: "#0CB4C1" }}>UI/UX Designer</span>
              </h1>
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
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 text-start">
              <img src="/static/img/brand/about-me.svg" alt="aditya_septama" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h2 className="fw-bold text-start">About Me</h2>
              <p className="text-primary pb-3">
                Bring our creativity to your work !
              </p>
              <p>
                Hello i’m from indonesian, i have a career in IT System and
                Development for more than 5 years, with that experience, I
                mastered web-based programming and UI/UX, i also familiar with
                data management with database. Now i’m focus on frontend
                engineer. With some of the experience i’m sure it can help to
                grow your busineess, really like challenges and also teamwork.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LandingDrawer>
  );
};

export default Home;
