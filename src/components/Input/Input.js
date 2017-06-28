import React from 'react';
import './Input.css'

const Input = (props) => (
  <div className="input">
    <input type="text" {...props} />
  </div>
)

export default Input;
