import React, { Component } from 'react';

export default class NewLunchOption extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  render() {
    const { lunchOptionsRef } = this.props;
    const { name } = this.state;

    return (
      <div
        className="LunchOption"
        style={{ padding: 25, margin: 25 }}
      >
        <input
          type="text"
          value={ name }
          placeholder="Name of Fine Establishment"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() => lunchOptionsRef.push({ name })}
        >
          Submit
        </button>
      </div>
    );
  }
}
