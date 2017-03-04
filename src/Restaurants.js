import React, { Component, PropTypes } from 'react';
import { database } from './firebase';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleSelect(key, name) {
    const { restaurantsRef, usersRef, user } = this.props;

    const restaurantVotesRef = restaurantsRef.child(key)
                                             .child('votes')
                                             .child(user.uid);

    const userVotesRef = usersRef.child(user.uid).child('restaurants').child(key);

    restaurantsRef.root.update({
      [restaurantVotesRef.path]: user.displayName,
      [userVotesRef.path]: name
    });
  }

  handleDeselect(key) {
    const { restaurantsRef, user, usersRef } = this.props;

    const restaurantVotesRef = restaurantsRef.child(key)
                                             .child('votes')
                                             .child(user.uid);

    const userVotesRef = usersRef.child(user.uid).child('restaurants').child(key);

    database.ref().update({
      [restaurantVotesRef.path]: null,
      [userVotesRef.path]: null
    });
  }

  render () {
    const { restaurants, user } = this.props;

    return (
      <section className="Restaurants">
        { map(restaurants, (restaurant, key) => (
          <Restaurant
            key={key}
            user={user}
            {...restaurant}
            handleSelect={() => this.handleSelect(key, restaurant.name)}
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
  usersRef: PropTypes.object.isRequired,
  restaurants: PropTypes.object
};

export default Restaurants;
