import React, { Component } from 'react';
import { auth } from './firebase';
import UserInfo from './UserInfo';
import SignIn from './SignIn';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Ask the Audience</h2>
        </div>
        { user ? <UserInfo user={user} /> : <SignIn />}
      </div>
    );
  }
}

export default App;
