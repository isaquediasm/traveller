import React, { PropTypes } from 'react';
import './Header.css'

const Header = (props) => (
  <div style={{ backgroundColor: props.color }} className="header">
    {props.children}
  </div>
)

Header.propTypes = {
  color: PropTypes.string,
}

export default Header;
