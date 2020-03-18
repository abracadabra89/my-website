import React from 'react';
import "./App.css";
import About from './components/about'
import Introduction from "./components/introduction";


class App extends React.Component {
  render () {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
           <div id="colorlib-main">
  <Introduction></Introduction>
					<About></About>
          	</div>
      	</div>
      </div>
    );
  }
}


export default App;
