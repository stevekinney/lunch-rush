import React, { Component } from 'react';
import map from 'lodash/map';

class LunchOption extends Component {
  render () {
    const { name, votes } = this.props;

    return (
      <article className="LunchOption">
        <h3>{ name }</h3>
        <p>Total Votes: {votes && Object.keys(votes).length || 0 }</p>
        <ul>
          { votes && map(votes, (user, key) => <li key={key}>{ user }</li>) }
        </ul>
        <button onClick={this.props.onUpVote}>I'd go here</button>
        <button onClick={this.props.onDownVote}>No thanks</button>
      </article>
    );
  }
}

export default LunchOption;
