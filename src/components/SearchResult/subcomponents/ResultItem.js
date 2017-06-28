import React, { PropTypes } from 'react';

const ResultItem = ({ id, value, valueModifier, onSelect }) => (
  <li
    key={value} 
    dangerouslySetInnerHTML={valueModifier}
    onClick={() => onSelect({ id, value })}
  />
)

export default ResultItem;
