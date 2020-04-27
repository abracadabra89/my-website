import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a recent graduate of Flatiron’s Web Development
                        Immersive Program. Prior to this, I worked in the arts
                        and startups. I wanted a career with more rigor, problem
                        solving, and impact. Coding is now my passion, and I
                        cannot wait to start building with a team of engineers.
                        Currently, I do web development projects to pay the
                        bills, but I have more to offer and more to learn. For this
                        reason, I’m looking for companies with inspiring
                        missions, welcoming teams, and hard problems to solve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Areas of expertise</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <p>
                      Experience building web applications using front and back
                      end frameworks (React, React-Redux, Ruby on Rails, MySql,
                      REST Endpoints).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <p>
                      Completed multiple projects solidifying the fundamentals
                      of object-oriented programming, while writing clean and
                      scalable code.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <p>
                      Comfortable working with RESTful API's and use of version
                      control (git). Strong knowledge of HTML, CSS, JavaScript,
                      React, Redux, Rails.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
