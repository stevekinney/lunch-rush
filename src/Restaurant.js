import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    return (
      <article className="Restaurant">
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func.isRequired,
  handleDeselect: PropTypes.func.isRequired
};

export default Restaurant;
