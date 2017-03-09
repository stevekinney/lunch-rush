import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className="Restaurants">
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
