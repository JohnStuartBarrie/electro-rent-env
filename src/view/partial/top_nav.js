import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/application/components/component.top_nav.scss';

class TopNav extends React.Component {
  render () {
    return(
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/kentico'>Kentico Coffee</Link></li>
          <li><Link to='/nonexistanturl'>Broken Link</Link></li>
          <li><Link to='/fr/store'>Test Page</Link></li>
        </ul>
      </nav>
    )
  }
}

export default TopNav;
