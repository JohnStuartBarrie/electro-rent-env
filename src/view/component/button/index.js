import React from 'react';

class Button extends React.Component{
  render () {
    return(
      <button onClick={this.props.onClick} className="secondary button">

        { this.props.children }
      </button>
    )
  }
}

export default Button;
