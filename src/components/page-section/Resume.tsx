import React from "react";

const Resume = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <p className="text-center text-primary">Education & Experience</p>
          <h2 className="text-center fw-bold">My Resume</h2>
          <p className="text-muted fs-14 text-center">
            Here are some of my experience and education during my career
          </p>
          <div className="vtimeline">
            <div className="timeline-wrapper timeline-wrapper-primary">
              <div className="avatar avatar-sm brround timeline-badge"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
