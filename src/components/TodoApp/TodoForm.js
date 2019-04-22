import React, { Component } from 'react'
import { throws } from 'assert';
// import { Text, View } from 'react-native'

export default class TodoForm extends Component {

    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : [event.target.value]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // submit a form
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
          name='text'
          value={this.state.text}
          onChange={this.handleChange}
          placeholder='todo...'
          />
      </form>
    )
  }
}

