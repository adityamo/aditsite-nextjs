import React from "react";
import style from "../../styles/home/timeline.module.css";

type ResumeData = {
  id: any;
  title: string;
  company: string;
  year: string;
  description: string;
};

interface Props {
  data: ResumeData[];
}

const Resume = ({ data }: Props) => {
  const karirDesc = [...data].sort((a, b) => b.id - a.id);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <p className="text-center text-primary">Education & Experience</p>
          <h2 className="text-center fw-bold">My Resume</h2>
          <p className="text-muted fs-14 text-center">
            Here are some of my experience and education during my career
          </p>
          <div className={style.timeline}>
            {karirDesc.map((data: any, i: React.Key) => {
              return (
                <React.Fragment key={i}>
                  <div
                    className={`${style["timeline-wrapper"]} ${
                      data.id % 2 === 1 ? style["timeline-inverted"] : ""
                    }`}
                  >
                    <div className={style["timeline-badge"]}>
                      <span className={style["timeline-icon"]}>
                        <i className="fa fa-circle-o text-primary"></i>
                      </span>
                    </div>
                    <div className={`${style["timeline-panel"]}`}>
                      <div className="timeline-heading text-right">
                        <h4 className="timeline-title fw-bold">{data.title}</h4>
                        <p className="fw-reguler text-muted fs-14">
                          {data.company}
                        </p>
                        <span className={style["timeline-year"]}>
                          {data.year}
                        </span>
                      </div>
                      <div className={style["timeline-body"]}>
                        <p className="text-muted">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
