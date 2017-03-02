import React, { Component } from 'react';
import map from 'lodash/map';

class Restaurant extends Component {
  render () {
    const { name, votes, user, handleSelect, handleDeselect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article className="Restaurant">
        <h3 className="Restauarant--name">{ name }</h3>
        <p className="Restaurant--count">
          Total Votes: {(votes && Object.keys(votes).length) || 0}
        </p>
        <ul className="Restaurant--votes">
          { votes && map(votes, (user, key) => <li key={key}>{ user }</li>) }
        </ul>
        {
          userHasSelected
          ? <button onClick={handleDeselect}>Actually, no</button>
          : <button onClick={handleSelect}>I'd go here</button>
        }
      </article>
    );
  }
}

export default Restaurant;
