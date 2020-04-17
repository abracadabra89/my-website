import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  <p id="project"></p>
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                {" "}
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/appetite.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html"></a>
                      </h3>
                      <span>Appetite</span>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/abracadabra89/Final-Project-Frontend">
                            <i class="fab fa-github"></i>
                          </a>
                        </span>
                        <span>
                          <a href="https://www.youtube.com/watch?v=Zlhp2KI7QGM">
                            <i class="fab fa-youtube"></i>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-3.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html"></a>
                      </h3>
                      <span>Collage</span>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/abracadabra89/collage">
                            <i class="fab fa-github"></i>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              ></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}