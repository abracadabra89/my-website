import React from "react";
import "./App.css";
import About from "./components/about";
import Introduction from "./components/introduction";
import Sidebar from "./components/sidebar";


class App extends React.Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
