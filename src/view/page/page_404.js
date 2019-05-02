import React from 'react';
import InfoText from '../component/info_text';

import logo from '../logo.svg';
class Page404 extends React.Component{
  render () {
    return(
      <header className="App-header">
        <h1>Status 404</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <InfoText>Page No Found</InfoText>
      </header>
    )
  }
}

export default Page404;
