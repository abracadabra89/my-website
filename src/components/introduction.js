import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/intro1.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div
                    className="row"
                    style={{
                      alignItems: "stretch",
                      justifyContent: "center",
                    }}
                  >
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi!<br></br> I'm Anya
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://drive.google.com/file/d/1vzb1Uo7CHgIvnqqKQs1wjUgFpajUTqua/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="glyphicon glyphicon-download"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/intro2.jpg)" }}>
                <div className="overlay"> </div>
                <div className="container-fluid">
                  <div
                    className="row"
                    style={{
                      alignItems: "stretch",
                      justifyContent: "center",
                    }}
                  >
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I love building <br></br>things
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="#project"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Recent projects
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
