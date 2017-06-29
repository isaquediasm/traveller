import React, { PropTypes } from 'react';
import './OfferList.css'

const OfferList = ({ offers }) => (
  <div className='offers' >
    {offers.map((item, idx) => 
      <div key={item.id} className='offers__item'>
        <p>{item.title}</p>
      </div>
    )}
  </div>
)

OfferList.propTypes = {
  offers: PropTypes.array,
}

export default OfferList;
  