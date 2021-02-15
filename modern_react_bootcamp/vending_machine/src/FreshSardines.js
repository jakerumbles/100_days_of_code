import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class FreshSardines extends Component {
  render() {
    return (
      <div>
        <h1>FRESH SARDINES</h1>
        <Link exact to='/'>Go Back</Link>
      </div>
    )
  }
}

export default FreshSardines;