import React from 'react';
import Button from '../component/button.js';

class PageTest2 extends React.Component{
  render () {
    return(
      <header className="App-header">
        <h1>Page2</h1>
        <p>
          <Button onClick={()=> alert('this is a fake button')}>Alert Button</Button>
        </p>
      </header>
    )
  }
}

export default PageTest2;
