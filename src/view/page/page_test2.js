import React from 'react';
import Button from '../component/button';
import { Link } from 'react-router-dom';
class PageTest2 extends React.Component {
  
  render () {
    const lang = this.props.location.pathname.split('/')[1];
    return(
      <header className="App-header">
        <h1>Template</h1>
        <p>Change Language</p>
        <p><Link to="/fr/store">fr</Link> <Link to="/en/store">en</Link></p>
        <p>( actually in { lang })</p>
        <p>
          <Button onClick={()=> alert('THis page should be translated in '+ lang)}>Alert Button</Button>
        </p>
      </header>
    )
  }
}

export default PageTest2;
