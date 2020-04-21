import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Read</span>
                <h2 className="colorlib-heading">My Recent Blog Posts</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a href="#blog" className="blog-img"></a>
                  <img
                    src="images/vscode.png"
                    className="img-responsive"
                    alt="HTML5 Bootstrap Template by colorlib.com"
                  />

                  <div className="desc">
                    <span>
                      <small>November 25, 2019 </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 3
                      </small>
                    </span>
                    <h3>
                      <a
                        href="https://medium.com/@anyaschechter/react-extensions-for-vs-707322195ee"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React Extensions for VS Code
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img">
                    <img
                      src="images/blog2.jpg"
                      className="img-responsive"
                      alt="HTML5 Bootstrap Template by colorlib.com"
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <small>November 1, 2019 </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 2
                      </small>
                    </span>
                    <h3>
                      <a
                        href="https://medium.com/@anyaschechter/a-remedy-for-novice-coders-who-want-to-get-unstuck-a394f5668ab7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        A Remedy for Novice Coders Who Want To Get UnStuck
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img">
                    <img
                      src="images/blog4.png"
                      className="img-responsive"
                      alt="HTML5 Bootstrap Template by colorlib.com"
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <small>October 23, 2019 </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 5
                      </small>
                    </span>
                    <h3>
                      <a
                        href="https://medium.com/@anyaschechter/better-error-better-life-65db25fff414"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Better Error/Better Life
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
