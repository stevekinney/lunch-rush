import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleSelect(key) {
    const { restaurantsRef, user } = this.props;

    restaurantsRef.child(key)
       .child('votes')
       .child(user.uid)
       .set(user.displayName);
  }

  handleDeselect(key) {
    const { restaurantsRef, user } = this.props;

    restaurantsRef.child(key)
       .child('votes')
       .child(user.uid)
       .remove();
  }

  render () {
    const { restaurants, user } = this.props;

    return (
      <section className="Restaurants">
        { map(restaurants, (restauarant, key) => (
          <Restaurant
            key={key}
            user={user}
            {...restauarant}
            handleSelect={() => this.handleSelect(key)}
            handleDeselect={() => this.handleDeselect(key)}
          />
        )) }
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object.isRequired,
  restaurantsRef: PropTypes.object.isRequired,
  restaurants: PropTypes.object
};

export default Restaurants;
