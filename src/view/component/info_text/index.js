import React from 'react';

class InfoText extends React.Component{
  render () {
    return(
      <div >
        Digging Electro Rent
        <p>
          { this.props.children }
        </p>
      </div>
    )
  }
}

export default InfoText;
