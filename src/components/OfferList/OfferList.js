import React, { PropTypes } from 'react';
import './OfferList.css'

const OfferList = ({ offers }) => (
  <div className='offers' >
    {offers.map((item, idx) => 
      <div className='offers__item' key={idx}>
        <p>{item.title}</p>
      </div>
    )}
  </div>
)

OfferList.propTypes = {
  offers: PropTypes.array,
}

export default OfferList;
