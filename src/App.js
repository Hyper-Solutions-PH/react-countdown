import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./logo.svg";
// import github from "./github.png";

class App extends Component {
  render() {
    // const currentDate = new Date();
    // const year =
    //   currentDate.getMonth() === 11 && currentDate.getDate() > 23
    //     ? currentDate.getFullYear() + 1
    //     : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h2>React Countdown</h2> */}

          {/* <a
            href="https://github.com/kristinbaumann/react-countdown"
            target="_blank"
          >
            <img src={github} alt="github" className="githubIcon" />
            <span>View on Github</span>
          </a> */}
        </div>

        <h3 className="title">
          A cost effective systems coming soon on the 9nth of November 2020 UTC
          time):
        </h3>
        <Countdown date={`2020-11-09T00:00:00`} />
      </div>
    );
  }
}

export default App;
