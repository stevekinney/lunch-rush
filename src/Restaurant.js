import React, { Component } from 'react';
import map from 'lodash/map';

class Restaurant extends Component {
  render () {
    const { name, votes, handleSelect, handleDeselect } = this.props;

    return (
      <article className="Restaurant">
        <h3>{ name }</h3>
        <p>Total Votes: {(votes && Object.keys(votes).length) || 0}</p>
        <ul>
          { votes && map(votes, (user, key) => <li key={key}>{ user }</li>) }
        </ul>
        <button onClick={handleSelect}>I'd go here</button>
        <button onClick={handleDeselect}>No thanks</button>
      </article>
    );
  }
}

export default Restaurant;
