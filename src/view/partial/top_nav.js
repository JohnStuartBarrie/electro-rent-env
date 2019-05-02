import React from 'react';
import { Link } from 'react-router-dom';
import './top_nav.scss';

class TopNav extends React.Component {
  render () {
    return(
      <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/fr/store'>Test Page</Link></li>
            <li><Link to='/nonexistanturl'>Broken Link</Link></li>
          </ul>
      </nav>
    )
  }
}

export default TopNav;
