import React from 'react';
import { connect } from 'react-redux';
import Button from '../component/button';
import { fetch_kentico } from "../../action/fetch_kentico"

class PageKentico extends React.Component {

  coffeeImage (coffee) {
    if (coffee.image.value) {
      return (<img src={ coffee.image.value[0].url } width='200px' alt={coffee.image.value[0].url}/>);
    }
  }

  listCoffee () {
    if (this.props.kentico.data.items) {
      return (
        <ul>
          <h1>Kentico Coffees</h1>
          { this.props.kentico.data.items.map((coffee, index) => (this.coffeeItem(coffee, index))) }
        </ul>
      )
    }
  }

  coffeeItem (coffee, index) {
    return (<li key={index} >coffee : { coffee.productName.value }
      <p>{ this.coffeeImage(coffee) }</p>
    </li>);
  }

  loadButton (coffees) {
    if (!coffees) {
      return (
        <div>
          <h1>Load Kentico</h1>
          <p>
            <Button onClick={()=> {
                fetch_kentico();
              }
            }>Load from kentico</Button>
          </p>
        </div>
      )
    } 
  }

  render () {
    let coffees = this.listCoffee();

    return (
      <header className="App-header">
        { coffees }
        { this.loadButton (coffees) }
      </header>
    );
  }
}

const mapStateToProps = (state) => 
{
  return ({
    kentico : state.kentico
  })
}

export default connect(mapStateToProps)(PageKentico);
