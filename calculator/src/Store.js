import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Store extends Component {
  constructor(props) {
    super({props})
    this.state = {}
  }

  getState() {
    const s = {}
    return Object.Assign(s, this.state)
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

// Store.propTypes = {
//   rootReducer: 
// };

export default Store;