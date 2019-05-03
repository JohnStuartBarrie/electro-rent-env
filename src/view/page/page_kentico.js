import React from 'react';
import { connect } from 'react-redux';
import Button from '../component/button';
import { fetch_kentico } from "../../action/fetch_kentico"

class PageKentico extends React.Component {
  componentWillReceiveProps(state) {
    console.log(state)
  }
  render () {
    return(
      <header className="App-header">
        <h1>Load Kentico</h1>
        <p>
          <Button onClick={()=> {
              fetch_kentico();
            }
          }>Load from kentico</Button>
        </p>
      </header>
    )
  }
}

const mapStateToProps = function(state) {
  return state
}

export default connect(mapStateToProps, { fetch_kentico })(PageKentico);
