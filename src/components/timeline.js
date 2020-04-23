import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>
                          <a
                            href="https://www.fridmangallery.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Fridman Gallery{" "}
                          </a>
                          <span>March 2014 - March 2015</span>
                        </h3>
                        <p>
                          <h4>Gallery Assistant </h4>
                          <ul>
                            <li>
                              Handled incoming works of arts and prepared them
                              for exhibitions{" "}
                            </li>
                            <li>
                              Managed public and private gallery events,
                              including everything from sourcing vendors to
                              conceptualizing themes{" "}
                            </li>{" "}
                            <li>
                              Created marketing materials and maintained client
                              database{" "}
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>
                          <a
                            href="https://www.shapiroauctions.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Shapiro Auctions{" "}
                          </a>
                          <span>December 2015 - March 2017</span>
                        </h3>
                        <h4>Project Manager</h4>
                        <ul>
                          <li>
                            Created monthly online auctions for small-scaled
                            items on online auction platforms(Invaluable,
                            Paddle8, LiveAuctioneers) that brought 1m+ in profit{" "}
                          </li>
                          <li>
                            Monitored, reviewed and maintained a consistent
                            pipeline of inventory
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>
                          <a
                            href="https://www.selfmade.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            SelfMadeMe Inc.{" "}
                          </a>
                          <span>March 2017 - December 2018</span>
                        </h3>
                        <h4>Marketing Specialist and Operations Manager</h4>
                        <ul>
                          <li>
                            Worked closely with SelfMade e-commerce customers to
                            ensure the quality of their social presence,
                            marketing materials, website design, and features;
                          </li>{" "}
                          <li>Shopify integration</li>
                          <li>Managed HR, finance, and office needs</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>
                          Casa Gambe <span>March 2017 - December 2018</span>
                        </h3>
                        <h4>Founder</h4>
                        <ul>
                          <li>
                            Founded an e-commerce hosiery brand to appeal to
                            young American women
                          </li>
                          <li>
                            Researched and explored partnerships with production
                            facilities in the USA
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>
                          <a
                            href="https://flatironschool.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Flatiron School{" "}
                          </a>
                          <span>August 2019 - February 2020</span>
                        </h3>
                        <p>
                          <h4>Fullstack Web Development </h4>
                          An immersive, highly intensive web development program
                          that accepts around 6% of applicants and has a 93%
                          placement rate. Completed 15-week full-stack immersive
                          software engineering program. Focus on Ruby, Ruby on
                          Rails, Javascript, and React.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
