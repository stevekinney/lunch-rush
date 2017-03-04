import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      restaurants: null,
      userRestaurants: null
    };

    this.restaurantsRef = database.ref('restaurants');
    this.usersRef = database.ref('users');
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });

      this.usersRef.child(user.uid).update({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      });

      this.restaurantsRef.on('value', snapshot => {
        this.setState({ restaurants: snapshot.val() });
      });

      this.usersRef.child(user.uid).child('restaurants').on('value', snapshot => {
        this.setState({ userRestaurants: snapshot.val() });
      });
    });
  }

  render() {
    const { user, restaurants, userRestaurants } = this.state;

    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        { user
          ? <div>
              <NewRestaurant
                restaurantsRef={this.restaurantsRef}
                usersRef={this.usersRef}
              />
              {
                restaurants &&
                <Restaurants
                  restaurants={restaurants}
                  user={user}
                  restaurantsRef={this.restaurantsRef}
                  usersRef={this.usersRef}
                />
              }
              <CurrentUser user={user} userRestaurants={userRestaurants} />
            </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default Application;
