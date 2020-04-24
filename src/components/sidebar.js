import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/img_bg.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Anya Schechter</a>
              </h1>
              <span className="email">
                <i className="far fa-envelope"></i> anyaschechter@gmail.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#project" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#blog" data-nav-section="blog">
                     Blog
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anya-schechter-328069107/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/abracadabra89"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@anyaschechter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-medium"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    );
  }
}
