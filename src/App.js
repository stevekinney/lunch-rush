import React, { Component } from 'react';
import { auth, database } from './firebase';
import UserInfo from './UserInfo';
import SignIn from './SignIn';
import NewLunchOption from './NewLunchOption';
import LunchOption from './LunchOption';
import map from 'lodash/map';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.lunchOptionsRef = null;
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
      this.lunchOptionsRef = database.ref('lunch-options');
      this.lunchOptionsRef.on('value', snapshot => {
        this.setState({ lunchOptions: snapshot.val() });
      });
    });
  }

  render() {
    const { user, lunchOptions } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Ask the Audience</h2>
        </div>
        { user
          ? <div>
              <NewLunchOption
                lunchOptionsRef={this.lunchOptionsRef}
              />
              <div>
                {
                  lunchOptions &&
                  map(lunchOptions, (option, key) => <LunchOption key={key} {...option} onUpVote={() => this.lunchOptionsRef.child(key).child('votes').child(user.uid).set(user.displayName)} onDownVote={() => this.lunchOptionsRef.child(key).child('votes').child(user.uid).remove()}/>)
                }
              </div>
              <UserInfo user={user} />
            </div>
          : <SignIn />
        }
      </div>
    );
  }
}

export default App;
