import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const { name, votes, user, handleSelect, handleDeselect } = this.props;
    const userHasSelected = votes && Object.keys(votes).includes(user.uid);

    return (
      <article className="Restaurant">
        <h2 className="Restaurant--name">{ name }</h2>
        <p className="Restaurant--count">
          Total Votes: {(votes && Object.keys(votes).length) || 0}
        </p>
        <ul className="Restaurant--votes">
          { votes && map(votes, (user, key) => <li key={key}>{ user }</li>) }
        </ul>
        {
          userHasSelected
          ? <button onClick={handleDeselect} className="block destructive">Actually, no</button>
          : <button onClick={handleSelect} className="block">I'd go here</button>
        }
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
