import React, { Component } from 'react';

// Components
import LogIn from "./LogIn";
import SignUp from "./SignUp";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <LogIn />
        <SignUp />
      </React.Fragment>
    );
  }
}

export default App;
