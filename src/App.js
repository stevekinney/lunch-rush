import React, { Component } from 'react';
import { auth, database } from './firebase';
import UserInfo from './UserInfo';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';

class App extends Component {
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
      this.restaurantsRef = database.ref('lunch-options');
      this.restaurantsRef.on('value', snapshot => {
        this.setState({ restaurants: snapshot.val() });
      });
    });
  }

  render() {
    const { user, restaurants } = this.state;

    return (
      <div className="App">
        <div className="App--header">
          <h2>Ask the Audience</h2>
        </div>
        { user
          ? <div>
              <NewRestaurant
                restaurantsRef={this.restaurantsRef}
              />
              {
                restaurants &&
                <Restaurants restaurants={restaurants} user={user} restaurantsRef={this.restaurantsRef}/>
              }
              <UserInfo user={user} />
            </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default App;
