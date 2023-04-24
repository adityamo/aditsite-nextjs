import React from "react";

const Support = () => {
  return (
    <section className="bg-landing section">
      <div className="container">
        <div className="row">
          <p className="text-center text-primary">Support</p>
          <h2 className="text-center fw-bold">
            Support our project we use many platform
          </h2>
          <h2 className="text-center fw-bold">to successfull the project</h2>
          <div className="pricing-tabs pb-4">
            <div className="pri-tabs-heading text-center">
              <ul className="nav nav-price">
                <li className="">
                  <a href="" className="active show">
                    Development Tech
                  </a>
                </li>
                <li className="">
                  <a href="" className="text-primary">
                    Design tool
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane pb-0 active show">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src="/static/img/technology/nextjs.png"
                        alt="mobileapps"
                        className="mb-2"
                        width={80}
                        height={50}
                      />
                      <h4 className="fw-medium">Next Js</h4>
                      <p className="fs-12 text-muted text-center">
                        Next Js is support me to create beautiful frontend, this
                        frontend framework with react is the base project
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src="/static/img/technology/laravel.png"
                        alt="mobileapps"
                        className="mb-2"
                        width={50}
                        height={50}
                      />
                      <h4 className="fw-medium">Laravel</h4>
                      <p className="fs-12 text-muted text-center">
                        To support our project in backend side we use laravel,
                        why we choose laravel cause we expert in php on backend
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src="/static/img/technology/git.png"
                        alt="mobileapps"
                        className="mb-2"
                        width={50}
                        height={50}
                      />
                      <h4 className="fw-medium">Git</h4>
                      <p className="fs-12 text-muted text-center">
                        in Source Control we use git to provide my project, git
                        many help me to version control my project
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-8">
                  <div className="col-lg-4 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src="/static/img/technology/sql-server.png"
                        alt="mobileapps"
                        className="mb-2"
                        width={50}
                        height={50}
                      />
                      <h4 className="fw-medium">Sql Server</h4>
                      <p className="fs-12 text-muted text-center">
                        Database section we choose sql server cause in my
                        carrier sql help me to support database
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src="/static/img/technology/php.png"
                        alt="mobileapps"
                        className="mb-2"
                        width={80}
                        height={50}
                      />
                      <h4 className="fw-medium">PHP</h4>
                      <p className="fs-12 text-muted text-center">
                        Programing language PHP is so powerfull to help me in
                        backend process
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src="/static/img/technology/csharp.png"
                        alt="mobileapps"
                        className="mb-2"
                        width={50}
                        height={50}
                      />
                      <h4 className="fw-medium">C-Sharp</h4>
                      <p className="fs-12 text-muted text-center">
                        Programing language C# help me to create web service
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
