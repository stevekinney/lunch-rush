import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key) {

  }

  handleDeselect(key) {

  }

  render () {
    const { restaurants } = this.props;

    return (
      <section className="Restaurants">
      {
        map(restaurants, (restaurant, key) => {
          return <Restaurant
                  key={key}
                  {...restaurant}
                  />;
        }) 
      }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
