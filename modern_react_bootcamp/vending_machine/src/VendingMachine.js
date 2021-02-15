import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>Hello, I am a vending machine. What would you like to eat?</h1>
        <Link exact to='/soda'>Soda</Link>
        <Link exact to='/chips'>Chips</Link>
        <Link exact to='/fresh-sardines'>Sardines</Link>
      </div>
    )
  }
}

export default VendingMachine;