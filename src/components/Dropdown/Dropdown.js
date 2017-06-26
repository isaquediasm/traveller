import React, { Component, PropTypes } from 'react';
import './Dropdown.css'

class Dropdown extends Component {
  render() {
    const { items } = this.props

    console.log(items)
    return (
      <div className="Dropdown">
        DROPDOWN
      </div>
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.array
}

export default Dropdown;
