import React from "react";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container align-items-center">
        <div className="row">
          <div className="col-lg-6 col-sm-12 text-center">
            <img src="/static/img/brand/about-me.svg" alt="aditya_septama" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h2 className="fw-bold text-lg-left text-sm-center">About Me</h2>
            <p className="text-primary pb-3">
              Bring our creativity to your work !
            </p>
            <p>
              Hello i’m from indonesian, i have a career in IT System and
              Development for more than 5 years, with that experience, I
              mastered web-based programming and UI/UX, i also familiar with
              data management with database. Now i’m focus on frontend engineer.
              With some of the experience i’m sure it can help to grow your
              busineess, really like challenges and also teamwork.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
