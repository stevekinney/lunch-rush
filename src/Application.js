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
    this.restaurantsRef = null;
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
      this.restaurantsRef = database.ref('restaurants');
      this.restaurantsRef.on('value', snapshot => {
        this.setState({ restaurants: snapshot.val() });
      });
    });
  }

  render() {
    const { user, restaurants } = this.state;

    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        { user
          ? <div>
              <NewRestaurant
                restaurantsRef={this.restaurantsRef}
              />
              {
                restaurants &&
                <Restaurants restaurants={restaurants} user={user} restaurantsRef={this.restaurantsRef}/>
              }
              <CurrentUser user={user} />
            </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default Application;
