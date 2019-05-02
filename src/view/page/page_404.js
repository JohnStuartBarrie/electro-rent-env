import React from 'react';
import Welcome from '../component/welcome.js';

import logo from '../logo.svg';
class PageTest1 extends React.Component{
  render () {
    return(
      <header className="App-header">
        <h1>Status 404</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
      </header>
    )
  }
}

export default PageTest1;
